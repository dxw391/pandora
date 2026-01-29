# Guida Setup Supabase per Pandora

Questa guida ti aiuterà a configurare Supabase per il sistema di autenticazione e votazione.

## 1. Crea un Progetto Supabase

1. Vai su [supabase.com](https://supabase.com) e crea un account gratuito
2. Clicca su "New Project"
3. Scegli un nome (es. "pandora-solofra")
4. Imposta una password sicura per il database
5. Seleziona la regione più vicina (es. "Europe West")
6. Clicca su "Create new project" e attendi qualche minuto

## 2. Ottieni le Credenziali

1. Nel dashboard del progetto, vai su **Settings** → **API**
2. Copia i seguenti valori:
   - **Project URL** (es. `https://xxxxx.supabase.co`)
   - **anon public** key (la chiave pubblica)

3. Crea il file `.env.local` nella root del progetto con questi valori:

```bash
# Copia da .env.example e sostituisci con i tuoi valori
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Mantieni anche le altre variabili
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your-email@example.com
```

## 3. Esegui lo Schema del Database

1. Nel dashboard Supabase, vai su **SQL Editor**
2. Clicca su "New query"
3. Copia tutto il contenuto del file `supabase/schema.sql`
4. Incollalo nell'editor SQL
5. Clicca su "Run" per eseguire lo script

Questo creerà:
- Tabelle per profili, temi, proposte, argomenti e voti
- Politiche di sicurezza (Row Level Security)
- Trigger automatici per la creazione dei profili
- Dati iniziali per i 3 temi (Ambiente, Mobilità, Scuola)

## 4. Configura l'Autenticazione Email

1. Vai su **Authentication** → **Providers**
2. Assicurati che **Email** sia abilitato
3. In **Email Templates**, puoi personalizzare le email di conferma (opzionale)

### Importante per lo Sviluppo Locale

Durante lo sviluppo, Supabase invia email di conferma. Per testare più facilmente:

1. Vai su **Authentication** → **Settings**
2. Disabilita temporaneamente "Enable email confirmations" (solo per sviluppo!)
3. Ricordati di riabilitarlo prima di andare in produzione

## 5. Testa l'Autenticazione

1. Riavvia il server Next.js: `npm run dev`
2. Vai su http://localhost:3000
3. Clicca su "Accedi" nel menu
4. Prova a registrare un nuovo utente
5. Verifica nel dashboard Supabase (**Authentication** → **Users**) che l'utente sia stato creato

## 6. (Opzionale) Configura OAuth Providers

Se vuoi permettere login con Google/Facebook:

1. Vai su **Authentication** → **Providers**
2. Abilita il provider desiderato (es. Google)
3. Segui le istruzioni per ottenere Client ID e Secret
4. Aggiorna il codice in `AuthModal.tsx` per includere i pulsanti OAuth

## Prossimi Passi

Una volta completato il setup:
- ✅ Gli utenti possono registrarsi e fare login
- ✅ Il database è pronto per proposte e voti
- ⏳ Prossimo: Implementare il form di creazione proposte
- ⏳ Prossimo: Collegare il sistema di voti al database

## Troubleshooting

### "Invalid API key"
- Verifica che le variabili in `.env.local` siano corrette
- Riavvia il server Next.js dopo aver modificato `.env.local`

### "User already registered"
- Controlla nel dashboard Supabase → Authentication → Users
- Puoi eliminare l'utente di test e riprovare

### Le email non arrivano
- Controlla lo spam
- In sviluppo, disabilita la conferma email (vedi punto 4)
- Verifica i log in **Authentication** → **Logs**
