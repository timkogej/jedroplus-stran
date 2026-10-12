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

  "promocije-popusti": {
    title: "Popusti, happy hours in akcije",
    metaTitle: "Popusti in happy hours za storitvena podjetja | Jedro+",
    metaDescription:
      "Popusti, happy hours in dodatne storitve s popustom neposredno v Jedro+. Napolnite tihe termine z akcijami, ki jih nastavite v nekaj klikih.",
    eyebrow: "Funkcija",
    heroTag: "FOTO — akcijska ponudba v koledarju",
    mediaTag: "FOTO — pregled popustov in happy hours",
    heroSub:
      "Popolnite tihe ure z akcijami, ki jih nastavite sami: popust na izbrane storitve, happy hour ob določenih urah ali ugodna dodatna storitev.",
    lead: "Vsak salon ali studio pozna tihe ure, ko je koledar prazen. Namesto da jih sprijaznjeno gledate, jih lahko napolnite z ciljno ponudbo. Promocije v Jedro+ so na enem mestu in se povežejo s storitvami, ki jih že imate v sistemu.",
    body: [
      "Popust nastavite kot odstotek ali fiksen znesek, izberete storitve, ki ga dobijo, in določite obdobje veljavnosti. Tako lahko pripravite poletno akcijo, popust za nove stranke ali ugodnost samo za določeno storitev, brez ročnega preračunavanja cen.",
      "Happy hour je popust, vezan na dneve v tednu in uro. Idealen je za polnjenje terminov, ki jih stranke manj iščejo, na primer dopoldanskih ur sredi tedna. Veljati more za vse storitve ali samo za izbrane.",
      "Dodatne storitve (add-oni) omogočajo, da ob rezervaciji stranki ponudite dodatno storitev po ugodnejši ceni. Vidite originalno ceno, popust in končno ceno, zato je ponudba vedno pregledna.",
    ],
    list: [
      { b: "Popust v % ali €", rest: " — na izbranih storitvah, v izbranem obdobju" },
      { b: "Happy hours", rest: " — popust ob določenih dnevih in urah" },
      { b: "Dodatne storitve s popustom", rest: " — več vrednosti na termin" },
      { b: "Vse na enem mestu", rest: " — vsaka promocija je vezana na vaše storitve" },
    ],
    cards: [
      { title: "Popusti", text: "Odstotek ali fiksen znesek, izbrane storitve in datum od–do." },
      { title: "Happy hours", text: "Dnevi v tednu, ura od–do in popust za tihe termine." },
      { title: "Dodatne storitve", text: "Dodatna storitev ob terminu z prikazano originalno in končno ceno." },
    ],
    faq: [
      {
        q: "Ali lahko popust velja samo za nekatere storitve?",
        a: "Da. Pri vsakem popustu izberete storitve, za katere velja. Pri happy hour lahko izberete tudi vse storitve naenkrat.",
      },
      {
        q: "Ali lahko popust časovno omejim?",
        a: "Da. Popustu nastavite datum začetka in konca. Happy hour pa velja ob izbranih dnevih v tednu in v izbranem časovnem oknu.",
      },
      {
        q: "Kaj so dodatne storitve (add-oni)?",
        a: "To so storitve, ki jih stranki ponudite ob glavni storitvi po ugodnejši ceni. V pregledu vidite originalno ceno, popust in končno ceno.",
      },
      {
        q: "Lahko popust določim kot fiksen znesek?",
        a: "Da. Popust nastavite bodisi v odstotkih bodisi kot fiksen znesek v evrih.",
      },
    ],
  },

  "resursi": {
    title: "Resursi: sobe, kabine in oprema",
    metaTitle: "Upravljanje resursov (sobe, kabine, oprema) | Jedro+",
    metaDescription:
      "Upravljajte fizične resurse, ki jih vaše storitve potrebujejo: masažne mize, kabine, opremo. Jedro+ prepreči dvojne rezervacije in pokaže zasedenost.",
    eyebrow: "Funkcija",
    heroTag: "FOTO — kabine in oprema v salonu",
    mediaTag: "FOTO — pregled resursov in zasedenosti",
    heroSub:
      "Termin ni odvisen samo od osebe, ampak tudi od mize, kabine ali aparata. Jedro+ spremlja tudi to.",
    lead: "Marsikatera storitev potrebuje več kot izvajalca: masažno mizo, kabino, laser, sobo. Če teh resursov ne spremljate, se prej ali slej zgodi dvojna rezervacija. Resursi v Jedro+ so fizične stvari, ki jih storitve potrebujejo, in jih povežete s storitvami, ki jih uporabljajo.",
    body: [
      "Vsak resurs ima ime, število enot in kapaciteto (koliko oseb sprejme ena enota). Hitro vidite skupno kapaciteto, število aktivnih resursov in koliko storitev je povezanih z njimi.",
      "Resurs lahko nastavite kot vedno na voljo ali mu določite urnik. Nepotrebnega resursa ne izbrišete, ampak ga deaktivirate, ko ga ne uporabljate.",
      "Ko so resursi povezani s storitvami, sistem ve, kaj mora biti prosto, da je termin mogoč. Tako se izognete zapletom, ko je izvajalec prost, oprema pa zasedena.",
    ],
    list: [
      { b: "Manj dvojnih rezervacij", rest: " — termin upošteva tudi mizo, kabino ali opremo" },
      { b: "Enote in kapaciteta", rest: " — več enot istega resursa, ob tem koliko oseb sprejme" },
      { b: "Urnik resursa", rest: " — vedno na voljo ali po nastavljenem urniku" },
      { b: "Povezano s storitvami", rest: " — vidite, katere storitve resurs uporabljajo" },
    ],
    cards: [
      { title: "Enote in kapaciteta", text: "Več enot istega resursa in kapaciteta posamezne enote." },
      { title: "Aktiven / neaktiven", text: "Resurs začasno izklopite, ne da bi ga izgubili." },
      { title: "Pregled na hitro", text: "Skupno resursov, aktivnih, kapaciteta in povezane storitve." },
    ],
    faq: [
      {
        q: "Kaj je resurs v Jedro+?",
        a: "Fizična stvar, ki jo storitev potrebuje, na primer masažna miza, kabina, soba ali oprema. Ni isto kot zaposleni, ki je izvajalec storitve.",
      },
      {
        q: "Ali lahko imam več enot istega resursa?",
        a: "Da. Pri resursu nastavite število enot in kapaciteto posamezne enote, sistem pa prikaže skupno kapaciteto.",
      },
      {
        q: "Ali lahko resursu določim urnik?",
        a: "Da. Resurs je lahko vedno na voljo ali ima nastavljen svoj urnik.",
      },
      {
        q: "Kako povežem resurs s storitvijo?",
        a: "Resurs povežete s storitvami, ki ga potrebujejo. Na kartici resursa vidite, s katerimi storitvami je povezan.",
      },
    ],
  },

  "zahteve-za-termin": {
    title: "Zahteve za termin: potrdite sami",
    metaTitle: "Zahteve za termin in ročno potrjevanje rezervacij | Jedro+",
    metaDescription:
      "Stranka pošlje zahtevo z željenim obdobjem, vi pa potrdite točen termin, storitev in osebo. Jedro+ je rešitev za poslovanje, kjer ne rezervirate vsega samodejno.",
    eyebrow: "Funkcija",
    heroTag: "FOTO — seznam zahtev za termin",
    mediaTag: "FOTO — potrditev zahteve za termin",
    heroSub:
      "Ne vsak termin se rezervira z enim klikom. Stranka pošlje željo, vi pa jo pregledate in potrdite pravi termin.",
    lead: "Pri nekaterih storitvah ne želite, da stranka sama izbere uro: trajanje je odvisno od primera, izvajalec mora potrditi ali pa je urnik zahteven. Zahteve za termin uredijo to: stranka pošlje, kdaj bi ji ustrezalo, vi pa v nekaj korakih določite storitev, osebo in točen termin.",
    body: [
      "Zahteve so na enem mestu in jih lahko filtrirate po stanju: v pregledu, potrjeno ali zavrnjeno. Pri vsaki zahtevi vidite, kdaj jo je stranka poslala in katero obdobje si želi.",
      "Potrditev poteka v treh korakih: izberete storitev, osebo in nato izmed prostih terminov v želenem obdobju tisti, ki ustreza vam in stranki. Termin se zapiše v koledar.",
      "Če termina ni mogoče razporediti, zahtevo zavrnete in navedete razlog, tako da stranka ve, kaj je razlog.",
    ],
    list: [
      { b: "Zahteve na enem mestu", rest: " — filter po stanju: v pregledu, potrjeno, zavrnjeno" },
      { b: "Potrditev v treh korakih", rest: " — storitev, oseba, datum in ura" },
      { b: "Samo prosti termini", rest: " — ponujeni so termini v želenem obdobju stranke" },
      { b: "Zavrnitev z razlogom", rest: " — stranka ve, zakaj termin ni mogoč" },
    ],
    cards: [
      { title: "Želeno obdobje", text: "Stranka navede, kdaj bi ji ustrezalo, vi izberete točno uro." },
      { title: "Prosti termini", text: "Sistem poišče proste termine za izbrano storitev in osebo." },
      { title: "Sledljivo stanje", text: "Vsaka zahteva je v pregledu, potrjena ali zavrnjena." },
    ],
    faq: [
      {
        q: "Kdaj so zahteve za termin smiselne?",
        a: "Kadar ne želite samodejne rezervacije: ko je trajanje odvisno od primera, ko mora izvajalec potrditi ali ko urnik ni povsem predvidljiv.",
      },
      {
        q: "Kaj stranka vidi, če zahtevo zavrnem?",
        a: "Ob zavrnitvi vnesete razlog, na primer da v želenem obdobju ni prostih terminov, ki je naveden pri zahtevi.",
      },
      {
        q: "Kako potrdim zahtevo?",
        a: "Izberete storitev, osebo in nato prost termin v želenem obdobju. Potrjen termin se zapiše v koledar.",
      },
      {
        q: "Ali lahko filtriram zahteve?",
        a: "Da. Zahteve lahko pregledujete po stanju: vse, v pregledu, potrjene in zavrnjene.",
      },
    ],
  },

  "qr-kode-booking-dizajni": {
    title: "Booking dizajni, linki in QR kode",
    metaTitle: "Booking strani, dizajni in QR kode za naročanje | Jedro+",
    metaDescription:
      "Izberite videz spletnega naročanja, uporabite različne booking povezave za različne kanale in natisnite QR kodo za pult. Vse v Jedro+.",
    eyebrow: "Funkcija",
    heroTag: "FOTO — QR koda za rezervacijo na pultu",
    mediaTag: "FOTO — izbira dizajna booking strani",
    heroSub:
      "Videz, ki ustreza vaši znamki, povezava za vsak kanal in QR koda, ki jo natisnete in nalepite na pult.",
    lead: "Spletno naročanje je prvi stik stranke z vašim podjetjem. V Jedro+ izberete videz naročilne strani, za vsak kanal (Instagram, spletna stran, e-poštni podpis) uporabite svojo povezavo, QR kodo pa natisnete za pult, vrata ali izložbo.",
    body: [
      "Standardni dizajni so Klasičen, Moderen in Eleganten. V paketu Jedro Pro so na voljo še Sezonsko (spreminja se z letnim časom in prazniki), Magazine in Casino. V aplikaciji se redno pojavljajo novi dizajni.",
      "Vsak booking link lahko uporabite na drugem kanalu: na Instagramu en dizajn, na spletni strani drug, v e-poštnem podpisu tretji. Stranke vsakič pristanejo na isti vaši strani, samo z drugačnim videzom. Ena povezava je glavna, ki jo pošiljamo tudi v sporočilih.",
      "QR kodo za rezervacijo natisnete kot plakat v formatu A6 (105 × 148 mm) in izberete videz: čisti, vaše barve, eleganten ali temen. Ker koda vodi na glavno povezavo, ostane pravilna, tudi če kasneje zamenjate videz strani. Obstaja tudi QR koda za vpis nove stranke, ki jo doda med vaše stranke, brez rezervacije termina.",
    ],
    list: [
      { b: "6 dizajnov", rest: " — Klasičen, Moderen, Eleganten ter v Pro Sezonsko, Magazine in Casino" },
      { b: "Povezava za vsak kanal", rest: " — Instagram, spletna stran, e-pošta, vsak s svojim videzom" },
      { b: "QR plakat A6", rest: " — za pult, vrata ali izložbo, v štirih videzih" },
      { b: "QR za vpis stranke", rest: " — nova stranka se vpiše sama, brez rezervacije" },
    ],
    cards: [
      { title: "Izbira dizajna", text: "Od preprostega do glamuroznega, prilagojeno vaši znamki." },
      { title: "Več povezav", text: "Ista stran, različen videz po kanalih." },
      { title: "QR za tisk", text: "Plakat A6 z izbranim videzom, ki vedno vodi na glavno povezavo." },
    ],
    faq: [
      {
        q: "Kateri dizajni so na voljo?",
        a: "Standardno Klasičen, Moderen in Eleganten. V paketu Jedro Pro še Sezonsko, Magazine in Casino.",
      },
      {
        q: "Ali lahko uporabljam več booking povezav?",
        a: "Da. Vsako povezavo lahko uporabite na drugem kanalu, z drugačnim videzom. Ena je glavna, ki jo pošiljamo tudi v sporočilih.",
      },
      {
        q: "Kaj se zgodi z natisnjeno QR kodo, če zamenjam dizajn?",
        a: "Koda vodi na glavno rezervacijsko povezavo, zato ostane pravilna tudi po zamenjavi videza strani.",
      },
      {
        q: "Ali lahko stranka s QR kodo samo vpiše svoje podatke?",
        a: "Da. Posebna QR koda za vpis stranki omogoča, da vnese svoje podatke in se vpiše med vaše stranke, termina pa s tem ne rezervira.",
      },
    ],
  },
};

export const funkcijeSlugs = Object.keys(funkcije);
