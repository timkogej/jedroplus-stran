import Image from "next/image";

const copy = {
  "sl-SI": { eyebrow: "Dejanska aplikacija", title: "Poglejte Jedro+ v praksi.", intro: "Od tedenskega urnika do podatkov o stranki — tako so videti povezani deli aplikacije.", calendar: "Tedenski koledar", calendarText: "Termini, trajanje storitev in razpored ekipe v enem tedenskem pogledu.", client: "Kartica stranke", clientText: "Kontaktni podatki, opombe in pregled obiskov na enem mestu.", note: "Posnetek aplikacije Jedro+ v slovenščini z vzorčnimi podatki.", open: "Odpri večji prikaz" },
  "en-GB": { eyebrow: "The actual application", title: "See Jedro+ in practice.", intro: "From the weekly schedule to client details — explore the connected parts of the application.", calendar: "Weekly calendar", calendarText: "Appointments, service durations and the team's schedule in one weekly view.", client: "Client profile", clientText: "Contact details, notes and visit statistics in one place.", note: "Screenshot of Jedro+ in Slovenian with sample data.", open: "Open larger image" },
  "it-IT": { eyebrow: "L'applicazione reale", title: "Scopri Jedro+ in pratica.", intro: "Dall'agenda settimanale ai dati del cliente: ecco le parti collegate dell'applicazione.", calendar: "Calendario settimanale", calendarText: "Appuntamenti, durata dei servizi e agenda del team in un'unica vista settimanale.", client: "Scheda cliente", clientText: "Contatti, note e statistiche delle visite in un unico posto.", note: "Schermata di Jedro+ in sloveno con dati di esempio.", open: "Apri l'immagine ingrandita" },
  "de-DE": { eyebrow: "Die echte Anwendung", title: "Jedro+ in der Praxis.", intro: "Vom Wochenplan bis zu den Kundendaten: So sehen die verbundenen Bereiche der Anwendung aus.", calendar: "Wochenkalender", calendarText: "Termine, Behandlungsdauer und Teamplanung in einer Wochenansicht.", client: "Kundenprofil", clientText: "Kontaktdaten, Notizen und Besuchsstatistik an einem Ort.", note: "Screenshot von Jedro+ auf Slowenisch mit Beispieldaten.", open: "Größere Ansicht öffnen" },
};

export function ProductScreens({ locale = "sl-SI", clientOnly = false }: { locale?: keyof typeof copy; clientOnly?: boolean }) {
  const t = copy[locale];
  const client = <figure className="product-screens__card product-screens__card--client">
    <div className="product-screens__client-scroll" tabIndex={0} role="region" aria-label={t.client}>
      <Image src="/images/product/client-profile.webp" alt={t.client} width={1016} height={1668} sizes="(max-width: 760px) 90vw, 420px" />
    </div>
    <figcaption><h3>{t.client}</h3><p>{t.clientText}</p><small>{t.note}</small><a href="/images/product/client-profile.webp" target="_blank" rel="noopener noreferrer">{t.open} <span aria-hidden="true">↗</span></a></figcaption>
  </figure>;
  if (clientOnly) return client;
  return <section className="section section--soft" aria-labelledby="product-screens-title">
    <div className="wrap">
      <div className="section-head reveal"><span className="eyebrow">{t.eyebrow}</span><h2 id="product-screens-title" style={{ marginTop: 18 }}>{t.title}</h2><p className="lead">{t.intro}</p></div>
      <div className="product-screens">
        <figure className="product-screens__card product-screens__card--calendar">
          <a className="product-screens__calendar" href="/images/product/weekly-calendar.webp" target="_blank" rel="noopener noreferrer" aria-label={t.calendar+" — "+t.open}>
            <Image src="/images/product/weekly-calendar.webp" alt={t.calendar} width={2458} height={1566} sizes="(max-width: 760px) 90vw, 68vw" />
          </a>
          <figcaption><h3>{t.calendar}</h3><p>{t.calendarText}</p><small>{t.note}</small><a href="/images/product/weekly-calendar.webp" target="_blank" rel="noopener noreferrer">{t.open} <span aria-hidden="true">↗</span></a></figcaption>
        </figure>
        {client}
      </div>
    </div>
  </section>;
}
