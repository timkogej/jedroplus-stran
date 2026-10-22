import Link from "next/link";
import { PRICING_TAX_NOTE } from "@/lib/pricing";
import { ArrowUpRight, Check, Phone } from "lucide-react";
import { receptionistPacks, RECEPTIONIST_APP_URL, RECEPTIONIST_PATH, RECEPTIONIST_TRIAL_CREDITS, receptionistMinuteRate } from "@/lib/receptionist";

export function ReceptionistPricing({ productPage = false }: { productPage?: boolean }) {
  return (
    <section className="section rp-pricing" id={productPage ? "cenik-receptionist" : "receptionist-plus"} aria-labelledby="receptionist-pricing-heading">
      <div className="wrap">
        <div className={`rp-pricing__intro${productPage ? " reveal" : ""}`}>
          <div>
            <div className="rp-kicker"><Phone size={16} aria-hidden="true" /> Receptionist+ <span className="new-badge">Novo</span></div>
            <h2 id="receptionist-pricing-heading">Več časa za stranke.<br /><span className="grad-text">Jasna cena za klice.</span></h2>
          </div>
          <div className="rp-pricing__explain">
            <strong>Paketi minut za klice</strong>
            <p>Izberite paket minut in dodatne minute dokupite po potrebi. Ob prvi aktivaciji prejmete {RECEPTIONIST_TRIAL_CREDITS} brezplačnih minut za preizkus.</p>
            {!productPage && <Link className="linkmore" href={RECEPTIONIST_PATH}>Kako deluje Receptionist+ <ArrowUpRight size={16} aria-hidden="true" /></Link>}
          </div>
        </div>
        <p className="pricing-tax-note">{PRICING_TAX_NOTE}</p>
        <div className="rp-pack-grid">
          {receptionistPacks.map((pack, index) => (
            <article className={`rp-pack${index === 1 ? " rp-pack--featured" : ""}${productPage ? " reveal" : ""}`} data-d={index} key={pack.name}>
              <div className="rp-pack__top"><h3>{pack.name}</h3>{index === 1 && <span>Za redno uporabo</span>}</div>
              <p className="rp-pack__minutes">{pack.credits}<span>minut klicev</span></p>
              <p className="rp-pack__credits">Enkratni nakup</p>
              <p className="rp-pack__rate"><span>Povprečna cena na minuto:</span> {receptionistMinuteRate(pack)} €</p>
              <p className="rp-pack__description">{pack.description}</p>
              <div className="rp-pack__bottom"><strong>{pack.price} €</strong><a className={`btn ${index === 1 ? "btn--primary" : "btn--ghost"}`} href={`${RECEPTIONIST_APP_URL}?tab=krediti`}>Izberi paket <ArrowUpRight size={16} aria-hidden="true" /></a></div>
            </article>
          ))}
        </div>
        <div className="rp-pricing__notes">
          <p><Check size={17} aria-hidden="true" /> {RECEPTIONIST_TRIAL_CREDITS} minut za prvi preizkus</p>
          <p><Check size={17} aria-hidden="true" /> Pregled porabe v aplikaciji</p>
          <p><Check size={17} aria-hidden="true" /> Opozorilo, ko zmanjkuje minut</p>
        </div>
        <p className="rp-pricing__fine">Povprečna cena je izračunana iz cene paketa in števila minut ter zaokrožena na tri decimalna mesta.</p>
        <p className="rp-pricing__fine">Minute za Receptionist+ se kupujejo ločeno od naročnine za Jedro+. Za vklop in nakup potrebujete račun Jedro+.</p>
        <dl className="rp-pricing__terms">
          <div><dt>Poraba po trajanju</dt><dd>30 sekund pogovora porabi 0,5 minute iz paketa.</dd></div>
          <div><dt>Minute brez poteka</dt><dd>Kupljene minute ne potečejo. Porabite jih takrat, ko jih potrebujete.</dd></div>
          <div><dt>Vaša telefonska številka</dt><dd>Vsako podjetje dobi svojo telefonsko številko za Receptionist+.</dd></div>
        </dl>
        <div className="rp-pricing__setup">
          <div><h3>Kaj potrebujete za prvi klic?</h3><p>Ustvarite račun Jedro+, v aplikaciji aktivirajte Receptionist+ in uredite pozdrav. Naša ekipa vam pomaga pri pripravi telefonije in preverjanju nastavitev za vašo številko.</p></div>
          <a className="btn btn--ghost" href="mailto:info@jedroplus.com?subject=Receptionist%2B">Pomoč pri povezavi telefonije <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
