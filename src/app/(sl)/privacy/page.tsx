import { Navigation, Footer } from "@/components/landing";

export const metadata = {
  title: "Politika zasebnosti | Jedro+",
  description: "Politika zasebnosti platforme Jedro+",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary bg-clip-text text-transparent">
              Politika zasebnosti
            </span>
          </h1>
          <p className="text-gray-500 text-base">Zadnja posodobitev: Marec 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Kdo smo</h2>
            <p className="text-gray-600 mb-3">Upravljavec vaših osebnih podatkov je:</p>
            <p className="text-gray-800 font-semibold">Tim Kogej s.p. (Jedro+)</p>
            <p className="text-gray-600">E-pošta: privacy@jedroplus.com</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Katere podatke zbiramo</h2>
            <p className="text-gray-600 mb-3">Pri rezervaciji termina zbiramo naslednje podatke:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Ime in priimek</li>
              <li>E-poštni naslov</li>
              <li>Telefonska številka (opcijsko)</li>
              <li>Datum in čas želenega termina</li>
              <li>Izbrana storitev</li>
              <li>Morebitne opombe</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Zakaj zbiramo vaše podatke</h2>
            <p className="text-gray-600 mb-3">Vaše podatke uporabljamo za:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><span className="font-semibold text-gray-800">Izvedbo rezervacije</span> – obdelava in potrditev vašega termina</li>
              <li><span className="font-semibold text-gray-800">Komunikacijo</span> – pošiljanje potrditev, opomnikov in obvestil o terminu</li>
              <li><span className="font-semibold text-gray-800">Izboljšanje storitev</span> – analitika in optimizacija uporabniške izkušnje</li>
              <li><span className="font-semibold text-gray-800">Trženje</span> – pošiljanje promocij in novic (samo s vašim soglasjem)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pravna podlaga</h2>
            <p className="text-gray-600 mb-3">Vaše podatke obdelujemo na podlagi:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><span className="font-semibold text-gray-800">Pogodbenega razmerja</span> – za izvedbo rezervacije</li>
              <li><span className="font-semibold text-gray-800">Privolitve</span> – za trženjska sporočila</li>
              <li><span className="font-semibold text-gray-800">Zakonitega interesa</span> – za izboljšanje storitev</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Kdo ima dostop do podatkov</h2>
            <p className="text-gray-600 mb-3">Vaši podatki se hranijo in obdelujejo pri naslednjih ponudnikih:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><span className="font-semibold text-gray-800">Supabase</span> (EU strežniki) – hramba podatkov</li>
              <li><span className="font-semibold text-gray-800">Bulkgate / AWS SES</span> – pošiljanje e-pošte in SMS sporočil</li>
              <li><span className="font-semibold text-gray-800">n8n</span> – avtomatizacija procesov</li>
            </ul>
            <p className="text-gray-600 mt-3">Vsi ponudniki so zavezani k varovanju podatkov v skladu z GDPR.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Kako dolgo hranimo podatke</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><span className="font-semibold text-gray-800">Podatki o strankah:</span> 1 leto po zadnji aktivnosti</li>
              <li><span className="font-semibold text-gray-800">Podatki o terminih:</span> 1 leto po datumu termina</li>
              <li><span className="font-semibold text-gray-800">Trženjska soglasja:</span> do preklica</li>
            </ul>
            <p className="text-gray-600 mt-3">Po preteku tega obdobja se podatki samodejno izbrišejo.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Vaše pravice</h2>
            <p className="text-gray-600 mb-3">Imate pravico do:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><span className="font-semibold text-gray-800">Dostopa</span> – vpogled v vaše podatke</li>
              <li><span className="font-semibold text-gray-800">Popravka</span> – sprememba napačnih podatkov</li>
              <li><span className="font-semibold text-gray-800">Izbrisa</span> – brisanje vaših podatkov (&quot;pravica do pozabe&quot;)</li>
              <li><span className="font-semibold text-gray-800">Preklica soglasja</span> – kadarkoli lahko prekličete trženjsko soglasje</li>
              <li><span className="font-semibold text-gray-800">Prenosljivosti</span> – prenos podatkov k drugemu ponudniku</li>
              <li><span className="font-semibold text-gray-800">Ugovora</span> – ugovor obdelavi podatkov</li>
            </ul>
            <p className="text-gray-600 mt-3">Za uveljavljanje pravic nas kontaktirajte na: <span className="font-semibold text-gray-800">privacy@jedroplus.com</span></p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Varnost podatkov</h2>
            <p className="text-gray-600 mb-3">Vaši podatki so zaščiteni z:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Šifriranjem (SSL/TLS)</li>
              <li>Omejitvijo dostopa</li>
              <li>Rednimi varnostnimi pregledi</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Piškotki</h2>
            <p className="text-gray-600">Naša stran uporablja samo nujne piškotke za delovanje. Ne uporabljamo sledilnih piškotkov.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Spremembe politike</h2>
            <p className="text-gray-600">O spremembah politike zasebnosti vas bomo obvestili po e-pošti ali na spletni strani.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Pritožba</h2>
            <p className="text-gray-600 mb-3">Če menite, da vaše podatke obdelujemo nezakonito, lahko vložite pritožbo pri:</p>
            <p className="text-gray-800 font-semibold">Informacijski pooblaščenec RS</p>
            <p className="text-gray-600">Dunajska cesta 22, 1000 Ljubljana</p>
            <p className="text-gray-600">E-pošta: gp.ip@ip-rs.si</p>
            <p className="text-gray-600">Splet: www.ip-rs.si</p>
          </section>

          <hr className="border-gray-200 my-10" />

          <section className="mb-10">
            <p className="text-gray-600"><span className="font-semibold text-gray-800">Kontakt za vprašanja o zasebnosti:</span><br />privacy@jedroplus.com</p>
          </section>

        </div>
      </section>

      <Footer />
    </main>
  );
}
