"use client";

import React, { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { X } from 'lucide-react';
import { useUI } from './providers/UIProvider';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const { authMode } = useUI();
    const [mode, setMode] = useState<'login' | 'signup'>(authMode);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const supabase = createClient();

    React.useEffect(() => {
        if (isOpen) {
            setMode(authMode);
        }
    }, [isOpen, authMode]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        try {
            if (mode === 'signup') {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            full_name: fullName,
                        },
                    },
                });

                if (error) throw error;
                setMessage('Controlla la tua email per confermare la registrazione!');
                setTimeout(() => {
                    setMode('login');
                    setMessage(null);
                }, 3000);
            } else {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });

                if (error) throw error;
                onClose();
                window.location.reload();
            }
        } catch (err) {
            const error = err as Error;
            setError(error.message || 'Si è verificato un errore');
        } finally {
            setLoading(false);
        }
    };

    const handleOAuthLogin = async (provider: 'google' | 'facebook') => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`,
                },
            });

            if (error) throw error;
        } catch (err) {
            const error = err as Error;
            setError(error.message || 'Si è verificato un errore');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="auth-modal-overlay" onClick={onClose}>
            <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
                <button className="auth-modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <h2>{mode === 'login' ? 'Accedi' : 'Registrati'}</h2>
                <p className="auth-modal-subtitle">
                    {mode === 'login'
                        ? 'Accedi per votare e proporre iniziative'
                        : 'Crea un account per partecipare'}
                </p>

                {/* OAuth Buttons */}
                <div className="oauth-buttons">
                    <button
                        type="button"
                        onClick={() => handleOAuthLogin('google')}
                        className="btn-oauth btn-google"
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4" />
                            <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z" fill="#34A853" />
                            <path d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
                            <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.003 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335" />
                        </svg>
                        Continua con Google
                    </button>

                    <button
                        type="button"
                        onClick={() => handleOAuthLogin('facebook')}
                        className="btn-oauth btn-facebook"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Continua con Facebook
                    </button>
                </div>

                <div className="divider">
                    <span>oppure</span>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    {mode === 'signup' && (
                        <div className="form-group">
                            <label htmlFor="fullName">Nome Completo</label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required={mode === 'signup'}
                                placeholder="Mario Rossi"
                            />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="tua@email.it"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                            placeholder="Almeno 6 caratteri"
                        />
                    </div>

                    {error && <div className="form-message error">{error}</div>}
                    {message && <div className="form-message success">{message}</div>}

                    <button type="submit" className="btn-primary w-full" disabled={loading}>
                        {loading ? 'Caricamento...' : mode === 'login' ? 'Accedi' : 'Registrati'}
                    </button>
                </form>

                <div className="auth-modal-footer">
                    {mode === 'login' ? (
                        <p>
                            Non hai un account?{' '}
                            <button onClick={() => setMode('signup')} className="link-button">
                                Registrati
                            </button>
                        </p>
                    ) : (
                        <p>
                            Hai già un account?{' '}
                            <button onClick={() => setMode('login')} className="link-button">
                                Accedi
                            </button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
