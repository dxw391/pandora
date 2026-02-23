"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Play, Clock, Mic, FileText, Headphones } from 'lucide-react';
import { posts, podcasts } from 'content'

type TabType = 'all' | 'podcast' | 'blog';

interface ContentItem {
    slug: string;
    title: string;
    description: string | null;
    date: string;
    type: 'blog' | 'podcast';
    permalink: string;
    duration?: string | null;
}

export default function BlogPodcastPage() {
    const [activeTab, setActiveTab] = useState<TabType>('all');

    // Ordina i post per data decrescente
    const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const sortedPodcasts = [...podcasts].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Featured podcast (primo con featured = true o il più recente)
    const featuredPodcast = sortedPodcasts.find(p => p.featured) || sortedPodcasts[0];

    // Contenuti combinati per la vista 'all'
    const allContent: ContentItem[] = [
        ...sortedPosts.map(p => ({
            slug: p.slug,
            title: p.title,
            description: p.description || null,
            date: p.date,
            type: 'blog' as const,
            permalink: p.permalink
        })),
        ...sortedPodcasts.map(p => ({
            slug: p.slug,
            title: p.title,
            description: p.description || null,
            date: p.date,
            type: 'podcast' as const,
            permalink: p.permalink,
            duration: p.duration
        }))
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="page-content">
            <section className="page-header newspaper-header">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="header-masthead"
                    >
                        <span className="badge">Osservatorio Civico</span>
                        <h1>Blog & Podcast</h1>
                        <p className="subtitle">
                            Approfondimenti, analisi e conversazioni per una cittadinanza più consapevole.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Podcast Hero */}
            {featuredPodcast && (
                <section className="podcast-hero-section mt-5">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="podcast-hero"
                        >
                            <div className="podcast-hero-badge">
                                <Headphones size={16} />
                                <span>Ultimo Episodio</span>
                            </div>
                            <h2 className="podcast-hero-title">{featuredPodcast.title}</h2>
                            <p className="podcast-hero-description">{featuredPodcast.description}</p>
                            <div className="podcast-hero-meta">
                                <span className="podcast-meta-item">
                                    <Calendar size={14} />
                                    {new Date(featuredPodcast.date).toLocaleDateString('it-IT', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                                {featuredPodcast.duration && (
                                    <span className="podcast-meta-item">
                                        <Clock size={14} />
                                        {featuredPodcast.duration}
                                    </span>
                                )}
                            </div>
                            <div className="podcast-hero-actions">
                                <Link href={`/blog/podcast/${featuredPodcast.slug}`} className="btn-primary podcast-play-btn">
                                    <Play size={18} />
                                    Ascolta ora
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Content Tabs */}
            <section className="content-section bg-secondary">
                <div className="container">
                    <div className="content-tabs">
                        <button
                            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveTab('all')}
                        >
                            Tutto
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'podcast' ? 'active' : ''}`}
                            onClick={() => setActiveTab('podcast')}
                        >
                            <Mic size={16} />
                            Podcast
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'blog' ? 'active' : ''}`}
                            onClick={() => setActiveTab('blog')}
                        >
                            <FileText size={16} />
                            Articoli
                        </button>
                    </div>

                    {/* Grid Layout stile giornale */}
                    {activeTab === 'all' && (
                        <div className="newspaper-grid">
                            {allContent.map((item, index) => (
                                <motion.article
                                    key={`${item.type}-${item.slug}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`newspaper-card ${item.type === 'podcast' ? 'podcast-card' : 'blog-card'} ${index === 0 ? 'featured' : ''}`}
                                >
                                    <div className="card-type-badge">
                                        {item.type === 'podcast' ? <Mic size={12} /> : <FileText size={12} />}
                                        <span>{item.type === 'podcast' ? 'Podcast' : 'Articolo'}</span>
                                    </div>
                                    <div className="post-meta">
                                        <span className="post-date">
                                            <Calendar size={14} />
                                            {new Date(item.date).toLocaleDateString('it-IT', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                        {item.type === 'podcast' && item.duration && (
                                            <span className="podcast-duration">
                                                <Clock size={14} />
                                                {item.duration}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="post-title">{item.title}</h3>
                                    <p className="post-excerpt">{item.description}</p>
                                    <Link href={item.permalink} className="link-arrow">
                                        {item.type === 'podcast' ? 'Ascolta' : 'Leggi tutto'}
                                        <ArrowRight size={16} />
                                    </Link>
                                </motion.article>
                            ))}
                        </div>
                    )}

                    {/* Solo Podcast */}
                    {activeTab === 'podcast' && (
                        <div className="podcast-grid">
                            {sortedPodcasts.map((podcast, index) => (
                                <motion.article
                                    key={podcast.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="podcast-list-card"
                                >
                                    <div className="podcast-icon">
                                        <Mic size={24} />
                                    </div>
                                    <div className="podcast-info">
                                        <div className="post-meta">
                                            <span className="post-date">
                                                <Calendar size={14} />
                                                {new Date(podcast.date).toLocaleDateString('it-IT', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                            {podcast.duration && (
                                                <span className="podcast-duration">
                                                    <Clock size={14} />
                                                    {podcast.duration}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="post-title">{podcast.title}</h3>
                                        <p className="post-excerpt">{podcast.description}</p>
                                    </div>
                                    <Link href={`/blog/podcast/${podcast.slug}`} className="podcast-play-small">
                                        <Play size={20} />
                                    </Link>
                                </motion.article>
                            ))}
                            {sortedPodcasts.length === 0 && (
                                <div className="text-center empty-state">
                                    <Mic size={48} />
                                    <p>Nessun podcast disponibile ancora. Torna presto!</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Solo Blog */}
                    {activeTab === 'blog' && (
                        <div className="blog-posts-grid">
                            {sortedPosts.map((post, index) => (
                                <motion.article
                                    key={post.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="blog-post-card"
                                >
                                    <div className="post-meta">
                                        <span className="post-date">
                                            <Calendar size={14} />
                                            {new Date(post.date).toLocaleDateString('it-IT', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    <h3 className="post-title">{post.title}</h3>
                                    <p className="post-excerpt">{post.description}</p>
                                    <Link href={post.permalink} className="link-arrow">
                                        Leggi tutto <ArrowRight size={16} />
                                    </Link>
                                </motion.article>
                            ))}
                            {sortedPosts.length === 0 && (
                                <div className="text-center empty-state">
                                    <FileText size={48} />
                                    <p>Non ci sono ancora articoli nel blog. Torna presto!</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
