"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';
import { ThumbsUp } from 'lucide-react';

interface VoteButtonProps {
    proposalId: number;
    initialVoteCount: number;
}

export default function VoteButton({ proposalId, initialVoteCount }: VoteButtonProps) {
    const [voteCount, setVoteCount] = useState(initialVoteCount);
    const [hasVoted, setHasVoted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const supabase = createClient();

    const checkVoteStatus = useCallback(async () => {
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            setIsAuthenticated(false);
            return;
        }

        setIsAuthenticated(true);

        // Check if user has already voted
        const { data } = await supabase
            .from('proposal_votes')
            .select('id')
            .eq('proposal_id', proposalId)
            .eq('user_id', user.id)
            .single();

        setHasVoted(!!data);
    }, [proposalId, supabase]);

    useEffect(() => {
        checkVoteStatus();
    }, [checkVoteStatus]);

    const handleVote = async () => {
        if (!isAuthenticated) {
            alert('Devi effettuare il login per votare');
            return;
        }

        setLoading(true);

        try {
            const method = hasVoted ? 'DELETE' : 'POST';
            const response = await fetch(`/api/proposals/${proposalId}/vote`, {
                method,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Errore nel voto');
            }

            setVoteCount(data.voteCount);
            setHasVoted(!hasVoted);
        } catch (error) {
            const err = error as Error;
            alert(err.message || 'Si è verificato un errore');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="vote-button-container">
            <div className="support-count">
                <ThumbsUp size={24} className={hasVoted ? 'text-accent-secondary' : ''} />
                <span>{voteCount} sostenitori</span>
            </div>
            <button
                className={`btn-primary w-full mt-4 ${hasVoted ? 'btn-success' : ''}`}
                onClick={handleVote}
                disabled={loading || !isAuthenticated}
            >
                {loading
                    ? 'Caricamento...'
                    : hasVoted
                        ? 'Proposta Supportata!'
                        : isAuthenticated
                            ? 'Supporta Proposta'
                            : 'Accedi per Supportare'}
            </button>
        </div>
    );
}
