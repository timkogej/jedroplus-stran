import { receptionistPricingAnswer, receptionistUsageFaq } from "@/lib/receptionist";

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
    a: "Da. E-mail opomniki so vključeni v vseh plačljivih paketih. SMS opomniki so vključeni v paketu Jedro Pro (250 SMS na mesec) in Enterprise, v paketu Jedro Plus pa jih po potrebi dokupite (od 4 € za 50 SMS). Opomnike pošlje sistem samodejno pred terminom in po njem, brez vašega ročnega dela.",
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
    a: "Začnete lahko s paketom Free, ki je brezplačen za vedno. Jedro Plus stane 14,90 € na mesec ali 142,80 € ob letnem plačilu (11,90 € na mesec). Minute za Receptionist+ se kupujejo ločeno. Vse pakete in možnosti primerjajte na strani Cenik.",
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
  { q: "Ali cene vključujejo DDV?", a: "Ne. Vse prikazane cene so v evrih (EUR), brez DDV. To velja za naročniške pakete in pakete minut za Receptionist+." },
  {
    q: "Koliko dejansko plačam pri letnem obračunu?",
    a: "Za Jedro Plus plačate 142,80 € za celo leto (preračunano 11,90 € na mesec), za Jedro Pro pa 298,80 € za celo leto (preračunano 24,90 € na mesec). Mesečna cena pri letnem obračunu je primerjava stroška, ne mesečno plačilo. V primerjavi z dvanajstimi mesečnimi plačili prihranite 36 € pri Plus oziroma 60 € pri Pro.",
  },
  {
    q: "Kaj je vključeno v Free in kdaj izberem plačljivi paket?",
    a: "Free vključuje koledar, termine in stranke, storitve in osebje brez omejitev, enega uporabnika aplikacije, uvoz strank iz Excela ter enkratni preizkus SMS in e-mail opomnikov. Za spletno naročanje, analitiko in redne personalizirane opomnike izberite Jedro Plus ali Pro.",
  },
  {
    q: "Kakšne so vključene količine SMS in e-mail sporočil?",
    a: "Jedro Plus vključuje 500 e-mail sporočil na mesec; SMS pakete dokupite od 4 € za 50 SMS. Jedro Pro vključuje 2.000 e-mail sporočil in 250 SMS na mesec. Za Enterprise se količine dogovorijo posebej. Minute za telefonske klice Receptionist+ so ločene od teh količin.",
  },
  {
    q: "Ali lahko Jedro+ preizkusim brezplačno?",
    a: "Da. Začnete lahko brezplačno in brez kreditne kartice ter nadgradite, ko ste pripravljeni. V 15 minutah vam lahko Jedro+ tudi predstavimo v praksi.",
  },
  {
    q: "Koliko stanejo paketi?",
    a: "Free je brezplačen za vedno, Jedro Plus stane 14,90 € na mesec, Jedro Pro 29,90 € na mesec (ob letnem plačilu 11,90 € oziroma 24,90 € na mesec), paket Enterprise pa je po dogovoru. Vsi plačljivi paketi vključujejo baze podatkov, koledar terminov, spletno naročanje in analitiko.",
  },
  {
    q: "Kakšna je razlika med paketoma Plus in Pro?",
    a: "Jedro Plus vključuje koledar, baze in opomnike za urejen pregled. Jedro Pro doda obveščanje izgubljenih strank, SMS opomnike in napredne komunikacijske funkcije za večjo zasedenost.",
  },
  {
    q: "Ali sem vezan na pogodbo in kako prekličem naročnino?",
    a: "Izberete lahko mesečni ali letni obračun. Letni znesek se plača za celo leto, prikazana mesečna cena pa je njegov mesečni preračun. Naročnino lahko prekličete v aplikaciji v skladu s pogoji uporabe.",
  },
];

const receptionistPricingFaq: FaqItem = {
  q: "Ali je Receptionist+ vključen v naročnino?",
  a: receptionistPricingAnswer,
};

homeFaq.push(receptionistPricingFaq);
cenikFaq.push(receptionistPricingFaq);

cenikFaq.push(...receptionistUsageFaq);

const europeanAvailabilityFaq: FaqItem[] = [
  { q: "Ali lahko Jedro+ uporabljamo zunaj Slovenije?", a: "Da. Jedro+ je na voljo storitvenim podjetjem po Evropski uniji. Uvedbo uskladimo z vašimi storitvami, ekipo in načinom dela. Davčna blagajna s FURS potrjevanjem računov je ločen modul za Slovenijo." },
  { q: "Ali lahko Jedro+ prilagodite dodatnemu jeziku?", a: "Da, dodatne jezikovne prilagoditve so možne po dogovoru. Spletna stran je trenutno v slovenščini, angleščini, italijanščini in nemščini, aplikacija pa v slovenščini in angleščini. Pred uvedbo uskladimo želeni jezik in obseg prilagoditve na info@jedroplus.com." },
];
homeFaq.push(...europeanAvailabilityFaq);
cenikFaq.push(...europeanAvailabilityFaq);
