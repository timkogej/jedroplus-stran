import { Navigation, Footer } from "@/components/landing";

const values = [
  {
    title: "Jasnost",
    description:
      "Uporabniška izkušnja je preprosta, brez skritih korakov in z jasnim pregledom.",
  },
  {
    title: "Zanesljivost",
    description:
      "Jedro+ je stabilna osnova za vsakodnevno delo s strankami in termini.",
  },
  {
    title: "Partnerstvo",
    description:
      "Ne prodajamo samo programske opreme – pomagamo izboljšati poslovanje.",
  },
  {
    title: "Napredek",
    description:
      "Vedno iščemo načine, kako storitve narediti hitrejše, pametnejše in bolj povezane.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            O nas
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Jedro+ je slovensko podjetje, ustvarjeno za storitvena podjetja, ki
            želijo več reda, manj administracije in boljšo komunikacijo s
            strankami.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-600">
          <p>
            Jedro+ obstaja, ker storitvena podjetja prepogosto izgubljajo čas na
            ročne opomnike, neusklajene koledarje in nepregledne evidence. To
            so naloge, ki jih lahko avtomatizacija reši hitro in zanesljivo.
          </p>
          <p>
            Naš cilj je, da ekipa dela manj administracije in več kakovostnih
            storitev. Zato gradimo sistem, ki poveže termine, stranke,
            personalizirane opomnike in AI pomočnike v eno jedro.
          </p>
          <p>
            Želimo postaviti nov standard na področju opomnikov in delovanja
            storitvenih podjetij. Verjamemo, da mora biti komunikacija s
            strankami personalizirana, pravočasna in profesionalna – brez
            dodatnega ročnega dela. S tem podjetjem pomagamo, da se osredotočijo
            na to, kar znajo najbolje: kakovostne storitve za svoje stranke.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-gradient-to-r from-primary to-secondary p-[1px]">
            <div className="bg-white rounded-3xl p-6 shadow-lg h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Misija</h2>
              <p className="text-gray-600">
                Pomagati storitvenim podjetjem avtomatizirati termine, opomnike in
                komunikacijo, da se lahko osredotočijo na kakovost storitev.
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-r from-primary to-secondary p-[1px]">
            <div className="bg-white rounded-3xl p-6 shadow-lg h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Vizija</h2>
              <p className="text-gray-600">
                Postati najbolj zaupanja vredna platforma za naročanje in
                komunikacijo v storitvenih podjetjih po Sloveniji in širše.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Naše{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              vrednote
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl bg-gradient-to-r from-primary to-secondary p-[1px]"
              >
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
