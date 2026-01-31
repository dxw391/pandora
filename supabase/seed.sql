-- Seed Themes
-- Copy and paste this into the Supabase SQL Editor to populate the themes table.

INSERT INTO themes (slug, title, description)
VALUES
  ('ambiente', 'Ambiente', 'Analisi e proposte per la tutela del territorio, la gestione dei rifiuti e la sostenibilità ambientale a Solofra.'),
  ('mobilita', 'Mobilità', 'Idee per migliorare la viabilità cittadina, promuovere il trasporto pubblico e la mobilità sostenibile.'),
  ('scuola', 'Scuola', 'Monitoraggio dell''edilizia scolastica e proposte per servizi integrativi e formativi per i più giovani.')
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description;
