"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface TitoloSection {
    id: string;
    title: string;
    articles: { id: string; title: string }[];
}


const titoliSections: TitoloSection[] = [
    {
        id: 'titolo1',
        title: 'Titolo I - Costituzione, identità e scopi',
        articles: [
            { id: 'art1', title: 'Art. 1 - Denominazione' },
            { id: 'art2', title: 'Art. 2 - Acronimo APS' },
            { id: 'art3', title: 'Art. 3 - Oggetto e finalità' },
            { id: 'art4', title: 'Art. 4 - Scopi e attività' },
            { id: 'art5', title: 'Art. 5 - Metodo' },
        ]
    },
    {
        id: 'titolo2',
        title: 'Titolo II - Norme sul rapporto associativo',
        articles: [
            { id: 'art6', title: 'Art. 6 - Norme sull’ordinamento interno' },
            { id: 'art7', title: 'Art. 7 - Associati' },
            { id: 'art8', title: 'Art. 8 - Procedura di ammissione' },
            { id: 'art9', title: 'Art. 9 - Diritti e doveri degli associati' },
            { id: 'art10', title: 'Art. 10 - Cessazione del rapporto associativo' },
        ]
    },
    {
        id: 'titolo3',
        title: 'Titolo III - Norme sul volontariato',
        articles: [
            { id: 'art11', title: 'Art. 11 - Dei volontari e dell’attività di volontariato' },
            { id: 'art12', title: 'Art. 12 - Dei volontari e delle persone retribuite' },
        ]
    },
    {
        id: 'titolo4',
        title: 'Titolo IV - Organi Sociali',
        articles: [
            { id: 'art13', title: 'Art. 13 - L’Assemblea degli associati: composizione, modalità di convocazione e funzionamento' },
            { id: 'art14', title: 'Art.14 Assemblea ordinaria: competenze e quorum' },
            { id: 'art15', title: 'Art.15 Assemblea straordinaria: competenze e quorum' },
            { id: 'art16', title: 'Art.16 L’Assemblea degli associati: regole di voto' },
            { id: 'art17', title: 'Art.17 Il Presidente dell’Associazione: poteri e durata in carica' },
            { id: 'art18', title: 'Art.18 Il Consiglio Direttivo: composizione e durata in carica' },
            { id: 'art19', title: 'Art.19 Il Consiglio Direttivo: regole di convocazione, di funzionamento e di voto' },
            { id: 'art20', title: 'Art.20 Competenze del Consiglio Direttivo' },
            { id: 'art21', title: 'Art.21 Cause di decadenza e sostituzione dei membri del Consiglio Direttivo' },
            { id: 'art22', title: 'Art.22 L’organo di controllo: composizione, durata in carica e funzionamento' },
            { id: 'art23', title: 'Art.23 Competenze dell’organo di controllo' },
            { id: 'art24', title: 'Art.24 - L’organo di revisione' },
            { id: 'art25', title: 'Art.25 - Responsabilità degli organi sociali' },
        ]
    },
    {
        id: 'titolo5',
        title: 'Titolo V - Bilancio e libri sociali',
        articles: [
            { id: 'art26', title: 'Art. 26 - Libri e registri' },
            { id: 'art27', title: 'Art. 27 - Destinazione del patrimonio ed assenza di scopo di lucro' },
            { id: 'art28', title: 'Art. 28 - Risorse economiche' },
            { id: 'art29', title: 'Art. 29 - Bilancio di esercizio' },
            { id: 'art30', title: 'Art. 30 - Bilancio Sociale' }
        ]
    },
    {
        id: 'titolo6',
        title: 'Titolo VI - Scioglimento e devoluzione del patrimonio',
        articles: [
            { id: 'art31', title: 'Art. 31 - Scioglimento e devoluzione del patrimonio' },
        ]
    },
    {
        id: 'titolo7',
        title: 'Titolo VII - Patrimonio e Bilancio',
        articles: [
            { id: 'art27', title: 'Art. 27 - Destinazione patrimonio' },
            { id: 'art28', title: 'Art. 28 - Risorse economiche' },
            { id: 'art29', title: 'Art. 29 - Bilancio di esercizio' },
            { id: 'art30', title: 'Art. 30 - Bilancio Sociale' },
        ]
    },
    {
        id: 'titolo8',
        title: 'Titolo VIII - Disposizioni finali e transitorie',
        articles: [
            { id: 'art32', title: 'Art. 32 - Norme di rinvio' },
            { id: 'art33', title: 'Art. 33 - Norme finali' },
        ]
    }
];

export default function StatutoNav() {
    const [openSections, setOpenSections] = useState<string[]>([]);

    const toggleSection = (sectionId: string) => {
        setOpenSections(prev =>
            prev.includes(sectionId)
                ? prev.filter(id => id !== sectionId)
                : [...prev, sectionId]
        );
    };

    const isSectionOpen = (sectionId: string) => openSections.includes(sectionId);

    return (
        <aside className="statuto-nav">
            <h3>Indice</h3>
            <div className="accordion-nav">
                {titoliSections.map((section) => (
                    <div key={section.id} className="accordion-section">
                        <button
                            className={`accordion-header ${isSectionOpen(section.id) ? 'open' : ''}`}
                            onClick={() => toggleSection(section.id)}
                        >
                            <span className="accordion-icon">
                                {isSectionOpen(section.id) ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                            </span>
                            <span className="accordion-title">{section.title}</span>
                        </button>
                        <motion.ul
                            className="accordion-content"
                            initial={false}
                            animate={{
                                height: isSectionOpen(section.id) ? 'auto' : 0,
                                opacity: isSectionOpen(section.id) ? 1 : 0
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {section.articles.map((article) => (
                                <li key={article.id}>
                                    <a href={`#${article.id}`}>{article.title}</a>
                                </li>
                            ))}
                        </motion.ul>
                    </div>
                ))}
            </div>
        </aside>
    );
}
