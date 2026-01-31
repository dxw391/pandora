-- ============================================
-- PANDORA - Database Schema for Temi Platform
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 1. PROFILES TABLE (extends auth.users)
-- ============================================
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Public profiles are viewable by everyone"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- ============================================
-- 2. THEMES TABLE
-- ============================================
CREATE TABLE public.themes (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  icon TEXT,
  description TEXT,
  body TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.themes ENABLE ROW LEVEL SECURITY;

-- Policies for themes (read-only for everyone)
CREATE POLICY "Themes are viewable by everyone"
  ON public.themes FOR SELECT
  USING (true);

-- ============================================
-- 3. PROPOSALS TABLE
-- ============================================
CREATE TABLE public.proposals (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  theme_id INTEGER REFERENCES public.themes(id) ON DELETE CASCADE,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT,
  body TEXT NOT NULL,
  status TEXT DEFAULT 'idea' CHECK (status IN ('idea', 'analisi', 'discussione', 'programma', 'realizzato')),
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.proposals ENABLE ROW LEVEL SECURITY;

-- Policies for proposals
CREATE POLICY "Approved proposals are viewable by everyone"
  ON public.proposals FOR SELECT
  USING (is_approved = true);

CREATE POLICY "Users can view their own proposals"
  ON public.proposals FOR SELECT
  USING (auth.uid() = author_id);

CREATE POLICY "Authenticated users can create proposals"
  ON public.proposals FOR INSERT
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Users can update own proposals"
  ON public.proposals FOR UPDATE
  USING (auth.uid() = author_id);

-- ============================================
-- 4. PROPOSAL ARGUMENTS (Pro/Contro)
-- ============================================
CREATE TABLE public.proposal_arguments (
  id SERIAL PRIMARY KEY,
  proposal_id INTEGER REFERENCES public.proposals(id) ON DELETE CASCADE,
  type TEXT CHECK (type IN ('pro', 'con')),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.proposal_arguments ENABLE ROW LEVEL SECURITY;

-- Policies for arguments
CREATE POLICY "Arguments for approved proposals are viewable"
  ON public.proposal_arguments FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.proposals
      WHERE proposals.id = proposal_arguments.proposal_id
      AND proposals.is_approved = true
    )
  );

-- ============================================
-- 5. PROPOSAL VOTES TABLE
-- ============================================
CREATE TABLE public.proposal_votes (
  id SERIAL PRIMARY KEY,
  proposal_id INTEGER REFERENCES public.proposals(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(proposal_id, user_id)
);

-- Enable Row Level Security
ALTER TABLE public.proposal_votes ENABLE ROW LEVEL SECURITY;

-- Policies for votes
CREATE POLICY "Votes are viewable by everyone"
  ON public.proposal_votes FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can vote"
  ON public.proposal_votes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own votes"
  ON public.proposal_votes FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- 6. VIEWS & FUNCTIONS
-- ============================================

-- View for proposal vote counts
CREATE OR REPLACE VIEW public.proposal_vote_counts AS
SELECT 
  proposal_id, 
  COUNT(*) as vote_count
FROM public.proposal_votes
GROUP BY proposal_id;

-- Function to automatically create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'username',
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- 7. INDEXES for Performance
-- ============================================
CREATE INDEX idx_proposals_theme_id ON public.proposals(theme_id);
CREATE INDEX idx_proposals_author_id ON public.proposals(author_id);
CREATE INDEX idx_proposals_is_approved ON public.proposals(is_approved);
CREATE INDEX idx_proposal_votes_proposal_id ON public.proposal_votes(proposal_id);
CREATE INDEX idx_proposal_votes_user_id ON public.proposal_votes(user_id);
CREATE INDEX idx_proposal_arguments_proposal_id ON public.proposal_arguments(proposal_id);

-- ============================================
-- 8. SEED DATA (Initial Themes)
-- ============================================
INSERT INTO public.themes (slug, title, icon, description, body) VALUES
('ambiente', 'Ambiente', 'Leaf', 'Analisi e proposte per la tutela del territorio, la gestione dei rifiuti e la sostenibilità ambientale a Solofra.', 'L''ambiente è il nostro patrimonio più prezioso. In questa sezione analizziamo lo stato del territorio e proponiamo soluzioni concrete per una Solofra più verde e vivibile.'),
('mobilita', 'Mobilità', 'Car', 'Idee per migliorare la viabilità cittadina, promuovere il trasporto pubblico e la mobilità sostenibile.', 'Come ci muoviamo definisce la qualità della nostra vita. Analizziamo i flussi di traffico e proponiamo alternative per ridurre l''inquinamento e lo stress da traffico.'),
('scuola', 'Scuola', 'GraduationCap', 'Monitoraggio dell''edilizia scolastica e proposte per servizi integrativi e formativi per i più giovani.', 'La scuola è il cuore del nostro futuro. Ci impegniamo a monitorare lo stato degli edifici e a proporre iniziative che arricchiscano l''offerta formativa locale.');

-- ============================================
-- 9. PODCASTS TABLE
-- ============================================
CREATE TABLE public.podcasts (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  body TEXT,
  duration TEXT,
  audio_url TEXT,
  cover_url TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  is_published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.podcasts ENABLE ROW LEVEL SECURITY;

-- Policies for podcasts (published podcasts are viewable by everyone)
CREATE POLICY "Published podcasts are viewable by everyone"
  ON public.podcasts FOR SELECT
  USING (is_published = true);

-- Index for performance
CREATE INDEX idx_podcasts_slug ON public.podcasts(slug);
CREATE INDEX idx_podcasts_is_published ON public.podcasts(is_published);
CREATE INDEX idx_podcasts_published_at ON public.podcasts(published_at DESC);

-- ============================================
-- SEED DATA: Initial Podcast Episode
-- ============================================
INSERT INTO public.podcasts (slug, title, description, body, duration, is_featured, is_published, published_at) VALUES
('episodio-pilota', 'Episodio Pilota: Apriamo il Vaso', 
'Nel primo episodio del podcast di Pandora parliamo della nascita dell''osservatorio civico, del nostro metodo di analisi e di cosa aspettarsi dalle prossime puntate.',
'# Episodio Pilota: Apriamo il Vaso

Benvenuti al primo episodio del podcast di Pandora, l''osservatorio civico di Solofra.

In questa puntata inaugurale parliamo di:

- **Chi siamo**: la nascita di Pandora e la nostra missione
- **Il nostro metodo**: come analizziamo documenti e atti amministrativi
- **Cosa aspettarsi**: i temi che affronteremo nelle prossime puntate
- **Solofra**: un primo sguardo sui temi caldi del nostro territorio

## Perché un podcast?

Il podcast è uno strumento diretto, senza filtri, che ci permette di raccontare in profondità ciò che un post sui social non può contenere. Vogliamo creare uno spazio di riflessione, non di polemica.

## Prossimi episodi

Nelle prossime settimane parleremo di bilancio comunale, trasparenza amministrativa e delle proposte dei cittadini.

**Buon ascolto!**',
'32:15', true, true, NOW());

