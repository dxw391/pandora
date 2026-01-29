import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Landmark, Menu, X } from 'lucide-react';
import CookieBanner from '../components/CookieBanner';

const MainLayout: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="app">
            <motion.div className="progress-bar" style={{ scaleX }} />
            <CookieBanner />

            <header className="header">
                <div className="container header-content">
                    <Link to="/" className="logo">
                        <Landmark size={24} />
                        <span>PANDORA</span>
                    </Link>

                    <nav className="nav desktop-nav">
                        <NavLink to="/" end>Home</NavLink>
                        <NavLink to="/chi-siamo">Chi Siamo</NavLink>
                        <NavLink to="/statuto">Statuto</NavLink>
                        <NavLink to="/trasparenza">Trasparenza</NavLink>
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
                        <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                        <NavLink to="/chi-siamo" onClick={() => setIsMenuOpen(false)}>Chi Siamo</NavLink>
                        <NavLink to="/statuto" onClick={() => setIsMenuOpen(false)}>Statuto</NavLink>
                        <NavLink to="/trasparenza" onClick={() => setIsMenuOpen(false)}>Trasparenza</NavLink>
                        <a href="mailto:info@pandora.it" className="btn-primary">Contattaci</a>
                    </motion.div>
                )}
            </header>

            <main>
                <Outlet />
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
                            <Link to="/privacy">Privacy Policy</Link>
                            <span> • </span>
                            <Link to="/cookies">Cookie Policy</Link>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Associazione</h4>
                            <Link to="/chi-siamo">Chi siamo</Link>
                            <Link to="/statuto">Statuto</Link>
                            <Link to="/trasparenza">Trasparenza</Link>
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
