import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { themes } from 'content';
import ProposalForm from '@/components/ProposalForm';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function NuovaPropostaPage({ params }: { params: Promise<{ theme: string }> }) {
    const { theme: themeSlug } = await params;
    const supabase = await createClient();

    // Check authentication
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect(`/temi/${themeSlug}`);
    }

    // Get theme from Velite (for now, until we migrate to DB)
    const theme = themes.find((t) => t.slug === themeSlug);

    if (!theme) {
        redirect('/temi');
    }

    // Get theme ID from database
    const { data: dbTheme } = await supabase
        .from('themes')
        .select('id')
        .eq('slug', themeSlug)
        .single();

    if (!dbTheme) {
        redirect('/temi');
    }

    return (
        <div className="page-content">
            <section className="page-header">
                <div className="container">
                    <Link href={`/temi/${themeSlug}`} className="link-arrow mb-8 inline-flex items-center gap-2 text-sm">
                        <ArrowLeft size={16} /> Torna a {theme.title}
                    </Link>
                    <h1>Proponi una Nuova Iniziativa</h1>
                    <p className="subtitle">
                        Condividi la tua idea per migliorare {theme.title}
                    </p>
                </div>
            </section>

            <section className="bg-secondary">
                <div className="container">
                    <div className="proposal-form-container">
                        <div className="info-card mb-8">
                            <h3>Come funziona?</h3>
                            <ol className="numbered-list">
                                <li>Compila il form con la tua proposta</li>
                                <li>Il team di Pandora la esaminerà</li>
                                <li>Se approvata, sarà pubblicata e altri potranno supportarla</li>
                                <li>Le proposte più supportate saranno prioritizzate</li>
                            </ol>
                        </div>

                        <ProposalForm
                            themeId={dbTheme.id}
                            themeSlug={themeSlug}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
