

import React from 'react';
import { createClient } from '@/lib/supabase/server';
import ThemesGrid, { ThemeWithCount } from '@/components/ThemesGrid';

// Determine if we need to force dynamic rendering
// Since this page depends on DB data that changes, yes.
export const dynamic = 'force-dynamic';

export default async function TemiPage() {
    const supabase = await createClient();

    // Fetch themes
    const { data: themesData, error } = await supabase
        .from('themes')
        .select('*')
        .order('id');

    if (error) {
        console.error("Error fetching themes:", error);
        // Fallback or error UI? For now just empty array or throw
        throw new Error("Errore nel caricamento dei temi");
    }

    // Fetch proposal counts for each theme
    // We can do this efficiently with a separate query or join.
    // Let's get all counts grouped by theme_id from proposal_vote_counts view? 
    // Wait, the view created in schema.sql is `public.proposal_vote_counts` which counts VOTES per PROPOSAL.
    // We want PROPOSALS per THEME.

    // Let's rely on raw count for now.
    // `supabase.from('proposals').select('theme_id', { count: 'exact', head: true })` doesn't group.

    // We can iterate and count (not efficient but fine for < 100 themes)
    // Or we can use `.select('*, proposals(count)')` if we set up the relation in Supabase client type (it is usually auto-detected).
    // Let's try the relation approach.



    // To be safe about the count structure from Supabase join:
    // It returns `proposals: { count: number }`? No.
    // It usually returns the rows. 
    // To get just the count of a relation: `.select('*, proposals(count)')` returns `proposals: [ { count: 3 } ]` if using a View or correct setup? 
    // Actually standard postgrest syntax for count relation is `proposals(count)`.

    // Let's try a safer manual count approach to avoid debugging the ambiguous `count` return type blindly.
    // Fetch all proposals that are approved.

    const { data: allProposals } = await supabase
        .from('proposals')
        .select('theme_id')
        .eq('is_approved', true);

    const counts: Record<number, number> = {};
    allProposals?.forEach(p => {
        counts[p.theme_id] = (counts[p.theme_id] || 0) + 1;
    });

    const formattedThemes: ThemeWithCount[] = (themesData || []).map(t => ({
        id: t.id,
        slug: t.slug,
        title: t.title,
        description: t.description,
        icon: t.icon,
        proposalCount: counts[t.id] || 0
    }));

    return (
        <div className="page-content">
            <section className="page-header">
                <div className="container">
                    <span className="badge">Politica Attiva</span>
                    <h1>Temi & Proposte</h1>
                    <p className="subtitle">
                        Studiamo le carte e le traduciamo. Dalla burocrazia al mondo reale, perché capire è il primo passo per cambiare le cose.
                    </p>
                </div>
            </section>

            <section className="themes-list-section bg-secondary">
                <div className="container">
                    <ThemesGrid themes={formattedThemes} />
                </div>
            </section>

            <section className="active-politics-info">
                <div className="container narrow-container text-center">
                    <h2 className="serif-italic">Come funziona la nostra piattaforma</h2>
                    <p className="mb-8">
                        La nostra scatola degli attrezzi. Qui decodifichiamo il linguaggio incomprensibile delle istituzioni e trasformiamo i numeri in informazioni chiare.
                    </p>
                    <div className="steps-grid">
                        <div className="step-item">
                            <span className="step-number">1</span>
                            <h4>Analisi</h4>
                            <p>Partiamo dai documenti e dai fatti per inquadrare il problema.</p>
                        </div>
                        <div className="step-item">
                            <span className="step-number">2</span>
                            <h4>Proposta</h4>
                            <p>Elaboriamo soluzioni basate sull&apos;onestà intellettuale e la fattibilità.</p>
                        </div>
                        <div className="step-item">
                            <span className="step-number">3</span>
                            <h4>Supporto</h4>
                            <p>I cittadini esprimono la propria priorità supportando le idee più valide.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
