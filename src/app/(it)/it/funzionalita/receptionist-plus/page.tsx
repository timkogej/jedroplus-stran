// Generated from Slovenian source and src/locales/it.json.
import { RelatedContent } from "@/components/RelatedContent";
import { pageMetadata } from "@/italian/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bell, CalendarCheck2, CalendarClock, Check, FileText, Globe2, MessageSquareText, Phone, Settings2, Sparkles, Wallet } from "lucide-react";
import { Nav } from "@/italian/components/redesign/Nav";
import { Footer } from "@/italian/components/redesign/Footer";
import { RevealOnScroll } from "@/italian/components/redesign/RevealOnScroll";
import { Faq } from "@/italian/components/redesign/Faq";
import { ReceptionistDemo } from "@/italian/components/redesign/ReceptionistDemo";
import { ReceptionistPricing } from "@/italian/components/redesign/ReceptionistPricing";
import { JsonLd } from "@/components/JsonLd";
import { receptionistBreadcrumbSchema, receptionistServiceSchema } from "@/italian/lib/schema";
import { receptionistFaq, RECEPTIONIST_APP_URL } from "@/italian/lib/receptionist";

const title = "Receptionist+ | Receptionist AI nella lingua del cliente | Jedro+";
const description = "Una receptionist AI che parla la lingua del cliente, prenota, sposta e annulla appuntamenti, risponde alle domande e invia promemoria. Scopri Receptionist+.";

