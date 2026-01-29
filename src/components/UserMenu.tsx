"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import { User as UserIcon, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function UserMenu() {
    const [user, setUser] = useState<User | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const supabase = createClient();

    useEffect(() => {
        // Get initial user
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user);
        });

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, [supabase.auth]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        window.location.reload();
    };

    if (!user) return null;

    return (
        <div className="user-menu">
            <button
                className="user-menu-trigger"
                onClick={() => setIsOpen(!isOpen)}
            >
                <UserIcon size={20} />
                <span>{user.user_metadata?.full_name || user.email}</span>
            </button>

            {isOpen && (
                <div className="user-menu-dropdown">
                    <Link href="/profilo" onClick={() => setIsOpen(false)}>
                        <UserIcon size={16} /> Il Mio Profilo
                    </Link>
                    <button onClick={handleSignOut}>
                        <LogOut size={16} /> Esci
                    </button>
                </div>
            )}
        </div>
    );
}
