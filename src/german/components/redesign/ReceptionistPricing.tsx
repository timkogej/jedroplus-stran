// Generated from Slovenian source and src/locales/de.json.
import Link from "next/link";
import { PRICING_TAX_NOTE } from "@/german/lib/pricing";
import { ArrowUpRight, Check, Phone } from "lucide-react";
import { receptionistPacks, RECEPTIONIST_APP_URL, RECEPTIONIST_PATH, RECEPTIONIST_TRIAL_CREDITS, receptionistMinuteRate } from "@/german/lib/receptionist";

export function ReceptionistPricing({ productPage = false }: { productPage?: boolean }) {
  return (
    <section className="section rp-pricing" id={productPage ? "cenik-receptionist" : "receptionist-plus"} aria-labelledby="receptionist-pricing-heading">
      <div className="wrap">
        <div className={`rp-pricing__intro${productPage ? " reveal" : ""}`}>
          <div>
            <div className="rp-kicker"><Phone size={16} aria-hidden="true" /> Receptionist+ <span className="new-badge">Neu</span></div>
            <h2 id="receptionist-pricing-heading">Mehr Zeit für Kunden.<br /><span className="grad-text">Klare Preise für Anrufe.</span></h2>
          </div>
          <div className="rp-pricing__explain">
            <strong>Pakete mit Gesprächsminuten</strong>
            <p>Wähle ein Minutenpaket und kaufe bei Bedarf weitere Minuten dazu. Bei der ersten Aktivierung erhältst du {RECEPTIONIST_TRIAL_CREDITS}  kostenlose Testminuten.</p>
            {!productPage && <Link className="linkmore" href={RECEPTIONIST_PATH}>So funktioniert Receptionist+ <ArrowUpRight size={16} aria-hidden="true" /></Link>}
          </div>
        </div>
        <p className="pricing-tax-note">{PRICING_TAX_NOTE}</p>
        <div className="rp-pack-grid">
          {receptionistPacks.map((pack, index) => (
            <article className={`rp-pack${index === 1 ? " rp-pack--featured" : ""}${productPage ? " reveal" : ""}`} data-d={index} key={pack.name}>
              <div className="rp-pack__top"><h3>{pack.name}</h3>{index === 1 && <span>Für regelmäßige Nutzung</span>}</div>
              <p className="rp-pack__minutes">{pack.credits}<span>Gesprächsminuten</span></p>
              <p className="rp-pack__credits">Einmaliger Kauf</p>
              <p className="rp-pack__rate"><span>Durchschnittspreis pro Minute:</span> {receptionistMinuteRate(pack)} €</p>
              <p className="rp-pack__description">{pack.description}</p>
              <div className="rp-pack__bottom"><strong>{pack.price} €</strong><a className={`btn ${index === 1 ? "btn--primary" : "btn--ghost"}`} href={`${RECEPTIONIST_APP_URL}?tab=krediti`}>Tarif wählen <ArrowUpRight size={16} aria-hidden="true" /></a></div>
            </article>
          ))}
        </div>
        <div className="rp-pricing__notes">
          <p><Check size={17} aria-hidden="true" /> {RECEPTIONIST_TRIAL_CREDITS}  Minuten für deinen ersten Test</p>
          <p><Check size={17} aria-hidden="true" />  Verbrauch in der App einsehbar</p>
          <p><Check size={17} aria-hidden="true" />  Warnung bei wenigen verbleibenden Minuten</p>
        </div>
        <p className="rp-pricing__fine">Der Durchschnittspreis ergibt sich aus dem Paketpreis geteilt durch die Minutenanzahl und ist auf drei Nachkommastellen gerundet.</p>
        <p className="rp-pricing__fine">Minuten für Receptionist+ werden separat zu deinem Jedro+-Abonnement gekauft. Für Aktivierung und Kauf ist ein Jedro+-Konto nötig.</p>
        <dl className="rp-pricing__terms">
          <div><dt>Verbrauch nach Gesprächsdauer</dt><dd>Ein Gespräch von 30 Sekunden verbraucht 0,5 Minuten aus deinem Paket.</dd></div>
          <div><dt>Minuten ohne Verfallsdatum</dt><dd>Gekaufte Minuten verfallen nicht. Nutze sie, wenn du sie brauchst.</dd></div>
          <div><dt>Deine eigene Telefonnummer</dt><dd>Jedes Unternehmen erhält eine eigene Telefonnummer für Receptionist+.</dd></div>
        </dl>
        <div className="rp-pricing__setup">
          <div><h3>Was brauchst du für den ersten Anruf?</h3><p>Erstelle ein Jedro+ Konto, aktiviere Receptionist+ in der App und richte die Begrüßung ein. Unser Team hilft dir bei der Telefonanbindung und prüft die Einstellungen für deine Nummer.</p></div>
          <a className="btn btn--ghost" href="mailto:info@jedroplus.com?subject=Receptionist%2B">Hilfe bei der Telefonanbindung <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
