import Link from "next/link";
import { subscriptionPlans, planComparisonRows } from "@/lib/pricing";

export function PricingDetails() {
  return (
    <section className="section section--soft offer-details" aria-labelledby="offer-details-heading">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Primerjava paketov</span>
          <h2 id="offer-details-heading" style={{ marginTop: 18 }}>Kaj je <span className="grad-text">vključeno?</span></h2>
          <p className="lead">Primerjajte osnovne funkcije in mesečne količine. Minute za Receptionist+ se kupujejo posebej pri vseh paketih.</p>
        </div>
        <p className="offer-table-hint">Na manjšem zaslonu povlecite tabelo vstran.</p>
        <div className="offer-table-scroll" role="region" aria-label="Primerjava funkcij naročniških paketov" tabIndex={0}>
          <table className="offer-table">
            <caption>Funkcije in vključene količine po paketih Jedro+</caption>
            <thead><tr><th scope="col">Funkcija</th>{subscriptionPlans.map(plan => <th scope="col" key={plan.name}>{plan.name}</th>)}</tr></thead>
            <tbody>{planComparisonRows.map(row => <tr key={row.label}><th scope="row">{row.label}</th>{row.values.map((value, index) => <td key={index}>{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <div className="offer-guide">
          <article><span className="eyebrow">01</span><h3>Mesečno plačilo</h3><p>Jedro Plus stane 14,90 € na mesec, Jedro Pro pa 29,90 € na mesec. Za osnovni koledar in stranke lahko začnete s paketom Free.</p></article>
          <article><span className="eyebrow">02</span><h3>Letno plačilo</h3><p>Jedro Plus stane 142,80 € na leto, Jedro Pro pa 298,80 € na leto. To ustreza 11,90 € oziroma 24,90 € na mesec; plača se celoten letni znesek.</p></article>
          <article><span className="eyebrow">03</span><h3>Ločeni dodatki</h3><p>Paketi minut za Receptionist+, dodatni SMS in davčna blagajna so ločeni od osnovne naročnine. SMS in e-mail količine, ki so že vključene, so prikazane v primerjavi.</p></article>
        </div>
        <p className="offer-language">Jedro+ je na voljo podjetjem po EU. Dodatne jezikovne prilagoditve so možne po dogovoru. </p>
        <p className="offer-language">Aplikacija Jedro+ je na voljo v slovenščini in angleščini. <Link href="/o-nas#jeziki">Več o jezikih in uporabi</Link></p>
        <div className="offer-links"><Link href="#receptionist-plus">Cenik minut za Receptionist+ <span aria-hidden="true">↗</span></Link><Link href="/davcna-blagajna">Davčna blagajna za Slovenijo <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>
  );
}
