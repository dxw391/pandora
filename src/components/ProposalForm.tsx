"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, X } from 'lucide-react';

interface ProposalFormProps {
    themeId: number;
    themeSlug: string;
}

export default function ProposalForm({ themeId, themeSlug }: ProposalFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const [pros, setPros] = useState<string[]>(['']);
    const [cons, setCons] = useState<string[]>(['']);

    const addPro = () => setPros([...pros, '']);
    const removePro = (index: number) => setPros(pros.filter((_, i) => i !== index));
    const updatePro = (index: number, value: string) => {
        const newPros = [...pros];
        newPros[index] = value;
        setPros(newPros);
    };

    const addCon = () => setCons([...cons, '']);
    const removeCon = (index: number) => setCons(cons.filter((_, i) => i !== index));
    const updateCon = (index: number, value: string) => {
        const newCons = [...cons];
        newCons[index] = value;
        setCons(newCons);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/proposals', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    theme_id: themeId,
                    title,
                    description,
                    body,
                    pros: pros.filter(p => p.trim()),
                    cons: cons.filter(c => c.trim()),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Errore nella creazione');
            }

            // Redirect to theme page with success message
            router.push(`/temi/${themeSlug}?success=proposal_created`);
        } catch (err) {
            const error = err as Error;
            setError(error.message || 'Si è verificato un errore');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="proposal-form">
            <div className="form-group">
                <label htmlFor="title">Titolo della Proposta *</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    maxLength={99}
                    placeholder="Es: Pista ciclabile nel centro storico"
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Descrizione Breve *</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    maxLength={999}
                    rows={3}
                    placeholder="Una breve descrizione della proposta (max 999 caratteri)"
                />
            </div>

            <div className="form-group">
                <label htmlFor="body">Descrizione Dettagliata *</label>
                <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                    rows={8}
                    placeholder="Descrivi in dettaglio la tua proposta, i benefici attesi e come potrebbe essere realizzata..."
                />
            </div>

            <div className="pros-cons-form-grid">
                <div className="form-group">
                    <label>Punti di Forza (opzionale)</label>
                    {pros.map((pro, index) => (
                        <div key={index} className="input-with-button">
                            <input
                                type="text"
                                value={pro}
                                onChange={(e) => updatePro(index, e.target.value)}
                                placeholder="Es: Riduce il traffico"
                            />
                            {pros.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removePro(index)}
                                    className="btn-icon-danger"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addPro} className="btn-outline btn-sm">
                        <Plus size={16} /> Aggiungi Punto di Forza
                    </button>
                </div>

                <div className="form-group">
                    <label>Criticità (opzionale)</label>
                    {cons.map((con, index) => (
                        <div key={index} className="input-with-button">
                            <input
                                type="text"
                                value={con}
                                onChange={(e) => updateCon(index, e.target.value)}
                                placeholder="Es: Costo elevato"
                            />
                            {cons.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeCon(index)}
                                    className="btn-icon-danger"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addCon} className="btn-outline btn-sm">
                        <Plus size={16} /> Aggiungi Criticità
                    </button>
                </div>
            </div>

            {error && <div className="form-message error">{error}</div>}

            <div className="form-actions">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="btn-outline"
                >
                    Annulla
                </button>
                <button type="submit" className="btn-primary" disabled={loading}>
                    {loading ? 'Invio in corso...' : 'Invia Proposta'}
                </button>
            </div>

            <p className="form-note">
                * La tua proposta sarà sottoposta a moderazione prima di essere pubblicata.
            </p>
        </form>
    );
}
