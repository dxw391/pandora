import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Headphones } from 'lucide-react';
import { podcasts } from 'content';
import MDXRenderer from '@/components/MDXRenderer';
import { Metadata } from 'next';

interface PodcastEpisodePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PodcastEpisodePageProps): Promise<Metadata> {
    const { slug } = await params;
    const podcast = podcasts.find((p) => p.slug === slug);

    if (!podcast) {
        return {};
    }

    return {
        title: `${podcast.title} — Pandora Podcast`,
        description: podcast.description,
        openGraph: {
            title: podcast.title,
            description: podcast.description || '',
            type: 'music.song', // O 'article', ma 'music.song' o simili è più specifico per podcast
            url: `https://pandora.it/blog/podcast/${podcast.slug}`,
        },
        twitter: {
            card: 'summary_large_image',
            title: podcast.title,
            description: podcast.description || '',
        }
    };
}

export default async function PodcastEpisodePage({ params }: PodcastEpisodePageProps) {
    const { slug } = await params;
    const podcast = podcasts.find((p) => p.slug === slug);

    if (!podcast) {
        notFound();
    }

    return (
        <div className="page-content">
            <section className="podcast-episode-header">
                <div className="container">
                    <Link href="/blog" className="link-arrow mb-8 inline-flex items-center gap-2 text-sm back-link">
                        <ArrowLeft size={16} /> Torna a Blog & Podcast
                    </Link>
                    <div className="episode-header-content">
                        <div className="episode-badge">
                            <Headphones size={16} />
                            <span>Podcast</span>
                        </div>
                        <h1>{podcast.title}</h1>
                        <p className="subtitle">{podcast.description}</p>
                        <div className="episode-meta">
                            <span className="meta-item">
                                <Calendar size={14} />
                                {new Date(podcast.date).toLocaleDateString('it-IT', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                            {podcast.duration && (
                                <span className="meta-item">
                                    <Clock size={14} />
                                    {podcast.duration}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="podcast-content-section">
                <div className="container narrow-container">
                    {/* Audio Player */}
                    {podcast.audio_url && (
                        <div className="audio-player-container">
                            <audio controls className="audio-player">
                                <source src={podcast.audio_url} type="audio/mpeg" />
                                Il tuo browser non supporta l&apos;elemento audio.
                            </audio>
                        </div>
                    )}

                    <div className="prose">
                        <MDXRenderer code={podcast.body} />
                    </div>

                    <div className="post-footer mt-20">
                        <div className="blog-cta">
                            <div className="blog-cta-content">
                                <h3>Ti piace il nostro podcast?</h3>
                                <p>Seguici per non perdere i prossimi episodi e resta aggiornato sulle nostre attività.</p>
                                <Link href="/#contatti" className="btn-primary">
                                    Contattaci
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
