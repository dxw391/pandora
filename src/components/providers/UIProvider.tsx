"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UIContextType {
    isAuthModalOpen: boolean;
    authMode: 'login' | 'signup';
    openAuthModal: (mode?: 'login' | 'signup') => void;
    closeAuthModal: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

    const openAuthModal = (mode: 'login' | 'signup' = 'login') => {
        setAuthMode(mode);
        setIsAuthModalOpen(true);
    };
    const closeAuthModal = () => setIsAuthModalOpen(false);

    return (
        <UIContext.Provider value={{ isAuthModalOpen, authMode, openAuthModal, closeAuthModal }}>
            {children}
        </UIContext.Provider>
    );
}

export function useUI() {
    const context = useContext(UIContext);
    if (context === undefined) {
        throw new Error('useUI must be used within a UIProvider');
    }
    return context;
}
