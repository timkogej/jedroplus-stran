// Generated from Slovenian source and src/locales/it.json.
import Link from "next/link";
import { subscriptionPlans, planComparisonRows } from "@/italian/lib/pricing";

export function PricingDetails() {
  return (
    <section className="section section--soft offer-details" aria-labelledby="offer-details-heading">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Confronta i piani</span>
          <h2 id="offer-details-heading" style={{ marginTop: 18 }}>Cosa è <span className="grad-text">incluso?</span></h2>
          <p className="lead">Confronta le funzionalità principali e le quantità mensili incluse. I minuti di Receptionist+ si acquistano separatamente con tutti i piani.</p>
        </div>
        <p className="offer-table-hint">Su schermi piccoli, scorri la tabella lateralmente.</p>
        <div className="offer-table-scroll" role="region" aria-label="Confronto delle funzionalità dei piani" tabIndex={0}>
          <table className="offer-table">
            <caption>Funzionalità e quantità incluse nei piani Jedro+</caption>
            <thead><tr><th scope="col">Funzionalità</th>{subscriptionPlans.map(plan => <th scope="col" key={plan.name}>{plan.name}</th>)}</tr></thead>
            <tbody>{planComparisonRows.map(row => <tr key={row.label}><th scope="row">{row.label}</th>{row.values.map((value, index) => <td key={index}>{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <div className="offer-guide">
          <article><span className="eyebrow">01</span><h3>Pagamento mensile</h3><p>Jedro Plus costa 14,90 € al mese e Jedro Pro 29,90 € al mese. Per un calendario di base e la gestione dei clienti puoi iniziare con Free.</p></article>
          <article><span className="eyebrow">02</span><h3>Pagamento annuale</h3><p>Jedro Plus costa 142,80 € all’anno e Jedro Pro 298,80 € all’anno. Equivalgono rispettivamente a 11,90 € e 24,90 € al mese; si paga l’intero importo annuale in anticipo.</p></article>
          <article><span className="eyebrow">03</span><h3>Componenti aggiuntivi separati</h3><p>I pacchetti di minuti Receptionist+, gli SMS aggiuntivi e il registratore fiscale sloveno sono separati dall’abbonamento base. Le quantità di SMS ed e-mail già incluse sono indicate nel confronto.</p></article>
        </div>
        <p className="offer-language">Jedro+ è disponibile per le attività nell’UE. Ulteriori personalizzazioni linguistiche sono possibili su accordo. </p>
        <p className="offer-language">L’app Jedro+ è disponibile in sloveno e inglese. <Link href="/it/chi-siamo#jeziki">Scopri le lingue e le modalità di utilizzo</Link></p>
        <div className="offer-links"><Link href="#receptionist-plus">Prezzi dei minuti Receptionist+ <span aria-hidden="true">↗</span></Link><Link href="/it/cassa-fiscale">Registratore fiscale per la Slovenia <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>
  );
}
