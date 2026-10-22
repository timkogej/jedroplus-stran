// Generated from Slovenian source and src/locales/it.json.
import Link from "next/link";
import { PRICING_TAX_NOTE } from "@/italian/lib/pricing";
import { ArrowUpRight, Check, Phone } from "lucide-react";
import { receptionistPacks, RECEPTIONIST_APP_URL, RECEPTIONIST_PATH, RECEPTIONIST_TRIAL_CREDITS, receptionistMinuteRate } from "@/italian/lib/receptionist";

export function ReceptionistPricing({ productPage = false }: { productPage?: boolean }) {
  return (
    <section className="section rp-pricing" id={productPage ? "cenik-receptionist" : "receptionist-plus"} aria-labelledby="receptionist-pricing-heading">
      <div className="wrap">
        <div className={`rp-pricing__intro${productPage ? " reveal" : ""}`}>
          <div>
            <div className="rp-kicker"><Phone size={16} aria-hidden="true" /> Receptionist+ <span className="new-badge">Novità</span></div>
            <h2 id="receptionist-pricing-heading">Più tempo per i clienti.<br /><span className="grad-text">Prezzi chiari per le chiamate.</span></h2>
          </div>
          <div className="rp-pricing__explain">
            <strong>Pacchetti di minuti di chiamata</strong>
            <p>Scegli un pacchetto di minuti e aggiungine altri quando serve. Alla prima attivazione ricevi {RECEPTIONIST_TRIAL_CREDITS}  minuti di prova gratuiti.</p>
            {!productPage && <Link className="linkmore" href={RECEPTIONIST_PATH}>Come funziona Receptionist+ <ArrowUpRight size={16} aria-hidden="true" /></Link>}
          </div>
        </div>
        <p className="pricing-tax-note">{PRICING_TAX_NOTE}</p>
        <div className="rp-pack-grid">
          {receptionistPacks.map((pack, index) => (
            <article className={`rp-pack${index === 1 ? " rp-pack--featured" : ""}${productPage ? " reveal" : ""}`} data-d={index} key={pack.name}>
              <div className="rp-pack__top"><h3>{pack.name}</h3>{index === 1 && <span>Per l’uso regolare</span>}</div>
              <p className="rp-pack__minutes">{pack.credits}<span>minuti di chiamata</span></p>
              <p className="rp-pack__credits">Acquisto una tantum</p>
              <p className="rp-pack__rate"><span>Prezzo medio al minuto:</span> {receptionistMinuteRate(pack)} €</p>
              <p className="rp-pack__description">{pack.description}</p>
              <div className="rp-pack__bottom"><strong>{pack.price} €</strong><a className={`btn ${index === 1 ? "btn--primary" : "btn--ghost"}`} href={`${RECEPTIONIST_APP_URL}?tab=krediti`}>Scegli il piano <ArrowUpRight size={16} aria-hidden="true" /></a></div>
            </article>
          ))}
        </div>
        <div className="rp-pricing__notes">
          <p><Check size={17} aria-hidden="true" /> {RECEPTIONIST_TRIAL_CREDITS}  minuti per la prima prova</p>
          <p><Check size={17} aria-hidden="true" />  Consumi consultabili nell’app</p>
          <p><Check size={17} aria-hidden="true" />  Avviso quando restano pochi minuti</p>
        </div>
        <p className="rp-pricing__fine">Il prezzo medio è calcolato dividendo il prezzo del pacchetto per il numero di minuti ed è arrotondato a tre decimali.</p>
        <p className="rp-pricing__fine">I minuti di Receptionist+ si acquistano separatamente dall’abbonamento Jedro+. Per l’attivazione e l’acquisto serve un account Jedro+.</p>
        <dl className="rp-pricing__terms">
          <div><dt>Consumo in base alla durata</dt><dd>Una conversazione di 30 secondi consuma 0,5 minuti del pacchetto.</dd></div>
          <div><dt>Minuti senza scadenza</dt><dd>I minuti acquistati non scadono. Usali quando ne hai bisogno.</dd></div>
          <div><dt>Il tuo numero di telefono</dt><dd>Ogni attività riceve un proprio numero di telefono per Receptionist+.</dd></div>
        </dl>
        <div className="rp-pricing__setup">
          <div><h3>Cosa serve per la prima chiamata?</h3><p>Crea un account Jedro+, attiva Receptionist+ nell’app e imposta il saluto. Il nostro team ti aiuta a configurare la telefonia e verificare le impostazioni del tuo numero.</p></div>
          <a className="btn btn--ghost" href="mailto:info@jedroplus.com?subject=Receptionist%2B">Aiuto per collegare la telefonia <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
