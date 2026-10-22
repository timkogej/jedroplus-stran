import { CalendarCheck2, Check, Clock3, LayoutGrid, MessageSquareText, QrCode, Sparkles, Tag, UsersRound } from "lucide-react";

const previews = {
  "sms-opomniki": { icon: MessageSquareText, title: "Pravi čas. Pravo sporočilo.", label: "Opomnik pred obiskom", rows: [["Stranka", "Ana"], ["Termin", "Četrtek, 14.30"], ["Storitev", "Striženje"]], message: "Pozdravljeni Ana! Jutri ob 14.30 vas čaka termin za striženje. Veselimo se vašega obiska.", result: "Opomnik je povezan s terminom" },
  "spletno-narocanje": { icon: CalendarCheck2, title: "Vaš naslednji obisk.", label: "Spletno naročanje", rows: [["Izberite storitev", "Striženje"], ["Izvajalec", "Maja"], ["Prost termin", "Četrtek, 14.30"]], message: "Stranka izbere storitev, izvajalca in uro. Rezervacija se zapiše v vaš koledar.", result: "Od izbire do termina" },
  "crm-baza-strank": { icon: UsersRound, title: "Vsaka stranka ima svojo zgodbo.", label: "Kartica stranke", rows: [["Stranka", "Ana"], ["Zadnji obisk", "Striženje"], ["Opomba", "Raje popoldanski termini"]], message: "Kontakti, zgodovina obiskov in pomembne opombe ostanejo na enem mestu.", result: "Povezano z zgodovino obiskov" },
  "ai-komunikacija": { icon: Sparkles, title: "Besede v vašem tonu.", label: "AI komunikacija", rows: [["Vrsta sporočila", "Zahvala po obisku"], ["Nagovor", "Oseben in prijazen"], ["Prejemnica", "Ana"]], message: "Ana, hvala za današnji obisk! Veseli nas, da ste si vzeli čas zase. Se vidimo ob naslednjem terminu.", result: "Prilagojeno stranki in storitvi" },
  "promocije-popusti": { icon: Tag, title: "Ponudba ob pravem trenutku.", label: "Primer promocije", rows: [["Promocija", "Popoldanska ponudba"], ["Storitev", "Izbrana storitev"], ["Popust v primeru", "10 %"]], message: "Določite pogoje promocije, izbrane storitve in obdobje veljavnosti.", result: "Vaša pravila, vaša ponudba" },
  resursi: { icon: LayoutGrid, title: "Tudi prostor ima svoj urnik.", label: "Sobe in oprema", rows: [["Termin", "Masaža, 14.30"], ["Izvajalka", "Maja"], ["Prostor", "Kabina 1"]], message: "Pri načrtovanju termina upoštevajte izvajalca, prostor in potrebno opremo.", result: "Viri povezani s terminom" },
  "zahteve-za-termin": { icon: Clock3, title: "Stranka predlaga. Vi potrdite.", label: "Zahteva za termin", rows: [["Stranka", "Ana"], ["Storitev", "Posvet"], ["Želeni čas", "Četrtek popoldne"]], message: "Preglejte željo stranke in potrdite točno uro, ki se prilega vašemu urniku.", result: "Pregled pred potrditvijo" },
  "qr-kode-booking-dizajni": { icon: QrCode, title: "Vaša znamka. Vaše naročanje.", label: "Booking dizajni in QR kode", rows: [["Videz", "V barvah vaše znamke"], ["Kanal", "Splet, Instagram ali pult"], ["Cilj", "Vaša naročilna stran"]], message: "Delite povezavo ali natisnite QR kodo, ki stranko pripelje do spletnega naročanja.", result: "Krajša pot do novega termina" },
};

export function FeaturePreview({ slug }: { slug: string }) {
  const preview = previews[slug as keyof typeof previews];
  if (!preview) return null;
  const Icon = preview.icon;
  return (
    <figure className="feature-preview">
      <div className="feature-preview__brand"><span>Jedro+</span><small>{preview.label}</small></div>
      <div className="feature-preview__body"><span className="feature-preview__icon"><Icon size={30} strokeWidth={1.4} aria-hidden="true" /></span><p className="feature-preview__title">{preview.title}</p><dl>{preview.rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p className="feature-preview__message">{preview.message}</p><div className="feature-preview__result"><Check size={16} aria-hidden="true" />{preview.result}</div></div>
      <figcaption>Ilustrativni prikaz funkcije z vzorčnimi podatki.</figcaption>
    </figure>
  );
}
