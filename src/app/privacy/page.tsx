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
                            L&apos;associazione culturale &quot;Pandora&quot;, con sede legale in [Indirizzo Placeholder], è il Titolare del trattamento dei dati personali raccolti attraverso questo sito. Puoi contattarci per qualsiasi informazione riguardante i tuoi dati all&apos;indirizzo email: privacy@pandora.it.
                        </p>
                    </div>
                    <div className="legal-block">
                        <h2>2. Tipologia di Dati Raccolti</h2>
                        <p>Raccogliamo solo i dati strettamente necessari per le finalità indicate. Questi possono includere:</p>
                        <ul>
                            <li>Dati di navigazione (indirizzi IP, log di sistema).</li>
                            <li>Dati forniti volontariamente dall&apos;utente tramite email o form di contatto (Nome, Email).</li>
                            <li>Dati ricevuti da piattaforme terze (Google, Facebook) in caso di login tramite OAuth (Nome, Email, Immagine del profilo).</li>
                        </ul>
                    </div>
                    <div className="legal-block">
                        <h2>3. Login tramite Piattaforme Terze (OAuth)</h2>
                        <p>
                            Il nostro sito permette l&apos;accesso tramite account Google e Facebook. Utilizzando questa funzione, l&apos;utente autorizza la piattaforma scelta a condividere con noi alcune informazioni profilo (come nome, email e immagine) necessarie per la creazione e la gestione dell&apos;account sul nostro sito. Non richiediamo permessi per postare a tuo nome o accedere ai tuoi contatti.
                        </p>
                    </div>
                    <div className="legal-block">
                        <h2>4. Finalità del Trattamento</h2>
                        <p>I tuoi dati sono trattati per: Garantire il corretto funzionamento del sito, rispondere alle tue richieste di informazioni, adempiere ad obblighi di legge.</p>
                    </div>
                    <div className="legal-block">
                        <h2>5. Diritti dell&apos;Utente e Cancellazione Dati</h2>
                        <p>
                            Hai il diritto di accedere ai tuoi dati, chiederne la rettifica o la cancellazione in qualsiasi momento.
                        </p>
                        <p>
                            Per conoscere la procedura dettagliata per richiedere la rimozione completa dei tuoi dati dai nostri sistemi, visita la pagina dedicata:
                            <br />
                            <a href="/remove-data" className="text-primary hover:underline font-semibold">
                                Istruzioni per la cancellazione dei dati
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
