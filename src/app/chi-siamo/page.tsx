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
                        Chi c&apos;è dietro Pandora
                    </motion.h1>
                    <p className="subtitle">Competenze in rete, senza etichette.</p>
                </div>
            </section>

            <section className="about-section">
                <div className="container about-grid">
                    <div className="about-text">
                        <h2>La nostra storia</h2>
                        <p>
                            Siamo una community indipendente. Nessuno schieramento, nessuna fazione: siamo professionisti e cittadini che scelgono di mettere le proprie esperienze in condivisione per capire meglio la realtà che ci circonda.
                        </p>
                        <p>
                            Non cerchiamo follower passivi. Vogliamo costruire un network attivo, un gruppo capace di organizzarsi agilmente sui temi che contano di volta in volta, portando al tavolo chi ha davvero le competenze per parlarne.
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
                            <p>Elevare lo sguardo: collegare il nostro territorio alle grandi questioni globali.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section bg-secondary">
                <div className="container">
                    <div className="section-header">
                        <h2>Il nostro Network</h2>
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
                            <p>Il cuore pulsante dell&apos;associazione che sostiene le nostre attività.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
