// FAQ content for the redesign pages. Answers are written in natural language,
// 2–4 sentences, so they read well and are quotable. Panoga-specific FAQs live
// on each Panoga in panoge-data.ts.

export type FaqItem = { q: string; a: string };

export const homeFaq: FaqItem[] = [
  {
    q: "Kdaj lahko začnemo uporabljati Jedro+?",
    a: "Takoj. Ustvarite račun, nastavite osnovne podatke podjetja in sistem je pripravljen za uporabo v nekaj minutah. Po želji vam pomagamo uvoziti obstoječo bazo strank, da lahko brez zamika začnete sprejemati naročila.",
  },
  {
    q: "Ali so opomniki res personalizirani?",
    a: "Da. Vsako sporočilo sestavi AI posebej — prilagodi ga storitvi, terminu, izvajalcu in tonu vašega podjetja, zato je videti kot ročno napisano in nikoli robotsko. Stranka tako dobi pravo sporočilo ob pravem trenutku, vi pa za to ne porabite časa.",
  },
  {
    q: "Ali Jedro+ podpira e-mail in SMS opomnike?",
    a: "Da. E-mail opomniki so vključeni v vseh paketih, SMS opomniki pa v paketu Jedro Pro in Enterprise. Opomnike pošlje sistem samodejno pred terminom in po njem, brez vašega ročnega dela.",
  },
  {
    q: "Kaj so „izgubljene stranke“ in kako mi pomagajo?",
    a: "Funkcija Izgubljene stranke samodejno prepozna stranke, ki se dolgo niso oglasile, in jim pošlje vabilo k ponovnemu obisku. Tako zapolnite prazne termine in povrnete prihodek, ki bi sicer ostal neizkoriščen.",
  },
  {
    q: "Kako je poskrbljeno za varnost podatkov?",
    a: "Podatki so shranjeni varno, dostopi so omejeni, pri obdelavi pa upoštevamo dobre prakse varovanja in zahteve GDPR. Vaši podatki in podatki vaših strank ostanejo zaupni in pod vašim nadzorom.",
  },
  {
    q: "Koliko stane in ali lahko začnem brezplačno?",
    a: "Jedro+ lahko preizkusite brezplačno in brez kreditne kartice. Naročnine se začnejo pri 19 € na mesec (Jedro Plus), brez vezave — naročnino prekličete kadarkoli. Podrobnosti najdete na strani Cenik.",
  },
];

export const agencijaFaq: FaqItem[] = [
  {
    q: "Kaj ponuja Jedro+ Agencija?",
    a: "Razvijamo poslovne sisteme, komunikacijske sisteme in spletne strani za storitvena podjetja. Vse temelji na umetni inteligenci in prihaja iz ene roke — od poslovnega sistema do spletne strani.",
  },
  {
    q: "Kako hitro lahko postavite sistem ali spletno stran?",
    a: "Hitro — projekte merimo v dnevih in tednih, ne v mesecih. Medtem ko drugi šele načrtujejo, vaše podjetje že deluje, brez kompromisov pri kakovosti.",
  },
  {
    q: "Po čem se Jedro+ Agencija razlikuje od običajne agencije?",
    a: "Specializirani smo izključno za storitvena podjetja in razumemo termine, stranke in njihov vsakdan. Naše rešitve temeljijo na AI, zato delajo pametneje, hitreje in bolj samodejno.",
  },
  {
    q: "Ali lahko vse povežete v en sistem?",
    a: "Da. Vaše poslovanje, komunikacijo in spletno prisotnost združimo v eno platformo — od terminov in strank do komunikacije, naročanja in poročil.",
  },
];

export const cenikFaq: FaqItem[] = [
  {
    q: "Ali lahko Jedro+ preizkusim brezplačno?",
    a: "Da. Začnete lahko brezplačno in brez kreditne kartice ter nadgradite, ko ste pripravljeni. V 15 minutah vam lahko Jedro+ tudi predstavimo v praksi.",
  },
  {
    q: "Koliko stanejo paketi?",
    a: "Jedro Plus stane 19 € na mesec, Jedro Pro 35 € na mesec, paket Enterprise pa je po dogovoru. Vsi paketi vključujejo baze podatkov, koledar terminov, spletno naročanje in analitiko.",
  },
  {
    q: "Kakšna je razlika med paketoma Plus in Pro?",
    a: "Jedro Plus vključuje koledar, baze in opomnike za urejen pregled. Jedro Pro doda obveščanje izgubljenih strank, SMS opomnike in napredne komunikacijske funkcije za večjo zasedenost.",
  },
  {
    q: "Ali sem vezan na pogodbo in kako prekličem naročnino?",
    a: "Niste vezani — naročnina je brez vezave in jo prekličete kadarkoli. Plačujete mesečno in nadgradite ali znižate paket, ko želite.",
  },
];
