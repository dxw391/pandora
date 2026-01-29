"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Gavel, HelpCircle } from 'lucide-react';

export default function StatutoPage() {
    return (
        <div className="page-content">
            <section className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Lo Statuto
                    </motion.h1>
                    <p className="subtitle">Le regole che garantiscono la nostra indipendenza e integrità.</p>
                </div>
            </section>

            <section className="statuto-content">
                <div className="container">
                    <div className="statuto-layout">
                        <aside className="statuto-nav">
                            <h3>Indice</h3>
                            <ul>
                                <li><a href="#art1">Art. 1 - Costituzione</a></li>
                                <li><a href="#art2">Art. 2 - Finalità</a></li>
                                <li><a href="#art3">Art. 3 - Soci</a></li>
                                <li><a href="#art4">Art. 4 - Organi</a></li>
                            </ul>
                        </aside>
                        <main className="statuto-text">
                            <div id="art1" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art. 1 - Costituzione</h2>
                                </div>
                                <p>È costituita l'associazione "Pandora - Osservatorio Civico per la trasparenza e l'onestà intellettuale". L'associazione è apartitica, aconfessionale e non persegue fini di lucro.</p>
                            </div>

                            <div id="art2" className="statuto-article">
                                <div className="article-header">
                                    <Gavel className="icon-gold" size={24} />
                                    <h2>Art. 2 - Finalità</h2>
                                </div>
                                <p>L'associazione si pone come obiettivo l'analisi critica della vita politica e amministrativa, la promozione della trasparenza degli atti pubblici e la diffusione di una cultura basata sul libero confronto e sull'onestà intellettuale.</p>
                            </div>

                            <div id="art3" className="statuto-article">
                                <div className="article-header">
                                    <HelpCircle className="icon-gold" size={24} />
                                    <h2>Art. 3 - Soci</h2>
                                </div>
                                <p>Possono far parte dell'associazione tutti i cittadini che ne condividano lo spirito e gli obiettivi e che si impegnino a rispettare le norme del presente statuto.</p>
                            </div>

                            <div className="statuto-download">
                                <p>Vuoi consultare la versione integrale firmata?</p>
                                <button className="btn-primary">Scarica PDF Statuto</button>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </div>
    );
}
