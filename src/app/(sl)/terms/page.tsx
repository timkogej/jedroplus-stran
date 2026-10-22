import { Navigation, Footer } from "@/components/landing";

export const metadata = {
  title: "Pogoji uporabe | Jedro+",
  description: "Pogoji uporabe platforme Jedro+",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary bg-clip-text text-transparent">
              Pogoji uporabe
            </span>
          </h1>
          <p className="text-gray-500 text-base">Zadnja posodobitev: April 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Splošne določbe</h2>
            <p className="text-gray-600 mb-3">
              Ti pogoji uporabe urejajo razmerje med ponudnikom storitve in uporabnikom platforme Jedro+.
              Storitev razvija in upravlja:
            </p>
            <p className="text-gray-800 font-semibold">Tim Kogej s.p. (Jedro+)</p>
            <p className="text-gray-600 mb-3">E-pošta: podpora@jedroplus.com</p>
            <p className="text-gray-600">
              Jedro+ je platforma za upravljanje terminov, strank in komunikacije, namenjena storitvenim
              podjetjem (saloni, klinike, fitnes centri in podobni ponudniki storitev). Z uporabo platforme
              potrjujete, da ste prebrali, razumeli in se strinjate s temi pogoji.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uporaba storitev</h2>
            <p className="text-gray-600 mb-3">
              Za dostop do platforme Jedro+ je potrebna registracija. Z registracijo se zavezujete, da boste:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Navedli točne in resnične podatke pri registraciji</li>
              <li>Varovali prijavne podatke in geslo</li>
              <li>Nemudoma obvestili Jedro+, če sumite na nepooblaščen dostop do vašega računa</li>
              <li>Platformo uporabljali le v zakonite namene in v skladu s temi pogoji</li>
            </ul>
            <p className="text-gray-600 mb-3">
              Vsak registriran uporabnik je odgovoren za vse aktivnosti, ki se zgodijo prek njegovega računa.
              Jedro+ si pridržuje pravico do začasne ali trajne prekinitve dostopa v primeru kršitve teh pogojev.
            </p>
            <p className="text-gray-600">
              Platforma je namenjena poslovnim subjektom. Osebe, mlajše od 18 let, ne smejo ustvariti računa
              brez izrecnega soglasja zakonitega zastopnika.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Rezervacije terminov</h2>
            <p className="text-gray-600 mb-3">
              Platforma Jedro+ omogoča spletno rezervacijo terminov za storitve ponudnika. Veljavna pravila:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Rezervacija je potrjena z e-poštnim ali SMS-obvestilom</li>
              <li>Stranka je dolžna zagotoviti točnost navedenih podatkov pri rezervaciji</li>
              <li>
                Odpoved ali sprememba termina mora biti sporočena v roku, ki ga določi posamezni ponudnik
                storitev (privzeto: vsaj 24 ur vnaprej)
              </li>
              <li>Ponudnik storitve ima pravico odpovedati termin v primeru višje sile ali izrednih okoliščin</li>
              <li>Jedro+ ni neposredno odgovoren za kakovost ali izvedbo rezervirane storitve</li>
            </ul>
            <p className="text-gray-600">
              Ponudniki storitev, ki delujejo prek platforme Jedro+, so dolžni spoštovati zakonodajo o
              varstvu potrošnikov in zagotoviti izvedbo storitev v dogovorjenem obsegu.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Plačila in naročnine</h2>
            <p className="text-gray-600 mb-3">
              Jedro+ ponuja različne naročniške pakete. Velja naslednje:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Cene naročnin so navedene na strani <span className="font-semibold text-gray-800">Cenik</span> in so v eurih (EUR) brez DDV</li>
              <li>Naročnina se obračunava mesečno ali letno, odvisno od izbranega paketa</li>
              <li>Plačilo se izvede ob sklenitvi naročnine in se samodejno obnovi ob koncu obračunskega obdobja</li>
              <li>Odpoved naročnine je možna kadarkoli; dostop ostane aktiven do konca plačanega obdobja</li>
              <li>
                Vračila plačil niso mogoča za že porabljeno obdobje, razen v primeru tehnične napake ali
                napačnega obračuna na strani Jedro+
              </li>
            </ul>
            <p className="text-gray-600">
              Jedro+ si pridržuje pravico do spremembe cen naročnin z obvestilom vsaj 30 dni vnaprej.
              Obstoječe naročnine ostanejo pri dosedanji ceni do izteka plačanega obdobja.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pravice intelektualne lastnine</h2>
            <p className="text-gray-600 mb-3">
              Vsa vsebina, programska koda, grafični elementi, logotipi, besedila in drugi materiali na
              platformi Jedro+ so izključna last podjetja Tim Kogej s.p. ali njegovih licencedajalcev.
            </p>
            <p className="text-gray-600 mb-3">Brez pisnega soglasja Jedro+ je prepovedano:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Kopiranje, reproduciranje ali distribucija vsebine platforme</li>
              <li>Ustvarjanje izpeljanih del ali del, ki temeljijo na platformi</li>
              <li>Obratno inženirstvo ali dekompilacija programske opreme</li>
              <li>Uporaba blagovnih znamk ali logotipov Jedro+ brez dovoljenja</li>
            </ul>
            <p className="text-gray-600">
              Vsebina, ki jo naložijo ali vnesejo uporabniki (npr. opisi storitev, slike), ostaja last
              uporabnika. Z nalaganjem na platformo pa uporabnik podeli Jedro+ neizključno licenco za
              prikaz te vsebine v okviru storitve.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Omejitev odgovornosti</h2>
            <p className="text-gray-600 mb-3">
              Jedro+ si prizadeva zagotoviti zanesljivo in neprekinjeno delovanje platforme, vendar ne jamči za:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Neprekinjeno ali brezhibno delovanje storitve</li>
              <li>Točnost ali popolnost informacij, objavljenih s strani ponudnikov storitev</li>
              <li>Škodo, nastalo zaradi nepooblaščenega dostopa do računa</li>
              <li>Izgubo podatkov v primeru tehnične napake (priporočamo redno varnostno kopiranje)</li>
            </ul>
            <p className="text-gray-600">
              Jedro+ ni odgovoren za posredno ali posledično škodo, ki izhaja iz uporabe ali nezmožnosti
              uporabe platforme. Odgovornost Jedro+ je v vsakem primeru omejena na znesek naročnine,
              plačane v zadnjih 3 mesecih.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Prekinitev uporabe</h2>
            <p className="text-gray-600 mb-3">
              Jedro+ si pridržuje pravico do takojšnje prekinitve dostopa do platforme brez predhodnega
              obvestila v primeru:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Kršitve teh pogojev uporabe</li>
              <li>Suma goljufivega ravnanja ali zlorabe platforme</li>
              <li>Neplačila naročnine po preteku roka</li>
              <li>Zahteve pristojnih organov</li>
            </ul>
            <p className="text-gray-600">
              Uporabnik lahko kadarkoli sam izbriše račun. Po izbrisu računa bodo osebni podatki izbrisani
              v skladu s Politiko zasebnosti, poslovni podatki (fakture, naročnine) pa se hranijo v
              skladu z zakonodajo o računovodstvu.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Spremembe pogojev</h2>
            <p className="text-gray-600 mb-3">
              Jedro+ si pridržuje pravico do spremembe teh pogojev uporabe. O večjih spremembah bomo
              uporabnike obvestili:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Po e-pošti na naslov, naveden ob registraciji</li>
              <li>Z obvestilom ob prijavi v platformo</li>
              <li>Z objavo na tej strani z navedbo datuma posodobitve</li>
            </ul>
            <p className="text-gray-600">
              Nadaljnja uporaba platforme po uveljavitvi sprememb pomeni strinjanje z novimi pogoji.
              Če se s spremembo ne strinjate, imate pravico odpovedati naročnino pred uveljavitvijo sprememb.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Veljavno pravo in reševanje sporov</h2>
            <p className="text-gray-600 mb-3">
              Ti pogoji se presojajo in razlagajo v skladu z zakonodajo Republike Slovenije. Za reševanje
              morebitnih sporov je pristojno sodišče v Republiki Sloveniji.
            </p>
            <p className="text-gray-600 mb-3">
              Pred formalnim postopkom reševanja sporov spodbujamo pogovor in iskanje sporazumne rešitve.
              Vsako reklamacijo ali pritožbo naslovite na:
            </p>
            <p className="text-gray-800 font-semibold">podpora@jedroplus.com</p>
            <p className="text-gray-600 mb-3">
              Potrudili se bomo odgovoriti v roku 5 delovnih dni.
            </p>
            <p className="text-gray-600">
              Potrošniki imajo možnost zunajsodnega reševanja sporov prek platforme EU za spletno
              reševanje sporov (ODR): <span className="font-semibold text-gray-800">ec.europa.eu/consumers/odr</span>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Kontakt</h2>
            <p className="text-gray-600 mb-3">
              Za vsa vprašanja v zvezi s temi pogoji uporabe nas kontaktirajte:
            </p>
            <p className="text-gray-800 font-semibold">Tim Kogej s.p. (Jedro+)</p>
            <p className="text-gray-600">E-pošta: <span className="font-semibold text-gray-800">podpora@jedroplus.com</span></p>
            <p className="text-gray-600">Slovenija</p>
          </section>

          <hr className="border-gray-200 my-10" />

          <section className="mb-10">
            <p className="text-gray-500 text-sm">
              S potrditvijo registracije ali nadaljevanjem uporabe platforme Jedro+ potrjujete, da ste
              prebrali in sprejeli te pogoje uporabe.
            </p>
          </section>

        </div>
      </section>

      <Footer />
    </main>
  );
}
