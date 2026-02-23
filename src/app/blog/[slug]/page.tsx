import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { posts } from 'content';
import MDXRenderer from '@/components/MDXRenderer';
import { Metadata } from 'next';

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return {};
    }

    return {
        title: `${post.title} — Pandora`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description || '',
            type: 'article',
            publishedTime: post.date,
            url: `https://pandora.it/blog/${post.slug}`, // Assumo url base, correggerò se necessario
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description || '',
        }
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="page-content">
            <section className="page-header pb-3">
                <div className="container">
                    <Link href="/blog" className="link-arrow mb-8 inline-flex items-center gap-2 text-sm">
                        <ArrowLeft size={16} /> Torna al Blog
                    </Link>
                    <div>
                        <span className="badge">
                            {new Date(post.date).toLocaleDateString('it-IT', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                        <h1>{post.title}</h1>
                        <p className="subtitle">{post.description}</p>
                    </div>
                </div>
            </section>

            <section className="blog-content-section">
                <div className="container narrow-container">
                    <div className="prose">
                        <MDXRenderer code={post.body} />
                    </div>

                    <div className="post-footer mt-20">
                        <div className="blog-cta">
                            <div className="blog-cta-content">
                                <h3>Ti interessa quello che facciamo?</h3>
                                <p>Resta aggiornato sulle nostre attività o diventa parte del cambiamento.</p>
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
