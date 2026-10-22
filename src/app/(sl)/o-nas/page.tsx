import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { RevealOnScroll } from "@/components/redesign/RevealOnScroll";
import { SubpageHero } from "@/components/redesign/SubpageHero";

export const metadata: Metadata = pageMetadata("/o-nas", {
  title: "O nas | Jedro+ — narejeno v Sloveniji za storitvena podjetja",
  description:
    "Jedro+ je slovenska aplikacija za storitvena podjetja. Spoznajte našo zgodbo, poslanstvo in zakaj gradimo orodja za salone, klinike, fitnese in druge storitvene dejavnosti.",
  openGraph: {
    title: "O nas | Jedro+ — narejeno v Sloveniji za storitvena podjetja",
    description:
      "Jedro+ je slovenska aplikacija za storitvena podjetja. Spoznajte našo zgodbo, poslanstvo in zakaj gradimo orodja za salone, klinike, fitnese in druge storitvene dejavnosti.",
  },
});

export default function ONas() {
  return (
    <>
      <Nav variant="light" active="/o-nas" />
      <main id="main-content">

      <SubpageHero
        eyebrow="O nas"
        title={
          <>
            Narejeno v Sloveniji,{" "}
            <span className="grad-text">za storitvena podjetja.</span>
          </>
        }
        description={
          <>
            Jedro+ povezuje termine, stranke, opomnike in spletno naročanje v eno
            jedro — da se lahko posvetite tistemu, kar znate najbolje: svojim
            strankam.
          </>
        }
      />

      {/* ZGODBA */}
      <section className="section subpage-first">
        <div className="wrap split">
          <div className="split__body reveal">
            <span className="eyebrow">Naša zgodba</span>
            <h2 style={{ marginTop: 18 }}>
              Zrasli smo iz <span className="grad-text">vsakdanjih izzivov</span>{" "}
              storitvenih podjetij
            </h2>
            <p className="lead">
              Vsak salon, klinika ali studio pozna isti vrtiljak: klici med
              storitvijo, ročno vpisovanje terminov, prazni termini zaradi
              pozabljenih obiskov in podatki o strankah, raztreseni po več
              orodjih.
            </p>
            <p className="lead" style={{ marginTop: 18 }}>
              Jedro+ smo zasnovali, da ta vrtiljak ustavimo. Eno mesto, kjer so
              termini, baza strank, opomniki in spletno naročanje povezani — brez
              podvajanja dela in brez preklapljanja med aplikacijami. Gradimo ga v
              Sloveniji, v tesnem stiku s podjetji, ki ga vsak dan uporabljajo.
            </p>
          </div>
          <div className="split__media reveal" data-d="1">
            <figure style={{ margin: 0 }}><div className="ph about-team-photo" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/jedro-stran-team.webp"
                alt="Ilustrativni prikaz sodelovanja pri načrtovanju"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div><figcaption className="illustration-caption">Ilustrativni prikaz.</figcaption></figure>
          </div>
        </div>
      </section>

      {/* POSLANSTVO */}
      <section className="section section--soft">
        <div className="wrap">
          <div className="section-head center reveal" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow eyebrow--plain" style={{ justifyContent: "center" }}>
              Poslanstvo
            </span>
            <h2 style={{ marginTop: 18 }}>
              Storitvenim podjetjem damo{" "}
              <span className="grad-text">več časa za stranke</span>
            </h2>
            <p className="lead" style={{ marginInline: "auto" }}>
              Verjamemo, da tehnologija za majhna in srednja podjetja ne sme biti
              draga, zapletena ali tuja. Zato gradimo orodje, ki je preprosto,
              dostopno in v slovenščini — in ki dejansko zmanjša administracijo
              namesto da bi jo dodajal.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card reveal">
              <h3>Preprostost</h3>
              <p>
                Postavitev v dnevih, ne tednih. Vmesnik, ki ga razume vsa ekipa,
                brez tečajev in priročnikov.
              </p>
            </div>
            <div className="about-card reveal" data-d="1">
              <h3>Domače in dostopno</h3>
              <p>
                Razvito v Sloveniji, v slovenščini in po cenah, ki so smiselne za
                manjša storitvena podjetja.
              </p>
            </div>
            <div className="about-card reveal" data-d="2">
              <h3>Pametno z AI</h3>
              <p>
                Opomniki in obveščanje, ki zmanjšajo odpovedi in vrnejo izgubljene
                stranke — samodejno, v ozadju.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ZA KOGA */}
      <section className="section">
        <div className="wrap split split--rev">
          <div className="split__body reveal">
            <span className="eyebrow">Za koga</span>
            <h2 style={{ marginTop: 18 }}>
              Za <span className="grad-text">storitvena podjetja</span>, ki delajo
              s termini
            </h2>
            <p className="lead">
              Jedro+ je doma povsod, kjer se dan vrti okoli rezervacij in odnosa s
              strankami — frizerski in kozmetični saloni, zdravstvene in
              estetske klinike, fitnesi in studii, terapevti, serviserji in druge
              storitvene dejavnosti.
            </p>
            <p className="lead" style={{ marginTop: 18 }}>
              Ne glede na panogo je obljuba enaka: manj ročnega dela, manj praznih
              terminov in jasen pregled nad poslovanjem.
            </p>
          </div>
          <div className="split__media reveal" data-d="1">
            <figure style={{ margin: 0 }}><div className="ph about-closeup-photo" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/jedro-stran-closeup.webp"
                alt="Ilustrativni prikaz dela s termini"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div><figcaption className="illustration-caption">Ilustrativni prikaz.</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="section" id="jeziki" aria-labelledby="language-scope-heading">
        <div className="wrap">
          <div className="section-head reveal"><span className="eyebrow">Jeziki in uporaba</span><h2 id="language-scope-heading" style={{ marginTop: 18 }}>Jasen pregled <span className="grad-text">pred začetkom.</span></h2><p className="lead">Jezik spletne strani, aplikacije in telefonskega pogovora predstavljajo različne dele izkušnje Jedro+.</p></div>
          <dl className="language-scope">
            <div><dt>Podjetja v Evropski uniji</dt><dd>Jedro+ je na voljo storitvenim podjetjem po EU. Uvedbo prilagodimo storitvam, ekipi in načinu dela vašega podjetja.</dd></div>
            <div><dt>Prilagoditev dodatnim jezikom</dt><dd>Potrebujete drug jezik? Po dogovoru lahko pripravimo dodatno jezikovno prilagoditev. Obseg in izvedbo uskladimo pred uvedbo.</dd></div>
            <div><dt>Spletna stran</dt><dd>Slovenščina, angleščina, italijanščina in nemščina.</dd></div>
            <div><dt>Aplikacija Jedro+</dt><dd>Uporabniški vmesnik aplikacije je na voljo v slovenščini in angleščini.</dd></div>
            <div><dt>Pogovor Receptionist+</dt><dd>AI recepcionistka se pogovarja v jeziku stranke. Nastavitve telefonije za vaše podjetje preverimo ob aktivaciji.</dd></div>
            <div><dt>Davčna blagajna</dt><dd>Ločen modul za FURS potrjevanje računov v Sloveniji.</dd></div>
          </dl>
          <p className="language-scope__contact">Za vprašanja o uvedbi in podpori pišite na <a href="mailto:info@jedroplus.com">info@jedroplus.com</a>.</p>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="section section--soft" id="kontakt">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Kontakt</span>
            <h2 style={{ marginTop: 18 }}>
              Pogovorimo se o vašem <span className="grad-text">poslovanju</span>
            </h2>
            <p className="lead">
              Imate vprašanje ali bi radi videli Jedro+ v praksi? Pišite ali
              pokličite — odgovorimo hitro.
            </p>
          </div>
          <div className="about-cards" style={{ marginTop: 40 }}>
            <div className="about-card reveal">
              <h3>E-pošta</h3>
              <p>
                <a href="mailto:info@jedroplus.com">info@jedroplus.com</a>
              </p>
            </div>
            <div className="about-card reveal" data-d="1">
              <h3>Telefon</h3>
              <p>
                <a href="tel:068663410">068 663 410</a>
              </p>
            </div>
            <div className="about-card reveal" data-d="2">
              <h3>Kje smo</h3>
              <p>Slovenija 🇸🇮 — razvito doma, podpora v slovenščini.</p>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
