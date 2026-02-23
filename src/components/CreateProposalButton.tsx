"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { useUI } from './providers/UIProvider';

interface CreateProposalButtonProps {
    themeSlug: string;
    className?: string;
    children?: React.ReactNode;
}

export default function CreateProposalButton({
    themeSlug,
    className = "",
    children = "Proponi Iniziativa"
}: CreateProposalButtonProps) {
    const router = useRouter();
    const { openAuthModal } = useUI();
    const supabase = createClient();

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();

        const { data: { user } } = await supabase.auth.getUser();

        if (user) {
            router.push(`/temi/${themeSlug}/nuova-proposta`);
        } else {
            openAuthModal();
        }
    };

    return (
        <button
            onClick={handleClick}
            className={className}
        >
            {children}
        </button>
    );
}
