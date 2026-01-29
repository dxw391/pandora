"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
    return (
        <div className="page-content">
            <section className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Privacy Policy
                    </motion.h1>
                    <p className="subtitle">La trasparenza inizia dal rispetto dei tuoi dati.</p>
                </div>
            </section>

            <section className="legal-content">
                <div className="container narrow-container">
                    <div className="legal-block">
                        <h2>1. Titolare del Trattamento</h2>
                        <p>
                            L&apos;associazione &quot;Pandora - Osservatorio Civico&quot;, con sede legale in [Indirizzo Placeholder], è il Titolare del trattamento dei dati personali raccolti attraverso questo sito. Puoi contattarci per qualsiasi informazione riguardante i tuoi dati all&apos;indirizzo email: privacy@pandora.it.
                        </p>
                    </div>
                    <div className="legal-block">
                        <h2>2. Tipologia di Dati Raccolti</h2>
                        <p>Raccogliamo solo i dati strettamente necessari per le finalità indicate. Questi possono includere:</p>
                        <ul>
                            <li>Dati di navigazione (indirizzi IP, log di sistema).</li>
                            <li>Dati forniti volontariamente dall&apos;utente tramite email o form di contatto (Nome, Email).</li>
                        </ul>
                    </div>
                    <div className="legal-block">
                        <h2>3. Finalità del Trattamento</h2>
                        <p>I tuoi dati sono trattati per: Garantire il corretto funzionamento del sito, rispondere alle tue richieste di informazioni, adempiere ad obblighi di legge.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
