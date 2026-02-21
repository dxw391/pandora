"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import StatutoNav from '@/components/StatutoNav';

export default function StatutoPage() {
    return (
        <div className="page-content">
            <section className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Le nostre regole
                    </motion.h1>
                    <p className="subtitle">Come garantiamo la nostra autonomia.</p>
                </div>
            </section>

            <section className="statuto-content">
                <div className="container">
                    <div className="statuto-layout">
                        <StatutoNav />
                        <main className="statuto-text">

                            <div className="statuto-title">
                                <h1>TITOLO I</h1>
                                <h2>COSTITUZIONE, IDENTITÀ E SCOPI</h2>
                            </div>

                            <div id="art1" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art. 1 - Denominazione - sede – durata</h2>
                                </div>
                                <div className="article-content">
                                    1.Ai sensi del Decreto legislativo 3 luglio 2017, n. 117, da qui in avanti indicato come “Codice del Terzo settore”, e delle norme del Codice civile in tema di associazioni, l’Associazione denominata PANDORA NIENTE DI PERSONALE, di seguito indicata anche come “Associazione”, costituitasi con atto 30/01/2025 si dota del presente statuto.
                                    2. L’Associazione ha sede legale nel Comune di Solofra al viale P.Amedeo n.64 L’eventuale variazione della sede legale non comporta modifica statutaria, salvo apposita delibera dell’Assemblea e successiva comunicazione agli uffici competenti.
                                    3. L’Associazione potrà istituire sezioni o sedi secondarie.
                                    4. Essa opera nel territorio della regione Campania, ed intende operare anche in ambito nazionale e internazionale.
                                    5. L’associazione acquisirà la qualifica di Ente del Terzo Settore (ETS) nelle modalità previste dalla Legge.
                                    6. L’Associazione ha durata illimitata.
                                </div>
                            </div>

                            <div id="art2" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.2 - Utilizzo nella denominazione dell’acronimo “APS” o dell’indicazione di “associazione di promozione sociale”</h2>
                                </div>
                                <div className="article-content">
                                    1. 1. L&apos;acronimo &quot;APS&quot; o l&apos;indicazione di &quot;Associazione di Promozione Sociale&quot; saranno utilizzabili negli atti, nella corrispondenza e nelle comunicazioni al pubblico solo dopo l&apos;iscrizione dell&apos;associazione nella sezione APS del RUNTS.&quot; La denominazione sociale assunta dall’associazione è &quot;PANDORA-NIENTE DI PERSONAE APS&quot;
                                    2. L’Associazione dovrà utilizzare obbligatoriamente l’indicazione di “Associazione di Promozione Sociale” o l’acronimo “APS” negli atti, nella corrispondenza e nelle comunicazioni al pubblico.
                                    3. La cancellazione dell’Associazione dall’apposita sezione del RUNTS comporta l’illegittimità dell’utilizzo nella denominazione sociale e nei rapporti con i terzi degli acronimi e delle locuzioni di cui agli articoli 12 e 32, comma 3 del Codice del Terzo settore. 4. Gli eventuali provvedimenti di cancellazione e/o di futura iscrizione, emanati dall’autorità competente, che determinano una variazione della denominazione sociale, ai sensi  dell’articolo 32, comma 3 del Codice del Terzo settore, non comporta modifica statutaria, salvo comunicazione agli uffici competenti.
                                </div>
                            </div>

                            <div id="art3" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.3 - Oggetto e finalità</h2>
                                </div>
                                <div className="article-content">
                                    L&apos;Associazione &quot;PANDORA-NIENTE DI PERSONALE&quot; ha per oggetto lo svolgimento, senza scopo di lucro, di attività di interesse generale per il perseguimento di finalità civiche, solidaristiche e di utilità sociale, in conformità a quanto previsto dall&apos;art. 5 del Codice del Terzo Settore.
                                    In particolare, l&apos;Associazione si propone di:
                                    Organizzare e gestire attività culturali, artistiche o ricreative di interesse sociale, incluse attività di promozione e diffusione della cultura attraverso incontri tematici, dibattiti, conferenze, seminari e ogni altra forma di confronto intellettuale e sociale, sia in modalità telematica che in presenza;
                                    Promuovere la cultura della legalità, della pace tra i popoli, della nonviolenza e favorire il dialogo democratico su tematiche di attualità, questioni sociali, politiche e di interesse pubblico;
                                    Promuovere e tutelare i diritti umani, civili, sociali e politici, nonché le pari opportunità e le iniziative di aiuto reciproco, attraverso attività di sensibilizzazione, informazione e formazione della cittadinanza;
                                    Svolgere attività di formazione extra-scolastica finalizzata alla prevenzione della dispersione culturale e sociale, alla promozione del pensiero critico e alla diffusione di una cultura partecipativa e democratica;
                                    Organizzare eventi, manifestazioni e iniziative di carattere culturale, sociale e formativo, utilizzando ogni mezzo di comunicazione disponibile, compresi i canali digitali e le piattaforme web;
                                    Promuovere la partecipazione civica e l&apos;inclusione sociale attraverso attività di aggregazione, confronto e dibattito su temi di rilevanza collettiva;
                                    Sviluppare reti di collaborazione con altri enti, associazioni, istituzioni pubbliche e private, organismi nazionali e internazionali che condividano finalità analoghe o complementari;
                                    Svolgere attività editoriali e di comunicazione attraverso la produzione e diffusione di contenuti informativi, culturali e formativi su supporti cartacei, digitali e multimediali;
                                    iRealizzare progetti di ricerca e studio su tematiche sociali, politiche, culturali e di attualità, anche in collaborazione con università, centri di ricerca e istituzioni culturali;
                                    Promuovere iniziative di solidarietà sociale e di sostegno a categorie svantaggiate o in situazioni di particolare bisogno.
                                    L&apos;Associazione potrà svolgere tutte le attività connesse, strumentali o comunque utili al raggiungimento degli scopi sociali, nel rispetto delle normative vigenti e in conformità ai principi dell&apos;art. 1 e dell&apos;art. 2 del Codice del Terzo Settore.
                                    Le attività potranno essere svolte direttamente dall&apos;Associazione o in collaborazione con altri soggetti pubblici e privati, utilizzando modalità operative flessibili e innovative, comprese le tecnologie digitali e le piattaforme di comunicazione online, al fine di garantire la massima accessibilità e partecipazione
                                </div>
                            </div>

                            <div id="art4" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.4 - Scopi e attività</h2>
                                </div>
                                <div className="article-content">
                                    L&apos;associazione non ha scopo di lucro e persegue finalità civiche, solidaristiche e di utilità sociale mediante lo svolgimento in via principale delle seguenti attività di interesse generale di cui all&apos;art. 5 del Codice del Terzo Settore:
                                    Organizzare e gestire attività culturali, artistiche o ricreative di interesse sociale, incluse attività di promozione e diffusione della cultura attraverso incontri tematici, dibattiti, congerenze, seminari e ogni altra forma di confronto intellettuale e sociale, sia in modalità telematica che in presenza;
                                    Promuovere la cultura della legalità, della pace tra i popoli, della nonviolenza e favorire il dialogo democratico su tematiche di attualità, questioni sociali, politiche e di interesse pubblico;
                                    Promuovere e tutelare i diritti umani, civili, sociali e politici, nonché le pari opportunità e le iniziative di aiuto reciproco, attraverso attività di sensibilizzazione, informazione e formazione della cittadinanza;
                                    Svolgere attività di formazione extra-scolastica finalizzata alla prevenzione della dispersione culturale e sociale, alla promozione del pensiero critico e alla diffusione di una cultura partecipativa e democratica;
                                    Organizzare eventi, manifestazioni e iniziative di carattere culturale, sociale e formativo, utilizzando ogni mezzo di comunicazione disponibile, compresi i canali digitali e le piattaforme web;
                                    Promuovere la partecipazione civica e l&apos;inclusione sociale attraverso attività di aggregazione, confronto e dibattito su temi di rilevanza collettiva;
                                    Sviluppare reti di collaborazione con altri enti, associazioni, istituzioni pubbliche e private, organismi nazionali e internazionali che condividano finalità analoghe o complementari;
                                    Svolgere attività editoriali e di comunicazione attraverso la produzione e diffusione di contenuti informativi, culturali e formativi su supporti cartacei, digitali e multimediali;
                                    iRealizzare progetti di ricerca e studio su tematiche sociali, politiche, culturali e di attualità, anche in collaborazione con università, centri di ricerca e istituzioni culturali;
                                    Promuovere iniziative di solidarietà sociale e di sostegno a categorie svantaggiate o in situazioni di particolare bisogno.
                                    2. L&apos;associazione può svolgere attività diverse da quelle sopra elencate, purché secondarie e strumentali rispetto alle attività di interesse generale, secondo i criteri e i limiti definiti dall&apos;art. 6 del Codice del Terzo Settore e dalle disposizioni attuative dello stesso. La loro individuazione è operata da parte del Consiglio Direttivo.
                                    3. L&apos;associazione può inoltre realizzare attività di raccolta fondi, nel rispetto dei principi di verità, trasparenza e correttezza con i sostenitori e con il pubblico, in conformità alle disposizioni contenute nell&apos;art. 7 del Codice del Terzo Settore.
                                    4. Le attività di cui ai commi precedenti sono svolte prevalentemente in favore di terzi, avvalendosi in modo prevalente dell&apos;attività di volontariato dei propri associati o delle persone aderenti agli enti associati.
                                    5. L&apos;associazione opera prevalentemente nel territorio della Regione Campania, ferma restando la possibilità di operare anche in ambito nazionale e internazionale.
                                </div>
                            </div>

                            <div id="art5" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.5 - Metodo</h2>
                                </div>
                                <div className="article-content">
                                    1. Per raggiungere gli scopi e svolgere le attività di cui all’articolo 4 del presente Statuto, l’Associazione intende collaborare strettamente con la società civile e con le Istituzioni
                                    2. Per il perseguimento delle proprie finalità e la realizzazione delle attività, l’Associazione si avvale in modo determinante e prevalente delle prestazioni personali, volontarie e gratuite dei volontari.
                                </div>
                            </div>

                            <div className="statuto-title">
                                <h1>TITOLO II</h1>
                                <h2>NORME SUL RAPPORTO ASSOCIATIVO</h2>
                            </div>

                            <div id="art6" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.6 - Norme sull’ordinamento interno</h2>
                                </div>
                                <div className="article-content">
                                    1. L’ordinamento interno dell’Associazione è ispirato a criteri di democraticità, pari opportunità̀ ed uguaglianza dei diritti di tutti gli associati; le cariche associative sono elettive e tutti gli associati possono esservi nominati, salvo i casi di interdizione, inabilità, incompatibilità con cariche pubbliche e conflitti di interessi, richiamati nel presente Statuto in coerenza con il Codice del Terzo settore (Decreto legislativo 3 luglio 2017, n. 117), nonché con le note interpretative del medesimo atto prodotte dal Ministero del Lavoro e inviate all’Autorità Nazionale Anti Corruzione (ANAC).
                                    2. Non è prevista alcuna differenza di trattamento tra gli associati riguardo ai diritti e ai doveri nei confronti dell’Associazione.
                                </div>
                            </div>

                            <div id="art7" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.7 - Associati</h2>
                                </div>
                                <div className="article-content">
                                    1. Sono ammessi a far parte dell’Associazione le persone fisiche e le Organizzazioni di Volontariato le quali, aderendo alle finalità istituzionali della stessa, intendano collaborare al loro raggiungimento.
                                    2. Non possono essere ammessi come associati altri enti del Terzo settore o altri enti senza scopo di lucro.
                                    3. Le Organizzazioni di Volontariato aderenti sono rappresentati dal rispettivo Presidente ovvero da altro soggetto delegato dal rispettivo Consiglio Direttivo.
                                    4. Tutti i soci versano la quota associativa annuale, partecipano attivamente alla realizzazione degli scopi statutari e prestano, a titolo gratuito, la propria opera di volontariato.
                                    5. L’adesione all’Associazione è a tempo indeterminato e non può essere disposta per un periodo temporaneo, fermo restando in ogni caso il diritto al recesso.
                                </div>
                            </div>

                            <div id="art8" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.8 Procedura di ammissione</h2>
                                </div>
                                <div className="article-content">
                                    1. Ai fini dell’adesione all’Associazione, chiunque ne abbia interesse presenta domanda per iscritto al Consiglio Direttivo, che è l’organo deputato a decidere sull’ammissione. In tale domanda deve essere anche precisato che il richiedente si impegna ad accettare le norme dello Statuto sociale e dei regolamenti interni, a rispettare la lettera e lo spirito del Patto Associativo, ad osservare le disposizioni che saranno emanate dal Consiglio Direttivo e dall’Assemblea ed a partecipare alla vita associativa. Nella stessa domanda, viene precisato se si intenda svolgere attività di volontariato, assumendosi tutti i connessi impegni, diritti e doveri del volontario.
                                    2. Il Consiglio Direttivo delibera l’ammissione o il rigetto delle domande di iscrizione entro il termine di 90 (novanta) giorni. Il Consiglio Direttivo deve decidere nell’esclusivo interesse dell’Associazione, secondo criteri non discriminatori, coerenti con le finalità perseguite e con le attività di interesse generale svolte.
                                    3. L’accoglimento della domanda è comunicato al nuovo associato entro 30 (trenta) giorni dalla data della deliberazione ed egli deve essere iscritto nel libro degli associati.
                                    4. L’eventuale provvedimento di rigetto deve essere motivato e comunicato per iscritto all’interessato entro e non oltre 30 (trenta) giorni dalla data della deliberazione. Contro di esso l’interessato può proporre appello all’Assemblea ordinaria, entro e non oltre 30 (trenta) giorni dal ricevimento della comunicazione, mediante apposita istanza che deve essere inoltrata al Consiglio Direttivo a mezzo raccomandata o altro mezzo idoneo ad attestarne il ricevimento; la prima Assemblea regolarmente convocata deciderà in merito all’appello presentato. All’appellante deve essere garantito in Assemblea ildiritto al contraddittorio.
                                </div>
                            </div>

                            <div id="art9" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.9 - Diritti e doveri degli associati</h2>
                                </div>
                                <div className="article-content">
                                    1. Gli associati hanno il diritto di:
                                    partecipare in Assemblea con diritto di voto, compreso il diritto di elettorato attivo e passivo, salvo i casi di interdizione, inabilità, incompatibilità con cariche pubbliche e conflitti di interessi, richiamati nel presente Statuto;
                                    essere informati di tutte le attività ed iniziative dell’Associazione, e di parteciparvi;
                                    esaminare i libri sociali. Al fine di esercitare tale diritto, l’associato deve presentare espressa domanda di presa di visione al Consiglio Direttivo, il quale provvede entro il termine massimo dei 30 (trenta) giorni successivi. La presa di visione è esercitata presso la sede dell’Associazione alla presenza di persona indicata dal Consiglio Direttivo.
                                    2. L’esercizio dei diritti sociali spetta agli associati fin dal momento della loro iscrizione nel libro degli associati, sempre che essi siano in regola con l’eventuale versamento della quota associativa, fatta eccezione per il diritto di voto in Assemblea che è disciplinato dall’articolo 17, comma 2, del presente Statuto.
                                    3. Gli associati hanno il dovere di:
                                    adottare comportamenti conformi allo spirito e alle finalità dell’Associazione, tutelandone il nome, nonché nei rapporti tra i soci e tra questi ultimi e gli organi sociali;
                                    rispettare lo Statuto, i regolamenti interni e le deliberazioni adottate dagli organi sociali;
                                    rispettare la lettera e lo spirito del Patto Associativo, controfirmato al momento della domanda di adesione;
                                    versare l’eventuale quota associativa nella misura e nei termini fissati annualmente dal Consiglio Direttivo.
                                    4. Le quote e i contributi associativi non sono trasferibili e non sono rivalutabili.
                                </div>
                            </div>

                            <div id="art10" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.10 - Cause di cessazione del rapporto associativo</h2>
                                </div>
                                <div className="article-content">
                                    La qualità di associato si perde per:
                                    1.recesso volontario. Ogni associato può esercitare in ogni momento il diritto di recesso, mediante comunicazione scritta al Consiglio Direttivo. Il recesso ha effetto immediato;
                                    mancato pagamento della quota associativa, se prevista, entro 180 (centottanta) giorni dall’inizio dell’esercizio sociale. Il Consiglio Direttivo comunica tale obbligo a tutti gli associati entro un termine congruo per poter provvedere al versamento. L’associato decaduto può presentare una nuova domanda di ammissione ai sensi dell’articolo 8 del presente Statuto.
                                    2. L’associato può invece essere escluso dall’Associazione per: comportamento contrastante con gli scopi dell’Associazione; persistenti violazioni degli obblighi statutari, regolamentari, del Patto Associativo o delle deliberazioni degli organi sociali; aver arrecato all’Associazione danni materiali o morali di una certa gravità; incompatibilità ambientale, quando cioè mina la serena condotta della vita associativa con evidenti comportamenti ostativi, prevaricanti, sovversivi, non riconducibili nell’alveo della corretta dialettica interna, nel giusto confronto di idee contrastanti, proprie di ogni associazione.
                                    3. Il provvedimento di esclusione, pronunciato dal Consiglio Direttivo, deve essere motivato e comunicato per iscritto all’interessato entro e non oltre 30 (trenta) giorni dalla data della deliberazione. Contro di esso l’associato escluso può proporre appello all’Assemblea ordinaria, entro e non oltre 30 (trenta) giorni dal ricevimento della comunicazione, mediante apposita istanza che deve essere inoltrata al Consiglio Direttivo a mezzo raccomandata o altro mezzo idoneo ad attestarne il ricevimento; in merito all’appello proposto deciderà la prossima assemblea regolarmente convocata; gli eventuali appelli dovranno essere trattati prima delle altre decisioni all’ordine dell’giorno. All’appellante deve essere garantito in Assemblea il diritto al contraddittorio. Fino alla data di convocazione dell’Assemblea, ai fini del ricorso, l’associato interessato dal provvedimento di esclusione si intende sospeso.
                                    4. L’associato receduto o escluso non ha diritto alla restituzione delle quote associative versate né ha alcun diritto sul patrimonio dell’Associazione.
                                </div>
                            </div>

                            <div className="statuto-title">
                                <h1>TITOLO III</h1>
                                <h2>NORME SUL VOLONTARIATO</h2>
                            </div>

                            <div id="art11" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.11 - Dei volontari e dell’attività di volontariato</h2>
                                </div>
                                <div className="article-content">
                                    1. I volontari sono persone fisiche, che condividono le finalità dell’Associazione e che, per libera scelta, prestano la propria attività tramite essa in modo personale, spontaneo e gratuito, senza fini di lucro, neanche indiretti.
                                    2. L’Associazione deve iscrivere in un apposito registro i volontari, associati o non associati, che svolgono la loro attività anche in modo occasionale.
                                    3. L’Associazione deve inoltre assicurare i propri volontari contro gli infortuni e le malattie connessi allo svolgimento dell’attività di volontariato, nonché per la responsabilità civile verso terzi.
                                    4. L’attività del volontario non può essere retribuita in alcun modo nemmeno dal beneficiario. Al volontario possono essere rimborsate le spese effettivamente sostenute e analiticamente documentate per l’attività prestata, previa autorizzazione ed entro i limiti stabiliti dal Consiglio Direttivo e dal Decreto legislativo 3 luglio 2017, n. 117.
                                </div>
                            </div>

                            <div id="art12" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.12 - Dei volontari e delle persone retribuite</h2>
                                </div>
                                <div className="article-content">
                                    1. La qualità di volontario è incompatibile con qualsiasi forma di rapporto di lavoro subordinato o autonomo e con ogni altro rapporto di lavoro retribuito con l’ente di cui il volontario è associato o tramite il quale svolge la propria attività volontaria.
                                    2. L’Associazione svolge la propria attività avvalendosi in modo prevalente dell’attività di volontariato dei propri associati o delle persone aderenti agli enti associati.
                                    3. L’Associazione può assumere lavoratori dipendenti, o avvalersi di prestazioni di lavoro autonomo o di altra natura, esclusivamente nei limiti necessari al loro regolare funzionamento oppure nei limiti occorrenti a qualificare o specializzare l’attività svolta. In ogni caso, il numero dei lavoratori impiegati nell’attività non può essere superiore al 50% (cinquanta per cento) del numero dei volontari.
                                    Organi dell’Associazione
                                    1. Sono organi dell’Associazione:
                                    l’Assemblea dei soci;
                                    il Consiglio Direttivo;
                                    l’Organo di Controllo, nominato qualora si verifichino le condizioni di cui all’articolo 30 del Decreto legislativo 3 luglio 2017, n. 117;
                                    l’Organo di Revisione, nominato qualora si verifichino le condizioni di cui all’articolo 31 del Decreto legislativo 3 luglio 2017, n. 117;
                                    2. L’elezione degli organi dell’Associazione non può in alcun modo essere vincolata o limitata, ed è informata a criteri di massima libertà di partecipazione all’elettorato attivo e passivo.
                                </div>
                            </div>

                            <div className="statuto-title">
                                <h1>TITOLO IV</h1>
                                <h2>Organi Sociali</h2>
                            </div>

                            <div id="art13" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.13 - L’Assemblea degli associati: composizione, modalità di convocazione e funzionamento</h2>
                                </div>
                                <div className="article-content">
                                    1. L’Assemblea è l’organo sovrano dell’Associazione ed è composta da tutti gli associati in regola con il versamento della eventuale quota associativa annuale.
                                    2. Ciascun associato può intervenire personalmente in Assemblea o può farsi rappresentare da un altro associato mediante delega, la quale deve essere scritta e firmata e deve contenere l’indicazione del delegante e del delegato. Sono ammesse massimo due deleghe per associato.
                                    3. L’Assemblea è convocata dal Presidente dell’Associazione, o a seguito di delibera del Consiglio Direttivo, almeno una volta
                                    l’anno per l’approvazione del bilancio di esercizio. L’Assemblea può essere inoltre convocata:
                                    su richiesta motivata della maggioranza dei membri del Consiglio Direttivo;
                                    su richiesta motivata ed indirizzata al Presidente da almeno 1/5 (un quinto) degli associati.
                                    Nei casi di cui alle lettere a) e b) il Presidente dell’Associazione deve provvedere alla convocazione dell’Assemblea, la quale deve svolgersi entro 30 (trenta) giorni dalla data della richiesta. Qualora il Presidente dell’Associazione, o il Vicepresidente, non provveda alla convocazione nei termini indicati, il Consiglio Direttivo deve procedere in sua vece e senza ritardo alla convocazione dell’Assemblea con votazione a maggioranza. Qualora il Consiglio Direttivo non ottemperi a tale obbligo, l’organo di controllo, se nominato, provvede alla convocazione.
                                    4. La convocazione deve pervenire per iscritto agli associati almeno 8 (otto) giorni prima della data della riunione, tramite lettera o attraverso l’invio dell’avviso di convocazione mediante l’utilizzo di strumenti telematici quali e-mail, pec, sms, oppure attraverso la pubblicazione dell’avviso di convocazione sul sito internet e pagine social ufficiali dell’associazione, o mediante avviso affisso nella sede legale e/o operativa dell’associazione. L’avviso di convocazione deve indicare il luogo, il giorno e l’ora sia di prima che di seconda convocazione, oltre che gli argomenti all’ordine del giorno. L’adunanza di seconda convocazione deve essere fissata almeno 24 (ventiquattro) ore dopo la prima convocazione.
                                    5. L’Assemblea può riunirsi anche mediante videoconferenza o altri strumenti telematici, sempre che tutti i partecipanti siano identificati e sia loro consentito di seguire la discussione in modo simultaneo, di intervenire in tempo reale alla trattazione degli argomenti affrontati e di partecipare alla votazione. L’Assemblea si considera tenuta nel luogo in cui si trova il Presidente dell’Associazione, e dove pure deve trovarsi il segretario della riunione, onde consentire la stesura e la sottoscrizione del verbale sul relativo libro. Se nel corso della riunione venisse sospeso il collegamento, la stessa verrà dichiarata sospesa dal Presidente dell’Associazione o da colui che ne fa le veci, e le decisioni prese fino alla sospensione saranno valide.
                                    6. L’Assemblea è presieduta dal Presidente dell’Associazione o, in sua assenza, dal Vicepresidente o da altro associato indicato in sede di riunione assembleare.
                                    7. Le discussioni e le deliberazioni dell’Assemblea sono riassunte in un verbale, sottoscritto dal Presidente dell’Associazione e dal Segretario o da altro verbalizzante a ciò appositamente nominato. Il verbale è trascritto nel libro delle adunanze e delle deliberazioni dell’Assemblea, conservato nella sede dell’Associazione.
                                </div>
                            </div>

                            <div id="art14" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.14 - Assemblea ordinaria: competenze e quorum</h2>
                                </div>
                                <div className="article-content">
                                    1. È compito dell’Assemblea ordinaria:
                                    approvare il bilancio di esercizio, predisposto dal Consiglio Direttivo;
                                    approvare l’eventuale programma annuale e pluriennale di attività, predisposto dal Consiglio Direttivo;
                                    approvare il bilancio sociale, se predisposto dal Consiglio Direttivo;
                                    eleggere e revocare i membri del Consiglio Direttivo e il Presidente dell’Associazione;
                                    eleggere e revocare i componenti dell’organo di controllo, qualora si verifichino le condizioni di cui all’articolo 30 del Codice del Terzo settore o se comunque l’Assemblea intenda nominarlo;
                                    eleggere e revocare l’organo di revisione, qualora si verifichino le condizioni di cui all’articolo 31 del Codice del Terzo settore o se comunque l’Assemblea intenda nominarlo;
                                    decidere sui ricorsi contro i provvedimenti di diniego di adesione e di esclusione dall’Associazione;
                                    approvare l’eventuale Regolamento Attuativo dello Statuto e gli altri regolamenti predisposti dal Consiglio Direttivo per il funzionamento dell’Associazione, incluso il Patto Associativo; deliberare sulla responsabilità dei componenti degli organi sociali, ai sensi dell’articolo 28 del Codice del Terzo settore, e promuovere l’azione di responsabilità nei loro confronti; decidere se annullare provvedimenti adottati d’urgenza dal Presidente dell’Associazione che configgano con gli interessi e le determinazioni dell’Associazione;
                                    deliberare, su proposta del Consiglio Direttivo, l’eventuale svolgimento di attività diverse, funzionali al raggiungimento degli scopi istituzionali;
                                    deliberare su ogni altro argomento posto all’ordine del giorno o sottoposto al suo esame da parte del Consiglio Direttivo o da altro organo sociale.
                                    2. L’Assemblea ordinaria in prima convocazione è validamente costituita con la presenza della metà più uno degli associati; in seconda convocazione è validamente costituita qualsiasi sia il numero degli associati presenti.
                                    3. Le deliberazioni dell’Assemblea ordinaria sono prese a maggioranza dei voti degli associati presenti, sia in prima che in seconda convocazione.
                                </div>
                            </div>

                            <div id="art15" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.15 - Assemblea straordinaria: competenze e quorum</h2>
                                </div>
                                <div className="article-content">
                                    1. È compito dell’Assemblea straordinaria:
                                    deliberare sulle proposte di modifica dello Statuto; deliberare in merito allo scioglimento, trasformazione, fusione o scissione dell’Associazione.
                                    2. Per le modifiche statutarie, l’Assemblea straordinaria in prima convocazione è validamente costituita con la presenza di almeno 3/4 (tre quarti) degli associati e delibera con il voto favorevole della maggioranza qualificata, pari a 2/3 (due terzi) dei presenti; in seconda convocazione è validamente costituita con la presenza di almeno la metà più uno degli associati e delibera con il voto favorevole della maggioranza qualificata, pari a 2/3 (due terzi) dei presenti.
                                    3. Per lo scioglimento dell’Associazione e la devoluzione del patrimonio, l’Assemblea straordinaria delibera, sia in prima che in seconda convocazione, con il voto favorevole di almeno 3/4 (tre quarti) degli associati. Tale quorum si applica anche per la trasformazione, fusione o scissione dell’Associazione.
                                </div>
                            </div>

                            <div id="art16" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.16 - L’Assemblea degli associati: regole di voto</h2>
                                </div>
                                <div className="article-content">
                                    1. Ciascun associato ha diritto ad un solo voto.
                                    2. L’esercizio del diritto di voto spetta agli associati che sono iscritti da almeno 3 (tre) mesi nel libro degli associati, sempre che essi siano in regola con il versamento della eventuale quota associativa annuale. Gli associati che non sono iscritti da almeno 3 (tre) mesi nel libro degli associati possono partecipare all’Assemblea senza diritto di voto né di elettorato attivo e passivo, e non sono computati ai fini del raggiungimento dei quorum.
                                    4. Per le votazioni si procede normalmente con voto palese. Per l’elezione delle cariche sociali, e comunque nei casi di votazioni riguardanti le persone, si procede mediante il voto a scrutinio segreto.
                                </div>
                            </div>

                            <div id="art17" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.17 - Il Presidente dell’Associazione: poteri e durata in carica</h2>
                                </div>
                                <div className="article-content">
                                    1. Il Presidente dell’Associazione è il legale rappresentante dell’Associazione e la rappresenta di fronte a terzi e in giudizio.
                                    2. Il Presidente dell’Associazione è eletto dal Consiglio Direttivo al suo interno.
                                    3. Non può essere eletto Presidente dell’Associazione, e se nominato decade dalla carica, l’interdetto, l’inabilitato, il fallito, o chi è stato condannato ad una pena che importa l’interdizione, anche temporanea, dai pubblici uffici o l’incapacità ad esercitare uffici direttivi. Non può essere eletto Presidente dell’Associazione, e se già eletto decade dalla carica, il socio che nel contempo ricopra o assuma ruoli direttivi o politici nell’ambito delle pubbliche amministrazioni locali, regionali, nazionali, sovranazionali. Non può essere eletto Presidente dell’Associazione, e se già eletto decade dalla carica, il socio che, anche se iscritto all’Associazione come persona fisica, ricopra al contempo il ruolo di rappresentante di un altro ente del Terzo Settore.
                                    4. Il Presidente dell’Associazione è anche Presidente del Consiglio Direttivo.
                                    5. La carica di Presidente dell’Associazione può essere revocata dall’Assemblea ordinaria con le stesse modalità previste per
                                    l’elezione del Consiglio Direttivo.
                                    6. La carica di Presidente dell’Associazione si perde inoltre per dimissioni, rassegnate mediante comunicazione scritta al Consiglio Direttivo, reiterabili qualora respinte in prima istanza.
                                    7. La carica di Presidente dell’Associazione si perde inoltre per la perdita della qualità di associato a seguito del verificarsi di una o più delle cause previste dall’articolo 10 del presente Statuto, nonché per le ragioni di incompatibilità di cui al precedente comma 3.
                                    8. Il Presidente dell’Associazione ha la responsabilità generale della conduzione e del buon andamento dell’Associazione, ed in particolare ha il compito di:
                                    firmare gli atti e i documenti che impegnano l’Associazione sia nei riguardi degli associati che dei terzi;
                                    curare l’attuazione delle deliberazioni dell’Assemblea e del Consiglio Direttivo;
                                    adottare, in caso di necessità, provvedimenti d’urgenza, sottoponendoli entro 15 (quindici) giorni alla ratifica da parte del Consiglio Direttivo;
                                    convocare e presiedere l’Assemblea degli associati e il Consiglio Direttivo;
                                    9. In caso di assenza o impedimento, il Presidente dell’Associazione viene sostituito dal Vicepresidente. In caso di assenza o impedimento di quest’ultimo, spetta al Consiglio Direttivo conferire espressa delega ad altro Consigliere.
                                </div>
                            </div>

                            <div id="art18" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.18 - Il Consiglio Direttivo: composizione e durata in carica</h2>
                                </div>
                                <div className="article-content">
                                    1. Il Consiglio Direttivo è l’organo amministrativo dell’Associazione, è eletto dall’Assemblea tra gli associati in regola con il versamento della eventuale quota associativa, ed è composto da un minimo di 3 (tre) a un massimo di 5 (cinque) membri.
                                    2. Ogni associato può votare, a scrutinio segreto, un numero di candidati equivalente al numero di membri totali previsto per il Consiglio Direttivo, ossia ogni associato ha diritto a esprimere fino a 5 (cinque) preferenze tra i candidati. I candidati che ricevono il maggior numero di voti assumono la carica di Consiglieri. In caso di parità tra due o più candidati all’ultimo seggio disponibile, si procede al ballottaggio a scrutinio segreto. Non sono valide le schede di voto che riportino un numero di preferenze superiore al numero di membri da eleggere. Sono valide le schede di voto che riportino un numero di preferenze inferiore o pari al numero di membri da eleggere.
                                    3. In caso il numero di candidati corrisponda o sia inferiore al numero di membri da eleggere, non si procede a votazione, e i candidati entrano automaticamente in carica a seguito di deliberazione palese da parte dell’Assemblea.
                                    4. Non può essere eletto Consigliere, e se nominato decade dalla carica, l’interdetto, l’inabilitato, il fallito, o chi è stato condannato ad una pena che importa l’interdizione anche temporanea dai pubblici uffici o l’incapacità ad esercitare uffici direttivi
                                    5. Non può essere eletto Consigliere, e se nominato decade dalla carica, chi nel contempo ricopra o assuma ruoli direttivi o politici nell’ambito delle pubbliche amministrazioni locali, regionali, nazionali, sovranazionali.
                                    6. Non può essere eletto Consigliere il legale rappresentante di altri enti del Terzo Settore, se non in qualità di persona fisica iscritta all’Associazione.
                                    7. I Consiglieri durano in carica 4 (quattro) anni e sono rieleggibili. Almeno 30 (trenta) giorni prima della scadenza del mandato, il Presidente dell’Associazione convoca l’Assemblea per l’elezione del nuovo Consiglio Direttivo.
                                </div>
                            </div>

                            <div id="art19" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.19 - Il Consiglio Direttivo: regole di convocazione, di funzionamento e di voto</h2>
                                </div>
                                <div className="article-content">
                                    1. Il Consiglio Direttivo è convocato dal Presidente dell’Associazione ogni qualvolta egli lo ritenga opportuno o quando ne sia fatta richiesta da almeno 3/5 (tre quinti) dei Consiglieri.
                                    2.La convocazione è fatta mediante avviso scritto almeno 4 (quattro) giorni prima della data della riunione, tramite lettera o attraverso l’invio dell’avviso di convocazione mediante l’utilizzo di strumenti telematici quali e-mail, pec, sms, oppure attraverso la pubblicazione dell’avviso di convocazione sul sito internet e pagine social ufficiali dell’associazione, o mediante avviso affisso nella sede legale e/o operativa dell’associazione. L’avviso di convocazione deve indicare il luogo, il giorno e l’ora di convocazione, oltre che gli argomenti all’ordine del giorno. Per il suo carattere di organo di amministrazione il Consiglio Direttivo può essere convocato anche telefonicamente in qualsiasi momento se ne ravvisi la necessità.
                                    3. In difetto di convocazione formale, o di mancato rispetto dei termini di preavviso, saranno ugualmente valide le adunanze cui partecipano tutti i Consiglieri.
                                    4. Il Consiglio Direttivo può riunirsi anche mediante videoconferenza, o altri strumenti telematici, secondo le stesse modalità previste per l’Assemblea.
                                    5. Il Consiglio Direttivo è presieduto dal Presidente dell’Associazione o, in sua assenza, dal Vicepresidente; in assenza di entrambi, è presieduto da altro Consigliere individuato tra i presenti.
                                    6. Le riunioni del Consiglio Direttivo, trascorsi 15 (quindici) minuti dall’ora stabilita nella convocazione, sono legalmente costituite quando è presente la maggioranza dei suoi componenti, e le deliberazioni vengono prese a maggioranza dei presenti. Non sono ammesse deleghe.
                                    7. Le votazioni si effettuano con voto palese, tranne nei casi di votazioni riguardanti le persone, dove si procede mediante il voto a scrutinio segreto. In caso di parità nelle votazioni, il voto del Presidente dell’Associazione vale doppio.
                                    8. Di ogni riunione consiliare viene redatto apposito verbale, sottoscritto dal Presidente e dal Segretario. Il verbale è trascritto nel libro delle adunanze e delle deliberazioni del Consiglio Direttivo, conservato nella sede dell’Associazione.
                                </div>
                            </div>

                            <div id="art20" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.20 - Competenze del Consiglio Direttivo</h2>
                                </div>
                                <div className="article-content">
                                    1. Il Consiglio Direttivo è investito dei più ampi poteri per l’amministrazione ordinaria e straordinaria dell’Associazione, ed in particolare ha il compito di:
                                    redigere il bilancio di esercizio, da sottoporre all’approvazione dell’Assemblea;
                                    approvare o respingere il programma pluriennale delle attività, predisposto dal Direttore Scientifico, da comunicare all’Assemblea;
                                    redigere nei casi previsti dalla legge, il bilancio sociale, da sottoporre all’approvazione dell’Assemblea;
                                    nominare al proprio interno il Presidente, il Vicepresidente, il Segretario e il Tesoriere;
                                    attribuire ulteriori deleghe specifiche ai Consiglieri o, in subordine, a singoli Associati;
                                    decidere sulle domande di adesione all’Associazione e sull’esclusione degli associati;
                                    redigere gli eventuali regolamenti interni per il funzionamento dell’Associazione, da sottoporre all’approvazione dell’Assemblea;
                                    proporre all’Assemblea la quota associativa annuale, determinandone l’ammontare;
                                    può deliberare la convocazione dell’Assemblea;
                                    decidere in merito agli eventuali rapporti di lavoro con i dipendenti, oltre che con collaboratori e consulenti esterni; ratificare i provvedimenti adottati d’urgenza dal Presidente dell’Associazione;
                                    proporre all’Assemblea l’eventuale svolgimento di attività diverse, ai sensi dell’articolo 6 del Decreto legislativo 3 luglio 2017, n. 117, funzionali al raggiungimento degli scopi istituzionali;
                                    adottare ogni altro provvedimento che sia ad esso attribuito dal presente Statuto o dai regolamenti interni;
                                    adottare in generale tutti i provvedimenti e le misure necessarie all’attuazione delle finalità istituzionali, oltre che alla gestione e al corretto funzionamento dell’Associazione.
                                    2. Il Consiglio Direttivo può attribuire ad uno o più dei suoi membri il potere di compiere determinati atti o categorie di atti in nome e per conto dell’Associazione.
                                    3. Il Vicepresidente svolge le funzioni di Presidente nei singoli casi in cui questi sia assente. Qualora la carica di Presidente dell’Associazione si renda vacante, il Vicepresidente non ne assume la carica, limitandosi a svolgerne le funzioni di ordinaria amministrazione, e procedendosi invece all’elezione di un nuovo Presidente da parte dell’Consiglio Direttivo secondo quanto previsto dall’articolo 18 del presente Statuto.
                                    4. Il Segretario si occupa in generale della verbalizzazione delle sedute di Consiglio Direttivo e dell’Assemblea, potendo essere sostituito in questa seconda mansione da altro socio a ciò designato. Si occupa inoltre della gestione dei libri sociali dell’Associazione e svolge le mansioni a questo delegate dal Consiglio Direttivo o dal Presidente dell’Associazione.
                                    5. Il Tesoriere si occupa della tenuta della Cassa e del Conto Corrente dell’Associazione, svolgendovi le relative operazioni e assicurandosi della loro correttezza, relazionando al Consiglio Direttivo circa eventi e situazioni di particolare rilievo.
                                </div>
                            </div>

                            <div id="art21" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.21 - Cause di decadenza e sostituzione dei membri del Consiglio Direttivo</h2>
                                </div>
                                <div className="article-content">
                                    1. La carica di Consigliere si perde per:
                                    dimissioni, rassegnate mediante comunicazione scritta al Consiglio Direttivo;
                                    revoca da parte dell’Assemblea ordinaria;
                                    sopraggiunte cause di incompatibilità, di cui all’articolo 19, comma 4, 5 e 6, del presente Statuto;
                                    perdita della qualità di associato a seguito del verificarsi di una o più delle cause previste dall’articolo 10 del presente Statuto.
                                    2. Nel caso in cui uno o più Consiglieri cessino dall’incarico per uno o più dei motivi indicati nel precedente comma, il Consiglio Direttivo provvede alla sostituzione attingendo alla lista dei non eletti nell’ultima elezione del Consiglio Direttivo svoltasi. I Consiglieri così subentrati rimangono in carica fino alla scadenza del mandato del Consiglio Direttivo vigente. In caso di esaurimento o di assenza del numero dei non eletti, il Consiglio Direttivo provvede alla sostituzione tramite cooptazione, salvo ratifica da parte della prima Assemblea ordinaria utile; in caso di mancata ratifica si procederà ad una nuova elezione. I Consiglieri così subentrati rimangono in carica fino alla scadenza del mandato del Consiglio Direttivo vigente. Fino alla conferma da parte dell’assemblea i Consiglieri cooptati non avranno diritto di voto nelle riunioni del Consiglio direttivo. 3. In ogni caso è transitoriamente ammessa la legittimità di un Consiglio Direttivo al quale siano venuti meno fino a 2 (due) consiglieri, ovvero un Consiglio Direttivo che sia momentaneamente composto da non meno di 3 (tre) consiglieri regolarmente eletti incluso il Presidente dell’Associazione.
                                    4. Nel caso in cui cessi dall’incarico la maggioranza dei Consiglieri, l’intero Consiglio Direttivo si intenderà decaduto e il Presidente dell’Associazione o, in subordine, il Vicepresidente, dovrà convocare l’Assemblea ordinaria entro 30 (trenta) giorni dalla cessazione, al fine di procedere ad una nuova elezione del Consiglio Direttivo. Fino all’elezione dei
                                    nuovi Consiglieri, i Consiglieri cessati rimangono in carica per l’attività di ordinaria amministrazione.
                                </div>
                            </div>

                            <div id="art22" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.22 - L’organo di controllo: composizione, durata in carica e funzionamento</h2>
                                </div>
                                <div className="article-content">
                                    1. L’organo di controllo, qualora nominato, è formato da 3 (tre) membri, eletti dall’Assemblea, non necessariamente fra gli associati. Almeno uno dei suoi membri deve essere in possesso dei requisiti di cui all’articolo 2397, comma 2, del Codice civile. 2. L’organo di controllo rimane in carica 4 (quattro) anni ed è rieleggibile.
                                    3. Esso nomina al proprio interno un Presidente.
                                    4. Delle proprie riunioni l’organo di controllo redige verbale, il quale va poi trascritto nell’apposito libro delle adunanze e delle deliberazioni di tale organo, conservato nella sede dell’Associazione.
                                    5. Nel caso in cui, per dimissioni o altre cause, uno o più membri dell’organo di controllo decadano dall’incarico prima della scadenza del mandato, si provvede alla sostituzione degli stessi tramite una nuova elezione da parte dell’Assemblea.
                                    6. I membri dell’organo di controllo, a cui si applica l’articolo 2399 del Codice civile, devono essere indipendenti ed esercitare le loro funzioni in modo obiettivo ed imparziale. Essi non possono ricoprire altre cariche all’interno dell’Associazione.
                                </div>
                            </div>


                            <div id="art23" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.23 - Competenze dell’organo di controllo</h2>
                                </div>
                                <div className="article-content">
                                    1. È compito dell’organo di controllo:
                                    vigilare sull’osservanza della legge e dello Statuto, e sul rispetto dei principi di corretta amministrazione;
                                    vigilare sull’adeguatezza dell’assetto organizzativo, amministrativo e contabile dell’Associazione, e sul suo concreto funzionamento;
                                    esercitare il controllo contabile;
                                    esercitare compiti di monitoraggio dell’osservanza delle finalità civiche, solidaristiche e di utilità sociale, avuto particolare riguardo alle disposizioni di cui agli articoli 5, 6, 7, 8 del Codice del Terzo settore;
                                    attestare che l’eventuale bilancio sociale sia stato redatto in conformità alle linee guida ministeriali di cui all’articolo 14 del Codice del Terzo settore. L’eventuale bilancio sociale dà atto degli esiti di tale monitoraggio;
                                    partecipare alle riunioni dell’Assemblea, alle quali presenta la relazione annuale sul bilancio di esercizio; ha il diritto di partecipare, senza diritto di voto, alle riunioni del Consiglio direttivo.
                                    2. Nei casi previsti dall’articolo 31, comma 1, del Codice del Terzo settore, l’organo di controllo può esercitare anche la revisione legale dei conti.
                                    3. L’organo di controllo ha diritto di accesso alla documentazione dell’Associazione rilevante ai fini dell’espletamento del
                                    proprio mandato. Può in qualsiasi momento procedere ad atti di ispezione e controllo e, a tal fine, può chiedere ai Consiglieri notizie sull’andamento delle operazioni sociali o su determinati affari.
                                </div>
                            </div>

                            <div id="art24" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.24 - L’organo di revisione</h2>
                                </div>
                                <div className="article-content">
                                    1. L’organo di revisione, qualora nominato, è formato da 3 (tre) membri, eletti dall’Assemblea, non necessariamente fra gli associati. I membri dell’organo di revisione devono essere iscritti al registro dei revisori legali dei conti.
                                    2. L’organo di revisione rimane in carica 4 (quattro) anni ed è rieleggibile.
                                    3. Esso nomina al proprio interno un Presidente.
                                    4. L’organo di revisione ha il compito di esercitare la revisione legale dei conti.
                                    5. Delle proprie riunioni l’organo di revisione redige verbale, il quale va poi trascritto nell’apposito libro delle adunanze e delle deliberazioni di tale organo, conservato nella sede dell’Associazione.
                                    6. Nel caso in cui, per dimissioni o altre cause, uno o più membri dell’organo di revisione decadano dall’incarico prima della scadenza del mandato, si provvede alla sostituzione degli stessi tramite una nuova elezione da parte dell’Assemblea.
                                    7. I membri dell’organo di revisione devono essere indipendenti ed esercitare le loro funzioni in modo obiettivo ed imparziale. Essi non possono ricoprire altre cariche all’interno dell’Associazione.
                                </div>
                            </div>

                            <div id="art25" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.25 - Responsabilità degli organi sociali</h2>
                                </div>
                                <div className="article-content">
                                    1. Delle obbligazioni contratte dall’Associazione rispondono, oltre all’Associazione stessa, anche personalmente e solidalmente le persone che hanno agito in nome e per conto dell’Associazione.
                                    2. I Consiglieri, i componenti dell’organo di controllo e di revisione (qualora nominati), rispondono nei confronti dell’ente, dei creditori sociali, degli associati e dei terzi, ai sensi delle disposizioni in tema di responsabilità nelle società per azioni, in quanto compatibili.
                                </div>
                            </div>

                            <div className="statuto-title">
                                <h1>TITOLO V</h1>
                                <h2>I LIBRI SOCIALI</h2>
                            </div>

                            <div id="art26" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.26 - Libri sociali e registri</h2>
                                </div>
                                <div className="article-content">
                                    1.L’Associazione deve tenere le seguenti scritture:
                                    il libro degli associati;
                                    il libro dei volontari;
                                    il libro delle adunanze e delle deliberazioni dell’Assemblea; il libro delle adunanze e delle deliberazioni del Consiglio Direttivo;
                                    2. L’Associazione deve tenere il libro delle adunanze e delle deliberazioni dell’organo di controllo, qualora questo sia stato
                                    nominato.
                                    3. L’Associazione ha inoltre l’obbligo di tenere il libro delle adunanze e delle deliberazioni dell’organo di revisione, qualora questo sia stato nominato.
                                </div>
                            </div>

                            <div className="statuto-title">
                                <h1>TITOLO VI</h1>
                                <h2>NORME SUL PATRIMONIO DELL’ASSOCIAZIONE E SUL BILANCIO DI ESERCIZIO</h2>
                            </div>

                            <div id="art27" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.27 - Destinazione del patrimonio ed assenza di scopo di lucro</h2>
                                </div>
                                <div className="article-content">
                                    1. Il patrimonio dell’Associazione è utilizzato per lo svolgimento dell’attività statutaria ai fini dell’esclusivo perseguimento di finalità civiche, solidaristiche e di utilità sociale.
                                    2. È vietata la distribuzione, anche indiretta, di utili ed avanzi di gestione, fondi e riserve comunque denominate a fondatori, associati, lavoratori e collaboratori, Consiglieri ed altri componenti degli organi sociali, anche nel caso di recesso o di ogni altra ipotesi di scioglimento individuale del rapporto associativo, e nei casi espressamente previsti dall’articolo 8 comma 3 del Decreto legislativo 3 luglio 2017, n. 117.
                                </div>
                            </div>

                            <div id="art28" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.28 - Risorse economiche</h2>
                                </div>
                                <div className="article-content">
                                    1. L’Associazione trae le risorse economiche per il funzionamento e per lo svolgimento delle proprie attività da:
                                    quote associative;
                                    contributi pubblici;
                                    contributi privati;
                                    donazioni e lasciti testamentari;
                                    rendite patrimoniali;
                                    attività di raccolta fondi;
                                    rimborsi derivanti da convenzioni
                                    amministrazioni;
                                    proventi da attività di interesse generale e da attività diverse ai sensi dell’articolo 6 del Codice del Terzo settore;
                                    ogni altra entrata ammessa ai sensi del Codice del Terzo settore e di altre norme competenti in materia.
                                </div>
                            </div>

                            <div id="art29" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.29 - Bilancio di esercizio</h2>
                                </div>
                                <div className="article-content">
                                    1, L’esercizio sociale coincide con l’anno solare.
                                    2. Alla fine di ogni esercizio il Consiglio Direttivo deve procedere alla formazione del bilancio di esercizio, il quale dovrà essere approvato dall’Assemblea ordinaria. Quest’ultima dovrà essere convocata entro 120 (centoventi) giorni dalla chiusura dell’esercizio, ma comunque un tempo utile per far approvare il bilancio di esercizio entro il 30 giugno.
                                    3. Il bilancio di esercizio dovrà essere depositato presso la sede dell’Associazione negli 8 (otto) giorni che precedono l’Assemblea convocata per la sua approvazione ed ogni associato, previa richiesta scritta, potrà prenderne visione.
                                </div>
                            </div>

                            <div id="art30" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.30 - Bilancio Sociale</h2>
                                </div>
                                <div className="article-content">
                                    1. L’associazione, nell’eventualità che il totale annuo dei ricavi, delle rendite, proventi o altre entrate sia superiore a € 1.000.000,00 (unmilione/00), è obbligata a redigere il bilancio sociale secondo le linee guida adottate con Decreto del Ministro del Lavoro e delle Politiche Sociali, sentita la Cabina di Regia istituita presso la Presidenza del Consiglio dei Ministri (articolo 97 del Decreto legislativo 3 luglio 2017, n. 117) e il Consiglio Nazionale del Terzo Settore.
                                    2. Nel bilancio sociale andrà indicata la natura dell’attività esercitata e le dimensioni dell’attività esercitata dall’associazione ai fini della valutazione dell’impatto sociale delle attività svolte.
                                    3. Il bilancio sociale dovrà essere depositato presso il Registro unico nazionale del Terzo settore e pubblicato sul proprio sito internet.
                                </div>
                            </div>

                            <div className="statuto-title">
                                <h1>TITOLO VII</h1>
                                <h2>SCIOGLIMENTO DELL’ASSOCIAZIONE E DEVOLUZIONE DEL PATRIMONIO</h2>
                            </div>

                            <div id="art31" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.31 - Scioglimento e devoluzione del patrimonio</h2>
                                </div>
                                <div className="article-content">
                                    1. Lo scioglimento dell’Associazione è deciso dall’Assemblea straordinaria con il voto favorevole di almeno 3/4 (tre quarti) degli associati, sia in prima che in seconda convocazione.
                                    2. L’Assemblea che delibera lo scioglimento nomina anche uno o più liquidatori e delibera sulla destinazione del patrimonio residuo, il quale dovrà essere devoluto, previo parere positivo dell’Ufficio di cui all’articolo 45, comma 1, del Codice del Terzo settore e salvo diversa destinazione imposta dalla legge, ad altri enti del Terzo settore, che persegue finalità identiche o analoghe, indicato dall’assemblea deliberante lo scioglimento, o, in mancanza, alla Fondazione Italia Sociale, secondo quanto previsto dall’articolo 9 del Codice del Terzo settore. Gli atti di devoluzione del patrimonio residuo compiuti in assenza o in difformità dal parere sono nulli.
                                </div>
                            </div>

                            <div className="statuto-title">
                                <h1>TITOLO VIII</h1>
                                <h2>DISPOSIZIONI FINALI E TRANSITORIE</h2>
                            </div>


                            <div id="art32" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.32 - Norme di rinvio</h2>
                                </div>
                                <div className="article-content">
                                    1. Per quanto non espressamente previsto nel presente Statuto, si applica il Codice del Terzo settore e le disposizioni attuative dello stesso, oltre che il Codice civile e le relative disposizioni di attuazione, in quanto compatibili.
                                </div>
                            </div>

                            <div id="art33" className="statuto-article">
                                <div className="article-header">
                                    <FileText className="icon-gold" size={24} />
                                    <h2>Art.33 - Norme finali</h2>
                                </div>
                                <div className="article-content">
                                    1. L’adozione del presente Statuto non ha alcun effetto sulla validità delle decisioni prese e attuate dall’Associazione prima dell’entrata in vigore del presente Statuto.
                                    2. Tutti gli adempimenti legati all’iscrizione al Registro unico nazionale del terzo settore, che risultano essere incompatibili con l’attuale disciplina, trovano applicazione all’operatività
                                    del RUNTS medesimo.
                                    3. A decorrere del termine di cui all’articolo 104 del Decreto legislativo 3 luglio 2017, n. 117, in coerenza con l’interpretazione autentica data al medesimo articolo ad opera dell’articolo 5-sexies del D.L. n. 148/2017, la qualifica di Onlus di diritto cessa di efficacia e trovano applicazione le disposizioni fiscali contenute nel titolo X del Decreto legislativo 3 luglio 2017, n. 117.
                                    4. Ai fini del riconoscimento e mantenimento dell’iscrizione al Registro unico nazionale del Terzo settore nella sezione il Consiglio Direttivo dell’Associazione è autorizzato ad apportare al presente Statuto le modifiche che si rendessero indispensabili, dell’Associazione salvaguardando i principi ispiratori.
                                </div>
                            </div>

                            <div className="statuto-download">
                                <p>Vuoi consultare la versione integrale firmata?</p>
                                <button className="btn-primary">Scarica PDF Statuto</button>
                            </div>
                        </main>
                    </div>
                </div >
            </section >
        </div >
    );
}
