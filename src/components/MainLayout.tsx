"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Landmark, Menu, X } from 'lucide-react';
import CookieBanner from './CookieBanner';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

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
                        <Link href="/statuto" className={isActive('/statuto') ? 'active' : ''}>Statuto</Link>
                        <Link href="/trasparenza" className={isActive('/trasparenza') ? 'active' : ''}>Trasparenza</Link>
                        <a href="mailto:info@pandora.it" className="btn-primary">Contattaci</a>
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
                        <Link href="/statuto" className={isActive('/statuto') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Statuto</Link>
                        <Link href="/trasparenza" className={isActive('/trasparenza') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Trasparenza</Link>
                        <a href="mailto:info@pandora.it" className="btn-primary">Contattaci</a>
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
                        <p>© 2026 Pandora Osservatorio Civico.</p>
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
        </div>
    );
};

export default MainLayout;
