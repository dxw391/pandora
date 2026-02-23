import React, { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import { User as UserIcon, LogOut } from 'lucide-react';
import Link from 'next/link';

interface UserMenuProps {
    user: User;
}

export default function UserMenu({ user }: UserMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const supabase = createClient();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        window.location.reload();
    };

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
