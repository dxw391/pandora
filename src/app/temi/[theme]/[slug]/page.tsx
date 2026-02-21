import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, XCircle, Calendar, Info } from 'lucide-react';
import VoteButton from '@/components/VoteButton';

import { Metadata } from 'next';

interface ProposalArgument {
    type: 'pro' | 'con';
    content: string;
}

interface ProposalDetailPageProps {
    params: Promise<{ theme: string; slug: string }>;
}

export async function generateMetadata({ params }: ProposalDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const supabase = await createClient();

    const { data: proposal } = await supabase
        .from('proposals')
        .select('title, description')
        .eq('slug', slug)
        .single();

    if (!proposal) {
        return {};
    }

    return {
        title: `${proposal.title} — Proposte Pandora`,
        description: proposal.description,
        openGraph: {
            title: proposal.title,
            description: proposal.description || '',
            type: 'article',
        }
    };
}

export default async function ProposalDetailPage({ params }: ProposalDetailPageProps) {
    const { theme: themeSlug, slug } = await params;
    const supabase = await createClient();

    // Get proposal from database
    const { data: proposal, error } = await supabase
        .from('proposals')
        .select(`
            *,
            themes:theme_id (slug, title),
            proposal_arguments (type, content)
        `)
        .eq('slug', slug)
        .single();

    if (error || !proposal) {
        notFound();
    }

    // Get vote count
    const { count: voteCount } = await supabase
        .from('proposal_votes')
        .select('*', { count: 'exact', head: true })
        .eq('proposal_id', proposal.id);

    // Separate pros and cons
    const pros = proposal.proposal_arguments?.filter((arg: ProposalArgument) => arg.type === 'pro').map((arg: ProposalArgument) => arg.content) || [];
    const cons = proposal.proposal_arguments?.filter((arg: ProposalArgument) => arg.type === 'con').map((arg: ProposalArgument) => arg.content) || [];

    return (
        <div className="page-content">
            <section className="page-header pb-0">
                <div className="container">
                    <Link href={`/temi/${themeSlug}`} className="link-arrow mb-8 inline-flex items-center gap-2 text-sm">
                        <ArrowLeft size={16} /> Torna a {proposal.themes.title}
                    </Link>
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className={`status-badge-large status-${proposal.status}`}>
                                {proposal.status.toUpperCase()}
                            </span>
                            <span className="text-secondary text-sm">
                                <Calendar size={14} className="inline mr-1" />
                                {new Date(proposal.created_at).toLocaleDateString('it-IT')}
                            </span>
                        </div>
                        <h1>{proposal.title}</h1>
                        {proposal.description && (
                            <p className="subtitle">{proposal.description}</p>
                        )}
                    </div>
                </div>
            </section>

            <section className="proposal-body-section">
                <div className="container">
                    <div className="proposal-layout-grid">
                        <div className="proposal-main-content">
                            <div className="prose">
                                <div dangerouslySetInnerHTML={{ __html: proposal.body }} />
                            </div>

                            {(pros.length > 0 || cons.length > 0) && (
                                <div className="pros-cons-grid mt-12">
                                    {pros.length > 0 && (
                                        <div className="pros-column">
                                            <h4 className="flex items-center gap-2 text-success">
                                                <CheckCircle2 size={20} /> Punti di Forza
                                            </h4>
                                            <ul>
                                                {pros.map((pro: string, i: number) => <li key={i}>{pro}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                    {cons.length > 0 && (
                                        <div className="cons-column">
                                            <h4 className="flex items-center gap-2 text-error">
                                                <XCircle size={20} /> Criticità
                                            </h4>
                                            <ul>
                                                {cons.map((con: string, i: number) => <li key={i}>{con}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="proposal-sidebar">
                            <div className="interaction-card">
                                <h3>Supporta questa proposta</h3>
                                <p>Credi che questa iniziativa sia prioritaria? Faccelo sapere con un supporto.</p>
                                <div className="support-actions mt-6">
                                    <VoteButton proposalId={proposal.id} initialVoteCount={voteCount || 0} />
                                </div>
                            </div>

                            <div className="info-card mt-8">
                                <h4 className="flex items-center gap-2">
                                    <Info size={18} /> Cos&apos;è il supporto?
                                </h4>
                                <p className="text-sm text-secondary">
                                    Il supporto non è un voto vincolante, ma un segnale che diamo all&apos;associazione sulla priorità percepita dai cittadini.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
