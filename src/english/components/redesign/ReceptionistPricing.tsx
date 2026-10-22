// Generated from Slovenian source and src/locales/en.json.
import Link from "next/link";
import { PRICING_TAX_NOTE } from "@/english/lib/pricing";
import { ArrowUpRight, Check, Phone } from "lucide-react";
import { receptionistPacks, RECEPTIONIST_APP_URL, RECEPTIONIST_PATH, RECEPTIONIST_TRIAL_CREDITS, receptionistMinuteRate } from "@/english/lib/receptionist";

export function ReceptionistPricing({ productPage = false }: { productPage?: boolean }) {
  return (
    <section className="section rp-pricing" id={productPage ? "cenik-receptionist" : "receptionist-plus"} aria-labelledby="receptionist-pricing-heading">
      <div className="wrap">
        <div className={`rp-pricing__intro${productPage ? " reveal" : ""}`}>
          <div>
            <div className="rp-kicker"><Phone size={16} aria-hidden="true" /> Receptionist+ <span className="new-badge">New</span></div>
            <h2 id="receptionist-pricing-heading">More time for clients.<br /><span className="grad-text">Clear call pricing.</span></h2>
          </div>
          <div className="rp-pricing__explain">
            <strong>Call minute packs</strong>
            <p>Choose a minute pack and add more minutes as needed. On first activation, you receive {RECEPTIONIST_TRIAL_CREDITS}  free trial minutes.</p>
            {!productPage && <Link className="linkmore" href={RECEPTIONIST_PATH}>How Receptionist+ works <ArrowUpRight size={16} aria-hidden="true" /></Link>}
          </div>
        </div>
        <p className="pricing-tax-note">{PRICING_TAX_NOTE}</p>
        <div className="rp-pack-grid">
          {receptionistPacks.map((pack, index) => (
            <article className={`rp-pack${index === 1 ? " rp-pack--featured" : ""}${productPage ? " reveal" : ""}`} data-d={index} key={pack.name}>
              <div className="rp-pack__top"><h3>{pack.name}</h3>{index === 1 && <span>For regular use</span>}</div>
              <p className="rp-pack__minutes">{pack.credits}<span>call minutes</span></p>
              <p className="rp-pack__credits">One-time purchase</p>
              <p className="rp-pack__rate"><span>Average price per minute:</span> {receptionistMinuteRate(pack)} €</p>
              <p className="rp-pack__description">{pack.description}</p>
              <div className="rp-pack__bottom"><strong>{pack.price} €</strong><a className={`btn ${index === 1 ? "btn--primary" : "btn--ghost"}`} href={`${RECEPTIONIST_APP_URL}?tab=krediti`}>Choose plan <ArrowUpRight size={16} aria-hidden="true" /></a></div>
            </article>
          ))}
        </div>
        <div className="rp-pricing__notes">
          <p><Check size={17} aria-hidden="true" /> {RECEPTIONIST_TRIAL_CREDITS}  minutes for your first trial</p>
          <p><Check size={17} aria-hidden="true" />  Usage overview in the app</p>
          <p><Check size={17} aria-hidden="true" />  Alert when minutes are running low</p>
        </div>
        <p className="rp-pricing__fine">The average price is calculated from the pack price and number of minutes, rounded to three decimal places.</p>
        <p className="rp-pricing__fine">Receptionist+ minutes are purchased separately from your Jedro+ subscription. A Jedro+ account is required for activation and purchases.</p>
        <dl className="rp-pricing__terms">
          <div><dt>Usage based on duration</dt><dd>A 30-second conversation uses 0.5 minutes from your pack.</dd></div>
          <div><dt>Minutes with no expiry</dt><dd>Purchased minutes do not expire. Use them whenever you need them.</dd></div>
          <div><dt>Your own phone number</dt><dd>Every business receives its own phone number for Receptionist+.</dd></div>
        </dl>
        <div className="rp-pricing__setup">
          <div><h3>What do you need for your first call?</h3><p>Create a Jedro+ account, activate Receptionist+ in the app and set your greeting. Our team helps set up the phone service and check the settings for your number.</p></div>
          <a className="btn btn--ghost" href="mailto:info@jedroplus.com?subject=Receptionist%2B">Help connecting your phone service <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
