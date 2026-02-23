import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const supabase = await createClient();

        // Check authentication
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ error: 'Non autenticato' }, { status: 401 });
        }

        const body = await request.json();
        const { theme_id, title, description, body: proposalBody, pros, cons } = body;

        // Validate required fields
        if (!theme_id || !title || !proposalBody) {
            return NextResponse.json(
                { error: 'Campi obbligatori mancanti' },
                { status: 400 }
            );
        }

        // Generate slug from title
        const slug = title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');

        // Insert proposal
        const { data: proposal, error: proposalError } = await supabase
            .from('proposals')
            .insert({
                slug,
                theme_id,
                author_id: user.id,
                title,
                description,
                body: proposalBody,
                status: 'idea',
                is_approved: false, // Requires moderation
            })
            .select()
            .single();

        if (proposalError) {
            console.error('Proposal insert error:', proposalError);
            return NextResponse.json(
                { error: 'Errore nella creazione della proposta' },
                { status: 500 }
            );
        }

        // Insert pros and cons if provided
        if (pros && pros.length > 0) {
            const prosData = pros.map((content: string) => ({
                proposal_id: proposal.id,
                type: 'pro',
                content,
            }));

            await supabase.from('proposal_arguments').insert(prosData);
        }

        if (cons && cons.length > 0) {
            const consData = cons.map((content: string) => ({
                proposal_id: proposal.id,
                type: 'con',
                content,
            }));

            await supabase.from('proposal_arguments').insert(consData);
        }

        return NextResponse.json({
            success: true,
            proposal,
            message: 'Proposta creata! Sarà visibile dopo la moderazione.',
        });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Errore del server' },
            { status: 500 }
        );
    }
}

// GET all proposals (approved only for non-authenticated users)
export async function GET(request: Request) {
    try {
        const supabase = await createClient();
        const { searchParams } = new URL(request.url);
        const themeId = searchParams.get('theme_id');

        const { data: { user } } = await supabase.auth.getUser();

        let query = supabase
            .from('proposals')
            .select(`
        *,
        themes:theme_id (slug, title),
        proposal_arguments (type, content),
        proposal_votes (count)
      `);

        // Filter by theme if specified
        if (themeId) {
            query = query.eq('theme_id', themeId);
        }

        // Show only approved proposals for non-authenticated users
        if (!user) {
            query = query.eq('is_approved', true);
        } else {
            // Show approved + own proposals for authenticated users
            query = query.or(`is_approved.eq.true,author_id.eq.${user.id}`);
        }

        const { data: proposals, error } = await query.order('created_at', { ascending: false });

        if (error) {
            console.error('Proposals fetch error:', error);
            return NextResponse.json({ error: 'Errore nel caricamento' }, { status: 500 });
        }

        return NextResponse.json({ proposals });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json({ error: 'Errore del server' }, { status: 500 });
    }
}
