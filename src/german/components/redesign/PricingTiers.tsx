// Generated from Slovenian source and src/locales/de.json.
"use client";

import { parsePrice, formatEuro } from "@/german/lib/price";
import { useState } from "react";

import { subscriptionPlans, PRICING_TAX_NOTE } from "@/german/lib/pricing";

const Chk = () => (
  <span className="chk">
    <svg viewBox="0 0 12 12" fill="none">
      <path d="M2 6.2l2.6 2.6L10 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export function PricingTiers() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <>
      <div className="billing" role="group" aria-label="Abrechnungszeitraum">
        <button type="button" className={`billing__lab${!isYearly ? " is-on" : ""}`} aria-pressed={!isYearly} onClick={() => setIsYearly(false)}>Monatlich</button>
        <button type="button" role="switch" aria-checked={isYearly} className={`billing__switch${isYearly ? " is-yearly" : ""}`} onClick={() => setIsYearly((value) => !value)} aria-label="Jährliche Abrechnung"><span /></button>
        <button type="button" className={`billing__lab${isYearly ? " is-on" : ""}`} aria-pressed={isYearly} onClick={() => setIsYearly(true)}>Jährlich</button>
      </div>

      <p className="pricing-tax-note">{PRICING_TAX_NOTE}</p>
      <div className="price-grid price-grid--4" style={{ marginTop: 40 }}>
        {subscriptionPlans.map((tier, i) => {
          const isQuote = tier.monthlyPrice === "Auf Anfrage";
          const isFree = tier.monthlyPrice === "0 €";
          const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;
          const feat = tier.popular;

          return (
            <div
              key={tier.name}
              className={`ptier reveal ${feat ? "ptier--feat" : ""}`}
              data-d={i}
            >
              {feat && <div className="pglow" />}
              {feat && <span className="pbadge">Am beliebtesten</span>}
              <div className="ptier__name">{tier.name}</div>
              <div className="ptier__price">
                {price}
                {!isQuote && !isFree && <span>  / Monat</span>}
                {isFree && <span>  für immer</span>}
              </div>
              <div className="ptier__save">
                {!isQuote && !isFree ? isYearly
                  ? `${formatEuro(parsePrice(tier.yearlyPrice) * 12)} € pro Jahr · spare ${formatEuro((parsePrice(tier.monthlyPrice) - parsePrice(tier.yearlyPrice)) * 12)} €`
                  : "Monatliche Abrechnung"
                  : ""}
              </div>
              <p className="ptier__desc">{tier.subtitle}</p>
              <ul>
                {tier.features.map((f) => (
                  <li key={f}>
                    <Chk />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                className={`btn btn--lg ${feat ? "btn--light" : "btn--ghost"}`}
                href={tier.ctaHref ?? "https://app.jedroplus.com/billing"}
              >
                {tier.ctaLabel}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
