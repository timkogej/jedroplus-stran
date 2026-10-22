// Generated from Slovenian source and src/locales/de.json.
import Link from "next/link";
import { subscriptionPlans, planComparisonRows } from "@/german/lib/pricing";

export function PricingDetails() {
  return (
    <section className="section section--soft offer-details" aria-labelledby="offer-details-heading">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Tarife vergleichen</span>
          <h2 id="offer-details-heading" style={{ marginTop: 18 }}>Was ist <span className="grad-text">enthalten?</span></h2>
          <p className="lead">Vergleiche die Grundfunktionen und monatlichen Kontingente. Gesprächsminuten für Receptionist+ werden bei allen Tarifen separat gekauft.</p>
        </div>
        <p className="offer-table-hint">Auf kleinen Bildschirmen kannst du die Tabelle seitlich verschieben.</p>
        <div className="offer-table-scroll" role="region" aria-label="Funktionsvergleich der Abonnements" tabIndex={0}>
          <table className="offer-table">
            <caption>Funktionen und enthaltene Kontingente der Jedro+ Tarife</caption>
            <thead><tr><th scope="col">Funktion</th>{subscriptionPlans.map(plan => <th scope="col" key={plan.name}>{plan.name}</th>)}</tr></thead>
            <tbody>{planComparisonRows.map(row => <tr key={row.label}><th scope="row">{row.label}</th>{row.values.map((value, index) => <td key={index}>{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <div className="offer-guide">
          <article><span className="eyebrow">01</span><h3>Monatliche Zahlung</h3><p>Jedro Plus kostet 19 € pro Monat, Jedro Pro 35 € pro Monat. Für einen einfachen Kalender und die Kundenverwaltung kannst du mit Free starten.</p></article>
          <article><span className="eyebrow">02</span><h3>Jährliche Zahlung</h3><p>Jedro Plus kostet 180 € im Jahr, Jedro Pro 336 € im Jahr. Das entspricht 15 € bzw. 28 € pro Monat; der gesamte Jahresbetrag wird im Voraus bezahlt.</p></article>
          <article><span className="eyebrow">03</span><h3>Separate Zusatzleistungen</h3><p>Minutenpakete für Receptionist+, zusätzliche SMS und die slowenische Fiskalkasse sind vom Basisabonnement getrennt. Enthaltene SMS- und E-Mail-Kontingente findest du im Vergleich.</p></article>
        </div>
        <p className="offer-language">Jedro+ ist für Unternehmen in der EU verfügbar. Weitere Sprachanpassungen sind nach Vereinbarung möglich. </p>
        <p className="offer-language">Die Jedro+ App ist auf Slowenisch und Englisch verfügbar. <Link href="/de/ueber-uns#jeziki">Mehr zu Sprachen und Nutzung</Link></p>
        <div className="offer-links"><Link href="#receptionist-plus">Minutenpreise für Receptionist+ <span aria-hidden="true">↗</span></Link><Link href="/de/fiskalkasse">Fiskalkasse für Slowenien <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>
  );
}
