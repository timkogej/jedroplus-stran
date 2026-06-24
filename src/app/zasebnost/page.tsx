import type { Metadata } from "next";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";

export const metadata: Metadata = {
  title: "Politika zasebnosti | Jedro+",
  description:
    "Politika zasebnosti Jedro+ — kako zbiramo, obdelujemo in varujemo osebne podatke v skladu s Splošno uredbo o varstvu podatkov (GDPR).",
  robots: { index: true, follow: true },
};

export default function Zasebnost() {
  return (
    <>
      <Nav variant="plain" active="/zasebnost" />

      {/* HERO */}
      <section className="vhero" style={{ minHeight: "46vh" }}>
        <div className="wrap vhero__in" style={{ paddingBlock: "clamp(124px,17vh,160px) clamp(40px,6vh,72px)" }}>
          <p className="vhero__eyebrow">Pravne informacije</p>
          <hr className="vhero__rule" />
          <h1 className="vhero__h">Politika zasebnosti</h1>
        </div>
      </section>

      {/* VSEBINA */}
      <section className="section">
        <div className="wrap">
          <div className="legal">
            <p className="legal__updated">Zadnja posodobitev: 24. 6. 2026</p>

            <p>
              Vaša zasebnost nam je pomembna. V tej politiki zasebnosti pojasnjujemo,
              katere osebne podatke zbiramo, za kakšne namene jih obdelujemo, na
              kateri pravni podlagi ter kakšne pravice imate v zvezi z njimi.
              Obdelava poteka v skladu s Splošno uredbo (EU) 2016/679 o varstvu
              podatkov (GDPR) in Zakonom o varstvu osebnih podatkov (ZVOP-2).
            </p>

            <h2>1. Upravljavec osebnih podatkov</h2>
            <p>
              Upravljavec osebnih podatkov je:
            </p>
            <ul>
              <li>
                <strong>Sonja Žužek s.p.</strong>
              </li>
              <li>Davčna številka: 97477621</li>
              <li>
                E-pošta:{" "}
                <a href="mailto:info@jedroplus.com">info@jedroplus.com</a>
              </li>
            </ul>
            <p>
              Za vsa vprašanja v zvezi z obdelavo osebnih podatkov in
              uveljavljanjem svojih pravic nas lahko kontaktirate na zgornji
              elektronski naslov.
            </p>

            <h2>2. Katere podatke zbiramo</h2>
            <p>Glede na vašo interakcijo z nami obdelujemo naslednje kategorije podatkov:</p>
            <ul>
              <li>
                <strong>Podatki ob povpraševanju / kontaktu:</strong> ime,
                e-poštni naslov, telefonska številka, ime podjetja in vsebina
                sporočila.
              </li>
              <li>
                <strong>Podatki uporabnikov storitve:</strong> podatki računa,
                prijavni podatki in nastavitve.
              </li>
              <li>
                <strong>Podatki, ki jih v storitev vnese uporabnik:</strong>
                podatki o njegovih strankah in terminih (v tem primeru nastopamo
                kot obdelovalec — glej 7. točko).
              </li>
              <li>
                <strong>Tehnični podatki:</strong> IP-naslov, vrsta naprave in
                brskalnika ter podatki o uporabi, zbrani prek piškotkov in
                podobnih tehnologij.
              </li>
            </ul>

            <h2>3. Nameni in pravne podlage obdelave</h2>
            <ul>
              <li>
                <strong>Odgovor na povpraševanja in komunikacija</strong> — pravna
                podlaga: izvajanje ukrepov pred sklenitvijo pogodbe oz. zakoniti
                interes (čl. 6(1)(b) in (f) GDPR).
              </li>
              <li>
                <strong>Zagotavljanje in upravljanje storitve</strong> — pravna
                podlaga: izvajanje pogodbe (čl. 6(1)(b) GDPR).
              </li>
              <li>
                <strong>Izpolnjevanje zakonskih obveznosti</strong> (npr.
                računovodski in davčni predpisi) — pravna podlaga: zakonska
                obveznost (čl. 6(1)(c) GDPR).
              </li>
              <li>
                <strong>Izboljševanje storitve in analitika</strong> — pravna
                podlaga: zakoniti interes oz. privolitev za neobvezne piškotke
                (čl. 6(1)(f) oz. 6(1)(a) GDPR).
              </li>
            </ul>

            <h2>4. Rok hrambe</h2>
            <p>
              Osebne podatke hranimo le toliko časa, kolikor je potrebno za
              dosego namena, za katerega so bili zbrani, oziroma do izteka
              zakonsko predpisanih rokov hrambe (npr. računovodska dokumentacija).
              Po prenehanju namena obdelave podatke izbrišemo ali anonimiziramo.
            </p>

            <h2>5. Posredovanje podatkov tretjim osebam</h2>
            <p>
              Osebnih podatkov ne prodajamo. Podatke lahko posredujemo zaupanja
              vrednim obdelovalcem, ki nam pomagajo pri izvajanju storitve (npr.
              ponudniki gostovanja, e-poštne in SMS infrastrukture, orodja za
              avtomatizacijo). Z vsemi obdelovalci imamo sklenjene ustrezne
              pogodbe o obdelavi podatkov. V primeru prenosa podatkov izven EU/EGP
              zagotovimo ustrezne zaščitne ukrepe v skladu z GDPR.
            </p>

            <h2>6. Piškotki</h2>
            <p>
              Spletna stran uporablja piškotke za nujno delovanje ter, ob vaši
              privolitvi, za analitiko in izboljšanje uporabniške izkušnje.
              Nastavitve piškotkov lahko kadarkoli spremenite v svojem brskalniku.
            </p>

            <h2>7. Obdelava podatkov strank uporabnikov</h2>
            <p>
              Kadar uporabnik v storitev Jedro+ vnaša osebne podatke svojih
              strank, je ta uporabnik upravljavec teh podatkov, mi pa nastopamo
              kot obdelovalec. Te podatke obdelujemo izključno po navodilih
              uporabnika in za namen zagotavljanja storitve, kar urejamo s pogodbo
              o obdelavi osebnih podatkov.
            </p>

            <h2>8. Vaše pravice</h2>
            <p>V skladu z GDPR imate naslednje pravice:</p>
            <ul>
              <li>pravico do dostopa do svojih osebnih podatkov;</li>
              <li>pravico do popravka netočnih podatkov;</li>
              <li>pravico do izbrisa (»pravico do pozabe«);</li>
              <li>pravico do omejitve obdelave;</li>
              <li>pravico do prenosljivosti podatkov;</li>
              <li>
                pravico do ugovora obdelavi, ki temelji na zakonitem interesu;
              </li>
              <li>
                pravico do preklica privolitve, kadar obdelava temelji na
                privolitvi.
              </li>
            </ul>
            <p>
              Za uveljavljanje pravic nam pišite na{" "}
              <a href="mailto:info@jedroplus.com">info@jedroplus.com</a>. Če menite,
              da obdelava vaših podatkov krši predpise, imate pravico vložiti
              pritožbo pri nadzornem organu — Informacijskem pooblaščencu
              Republike Slovenije (
              <a href="https://www.ip-rs.si" target="_blank" rel="noopener noreferrer">
                www.ip-rs.si
              </a>
              ).
            </p>

            <h2>9. Varnost podatkov</h2>
            <p>
              Izvajamo ustrezne tehnične in organizacijske ukrepe za zaščito
              osebnih podatkov pred nepooblaščenim dostopom, izgubo, spremembo ali
              razkritjem.
            </p>

            <h2>10. Spremembe politike zasebnosti</h2>
            <p>
              To politiko zasebnosti lahko občasno posodobimo. Veljavna različica
              je vedno objavljena na tej strani z navedbo datuma zadnje
              posodobitve.
            </p>

            <div className="legal__note">
              <p>
                <strong>Opomba:</strong> To je predloga politike zasebnosti in ni
                pravni nasvet. Pred objavo v produkciji naj vsebino pregleda in
                potrdi pravnik oz. pooblaščena oseba za varstvo podatkov — zlasti
                seznam dejanskih obdelovalcev, roke hrambe in opis piškotkov, da bo
                politika v celoti skladna z dejanskim stanjem in GDPR.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
