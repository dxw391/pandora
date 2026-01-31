"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Youtube, Facebook, Instagram } from 'lucide-react';
import PandoraIcon from './PandoraIcon';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import CookieBanner from './CookieBanner';
import AuthModal from './AuthModal';
import UserMenu from './UserMenu';
import { useUI } from './providers/UIProvider';
import { featureFlags } from '@/lib/featureFlags';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAuthModalOpen, openAuthModal, closeAuthModal } = useUI();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const pathname = usePathname();
    const supabase = createClient();

    const { scrollYProgress, scrollY } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 20);
        });
    }, [scrollY]);

    useEffect(() => {
        // Auth Listener
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        };

        getUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });

        // URL Cleanup for Facebook hash
        if (window.location.hash === '#_=_') {
            if (window.history.replaceState) {
                window.history.replaceState(null, '', window.location.href.split('#')[0]);
            } else {
                window.location.hash = '';
            }
        }

        return () => subscription.unsubscribe();
    }, [supabase.auth]);

    const isActive = (path: string) => pathname === path;

    const isCleanPage = pathname === '/logo';

    return (
        <div className="app">
            <motion.div className="progress-bar" style={{ scaleX, background: isScrolled ? 'var(--brand-primary)' : 'var(--bg-dark)' }} />
            <CookieBanner />

            {!isCleanPage && (
                <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                    <div className="container header-content">
                        <Link href="/" className="logo">
                            <PandoraIcon stroke="var(--bg-dark)" fill="var(--brand-primary)" size={36} strokeWidth={8} />
                            <span className="logo-text">pandora</span>
                        </Link>

                        <nav className="nav desktop-nav">
                            <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
                            <Link href="/chi-siamo" className={isActive('/chi-siamo') ? 'active' : ''}>Chi Siamo</Link>
                            <Link href="/blog" className={isActive('/blog') ? 'active' : ''}>Blog</Link>
                            {featureFlags.THEMES_ENABLED && (
                                <Link href="/temi" className={isActive('/temi') ? 'active' : ''}>Temi</Link>
                            )}

                            {featureFlags.AUTH_ENABLED && !loading && (
                                user ? (
                                    <UserMenu user={user} />
                                ) : (
                                    <button onClick={() => openAuthModal()} className="btn-primary">Accedi</button>
                                )
                            )}
                        </nav>

                        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mobile-nav"
                        >
                            <Link href="/" className={isActive('/') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link href="/chi-siamo" className={isActive('/chi-siamo') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Chi Siamo</Link>
                            <Link href="/blog" className={isActive('/blog') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Blog</Link>
                            {featureFlags.THEMES_ENABLED && (
                                <Link href="/temi" className={isActive('/temi') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Temi</Link>
                            )}

                            {featureFlags.AUTH_ENABLED && !loading && !user && (
                                <button onClick={() => {
                                    setIsMenuOpen(false);
                                    openAuthModal();
                                }} className="btn-primary w-full mt-4">Accedi</button>
                            )}

                            {/* If user is logged in on mobile, UserMenu acts as a dropdown in desktop, but for mobile we might want a direct link or keeping it simple. 
                            However, the UserMenu component is built as a dropdown. For mobile, usually you want inline items.
                            For now, keeping the desktop behavior is safer, OR we render the UserMenu here too. 
                            The current implementation of UserMenu is click-trigger dropdown. It works on mobile too.
                            Let's append it or conditionally render the button.
                        */}
                        </motion.div>
                    )}
                </header>
            )}

            <main>
                {children}
            </main>

            {!isCleanPage && (
                <footer className="footer" id="contatti">
                    <div className="container footer-content">
                        <div className="footer-brand">
                            <div className="logo">
                                <PandoraIcon fill="var(--brand-primary)" stroke="var(--bg-dark)" size={32} />
                                <span className="logo-text" style={{ color: 'white' }}>pandora</span>
                            </div>
                            <p>© 2026 Pandora</p>
                            <div className="legal-footer-links">
                                <Link href="/privacy">Privacy Policy</Link>
                                <span> • </span>
                                <Link href="/cookies">Cookie Policy</Link>
                            </div>
                        </div>
                        <div className="footer-links">
                            <div className="link-group">
                                <h4>Associazione</h4>
                                <Link href="/chi-siamo">Chi siamo</Link>
                                <Link href="/blog">Blog</Link>
                                {featureFlags.THEMES_ENABLED && <Link href="/temi">Temi</Link>}
                                <Link href="/statuto">Statuto</Link>
                            </div>
                            <div className="link-group">
                                <h4>Social</h4>
                                <a href="https://www.facebook.com/profile.php?id=61586999413385" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <Facebook size={18} />
                                    <span>Facebook</span>
                                </a>
                                <a href="https://www.instagram.com/pandoranientedipersonale/" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <Instagram size={18} />
                                    <span>Instagram</span>
                                </a>
                                <a href="https://www.youtube.com/@PandoraNienteDiPersonale" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <Youtube size={18} />
                                    <span>YouTube</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            )}

            {featureFlags.AUTH_ENABLED && <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />}
        </div>
    );
};

export default MainLayout;
