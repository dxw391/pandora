"use client";

import React, { useMemo } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import * as runtime from 'react/jsx-runtime';
import { posts } from 'content';

// Componente per renderizzare l'MDX compilato da Velite
const MDXContent = ({ code }: { code: string }) => {
    const Component = useMemo(() => {
        const fn = new Function(code);
        return fn(runtime).default;
    }, [code]);

    return <Component />;
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="page-content">
            <section className="page-header pb-0">
                <div className="container">
                    <Link href="/blog" className="link-arrow mb-8 inline-flex items-center gap-2 text-sm">
                        <ArrowLeft size={16} /> Torna al Blog
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="badge">
                            {new Date(post.date).toLocaleDateString('it-IT', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                        <h1>{post.title}</h1>
                        <p className="subtitle">{post.description}</p>
                    </motion.div>
                </div>
            </section>

            <section className="blog-content-section">
                <div className="container narrow-container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="prose"
                    >
                        <MDXContent code={post.body} />
                    </motion.div>

                    <div className="post-footer mt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="blog-cta"
                        >
                            <div className="blog-cta-content">
                                <h3>Ti interessa quello che facciamo?</h3>
                                <p>Resta aggiornato sulle nostre attività o diventa parte del cambiamento.</p>
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
