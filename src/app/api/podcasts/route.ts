import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export interface Podcast {
    id: number;
    slug: string;
    title: string;
    description: string | null;
    body: string | null;
    duration: string | null;
    audio_url: string | null;
    cover_url: string | null;
    is_featured: boolean;
    is_published: boolean;
    published_at: string | null;
    created_at: string;
    updated_at: string;
}

// GET /api/podcasts - List all published podcasts
export async function GET() {
    try {
        const supabase = await createClient();

        const { data: podcasts, error } = await supabase
            .from('podcasts')
            .select('*')
            .eq('is_published', true)
            .order('published_at', { ascending: false });

        if (error) {
            console.error('Error fetching podcasts:', error);
            return NextResponse.json(
                { success: false, message: 'Errore nel caricamento dei podcast' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            data: podcasts
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { success: false, message: 'Errore interno del server' },
            { status: 500 }
        );
    }
}

// POST /api/podcasts - Create a new podcast (admin only - future implementation)
export async function POST(request: Request) {
    try {
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
        const { title, slug, description, content, duration, audio_url, cover_url, is_featured, is_published } = body;

        if (!title || !slug) {
            return NextResponse.json(
                { success: false, message: 'Titolo e slug sono obbligatori' },
                { status: 400 }
            );
        }

        const { data: podcast, error } = await supabase
            .from('podcasts')
            .insert({
                title,
                slug,
                description,
                body: content,
                duration,
                audio_url,
                cover_url,
                is_featured: is_featured || false,
                is_published: is_published || false,
                published_at: is_published ? new Date().toISOString() : null
            })
            .select()
            .single();

        if (error) {
            console.error('Error creating podcast:', error);
            return NextResponse.json(
                { success: false, message: 'Errore nella creazione del podcast' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            data: podcast
        }, { status: 201 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { success: false, message: 'Errore interno del server' },
            { status: 500 }
        );
    }
}
