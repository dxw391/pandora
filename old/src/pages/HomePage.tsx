import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Shield, MessageSquare, ArrowRight, Search, ChevronDown } from 'lucide-react';

const HomePage: React.FC = () => {
    return (
        <>
            <section className="hero">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container hero-content"
                >
                    <span className="badge">Osservatorio Civico</span>
                    <h1>Pandora</h1>
                    <p className="hero-subtitle">
                        Niente di personale. Solo trasparenza e onestà intellettuale.
                    </p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="scroll-indicator"
                    >
                        <ChevronDown size={32} />
                    </motion.div>
                </motion.div>
            </section>

            <section id="mission" className="mission-section">
                <div className="container">
                    <div className="mission-text-block">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            La nostra missione
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="large-text"
                        >
                            "Pandora è un osservatorio civico nato per promuovere la trasparenza e l'onestà intellettuale. Analizziamo i fatti, approfondiamo i documenti e promuoviamo una discussione politica libera da slogan e pregiudizi."
                        </motion.p>
                    </div>
                </div>
            </section>

            <section id="obiettivi" className="values-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Cosa ci guida</h2>
                        <p>Crediamo che la chiarezza sia il primo passo per una buona amministrazione.</p>
                    </div>
                    <div className="values-grid">
                        <ValueCard
                            icon={<Eye size={32} />}
                            title="Trasparenza"
                            description="Rendiamo accessibili le informazioni e i processi decisionali che riguardano la collettività."
                        />
                        <ValueCard
                            icon={<Shield size={32} />}
                            title="Onestà Intellettuale"
                            description="Analizziamo la realtà per quella che è, senza piegarla a interessi di parte o ideologie."
                        />
                        <ValueCard
                            icon={<MessageSquare size={32} />}
                            title="Libero Dibattito"
                            description="Promuoviamo un confronto basato su dati e ragionamenti, lontano dagli slogan superficiali."
                        />
                    </div>
                </div>
            </section>

            <section id="metodo" className="method-section">
                <div className="container method-grid">
                    <div className="method-image">
                        <div className="glass-card">
                            <Search size={48} className="icon-gold" />
                            <h3>Il nostro metodo</h3>
                            <ul>
                                <li>
                                    <ArrowRight size={16} />
                                    <span>Analisi dei fatti locali e nazionali</span>
                                </li>
                                <li>
                                    <ArrowRight size={16} />
                                    <span>Studio approfondito di atti e documenti</span>
                                </li>
                                <li>
                                    <ArrowRight size={16} />
                                    <span>Divulgazione chiara e imparziale</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="method-text">
                        <h2>Oltre il pregiudizio</h2>
                        <p>
                            In un'epoca di polarizzazione estrema, Pandora si pone come un filtro critico. Non ci interessa la lotta politica fine a se stessa, ma la qualità della discussione pubblica.
                        </p>
                        <p>
                            Ogni nostra analisi parte dai documenti. Perché i fatti non hanno colore politico, ma hanno bisogno di essere portati alla luce con competenza e rigore.
                        </p>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container text-center">
                    <h2 className="serif-italic">"Niente di personale."</h2>
                    <p>Unisciti alla nostra visione di una politica più trasparente.</p>
                    <a href="mailto:info@pandora.it" className="btn-secondary">Diventa Socio</a>
                </div>
            </section>
        </>
    );
};

const ValueCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="value-card"
    >
        <div className="value-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
    </motion.div>
);

export default HomePage;
