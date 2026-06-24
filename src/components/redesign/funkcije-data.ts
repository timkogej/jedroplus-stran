// Content for each /funkcije/[slug] subpage. Mirrors the structure of
// panoge-data.ts: a shared template renders these fields, the CTA band is
// identical across pages. Each entry targets one SEO keyword.

export type FunkcijaListItem = { b: string; rest: string };
export type FunkcijaCard = { title: string; text: string };
export type FunkcijaFaq = { q: string; a: string };

export type Funkcija = {
  title: string; // h1 — vsebuje ciljni keyword
  metaTitle: string; // <title>
  metaDescription: string; // 140–160 znakov
  eyebrow: string; // hero eyebrow
  heroTag: string; // hero placeholder label
  mediaTag: string; // split media placeholder label
  heroSub: string;
  lead: string;
  body: string[]; // dodatni odstavki vsebine (pod prednostmi)
  list: FunkcijaListItem[];
  cards: FunkcijaCard[];
  faq: FunkcijaFaq[];
};

export const funkcije: Record<string, Funkcija> = {
  "sms-opomniki": {
    title: "SMS opomniki za stranke",
    metaTitle: "SMS opomniki za stranke | Jedro+",
    metaDescription:
      "Samodejni SMS opomniki za stranke pred terminom zmanjšajo odpovedi in no-show. Jedro+ pošlje sporočilo ob pravem času, v vašem tonu — brez ročnega dela.",
    eyebrow: "Funkcija",
    heroTag: "FOTO — telefon s SMS opomnikom pred terminom",
    mediaTag: "FOTO — stranka prejme SMS opomnik na telefon",
    heroSub:
      "Vsaka stranka dobi opomnik ob pravem času — manj pozabljenih terminov, poln urnik in nič ročnega tipkanja.",
    lead: "Pozabljen termin je izgubljen prihodek, ki ga ni mogoče nadomestiti. SMS opomniki za stranke so najbolj zanesljiv način, da sporočilo res pride do stranke — odprtost SMS-a je bistveno višja kot pri e-pošti, večina ljudi sporočilo prebere v nekaj minutah. Jedro+ samodejno pošlje opomnik pred terminom, brez da bi se vam bilo treba spomniti ali ročno tipkati posamezna sporočila.",
    body: [
      "Sistem opomnik pošlje ob času, ki ga sami določite — na primer 24 ur in nato še 2 uri pred terminom. Vsako sporočilo je personalizirano: vsebuje ime stranke, datum in uro termina ter ime storitve, po želji pa tudi navodila za pripravo. Stranka tako natančno ve, kdaj in kam mora priti, vi pa se izognete praznim terminom in zadnji-minutnim odpovedim.",
      "Ker so opomniki vezani na vaš koledar in bazo strank, ni dvojnega vnašanja podatkov. Ko v Jedro+ nastane termin — prek spletnega naročanja ali ročno — se opomnik samodejno uvrsti v vrsto za pošiljanje. Če stranka termin prestavi ali odpove, se opomnik posodobi oziroma prekliče sam. SMS je odličen tudi za nujna obvestila, na primer ko morate zaradi bolezni termin prestaviti — z enim klikom obvestite vse stranke določenega dne.",
      "Poleg opomnikov pred terminom lahko SMS uporabite za zahvalo po obisku, povabilo k ponovni rezervaciji ali obveščanje izgubljenih strank, ki se dolgo niso oglasile. Vsak kanal — SMS ali e-pošta — izberete glede na vrsto sporočila in vrsto stranke, vse pa ostane na enem mestu, povezano z zgodovino vsake stranke.",
    ],
    list: [
      { b: "Manj no-show terminov", rest: " — opomnik ob pravem času zniža odpovedi v zadnji minuti" },
      { b: "Visoka odprtost", rest: " — SMS stranke preberejo bistveno pogosteje kot e-pošto" },
      { b: "Personalizirano sporočilo", rest: " — ime, termin in storitev samodejno vstavljeni" },
      { b: "Brez ročnega dela", rest: " — opomniki se pošljejo sami iz vašega koledarja" },
    ],
    cards: [
      { title: "Časovno nastavljivi opomniki", text: "Določite, kdaj naj sporočilo odide — npr. dan prej in še 2 uri pred terminom." },
      { title: "Povezano s koledarjem", text: "Termin se ustvari, opomnik se uvrsti sam. Ob preklicu se ustavi." },
      { title: "Množično obveščanje", text: "Z enim klikom obvestite vse stranke določenega dne ob spremembi urnika." },
    ],
    faq: [
      {
        q: "Kdaj se SMS opomnik pošlje stranki?",
        a: "Čas pošiljanja določite sami. Najpogostejša nastavitev je opomnik 24 ur pred terminom in dodaten kratek opomnik 2 uri prej. Sistem opomnike pošlje samodejno glede na termine v vašem koledarju.",
      },
      {
        q: "Ali so SMS opomniki personalizirani?",
        a: "Da. Vsako sporočilo samodejno vsebuje ime stranke, datum in uro termina ter ime storitve. Po želji dodate tudi navodila za pripravo ali druge podatke — sporočilo je videti, kot da ste ga napisali ročno.",
      },
      {
        q: "Kaj se zgodi, če stranka termin prestavi ali odpove?",
        a: "Opomnik se samodejno posodobi ali prekliče. Ker so opomniki vezani na koledar, ni nevarnosti, da bi stranka prejela napačno sporočilo o že odpovedanem terminu.",
      },
      {
        q: "Ali SMS opomniki delujejo skupaj z e-poštnimi?",
        a: "Da. Kanal izberete glede na vrsto sporočila in stranko — SMS za nujne opomnike, e-pošto za daljša obvestila. Vse skupaj ostane povezano z zgodovino vsake stranke v eni bazi.",
      },
    ],
  },

  "spletno-narocanje": {
    title: "Spletno naročanje in booking 24/7",
    metaTitle: "Spletno naročanje (booking) za termine | Jedro+",
    metaDescription:
      "Spletno naročanje, ki dela namesto vas: stranke rezervirajo termin 24/7 prek deljive povezave, vi pa dobite poln urnik brez klicev in ročnega usklajevanja.",
    eyebrow: "Funkcija",
    heroTag: "FOTO — stranka rezervira termin prek spletnega naročanja",
    mediaTag: "FOTO — booking stran na telefonu in računalniku",
    heroSub:
      "Stranke rezervirajo, ko jim ustreza — podnevi ali ponoči. Vi pa se osredotočite na delo, ne na telefon.",
    lead: "Vsak klic v času storitve je zamujen ali prekinjen — stranka, ki ne dobi termina takoj, pogosto poišče drugod. Spletno naročanje to reši: stranka prek deljive povezave vidi proste termine in rezervira sama, kadarkoli, brez čakanja na odgovor. Booking je na voljo 24 ur na dan, tudi ko ste zaprti ali zasedeni s stranko na stolu.",
    body: [
      "Naročilna stran je prilagojena vašim barvam in logotipu ter prikazuje le storitve, izvajalce in termine, ki jih sami nastavite. Stranka izbere storitev, vidi razpoložljive ure glede na vaš koledar in trajanje storitve ter potrdi rezervacijo v nekaj korakih. Vse je optimizirano za mobilne naprave, saj večina ljudi naroča prav s telefona.",
      "Vsaka rezervacija se samodejno uvrsti v vaš koledar — brez dvojnega vnašanja in brez nevarnosti, da bi se dva termina prekrila. Razpoložljivost se posodablja v realnem času, zato stranka nikoli ne izbere ure, ki je že zasedena. Ob vsaki novi rezervaciji se sproži tudi potrditev in samodejni opomnik pred terminom, kar dodatno zmanjša odpovedi.",
      "Spletno naročanje hkrati gradi vašo bazo strank: ob prvi rezervaciji se ustvari profil z osnovnimi podatki, ob naslednjih obiskih pa se zgodovina dopolnjuje sama. Tako z vsakim naročilom dobite poln urnik in urejeno bazo, brez ene same minute ročnega usklajevanja po telefonu ali sporočilih.",
    ],
    list: [
      { b: "Rezervacije 24/7", rest: " — stranke naročajo tudi izven delovnega časa" },
      { b: "Manj klicev in sporočil", rest: " — naročanje teče samodejno, brez vašega odgovarjanja" },
      { b: "V vaših barvah", rest: " — prilagojena naročilna stran brez programiranja" },
      { b: "Sinhrono s koledarjem", rest: " — proste ure v realnem času, brez prekrivanj" },
    ],
    cards: [
      { title: "Deljiva povezava", text: "Povezavo daste na Instagram, Google profil ali spletno stran — naročanje z enim klikom." },
      { title: "Mobilno optimizirano", text: "Stranka rezervira s telefona v nekaj sekundah, kjerkoli se nahaja." },
      { title: "Samodejna potrditev", text: "Ob rezervaciji stranka takoj prejme potrditev in kasneje opomnik." },
    ],
    faq: [
      {
        q: "Ali za spletno naročanje potrebujem svojo spletno stran?",
        a: "Ne. Jedro+ ustvari samostojno naročilno stran z vašo deljivo povezavo. Lahko jo delite na družbenih omrežjih, Google profilu ali e-pošti — če pa imate spletno stran, jo nanjo preprosto povežete.",
      },
      {
        q: "Kako se prepreči, da bi se dva termina prekrila?",
        a: "Razpoložljivost se prikazuje v realnem času glede na vaš koledar in trajanje vsake storitve. Ko je ura rezervirana, je takoj nedosegljiva za druge — dvojne rezervacije niso mogoče.",
      },
      {
        q: "Ali lahko omejim, katere storitve so na voljo za spletno naročanje?",
        a: "Da. Sami določite, katere storitve, izvajalci in termini so vidni strankam. Nekatere storitve lahko ostanejo le za ročno rezervacijo, druge pa odprete za spletno naročanje.",
      },
      {
        q: "Kaj se zgodi po tem, ko stranka rezervira termin?",
        a: "Rezervacija se samodejno uvrsti v vaš koledar, stranka prejme potrditev, pred terminom pa še opomnik. Hkrati se ustvari ali dopolni njen profil v bazi strank — vse brez ročnega dela.",
      },
    ],
  },

  "crm-baza-strank": {
    title: "CRM za storitvena podjetja",
    metaTitle: "CRM baza strank za storitvena podjetja | Jedro+",
    metaDescription:
      "CRM za storitvena podjetja: kontakti, zgodovina obiskov, opombe in preference strank na enem mestu. Boljši odnos, več ponovnih obiskov, nič razpršenih podatkov.",
    eyebrow: "Funkcija",
    heroTag: "FOTO — pregled baze strank na zaslonu",
    mediaTag: "FOTO — kartica stranke z zgodovino obiskov",
    heroSub:
      "Vsaka stranka, vsak obisk in vsaka opomba na enem mestu — da veste, kdo je pred vami in kdaj ga je čas povabiti nazaj.",
    lead: "Podatki o strankah, raztreseni po beležkah, telefonih in glavah zaposlenih, prej ali slej povzročijo izgubljen prihodek. CRM za storitvena podjetja vse združi na enem mestu: kontaktni podatki, zgodovina obiskov, opravljene storitve, opombe in preference vsake stranke. Tako veste, kdo je stranka, kaj je nazadnje opravila in kdaj jo je smiselno povabiti nazaj.",
    body: [
      "Vsak profil stranke se gradi sam. Ob spletni rezervaciji ali ročnem vnosu termina se ustvari kartica, ki se z vsakim naslednjim obiskom dopolnjuje — brez podvojenih vnosov in brez ročnega prepisovanja. Pri stranki na hitro vidite zgodovino storitev, zadnji obisk, opombe (npr. alergije, preference, uporabljene izdelke) in pretekla sporočila.",
      "Ker je CRM povezan s koledarjem in komunikacijo, podatki niso mrtva evidenca, ampak orodje za rast. Stranke lahko filtrirate — na primer tiste, ki se dolgo niso oglasile — in jih s parimi kliki povabite nazaj. Personalizirana sporočila samodejno povlečejo ime, zadnjo storitev in druge podatke, zato je vsak nagovor videti oseben, ne množičen.",
      "Urejena baza pomeni tudi varnost in kontinuiteto: ko se ekipa zamenja ali širi, znanje o strankah ostane v sistemu in ne odide z zaposlenim. Vsi vidijo iste, ažurne podatke, kar zmanjša napake in dvojno delo ter daje strankam občutek, da jih res poznate.",
    ],
    list: [
      { b: "Vse na enem mestu", rest: " — kontakti, zgodovina, opombe in preference vsake stranke" },
      { b: "Profil se gradi sam", rest: " — ob vsakem terminu se kartica dopolni brez ročnega dela" },
      { b: "Več ponovnih obiskov", rest: " — filtri za neaktivne stranke in povabila nazaj" },
      { b: "Znanje ostane v sistemu", rest: " — podatki ne odidejo z zaposlenim" },
    ],
    cards: [
      { title: "Kartica stranke", text: "Zgodovina obiskov, opravljene storitve in opombe na enem pogledu." },
      { title: "Pametni filtri", text: "Poiščite neaktivne ali najboljše stranke in jih ciljano nagovorite." },
      { title: "Povezano s komunikacijo", text: "Sporočila samodejno povlečejo podatke iz profila — vsak nagovor je oseben." },
    ],
    faq: [
      {
        q: "Ali moram stranke vnašati ročno?",
        a: "Ne nujno. Profili se ustvarijo samodejno ob spletni rezervaciji ali ob vnosu termina. Obstoječe stranke lahko tudi uvozite, nove pa se dodajajo same ob vsakem naročilu.",
      },
      {
        q: "Kateri podatki o stranki so shranjeni?",
        a: "Kontaktni podatki, zgodovina obiskov in opravljenih storitev, opombe (npr. preference, alergije, uporabljeni izdelki) ter zgodovina poslane komunikacije — vse na eni kartici stranke.",
      },
      {
        q: "Ali lahko stranke filtriram in ciljano nagovorim?",
        a: "Da. Stranke lahko filtrirate — na primer tiste, ki se dolgo niso oglasile — in jih s parimi kliki povabite nazaj s personaliziranim sporočilom, ki samodejno povleče njihove podatke.",
      },
      {
        q: "Kaj se zgodi s podatki, če zamenjam zaposlene?",
        a: "Podatki ostanejo v sistemu, ne v glavah posameznikov. Vsa ekipa vidi iste, ažurne informacije o strankah, zato se znanje ne izgubi ob menjavi ali širitvi ekipe.",
      },
    ],
  },

  "ai-komunikacija": {
    title: "AI personalizirana sporočila za stranke",
    metaTitle: "AI personalizirana sporočila za stranke | Jedro+",
    metaDescription:
      "AI personalizirana sporočila za stranke: Jedro+ napiše opomnike in follow-upe v vašem tonu, z imenom in storitvijo. En klik, vsi obveščeni — sporočila, ki gradijo odnos.",
    eyebrow: "Funkcija",
    heroTag: "FOTO — telefon s personaliziranim sporočilom stranke",
    mediaTag: "FOTO — primeri AI sporočil v pogovornem oknu",
    heroSub:
      "AI napiše sporočilo, kot bi ga napisali vi — z imenom, terminom in pravo storitvijo. En klik, vsi obveščeni.",
    lead: "Generična, robotska sporočila stranke prepoznajo in ignorirajo. AI personalizirana sporočila pa gradijo pravi odnos: Jedro+ z umetno inteligenco ustvari opomnike, follow-upe in navodila, ki zvenijo, kot da ste jih napisali sami — v vašem tonu, z imenom stranke, datumom termina in konkretno storitvijo. Stranka začuti, da je sporočilo res zanjo, ne del množične razpošiljke.",
    body: [
      "AI iz vaše baze samodejno povleče podatke o stranki in terminu ter sestavi sporočilo, primerno trenutku — vljuden opomnik pred obiskom, navodila za nego po storitvi ali toplo povabilo k ponovni rezervaciji. Ton in slog prilagodite svoji blagovni znamki: od sproščenega in prijaznega do umirjenega in profesionalnega. Vi ostanete v nadzoru — sporočilo pred pošiljanjem pregledate in po želji popravite.",
      "Namesto da bi vsako sporočilo tipkali ročno, z enim klikom obvestite vse stranke določenega dne ali skupino, ki jo izberete. AI poskrbi, da je vsako sporočilo še vedno osebno — različno ime, storitev in kontekst — čeprav jih pošljete na desetine hkrati. To prihrani ure dela in odpravi napake pri ročnem prepisovanju.",
      "Ker je komunikacija povezana s koledarjem in CRM-jem, so sporočila vedno točna in pravočasna: opomnik se sproži pred terminom, zahvala po obisku, povabilo pa potem, ko se stranka dlje časa ni oglasila. Kanal — SMS ali e-pošta — izberete glede na vrsto sporočila in stranko, vse skupaj pa ostane zabeleženo v zgodovini vsake stranke.",
    ],
    list: [
      { b: "Sporočila v vašem tonu", rest: " — AI piše, kot bi pisali vi, ne robotsko" },
      { b: "Samodejna personalizacija", rest: " — ime, termin in storitev za vsako stranko posebej" },
      { b: "En klik, vsi obveščeni", rest: " — desetine osebnih sporočil naenkrat" },
      { b: "Vedno pravočasno", rest: " — opomniki, zahvale in povabila ob pravem trenutku" },
    ],
    cards: [
      { title: "AI v vašem slogu", text: "Določite ton in znamko — sporočila zvenijo pristno in osebno." },
      { title: "Vi imate nadzor", text: "Vsako sporočilo lahko pred pošiljanjem pregledate in popravite." },
      { title: "Povezano s podatki", text: "Sporočila samodejno povlečejo ime, termin in storitev iz baze strank." },
    ],
    faq: [
      {
        q: "Ali sporočila zvenijo robotsko?",
        a: "Ne. AI piše v tonu in slogu, ki ga sami nastavite — od sproščenega do profesionalnega — ter vstavi ime stranke, termin in storitev. Sporočilo je videti, kot da ste ga napisali ročno.",
      },
      {
        q: "Ali imam nadzor nad tem, kaj se pošlje?",
        a: "Da. AI pripravi predlog sporočila, vi pa ga pred pošiljanjem pregledate in po želji popravite. Nič ne odide brez vaše potrditve, če tako želite.",
      },
      {
        q: "Kako AI ve, kaj naj napiše?",
        a: "Podatke povleče iz vašega koledarja in baze strank — ime, termin, opravljeno ali prihajajočo storitev in kontekst (opomnik, zahvala, povabilo). Na podlagi tega sestavi primerno, osebno sporočilo.",
      },
      {
        q: "Po katerem kanalu se sporočila pošljejo?",
        a: "Po SMS ali e-pošti — kanal izberete glede na vrsto sporočila in stranko. Vsa poslana sporočila ostanejo zabeležena v zgodovini vsake stranke.",
      },
    ],
  },
};

export const funkcijeSlugs = Object.keys(funkcije);
