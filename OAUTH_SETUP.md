# Configurazione OAuth Providers (Google & Facebook)

Questa guida ti aiuterà a configurare Google e Facebook come provider OAuth per Pandora.

---

## 🔵 Google OAuth

### 1. Crea un Progetto Google Cloud

1. Vai su [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuovo progetto o selezionane uno esistente
3. Vai su **APIs & Services** → **Credentials**

### 2. Configura OAuth Consent Screen

1. Clicca su **OAuth consent screen** nella sidebar
2. Seleziona **External** come tipo di utente
3. Compila i campi obbligatori:
   - **App name**: Pandora - Osservatorio Civico Solofra
   - **User support email**: tua-email@example.com
   - **Developer contact**: tua-email@example.com
4. Clicca **Save and Continue**
5. Salta gli "Scopes" (clicca **Save and Continue**)
6. Aggiungi te stesso come test user (per sviluppo)
7. Clicca **Save and Continue**

### 3. Crea OAuth Client ID

1. Vai su **Credentials** → **Create Credentials** → **OAuth client ID**
2. Seleziona **Web application**
3. Nome: "Pandora Web App"
4. **Authorized JavaScript origins**:
   - `http://localhost:3000` (per sviluppo)
   - `https://tuodominio.com` (per produzione)
5. **Authorized redirect URIs**:
   - `http://localhost:3000/auth/callback` (per sviluppo)
   - `https://tuodominio.com/auth/callback` (per produzione)
   - `https://xxxxx.supabase.co/auth/v1/callback` (dal tuo progetto Supabase)
6. Clicca **Create**
7. Copia **Client ID** e **Client Secret**

### 4. Configura in Supabase

1. Vai nel dashboard Supabase → **Authentication** → **Providers**
2. Trova **Google** e abilitalo
3. Incolla:
   - **Client ID** (da Google Cloud Console)
   - **Client Secret** (da Google Cloud Console)
4. Copia il **Callback URL** mostrato da Supabase
5. Torna su Google Cloud Console e aggiungi questo URL agli **Authorized redirect URIs** (se non l'hai già fatto)
6. Clicca **Save** in Supabase

---

## 🔷 Facebook OAuth

### 1. Crea un'App Facebook

1. Vai su [Facebook Developers](https://developers.facebook.com/)
2. Clicca **My Apps** → **Create App**
3. Seleziona **Consumer** come tipo di app
4. Compila:
   - **App name**: Pandora Solofra
   - **App contact email**: tua-email@example.com
5. Clicca **Create App**

### 2. Configura Facebook Login

1. Nel dashboard dell'app, vai su **Add Products**
2. Trova **Facebook Login** e clicca **Set Up**
3. Seleziona **Web** come piattaforma
4. Inserisci il **Site URL**:
   - `http://localhost:3000` (per sviluppo)
   - `https://tuodominio.com` (per produzione)
5. Clicca **Save** e **Continue**

### 3. Configura OAuth Redirect URIs

1. Vai su **Facebook Login** → **Settings** nella sidebar
2. In **Valid OAuth Redirect URIs**, aggiungi:
   - `http://localhost:3000/auth/callback`
   - `https://tuodominio.com/auth/callback`
   - `https://xxxxx.supabase.co/auth/v1/callback` (dal tuo Supabase)
3. Clicca **Save Changes**

### 4. Ottieni App ID e Secret

1. Vai su **Settings** → **Basic**
2. Copia:
   - **App ID**
   - **App Secret** (clicca "Show" per visualizzarlo)

### 5. Configura in Supabase

1. Vai nel dashboard Supabase → **Authentication** → **Providers**
2. Trova **Facebook** e abilitalo
3. Incolla:
   - **Facebook client ID** (App ID da Facebook)
   - **Facebook client secret** (App Secret da Facebook)
4. Clicca **Save**

### 6. Pubblica l'App (Per Produzione)

> [!WARNING]
> In modalità sviluppo, solo gli utenti aggiunti come "Tester" possono fare login.

Per permettere a tutti di usare Facebook Login:
1. Vai su **App Review** nel dashboard Facebook
2. Completa i requisiti richiesti
3. Richiedi la pubblicazione dell'app
4. Attendi l'approvazione di Facebook (può richiedere alcuni giorni)

---

## ✅ Test

1. Riavvia il server Next.js: `npm run dev`
2. Vai su http://localhost:3000
3. Clicca **Accedi**
4. Prova i pulsanti "Continua con Google" e "Continua con Facebook"
5. Verifica che il login funzioni e che l'utente venga creato in Supabase

---

## 🔧 Troubleshooting

### "redirect_uri_mismatch" (Google)
- Verifica che gli **Authorized redirect URIs** in Google Cloud Console includano esattamente:
  - `http://localhost:3000/auth/callback`
  - L'URL callback di Supabase

### "URL Blocked" (Facebook)
- Verifica che **Valid OAuth Redirect URIs** in Facebook Login Settings includano tutti gli URL necessari
- Assicurati che il dominio sia aggiunto in **App Domains** (Settings → Basic)

### L'utente non viene creato in Supabase
- Controlla i log in **Authentication** → **Logs** nel dashboard Supabase
- Verifica che il trigger `on_auth_user_created` sia attivo nel database

### "This app is in development mode"
- Normale per Facebook in sviluppo
- Aggiungi utenti come "Tester" in **Roles** → **Test Users**
- Oppure pubblica l'app per produzione

---

## 📝 Note Importanti

- **Sviluppo vs Produzione**: Ricorda di aggiungere gli URL di produzione quando fai il deploy
- **Privacy Policy**: Facebook richiede una privacy policy per app pubbliche
- **Verifica Email**: Con OAuth, la verifica email è gestita dal provider
- **Dati Utente**: Google e Facebook forniscono nome e foto profilo automaticamente

---

## 🎉 Completato!

Ora gli utenti possono:
- ✅ Registrarsi/accedere con Google
- ✅ Registrarsi/accedere con Facebook
- ✅ Registrarsi/accedere con Email/Password

Il tutto con un'esperienza utente fluida e sicura! 🚀
