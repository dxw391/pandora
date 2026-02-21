"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function RemoveDataPage() {
    return (
        <div className="page-content">
            <section className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Cancellazione Dati
                    </motion.h1>
                    <p className="subtitle">Come richiedere la rimozione dei tuoi dati personali.</p>
                </div>
            </section>

            <section className="legal-content">
                <div className="container narrow-container">
                    <div className="legal-block">
                        <h2>Procedura di Cancellazione</h2>
                        <p>
                            L&apos;associazione culturale &quot;Pandora&quot; riconosce il tuo diritto alla cancellazione dei dati personali, in conformità con le normative vigenti sulla privacy.
                        </p>
                        <p>
                            Se desideri che i tuoi dati personali vengano eliminati dai nostri sistemi, puoi farne richiesta inviando una mail all&apos;amministratore all&apos;indirizzo:
                        </p>
                        <p>
                            <a href="mailto:info@associazionepandora.it" className="text-primary hover:underline">info@associazionepandora.it</a>
                        </p>
                        <p>
                            Nella richiesta, ti preghiamo di specificare:
                        </p>
                        <ul>
                            <li>Il tuo nome e cognome.</li>
                            <li>L&apos;indirizzo email associato ai dati che desideri rimuovere.</li>
                            <li>L&apos;oggetto della mail: &quot;Richiesta cancellazione dati&quot;.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
