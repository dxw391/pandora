"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { posts } from 'content'

export default function BlogPage() {
    // Ordiniamo i post per data decrescente
    const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="page-content">
            <section className="page-header">
                <div className="container">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="badge"
                    >
                        Approfondimenti
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Blog & Analisi
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="subtitle"
                    >
                        Documenti, fatti e riflessioni per una cittadinanza più consapevole.
                    </motion.p>
                </div>
            </section>

            <section className="blog-list-section bg-secondary">
                <div className="container">
                    <div className="values-grid">
                        {sortedPosts.map((post, index) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="value-card" // Riutilizzo la classe value-card per coerenza
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
                    </div>
                    {sortedPosts.length === 0 && (
                        <div className="text-center">
                            <p>Non ci sono ancora articoli nel blog. Torna presto!</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
