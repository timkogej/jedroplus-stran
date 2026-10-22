import Link from "next/link";
import { pageLocale, localizedPath, slovenianPath } from "@/lib/localized-routes";
import { getSearchCopy } from "@/lib/search-copy";

const ui = {
  sl: { title: "Povežite naslednji korak", lead: "Sorodne funkcije in praktični vodniki za vaš način dela." },
  en: { title: "Connect the next step", lead: "Related features and practical guides for your workflow." },
  it: { title: "Collega il prossimo passo", lead: "Funzionalità e guide pratiche collegate al tuo lavoro." },
  de: { title: "Verbinde den nächsten Schritt", lead: "Passende Funktionen und praktische Leitfäden für deinen Arbeitsablauf." },
};
const online = "/funkcije/spletno-narocanje", sms = "/funkcije/sms-opomniki", crm = "/funkcije/crm-baza-strank", ai = "/funkcije/ai-komunikacija", phone = "/funkcije/receptionist-plus", price = "/cenik";
const setup = "/blog/dobrodosli-na-jedro-plus-blogu", imports = "/blog/uvoz-strank-v-jedroplus", calls = "/blog/kako-deluje-ai-recepcionistka", absence = "/blog/kako-zmanjsati-no-show-odpovedi-terminov", retention = "/blog/kako-obdrzati-stranke-zvestoba-storitvena-dejavnost";
const related: Record<string, string[]> = {
  [sms]: [online, ai, absence, price],
  [online]: ["/funkcije/resursi", "/funkcije/zahteve-za-termin", phone, setup],
  [crm]: [imports, ai, retention, price],
  [ai]: [crm, sms, retention, phone],
  [phone]: [calls, online, crm, price],
  "/funkcije/resursi": [online, "/panoge/wellness", setup, price],
  "/funkcije/zahteve-za-termin": [online, sms, phone, setup],
  "/funkcije/promocije-popusti": [crm, retention, ai, price],
  "/funkcije/qr-kode-booking-dizajni": [online, "/panoge/frizerski-saloni", setup, price],
  [absence]: [sms, online, phone, crm],
  [retention]: [crm, ai, online, price],
  [setup]: [imports, online, sms, calls],
  [imports]: [crm, setup, online, price],
  [calls]: [phone, online, sms, price],
};
export function RelatedContent({ path }: { path: string }) {
  const locale = pageLocale(path), key = slovenianPath(path), text = ui[locale];
  const targets = related[key] ?? (key.startsWith("/panoge/") ? [online, sms, phone, setup] : [online, crm, calls, price]);
  const items = targets.filter(target => target !== key).map(target => {
    const href = localizedPath(target, locale), copy = getSearchCopy(href);
    return copy ? { href, title: copy.title.replace(/\s*\|\s*Jedro\+.*$/, "") } : null;
  }).filter((item): item is { href: string; title: string } => Boolean(item));
  return <section className="section section--soft" aria-labelledby="related-content-heading"><div className="wrap"><div className="section-head"><h2 id="related-content-heading">{text.title}</h2><p className="lead">{text.lead}</p></div><div className="content-links">{items.map(item => <Link href={item.href} key={item.href}>{item.title}<span aria-hidden="true">↗</span></Link>)}</div></div></section>;
}
