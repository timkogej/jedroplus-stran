import type { Metadata } from "next";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";

export const metadata: Metadata = {
  title: "Pogoji uporabe | Jedro+",
  description:
    "Splošni pogoji uporabe storitve Jedro+ — rezervacijskega sistema za storitvena podjetja.",
  robots: { index: true, follow: true },
};

export default function PogojiUporabe() {
  return (
    <>
      <Nav variant="plain" active="/pogoji-uporabe" />

      {/* HERO */}
      <section className="vhero" style={{ minHeight: "46vh" }}>
        <div className="wrap vhero__in" style={{ paddingBlock: "clamp(124px,17vh,160px) clamp(40px,6vh,72px)" }}>
          <p className="vhero__eyebrow">Pravne informacije</p>
          <hr className="vhero__rule" />
          <h1 className="vhero__h">Pogoji uporabe</h1>
        </div>
      </section>

      {/* VSEBINA */}
      <section className="section">
        <div className="wrap">
          <div className="legal">
            <p className="legal__updated">Zadnja posodobitev: 24. 6. 2026</p>

            <h2>1. Splošno</h2>
            <p>
              Ti splošni pogoji uporabe (v nadaljevanju »Pogoji«) urejajo uporabo
              spletne aplikacije in storitve Jedro+ (v nadaljevanju »Storitev«),
              ki jo zagotavlja ponudnik. Z registracijo, naročilom ali uporabo
              Storitve uporabnik potrjuje, da je Pogoje prebral, jih razumel in se
              z njimi strinja. Če se s Pogoji ne strinjate, Storitve ne uporabljajte.
            </p>

            <h2>2. Opis storitve</h2>
            <p>
              Jedro+ je programska oprema kot storitev (SaaS), namenjena
              storitvenim podjetjem za upravljanje terminov, baze strank,
              opomnikov, spletnega naročanja in povezane komunikacije. Ponudnik si
              pridržuje pravico, da funkcionalnosti Storitve nadgrajuje, spreminja
              ali ukinja zaradi razvoja, vzdrževanja ali zakonskih zahtev.
            </p>

            <h2>3. Uporabniški račun</h2>
            <p>
              Za uporabo Storitve je potrebna registracija uporabniškega računa.
              Uporabnik je dolžan ob registraciji posredovati točne in popolne
              podatke ter jih sproti posodabljati. Uporabnik je odgovoren za
              varovanje svojih prijavnih podatkov in za vse aktivnosti, izvedene
              prek njegovega računa. O morebitni nepooblaščeni uporabi računa mora
              nemudoma obvestiti ponudnika.
            </p>

            <h2>4. Naročnina in plačila</h2>
            <p>
              Storitev je na voljo v različnih naročniških paketih, kot so
              opredeljeni v ceniku na spletni strani. Naročnina se obračunava
              vnaprej za izbrano obdobje. Cene so navedene v evrih (EUR). Ponudnik
              si pridržuje pravico do spremembe cen, o čemer uporabnika pravočasno
              obvesti. Spremenjene cene veljajo od naslednjega obračunskega obdobja.
            </p>

            <h2>5. Trajanje in odpoved</h2>
            <p>
              Naročniško razmerje je sklenjeno za izbrano obdobje in se lahko
              samodejno podaljšuje, razen če uporabnik naročnino prekliče.
              Uporabnik lahko naročnino prekliče kadarkoli; preklic začne veljati
              ob koncu tekočega obračunskega obdobja. Ponudnik lahko uporabniku
              omeji ali ukine dostop do Storitve v primeru kršitve teh Pogojev.
            </p>

            <h2>6. Obveznosti uporabnika</h2>
            <p>Uporabnik se zavezuje, da Storitve ne bo uporabljal za:</p>
            <ul>
              <li>nezakonite namene ali v nasprotju z veljavno zakonodajo;</li>
              <li>poseganje v varnost, celovitost ali delovanje Storitve;</li>
              <li>
                nepooblaščen dostop do podatkov drugih uporabnikov ali tretjih
                oseb;
              </li>
              <li>
                pošiljanje neželenih sporočil (spam) ali vsebin, ki kršijo pravice
                tretjih oseb.
              </li>
            </ul>
            <p>
              Uporabnik je sam odgovoren za zakonitost obdelave podatkov svojih
              strank, ki jih vnaša v Storitev, in za pridobitev morebitnih
              potrebnih privolitev.
            </p>

            <h2>7. Razpoložljivost in vzdrževanje</h2>
            <p>
              Ponudnik si prizadeva za čim višjo razpoložljivost Storitve, vendar
              ne jamči neprekinjenega delovanja. Storitev je lahko začasno
              nedostopna zaradi vzdrževanja, nadgradenj ali okoliščin izven
              razumnega nadzora ponudnika. O načrtovanih vzdrževalnih delih
              ponudnik uporabnike po možnosti vnaprej obvesti.
            </p>

            <h2>8. Omejitev odgovornosti</h2>
            <p>
              Storitev je zagotovljena »kakršna je«. Ponudnik v največjem obsegu,
              ki ga dopušča veljavna zakonodaja, ne odgovarja za posredno škodo,
              izgubo dobička, izgubo podatkov ali poslovne motnje, ki bi nastale
              zaradi uporabe ali nezmožnosti uporabe Storitve. Uporabnik je
              odgovoren za redno varnostno kopiranje lastnih podatkov, kjer je to
              smiselno.
            </p>

            <h2>9. Intelektualna lastnina</h2>
            <p>
              Vse pravice intelektualne lastnine na Storitvi, vključno z
              izvorno kodo, oblikovanjem, blagovno znamko in vsebino, pripadajo
              ponudniku. Uporabnik z naročnino pridobi neizključno, neprenosljivo
              pravico do uporabe Storitve v okviru teh Pogojev. Podatki, ki jih
              uporabnik vnese v Storitev, ostanejo njegova last.
            </p>

            <h2>10. Varstvo osebnih podatkov</h2>
            <p>
              Obdelava osebnih podatkov v okviru Storitve je urejena v{" "}
              <a href="/zasebnost">Politiki zasebnosti</a>, ki je sestavni del teh
              Pogojev.
            </p>

            <h2>11. Spremembe pogojev</h2>
            <p>
              Ponudnik lahko te Pogoje občasno spremeni. O bistvenih spremembah
              uporabnika obvesti na primeren način. Nadaljnja uporaba Storitve po
              uveljavitvi sprememb pomeni strinjanje s spremenjenimi Pogoji.
            </p>

            <h2>12. Pristojnost in pravo</h2>
            <p>
              Za ta razmerja se uporablja pravo Republike Slovenije. Morebitne
              spore stranki rešujeta sporazumno; če to ni mogoče, je za reševanje
              pristojno stvarno pristojno sodišče v Republiki Sloveniji.
            </p>

            <h2>13. Kontakt</h2>
            <p>
              Za vprašanja v zvezi s temi Pogoji nas kontaktirajte na{" "}
              <a href="mailto:info@jedroplus.com">info@jedroplus.com</a>.
            </p>

            <div className="legal__note">
              <p>
                <strong>Opomba:</strong> To je predloga splošnih pogojev uporabe
                in ni pravni nasvet. Pred objavo v produkciji naj vsebino pregleda
                in potrdi pravnik oz. računovodja, da bo skladna z dejanskim
                poslovnim modelom, davčno obravnavo in veljavno zakonodajo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
