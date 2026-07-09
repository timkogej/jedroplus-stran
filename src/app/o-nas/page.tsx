import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/redesign/Nav";
import { Footer } from "@/components/redesign/Footer";
import { RevealOnScroll } from "@/components/redesign/RevealOnScroll";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/redesign/SubpageHero";

export const metadata: Metadata = {
  title: "O nas | Jedro+ — narejeno v Sloveniji za storitvena podjetja",
  description:
    "Jedro+ je slovenska aplikacija za storitvena podjetja. Spoznajte našo zgodbo, poslanstvo in zakaj gradimo orodja za salone, klinike, fitnese in druge storitvene dejavnosti.",
  openGraph: {
    title: "O nas | Jedro+ — narejeno v Sloveniji za storitvena podjetja",
    description:
      "Jedro+ je slovenska aplikacija za storitvena podjetja. Spoznajte našo zgodbo, poslanstvo in zakaj gradimo orodja za salone, klinike, fitnese in druge storitvene dejavnosti.",
  },
};

export default function ONas() {
  return (
    <>
      <JsonLd schema={organizationSchema} />
      <Nav variant="light" active="/o-nas" />

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
            <div className="ph about-team-photo" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/jedro-stran-team.png"
                alt="Ekipa Jedro+"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
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
            <div className="ph about-closeup-photo" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/jedro-stran-closeup.png"
                alt="Podrobnost dela ekipe Jedro+"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
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

      <Footer />
      <RevealOnScroll />
    </>
  );
}
