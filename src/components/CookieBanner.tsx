"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Cookie } from 'lucide-react';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('pandora-cookie-consent');
        if (!consent) {
            setTimeout(() => setIsVisible(true), 1500);
        }
    }, []);

    const handleConsent = (type: 'all' | 'essential') => {
        localStorage.setItem('pandora-cookie-consent', type);
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="cookie-banner"
                >
                    <div className="container cookie-content">
                        <div className="cookie-text">
                            <Cookie className="icon-gold" size={24} />
                            <p>
                                Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito.
                                Consultando la nostra <Link href="/cookies">Cookie Policy</Link> puoi scoprire di più.
                            </p>
                        </div>
                        <div className="cookie-actions">
                            <button className="btn-text" onClick={() => handleConsent('essential')}>Solo Essenziali</button>
                            <button className="btn-primary" onClick={() => handleConsent('all')}>Accetta Tutti</button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieBanner;
