// Generated from Slovenian source and src/locales/it.json.
import { pageMetadata } from "@/italian/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/italian/components/redesign/Nav";
import { Footer } from "@/italian/components/redesign/Footer";
import { RevealOnScroll } from "@/italian/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/italian/components/redesign/SubpageHero";

export const metadata: Metadata = pageMetadata("/it/chi-siamo", {
  title: "Chi siamo | Jedro+ — Realizzato in Slovenia per imprese di servizi",
  description:
    "Jedro+ è un’app slovena per imprese di servizi. Scopri la nostra storia, la missione e perché creiamo strumenti per saloni, cliniche, palestre e altre attività.",
  openGraph: {
    title: "Chi siamo | Jedro+ — Realizzato in Slovenia per imprese di servizi",
    description:
      "Jedro+ è un’app slovena per imprese di servizi. Scopri la nostra storia, la missione e perché creiamo strumenti per saloni, cliniche, palestre e altre attività.",
  },
});

export default function ONas() {
  return (
    <>
      <Nav variant="light" active="/it/chi-siamo" />
      <main id="main-content">

      <SubpageHero
        eyebrow="Chi siamo"
        title={
          <>
             Realizzato in Slovenia,{" "}
            <span className="grad-text">per imprese di servizi.</span>
          </>
        }
        description={
          <>
             Jedro+ riunisce appuntamenti, clienti, promemoria e prenotazioni online in un unico posto, così puoi dedicarti a ciò che sai fare meglio: i tuoi clienti. </>
        }
      />

      {/* ZGODBA */}
      <section className="section subpage-first">
        <div className="wrap split">
          <div className="split__body reveal">
            <span className="eyebrow">La nostra storia</span>
            <h2 style={{ marginTop: 18 }}>
               Nato dalle <span className="grad-text">sfide quotidiane</span>{" "}
               delle imprese di servizi </h2>
            <p className="lead">
               Ogni salone, clinica o studio conosce lo stesso ciclo: chiamate durante i servizi, appuntamenti annotati a mano, ore vuote per visite dimenticate e dati dei clienti sparsi tra diversi strumenti. </p>
            <p className="lead" style={{ marginTop: 18 }}>
               Abbiamo creato Jedro+ per semplificare questo ciclo. Appuntamenti, schede clienti, promemoria e prenotazioni online sono collegati in un unico posto, senza duplicare il lavoro o passare da un’app all’altra. Lo sviluppiamo in Slovenia, collaborando con le attività che lo usano ogni giorno. </p>
          </div>
          <div className="split__media reveal" data-d="1">
            <figure style={{ margin: 0 }}><div className="ph about-team-photo" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/jedro-stran-team.webp"
                alt="Illustrazione della pianificazione in gruppo"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div><figcaption className="illustration-caption">Immagine illustrativa.</figcaption></figure>
          </div>
        </div>
      </section>

      {/* POSLANSTVO */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head center reveal" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow eyebrow--plain" style={{ justifyContent: "center" }}>
               La nostra missione </span>
            <h2 style={{ marginTop: 18 }}>
               Offrire alle imprese di servizi{" "}
              <span className="grad-text">più tempo per i clienti</span>
            </h2>
            <p className="lead" style={{ marginInline: "auto" }}>
               Crediamo che la tecnologia per piccole e medie imprese debba essere semplice, accessibile e familiare. Creiamo uno strumento in sloveno che riduce davvero il lavoro amministrativo. </p>
          </div>

          <div className="about-cards">
            <div className="about-card reveal">
              <h3>Semplicità</h3>
              <p>
                 Configurazione in pochi giorni. Un’interfaccia comprensibile a tutto il team, senza corsi o manuali. </p>
            </div>
            <div className="about-card reveal" data-d="1">
              <h3>Locale e accessibile</h3>
              <p>
                 Sviluppato in Slovenia, in sloveno, a prezzi adatti alle piccole imprese di servizi. </p>
            </div>
            <div className="about-card reveal" data-d="2">
              <h3>Più intelligente con l’AI</h3>
              <p>
                 Promemoria e notifiche che riducono le cancellazioni e fanno tornare i clienti inattivi, automaticamente in background. </p>
            </div>
          </div>
        </div>
      </section>

      {/* ZA KOGA */}
      <section className="section">
        <div className="wrap split split--rev">
          <div className="split__body reveal">
            <span className="eyebrow">A chi si rivolge</span>
            <h2 style={{ marginTop: 18 }}>
               Per <span className="grad-text">imprese di servizi</span>che lavorano su appuntamento </h2>
            <p className="lead">
               Jedro+ è adatto alle attività in cui la giornata ruota intorno a prenotazioni e relazioni: saloni di parrucchieri e bellezza, cliniche mediche ed estetiche, palestre, studi, terapeuti, officine e altri professionisti dei servizi. </p>
            <p className="lead" style={{ marginTop: 18 }}>
               In ogni settore la promessa è la stessa: meno lavoro manuale, meno ore vuote e una panoramica chiara dell’attività. </p>
          </div>
          <div className="split__media reveal" data-d="1">
            <figure style={{ margin: 0 }}><div className="ph about-closeup-photo" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/jedro-stran-closeup.webp"
                alt="Illustrazione della gestione degli appuntamenti"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div><figcaption className="illustration-caption">Immagine illustrativa.</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="section" id="jeziki" aria-labelledby="language-scope-heading">
        <div className="wrap">
          <div className="section-head reveal"><span className="eyebrow">Lingue e utilizzo</span><h2 id="language-scope-heading" style={{ marginTop: 18 }}>Un quadro chiaro <span className="grad-text">prima di iniziare.</span></h2><p className="lead">Le lingue del sito, dell’app e delle conversazioni telefoniche riguardano parti diverse dell’esperienza Jedro+.</p></div>
          <dl className="language-scope">
            <div><dt>Attività nell’Unione europea</dt><dd>Jedro+ è disponibile per le attività di servizi nell’UE. Adattiamo l’attivazione ai servizi, al team e al modo di lavorare della tua attività.</dd></div>
            <div><dt>Personalizzazione in altre lingue</dt><dd>Ti serve un’altra lingua? Possiamo concordare una personalizzazione linguistica aggiuntiva, definendo ambito e realizzazione prima dell’attivazione.</dd></div>
            <div><dt>Sito web</dt><dd>Sloveno, inglese, italiano e tedesco.</dd></div>
            <div><dt>App Jedro+</dt><dd>L’interfaccia dell’app è disponibile in sloveno e inglese.</dd></div>
            <div><dt>Conversazioni Receptionist+</dt><dd>La receptionist AI parla la lingua del cliente. Verifichiamo le impostazioni telefoniche della tua attività durante l’attivazione.</dd></div>
            <div><dt>Registratore di cassa fiscale</dt><dd>Un modulo separato per la conferma delle fatture FURS in Slovenia.</dd></div>
          </dl>
          <p className="language-scope__contact">Per domande sull’attivazione e sull’assistenza scrivi a <a href="mailto:info@jedroplus.com">info@jedroplus.com</a>.</p>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="section section--soft" id="kontakt">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Contatti</span>
            <h2 style={{ marginTop: 18 }}>
               Parliamo della tua <span className="grad-text">attività</span>
            </h2>
            <p className="lead">
               Hai una domanda o vuoi vedere Jedro+ in azione? Scrivici o chiamaci: rispondiamo rapidamente. </p>
          </div>
          <div className="about-cards" style={{ marginTop: 40 }}>
            <div className="about-card reveal">
              <h3>Email</h3>
              <p>
                <a href="mailto:info@jedroplus.com">info@jedroplus.com</a>
              </p>
            </div>
            <div className="about-card reveal" data-d="1">
              <h3>Telefono</h3>
              <p>
                <a href="tel:068663410">068 663 410</a>
              </p>
            </div>
            <div className="about-card reveal" data-d="2">
              <h3>Dove siamo</h3>
              <p>Slovenia 🇸🇮 — Sviluppato localmente, con assistenza in sloveno.</p>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
