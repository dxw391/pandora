"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Leaf, Car, GraduationCap, ArrowRight, Lightbulb } from 'lucide-react';

export interface ThemeWithCount {
    id: number;
    slug: string;
    title: string;
    description: string | null;
    icon: string | null;
    proposalCount: number;
}

const iconMap: Record<string, React.ReactNode> = {
    Leaf: <Leaf size={32} />,
    Car: <Car size={32} />,
    GraduationCap: <GraduationCap size={32} />,
    Lightbulb: <Lightbulb size={32} />,
};

interface ThemesGridProps {
    themes: ThemeWithCount[];
}

export default function ThemesGrid({ themes }: ThemesGridProps) {
    // Sort themes by count (descending) or title? Let's keep DB order for now, or sort by id.
    // Usually DB returns in insertion order if no sort specified, but let's assume the passed array is ordered.

    return (
        <div className="themes-grid">
            {themes.map((theme, index) => (
                <motion.div
                    key={theme.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="theme-card"
                >
                    <div className="theme-icon">
                        {theme.icon && iconMap[theme.icon] ? iconMap[theme.icon] : <Lightbulb size={32} />}
                    </div>
                    <h3 className="theme-title">{theme.title}</h3>
                    <p className="theme-description">{theme.description}</p>
                    <div className="theme-stats">
                        <span className="stats-badge">
                            {theme.proposalCount} Proposte
                        </span>
                    </div>
                    <Link href={`/temi/${theme.slug}`} className="btn-outline w-full mt-auto">
                        Esplora Tema <ArrowRight size={16} />
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}
