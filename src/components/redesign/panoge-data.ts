// Content for each /panoge/[slug] subpage. Text is taken verbatim from the
// design handoff. `h2a` / `h2b` / the CTA band are identical across pages and
// are rendered directly in the page template.

export type PanogaListItem = { b: string; rest: string };
export type PanogaCard = { title: string; text: string };

export type Panoga = {
  title: string; // h1 (may contain "&")
  heroTag: string; // hero placeholder label
  mediaTag: string; // split media placeholder label
  heroSub: string;
  lead: string;
  list: PanogaListItem[];
  cards: PanogaCard[];
};

export const panoge: Record<string, Panoga> = {
  "frizerski-saloni": {
    title: "Frizerski, kozmetični & barber saloni",
    heroTag: "FOTO — frizerski / barber salon (širok kader)",
    mediaTag: "FOTO — delo s stranko v frizerskem salonu",
    heroSub:
      "Jedro+ poskrbi za naročanje in opomnike, da se vi lahko posvetite stranki na stolu.",
    lead: "V salonu vsak prazen termin pomeni izgubljen prihodek. Jedro+ samodejno pošlje opomnik ob pravem času in v vašem tonu, povabi nazaj stranke, ki se dolgo niso oglasile, in omogoči spletno naročanje 24/7 — brez ročnega odgovarjanja na sporočila.",
    list: [
      { b: "Manj odpovedi", rest: " — opomnik ob pravem času zmanjša no-show" },
      { b: "Več ponovnih obiskov", rest: " — samodejni follow-up po storitvi" },
      { b: "Spletno naročanje", rest: " — v vaših barvah, brez programiranja" },
    ],
    cards: [
      { title: "Pameten urnik", text: "Termini, pavze in delo več frizerjev na enem mestu." },
      { title: "Baza strank", text: "Zgodovina obiskov, barve in preference vsake stranke." },
      { title: "Samodejni opomniki", text: "SMS ali e-pošta pred terminom — brez vašega dela." },
    ],
  },
  klinike: {
    title: "Zobne, estetske & medicinske klinike",
    heroTag: "FOTO — estetska / zobna klinika (čist, svetel prostor)",
    mediaTag: "FOTO — recepcija / obravnava v kliniki",
    heroSub:
      "Vsak pacient dobi prava navodila pred posegom in po njem, vi pa popoln pregled nad termini.",
    lead: "Vsaka stranka prejme pravočasna navodila pred posegom in po njem, kar gradi zaupanje in profesionalen vtis. Vi pa imate pregled nad termini, statusi in celotno zgodovino obiskov — brez izgubljenih kartonov in podvojenih vnosov.",
    list: [
      { b: "Pred-terminska navodila", rest: " — samodejno za vsako storitev" },
      { b: "Po-terminska oskrba", rest: " — zaupanje in profesionalen vtis" },
      { b: "Urejen CRM", rest: " — zgodovina, opombe in preference pacienta" },
    ],
    cards: [
      { title: "Digitalna kartoteka", text: "Vsi podatki o pacientu varno na enem mestu." },
      { title: "Potrditve terminov", text: "Manj odpovedi z dvojno potrditvijo." },
      { title: "Sledenje obiskom", text: "Pregled posegov in priporočenih kontrol." },
    ],
  },
  wellness: {
    title: "Masažni & wellness studii, fizioterapija",
    heroTag: "FOTO — wellness / masažni studio (umirjeno vzdušje)",
    mediaTag: "FOTO — masaža / fizioterapevtska obravnava",
    heroSub:
      "Od posameznih obravnav do serij in paketov — Jedro+ vse poveže v miren, urejen urnik.",
    lead: "Veliko storitev poteka v serijah ali paketih. Jedro+ poveže ponavljajoče se termine, pošlje nežne opomnike in samodejno povabi nazaj stranke, ki dolgo niso bile na obisku — da je vaš urnik vedno poln, vzdušje pa sproščeno.",
    list: [
      { b: "Serije in paketi", rest: " — povezani termini z enim klikom" },
      { b: "Nežni opomniki", rest: " — v tonu, ki ustreza vaši storitvi" },
      { b: "Ponovni obiski", rest: " — samodejna povabila neaktivnim strankam" },
    ],
    cards: [
      { title: "Paketni termini", text: "Več obravnav rezerviranih naenkrat." },
      { title: "Čakalna lista", text: "Sprosti se termin? Stranka takoj izve." },
      { title: "Zgodovina obravnav", text: "Pregled napredka vsake stranke." },
    ],
  },
  fitnes: {
    title: "Fitnes, joga, pilates & osebni trenerji",
    heroTag: "FOTO — fitnes / joga studio",
    mediaTag: "FOTO — skupinska vadba / osebni trening",
    heroSub:
      "Skupinske vadbe, članstva in individualni treningi — vse pregledno na enem mestu.",
    lead: "Od individualnih treningov do skupinskih vadb in paketov — Jedro+ obvešča o prostih mestih, vodi evidenco članstev in vabi nazaj neaktivne člane. Manj usklajevanja po telefonu, več zapolnjenih terminov.",
    list: [
      { b: "Skupinski termini", rest: " — evidenca prijav in članstev" },
      { b: "Obvestila o prostih mestih", rest: " — in samodejna čakalna lista" },
      { b: "Reaktivacija članov", rest: " — kampanje za vrnitev neaktivnih" },
    ],
    cards: [
      { title: "Urnik vadb", text: "Termini, kapacitete in prijave na enem mestu." },
      { title: "Članarine", text: "Pregled aktivnih in poteklih članstev." },
      { title: "Samodejne prijave", text: "Člani se prijavijo sami, prek povezave." },
    ],
  },
  avtoservisi: {
    title: "Avtoservisi, vulkanizerji & čistilni servisi",
    heroTag: "FOTO — avtoservis / delavnica",
    mediaTag: "FOTO — mehanik pri delu / vulkanizerstvo",
    heroSub:
      "Stranke veste, kdaj na servis in kdaj po vozilo — brez nepotrebnih klicev.",
    lead: "Jedro+ pošlje opomnik, ko se bliža čas za servis ali menjavo pnevmatik, in samodejno obvesti stranko, ko je vozilo pripravljeno za prevzem. Manj telefoniranja, urejen razpored dela in zadovoljne stranke, ki se vračajo.",
    list: [
      { b: "Opomniki za servis", rest: " — ob pravem času, samodejno" },
      { b: "Obvestilo o prevzemu", rest: " — ko je vozilo pripravljeno" },
      { b: "Urejen razpored", rest: " — pregled dela po dnevih in terminih" },
    ],
    cards: [
      { title: "Naročanje na termin", text: "Stranka izbere prost termin sama." },
      { title: "Sezonski opomniki", text: "Zimske/letne gume ob pravem času." },
      { title: "Zgodovina vozila", text: "Pregled opravljenih storitev." },
    ],
  },
  coaching: {
    title: "Svetovanje, coaching & terapija",
    heroTag: "FOTO — svetovalni / coaching prostor",
    mediaTag: "FOTO — svetovalni pogovor / terapija",
    heroSub:
      "Diskretna, zanesljiva komunikacija, da se lahko posvetite svojim strankam.",
    lead: "Vaše delo zahteva zaupanje in zanesljivost. Jedro+ pošlje diskretne opomnike, vodi ponavljajoče se termine in vam pomaga slediti napredku strank — da se lahko v celoti posvetite pogovoru, ne organizaciji.",
    list: [
      { b: "Diskretni opomniki", rest: " — brez izpostavljanja vsebine" },
      { b: "Ponavljajoči termini", rest: " — tedenska ali mesečna srečanja" },
      { b: "Sledenje napredku", rest: " — opombe in pregled obiskov" },
    ],
    cards: [
      { title: "Zasebne opombe", text: "Varno shranjene beležke o vsaki stranki." },
      { title: "Stalni termini", text: "Ponavljajoča srečanja z enim klikom." },
      { title: "Spletno naročanje", text: "Nove stranke rezervirajo same." },
    ],
  },
  "poslovne-storitve": {
    title: "IT, poslovne storitve & agencije",
    heroTag: "FOTO — pisarna / agencija",
    mediaTag: "FOTO — sestanek / delo v agenciji",
    heroSub:
      "Sestanki in onboarding strank tečejo sami, vi pa se posvetite projektom.",
    lead: "Jedro+ poskrbi za rezervacije sestankov, onboarding novih strank in samodejno komunikacijo — brez ročnega usklajevanja terminov po e-pošti. Več časa za delo, manj administracije.",
    list: [
      { b: "Rezervacije sestankov", rest: " — stranka izbere termin sama" },
      { b: "Onboarding strank", rest: " — samodejni koraki in obvestila" },
      { b: "Brez ročnega dela", rest: " — komunikacija teče samodejno" },
    ],
    cards: [
      { title: "Koledar sestankov", text: "Povezava za rezervacijo prostega termina." },
      { title: "Samodejna sporočila", text: "Potrditve in opomniki brez vašega dela." },
      { title: "Baza strank", text: "Vsi kontakti in zgodovina na enem mestu." },
    ],
  },
  ostalo: {
    title: "Ostala storitvena podjetja",
    heroTag: "FOTO — storitvena dejavnost",
    mediaTag: "FOTO — vaša dejavnost",
    heroSub:
      "Če delate s termini in strankami, Jedro+ dela za vas — postavimo ga po vaši meri.",
    lead: "Ne glede na panogo: če delate s termini in strankami, Jedro+ poskrbi za naročanje, opomnike, spletno rezervacijo in komunikacijo. Povejte nam, kako delate, in pripravimo postavitev po meri vaše dejavnosti.",
    list: [
      { b: "Prilagodljivo", rest: " — postavitev po meri vaše dejavnosti" },
      { b: "Vse na enem mestu", rest: " — termini, stranke, opomniki, naročanje" },
      { b: "Podpora pri zagonu", rest: " — pomagamo vam začeti" },
    ],
    cards: [
      { title: "Prilagojen urnik", text: "Termini in storitve po vaši logiki." },
      { title: "Spletno naročanje", text: "Stranke rezervirajo same, 24/7." },
      { title: "Opomniki", text: "Samodejna obvestila pred terminom." },
    ],
  },
};

export const panogeSlugs = Object.keys(panoge);
