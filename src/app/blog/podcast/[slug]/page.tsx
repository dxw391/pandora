"use client";

import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Headphones } from 'lucide-react';
import { podcasts } from 'content';
import * as runtime from 'react/jsx-runtime';

// Componente per renderizzare l'MDX compilato da Velite
const MDXContent = ({ code }: { code: string }) => {
    const Component = React.useMemo(() => {
        const fn = new Function(code);
        return fn(runtime).default;
    }, [code]);

    return <Component />;
};

export default function PodcastEpisodePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="episode-header-content"
                    >
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
                    </motion.div>
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

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="prose"
                    >
                        <MDXContent code={podcast.body} />
                    </motion.div>

                    <div className="post-footer mt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="blog-cta"
                        >
                            <div className="blog-cta-content">
                                <h3>Ti piace il nostro podcast?</h3>
                                <p>Seguici per non perdere i prossimi episodi e resta aggiornato sulle nostre attività.</p>
                                <Link href="/#contatti" className="btn-primary">
                                    Contattaci
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
