// Generated from Slovenian source and src/locales/de.json.
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
  "sms-erinnerungen": {
    title: "SMS-Erinnerungen für Kunden",
    metaTitle: "SMS-Erinnerungen für Kunden | Jedro+",
    metaDescription:
      "Automatische SMS-Erinnerungen reduzieren Absagen und Nichterscheinen. Jedro+ sendet Nachrichten rechtzeitig in deinem Ton, ohne manuelle Arbeit.",
    eyebrow: "Funktion",
    heroTag: "FOTO — Telefon mit SMS-Terminerinnerung",
    mediaTag: "FOTO — Kunde empfängt eine SMS-Erinnerung",
    heroSub:
      "Jeder Kunde erhält rechtzeitig eine Erinnerung: weniger vergessene Termine, ein vollerer Kalender und keine manuelle Tipparbeit.",
    lead: "Eine SMS-Erinnerung nennt dem Kunden Termin und gebuchte Leistung. Jedro+ verbindet den Versand mit Kalender und Kundendaten, damit nicht jede Nachricht manuell geschrieben wird. Prüfe Kontakt, Sendezeit und Text vor dem Start mit einem Testtermin.",
    body: [
      "Lege Versandzeiten fest, etwa 24 und 2 Stunden vorher. Jede Nachricht enthält Name, Datum, Uhrzeit und Leistung sowie auf Wunsch Vorbereitungshinweise. Kunden wissen, wann und wohin sie kommen, und leere Termine und kurzfristige Absagen werden seltener.",
      "Erinnerungen sind mit Kalender und Kundendaten verbunden, ohne doppelte Eingabe. Eine Online- oder manuelle Buchung plant die Nachricht. Bei Verschiebung oder Absage wird sie aktualisiert oder gestoppt. SMS helfen auch bei dringenden Änderungen: Informiere etwa bei Krankheit mit einem Klick alle Kunden eines Tages.",
      "Nutze SMS auch für Dank, erneute Buchungseinladungen und inaktive Kunden. Wähle SMS oder E-Mail passend zu Nachricht und Kunde. Alles bleibt mit dem Kundenverlauf verbunden.",
    ],
    list: [
      { b: "Weniger Nichterscheinen", rest: " — rechtzeitige Erinnerungen reduzieren kurzfristige Absagen" },
      { b: "Hohe Öffnungsraten", rest: " — Kunden lesen SMS häufiger als E-Mails" },
      { b: "Persönliche Nachrichten", rest: " — Name, Termin und Leistung automatisch eingefügt" },
      { b: "Weniger manuelle Arbeit", rest: " — Erinnerungen gehen automatisch aus deinem Kalender heraus" },
    ],
    cards: [
      { title: "Geplante Erinnerungen", text: "Bestimme den Versand, etwa am Vortag und 2 Stunden vor dem Termin." },
      { title: "Mit dem Kalender verbunden", text: "Ein neuer Termin plant die Erinnerung automatisch. Eine Absage stoppt sie." },
      { title: "Gruppenbenachrichtigungen", text: "Informiere mit einem Klick alle Kunden eines Tages über Planänderungen." },
    ],
    faq: [
      {
        q: "Wann wird die SMS-Erinnerung gesendet?",
        a: "Du bestimmst den Zeitpunkt. Üblich sind 24 Stunden vorher und eine kurze Erinnerung 2 Stunden vorher. Das System versendet automatisch nach deinem Kalender.",
      },
      {
        q: "Sind SMS-Erinnerungen personalisiert?",
        a: "Ja. Jede Nachricht enthält Name, Datum, Uhrzeit und Leistung. Ergänze Vorbereitungshinweise oder weitere Angaben, damit sie persönlich geschrieben wirkt.",
      },
      {
        q: "Was passiert bei Verschiebung oder Stornierung?",
        a: "Die Erinnerung wird automatisch angepasst oder gestoppt. Durch die Kalenderverbindung erhalten Kunden keine Erinnerungen an bereits stornierte Termine.",
      },
      {
        q: "Können SMS- und E-Mail-Erinnerungen zusammenarbeiten?",
        a: "Ja. Wähle den passenden Kanal: SMS für Dringendes, E-Mail für längere Informationen. Alles bleibt im Kundenverlauf einer gemeinsamen Datenbank.",
      },
    ],
  },

  "online-terminbuchung": {
    title: "Onlinebuchung rund um die Uhr",
    metaTitle: "Online-Terminbuchung | Jedro+",
    metaDescription:
      "Onlinebuchung, die für dich arbeitet: Kunden buchen rund um die Uhr über einen teilbaren Link. Dein Kalender füllt sich ohne Telefonate oder manuelle Abstimmung.",
    eyebrow: "Funktion",
    heroTag: "FOTO — Kunde bucht online",
    mediaTag: "FOTO — Buchungsseite auf Telefon und Computer",
    heroSub:
      "Kunden buchen, wenn es ihnen passt, tagsüber oder nachts. Du konzentrierst dich auf die Arbeit.",
    lead: "Anrufe während einer Leistung unterbrechen die Arbeit oder bleiben unbeantwortet. Wer nicht buchen kann, sucht vielleicht anderswo. Online sehen Kunden freie Zeiten und buchen jederzeit über einen Link, auch wenn du geschlossen hast oder beschäftigt bist.",
    body: [
      "Deine Buchungsseite verwendet Farben und Logo und zeigt nur gewählte Leistungen, Mitarbeiter und Zeiten. Kunden wählen eine Leistung, sehen freie Termine nach Kalender und Dauer und bestätigen in wenigen Schritten. Alles ist für Mobilgeräte optimiert.",
      "Jede Buchung erscheint automatisch im Kalender, ohne doppelte Eingaben oder Überschneidungen. Verfügbarkeit wird live aktualisiert und belegte Zeiten sind nicht mehr wählbar. Neue Buchungen lösen Bestätigung und Erinnerung aus, um Absagen zu reduzieren.",
      "Onlinebuchung baut auch deine Kundendatenbank auf. Die erste Buchung erstellt ein Profil, das mit jedem Besuch wächst. So organisierst du Kalender und Daten ohne Telefonate oder manuelle Nachrichten.",
    ],
    list: [
      { b: "Buchungen rund um die Uhr", rest: " — Kunden buchen auch außerhalb der Öffnungszeiten" },
      { b: "Weniger Anrufe und Nachrichten", rest: " — Buchungen laufen automatisch, ohne auf deine Antwort zu warten" },
      { b: "In deinen Farben", rest: " — eine Buchungsseite mit deinem Markenauftritt, ohne Programmierung" },
      { b: "Mit dem Kalender synchron", rest: " — aktuelle Verfügbarkeit ohne Überschneidungen" },
    ],
    cards: [
      { title: "Teilbarer Link", text: "Platziere den Link auf Instagram, deinem Google-Profil oder der Website für Buchungen mit einem Klick." },
      { title: "Für Mobilgeräte optimiert", text: "Kunden buchen in Sekunden am Telefon, wo immer sie sind." },
      { title: "Automatische Bestätigung", text: "Nach der Buchung folgt sofort die Bestätigung und später eine Erinnerung." },
    ],
    faq: [
      {
        q: "Brauche ich eine eigene Website für Onlinebuchungen?",
        a: "Nein. Jedro+ erstellt eine eigenständige Buchungsseite mit eigenem Link. Teile ihn in sozialen Medien, im Google-Profil oder per E-Mail. Eine bestehende Website kannst du einfach verlinken.",
      },
      {
        q: "Wie werden Überschneidungen verhindert?",
        a: "Die Verfügbarkeit basiert live auf Kalender und Leistungsdauer. Gebuchte Zeiten sind sofort für andere gesperrt und verhindern Doppelbuchungen.",
      },
      {
        q: "Kann ich online buchbare Leistungen auswählen?",
        a: "Ja. Du entscheidest über sichtbare Leistungen, Mitarbeiter und Zeiten. Manche Leistungen bleiben manuell buchbar, andere öffnest du online.",
      },
      {
        q: "Was passiert nach der Buchung?",
        a: "Der Termin erscheint automatisch im Kalender, der Kunde erhält Bestätigung und Erinnerung und sein Profil wird erstellt oder ergänzt, ohne Handarbeit.",
      },
    ],
  },

  "crm-kundendatenbank": {
    title: "CRM für Dienstleistungsunternehmen",
    metaTitle: "Kunden-CRM für Dienstleister | Jedro+",
    metaDescription:
      "CRM für Dienstleister: Kontakte, Besuchsverlauf, Notizen und Vorlieben an einem Ort. Bessere Beziehungen, mehr Folgebesuche und geordnete Daten.",
    eyebrow: "Funktion",
    heroTag: "FOTO — Übersicht der Kundendatenbank",
    mediaTag: "FOTO — Kundenkarte mit Besuchsverlauf",
    heroSub:
      "Jeder Kunde, Besuch und jede Notiz an einem Ort. So weißt du, wer vor dir sitzt und wann eine Einladung sinnvoll ist.",
    lead: "Kundendaten in Notizbüchern, Telefonen und Köpfen kosten irgendwann Umsatz. Das CRM verbindet Kontakte, Besuche, Leistungen, Notizen und Vorlieben. Sieh, wer der Kunde ist, was er zuletzt gebucht hat und wann er wiederkommen könnte.",
    body: [
      "Profile bauen sich selbst auf. Onlinebuchung oder manueller Termin erstellt eine Karte, die bei jedem Besuch wächst, ohne Abschreiben oder doppelte Einträge. Leistungen, letzter Besuch, Allergien, Vorlieben, Produkte und Nachrichten sind schnell sichtbar.",
      "Mit Kalender und Kommunikation verbunden, werden CRM-Daten zum Wachstumswerkzeug. Filtere etwa länger abwesende Kunden und lade sie mit wenigen Klicks ein. Nachrichten verwenden Name, letzte Leistung und weitere Angaben für persönliche Ansprache.",
      "Geordnete Daten bewahren Wissen bei Teamwechsel und Wachstum. Informationen bleiben, wenn Mitarbeiter gehen. Alle sehen denselben aktuellen Stand, vermeiden Fehler und doppelte Arbeit und geben Kunden das Gefühl, erkannt zu werden.",
    ],
    list: [
      { b: "Alles an einem Ort", rest: " — Kontakte, Verlauf, Notizen und Vorlieben jedes Kunden" },
      { b: "Profile wachsen automatisch", rest: " — jeder Termin ergänzt die Karte ohne Handarbeit" },
      { b: "Mehr Folgebesuche", rest: " — inaktive Kunden filtern und wieder einladen" },
      { b: "Wissen bleibt im System", rest: " — Informationen bleiben bei Personalwechsel erhalten" },
    ],
    cards: [
      { title: "Kundenkarte", text: "Besuchsverlauf, Leistungen und Notizen in einer Ansicht." },
      { title: "Intelligente Filter", text: "Finde inaktive oder besonders gute Kunden und sprich sie gezielt an." },
      { title: "Mit Kommunikation verbunden", text: "Nachrichten nutzen automatisch Profildaten für eine persönliche Ansprache." },
    ],
    faq: [
      {
        q: "Muss ich Kunden manuell eingeben?",
        a: "Nicht unbedingt. Profile entstehen bei Onlinebuchungen oder Termineingabe. Bestehende Kunden kannst du importieren, neue kommen mit Buchungen hinzu.",
      },
      {
        q: "Welche Kundendaten werden gespeichert?",
        a: "Kontakte, Besuchs- und Leistungsverlauf, Vorlieben, Allergien, verwendete Produkte und versendete Nachrichten, alles auf einer Kundenkarte.",
      },
      {
        q: "Kann ich Kunden filtern und gezielt ansprechen?",
        a: "Ja. Filtere zum Beispiel länger abwesende Kunden und lade sie mit persönlichen Nachrichten ein, die ihre Daten automatisch verwenden.",
      },
      {
        q: "Was passiert bei einem Personalwechsel mit den Daten?",
        a: "Informationen bleiben im System. Das ganze Team sieht aktuelle Daten, damit Wissen bei Wechsel oder Wachstum erhalten bleibt.",
      },
    ],
  },

  "ki-kommunikation": {
    title: "Persönliche KI-Nachrichten für Kunden",
    metaTitle: "Persönliche KI-Nachrichten für Kunden | Jedro+",
    metaDescription:
      "Jedro+ schreibt mit KI Erinnerungen und Nachfragen in deinem Ton, mit Name und Leistung. Informiere alle mit einem Klick und stärke Beziehungen.",
    eyebrow: "Funktion",
    heroTag: "FOTO — Telefon mit persönlicher Kundennachricht",
    mediaTag: "FOTO — KI-Nachrichten im Chatfenster",
    heroSub:
      "KI schreibt wie du, mit Name, Termin und Leistung. Ein Klick informiert alle.",
    lead: "Allgemeine, unpersönliche Nachrichten werden oft ignoriert. Jedro+ erstellt Erinnerungen, Nachfragen und Hinweise in deinem Ton, mit Kundenname, Datum und Leistung. Jede Nachricht fühlt sich individuell an.",
    body: [
      "KI verwendet Kunden- und Termindaten für den richtigen Anlass: freundliche Erinnerung, Nachsorge oder Einladung. Stelle einen lockeren, freundlichen oder professionellen Ton ein. Du behältst die Kontrolle und kannst Texte vor dem Versand prüfen und ändern.",
      "Informiere Kunden eines Tages oder einer Gruppe mit einem Klick. KI passt Name, Leistung und Kontext individuell an, auch bei vielen gleichzeitigen Nachrichten. Das spart Zeit und vermeidet Übertragungsfehler.",
      "Kalender und CRM halten Nachrichten korrekt und rechtzeitig: Erinnerungen vorher, Dank danach und Einladungen nach längerer Abwesenheit. Wähle SMS oder E-Mail, alles wird im Verlauf dokumentiert.",
    ],
    list: [
      { b: "Nachrichten in deinem Ton", rest: " — KI schreibt natürlich, wie du selbst" },
      { b: "Automatische Personalisierung", rest: " — Name, Termin und Leistung für jeden Kunden" },
      { b: "Ein Klick informiert alle", rest: " — viele persönliche Nachrichten gleichzeitig" },
      { b: "Immer rechtzeitig", rest: " — Erinnerungen, Dank und Einladungen im passenden Moment" },
    ],
    cards: [
      { title: "KI in deinem Stil", text: "Bestimme Ton und Marke für authentische, persönliche Nachrichten." },
      { title: "Du hast die Kontrolle", text: "Prüfe und ändere Nachrichten vor dem Versand." },
      { title: "Mit deinen Daten verbunden", text: "Nachrichten verwenden automatisch Name, Termin und Leistung aus der Kundendatenbank." },
    ],
    faq: [
      {
        q: "Klingen die Nachrichten robotisch?",
        a: "Nein. KI folgt deinem gewünschten Ton, von locker bis professionell, und verwendet Name, Termin und Leistung. Die Nachricht wirkt persönlich geschrieben.",
      },
      {
        q: "Bestimme ich, was versendet wird?",
        a: "Ja. KI erstellt einen Entwurf, den du prüfen und bearbeiten kannst. Auf Wunsch geht nichts ohne deine Zustimmung heraus.",
      },
      {
        q: "Woher weiß KI, was sie schreiben soll?",
        a: "Sie nutzt Kalender und Kundendaten: Name, Termin, vergangene oder kommende Leistung und Anlass, etwa Erinnerung, Dank oder Einladung. Daraus entsteht eine passende persönliche Nachricht.",
      },
      {
        q: "Welche Kanäle werden unterstützt?",
        a: "SMS und E-Mail. Wähle passend zu Nachricht und Kunde. Alle versendeten Nachrichten bleiben im Kundenverlauf.",
      },
    ],
  },

  "aktionen-rabatte": {
    title: "Rabatte, Happy Hours und Aktionen",
    metaTitle: "Rabatte und Happy Hours für Dienstleister | Jedro+",
    metaDescription:
      "Verwalte Rabatte, Happy Hours und vergünstigte Zusatzleistungen direkt in Jedro+. Fülle ruhigere Zeiten mit Angeboten, eingerichtet in wenigen Klicks.",
    eyebrow: "Funktion",
    heroTag: "FOTO — Aktionsangebot im Kalender",
    mediaTag: "FOTO — Übersicht über Rabatte und Happy Hours",
    heroSub:
      "Fülle ruhigere Stunden mit eigenen Angeboten: Rabatte auf Leistungen, Happy Hours oder eine attraktive Zusatzleistung.",
    lead: "Jeder Salon und jedes Studio hat ruhigere Zeiten. Fülle sie mit gezielten Angeboten. Jedro+ verbindet Aktionen an einem Ort mit deinen vorhandenen Leistungen.",
    body: [
      "Lege einen Prozent- oder Festbetrag, berechtigte Leistungen und den Zeitraum fest. Erstelle Sommeraktionen, Neukundenrabatte oder Angebote für eine Leistung ohne manuelles Rechnen.",
      "Happy Hours gelten an gewählten Wochentagen und Uhrzeiten. Sie füllen weniger beliebte Zeiten, etwa Vormittage unter der Woche, für alle oder einzelne Leistungen.",
      "Zusatzleistungen bieten bei der Buchung einen weiteren Service günstiger an. Ursprungspreis, Rabatt und Endpreis werden transparent gezeigt.",
    ],
    list: [
      { b: "Rabatte in % oder €", rest: " — für gewählte Leistungen und Zeiträume" },
      { b: "Happy hours", rest: " — Rabatte an gewählten Tagen und Uhrzeiten" },
      { b: "Vergünstigte Zusatzleistungen", rest: " — mehr Wert pro Termin" },
      { b: "Alles an einem Ort", rest: " — jede Aktion ist mit deinen Leistungen verbunden" },
    ],
    cards: [
      { title: "Rabatte", text: "Prozent- oder Festbetrag, ausgewählte Leistungen sowie Start- und Enddatum." },
      { title: "Happy hours", text: "Wochentage, Zeitfenster und Rabatt für ruhigere Stunden." },
      { title: "Zusatzleistungen", text: "Ein zusätzlicher Service zum Haupttermin, mit Original- und Endpreis." },
    ],
    faq: [
      {
        q: "Kann ein Rabatt nur für bestimmte Leistungen gelten?",
        a: "Ja. Wähle die Leistungen für jeden Rabatt. Happy Hours können auch alle Leistungen umfassen.",
      },
      {
        q: "Kann ich einen Rabatt zeitlich begrenzen?",
        a: "Ja. Lege Anfang und Ende fest. Happy Hours gelten an gewählten Wochentagen im bestimmten Zeitfenster.",
      },
      {
        q: "Was sind Zusatzleistungen?",
        a: "Zusätzliche Services zum Hauptangebot zu einem günstigeren Preis. Die Übersicht zeigt Originalpreis, Rabatt und Endpreis.",
      },
      {
        q: "Kann ich einen festen Rabattbetrag einstellen?",
        a: "Ja. Wähle einen Prozentsatz oder einen festen Eurobetrag.",
      },
    ],
  },

  "ressourcen": {
    title: "Ressourcen: Räume, Kabinen und Geräte",
    metaTitle: "Ressourcenverwaltung: Räume, Kabinen und Geräte | Jedro+",
    metaDescription:
      "Verwalte Ressourcen wie Massageliegen, Kabinen und Geräte. Jedro+ verhindert Doppelbuchungen und zeigt Verfügbarkeit.",
    eyebrow: "Funktion",
    heroTag: "FOTO — Kabinen und Geräte im Salon",
    mediaTag: "FOTO — Ressourcen- und Verfügbarkeitsübersicht",
    heroSub:
      "Ein Termin braucht oft neben einer Person auch Liege, Raum oder Gerät. Jedro+ berücksichtigt das.",
    lead: "Viele Leistungen benötigen Massageliege, Kabine, Laser oder Raum zusätzlich zum Mitarbeiter. Ohne Ressourcenübersicht drohen Doppelbuchungen. Jedro+ verbindet physische Ressourcen mit den Leistungen.",
    body: [
      "Jede Ressource hat Name, Einheiten und Kapazität je Einheit. Gesamtkapazität, aktive Ressourcen und verbundene Leistungen sind sofort sichtbar.",
      "Lege eine Ressource als immer verfügbar fest oder gib ihr einen Plan. Deaktiviere sie vorübergehend, ohne Daten zu löschen.",
      "Mit verbundenen Ressourcen weiß das System, was für einen Termin frei sein muss. So ist nicht nur der Mitarbeiter, sondern auch die benötigte Ausstattung verfügbar.",
    ],
    list: [
      { b: "Weniger Doppelbuchungen", rest: " — Termine berücksichtigen Liegen, Räume und Geräte" },
      { b: "Einheiten und Kapazität", rest: " — mehrere Einheiten mit eigener Kapazität" },
      { b: "Ressourcenplan", rest: " — immer verfügbar oder nach festem Zeitplan" },
      { b: "Mit Leistungen verbunden", rest: " — sieh, welche Leistungen eine Ressource nutzen" },
    ],
    cards: [
      { title: "Einheiten und Kapazität", text: "Mehrere Einheiten derselben Ressource mit jeweiliger Kapazität." },
      { title: "Aktiv / inaktiv", text: "Deaktiviere Ressourcen vorübergehend, ohne ihre Daten zu verlieren." },
      { title: "Auf einen Blick", text: "Ressourcen insgesamt, aktive Ressourcen, Kapazität und verbundene Leistungen." },
    ],
    faq: [
      {
        q: "Was ist eine Ressource in Jedro+?",
        a: "Ein physisches Element für eine Leistung, etwa Massageliege, Kabine, Raum oder Gerät. Es ist vom ausführenden Mitarbeiter getrennt.",
      },
      {
        q: "Kann ich mehrere Einheiten einer Ressource haben?",
        a: "Ja. Lege Anzahl und Kapazität je Einheit fest. Das System zeigt die Gesamtkapazität.",
      },
      {
        q: "Kann eine Ressource einen Zeitplan haben?",
        a: "Ja. Sie kann immer verfügbar sein oder einen eigenen Plan besitzen.",
      },
      {
        q: "Wie verbinde ich Ressourcen mit Leistungen?",
        a: "Ordne sie den Leistungen zu, die sie benötigen. Die Ressourcenkarte zeigt alle verbundenen Leistungen.",
      },
    ],
  },

  "terminanfragen": {
    title: "Terminanfragen: Du bestätigst",
    metaTitle: "Terminanfragen und manuelle Buchungsfreigabe | Jedro+",
    metaDescription:
      "Kunden nennen ihren Wunschzeitraum, du bestätigst Uhrzeit, Leistung und Person. Jedro+ unterstützt Abläufe mit manueller Freigabe.",
    eyebrow: "Funktion",
    heroTag: "FOTO — Liste der Terminanfragen",
    mediaTag: "FOTO — Bestätigung einer Terminanfrage",
    heroSub:
      "Manche Buchungen brauchen eine Prüfung. Kunden senden einen Wunsch, du bestätigst den passenden Termin.",
    lead: "Bei variabler Dauer, nötiger Mitarbeiterfreigabe oder komplexen Plänen ist Bestätigung sinnvoll. Kunden nennen ein Zeitfenster, du wählst Leistung, Person und genaue Uhrzeit in wenigen Schritten.",
    body: [
      "Anfragen stehen an einem Ort mit Filtern für offen, bestätigt und abgelehnt. Jede zeigt Versanddatum und Wunschzeitraum.",
      "Bestätige in drei Schritten: Leistung, Person und einen passenden freien Termin im Wunschzeitraum wählen. Er erscheint im Kalender.",
      "Ist kein Termin möglich, lehne die Anfrage mit Begründung ab, damit der Kunde Bescheid weiß.",
    ],
    list: [
      { b: "Anfragen an einem Ort", rest: " — nach offen, bestätigt oder abgelehnt filtern" },
      { b: "Bestätigung in drei Schritten", rest: " — Leistung, Person, Datum und Uhrzeit" },
      { b: "Nur freie Termine", rest: " — im gewünschten Zeitraum des Kunden" },
      { b: "Ablehnung mit Begründung", rest: " — Kunden wissen, warum ein Termin nicht möglich ist" },
    ],
    cards: [
      { title: "Wunschzeitraum", text: "Kunden nennen ihre Verfügbarkeit, du bestimmst die genaue Uhrzeit." },
      { title: "Freie Termine", text: "Das System findet Verfügbarkeit für die gewählte Leistung und Person." },
      { title: "Nachvollziehbarer Status", text: "Jede Anfrage ist offen, bestätigt oder abgelehnt." },
    ],
    faq: [
      {
        q: "Wann sind Terminanfragen sinnvoll?",
        a: "Wenn Buchungen Freigabe brauchen: bei variabler Dauer, Mitarbeiterbestätigung oder schwer planbaren Zeiten.",
      },
      {
        q: "Was sieht der Kunde bei einer Ablehnung?",
        a: "Du nennst einen Grund, etwa fehlende Verfügbarkeit im Wunschzeitraum. Dieser wird bei der Anfrage vermerkt.",
      },
      {
        q: "Wie bestätige ich eine Anfrage?",
        a: "Wähle Leistung, Person und einen freien Termin im Wunschzeitraum. Der bestätigte Termin kommt in den Kalender.",
      },
      {
        q: "Kann ich Anfragen filtern?",
        a: "Ja. Zeige alle oder filtere nach offen, bestätigt und abgelehnt.",
      },
    ],
  },

  "qr-codes-buchungsdesigns": {
    title: "Buchungsdesigns, Links und QR-Codes",
    metaTitle: "Buchungsseiten, Designs und QR-Codes | Jedro+",
    metaDescription:
      "Wähle ein Buchungsdesign, nutze eigene Links je Kanal und drucke einen QR-Code für den Empfang. Alles in Jedro+.",
    eyebrow: "Funktion",
    heroTag: "FOTO — Buchungs-QR-Code am Empfang",
    mediaTag: "FOTO — Auswahl des Buchungsdesigns",
    heroSub:
      "Ein Auftritt passend zur Marke, ein Link je Kanal und ein QR-Code zum Ausdrucken am Empfang.",
    lead: "Onlinebuchung ist oft der erste Kontakt mit deinem Unternehmen. Wähle in Jedro+ ein Design, nutze verschiedene Links für Instagram, Website und E-Mail-Signatur und drucke einen QR-Code für Empfang, Tür oder Schaufenster.",
    body: [
      "Standarddesigns sind Klassisch, Modern und Elegant. Pro ergänzt Saisonal, passend zu Jahreszeiten und Feiertagen, Magazine und Casino. Neue Designs kommen regelmäßig hinzu.",
      "Nutze unterschiedliche Designs je Kanal: Instagram, Website oder E-Mail-Signatur. Jeder Link führt zur selben Buchungsseite mit anderem Aussehen. Ein Hauptlink wird auch in Nachrichten verwendet.",
      "Drucke ein A6-QR-Poster (105 × 148 mm) in schlichtem, markengerechtem, elegantem oder dunklem Stil. Der Code verweist auf den Hauptlink und bleibt bei Designwechsel gültig. Ein separater Registrierungs-QR-Code fügt Kunden ohne Terminbuchung hinzu.",
    ],
    list: [
      { b: "6 Designs", rest: " — Classic, Modern und Elegant sowie Seasonal, Magazine und Casino mit Pro" },
      { b: "Ein Link für jeden Kanal", rest: " — Instagram, Website und E-Mail, jeweils mit eigenem Design" },
      { b: "QR-Plakat im A6-Format", rest: " — für Empfang, Türen oder Fenster, in vier Designs" },
      { b: "QR-Code zur Kundenregistrierung", rest: " — Kunden registrieren sich selbst, ohne einen Termin zu buchen" },
    ],
    cards: [
      { title: "Designauswahl", text: "Von schlicht bis glamourös, passend zu deiner Marke." },
      { title: "Mehrere Links", text: "Dieselbe Seite, ein anderes Design für jeden Kanal." },
      { title: "Druckfertiger QR-Code", text: "Ein A6-Plakat im gewünschten Design, das immer zu deinem Hauptlink führt." },
    ],
    faq: [
      {
        q: "Welche Designs sind verfügbar?",
        a: "Classic, Modern und Elegant sind standardmäßig enthalten. Jedro Pro bietet zusätzlich Seasonal, Magazine und Casino.",
      },
      {
        q: "Kann ich mehrere Buchungslinks verwenden?",
        a: "Ja. Nutze jeden Link auf einem anderen Kanal mit einem eigenen Design. Ein Link ist dein Hauptlink und wird auch in Nachrichten verwendet.",
      },
      {
        q: "Was passiert mit gedruckten QR-Codes, wenn ich das Design ändere?",
        a: "Der Code führt zu deinem Hauptbuchungslink und bleibt deshalb auch nach einer Designänderung gültig.",
      },
      {
        q: "Können sich Kunden über einen QR-Code auch nur registrieren?",
        a: "Ja. Über einen separaten QR-Code zur Registrierung können Kunden ihre Daten eingeben und deiner Kundendatenbank beitreten, ohne einen Termin zu buchen.",
      },
    ],
  },
};

export const funkcijeSlugs = Object.keys(funkcije);