export const metadata: Metadata = pageMetadata("/it/funzionalita/receptionist-plus", {
  title, description,
  alternates: { canonical: "/it/funzionalita/receptionist-plus" },
  openGraph: { title, description, url: "/it/funzionalita/receptionist-plus", images: [{ url: "/it/funzionalita/receptionist-plus/opengraph-image", width: 1200, height: 630, alt: "Receptionist+ — La receptionist AI di Jedro+" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/it/funzionalita/receptionist-plus/opengraph-image"] },
});

const features = [
  { icon: Globe2, title: "Parla la lingua del cliente", text: "Si adatta alla lingua del cliente, così tutti possono fissare un appuntamento o ricevere una risposta in modo chiaro." },
  { icon: CalendarClock, title: "Prenota, sposta o annulla", text: "Crea una nuova prenotazione, trova un altro orario libero o annulla un appuntamento. Ogni modifica viene registrata nel calendario Jedro+." },
  { icon: MessageSquareText, title: "Aiuta con le risposte", text: "Risponde alle domande sull’attività, sui servizi e sulle prenotazioni, oppure raccoglie un messaggio per essere richiamati." },
  { icon: Bell, title: "Invia promemoria per gli appuntamenti", text: "Ricorda al cliente l’appuntamento con informazioni chiare e puntuali." },
  { icon: FileText, title: "Registra quanto concordato", text: "Appuntamenti e modifiche rimangono nel sistema. Nel registro chiamate puoi consultare esito, consumi e trascrizioni, quando disponibili." },
  { icon: Settings2, title: "Il tuo saluto, il tuo modo di lavorare", text: "L’assistente si presenta a nome della tua attività. Gestisci saluto, attivazione e altre impostazioni nell’app." },
];

const steps = [
  { number: "01", title: "Il cliente chiama", text: "Receptionist+ risponde tramite il servizio telefonico collegato e saluta il cliente a nome della tua attività." },
  { number: "02", title: "La conversazione inizia", text: "Nella lingua del cliente, aiuta a prenotare, spostare o annullare un appuntamento, risponde alle domande e invia un promemoria." },
  { number: "03", title: "Tu hai tutto sotto controllo", text: "Nuovi appuntamenti e modifiche vengono registrati nel calendario. Consulta esito delle chiamate e consumi nell’app Jedro+." },
];

export default function ReceptionistPlus() {
  return (
    <>
      <JsonLd schema={receptionistBreadcrumbSchema()} />
      <JsonLd schema={receptionistServiceSchema} />
      <Nav variant="light" active="/it/funzionalita/receptionist-plus" />
      <main id="main-content">
        <section className="rp-hero">
          <div className="wrap">
            <div className="rp-hero__grid">
              <div className="rp-hero__copy">
                <nav className="crumbs" aria-label="Percorso di navigazione"><Link href="/it">Home</Link><span aria-hidden="true">/</span><Link href="/it/funzionalita">Funzionalità</Link><span aria-hidden="true">/</span><span aria-current="page">Receptionist+</span></nav>
                <div className="rp-kicker">Receptionist+ · Accoglienza AI</div>
                <h1>Tu lavori.<br /><span className="grad-text">La receptionist AI</span><br />risponde al telefono.</h1>
                <p>Receptionist+ è la receptionist AI per le prenotazioni telefoniche. Parla la lingua del cliente, prenota, sposta o annulla appuntamenti e risponde alle domande. Tu ti dedichi alla persona davanti a te.</p>
                <div className="rp-hero__actions"><a className="btn btn--primary btn--lg" href="https://app.jedroplus.com/signup">Inizia gratis <ArrowUpRight size={18} aria-hidden="true" /></a><a className="btn btn--ghost btn--lg" href="#cenik-receptionist">Vedi i prezzi</a></div>
                <p className="rp-hero__trial"><Check size={16} aria-hidden="true" />  30 minuti gratuiti alla prima attivazione</p>
                <a className="rp-hero__existing" href={RECEPTIONIST_APP_URL}>Usi già Jedro+? Apri Receptionist+ <ArrowUpRight size={14} aria-hidden="true" /></a>
              </div>
              <ReceptionistDemo />
            </div>
          </div>
        </section>

        <section className="rp-proof" aria-label="Receptionist+ in breve"><div className="wrap rp-proof__grid"><span><Globe2 size={19} aria-hidden="true" />Conversazioni nella lingua del cliente</span><span><CalendarClock size={19} aria-hidden="true" />Appuntamenti, modifiche e promemoria</span><span><Phone size={19} aria-hidden="true" />Meno interruzioni durante il lavoro</span></div></section>

        <section className="section">
          <div className="wrap rp-benefit-intro">
            <div className="reveal"><span className="eyebrow">Meno interruzioni. Più attenzione.</span><h2>Sei con un cliente.<br /><span className="grad-text">Il telefono squilla di nuovo.</span></h2></div>
            <div className="reveal" data-d="1"><p>Durante un taglio, un massaggio o una riunione, ogni chiamata interrompe la concentrazione. Se non rispondi, il cliente resta in attesa.</p><p>Receptionist+ prende la chiamata e aiuta il cliente, dalla prima prenotazione a uno spostamento. Registra quanto concordato in Jedro+, senza doverlo inserire di nuovo.</p></div>
          </div>
        </section>

        <section className="section section--soft" aria-labelledby="rp-how-heading">
          <div className="wrap">
            <div className="section-head reveal"><span className="eyebrow">Come funziona</span><h2 id="rp-how-heading" style={{ marginTop: 18 }}>Dal «buongiorno»<br />a <span className="grad-text">un appuntamento confermato.</span></h2></div>
            <div className="rp-steps">{steps.map((step, index) => <article className="reveal" data-d={index} key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
          </div>
        </section>

        <section className="section" aria-labelledby="rp-features-heading">
          <div className="wrap">
            <div className="section-head reveal"><span className="eyebrow">Il tuo supporto al telefono</span><h2 id="rp-features-heading" style={{ marginTop: 18 }}>Chiamata ricevuta.<br /><span className="grad-text">Prossimo passo organizzato.</span></h2><p className="lead">Conversazione, appuntamento e consumi rimangono collegati nel sistema che usi già.</p></div>
            <div className="rp-feature-grid">{features.map(({ icon: Icon, ...feature }, index) => <article className="reveal" data-d={index % 3} key={feature.title}><span className="rp-feature-grid__icon"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div>
          </div>
        </section>

        <section className="section rp-connection">
          <div className="wrap rp-connection__grid">
            <div className="reveal"><span className="rp-kicker"><Sparkles size={16} aria-hidden="true" />  Un sistema, una giornata connessa</span><h2>Una chiamata.<br />Tutto al <span>posto giusto.</span></h2><p>Receptionist+ fa parte di Jedro+. Gli appuntamenti nuovi, spostati o annullati vengono registrati nello stesso calendario delle prenotazioni online e manuali. Anche i promemoria rimangono collegati all’appuntamento.</p><Link className="rp-text-link" href="/it/funzionalita">Scopri altre funzionalità <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
            <div className="rp-connection__diagram reveal" data-d="1" aria-label="Receptionist+ collega le chiamate al calendario, al registro e alla panoramica dei consumi"><div className="rp-connection__source"><Phone size={25} aria-hidden="true" /><strong>Receptionist+</strong><span>Conversazione telefonica</span></div><div className="rp-connection__branches"><div><CalendarCheck2 size={21} aria-hidden="true" /><strong>Calendario</strong><span>Appuntamenti e modifiche</span></div><div><FileText size={21} aria-hidden="true" /><strong>Registro chiamate</strong><span>Esito e trascrizione</span></div><div><Wallet size={21} aria-hidden="true" /><strong>Minuti</strong><span>Panoramica dei consumi</span></div></div></div>
          </div>
        </section>

      <RelatedContent path={"/it/funzionalita/receptionist-plus"} />
        <ReceptionistPricing productPage />
        <Faq reveal items={receptionistFaq} title={<>Prima di <span className="grad-text">chiamare.</span></>} soft />
        <section className="section rp-final"><div className="wrap"><div className="rp-final__inner reveal"><span className="rp-kicker">Receptionist+</span><h2>Meno chiamate per te.<br /><span className="grad-text">Più tempo per il tuo lavoro.</span></h2><p>Affida chiamate, appuntamenti e domande alla receptionist AI. Prova Receptionist+ oppure richiedi una demo.</p><div className="rp-hero__actions"><a className="btn btn--primary btn--lg" href={RECEPTIONIST_APP_URL}>Apri Receptionist+ <ArrowUpRight size={18} aria-hidden="true" /></a><a className="btn btn--ghost btn--lg" href="mailto:info@jedroplus.com?subject=Demo%20Receptionist%2B">Richiedi una demo</a></div></div></div></section>
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
