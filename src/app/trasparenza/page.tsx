"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, PieChart, FileCheck, ExternalLink } from 'lucide-react';

export default function TrasparenzaPage() {
    return (
        <div className="page-content">
            <section className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Trasparenza
                    </motion.h1>
                    <p className="subtitle">Pratichiamo ciò che promuoviamo. Rendicontazione chiara di ogni nostra attività.</p>
                </div>
            </section>

            <section className="reports-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Rendiconti e Bilanci</h2>
                        <p>Le nostre risorse provengono esclusivamente dai nostri soci.</p>
                    </div>
                    <div className="reports-grid">
                        <ReportCard
                            year="2025"
                            title="Bilancio Consuntivo"
                            icon={<BarChart3 size={32} />}
                            status="Pubblicato"
                        />
                        <ReportCard
                            year="2024"
                            title="Bilancio Consuntivo"
                            icon={<PieChart size={32} />}
                            status="Pubblicato"
                        />
                        <ReportCard
                            year="2025"
                            title="Relazione Attività"
                            icon={<FileCheck size={32} />}
                            status="In lavorazione"
                        />
                    </div>
                </div>
            </section>

            <section className="funding-section bg-secondary">
                <div className="container funding-layout">
                    <div className="funding-text">
                        <h2>Indipendenza Economica</h2>
                        <p>
                            Pandora non riceve finanziamenti pubblici. Tutte le spese operative sono coperte dalle quote associative e dalle donazioni liberali dei soci. Questa è la nostra garanzia di totale indipendenza da qualsiasi pressione esterna.
                        </p>
                        <div className="funding-link">
                            <a href="#" className="link-arrow">
                                <span>Consulta l'elenco dei contributi liberali</span>
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>
                    <div className="funding-visual">
                        <div className="glass-card">
                            <h3>Distribuzione Spese</h3>
                            <ul className="spese-list">
                                <li><span>Organizzazione Eventi</span> <span>45%</span></li>
                                <li><span>Analisi e Ricerca</span> <span>35%</span></li>
                                <li><span>Comunicazione e Web</span> <span>20%</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const ReportCard: React.FC<{ year: string, title: string, icon: React.ReactNode, status: string }> = ({ year, title, icon, status }) => (
    <div className="report-card">
        <div className="report-icon">{icon}</div>
        <span className="report-year">{year}</span>
        <h3>{title}</h3>
        <p className="report-status">{status}</p>
        {status === "Pubblicato" && <button className="btn-small">Visualizza</button>}
    </div>
);
