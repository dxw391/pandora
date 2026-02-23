"use client";

import React from 'react';
import PandoraIcon from '@/components/PandoraIcon';

export default function LogoPage() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            width: '100%',
            backgroundColor: '#e1ab09',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem'
            }}>
                <PandoraIcon
                    fill="var(--brand-primary, #e1ab09)"
                    stroke="var(--bg-dark, #0a0a0a)"
                    size={240}
                    strokeWidth={4}
                />
                <h1 style={{
                    color: '#0a0a0a',
                    fontSize: '3.5rem',
                    fontWeight: '300',
                    letterSpacing: '0.2em',
                    margin: 0,
                    fontFamily: 'var(--font-sans)',
                    opacity: 0.9
                }}>
                    PANDORA
                </h1>
            </div>
        </div>
    );
}
