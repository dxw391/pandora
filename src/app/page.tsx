"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Send } from 'lucide-react';
import { useUI } from '@/components/providers/UIProvider';

export default function HomePage() {
  const { openAuthModal } = useUI();

  return (
    <>
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container hero-content"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="badge"
            style={{ color: 'var(--brand-primary)', fontWeight: 800, letterSpacing: '0.2em' }}
          >
            Osservatorio Civico
          </motion.span>
          <h1>Niente di personale</h1>

        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="scroll-indicator"
        >
          <ChevronDown size={32} />
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
              &quot;Pandora mette insieme le persone e crea iniziative e progetti per migliorare la qualità della discussione politica.&quot;
            </motion.p>
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
          <h2 style={{ textTransform: 'lowercase', fontSize: '5rem', opacity: 0.1, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none', width: '100%', textAlign: 'center' }}>pandora</h2>
          <h2 className="serif-italic" style={{ color: 'var(--bg-dark)', opacity: 0.8 }}>&quot;Niente di personale.&quot;</h2>
          <p style={{ color: 'var(--bg-dark)' }}>Unisciti alla nostra visione di una politica più trasparente.</p>
          <button className="btn-secondary" onClick={() => openAuthModal('signup')}>Diventa Socio</button>
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

