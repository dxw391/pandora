import { themes } from 'content';
import MDXRenderer from '@/components/MDXRenderer';
import { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ThumbsUp } from 'lucide-react';
import CreateProposalButton from '@/components/CreateProposalButton';

interface ThemeDetailPageProps {
    params: Promise<{ theme: string }>;
}

export async function generateMetadata({ params }: ThemeDetailPageProps): Promise<Metadata> {
    const { theme: slug } = await params;
    const theme = themes.find((t) => t.slug === slug);

    if (!theme) {
        return {};
    }

    return {
        title: `${theme.title} — Temi Pandora`,
        description: theme.description,
        openGraph: {
            title: theme.title,
            description: theme.description || '',
            url: `https://pandora.it/temi/${theme.slug}`,
        }
    };
}

export default async function ThemeDetailPage({ params }: ThemeDetailPageProps) {
    const { theme: slug } = await params;
    const supabase = await createClient();

    // Get theme from Velite (for content)
    const theme = themes.find((t) => t.slug === slug);

    if (!theme) {
        notFound();
    }

    // Get proposals from database
    const { data: themeProposals } = await supabase
        .from('proposals')
        .select(`
            *,
            themes:theme_id!inner (slug)
        `)
        .eq('themes.slug', slug)
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

    // Get vote counts for each proposal
    const proposalsWithVotes = await Promise.all(
        (themeProposals || []).map(async (proposal: any) => {
            const { count } = await supabase
                .from('proposal_votes')
                .select('*', { count: 'exact', head: true })
                .eq('proposal_id', proposal.id);

            return { ...proposal, voteCount: count || 0 };
        })
    );

    return (
        <div className="page-content">
            <section className="page-header">
                <div className="container">
                    <Link href="/temi" className="link-arrow mb-8 inline-flex items-center gap-2 text-sm">
                        <ArrowLeft size={16} /> Tutti i Temi
                    </Link>
                    <div>
                        <span className="badge">Tavolo di Lavoro</span>
                        <h1>{theme.title}</h1>
                        <p className="subtitle">{theme.description}</p>
                    </div>
                </div>
            </section>

            <section className="bg-secondary">
                <div className="container">
                    <div className="about-grid">
                        <div className="theme-intro">
                            <div className="prose">
                                <MDXRenderer code={theme.body} />
                            </div>
                        </div>
                        <div className="theme-meta-sidebar">
                            <div className="stat-card">
                                <h3>Stato del Tema</h3>
                                <p>In questa sezione raccogliamo tutte le segnalazioni e le proposte relative a <strong>{theme.title}</strong>.</p>
                                <div className="mt-4">
                                    <span className="stats-badge">{proposalsWithVotes.length} Proposte Attive</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="proposte" className="proposals-list-section">
                <div className="container">
                    <div className="section-header">
                        <div>
                            <h2>Proposte Civiche</h2>
                            <p>Queste sono le azioni concrete che stiamo analizzando o promuovendo.</p>
                        </div>
                        <CreateProposalButton themeSlug={slug} className="btn-primary">
                            Proponi Iniziativa
                        </CreateProposalButton>
                    </div>

                    <div className="proposals-grid">
                        {proposalsWithVotes.map((proposal: any) => (
                            <article
                                key={proposal.id}
                                className="proposal-card"
                            >
                                <div className="proposal-status-header">
                                    <span className={`status-dot status-${proposal.status}`}></span>
                                    <span className="status-text">{proposal.status.toUpperCase()}</span>
                                    <span className="proposal-supports">
                                        <ThumbsUp size={14} /> {proposal.voteCount}
                                    </span>
                                </div>
                                <h3 className="proposal-title">{proposal.title}</h3>
                                <p className="proposal-excerpt">{proposal.description || "In fase di analisi..."}</p>
                                <Link href={`/temi/${slug}/${proposal.slug}`} className="link-arrow mt-4">
                                    Dettaglio Proposta <ArrowRight size={16} />
                                </Link>
                            </article>
                        ))}
                        {proposalsWithVotes.length === 0 && (
                            <div className="text-center w-full py-20">
                                <p className="text-secondary italic">Non ci sono ancora proposte per questo tema.</p>
                                <CreateProposalButton themeSlug={slug} className="btn-primary mt-4 inline-block">
                                    Proponi la Prima Iniziativa
                                </CreateProposalButton>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
