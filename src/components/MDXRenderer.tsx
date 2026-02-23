"use client";

import React, { useMemo } from 'react';
import * as runtime from 'react/jsx-runtime';

interface MDXRendererProps {
    code: string;
}

const MDXRenderer = ({ code }: MDXRendererProps) => {
    const Component = useMemo(() => {
        try {
            const fn = new Function(code);
            return fn(runtime).default;
        } catch (error) {
            console.error('Failed to render MDX:', error);
            return () => <p className="text-error">Errore nel caricamento del contenuto.</p>;
        }
    }, [code]);

    return <Component />;
};

export default MDXRenderer;
