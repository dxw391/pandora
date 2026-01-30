"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Landmark, Menu, X } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import CookieBanner from './CookieBanner';
import AuthModal from './AuthModal';
import UserMenu from './UserMenu';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const pathname = usePathname();
    const supabase = createClient();

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

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
            window.history.replaceState
                ? window.history.replaceState(null, '', window.location.href.split('#')[0])
                : window.location.hash = '';
        }

        return () => subscription.unsubscribe();
    }, [supabase.auth]);

    const isActive = (path: string) => pathname === path;

    return (
        <div className="app">
            <motion.div className="progress-bar" style={{ scaleX }} />
            <CookieBanner />

            <header className="header">
                <div className="container header-content">
                    <Link href="/" className="logo">
                        <Landmark size={24} />
                        <span>PANDORA</span>
                    </Link>

                    <nav className="nav desktop-nav">
                        <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
                        <Link href="/chi-siamo" className={isActive('/chi-siamo') ? 'active' : ''}>Chi Siamo</Link>
                        <Link href="/blog" className={isActive('/blog') ? 'active' : ''}>Blog</Link>
                        <Link href="/temi" className={isActive('/temi') ? 'active' : ''}>Temi</Link>
                        <Link href="/statuto" className={isActive('/statuto') ? 'active' : ''}>Statuto</Link>
                        <Link href="/trasparenza" className={isActive('/trasparenza') ? 'active' : ''}>Trasparenza</Link>

                        {!loading && (
                            user ? (
                                <UserMenu user={user} />
                            ) : (
                                <button onClick={() => setIsAuthModalOpen(true)} className="btn-primary">Accedi</button>
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
                        <Link href="/temi" className={isActive('/temi') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Temi</Link>
                        <Link href="/statuto" className={isActive('/statuto') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Statuto</Link>
                        <Link href="/trasparenza" className={isActive('/trasparenza') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Trasparenza</Link>

                        {!loading && !user && (
                            <button onClick={() => {
                                setIsMenuOpen(false);
                                setIsAuthModalOpen(true);
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

            <main>
                {children}
            </main>

            <footer className="footer" id="contatti">
                <div className="container footer-content">
                    <div className="footer-brand">
                        <div className="logo">
                            <Landmark size={20} />
                            <span>PANDORA</span>
                        </div>
                        <p>© 2026 Pandora Osservatorio Civico Solofra.</p>
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
                            <Link href="/temi">Temi</Link>
                            <Link href="/statuto">Statuto</Link>
                            <Link href="/trasparenza">Trasparenza</Link>
                        </div>
                        <div className="link-group">
                            <h4>Social</h4>
                            <a href="#">Facebook</a>
                            <a href="#">Instagram</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>
                </div>
            </footer>

            <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
        </div>
    );
};

export default MainLayout;
