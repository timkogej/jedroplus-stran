// Generated from Slovenian source and src/locales/en.json.
import Link from "next/link";
import { subscriptionPlans, planComparisonRows } from "@/english/lib/pricing";

export function PricingDetails() {
  return (
    <section className="section section--soft offer-details" aria-labelledby="offer-details-heading">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Compare plans</span>
          <h2 id="offer-details-heading" style={{ marginTop: 18 }}>What is <span className="grad-text">included?</span></h2>
          <p className="lead">Compare core features and monthly allowances. Receptionist+ call minutes are purchased separately with every plan.</p>
        </div>
        <p className="offer-table-hint">On smaller screens, scroll the table sideways.</p>
        <div className="offer-table-scroll" role="region" aria-label="Subscription plan feature comparison" tabIndex={0}>
          <table className="offer-table">
            <caption>Features and included allowances by Jedro+ plan</caption>
            <thead><tr><th scope="col">Feature</th>{subscriptionPlans.map(plan => <th scope="col" key={plan.name}>{plan.name}</th>)}</tr></thead>
            <tbody>{planComparisonRows.map(row => <tr key={row.label}><th scope="row">{row.label}</th>{row.values.map((value, index) => <td key={index}>{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <div className="offer-guide">
          <article><span className="eyebrow">01</span><h3>Monthly payment</h3><p>Jedro Plus costs €19 per month and Jedro Pro costs €35 per month. For a basic calendar and client records, you can start with Free.</p></article>
          <article><span className="eyebrow">02</span><h3>Annual payment</h3><p>Jedro Plus costs €180 per year and Jedro Pro costs €336 per year. This is equivalent to €15 or €28 per month respectively; the full annual amount is paid upfront.</p></article>
          <article><span className="eyebrow">03</span><h3>Separate add-ons</h3><p>Receptionist+ minute packs, additional SMS and the Slovenian fiscal cash register are separate from the base subscription. Included SMS and email allowances are shown in the comparison.</p></article>
        </div>
        <p className="offer-language">Jedro+ is available to businesses across the EU. Additional language customisation is available by arrangement. </p>
        <p className="offer-language">The Jedro+ app is available in Slovenian and English. <Link href="/en/about#jeziki">More about languages and getting started</Link></p>
        <div className="offer-links"><Link href="#receptionist-plus">Receptionist+ minute pricing <span aria-hidden="true">↗</span></Link><Link href="/en/fiscal-cash-register">Fiscal cash register for Slovenia <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>
  );
}
