import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { User, FileText, ThumbsUp, Calendar } from 'lucide-react';

interface VoteWithProposal {
    id: number;
    created_at: string;
    proposals: {
        id: number;
        slug: string;
        title: string;
        themes: {
            slug: string;
            title: string;
        };
    };
}

export default async function ProfiloPage() {
    const supabase = await createClient();

    // Check authentication
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect('/');
    }

    // Get user's proposals
    const { data: userProposals } = await supabase
        .from('proposals')
        .select(`
      *,
      themes:theme_id (slug, title)
    `)
        .eq('author_id', user.id)
        .order('created_at', { ascending: false });

    // Get user's votes
    const { data: userVotes } = await supabase
        .from('proposal_votes')
        .select(`
      *,
      proposals:proposal_id (
        id,
        slug,
        title,
        themes:theme_id (slug, title)
      )
    `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

    // Get vote counts for user's proposals
    const proposalsWithVotes = await Promise.all(
        (userProposals || []).map(async (proposal) => {
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
                    <h1>Il Mio Profilo</h1>
                    <p className="subtitle">Gestisci le tue proposte e i tuoi supporti</p>
                </div>
            </section>

            <section className="bg-secondary">
                <div className="container">
                    <div className="profile-grid">
                        {/* User Info Card */}
                        <div className="profile-card">
                            <div className="profile-avatar">
                                <User size={48} />
                            </div>
                            <h2>{user.user_metadata?.full_name || 'Utente'}</h2>
                            <p className="text-secondary">{user.email}</p>
                            <div className="profile-stats">
                                <div className="stat-item">
                                    <FileText size={20} />
                                    <span>{proposalsWithVotes.length} Proposte</span>
                                </div>
                                <div className="stat-item">
                                    <ThumbsUp size={20} />
                                    <span>{userVotes?.length || 0} Supporti</span>
                                </div>
                            </div>
                        </div>

                        {/* User's Proposals */}
                        <div className="profile-section">
                            <h2>Le Mie Proposte</h2>
                            {proposalsWithVotes.length > 0 ? (
                                <div className="proposals-list">
                                    {proposalsWithVotes.map((proposal) => (
                                        <div key={proposal.id} className="proposal-list-item">
                                            <div className="proposal-list-header">
                                                <div>
                                                    <h3>{proposal.title}</h3>
                                                    <p className="text-sm text-secondary">
                                                        {proposal.themes.title} • {new Date(proposal.created_at).toLocaleDateString('it-IT')}
                                                    </p>
                                                </div>
                                                <div className="proposal-list-meta">
                                                    <span className={`status-badge-small status-${proposal.status}`}>
                                                        {proposal.status}
                                                    </span>
                                                    {!proposal.is_approved && (
                                                        <span className="pending-badge">In moderazione</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="proposal-list-footer">
                                                <span className="text-sm text-secondary">
                                                    <ThumbsUp size={14} className="inline" /> {proposal.voteCount} supporti
                                                </span>
                                                {proposal.is_approved && (
                                                    <Link
                                                        href={`/temi/${proposal.themes.slug}/${proposal.slug}`}
                                                        className="link-arrow"
                                                    >
                                                        Visualizza
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="empty-state">
                                    <FileText size={48} />
                                    <p>Non hai ancora creato proposte</p>
                                    <Link href="/temi" className="btn-primary mt-4">
                                        Esplora i Temi
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* User's Votes */}
                        <div className="profile-section">
                            <h2>Proposte Supportate</h2>
                            {userVotes && userVotes.length > 0 ? (
                                <div className="proposals-list">
                                    {userVotes.map((vote: VoteWithProposal) => (
                                        <div key={vote.id} className="proposal-list-item">
                                            <div className="proposal-list-header">
                                                <div>
                                                    <h3>{vote.proposals.title}</h3>
                                                    <p className="text-sm text-secondary">
                                                        {vote.proposals.themes.title}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="proposal-list-footer">
                                                <span className="text-sm text-secondary">
                                                    <Calendar size={14} className="inline" /> Supportato il {new Date(vote.created_at).toLocaleDateString('it-IT')}
                                                </span>
                                                <Link
                                                    href={`/temi/${vote.proposals.themes.slug}/${vote.proposals.slug}`}
                                                    className="link-arrow"
                                                >
                                                    Visualizza
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="empty-state">
                                    <ThumbsUp size={48} />
                                    <p>Non hai ancora supportato proposte</p>
                                    <Link href="/temi" className="btn-primary mt-4">
                                        Esplora le Proposte
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
