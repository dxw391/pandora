"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function CookiePolicyPage() {
    return (
        <div className="page-content">
            <section className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Cookie Policy
                    </motion.h1>
                    <p className="subtitle">Informazioni sull&apos;uso dei cookie su questo sito.</p>
                </div>
            </section>

            <section className="legal-content">
                <div className="container narrow-container">
                    <div className="legal-block">
                        <h2>Cosa sono i Cookie</h2>
                        <p>I cookie sono piccoli file di testo che i siti visitati dall&apos;utente inviano al suo terminale, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente.</p>
                    </div>
                    <div className="legal-block">
                        <h2>Tipologie di Cookie che utilizziamo</h2>
                        <table className="legal-table">
                            <thead>
                                <tr>
                                    <th>Tipologia</th>
                                    <th>Scopo</th>
                                    <th>Durata</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cookie Tecnici</td>
                                    <td>Necessari per il corretto funzionamento del sito.</td>
                                    <td>Sessione / 1 anno</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}
