// Shared by the product page, the pricing page and structured data.
export const RECEPTIONIST_PATH = "/funkcije/receptionist-plus";
export const RECEPTIONIST_APP_URL = "https://app.jedroplus.com/receptionist-plus";
export const RECEPTIONIST_TRIAL_CREDITS = 30;
export const RECEPTIONIST_CREDITS_PER_MINUTE = 1;
export const RECEPTIONIST_GREETING = "Salon Luna, dober dan! Sem digitalna asistentka salona. Kako vam lahko pomagam?";

export const receptionistPacks = [
  { name: "Zagon", credits: 100, price: 15, description: "Za prve klice in manjši obseg uporabe." },
  { name: "Standard", credits: 300, price: 39, description: "Za podjetja, kjer telefon zvoni vsak dan." },
  { name: "Profi", credits: 750, price: 89, description: "Za več pogovorov in večjo ekipo." },
];

export function receptionistMinuteRate(pack: { price: number; credits: number }) {
  return new Intl.NumberFormat("sl-SI", { minimumFractionDigits: 3, maximumFractionDigits: 3 }).format(pack.price / pack.credits);
}

export const receptionistPricingAnswer = `Izbirate lahko med paketi minut za klice. ${receptionistPacks.map((pack) => `Paket ${pack.name} vključuje ${pack.credits} minut za ${pack.price} €`).join(". ")}. Ob prvi aktivaciji prejmete ${RECEPTIONIST_TRIAL_CREDITS} brezplačnih minut za preizkus. Minute za klice se kupujejo ločeno od naročnine za Jedro+. Cene so brez DDV.`;

export const receptionistUsageFaq = [
  { q: "Ali minute Receptionist+ potečejo?", a: "Ne. Kupljene minute za Receptionist+ ne potečejo. Na računu ostanejo za prihodnje klice, zato jih lahko porabite glede na potrebe svojega podjetja." },
  { q: "Kako se obračuna klic, krajši od ene minute?", a: "Poraba se obračuna sorazmerno s trajanjem pogovora. Na primer: 30 sekund pogovora porabi 0,5 minute iz paketa, 90 sekund pa 1,5 minute. Porabo lahko spremljate v aplikaciji Jedro+." },
  { q: "Ali podjetje dobi svojo telefonsko številko?", a: "Da. Vsako podjetje dobi svojo telefonsko številko za Receptionist+. Za pripravo telefonije in preverjanje nastavitev vaše številke vam pomaga naša ekipa na info@jedroplus.com." },
];

export const receptionistFaq = [
  { q: "Kaj je Receptionist+?", a: "Receptionist+ je AI recepcionistka v sistemu Jedro+, ki sprejme klic in se pogovori v jeziku stranke. Rezervira, prestavi ali odpove termin, odgovarja na vprašanja, pošlje opomnik ter zabeleži dogovor v sistemu. Namenjena je storitvenim podjetjem, ki želijo zmanjšati prekinitve med delom in urediti telefonsko naročanje." },
  { q: "V katerem jeziku se pogovarja?", a: "Receptionist+ se pogovarja v jeziku stranke. Tako se lahko vsaka stranka sporazumeva v jeziku, ki ga razume, ter lažje uredi termin ali dobi odgovor na svoje vprašanje." },
  { q: "Koliko stane minuta klica?", a: receptionistPricingAnswer },
  { q: "Ali kupim minute ali naročnino za Receptionist+?", a: "Paketi 100, 300 in 750 minut so enkratni nakupi minut za klice, ločeni od naročnine za Jedro+. Izberete paket glede na obseg pogovorov in po potrebi dokupite dodatne minute. Za aktivacijo potrebujete račun Jedro+." },
  { q: "Ali se termin samodejno zapiše v Jedro+?", a: "Da. Receptionist+ je povezan s koledarjem Jedro+, zato lahko termin, dogovorjen na klicu, ustvari neposredno v sistemu. V klicnem dnevniku je na voljo tudi povezava do ustvarjenega termina." },
  { q: "Ali lahko tudi prestavi ali odpove termin?", a: "Da. Receptionist+ lahko na željo stranke rezervira nov termin, prestavi obstoječo rezervacijo na drug prost termin ali jo odpove. Dogovorjeno spremembo zabeleži v koledarju Jedro+." },
  { q: "Ali lahko pošlje opomnik?", a: "Da. Receptionist+ lahko stranki pošlje opomnik za dogovorjeni termin. Termini, spremembe in komunikacija ostanejo povezani v Jedro+." },
  { q: "Ali lahko pregledam pogovor in porabo?", a: "Da. Klicni dnevnik prikazuje čas, trajanje, porabljene minute in izid klica. Prikazan je tudi zapis pogovora, kadar je na voljo, ter povezava do ustvarjenega termina." },
  { q: "Ali lahko AI recepcionistko izklopim?", a: "Da. Receptionist+ lahko v nastavitvah vklopite ali izklopite. Tam uredite tudi pozdravno besedilo in prag za opozorilo ob nizkem številu preostalih minut." },
  { q: "Kako začnem in kako povežem telefonsko številko?", a: "V računu Jedro+ odprite Receptionist+ in ga aktivirajte. Ob prvi aktivaciji prejmete 30 brezplačnih minut za preizkus. Vsako podjetje dobi svojo telefonsko številko; za pripravo telefonije in preverjanje nastavitev nam pišite na info@jedroplus.com." },
  { q: "Kako uredimo Receptionist+ za podjetje v drugi državi EU?", a: "Jedro+ je na voljo podjetjem po EU. Za Receptionist+ ob aktivaciji preverimo razpoložljivost telefonske številke in nastavitve telefonije za državo vašega podjetja. Želeno državo in jezik nam sporočite na info@jedroplus.com." },
  ...receptionistUsageFaq,
];
