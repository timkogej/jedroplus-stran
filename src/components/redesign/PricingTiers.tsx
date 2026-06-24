"use client";

import { useState } from "react";

interface Tier {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  yearlySaving?: string;
  subtitle: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaLabel: string;
}

const tiers: Tier[] = [
  {
    name: "Jedro Plus",
    monthlyPrice: "19 €",
    yearlyPrice: "15 €",
    yearlySaving: "-20%",
    subtitle: "Za podjetja, ki želijo urejen sistem in jasen pregled",
    description: "Koledar, baze in opomniki, ki brez zapletov uredijo vsakdan.",
    features: [
      "Baza strank in terminov",
      "Baza storitev in osebja",
      "Personalizirani opomniki pred in po terminu",
      "Email pošiljanje (500 email/mesec)",
      "Komunikacija",
      "Celotna analitika",
      "Spletno naročanje",
      "Različni dizajni spletnega naročanja",
    ],
    ctaLabel: "Izberi paket",
  },
  {
    name: "Jedro Pro",
    monthlyPrice: "35 €",
    yearlyPrice: "28 €",
    yearlySaving: "-20%",
    subtitle: "Za podjetja, ki želijo več zasedenosti in manj praznih terminov",
    description:
      "Vključuje obveščanje izgubljenih strank, SMS opomnike in napredne komunikacijske funkcije.",
    features: [
      "Vse iz Jedro Plus",
      "Obveščanje izgubljenih strank",
      "SMS pošiljanje (200 sms/mesec)",
      "Email pošiljanje (2000 email/mesec)",
      "Dodatni dizajni spletnega naročanja",
    ],
    popular: true,
    ctaLabel: "Izberi paket",
  },
  {
    name: "Enterprise",
    monthlyPrice: "Po dogovoru",
    yearlyPrice: "Po dogovoru",
    subtitle: "Za podjetja s posebnimi zahtevami in prilagoditvami",
    description:
      "Prilagodimo custom dizajne, custom funkcije in celoten sistem vašemu poslovanju.",
    features: [
      "Custom AI funkcije (chatbot, asistent, receptionist in več)",
      "Custom booking dizajni z obdelavo slik in naprednimi elementi",
      "Avtomatizacije poslovnih procesov po meri",
      "Neomejena email in SMS kvota",
      "Dedicirani manager in prioritetna podpora",
    ],
    ctaLabel: "Pošlji povpraševanje",
  },
];

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
      {/* Billing toggle */}
      <div className="billing reveal">
        <span
          className={`billing__lab ${!isYearly ? "is-on" : ""}`}
          onClick={() => setIsYearly(false)}
        >
          Mesečno
        </span>
        <button
          type="button"
          className={`billing__switch ${isYearly ? "is-yearly" : ""}`}
          onClick={() => setIsYearly((v) => !v)}
          aria-label="Preklopi med mesečnim in letnim obračunom"
        >
          <span />
        </button>
        <span
          className={`billing__lab ${isYearly ? "is-on" : ""}`}
          onClick={() => setIsYearly(true)}
        >
          Letno
        </span>
      </div>

      <div className="price-grid" style={{ marginTop: 40 }}>
        {tiers.map((tier, i) => {
          const isQuote = tier.monthlyPrice === "Po dogovoru";
          const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;
          const feat = tier.popular;

          return (
            <div
              key={tier.name}
              className={`ptier reveal ${feat ? "ptier--feat" : ""}`}
              data-d={i}
            >
              {feat && <div className="pglow" />}
              {feat && <span className="pbadge">Najbolj priljubljen</span>}
              <div className="ptier__name">{tier.name}</div>
              <div className="ptier__price">
                {price}
                {!isQuote && <span> / mesec</span>}
              </div>
              <div className="ptier__save">
                {isYearly && tier.yearlySaving ? tier.yearlySaving : ""}
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
                href="/#kontakt"
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
