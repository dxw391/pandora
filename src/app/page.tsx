"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Shield, MessageSquare, ArrowRight, Search, ChevronDown, Send } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container hero-content"
        >
          <span className="badge">Osservatorio Civico Solofra</span>
          <h1>Pandora</h1>
          <p className="hero-subtitle">
            Niente di personale. Solo trasparenza e onestà intellettuale per Solofra e il territorio.
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
              &quot;Pandora è un osservatorio civico nato a Solofra per promuovere la trasparenza e l&apos;onestà intellettuale. Analizziamo i fatti del nostro territorio, approfondiamo i documenti e promuoviamo una discussione politica libera da slogan e pregiudizi.&quot;
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
                  <span>Analisi dei fatti di Solofra e del territorio</span>
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
              In un&apos;epoca di polarizzazione estrema, Pandora si pone come un filtro critico. Non ci interessa la lotta politica fine a se stessa, ma la qualità della discussione pubblica.
            </p>
            <p>
              Ogni nostra analisi parte dai documenti. Perché i fatti non hanno colore politico, ma hanno bisogno di essere portati alla luce con competenza e rigore.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-form-section bg-secondary" id="contatti">
        <div className="container narrow-container">
          <div className="section-header">
            <h2>Contattaci</h2>
            <p>Hai domande o vuoi collaborare con noi?</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center">
          <h2 className="serif-italic">&quot;Niente di personale.&quot;</h2>
          <p>Unisciti alla nostra visione di una politica più trasparente.</p>
          <button className="btn-secondary">Diventa Socio</button>
        </div>
      </section>
    </>
  );
}

const ContactForm: React.FC = () => {
  const [status, setStatus] = React.useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ type: 'success', message: result.message });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({ type: 'error', message: result.message });
      }
    } catch {
      setStatus({ type: 'error', message: 'Errore di connessione. Riprova più tardi.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" placeholder="Il tuo nome" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="la-tua@email.it" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Messaggio</label>
          <textarea id="message" name="message" placeholder="Come possiamo aiutarti?" rows={5} required></textarea>
        </div>
        <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Invio in corso...' : <><Send size={18} /><span>Invia Messaggio</span></>}
        </button>
        {status.type && (
          <div className={`form-message ${status.type}`}>
            {status.message}
          </div>
        )}
      </form>
    </div>
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
