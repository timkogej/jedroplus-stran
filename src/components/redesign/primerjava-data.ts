// Content for each /primerjava/[slug] comparison subpage. Mirrors the shape of
// panoge-data.ts / funkcije-data.ts: a shared template renders these fields and
// the CTA band is identical across pages. Each entry targets one comparison
// keyword ("Jedro+ vs <rival>"). Facts here are pre-verified and must not change.

export type CmpRow = { feature: string; jedro: string; rival: string };
export type CmpBlock = { title: string; text: string };
export type CmpPriceRow = { label: string; jedro: string; rival: string };
export type CmpScenario = {
  need: string;
  pick: "jedro" | "rival";
  label: string; // ime izbranega sistema
  why: string;
};
export type CmpFaq = { q: string; a: string };

export type Primerjava = {
  title: string; // h1 — vsebuje ciljni keyword
  metaTitle: string; // <title>
  metaDescription: string; // 140–160 znakov
  eyebrow: string; // hero eyebrow
  rivalName: string; // ime konkurenta (za drobtine, breadcrumb, ...)
  cardText: string; // kratek opis za kartico na /primerjava (hub)
  heroSub: string;
  intro: string[]; // uvodni odstavki

  verdictJedro: string[]; // "Izberite Jedro+, če želite" — alineje
  verdictRival: string[]; // "Izberite <rival>, če želite" — alineje

  table: CmpRow[]; // primerjalna tabela
  tableNote?: string; // opomba pod tabelo (zvezdica)

  jedroWinsLead?: string; // uvodni stavek k "Kje Jedro+ izstopa"
  jedroWins: CmpBlock[];

  rivalWinsTitle: string; // "Kje je <rival> boljša izbira (pošteno)"
  rivalWinsIntro?: string;
  rivalWins: CmpBlock[];

  priceLead?: string;
  priceTable: CmpPriceRow[];
  priceNote: string[]; // odstavki pod cenovno tabelo

  scenarios: CmpScenario[]; // "Katero izbrati" po scenariju

  faq: CmpFaq[];
  sourceNote: string; // opomba o virih na dnu
};

