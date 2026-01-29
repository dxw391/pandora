"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, History } from 'lucide-react';

export default function ChiSiamoPage() {
    return (
        <div className="page-content">
            <section className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Chi Siamo
                    </motion.h1>
                    <p className="subtitle">Un gruppo di cittadini uniti dall'amore per la propria comunità e dalla voglia di chiarezza.</p>
                </div>
            </section>

            <section className="about-section">
                <div className="container about-grid">
                    <div className="about-text">
                        <h2>La nostra storia</h2>
                        <p>
                            Pandora nasce dall'esigenza di superare la narrazione politica fatta di soli slogan. Sentivamo il bisogno di uno spazio dove i fatti potessero essere analizzati con freddezza e onestà intellettuale, lontano dalle passioni di parte che spesso offuscano il giudizio.
                        </p>
                        <p>
                            Non siamo un partito, né siamo legati a correnti politiche. Siamo un osservatorio: guardiamo, studiamo, e riportiamo ciò che i documenti dicono.
                        </p>
                    </div>
                    <div className="about-stats-grid">
                        <div className="stat-card">
                            <History size={40} className="icon-gold" />
                            <h3>Fondazione</h3>
                            <p>Nati per dare voce ai documenti e volto alla trasparenza.</p>
                        </div>
                        <div className="stat-card">
                            <Target size={40} className="icon-gold" />
                            <h3>Obiettivo</h3>
                            <p>Migliorare l'amministrazione attraverso la consapevolezza dei cittadini.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section bg-secondary">
                <div className="container">
                    <div className="section-header">
                        <h2>L'Associazione</h2>
                        <p>Le persone che rendono possibile Pandora ogni giorno.</p>
                    </div>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-avatar"><Users size={48} /></div>
                            <h3>Il Direttivo</h3>
                            <p>Cittadini, professionisti e appassionati della cosa pubblica.</p>
                        </div>
                        <div className="team-member">
                            <div className="member-avatar"><Users size={48} /></div>
                            <h3>I Soci</h3>
                            <p>Il cuore pulsante dell'associazione che sostiene le nostre attività.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
