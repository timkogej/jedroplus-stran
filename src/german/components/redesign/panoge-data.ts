// Generated from Slovenian source and src/locales/de.json.
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
  "friseursalons": {
    title: "Friseur-, Kosmetik- und Barbersalons",
    heroTag: "FOTO — Gesamtansicht eines Friseur- oder Barbersalons",
    mediaTag: "FOTO — Kundenbetreuung im Friseursalon",
    heroSub:
      "Jedro+ übernimmt Buchungen und Erinnerungen, damit du dich auf die Person im Friseurstuhl konzentrieren kannst.",
    lead: "Jeder freie Termin kostet deinen Salon Umsatz. Jedro+ sendet rechtzeitig Erinnerungen in deinem Ton, lädt inaktive Kunden wieder ein und ermöglicht Onlinebuchungen rund um die Uhr, ohne dass du Nachrichten manuell beantworten musst.",
    pains: [
      "Im Salon dreht sich alles um den Friseurstuhl, doch Anrufe unterbrechen das Färben und Schneiden. Jemand möchte einen Termin verschieben, jemand fragt nach einem Preis und ein versäumter Termin hinterlässt eine Stunde, die sich kurzfristig kaum füllen lässt.",
      "Salonkunden kommen in regelmäßigen Abständen: alle vier bis sechs Wochen zum Schneiden, alle drei Wochen zum Auffrischen der Farbe. Wird dieser Rhythmus unterbrochen, haben sie oft einfach vergessen, erneut zu buchen. Jedro+ hilft ihnen, dranzubleiben.",
    ],
    list: [
      { b: "Weniger Absagen", rest: " — rechtzeitige Erinnerungen reduzieren versäumte Termine" },
      { b: "Mehr Folgebesuche", rest: " — automatische Nachrichten nach einer Behandlung" },
      { b: "Onlinebuchung", rest: " — in deinen Farben, ganz ohne Programmieren" },
    ],
    useCasesHead: "Vier Probleme einfacher lösen",
    useCases: [
      { title: "Lücken im Tagesplan", text: "Kunden erhalten am Vortag und am Morgen ihres Termins eine Erinnerung. Weniger vergessene Besuche bedeuten weniger Stunden mit einem leeren Friseurstuhl." },
      { title: "Kunden, die „bald buchen“ wollen", text: "Jedro+ erkennt, wenn jemand seit sieben Wochen nicht mehr da war, und sendet eine freundliche Einladung. Fülle ruhigere Zeiten unter der Woche, ohne anzurufen." },
      { title: "Anrufe während der Arbeit", text: "Die Onlinebuchung nimmt Reservierungen entgegen, während du Haare schneidest. Kunden wählen Friseur, Leistung und Termin. Du erhältst einen geordneten Kalender statt verpasster Anrufe." },
      { title: "Mehrere Friseure, ein Kalender", text: "Jedes Teammitglied hat eigene Arbeitszeiten, Pausen und Leistungen. Termine überschneiden sich nicht und Kunden sehen nur tatsächlich freie Zeiten." },
    ],
    msgHead: "Eine Erinnerung von deinem Salon",
    messages: [
      { dir: "out", text: "Hallo Maja! ✂️ Ihr Termin zum Färben und Föhnen bei Nika ist morgen um 16:00 Uhr. Schreiben Sie uns, falls sich etwas ändert. Ansonsten freuen wir uns auf Sie! 💜" },
      { dir: "out", text: "Hallo Tina! Ihr letzter Haarschnitt ist schon sechs Wochen her 😊 Am Donnerstagvormittag haben wir einen freien Termin. Dürfen wir ihn für Sie reservieren? Mit einem Klick ist alles erledigt." },
      { dir: "in", text: "Ja, gerne! Danke für die Erinnerung 🙏" },
    ],
    cards: [
      { title: "Intelligente Terminplanung", text: "Termine, Pausen und mehrere Friseure an einem Ort." },
      { title: "Kundendatenbank", text: "Besuchshistorie, Haarfarben und Vorlieben jedes Kunden." },
      { title: "Automatische Erinnerungen", text: "SMS oder E-Mail vor dem Termin, automatisch versendet." },
    ],
    whyTitle: "Warum Friseursalons Jedro+ wählen",
    whyLead: "Jedro+ wird auf die Leistungen, Friseure und den Ton deines Salons abgestimmt. Danach werden Erinnerungen, Bestätigungen und Einladungen zum Wiederkommen automatisch versendet und sparen dir Zeit.",
    whyList: [
      { b: "Für dich eingerichtet", rest: " — wir übernehmen Leistungen, Preise und Team, damit du sofort Buchungen annehmen kannst." },
      { b: "Nachrichten in deinem Ton", rest: " — herzlich und persönlich, damit Kunden deinen Salon wiedererkennen." },
      { b: "Alles an einem Ort", rest: " — Arbeitszeiten, Kundenprofile mit Farbhistorie und Vorlieben sowie Erinnerungen." },
      { b: "Ohne langfristige Bindung", rest: " — kostenlos testen und die Wirkung schon bei den ersten Terminen erleben." },
    ],
    faq: [
      {
        q: "Können Kunden selbst online buchen?",
        a: "Ja. Jedro+ bietet Onlinebuchungen rund um die Uhr in deinen Farben und mit deinem Logo, ganz ohne Programmieren. Kunden buchen jederzeit und du musst Buchungsnachrichten nicht mehr einzeln beantworten.",
      },
      {
        q: "Wie reduziert Jedro+ Absagen und versäumte Termine?",
        a: "Das System sendet rechtzeitig vor Terminen SMS- oder E-Mail-Erinnerungen und hilft so, vergessene Besuche und Absagen zu reduzieren.",
      },
      {
        q: "Kann ich die Arbeitszeiten mehrerer Friseure verwalten?",
        a: "Ja. Die intelligente Terminplanung vereint Termine, Pausen und mehrere Friseure in einer Übersicht über den gesamten Salon.",
      },
      {
        q: "Speichert Jedro+ die Historie und Vorlieben der Kunden?",
        a: "Ja. Kundenprofile speichern die Besuchshistorie, verwendete Farben und Vorlieben, damit du jede Leistung individuell abstimmen kannst.",
      },
    ],
  },
  "praxen": {
    title: "Zahn-, Ästhetik- und medizinische Kliniken",
    heroTag: "FOTO — helle Zahn- oder Ästhetikpraxis",
    mediaTag: "FOTO — Empfang und Behandlung in einer Praxis",
    heroSub:
      "Jeder Patient erhält vor und nach der Behandlung die richtigen Hinweise, während du alle Termine im Blick behältst.",
    lead: "Rechtzeitige Hinweise vor und nach der Behandlung schaffen Vertrauen und einen professionellen Eindruck. Sieh Termine, Status und Besuchshistorie ein, ohne verlorene Unterlagen oder doppelte Einträge.",
    pains: [
      "In einer Praxis zählt jedes Detail, von der Vorbereitung bis zur Nachsorge. Mündliche Hinweise oder manuell versendete Nachrichten können untergehen. Patienten erscheinen unvorbereitet, Behandlungen verzögern sich oder müssen verschoben werden und das Erlebnis leidet.",
      "Kurzfristige Absagen sind für Praxen besonders teuer: lange Termine, reservierte Geräte und vorbereitetes Personal. Jedro+ erinnert Patienten rechtzeitig und gibt passende Hinweise weiter, damit sie vorbereitet und pünktlich erscheinen.",
    ],
    list: [
      { b: "Hinweise vor der Behandlung", rest: " — automatisch für jede Leistung" },
      { b: "Nachsorge", rest: " — Vertrauen schaffen und professionell auftreten" },
      { b: "Übersichtliches CRM", rest: " — Patientenhistorie, Notizen und Vorlieben" },
    ],
    useCasesHead: "Wo Jedro+ besonders hilft",
    useCases: [
      { title: "Vorbereitung auf die Behandlung", text: "Patienten erhalten automatisch Hinweise zu ihrer Behandlung, einschließlich dessen, was sie vorher tun oder vermeiden sollten. Weniger Behandlungen müssen wegen fehlender Vorbereitung verschoben werden." },
      { title: "Nachsorge nach dem Besuch", text: "Die Praxis sendet Pflegeempfehlungen und informiert Patienten über anstehende Kontrolltermine. Patienten fühlen sich betreut und gewinnen Vertrauen." },
      { title: "Teure Absagen", text: "Rechtzeitige Erinnerungen reduzieren kurzfristige Absagen, wenn Personal und Geräte bereits vorbereitet sind." },
      { title: "Verstreute Unterlagen", text: "Besuchshistorie, Notizen und empfohlene Kontrolltermine bleiben an einem Ort, ohne Akten zu durchsuchen oder Einträge doppelt anzulegen." },
    ],
    msgHead: "Eine Nachricht von deiner Praxis",
    messages: [
      { dir: "out", text: "Sehr geehrter Herr Novak, Ihr Termin zur Zahnaufhellung ist morgen um 9:00 Uhr. Bitte verzichten Sie in den 2 Stunden davor auf färbende Lebensmittel und Kaffee. Wir freuen uns auf Sie!" },
      { dir: "out", text: "Guten Tag, Frau Kos. Nach der heutigen Behandlung empfehlen wir Ihnen für 48 Stunden kalte Umschläge und Ruhe. Bei Fragen sind wir gerne für Sie da. Gute Erholung! 💙" },
      { dir: "in", text: "Vielen Dank für die Betreuung und die klaren Hinweise." },
    ],
    cards: [
      { title: "Digitale Patientenakten", text: "Patientendaten sicher an einem Ort gespeichert." },
      { title: "Rechtzeitige Erinnerungen", text: "Terminerinnerungen helfen, Absagen und Verspätungen zu reduzieren." },
      { title: "Besuche nachverfolgen", text: "Eine Übersicht über Behandlungen und empfohlene Kontrolltermine." },
    ],
    whyTitle: "Warum Praxen Jedro+ wählen",
    whyLead: "Patienten erwarten Zuverlässigkeit und klare Kommunikation. Jedro+ unterstützt beides, ohne den Empfang zusätzlich zu belasten. Wir richten das System nach deinen Leistungen und Hinweisen ein. Danach laufen Erinnerungen und Nachrichten vor und nach Behandlungen automatisch.",
    whyList: [
      { b: "Weniger Absagen", rest: " — rechtzeitige Erinnerungen reduzieren versäumte, umsatzstarke Termine." },
      { b: "Ein professioneller Eindruck", rest: " — Patienten erhalten bei jedem Schritt die richtigen Hinweise." },
      { b: "Sichere Daten", rest: " — Patientenhistorie und Notizen übersichtlich an einem Ort." },
      { b: "Weniger Arbeit am Empfang", rest: " — Nachrichten und Erinnerungen werden automatisch versendet." },
    ],
    faq: [
      {
        q: "Sendet Jedro+ automatisch Hinweise zur Vorbereitung und Nachsorge?",
        a: "Ja. Patienten erhalten automatisch rechtzeitige Hinweise vor und nach ihrer Behandlung, passend zur jeweiligen Leistung. Das schafft Vertrauen und einen professionellen Eindruck.",
      },
      {
        q: "Wie werden Patientendaten gespeichert?",
        a: "Patientendaten werden sicher in digitalen Akten an einem Ort gespeichert, ohne verlorene Unterlagen oder doppelte Einträge. Der Zugriff ist beschränkt und DSGVO-konform.",
      },
      {
        q: "Hilft das System, Absagen zu reduzieren?",
        a: "Ja. Automatische Erinnerungen informieren Patienten rechtzeitig und helfen, Absagen und Verspätungen zu reduzieren.",
      },
    ],
  },
  wellness: {
    title: "Massage- und Wellnessstudios, Physiotherapie",
    heroTag: "FOTO — ruhiges Wellness- oder Massagestudio",
    mediaTag: "FOTO — Massage oder physiotherapeutische Behandlung",
    heroSub:
      "Von einzelnen Behandlungen bis zu Serien und Paketen verbindet Jedro+ alles in einem ruhigen, geordneten Terminplan.",
    lead: "Viele Leistungen werden als Serie oder Paket angeboten. Jedro+ verbindet wiederkehrende Termine, sendet dezente Erinnerungen und lädt inaktive Kunden erneut ein. So bleibt dein Kalender gefüllt und die Atmosphäre entspannt.",
    pains: [
      "Bei Wellness und Massage kommt es oft auf eine Behandlungsserie an. Kunden brechen sie manchmal vorzeitig ab, weil sie die nächste Buchung vergessen oder ihre Routine verlieren. Eine unterbrochene Serie kann schwächere Ergebnisse für den Kunden und weniger Umsatz für dich bedeuten.",
      "Eine ruhige, entspannende Atmosphäre gehört zu deiner Leistung. Jedro+ sendet dezente Erinnerungen im Ton deines Studios, um dieses Gefühl zu bewahren und deinen Kalender ohne ständige manuelle Nachrichten zu füllen.",
    ],
    list: [
      { b: "Serien und Pakete", rest: " — verbundene Termine mit einem Klick" },
      { b: "Dezente Erinnerungen", rest: " — in einem Ton, der zu deiner Leistung passt" },
      { b: "Folgebesuche", rest: " — automatische Einladungen für inaktive Kunden" },
    ],
    useCasesHead: "Wo Jedro+ den Unterschied macht",
    useCases: [
      { title: "Unterbrochene Behandlungsserien", text: "Nach jeder Behandlung schlägt das System zum passenden Zeitpunkt den nächsten Termin vor. So behalten Kunden ihre Routine bei und schließen ihr Paket ab." },
      { title: "Inaktive Kunden", text: "Kunden, die länger nicht da waren, erhalten eine dezente Einladung, abgestimmt auf die Jahreszeit oder ihre letzte Behandlung." },
      { title: "Pakete und wiederholte Besuche", text: "Buche mehrere Behandlungen zusammen. Das System behält im Blick, wie viele noch übrig sind." },
      { title: "Buchungen ohne Unterbrechungen", text: "Kunden buchen über einen Link, während du dich auf ihre Behandlung konzentrierst." },
    ],
    msgHead: "Eine Erinnerung von deinem Studio",
    messages: [
      { dir: "out", text: "Hallo Eva 🌿 Ihre Entspannungsmassage ist morgen um 17:00 Uhr. Kommen Sie ein paar Minuten früher und genießen Sie in Ruhe einen Tee. Wir freuen uns auf Sie!" },
      { dir: "out", text: "Hallo Nina! Für optimale Ergebnisse empfehlen wir Ihnen die nächste Behandlung noch diese Woche. Dürfen wir einen Termin für Sie reservieren? 💆" },
      { dir: "in", text: "Ja, gerne, am Freitagnachmittag 🙏" },
    ],
    cards: [
      { title: "Termine im Paket", text: "Mehrere Behandlungen zusammen buchen." },
      { title: "Vorschlag für den nächsten Besuch", text: "Das System schlägt zum passenden Zeitpunkt eine Buchung vor." },
      { title: "Behandlungshistorie", text: "Den Fortschritt jedes Kunden im Blick behalten." },
    ],
    whyTitle: "Warum Wellnessstudios Jedro+ wählen",
    whyLead: "Wellness- und Massagestudios leben von wiederkehrenden Besuchen und einer ruhigen Atmosphäre. Jedro+ unterstützt beides mit rechtzeitigen Einladungen und dezenter Kommunikation in deinem Ton. Alles automatisch, damit du dich auf Behandlungen konzentrieren kannst.",
    whyList: [
      { b: "Mehr abgeschlossene Behandlungsserien", rest: " — Vorschläge für den nächsten Termin zur richtigen Zeit." },
      { b: "Dezente Kommunikation", rest: " — Nachrichten, die die Atmosphäre deines Studios bewahren." },
      { b: "Ein voller Kalender", rest: " — inaktive Kunden kommen zurück, ohne dass du anrufen musst." },
      { b: "Weniger Unterbrechungen", rest: " — Buchungen über einen Link, während du Behandlungen durchführst." },
    ],
    faq: [
      {
        q: "Kann ich eine Serie oder ein Terminpaket zusammen buchen?",
        a: "Ja. Jedro+ verbindet wiederkehrende Termine und Pakete mit einem Klick, sodass du die gesamte Behandlungsserie zusammen buchen kannst.",
      },
      {
        q: "Sind die Erinnerungen auf die Behandlung abgestimmt?",
        a: "Ja. Jedro+ sendet dezente Erinnerungen in einem Ton, der zu deiner Leistung passt. So fühlen sich Kunden wohl und kommen gerne wieder.",
      },
      {
        q: "Lädt Jedro+ inaktive Kunden erneut ein?",
        a: "Ja. Es erkennt inaktive Kunden automatisch und sendet eine dezente Einladung zum Wiederkommen, damit dein Kalender gefüllt bleibt.",
      },
    ],
  },
  "fitness": {
    title: "Fitness, Yoga, Pilates und Personal Training",
    heroTag: "FOTO — Fitness- oder Yogastudio",
    mediaTag: "FOTO — Gruppenkurs oder Personal Training",
    heroSub:
      "Gruppenkurse und Personal Training in einer klaren Übersicht.",
    lead: "Von Personal Training über Gruppenkurse bis zu Paketen: Jedro+ informiert Mitglieder, nimmt Buchungen über einen Link an und lädt inaktive Mitglieder wieder ein. Weniger Abstimmung per Telefon und Nachricht, mehr belegte Plätze.",
    pains: [
      "Kurspläne ändern sich wöchentlich. Mitglieder buchen oft kurzfristig per Nachricht, die du manuell koordinieren musst. Erscheint jemand nicht, bleibt ein reservierter Platz leer, den jemand anderes hätte buchen können.",
      "Mitglieder, die nach und nach wegbleiben, sind ein weiterer stiller Verlust. Erst fehlt eine Woche, dann zwei, dann kommen sie gar nicht mehr. Jedro+ erinnert sie und lädt sie wieder ein, bevor sie ihre Trainingsroutine verlieren.",
    ],
    list: [
      { b: "Gruppenkurse", rest: " — Kursbuchungen an einem Ort" },
      { b: "Trainingserinnerungen", rest: " — Mitglieder denken an ihre gebuchten Kurse" },
      { b: "Mitglieder zurückgewinnen", rest: " — Einladungen zur Rückkehr für inaktive Mitglieder" },
    ],
    useCasesHead: "Wo Jedro+ besonders hilft",
    useCases: [
      { title: "Leere Kursplätze", text: "Angemeldete Mitglieder erhalten vor dem Kurs eine Erinnerung. So bleiben weniger reservierte Plätze ungenutzt." },
      { title: "Mitglieder, die wegbleiben", text: "Mitglieder, die länger nicht da waren, erhalten eine motivierende Einladung, bevor sie ihre Routine verlieren." },
      { title: "Buchungen per Nachricht", text: "Mitglieder buchen über einen Link. Das spart telefonische Abstimmung und zeigt dir, wer kommt." },
      { title: "Personal Training", text: "Personal Trainer verwalten Kundentermine einfach und senden rechtzeitige Erinnerungen." },
    ],
    msgHead: "Eine Erinnerung von deinem Studio",
    messages: [
      { dir: "out", text: "Hallo Luka! 💪 Ihr Gruppenkurs ist morgen um 18:00 Uhr. Wir freuen uns auf Sie. Denken Sie an Wasser und ein Handtuch!" },
      { dir: "out", text: "Hallo Sara! Wir haben Sie eine Weile nicht gesehen 😊 Diese Woche gibt es freie Plätze beim Morgenyoga. Sind Sie dabei? Mit einem Klick buchen." },
      { dir: "in", text: "Ja, danke für die Erinnerung! Ich buche für Mittwoch 🧘" },
    ],
    cards: [
      { title: "Kursplan", text: "Kurse, Kapazitäten und Buchungen an einem Ort." },
      { title: "Gruppenbuchungen", text: "Mitglieder wählen selbst ihren Kurs und einen freien Platz." },
      { title: "Kurserinnerungen", text: "Automatische Benachrichtigungen vor dem Training." },
    ],
    whyTitle: "Warum Fitnessstudios und Trainer Jedro+ wählen",
    whyLead: "Eine regelmäßige Trainingsroutine ist wichtig. Jedro+ übernimmt Buchungen, Kurserinnerungen und Einladungen für inaktive Mitglieder automatisch. So bleibt dir mehr Zeit fürs Training.",
    whyList: [
      { b: "Weniger ungenutzte Plätze", rest: " — Erinnerungen vor jedem Kurs." },
      { b: "Weniger Telefonate", rest: " — Mitglieder buchen über einen Link." },
      { b: "Wiederkehrende Mitglieder", rest: " — rechtzeitige Einladungen für inaktive Mitglieder." },
      { b: "Teilnahmeübersicht", rest: " — sieh, wer kommt und wie voll jeder Kurs ist." },
    ],
    faq: [
      {
        q: "Können Mitglieder Gruppenkurse selbst buchen?",
        a: "Ja. Mitglieder buchen über einen Link und das System erfasst die Buchungen für jeden Kurs.",
      },
      {
        q: "Zeigt Jedro+ freie Kursplätze an?",
        a: "Ja. Das System zeigt freie und gebuchte Kurse, damit du und deine Mitglieder die Kapazitäten im Blick haben.",
      },
      {
        q: "Kann ich inaktive Mitglieder wieder einladen?",
        a: "Ja. Jedro+ erkennt Mitglieder, die länger nicht teilgenommen haben, und lädt sie automatisch wieder ein.",
      },
    ],
  },
  "werkstaetten": {
    title: "Werkstätten, Reifendienste und Reinigungsunternehmen",
    heroTag: "FOTO — Autoservice / Werkstatt",
    mediaTag: "FOTO — Mechaniker bei der Arbeit oder Reifenservice",
    heroSub:
      "Kunden wissen, wann sie kommen und ihr Fahrzeug abholen können, bei weniger Anrufen.",
    lead: "Jedro+ erinnert an Inspektionen und Reifenwechsel und informiert Kunden, wenn ihr Fahrzeug fertig ist. Weniger Anrufe, geordnete Abläufe und zufriedene Kunden, die wiederkommen.",
    pains: [
      "In Werkstätten und Reifenbetrieben wechseln sich Arbeiten am Fahrzeug und Anrufe zu Abholzeiten, freien Terminen und Reifenwechseln ab. Die Anrufe unterbrechen die Arbeit, oft genau dann, wenn die Hände schmutzig sind.",
      "Deine Leistungen sind oft saisonal und planbar: Reifenwechsel im Frühjahr und Herbst, Inspektionen nach Kilometerstand. Kunden warten, bis es dringend wird, und verursachen Spitzenzeiten. Jedro+ erinnert rechtzeitig und verteilt Buchungen gleichmäßiger.",
    ],
    list: [
      { b: "Serviceerinnerungen", rest: " — automatisch, zum richtigen Zeitpunkt" },
      { b: "Abholbenachrichtigung", rest: " — wenn das Fahrzeug fertig ist" },
      { b: "Ein geordneter Terminplan", rest: " — eine klare Übersicht nach Tagen und Terminen" },
    ],
    useCasesHead: "Wo Jedro+ besonders hilft",
    useCases: [
      { title: "Ein ständig klingelndes Telefon", text: "Kunden buchen über einen Link und erhalten Informationen zur Abholung. Das reduziert Anrufe während der Arbeit." },
      { title: "Saisonale Spitzenzeiten", text: "Vor der Reifenwechselsaison erinnert das System die Kunden, damit sich Buchungen besser verteilen." },
      { title: "Aufgeschobene Inspektionen", text: "Nähert sich die nächste Inspektion zeitlich oder nach Kilometerstand, erhalten Kunden eine Buchungserinnerung." },
      { title: "Fahrzeugabholung", text: "Sobald das Auto fertig ist, wird automatisch eine Benachrichtigung versendet. Das reduziert Anrufe und Wartezeiten." },
    ],
    msgHead: "Eine Nachricht von deiner Werkstatt",
    messages: [
      { dir: "out", text: "Guten Tag, Herr Horvat. Die Inspektion Ihres Golf ist abgeschlossen und Ihr Fahrzeug ist abholbereit. Wir haben bis 17:00 Uhr geöffnet. Viele Grüße, Ihr Werkstattteam! 🔧" },
      { dir: "out", text: "Guten Tag! Bald ist es Zeit für die Sommerreifen 🛞 Nächste Woche haben wir freie Termine. Dürfen wir einen für Sie reservieren?" },
      { dir: "in", text: "Ja, wäre Dienstagvormittag möglich? Vielen Dank!" },
    ],
    cards: [
      { title: "Terminbuchung", text: "Kunden wählen selbst einen freien Termin." },
      { title: "Saisonale Erinnerungen", text: "Winter- und Sommerreifen zur richtigen Zeit." },
      { title: "Fahrzeughistorie", text: "Eine Übersicht über durchgeführte Arbeiten." },
    ],
    whyTitle: "Warum Werkstätten Jedro+ wählen",
    whyLead: "In der Werkstatt zählt jede Minute. Unnötige Anrufe und ungleichmäßig verteilte Termine belasten deinen Betrieb. Jedro+ übernimmt Buchungen, Erinnerungen und Abholnachrichten, damit dein Team sich auf Fahrzeuge konzentrieren kann.",
    whyList: [
      { b: "Weniger Anrufe", rest: " — Buchungen und Benachrichtigungen laufen automatisch." },
      { b: "Eine gleichmäßige Auslastung", rest: " — saisonale Erinnerungen entzerren Buchungsspitzen." },
      { b: "Mehr treue Kunden", rest: " — rechtzeitige Serviceerinnerungen bringen sie zurück." },
      { b: "Fahrzeugübersicht", rest: " — die Servicehistorie jedes Fahrzeugs an einem Ort." },
    ],
    faq: [
      {
        q: "Sendet Jedro+ saisonale Erinnerungen an Inspektionen und Reifenwechsel?",
        a: "Ja. Das System sendet automatisch Erinnerungen, wenn eine Inspektion oder ein Reifenwechsel ansteht, zum passenden Zeitpunkt für jeden Kunden.",
      },
      {
        q: "Woher wissen Kunden, dass ihr Fahrzeug fertig ist?",
        a: "Jedro+ informiert Kunden automatisch, sobald ihr Fahrzeug abholbereit ist. Weniger Anrufe und zufriedenere Kunden.",
      },
      {
        q: "Können Kunden selbst Termine buchen?",
        a: "Ja. Kunden wählen online freie Termine und du erhältst einen geordneten Tagesplan.",
      },
    ],
  },
  coaching: {
    title: "Beratung, Coaching & Therapie",
    heroTag: "FOTO — Beratungs- oder Coachingraum",
    mediaTag: "FOTO — Beratungs- oder Therapiesitzung",
    heroSub:
      "Diskrete, zuverlässige Kommunikation, damit du dich auf deine Klienten konzentrieren kannst.",
    lead: "Deine Arbeit lebt von Vertrauen und Zuverlässigkeit. Jedro+ sendet diskrete Erinnerungen, verwaltet wiederkehrende Termine und hilft, Fortschritte zu verfolgen. So kannst du dich auf das Gespräch konzentrieren.",
    pains: [
      "Vertrauen ist die Grundlage von Coaching, Beratung und Therapie. Eine Nachricht, die auf dem Bildschirm zu viel verrät, kann Klienten unangenehm sein. Vergessene und abgesagte Sitzungen können den gemeinsamen Fortschritt unterbrechen.",
      "Regelmäßige Sitzungen brauchen Abstimmung, Dokumentation und Nachverfolgung. Erledigst du das manuell, fehlt diese Energie im Gespräch. Jedro+ übernimmt diskrete Erinnerungen und geordnete Termine, damit du dich auf deine Klienten konzentrieren kannst.",
    ],
    list: [
      { b: "Diskrete Erinnerungen", rest: " — ohne Inhalte der Sitzung offenzulegen" },
      { b: "Wiederkehrende Termine", rest: " — wöchentliche oder monatliche Sitzungen" },
      { b: "Fortschritte verfolgen", rest: " — Notizen und Besuchshistorie" },
    ],
    useCasesHead: "Wo Jedro+ den Unterschied macht",
    useCases: [
      { title: "Sensible Kommunikation", text: "Erinnerungen bleiben diskret und verraten keine Sitzungsinhalte. Klienten erhalten nur die Informationen, die sie benötigen." },
      { title: "Regelmäßige Sitzungen", text: "Richte wöchentliche oder monatliche Sitzungen einmal ein. Das System sendet für jede eine Erinnerung." },
      { title: "Unterbrochener Fortschritt", text: "Rechtzeitige Erinnerungen reduzieren Absagen und vergessene Sitzungen, die eure gemeinsame Arbeit unterbrechen könnten." },
      { title: "Neue Klienten", text: "Die Onlinebuchung nimmt Ersttermine ohne Abstimmung per E-Mail entgegen." },
    ],
    msgHead: "Eine Erinnerung aus deiner Praxis",
    messages: [
      { dir: "out", text: "Guten Tag, unsere Sitzung ist morgen um 10:00 Uhr. Ich freue mich auf das Gespräch mit Ihnen. Schreiben Sie mir, falls Sie den Termin verschieben müssen. 🙂" },
      { dir: "out", text: "Guten Tag! Denken Sie vor unserer nächsten Sitzung darüber nach, wie Ihre Woche im Hinblick auf die besprochenen Ziele verlaufen ist. Bis Mittwoch." },
      { dir: "in", text: "Vielen Dank, ich freue mich darauf. Ich bin zur vereinbarten Zeit da." },
    ],
    cards: [
      { title: "Private Notizen", text: "Sicher gespeicherte Notizen für jeden Klienten." },
      { title: "Regelmäßige Termine", text: "Wiederkehrende Sitzungen mit einem Klick." },
      { title: "Onlinebuchung", text: "Neue Klienten buchen selbst." },
    ],
    whyTitle: "Warum Coaches und Therapeuten Jedro+ wählen",
    whyLead: "Deine Arbeit braucht Vertrauen, Diskretion und eine verlässliche Sitzungsroutine. Jedro+ sendet Erinnerungen ohne Sitzungsinhalte offenzulegen, verwaltet wiederkehrende Buchungen und speichert Notizen sicher. So bleibt deine Aufmerksamkeit beim Klienten.",
    whyList: [
      { b: "Diskret", rest: " — Erinnerungen ohne Offenlegung von Sitzungsinhalten." },
      { b: "Eine regelmäßige Routine", rest: " — wiederkehrende Termine mit weniger Absagen." },
      { b: "Sichere Notizen", rest: " — Klientenhistorie und Notizen sicher gespeichert." },
      { b: "Weniger Organisation", rest: " — automatische Buchungen und Erinnerungen." },
    ],
    faq: [
      {
        q: "Sind Erinnerungen diskret und frei von sensiblen Sitzungsinhalten?",
        a: "Ja. Jedro+ sendet diskrete Erinnerungen, ohne Sitzungsinhalte offenzulegen. Vertraulichkeit und Professionalität bleiben gewahrt.",
      },
      {
        q: "Kann ich wiederkehrende Termine verwalten?",
        a: "Ja. Lege wöchentliche oder monatliche Sitzungen mit einem Klick als wiederkehrende Termine an.",
      },
      {
        q: "Wie werden Klientennotizen gespeichert?",
        a: "Private Klientennotizen werden sicher an einem Ort mit beschränktem Zugriff gespeichert.",
      },
    ],
  },
  "dienstleistungen": {
    title: "IT, Unternehmensdienste und Agenturen",
    heroTag: "FOTO — Büro / Agentur",
    mediaTag: "FOTO — Besprechung oder Agenturarbeit",
    heroSub:
      "Besprechungen und der Einstieg neuer Kunden laufen reibungslos, damit du dich auf Projekte konzentrieren kannst.",
    lead: "Jedro+ übernimmt Besprechungsbuchungen, den Einstieg neuer Kunden und die automatische Kommunikation. Das spart manuelle Terminabstimmung per E-Mail. Mehr Zeit für die Arbeit, weniger Verwaltung.",
    pains: [
      "Terminabstimmung kann den Agenturalltag bestimmen: mehrere E-Mails für eine Besprechung, Änderungen und Überschneidungen. Die Koordination kostet Zeit, die bei Kundenprojekten fehlt, und wird mit wachsenden Teams aufwendiger.",
      "Auch der erste Eindruck zählt. Neue Kunden erwarten einen geordneten Ablauf. Manuell versendete Hinweise und Bestätigungen können langsam und uneinheitlich sein. Jedro+ automatisiert Buchungen, Bestätigungen und die ersten Schritte, damit das Erlebnis einheitlich bleibt.",
    ],
    list: [
      { b: "Besprechungen buchen", rest: " — Kunden wählen selbst eine Uhrzeit" },
      { b: "Neue Kunden einführen", rest: " — automatische Schritte und Benachrichtigungen" },
      { b: "Weniger manuelle Arbeit", rest: " — die Kommunikation läuft automatisch" },
    ],
    useCasesHead: "Wo Jedro+ besonders hilft",
    useCases: [
      { title: "Besprechungen koordinieren", text: "Kunden wählen über einen Link einen freien Termin aus deinem Kalender. Das spart E-Mails hin und her." },
      { title: "Neue Kunden willkommen heißen", text: "Nach der Unterzeichnung laufen die ersten Schritte und Benachrichtigungen automatisch ab. Für einen professionellen, geordneten Start." },
      { title: "Vergessene Besprechungen", text: "Terminerinnerungen reduzieren Absagen und Lücken in einem vollen Kalender." },
      { title: "Verstreute Kontakte", text: "Alle Kontakte und die Zusammenarbeitshistorie an einem Ort, für das gesamte Team zugänglich." },
    ],
    msgHead: "Eine Nachricht von deiner Agentur",
    messages: [
      { dir: "out", text: "Guten Tag, Frau Zupan. Ihr Videotermin ist für morgen um 11:00 Uhr bestätigt. Den Link finden Sie unten. Bis bald!" },
      { dir: "out", text: "Guten Tag und herzlich willkommen! Für einen einfachen Start haben wir eine kurze Anleitung zu Ihrem ersten Schritt vorbereitet. Bei Fragen sind wir gerne für Sie da. 🙌" },
      { dir: "in", text: "Vielen Dank, alles ist klar. Bis zur Besprechung." },
    ],
    cards: [
      { title: "Besprechungskalender", text: "Ein Buchungslink für freie Zeiten." },
      { title: "Automatische Nachrichten", text: "Bestätigungen und Erinnerungen werden automatisch versendet." },
      { title: "Kundendatenbank", text: "Alle Kontakte und die Historie an einem Ort." },
    ],
    whyTitle: "Warum Agenturen Jedro+ wählen",
    whyLead: "Jede Stunde für die Abstimmung wirkt sich auf die Rentabilität aus. Jedro+ übernimmt Buchungen, Bestätigungen und die Einführung neuer Kunden, damit dein Team sich auf die beauftragte Arbeit konzentrieren kann.",
    whyList: [
      { b: "Weniger Abstimmung", rest: " — Kunden wählen freie Zeiten selbst." },
      { b: "Ein professioneller Einstieg", rest: " — einheitliche, automatische erste Schritte." },
      { b: "Weniger Absagen", rest: " — Besprechungserinnerungen für volle Kalender." },
      { b: "Geordnete Unterlagen", rest: " — Kontakte und Historie für das ganze Team zugänglich." },
    ],
    faq: [
      {
        q: "Können Kunden Besprechungen selbst buchen?",
        a: "Ja. Kunden wählen über einen Buchungslink einen freien Termin, ohne manuelle Abstimmung per E-Mail.",
      },
      {
        q: "Automatisiert Jedro+ den Einstieg neuer Kunden?",
        a: "Ja. Das System übernimmt automatische Schritte und Benachrichtigungen für neue Kunden, damit alles planmäßig läuft.",
      },
      {
        q: "Sind Bestätigungen und Erinnerungen automatisch?",
        a: "Ja. Besprechungsbestätigungen und Erinnerungen werden automatisch versendet. Alle Kontakte und die Historie bleiben an einem Ort.",
      },
    ],
  },
  "weitere-branchen": {
    title: "Andere Dienstleistungsunternehmen",
    heroTag: "FOTO — Dienstleistungsbetrieb",
    mediaTag: "FOTO — dein Unternehmen",
    heroSub:
      "Wenn du mit Terminen und Kunden arbeitest, passt Jedro+ zu dir und wird nach deinen Bedürfnissen eingerichtet.",
    lead: "Unabhängig von deiner Branche übernimmt Jedro+ Termine, Erinnerungen, Onlinebuchungen und Kommunikation. Erzähl uns, wie du arbeitest, und wir stimmen die Einrichtung auf dein Unternehmen ab.",
    pains: [
      "Jeder Dienstleistungsbetrieb ist anders, doch die Herausforderungen ähneln sich oft: vergessene oder überlappende Termine, Kunden, die nicht wiederkommen, und Kommunikation, die jede Woche Stunden kostet. Wenn du mit Terminen und Menschen arbeitest, kennst du das vielleicht.",
      "Jedro+ passt sich deiner Branche und deinen Abläufen an. Erzähl uns, wie du arbeitest. Wir richten Leistungen, Arbeitszeiten und Nachrichten so ein, dass sie dich vom ersten Tag an unterstützen.",
    ],
    list: [
      { b: "Flexibel", rest: " — Einrichtung passend zu deinem Unternehmen" },
      { b: "Alles an einem Ort", rest: " — Termine, Kunden, Erinnerungen und Buchungen" },
      { b: "Hilfe beim Einstieg", rest: " — wir helfen dir beim Start" },
    ],
    useCasesHead: "Wie Jedro+ in jeder Branche hilft",
    useCases: [
      { title: "Vergessene Termine", text: "Automatische Erinnerungen reduzieren Absagen überall dort, wo pünktliche Termine wichtig sind." },
      { title: "Kunden, die nicht wiederkommen", text: "Das System sendet zum richtigen Zeitpunkt eine Einladung, um in Kontakt zu bleiben und einen weiteren Besuch anzuregen." },
      { title: "Buchungen rund um die Uhr", text: "Kunden buchen über einen Link, auch wenn du nicht ans Telefon gehen kannst." },
      { title: "Individuelle Einrichtung", text: "Wir stimmen Leistungen und den Ton der Nachrichten auf dein Unternehmen ab." },
    ],
    msgHead: "Eine Erinnerung von deinem Unternehmen",
    messages: [
      { dir: "out", text: "Guten Tag! Eine Erinnerung an Ihren Termin morgen um 13:00 Uhr. Geben Sie uns Bescheid, falls sich etwas ändert. Wir freuen uns auf Sie! 🙂" },
      { dir: "out", text: "Guten Tag! Wir haben Sie eine Weile nicht gesehen. Gerne vereinbaren wir einen weiteren Termin zu einer passenden Zeit. Melden Sie sich bei uns." },
      { dir: "in", text: "Danke für die Erinnerung. Ich buche für Freitag." },
    ],
    cards: [
      { title: "Ein flexibler Terminplan", text: "Termine und Leistungen passend zu deinen Abläufen." },
      { title: "Onlinebuchung", text: "Kunden buchen selbst, rund um die Uhr." },
      { title: "Erinnerungen", text: "Automatische Benachrichtigungen vor Terminen." },
    ],
    whyTitle: "Warum Dienstleistungsbetriebe Jedro+ wählen",
    whyLead: "Unabhängig von deiner Branche hilft Jedro+ bei Buchungen, Erinnerungen und wiederkehrenden Besuchen. Wir stimmen die Einrichtung auf dein Unternehmen ab und helfen dir, schnell zu starten.",
    whyList: [
      { b: "Für jede Branche", rest: " — Einrichtung passend zu deinen Abläufen." },
      { b: "Alles an einem Ort", rest: " — Termine, Kunden, Erinnerungen und Buchungen." },
      { b: "Weniger Absagen", rest: " — rechtzeitige Erinnerungen in jeder Branche." },
      { b: "Hilfe beim Einstieg", rest: " — Hilfe beim Einstieg und der Einrichtung deines Systems." },
    ],
    faq: [
      {
        q: "Eignet sich Jedro+ für meine Branche?",
        a: "Ja. Wenn du mit Terminen und Kunden arbeitest, passt Jedro+ zu dir und wird auf dein Unternehmen abgestimmt.",
      },
      {
        q: "Könnt ihr das System an meine Arbeitsweise anpassen?",
        a: "Ja. Termine und Leistungen folgen deiner Arbeitsweise. Wir stimmen die Einrichtung entsprechend ab.",
      },
      {
        q: "Bekomme ich Hilfe beim Einstieg?",
        a: "Ja. Wir helfen beim Kundenimport und richten die wichtigsten Funktionen ein, damit du schnell starten kannst.",
      },
    ],
  },
};

export const panogeSlugs = Object.keys(panoge);
