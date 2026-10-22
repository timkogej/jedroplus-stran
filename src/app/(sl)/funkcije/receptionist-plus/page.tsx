import { RelatedContent } from "@/components/RelatedContent";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bell, CalendarCheck2, CalendarClock, Check, FileText, Globe2, MessageSquareText, Phone, Settings2, Sparkles, Wallet } from "lucide-react";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { RevealOnScroll } from "@/components/redesign/RevealOnScroll";
import { Faq } from "@/components/redesign/Faq";
import { ReceptionistDemo } from "@/components/redesign/ReceptionistDemo";
import { ReceptionistPricing } from "@/components/redesign/ReceptionistPricing";
import { JsonLd } from "@/components/JsonLd";
import { receptionistBreadcrumbSchema, receptionistServiceSchema } from "@/lib/schema";
import { receptionistFaq, RECEPTIONIST_APP_URL } from "@/lib/receptionist";

const title = "Receptionist+ | AI recepcionistka v jeziku stranke | Jedro+";
const description = "AI recepcionistka, ki govori v jeziku stranke, rezervira, prestavi in odpove termin, odgovori na vprašanja ter pošlje opomnik. Spoznajte Receptionist+.";

export const metadata: Metadata = pageMetadata("/funkcije/receptionist-plus", {
  title, description,
  alternates: { canonical: "/funkcije/receptionist-plus" },
  openGraph: { title, description, url: "/funkcije/receptionist-plus", images: [{ url: "/funkcije/receptionist-plus/opengraph-image", width: 1200, height: 630, alt: "Receptionist+ — AI recepcionistka Jedro+" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/funkcije/receptionist-plus/opengraph-image"] },
});

const features = [
  { icon: Globe2, title: "Govori v jeziku stranke", text: "Pogovor prilagodi jeziku stranke, da se lahko vsakdo razumljivo dogovori za termin ali dobi odgovor." },
  { icon: CalendarClock, title: "Rezervira, prestavi ali odpove", text: "Uredi nov termin, poišče drug prost čas ali odpove rezervacijo. Vse spremembe zabeleži v koledarju Jedro+." },
  { icon: MessageSquareText, title: "Pomaga z odgovori", text: "Odgovori na vprašanja o vašem podjetju, storitvah in naročanju ali sprejme sporočilo za povratni klic." },
  { icon: Bell, title: "Pošlje opomnik za obisk", text: "Stranko spomni na dogovorjeni termin, da so informacije o obisku jasne in pravočasne." },
  { icon: FileText, title: "Zabeleži dogovor", text: "Termin in njegove spremembe ostanejo v sistemu. V klicnem dnevniku pregledate izid, porabo ter zapis pogovora, kadar je na voljo." },
  { icon: Settings2, title: "Vaš pozdrav, vaš način dela", text: "Asistentka se predstavi v imenu vašega podjetja. V aplikaciji uredite pozdravno besedilo, vklop in druge nastavitve." },
];

const steps = [
  { number: "01", title: "Stranka pokliče", text: "Receptionist+ sprejme klic na povezani telefoniji in stranko pozdravi v imenu vašega podjetja." },
  { number: "02", title: "Pogovor steče", text: "V jeziku stranke pomaga pri naročanju, prestavitvi ali odpovedi termina, odgovori na vprašanje in pošlje opomnik." },
  { number: "03", title: "Vi imate pregled", text: "Nov termin ali sprememba je zabeležena v koledarju. Izid klica in porabo pregledate v aplikaciji Jedro+." },
];

export default function ReceptionistPlus() {
  return (
    <>
      <JsonLd schema={receptionistBreadcrumbSchema()} />
      <JsonLd schema={receptionistServiceSchema} />
      <Nav variant="light" active="/funkcije/receptionist-plus" />
      <main id="main-content">
        <section className="rp-hero">
          <div className="wrap">
            <div className="rp-hero__grid">
              <div className="rp-hero__copy">
                <nav className="crumbs" aria-label="Drobtine"><Link href="/sl">Domov</Link><span aria-hidden="true">/</span><Link href="/funkcije">Funkcije</Link><span aria-hidden="true">/</span><span aria-current="page">Receptionist+</span></nav>
                <div className="rp-kicker">Receptionist+ · AI recepcija</div>
                <h1>Vi delate.<br /><span className="grad-text">AI recepcionistka</span><br />sprejme klic.</h1>
                <p>Receptionist+ je AI recepcionistka za telefonsko naročanje. Govori v jeziku vaše stranke, rezervira, prestavi ali odpove termin in odgovori na vprašanja. Vi se posvetite človeku pred seboj.</p>
                <div className="rp-hero__actions"><a className="btn btn--primary btn--lg" href="https://app.jedroplus.com/signup">Začni brezplačno <ArrowUpRight size={18} aria-hidden="true" /></a><a className="btn btn--ghost btn--lg" href="#cenik-receptionist">Poglej cenik</a></div>
                <p className="rp-hero__trial"><Check size={16} aria-hidden="true" /> 30 brezplačnih minut ob prvi aktivaciji</p>
                <a className="rp-hero__existing" href={RECEPTIONIST_APP_URL}>Že uporabljate Jedro+? Odprite Receptionist+ <ArrowUpRight size={14} aria-hidden="true" /></a>
              </div>
              <ReceptionistDemo />
            </div>
          </div>
        </section>

        <section className="rp-proof" aria-label="Receptionist+ na kratko"><div className="wrap rp-proof__grid"><span><Globe2 size={19} aria-hidden="true" />Pogovor v jeziku stranke</span><span><CalendarClock size={19} aria-hidden="true" />Termini, spremembe in opomniki</span><span><Phone size={19} aria-hidden="true" />Manj prekinitev med delom</span></div></section>

        <section className="section">
          <div className="wrap rp-benefit-intro">
            <div className="reveal"><span className="eyebrow">Manj prekinitev. Več pozornosti.</span><h2>Pri stranki ste.<br /><span className="grad-text">Telefon pa spet zvoni.</span></h2></div>
            <div className="reveal" data-d="1"><p>Med striženjem, masažo ali sestankom vsak klic prekine vaš ritem. Če ga ne sprejmete, stranka ostane brez odgovora.</p><p>Receptionist+ prevzame pogovor in pomaga urediti, kar stranka potrebuje — od prve rezervacije do spremembe termina. Dogovor zabeleži v Jedro+, da ga ne prepisujete še enkrat.</p></div>
          </div>
        </section>

        <section className="section section--soft" aria-labelledby="rp-how-heading">
          <div className="wrap">
            <div className="section-head reveal"><span className="eyebrow">Kako deluje</span><h2 id="rp-how-heading" style={{ marginTop: 18 }}>Od »dober dan«<br />do <span className="grad-text">urejenega termina.</span></h2></div>
            <div className="rp-steps">{steps.map((step, index) => <article className="reveal" data-d={index} key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
          </div>
        </section>

        <section className="section" aria-labelledby="rp-features-heading">
          <div className="wrap">
            <div className="section-head reveal"><span className="eyebrow">Vaša podpora na telefonu</span><h2 id="rp-features-heading" style={{ marginTop: 18 }}>Sprejet klic.<br /><span className="grad-text">Urejen naslednji korak.</span></h2><p className="lead">Pogovor, termin in pregled porabe ostanejo povezani v sistemu, ki ga že uporabljate.</p></div>
            <div className="rp-feature-grid">{features.map(({ icon: Icon, ...feature }, index) => <article className="reveal" data-d={index % 3} key={feature.title}><span className="rp-feature-grid__icon"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div>
          </div>
        </section>

        <section className="section rp-connection">
          <div className="wrap rp-connection__grid">
            <div className="reveal"><span className="rp-kicker"><Sparkles size={16} aria-hidden="true" /> En sistem, povezan vsakdan</span><h2>En klic.<br />Vse na <span>pravem mestu.</span></h2><p>Receptionist+ je del Jedro+. Nov, prestavljen ali odpovedan termin se zabeleži v istem koledarju kot spletne in ročno vnesene rezervacije. Tudi opomniki ostanejo povezani z dogovorom.</p><Link className="rp-text-link" href="/funkcije">Spoznaj še druge funkcije <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
            <div className="rp-connection__diagram reveal" data-d="1" aria-label="Receptionist+ poveže klic s koledarjem, klicnim dnevnikom in pregledom porabe"><div className="rp-connection__source"><Phone size={25} aria-hidden="true" /><strong>Receptionist+</strong><span>Telefonski pogovor</span></div><div className="rp-connection__branches"><div><CalendarCheck2 size={21} aria-hidden="true" /><strong>Koledar</strong><span>Termini in spremembe</span></div><div><FileText size={21} aria-hidden="true" /><strong>Klicni dnevnik</strong><span>Izid in zapis</span></div><div><Wallet size={21} aria-hidden="true" /><strong>Minute</strong><span>Pregled porabe</span></div></div></div>
          </div>
        </section>

      <RelatedContent path={"/funkcije/receptionist-plus"} />
        <ReceptionistPricing productPage />
        <Faq reveal items={receptionistFaq} title={<>Pred prvim <span className="grad-text">klicem.</span></>} soft />
        <section className="section rp-final"><div className="wrap"><div className="rp-final__inner reveal"><span className="rp-kicker">Receptionist+</span><h2>Manj klicev za vas.<br /><span className="grad-text">Več časa za vaše delo.</span></h2><p>Prepustite pogovore, termine in vprašanja AI recepcionistki. Preizkusite Receptionist+ ali se z nami dogovorite za predstavitev.</p><div className="rp-hero__actions"><a className="btn btn--primary btn--lg" href={RECEPTIONIST_APP_URL}>Odpri Receptionist+ <ArrowUpRight size={18} aria-hidden="true" /></a><a className="btn btn--ghost btn--lg" href="mailto:info@jedroplus.com?subject=Predstavitev%20Receptionist%2B">Dogovori se za predstavitev</a></div></div></div></section>
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