export const primerjave: Record<string, Primerjava> = {
  "jedroplus-vs-lime-booking": {
    title: "Jedro+ ali Lime Booking? Poštena primerjava",
    metaTitle: "Jedro+ ali Lime Booking? Poštena primerjava (2026)",
    metaDescription:
      "Jedro+ in Lime Booking primerjava: funkcije, cene, AI opomniki, točke zvestobe in davčna blagajna. Preverite, katera rešitev je prava za vaše podjetje.",
    eyebrow: "Primerjava",
    rivalName: "Lime Booking",
    cardText:
      "Uveljavljen sistem z nižjo vstopno ceno proti Jedro+ z AI opomniki in točkami zvestobe. Funkcije, cene in davčna blagajna drug ob drugem.",
    heroSub:
      "Funkcije, cene, AI opomniki, točke zvestobe in davčna blagajna — pošteno primerjano, vključno s tem, kje je Lime Booking boljša izbira.",
    intro: [
      "Jedro+ in Lime Booking sta oba slovenska sistema za naročanje strank, namenjena storitvenim podjetjem — salonom, klinikam, wellnessu in podobnim dejavnostim. Oba omogočata spletno naročanje, koledar terminov, CRM, opomnike in spletna plačila. Razlike se pokažejo v pristopu: Lime Booking je uveljavljen sistem z veliko bazo uporabnikov, Jedro+ pa stavi na pametnejšo, AI-podprto komunikacijo in orodja za zvestobo strank. Spodaj primerjamo oba pošteno — vključno s tem, kje je Lime Booking boljša izbira.",
    ],
    verdictJedro: [
      "AI-personalizirane opomnike, ki zvenijo kot ročno napisani (ne šablonski)",
      "točke zvestobe za stranke (pri terminih in spletnem naročanju)",
      "samodejno obveščanje izgubljenih strank (win-back)",
      "sistem, ki dela onkraj salonov (klinike, fitnes, coaching, avtoservisi)",
    ],
    verdictRival: [
      "najnižjo vstopno ceno (osnovni paket od 14,90 €/mesec)",
      "uveljavljen sistem z veliko bazo uporabnikov in dolgim stažem",
      "podporo za več jezikov že danes (8 jezikov)",
      "davčno blagajno vključeno že v osnovnih paketih",
    ],
    table: [
      { feature: "Spletno naročanje 24/7", jedro: "Da", rival: "Da" },
      { feature: "Koledar in urniki zaposlenih", jedro: "Da", rival: "Da" },
      { feature: "CRM / baza strank", jedro: "Da", rival: "Da" },
      { feature: "Analitika", jedro: "Da", rival: "Da" },
      { feature: "Opomniki (SMS + e-pošta)", jedro: "Da", rival: "Da" },
      { feature: "AI-personalizirani opomniki", jedro: "Da", rival: "Standardni opomniki*" },
      { feature: "Točke zvestobe (termini + booking)", jedro: "Da", rival: "Ni javno navedeno" },
      { feature: "Obveščanje izgubljenih strank", jedro: "Da", rival: "Ni javno navedeno" },
      { feature: "Spletna plačila / avansi", jedro: "Da", rival: "Da" },
      { feature: "Popusti in kuponi", jedro: "Da", rival: "Ni javno navedeno" },
      { feature: "Davčna blagajna (FURS)", jedro: "Da (ločen modul)", rival: "Da (v paketih)" },
      { feature: "Podpora za več jezikov", jedro: "SL, EN (več pride)", rival: "8 jezikov" },
      { feature: "Brezplačen uvoz podatkov", jedro: "Da", rival: "Da" },
      {
        feature: "Panoge",
        jedro: "Več (saloni, klinike, fitnes, coaching, avto…)",
        rival: "Predvsem saloni/wellness",
      },
      { feature: "Izhodiščna cena", jedro: "19 €/mesec", rival: "14,90 €/mesec" },
    ],
    tableNote:
      "*Po javno dostopnih podatkih Lime Booking ponuja samodejne opomnike; AI-personalizacije sporočil ne izpostavlja.",
    jedroWins: [
      {
        title: "AI-personalizirani opomniki",
        text: "Pri Jedro+ vsako sporočilo sestavi AI posebej — prilagojeno storitvi, terminu, izvajalcu in tonu vašega podjetja. Namesto enega šablonskega „Opominjamo vas na termin“ stranka dobi sporočilo, ki zveni, kot da ga je napisal človek iz vašega salona. To ni le lepše — pravi ton pomeni več potrjenih terminov in manj odpovedi.",
      },
      {
        title: "Točke zvestobe",
        text: "Jedro+ nagradi zveste stranke s točkami — tako pri terminih kot pri spletnem naročanju. Stranke, ki zbirajo točke, se vračajo pogosteje. To je funkcija za rast prihodka, ne le za organizacijo — in je pri primerljivih sistemih redka.",
      },
      {
        title: "Obveščanje izgubljenih strank",
        text: "Jedro+ samodejno prepozna stranke, ki se dolgo niso oglasile, in jim pošlje vljudno povabilo nazaj. Prazni termini se zapolnijo brez vašega klicanja.",
      },
      {
        title: "Več panog",
        text: "Jedro+ ni le za salone — enako dobro pokrije klinike, fitnes in wellness, coaching, avtoservise in druge storitvene dejavnosti.",
      },
    ],
    rivalWinsTitle: "Kje je Lime Booking boljša izbira (pošteno)",
    rivalWinsIntro:
      "Ne bi bilo pošteno reči, da je Jedro+ boljši v vsem. Lime Booking ima prave prednosti:",
    rivalWins: [
      {
        title: "Cena",
        text: "Osnovni paket Lime Booking se začne pri 14,90 €/mesec, kar je nižje od izhodiščnih 19 €/mesec pri Jedro+. Če je najnižja cena vaš glavni kriterij, je Lime Booking cenejši.",
      },
      {
        title: "Uveljavljenost",
        text: "Lime Booking navaja več kot tisoč salonov in verig — daljši staž in velika baza uporabnikov sta za marsikoga pomembna varnost.",
      },
      {
        title: "Jeziki",
        text: "Lime Booking podpira 8 jezikov že danes. Jedro+ trenutno pokriva slovenščino in angleščino (ostali jeziki so v pripravi). Če imate veliko tujih strank, je to razlika.",
      },
      {
        title: "Davčna blagajna v paketu",
        text: "Lime Booking ima davčno blagajno vključeno v paketih, pri Jedro+ pa je davčna blagajna ločen modul z doplačilom.",
      },
    ],
    priceTable: [
      { label: "Izhodiščni paket", jedro: "19 €/mesec (Jedro Plus)", rival: "14,90 €/mesec (osnovni)" },
      { label: "Napredni paket", jedro: "35 €/mesec (Jedro Pro)", rival: "29,90 €/mesec (napredni)" },
      { label: "Brezplačna preizkusna doba", jedro: "Da, brez kartice", rival: "Predstavitev na zahtevo" },
    ],
    priceNote: [
      "Jedro+ ni najcenejši sistem na trgu — in ni namenjen temu, da bi bil. Vrednost Jedro+ je v pametnejši komunikaciji in orodjih za zvestobo, ki pomagajo, da se stranke vračajo. Če iščete najnižjo mesečno ceno, obstajajo cenejše možnosti. Če iščete sistem, ki aktivno pomaga polniti urnik in obdržati stranke, je Jedro+ vreden razlike.",
    ],
    scenarios: [
      {
        need: "Manjši salon, ki išče najcenejšo osnovo",
        pick: "rival",
        label: "Lime Booking",
        why: "nižja vstopna cena",
      },
      {
        need: "Podjetje, ki želi manj odpovedi in več vračajočih strank",
        pick: "jedro",
        label: "Jedro+",
        why: "AI opomniki + točke zvestobe + win-back",
      },
      {
        need: "Klinika, fitnes, coaching, avtoservis",
        pick: "jedro",
        label: "Jedro+",
        why: "širša panožna pokritost",
      },
      {
        need: "Veliko tujih strank danes",
        pick: "rival",
        label: "Lime Booking",
        why: "8 jezikov",
      },
    ],
    faq: [
      {
        q: "Ali sta Jedro+ in Lime Booking slovenska sistema?",
        a: "Da, oba sta razvita v Sloveniji in namenjena slovenskim storitvenim podjetjem, z lokalno podporo in skladnostjo s slovensko zakonodajo.",
      },
      {
        q: "Katera je glavna razlika med Jedro+ in Lime Booking?",
        a: "Jedro+ stavi na AI-personalizirane opomnike in orodja za zvestobo strank (točke zvestobe, obveščanje izgubljenih strank), Lime Booking pa je uveljavljen sistem z nižjo vstopno ceno in veliko bazo uporabnikov.",
      },
      {
        q: "Ali ima Jedro+ davčno blagajno kot Lime Booking?",
        a: "Da. Jedro+ ponuja davčno blagajno s FURS fiskalizacijo, vendar kot ločen modul z doplačilom. Pri Lime Booking je davčna blagajna vključena v paketih.",
      },
      {
        q: "Je Jedro+ dražji od Lime Booking?",
        a: "Izhodiščni paket Jedro+ (19 €/mesec) je nekoliko dražji od osnovnega paketa Lime Booking (14,90 €/mesec). Jedro+ v zameno ponuja AI-personalizacijo in točke zvestobe, ki jih osnovni paketi konkurence nimajo.",
      },
      {
        q: "Ali lahko preidem z Lime Booking na Jedro+?",
        a: "Da. Jedro+ brezplačno pomaga pri prenosu obstoječih podatkov strank iz drugih sistemov, da začnete brez zamika.",
      },
    ],
    sourceNote:
      "Podatki o Lime Booking preverjeni junija 2026 iz javno dostopnih virov. Za najbolj svež pregled preverite tudi uradno stran ponudnika.",
  },

  "jedroplus-vs-mojsalon": {
    title: "Jedro+ ali mojsalon.si? Primerjava",
    metaTitle: "Jedro+ ali mojsalon.si? Primerjava rezervacijskih sistemov",
    metaDescription:
      "Primerjava Jedro+ in mojsalon.si: AI opomniki, točke zvestobe, davčna blagajna in več panog proti preprostemu salonskemu sistemu. Katera rešitev je prava?",
    eyebrow: "Primerjava",
    rivalName: "mojsalon.si",
    cardText:
      "Preprost salonski sistem proti širši platformi Jedro+ z AI opomniki, točkami zvestobe, davčno blagajno in podporo za več panog.",
    heroSub:
      "Preprost salonski sistem proti širši platformi z AI opomniki, točkami zvestobe in davčno blagajno — pošteno primerjano.",
    intro: [
      "mojsalon.si je preprost, salonsko usmerjen rezervacijski sistem — narejen predvsem za frizerske in kozmetične salone, ki želijo osnovno spletno naročanje in SMS opomnike. Jedro+ je širša platforma z AI-personalizirano komunikacijo, točkami zvestobe, davčno blagajno in podporo za več panog. Če iščete zgolj preprosto naročanje za en salon, je mojsalon.si dovolj. Če želite sistem, ki aktivno pomaga obdržati in vračati stranke, ponuja Jedro+ več.",
    ],
    verdictJedro: [
      "AI-personalizirane opomnike",
      "točke zvestobe",
      "obveščanje izgubljenih strank",
      "spletna plačila",
      "davčno blagajno",
      "delovanje onkraj salonov",
    ],
    verdictRival: [
      "kar se da preprost, salonsko specializiran sistem za osnovno naročanje in SMS opomnike",
    ],
    table: [
      { feature: "Spletno naročanje", jedro: "Da", rival: "Da" },
      { feature: "Prilagoditev videza (barve, logo)", jedro: "Da", rival: "Da" },
      {
        feature: "SMS opomniki",
        jedro: "Da (v paketu Pro)",
        rival: "Da (SMS krediti se kupujejo posebej)*",
      },
      { feature: "E-poštni opomniki", jedro: "Da", rival: "Da" },
      { feature: "AI-personalizirani opomniki", jedro: "Da", rival: "Standardni SMS" },
      { feature: "Točke zvestobe", jedro: "Da", rival: "Ni javno navedeno" },
      { feature: "Obveščanje izgubljenih strank", jedro: "Da", rival: "Ni javno navedeno" },
      { feature: "Spletna plačila / avansi", jedro: "Da", rival: "Ni javno navedeno" },
      { feature: "Davčna blagajna (FURS)", jedro: "Da (ločen modul)", rival: "Ni javno navedeno" },
      { feature: "Panoge", jedro: "Več", rival: "Predvsem saloni" },
      { feature: "Brezplačna preizkusna doba", jedro: "Da, brez kartice", rival: "7 dni" },
    ],
    tableNote:
      "*Po javno dostopnih podatkih mojsalon.si SMS opomnike zaračunava po kreditih (1 kredit = 1 SMS), ki se kupujejo ločeno.",
    jedroWinsLead:
      "mojsalon.si dobro opravi osnovno nalogo: spletno naročanje in SMS opomnik 24 ur pred terminom. Jedro+ gre dlje — sporočila personalizira AI, stranke nagradi s točkami zvestobe, samodejno povabi nazaj tiste, ki se dolgo niso oglasile, in vključuje davčno blagajno ter spletna plačila. Za rastoče podjetje, ki želi več kot le „koledar in opomnik“, je to razlika med orodjem in pravim sistemom za rast.",
    jedroWins: [],
    rivalWinsTitle: "Kje je mojsalon.si primernejši (pošteno)",
    rivalWinsIntro:
      "Če ste manjši salon, ki želi najpreprostejšo možno rešitev in vas napredne funkcije ne zanimajo, je mojsalon.si preprost in salonsko specializiran. Manj funkcij pomeni tudi manj za nastaviti.",
    rivalWins: [],
    priceTable: [],
    priceNote: [],
    scenarios: [],
    faq: [
      {
        q: "Kakšna je razlika med Jedro+ in mojsalon.si?",
        a: "mojsalon.si je preprost salonski sistem za osnovno naročanje in SMS opomnike. Jedro+ je širša platforma z AI-personaliziranimi opomniki, točkami zvestobe, davčno blagajno in podporo za več panog.",
      },
      {
        q: "Ali Jedro+ zaračunava SMS po kreditih kot mojsalon.si?",
        a: "Pri Jedro+ so SMS opomniki vključeni v paketu Jedro Pro. Po javnih podatkih mojsalon.si SMS zaračunava po kreditih, ki se kupujejo ločeno.",
      },
      {
        q: "Je Jedro+ primeren tudi za dejavnosti, ki niso saloni?",
        a: "Da. Jedro+ pokriva klinike, fitnes in wellness, coaching, avtoservise in druge storitvene dejavnosti, ne le salonov.",
      },
    ],
    sourceNote:
      "Podatki o mojsalon.si preverjeni junija 2026 iz javno dostopnih virov.",
  },
};

export const primerjaveSlugs = Object.keys(primerjave);
