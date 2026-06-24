// Content for each /panoge/[slug] subpage. The CTA band is identical across
// pages and is rendered directly in the page template.

import type { FaqItem } from "./faq-data";

export type PanogaListItem = { b: string; rest: string };
export type PanogaCard = { title: string; text: string };
export type PanogaMessage = { dir: "out" | "in"; text: string };

export type Panoga = {
  title: string; // h1 (may contain "&")
  heroTag: string; // hero placeholder label
  mediaTag: string; // split media placeholder label
  heroSub: string;
  lead: string;
  pains: string[]; // dodatni uvodni odstavki o specifičnih bolečinah panoge
  list: PanogaListItem[];
  useCasesHead: string; // h2 fragment za sekcijo use-casov
  useCases: PanogaCard[]; // 3–4 konkretni use-casi
  msgHead: string; // h2 za primer sporočila
  messages: PanogaMessage[]; // primer dejanskega opomnika
  cards: PanogaCard[]; // "kaj pridobite" – funkcijske kartice
  whyTitle: string; // h2 "zakaj … izberejo Jedro+"
  whyLead: string;
  whyList: PanogaListItem[];
  faq: FaqItem[]; // panoga-specific FAQ (3–4 items)
};

export const panoge: Record<string, Panoga> = {
  "frizerski-saloni": {
    title: "Frizerski, kozmetični & barber saloni",
    heroTag: "FOTO — frizerski / barber salon (širok kader)",
    mediaTag: "FOTO — delo s stranko v frizerskem salonu",
    heroSub:
      "Jedro+ poskrbi za naročanje in opomnike, da se vi lahko posvetite stranki na stolu.",
    lead: "V salonu vsak prazen termin pomeni izgubljen prihodek. Jedro+ samodejno pošlje opomnik ob pravem času in v vašem tonu, povabi nazaj stranke, ki se dolgo niso oglasile, in omogoči spletno naročanje 24/7 — brez ročnega odgovarjanja na sporočila.",
    pains: [
      "V frizerskem salonu se dan vrti okoli stola, ne okoli telefona. A prav telefon vas največkrat zmoti sredi barvanja ali striženja — nekdo želi premakniti termin, drugi sprašuje po ceni, tretji se ne oglasi in pusti za sabo prazno uro, ki je sredi dneva skoraj ni mogoče več zapolniti.",
      "Frizerski saloni imajo še eno posebnost: stranke se vračajo v ritmih — striženje na štiri do šest tednov, osvežitev barve na tri. Ko se ta ritem prekine, stranka pogosto ne odide drugam zavestno, ampak preprosto pozabi naročiti. Jedro+ poskrbi, da do tega ne pride.",
    ],
    list: [
      { b: "Manj odpovedi", rest: " — opomnik ob pravem času zmanjša no-show" },
      { b: "Več ponovnih obiskov", rest: " — samodejni follow-up po storitvi" },
      { b: "Spletno naročanje", rest: " — v vaših barvah, brez programiranja" },
    ],
    useCasesHead: "Štiri težave, ki izginejo",
    useCases: [
      { title: "Prazni termini sredi dneva", text: "Stranka dobi opomnik dan prej in zjutraj na dan termina. Manj pozabljenih obiskov pomeni manj ur, ko stol sameva." },
      { title: "Stranke, ki »se bodo oglasile«", text: "Jedro+ prepozna, da nekdo ni bil v salonu sedem tednov, in mu pošlje vljudno povabilo nazaj. Prazni termini med tednom se zapolnijo brez vašega klicanja." },
      { title: "Telefon, ki zvoni med delom", text: "Spletno naročanje sprejema rezervacije, ko vi strižete. Stranka izbere frizerja, storitev in prost termin sama, vi pa vidite urejen urnik namesto kupa propuščenih klicev." },
      { title: "Več frizerjev, en koledar", text: "Vsak izvajalec ima svoj razpored, pavze in storitve. Termini se ne podvajajo, stranka pa ob naročanju vidi le tisto, kar je dejansko prosto." },
    ],
    msgHead: "Tako zveni opomnik iz vašega salona",
    messages: [
      { dir: "out", text: "Pozdravljeni, Maja! ✂️ Jutri ob 16:00 vas pri Niki čaka termin za barvanje in fen. Če kaj ne uspe, nam le pišite — sicer se vidiva! 💜" },
      { dir: "out", text: "Hej, Tina! Mineva že šest tednov od zadnjega striženja 😊 Imamo prost termin v četrtek dopoldne — vam ga rezerviramo? En klik in urejeno." },
      { dir: "in", text: "Super, ja prosim! Hvala za opomnik 🙏" },
    ],
    cards: [
      { title: "Pameten urnik", text: "Termini, pavze in delo več frizerjev na enem mestu." },
      { title: "Baza strank", text: "Zgodovina obiskov, barve in preference vsake stranke." },
      { title: "Samodejni opomniki", text: "SMS ali e-pošta pred terminom — brez vašega dela." },
    ],
    whyTitle: "Zakaj se frizerski saloni odločijo za Jedro+",
    whyLead: "Programov za naročanje je veliko — Jedro+ se razlikuje po tem, da za delovanje ne potrebuje vašega časa. Postavimo ga po meri vašega salona: vaše storitve, vaši frizerji, vaš ton sporočil. Ko enkrat teče, opomniki, potrditve in povabila k ponovnemu obisku gredo sami.",
    whyList: [
      { b: "Postavljeno za vas", rest: " — uvozimo storitve, cenik in ekipo, vi samo začnete naročati." },
      { b: "Sporočila v vašem tonu", rest: " — topla, ne robotska; stranka začuti, da piše salon, ne aplikacija." },
      { b: "Vse na enem mestu", rest: " — urnik, baza strank z zgodovino barv in preferenc, opomniki." },
      { b: "Brez vezave", rest: " — preizkusite brezplačno in vidite učinek že na prvih terminih." },
    ],
    faq: [
      {
        q: "Ali stranke lahko rezervirajo termin same prek spleta?",
        a: "Da. Jedro+ omogoča spletno naročanje 24/7 v vaših barvah in z vašim logotipom, brez programiranja. Stranka izbere prost termin kadarkoli, vi pa se ne ukvarjate z odgovarjanjem na sporočila.",
      },
      {
        q: "Kako Jedro+ zmanjša odpovedi in no-show?",
        a: "Sistem samodejno pošlje opomnik ob pravem času (SMS ali e-pošta) pred terminom. Pravočasni opomnik bistveno zmanjša število pozabljenih in odpovedanih terminov.",
      },
      {
        q: "Ali lahko vodim urnik za več frizerjev hkrati?",
        a: "Da. Pameten urnik prikaže termine, pavze in delo več frizerjev na enem mestu, tako da imate vedno pregled nad celotnim salonom.",
      },
      {
        q: "Ali Jedro+ shranjuje zgodovino in preference strank?",
        a: "Da. Baza strank hrani zgodovino obiskov, uporabljene barve in preference vsake stranke, da je vsaka storitev natančno po njeni meri.",
      },
    ],
  },
  klinike: {
    title: "Zobne, estetske & medicinske klinike",
    heroTag: "FOTO — estetska / zobna klinika (čist, svetel prostor)",
    mediaTag: "FOTO — recepcija / obravnava v kliniki",
    heroSub:
      "Vsak pacient dobi prava navodila pred posegom in po njem, vi pa popoln pregled nad termini.",
    lead: "Vsaka stranka prejme pravočasna navodila pred posegom in po njem, kar gradi zaupanje in profesionalen vtis. Vi pa imate pregled nad termini, statusi in celotno zgodovino obiskov — brez izgubljenih kartonov in podvojenih vnosov.",
    pains: [
      "V kliniki šteje vsak detajl — od priprave na poseg do navodil za nego po njem. Ko ta navodila tečejo le ustno na recepciji ali se pošiljajo ročno, se hitro izgubijo: pacient pride nepripravljen, poseg se zavleče ali prestavi, vtis pa trpi.",
      "Odpovedi v zadnjem trenutku so v zdravstvenih in estetskih dejavnostih še dražje kot drugje, saj je termin dolg, oprema rezervirana in osebje pripravljeno. Jedro+ pravočasno opomni pacienta in mu da prava navodila, da pride pripravljen in ob dogovorjenem času.",
    ],
    list: [
      { b: "Pred-terminska navodila", rest: " — samodejno za vsako storitev" },
      { b: "Po-terminska oskrba", rest: " — zaupanje in profesionalen vtis" },
      { b: "Urejen CRM", rest: " — zgodovina, opombe in preference pacienta" },
    ],
    useCasesHead: "Kje Jedro+ največ pripomore",
    useCases: [
      { title: "Priprava na poseg", text: "Pacient samodejno prejme navodila, vezana na njegovo storitev — kaj naj prej stori in česa naj se izogiba. Manj prestavljenih posegov zaradi nepripravljenosti." },
      { title: "Nega po obisku", text: "Po posegu klinika pošlje priporočila za nego in znak, kdaj je čas za kontrolo. Pacient se počuti spremljanega, vi pa gradite zaupanje." },
      { title: "Drage odpovedi", text: "Pravočasen opomnik zmanjša odpovedi v zadnjem trenutku, ko je termin že rezerviran in osebje pripravljeno." },
      { title: "Razpršeni podatki", text: "Zgodovina obiskov, opombe in priporočene kontrole so na enem mestu — brez iskanja po kartonih in podvojenih vnosih." },
    ],
    msgHead: "Tako zveni sporočilo iz vaše klinike",
    messages: [
      { dir: "out", text: "Spoštovani g. Novak, jutri ob 9:00 vas čaka termin za beljenje. Prosimo, da 2 uri prej ne uživate obarvane hrane ali kave. Se vidimo!" },
      { dir: "out", text: "Pozdravljeni, ga. Kos. Po današnjem posegu naslednjih 48 ur priporočamo hladne obkladke in mirovanje. Za vprašanja smo dosegljivi — lepo okrevajte! 💙" },
      { dir: "in", text: "Najlepša hvala za skrb in jasna navodila." },
    ],
    cards: [
      { title: "Digitalna kartoteka", text: "Vsi podatki o pacientu varno na enem mestu." },
      { title: "Pravočasni opomniki", text: "Manj odpovedi in zamud z opomnikom pred terminom." },
      { title: "Sledenje obiskom", text: "Pregled posegov in priporočenih kontrol." },
    ],
    whyTitle: "Zakaj klinike izberejo Jedro+",
    whyLead: "Pacienti od klinike pričakujejo zanesljivost in jasno komunikacijo — Jedro+ poskrbi za oboje, ne da bi obremenil recepcijo. Sistem postavimo po vaših storitvah in navodilih, nato pa opomniki ter pred- in poterminska navodila tečejo samodejno.",
    whyList: [
      { b: "Manj odpovedi", rest: " — pravočasni opomniki zmanjšajo izpade dragih terminov." },
      { b: "Profesionalen vtis", rest: " — pacient ob vsakem koraku dobi prava navodila." },
      { b: "Varni podatki", rest: " — zgodovina in opombe pacienta na enem, urejenem mestu." },
      { b: "Manj dela na recepciji", rest: " — sporočila in opomniki ne potrebujejo ročnega pošiljanja." },
    ],
    faq: [
      {
        q: "Ali Jedro+ samodejno pošlje navodila pred posegom in po njem?",
        a: "Da. Vsak pacient prejme pravočasna navodila pred posegom in po njem, samodejno glede na storitev. To gradi zaupanje in profesionalen vtis.",
      },
      {
        q: "Kako so shranjeni podatki o pacientih?",
        a: "Vsi podatki o pacientu so varno shranjeni v digitalni kartoteki na enem mestu, brez izgubljenih kartonov in podvojenih vnosov. Dostop je omejen in skladen z GDPR.",
      },
      {
        q: "Ali sistem pomaga zmanjšati odpovedi terminov?",
        a: "Da. Samodejni opomniki pravočasno spomnijo pacienta na termin, kar zmanjša število odpovedi in zamud.",
      },
    ],
  },
  wellness: {
    title: "Masažni & wellness studii, fizioterapija",
    heroTag: "FOTO — wellness / masažni studio (umirjeno vzdušje)",
    mediaTag: "FOTO — masaža / fizioterapevtska obravnava",
    heroSub:
      "Od posameznih obravnav do serij in paketov — Jedro+ vse poveže v miren, urejen urnik.",
    lead: "Veliko storitev poteka v serijah ali paketih. Jedro+ poveže ponavljajoče se termine, pošlje nežne opomnike in samodejno povabi nazaj stranke, ki dolgo niso bile na obisku — da je vaš urnik vedno poln, vzdušje pa sproščeno.",
    pains: [
      "V wellness in masažni dejavnosti redko gre za en sam obisk — učinek pride s serijo obravnav. A stranke pogosto odnehajo prej, ker pozabijo naročiti naslednji termin ali izgubijo ritem. Vsaka prekinjena serija pomeni slabši rezultat za stranko in izgubljen prihodek za vas.",
      "Hkrati je vzdušje del storitve — sproščeno in umirjeno. Hladno, robotsko sporočilo zna pokvariti prav ta vtis. Jedro+ pošilja nežne opomnike v tonu, ki ustreza vašemu studiu, in poskrbi, da je urnik poln, ne da bi morali ves čas pisati ročno.",
    ],
    list: [
      { b: "Serije in paketi", rest: " — povezani termini z enim klikom" },
      { b: "Nežni opomniki", rest: " — v tonu, ki ustreza vaši storitvi" },
      { b: "Ponovni obiski", rest: " — samodejna povabila neaktivnim strankam" },
    ],
    useCasesHead: "Kje Jedro+ največ pomaga",
    useCases: [
      { title: "Prekinjene serije", text: "Po vsaki obravnavi sistem predlaga naslednji termin ob pravem času, da stranka ne izgubi ritma in dokonča paket." },
      { title: "Neaktivne stranke", text: "Kdor dolgo ni bil na obisku, prejme nežno povabilo nazaj — prilagojeno sezoni ali njegovi zadnji obravnavi." },
      { title: "Paketi in večkratni obiski", text: "Več obravnav rezervirate naenkrat, sistem pa spremlja, koliko jih je še na voljo." },
      { title: "Naročanje brez motenj", text: "Stranka rezervira prek povezave, vi pa med obravnavo niste prekinjeni s telefonom." },
    ],
    msgHead: "Tako zveni opomnik iz vašega studia",
    messages: [
      { dir: "out", text: "Pozdravljeni, Eva 🌿 Jutri ob 17:00 vas čaka sproščujoča masaža. Pridite par minut prej, da se umirite ob čaju. Se vidiva!" },
      { dir: "out", text: "Lep pozdrav, Nina! Za najboljši učinek priporočamo naslednjo obravnavo v tem tednu. Želite, da vam rezerviramo termin? 💆" },
      { dir: "in", text: "Ja, prosim, kar v petek popoldne 🙏" },
    ],
    cards: [
      { title: "Paketni termini", text: "Več obravnav rezerviranih naenkrat." },
      { title: "Predlog naslednjega obiska", text: "Sistem predlaga termin ob pravem času." },
      { title: "Zgodovina obravnav", text: "Pregled napredka vsake stranke." },
    ],
    whyTitle: "Zakaj wellness studii izberejo Jedro+",
    whyLead: "Wellness in masažni studii živijo od ponovnih obiskov in mirnega vzdušja. Jedro+ ohranja oboje: poln urnik s pravočasnimi povabili in nežna komunikacija v vašem tonu — vse samodejno, da se lahko posvetite obravnavi.",
    whyList: [
      { b: "Več dokončanih serij", rest: " — predlogi za naslednji termin ob pravem času." },
      { b: "Nežna komunikacija", rest: " — sporočila v tonu, ki ohranja vzdušje studia." },
      { b: "Poln urnik", rest: " — neaktivne stranke se vračajo brez vašega klicanja." },
      { b: "Manj motenj", rest: " — naročanje teče prek povezave, ne med obravnavo." },
    ],
    faq: [
      {
        q: "Ali lahko rezerviram serijo ali paket terminov naenkrat?",
        a: "Da. Jedro+ poveže ponavljajoče se in paketne termine z enim klikom, tako da je celotna serija obravnav rezervirana naenkrat.",
      },
      {
        q: "Ali so opomniki prilagojeni vrsti obravnave?",
        a: "Da. Jedro+ pošlje nežne opomnike v tonu, ki ustreza vaši storitvi, da se stranke počutijo sproščeno in se rade vračajo.",
      },
      {
        q: "Ali Jedro+ povabi nazaj stranke, ki dolgo niso bile na obisku?",
        a: "Da. Sistem samodejno prepozna neaktivne stranke in jim pošlje nežno povabilo k ponovnemu obisku, da ostane urnik poln.",
      },
    ],
  },
  fitnes: {
    title: "Fitnes, joga, pilates & osebni trenerji",
    heroTag: "FOTO — fitnes / joga studio",
    mediaTag: "FOTO — skupinska vadba / osebni trening",
    heroSub:
      "Skupinske vadbe in individualni treningi — vse pregledno na enem mestu.",
    lead: "Od individualnih treningov do skupinskih vadb in paketov — Jedro+ obvešča člane o terminih, sprejema prijave prek povezave in vabi nazaj tiste, ki dolgo niso prišli. Manj usklajevanja po telefonu in v sporočilih, več zapolnjenih terminov.",
    pains: [
      "V fitnesu in skupinskih vadbah se urnik spreminja iz tedna v teden, člani pa se prijavljajo v zadnjem trenutku — pogosto prek sporočil, ki jih morate ročno usklajevati. Ko se nekdo ne pojavi na rezerviranem mestu, ostane vadba polovično prazna, prijava pa je nekoga drugega odvrnila.",
      "Druga tiha izguba so člani, ki počasi izginejo. Redko nehajo zavestno — preprosto izpustijo en teden, nato dva, in se ne vrnejo. Jedro+ jih pravočasno opomni in povabi nazaj, preden ritem treninga dokončno prekinejo.",
    ],
    list: [
      { b: "Skupinski termini", rest: " — prijave na vadbe na enem mestu" },
      { b: "Opomniki za trening", rest: " — člani ne pozabijo na rezervirano vadbo" },
      { b: "Reaktivacija članov", rest: " — povabila za vrnitev neaktivnih" },
    ],
    useCasesHead: "Kje Jedro+ največ pripomore",
    useCases: [
      { title: "Prazna mesta na vadbi", text: "Prijavljeni dobijo opomnik pred terminom, zato manj ljudi zamudi rezervirano mesto na skupinski vadbi." },
      { title: "Člani, ki izginejo", text: "Kdor dolgo ni prišel, prejme spodbudno povabilo nazaj, preden ritem treninga dokončno prekine." },
      { title: "Prijave prek sporočil", text: "Namesto usklajevanja po telefonu se člani prijavijo sami prek povezave, vi pa vidite, kdo pride." },
      { title: "Individualni treningi", text: "Osebni trenerji enostavno vodijo termine s strankami in jih pravočasno opomnijo." },
    ],
    msgHead: "Tako zveni opomnik iz vašega studia",
    messages: [
      { dir: "out", text: "Živjo, Luka! 💪 Jutri ob 18:00 te čaka skupinska vadba. Vidimo se — ne pozabi vode in brisače!" },
      { dir: "out", text: "Hej, Sara! Te ni bilo že kar nekaj časa 😊 Ta teden imamo prosta mesta v jutranji jogi — se nam pridružiš? Klik in si notri." },
      { dir: "in", text: "O ja, hvala za pomik! Prijavim se za sredo 🧘" },
    ],
    cards: [
      { title: "Urnik vadb", text: "Termini, kapacitete in prijave na enem mestu." },
      { title: "Skupinske prijave", text: "Člani izberejo vadbo in prost termin sami." },
      { title: "Opomniki za vadbo", text: "Samodejna obvestila pred treningom." },
    ],
    whyTitle: "Zakaj fitnesi in trenerji izberejo Jedro+",
    whyLead: "V fitnesu zmaga tisti, ki obdrži člane v ritmu. Jedro+ poskrbi za prijave, opomnike pred vadbo in povabila neaktivnim — samodejno, da več časa preživite na parketu in manj v usklajevanju sporočil.",
    whyList: [
      { b: "Manj zamujenih mest", rest: " — opomniki pred vsako vadbo." },
      { b: "Manj telefoniranja", rest: " — člani se prijavijo sami prek povezave." },
      { b: "Vrnjeni člani", rest: " — neaktivni dobijo pravočasno povabilo nazaj." },
      { b: "Pregled obiska", rest: " — vidite, kdo pride in kako poln je termin." },
    ],
    faq: [
      {
        q: "Ali se člani lahko sami prijavijo na skupinske vadbe?",
        a: "Da. Člani se prek povezave prijavijo sami, sistem pa vodi pregled prijav za vsak termin.",
      },
      {
        q: "Ali Jedro+ obvešča o prostih mestih na vadbah?",
        a: "Da. Sistem prikazuje proste in zasedene termine, tako da imate vi in vaši člani vedno pregled nad razpoložljivimi mesti.",
      },
      {
        q: "Ali lahko povabim nazaj neaktivne člane?",
        a: "Da. Jedro+ samodejno prepozna člane, ki dolgo niso bili na vadbi, in jim pošlje povabilo k vrnitvi.",
      },
    ],
  },
  avtoservisi: {
    title: "Avtoservisi, vulkanizerji & čistilni servisi",
    heroTag: "FOTO — avtoservis / delavnica",
    mediaTag: "FOTO — mehanik pri delu / vulkanizerstvo",
    heroSub:
      "Stranke veste, kdaj na servis in kdaj po vozilo — brez nepotrebnih klicev.",
    lead: "Jedro+ pošlje opomnik, ko se bliža čas za servis ali menjavo pnevmatik, in samodejno obvesti stranko, ko je vozilo pripravljeno za prevzem. Manj telefoniranja, urejen razpored dela in zadovoljne stranke, ki se vračajo.",
    pains: [
      "V avtoservisu in vulkanizerstvu se dan deli med delo pod pokrovom in telefon, ki ne neha zvoniti — kdaj je avto gotov, ali je še kak prost termin, kdaj zamenjati gume. Vsak tak klic vas odtrga od dela, marsikateri pa pride ravno takrat, ko imate roke umazane.",
      "Hkrati so vaše storitve sezonske in predvidljive: menjava gum spomladi in jeseni, servis na določene kilometre. Stranke to pogosto odlašajo, dokler ni nujno, in takrat se gnetejo vse naenkrat. Jedro+ jih opomni ob pravem času in razporedi obisk, da je delo bolj enakomerno.",
    ],
    list: [
      { b: "Opomniki za servis", rest: " — ob pravem času, samodejno" },
      { b: "Obvestilo o prevzemu", rest: " — ko je vozilo pripravljeno" },
      { b: "Urejen razpored", rest: " — pregled dela po dnevih in terminih" },
    ],
    useCasesHead: "Kje Jedro+ največ pripomore",
    useCases: [
      { title: "Telefon, ki ne neha", text: "Stranke se na termin naročijo prek povezave in same izvedo, kdaj je vozilo gotovo — manj klicev med delom." },
      { title: "Sezonske konice", text: "Pred menjavo gum sistem sam opomni stranke, da razporedijo obisk, namesto da pridejo vsi hkrati." },
      { title: "Odloženi servisi", text: "Ko se po času ali kilometrih bliža naslednji servis, stranka prejme opomnik in se naroči pravočasno." },
      { title: "Prevzem vozila", text: "Ko je avto pripravljen, gre obvestilo samodejno — brez klicanja in čakanja na dvorišču." },
    ],
    msgHead: "Tako zveni obvestilo iz vašega servisa",
    messages: [
      { dir: "out", text: "Pozdravljeni, g. Horvat. Vaš Golf je servisiran in pripravljen za prevzem. Odprti smo do 17:00. Lep pozdrav, ekipa servisa! 🔧" },
      { dir: "out", text: "Spoštovani, bliža se čas za menjavo letnih gum 🛞 Imamo proste termine prihodnji teden — želite, da vam enega rezerviramo?" },
      { dir: "in", text: "Ja, lahko v torek dopoldne? Hvala!" },
    ],
    cards: [
      { title: "Naročanje na termin", text: "Stranka izbere prost termin sama." },
      { title: "Sezonski opomniki", text: "Zimske/letne gume ob pravem času." },
      { title: "Zgodovina vozila", text: "Pregled opravljenih storitev." },
    ],
    whyTitle: "Zakaj avtoservisi izberejo Jedro+",
    whyLead: "V avtoservisu je čas denar — vsak nepotreben klic in vsak slabo razporejen dan se pozna. Jedro+ prevzame naročanje, opomnike in obvestila o prevzemu, da se ekipa posveti vozilom, ne telefonu.",
    whyList: [
      { b: "Manj klicev", rest: " — naročanje in obvestila tečejo sama." },
      { b: "Enakomeren razpored", rest: " — sezonski opomniki razbremenijo konice." },
      { b: "Zvestejše stranke", rest: " — pravočasen opomnik za servis jih pripelje nazaj." },
      { b: "Pregled vozil", rest: " — zgodovina storitev vsakega vozila na enem mestu." },
    ],
    faq: [
      {
        q: "Ali Jedro+ pošlje opomnik za sezonski servis ali menjavo gum?",
        a: "Da. Sistem samodejno pošlje opomnik, ko se bliža čas za servis ali menjavo pnevmatik, ob pravem času za vsako stranko.",
      },
      {
        q: "Kako stranka izve, da je vozilo pripravljeno za prevzem?",
        a: "Jedro+ samodejno obvesti stranko, ko je vozilo pripravljeno, brez nepotrebnih klicev. Manj telefoniranja, bolj zadovoljne stranke.",
      },
      {
        q: "Ali se stranke lahko same naročijo na termin?",
        a: "Da. Stranka prek spleta izbere prost termin sama, vi pa imate urejen razpored dela po dnevih in terminih.",
      },
    ],
  },
  coaching: {
    title: "Svetovanje, coaching & terapija",
    heroTag: "FOTO — svetovalni / coaching prostor",
    mediaTag: "FOTO — svetovalni pogovor / terapija",
    heroSub:
      "Diskretna, zanesljiva komunikacija, da se lahko posvetite svojim strankam.",
    lead: "Vaše delo zahteva zaupanje in zanesljivost. Jedro+ pošlje diskretne opomnike, vodi ponavljajoče se termine in vam pomaga slediti napredku strank — da se lahko v celoti posvetite pogovoru, ne organizaciji.",
    pains: [
      "V coachingu, svetovanju in terapiji temelji vse na zaupanju — in prav zato je komunikacija občutljiva. Sporočilo, ki na zaslonu razkrije preveč, lahko stranko spravi v nelagodje. Hkrati pa pozabljeni in odpovedani termini bolj kot kjer koli prekinejo proces, ki ga skupaj gradita.",
      "Veliko dela poteka v rednih, ponavljajočih se srečanjih, ki jih je treba usklajevati, beležiti in spremljati. Ko to počnete ročno, vam organizacija jemlje energijo, ki bi morala iti v pogovor. Jedro+ poskrbi za diskretne opomnike in urejene termine, da se lahko posvetite stranki.",
    ],
    list: [
      { b: "Diskretni opomniki", rest: " — brez izpostavljanja vsebine" },
      { b: "Ponavljajoči termini", rest: " — tedenska ali mesečna srečanja" },
      { b: "Sledenje napredku", rest: " — opombe in pregled obiskov" },
    ],
    useCasesHead: "Kje Jedro+ največ pomaga",
    useCases: [
      { title: "Občutljiva komunikacija", text: "Opomniki so diskretni in ne razkrivajo vsebine srečanja — stranka dobi le, kar potrebuje, brez nelagodja." },
      { title: "Redna srečanja", text: "Tedenske ali mesečne termine nastavite enkrat, sistem pa pošilja opomnike za vsak naslednji." },
      { title: "Prekinjen proces", text: "Pravočasen opomnik zmanjša odpovedi in pozabljena srečanja, ki bi prekinila skupno delo." },
      { title: "Nove stranke", text: "Spletno naročanje sprejme prvi termin, ne da bi morali usklajevati po e-pošti." },
    ],
    msgHead: "Tako zveni opomnik iz vaše prakse",
    messages: [
      { dir: "out", text: "Pozdravljeni, jutri ob 10:00 imava dogovorjeno srečanje. Veselim se pogovora — če bi termin radi premaknili, mi le pišite. 🙂" },
      { dir: "out", text: "Lep pozdrav! Pred najinim naslednjim srečanjem razmislite, kako je potekal teden glede ciljev, o katerih sva govorila. Se vidiva v sredo." },
      { dir: "in", text: "Hvala, se že veselim. Pridem ob dogovorjeni uri." },
    ],
    cards: [
      { title: "Zasebne opombe", text: "Varno shranjene beležke o vsaki stranki." },
      { title: "Stalni termini", text: "Ponavljajoča srečanja z enim klikom." },
      { title: "Spletno naročanje", text: "Nove stranke rezervirajo same." },
    ],
    whyTitle: "Zakaj coachi in terapevti izberejo Jedro+",
    whyLead: "Vaše delo zahteva zaupanje, diskretnost in zanesljiv ritem srečanj. Jedro+ poskrbi za vse troje: opomniki ne razkrivajo vsebine, ponavljajoči termini tečejo sami, opombe pa so varno shranjene — da vsa vaša pozornost ostane pri stranki.",
    whyList: [
      { b: "Diskretno", rest: " — opomniki brez izpostavljanja vsebine srečanja." },
      { b: "Reden ritem", rest: " — ponavljajoči termini z manj odpovedmi." },
      { b: "Varne opombe", rest: " — zgodovina in beležke o vsaki stranki na varnem." },
      { b: "Manj organizacije", rest: " — naročanje in opomniki tečejo samodejno." },
    ],
    faq: [
      {
        q: "So opomniki diskretni in brez razkrivanja vsebine?",
        a: "Da. Jedro+ pošlje diskretne opomnike brez izpostavljanja vsebine srečanja, kar ohranja zaupnost in profesionalnost.",
      },
      {
        q: "Ali lahko vodim ponavljajoče se termine?",
        a: "Da. Tedenska ali mesečna srečanja nastavite z enim klikom kot stalne, ponavljajoče se termine.",
      },
      {
        q: "Kako so shranjene opombe o strankah?",
        a: "Zasebne opombe in beležke o vsaki stranki so varno shranjene na enem mestu, dostop pa je omejen.",
      },
    ],
  },
  "poslovne-storitve": {
    title: "IT, poslovne storitve & agencije",
    heroTag: "FOTO — pisarna / agencija",
    mediaTag: "FOTO — sestanek / delo v agenciji",
    heroSub:
      "Sestanki in onboarding strank tečejo sami, vi pa se posvetite projektom.",
    lead: "Jedro+ poskrbi za rezervacije sestankov, onboarding novih strank in samodejno komunikacijo — brez ročnega usklajevanja terminov po e-pošti. Več časa za delo, manj administracije.",
    pains: [
      "V agencijah in poslovnih storitvah je največji sovražnik usklajevanje terminov: pet e-poštnih sporočil za en sestanek, premiki, prekrivanja in dragoceni minuti, ki gredo v koordinacijo namesto v delo za stranko. Bolj ko ekipa raste, bolj se ta kaos množi.",
      "Tudi prvi vtis šteje: ko se nova stranka vključuje, pričakuje urejen, profesionalen proces. Ročno pošiljanje navodil in potrditev je počasno in nedosledno. Jedro+ poskrbi, da rezervacije, potrditve in koraki uvajanja tečejo sami in vedno enako kakovostno.",
    ],
    list: [
      { b: "Rezervacije sestankov", rest: " — stranka izbere termin sama" },
      { b: "Onboarding strank", rest: " — samodejni koraki in obvestila" },
      { b: "Brez ročnega dela", rest: " — komunikacija teče samodejno" },
    ],
    useCasesHead: "Kje Jedro+ največ pripomore",
    useCases: [
      { title: "Usklajevanje sestankov", text: "Stranka prek povezave izbere prost termin v vašem koledarju — brez e-poštnega pisanja sem in tja." },
      { title: "Uvajanje novih strank", text: "Po podpisu samodejno stečejo prvi koraki in obvestila, da ima stranka takoj urejen, profesionalen občutek." },
      { title: "Pozabljeni sestanki", text: "Opomnik pred terminom zmanjša odpovedi in prazne termine v zasedenem urniku." },
      { title: "Razpršeni kontakti", text: "Vsi stiki in zgodovina sodelovanja so na enem mestu, dostopni vsej ekipi." },
    ],
    msgHead: "Tako zveni sporočilo iz vaše agencije",
    messages: [
      { dir: "out", text: "Pozdravljeni, ga. Zupan. Potrjujemo sestanek jutri ob 11:00 prek videoklica. Povezavo prilagamo spodaj. Se slišimo!" },
      { dir: "out", text: "Dober dan in dobrodošli! Da bo začetek gladek, smo pripravili kratka navodila za prvi korak. Za vprašanja smo vam na voljo. 🙌" },
      { dir: "in", text: "Najlepša hvala, vse je jasno. Se vidimo na sestanku." },
    ],
    cards: [
      { title: "Koledar sestankov", text: "Povezava za rezervacijo prostega termina." },
      { title: "Samodejna sporočila", text: "Potrditve in opomniki brez vašega dela." },
      { title: "Baza strank", text: "Vsi kontakti in zgodovina na enem mestu." },
    ],
    whyTitle: "Zakaj agencije izberejo Jedro+",
    whyLead: "V poslovnih storitvah se vsaka ura usklajevanja pozna na dobičku. Jedro+ prevzame rezervacije, potrditve in uvajanje strank, da ekipa namesto koordinacije dela tisto, za kar so vas najeli.",
    whyList: [
      { b: "Manj usklajevanja", rest: " — stranke same izberejo prost termin." },
      { b: "Profesionalen onboarding", rest: " — prvi koraki tečejo dosledno in samodejno." },
      { b: "Manj odpovedi", rest: " — opomniki pred sestanki v zasedenem urniku." },
      { b: "Urejena baza", rest: " — kontakti in zgodovina, dostopni vsej ekipi." },
    ],
    faq: [
      {
        q: "Ali se stranke lahko same naročijo na sestanek?",
        a: "Da. Prek povezave za rezervacijo stranka izbere prost termin sama, brez ročnega usklajevanja po e-pošti.",
      },
      {
        q: "Ali Jedro+ avtomatizira onboarding novih strank?",
        a: "Da. Sistem vodi samodejne korake in obvestila ob uvajanju novih strank, tako da nič ne pade skozi.",
      },
      {
        q: "Ali so potrditve in opomniki samodejni?",
        a: "Da. Potrditve in opomniki za sestanke se pošljejo samodejno, vi pa imate vse kontakte in zgodovino na enem mestu.",
      },
    ],
  },
  ostalo: {
    title: "Ostala storitvena podjetja",
    heroTag: "FOTO — storitvena dejavnost",
    mediaTag: "FOTO — vaša dejavnost",
    heroSub:
      "Če delate s termini in strankami, Jedro+ dela za vas — postavimo ga po vaši meri.",
    lead: "Ne glede na panogo: če delate s termini in strankami, Jedro+ poskrbi za naročanje, opomnike, spletno rezervacijo in komunikacijo. Povejte nam, kako delate, in pripravimo postavitev po meri vaše dejavnosti.",
    pains: [
      "Vsaka storitvena dejavnost ima svoje posebnosti, a težave so pogosto enake: termini, ki se prekrivajo ali pozabijo, stranke, ki se ne vračajo, in komunikacija, ki vam jemlje ure vsak teden. Če delate s termini in ljudmi, verjetno poznate vsaj eno od teh.",
      "Jedro+ ni vezan na eno panogo — postavimo ga po tem, kako delate vi. Povejte nam svoj potek dela, mi pa nastavimo storitve, urnik in sporočila tako, da sistem od prvega dne dela za vas, ne obratno.",
    ],
    list: [
      { b: "Prilagodljivo", rest: " — postavitev po meri vaše dejavnosti" },
      { b: "Vse na enem mestu", rest: " — termini, stranke, opomniki, naročanje" },
      { b: "Podpora pri zagonu", rest: " — pomagamo vam začeti" },
    ],
    useCasesHead: "Kje Jedro+ pomaga ne glede na panogo",
    useCases: [
      { title: "Pozabljeni termini", text: "Samodejni opomniki pred obiskom zmanjšajo odpovedi v vsaki dejavnosti, kjer šteje točen čas." },
      { title: "Stranke, ki ne pridejo nazaj", text: "Sistem ob pravem času pošlje povabilo k ponovnemu obisku, da ostanete v stiku." },
      { title: "Naročanje 24/7", text: "Stranke rezervirajo same prek povezave, tudi ko vi ne morete k telefonu." },
      { title: "Postavitev po meri", text: "Vaše storitve in vaš ton sporočil nastavimo tako, da ustrezajo prav vaši dejavnosti." },
    ],
    msgHead: "Tako zveni opomnik iz vašega podjetja",
    messages: [
      { dir: "out", text: "Pozdravljeni! Spomnimo vas na jutrišnji termin ob 13:00. Če kaj ne uspe, nam le sporočite. Se vidimo! 🙂" },
      { dir: "out", text: "Lep pozdrav! Že nekaj časa vas nismo videli — z veseljem vam pripravimo nov termin, ko vam ustreza. Kar javite se." },
      { dir: "in", text: "Hvala za opomnik, naročim se kar za petek." },
    ],
    cards: [
      { title: "Prilagojen urnik", text: "Termini in storitve po vaši logiki." },
      { title: "Spletno naročanje", text: "Stranke rezervirajo same, 24/7." },
      { title: "Opomniki", text: "Samodejna obvestila pred terminom." },
    ],
    whyTitle: "Zakaj storitvena podjetja izberejo Jedro+",
    whyLead: "Ne glede na panogo: če delate s termini in strankami, Jedro+ poskrbi za naročanje, opomnike in ponovne obiske. Postavitev prilagodimo vaši dejavnosti, pri zagonu pa vam pomagamo, da sistem hitro zaživi.",
    whyList: [
      { b: "Za vsako panogo", rest: " — postavitev po meri vašega poteka dela." },
      { b: "Vse na enem mestu", rest: " — termini, stranke, opomniki in naročanje." },
      { b: "Manj odpovedi", rest: " — pravočasni opomniki v vsaki dejavnosti." },
      { b: "Podpora pri zagonu", rest: " — pomagamo vam začeti in nastaviti sistem." },
    ],
    faq: [
      {
        q: "Deluje Jedro+ tudi za mojo panogo?",
        a: "Da. Če delate s termini in strankami, Jedro+ dela za vas — postavitev prilagodimo po meri vaše dejavnosti.",
      },
      {
        q: "Ali lahko prilagodite sistem mojemu načinu dela?",
        a: "Da. Termini in storitve se nastavijo po vaši logiki, postavitev pa pripravimo glede na to, kako delate.",
      },
      {
        q: "Ali dobim pomoč pri zagonu?",
        a: "Da. Pomagamo vam začeti — pri uvozu strank in nastavitvi ključnih funkcij, da hitro steče.",
      },
    ],
  },
};

export const panogeSlugs = Object.keys(panoge);
