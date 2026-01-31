import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// GET /api/podcasts/[slug] - Get single podcast by slug
export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const supabase = await createClient();

        const { data: podcast, error } = await supabase
            .from('podcasts')
            .select('*')
            .eq('slug', slug)
            .eq('is_published', true)
            .single();

        if (error || !podcast) {
            return NextResponse.json(
                { success: false, message: 'Podcast non trovato' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: podcast
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { success: false, message: 'Errore interno del server' },
            { status: 500 }
        );
    }
}

// PUT /api/podcasts/[slug] - Update podcast
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const supabase = await createClient();

        // Check if user is authenticated
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json(
                { success: false, message: 'Non autorizzato' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { title, description, content, duration, audio_url, cover_url, is_featured, is_published } = body;

        const updateData: Record<string, unknown> = {
            updated_at: new Date().toISOString()
        };

        if (title !== undefined) updateData.title = title;
        if (description !== undefined) updateData.description = description;
        if (content !== undefined) updateData.body = content;
        if (duration !== undefined) updateData.duration = duration;
        if (audio_url !== undefined) updateData.audio_url = audio_url;
        if (cover_url !== undefined) updateData.cover_url = cover_url;
        if (is_featured !== undefined) updateData.is_featured = is_featured;
        if (is_published !== undefined) {
            updateData.is_published = is_published;
            if (is_published) {
                updateData.published_at = new Date().toISOString();
            }
        }

        const { data: podcast, error } = await supabase
            .from('podcasts')
            .update(updateData)
            .eq('slug', slug)
            .select()
            .single();

        if (error) {
            console.error('Error updating podcast:', error);
            return NextResponse.json(
                { success: false, message: 'Errore nell\'aggiornamento del podcast' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            data: podcast
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { success: false, message: 'Errore interno del server' },
            { status: 500 }
        );
    }
}

// DELETE /api/podcasts/[slug] - Delete podcast
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const supabase = await createClient();

        // Check if user is authenticated
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json(
                { success: false, message: 'Non autorizzato' },
                { status: 401 }
            );
        }

        const { error } = await supabase
            .from('podcasts')
            .delete()
            .eq('slug', slug);

        if (error) {
            console.error('Error deleting podcast:', error);
            return NextResponse.json(
                { success: false, message: 'Errore nell\'eliminazione del podcast' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Podcast eliminato con successo'
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { success: false, message: 'Errore interno del server' },
            { status: 500 }
        );
    }
}
