import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const supabase = await createClient();

        // Check authentication
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ error: 'Non autenticato' }, { status: 401 });
        }

        // Check if user already voted
        const { data: existingVote } = await supabase
            .from('proposal_votes')
            .select('id')
            .eq('proposal_id', id)
            .eq('user_id', user.id)
            .single();

        if (existingVote) {
            return NextResponse.json(
                { error: 'Hai già votato questa proposta' },
                { status: 400 }
            );
        }

        // Insert vote
        const { error: voteError } = await supabase
            .from('proposal_votes')
            .insert({
                proposal_id: parseInt(id),
                user_id: user.id,
            });

        if (voteError) {
            console.error('Vote insert error:', voteError);
            return NextResponse.json(
                { error: 'Errore nella registrazione del voto' },
                { status: 500 }
            );
        }

        // Get updated vote count
        const { count } = await supabase
            .from('proposal_votes')
            .select('*', { count: 'exact', head: true })
            .eq('proposal_id', id);

        return NextResponse.json({
            success: true,
            voteCount: count || 0,
        });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Errore del server' },
            { status: 500 }
        );
    }
}

// DELETE - Remove vote
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const supabase = await createClient();

        // Check authentication
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ error: 'Non autenticato' }, { status: 401 });
        }

        // Delete vote
        const { error: deleteError } = await supabase
            .from('proposal_votes')
            .delete()
            .eq('proposal_id', id)
            .eq('user_id', user.id);

        if (deleteError) {
            console.error('Vote delete error:', deleteError);
            return NextResponse.json(
                { error: 'Errore nella rimozione del voto' },
                { status: 500 }
            );
        }

        // Get updated vote count
        const { count } = await supabase
            .from('proposal_votes')
            .select('*', { count: 'exact', head: true })
            .eq('proposal_id', id);

        return NextResponse.json({
            success: true,
            voteCount: count || 0,
        });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Errore del server' },
            { status: 500 }
        );
    }
}
