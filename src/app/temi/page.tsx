"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Leaf, Car, GraduationCap, ArrowRight, Lightbulb } from 'lucide-react';
import { themes, proposals } from 'content'

const iconMap: Record<string, React.ReactNode> = {
    Leaf: <Leaf size={32} />,
    Car: <Car size={32} />,
    GraduationCap: <GraduationCap size={32} />,
    Lightbulb: <Lightbulb size={32} />,
};

export default function TemiPage() {
    return (
        <div className="page-content">
            <section className="page-header">
                <div className="container">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="badge"
                    >
                        Politica Attiva
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Temi & Proposte
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="subtitle"
                    >
                        Partecipa al futuro di Solofra. Analizziamo i problemi e costruiamo insieme soluzioni concrete.
                    </motion.p>
                </div>
            </section>

            <section className="themes-list-section bg-secondary">
                <div className="container">
                    <div className="themes-grid">
                        {themes.map((theme: any, index: number) => {
                            const themeProposals = proposals.filter((p: any) => p.theme === theme.slug);
                            return (
                                <motion.div
                                    key={theme.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="theme-card"
                                >
                                    <div className="theme-icon">
                                        {theme.icon ? iconMap[theme.icon] : <Lightbulb size={32} />}
                                    </div>
                                    <h3 className="theme-title">{theme.title}</h3>
                                    <p className="theme-description">{theme.description}</p>
                                    <div className="theme-stats">
                                        <span className="stats-badge">
                                            {themeProposals.length} Proposte
                                        </span>
                                    </div>
                                    <Link href={theme.permalink} className="btn-outline w-full mt-auto">
                                        Esplora Tema <ArrowRight size={16} />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="active-politics-info">
                <div className="container narrow-container text-center">
                    <h2 className="serif-italic">Come funziona la nostra piattaforma</h2>
                    <p className="mb-8">
                        Non è una semplice bacheca. Ogni tema è un tavolo di lavoro aperto dove usiamo il rigore dell'analisi per trasformare le idee in proposte attuabili.
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
                            <p>Elaboriamo soluzioni basate sull'onestà intellettuale e la fattibilità.</p>
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
