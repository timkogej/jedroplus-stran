// Generated from Slovenian source and src/locales/de.json.
"use client";

import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import {
  BatteryFull,
  CalendarCheck2,
  CalendarClock,
  CalendarX2,
  Check,
  Globe2,
  MessageSquareText,
  Pause,
  Phone,
  Play,
  RotateCcw,
  Signal,
  Sparkles,
  Wifi,
} from "lucide-react";
import { RECEPTIONIST_GREETING } from "@/german/lib/receptionist";

const greeting = { speaker: "Receptionist+", text: RECEPTIONIST_GREETING };
const examples = [
  {
    label: "Buchung",
    messages: [
      greeting,
      { speaker: "Kunde", text: "Guten Tag, ich möchte einen Haarschnitt buchen." },
      { speaker: "Receptionist+", text: "Natürlich! Wir haben viele freie Termine. Welcher Tag würde Ihnen am besten passen?" },
      { speaker: "Kunde", text: "Ich würde gerne am Donnerstag kommen." },
      { speaker: "Receptionist+", text: "Am Donnerstag haben wir um 13:00, 14:00 und 15:00 Uhr frei. Welche Uhrzeit passt Ihnen am besten?" },
      { speaker: "Kunde", text: "Um 14:00 Uhr, bitte." },
      { speaker: "Receptionist+", text: "Alles vereinbart, Ihr Termin ist eingetragen. Wir senden Ihnen auch eine Erinnerung. Bis dann!" },
    ],
    result: "Termin gebucht",
    detail: "Haarschnitt · Donnerstag um 14:00 Uhr",
    icon: CalendarCheck2,
  },
  {
    label: "Verschiebung",
    messages: [
      greeting,
      { speaker: "Kunde", text: "Ich habe am Donnerstag einen Termin. Könnte ich ihn auf Freitag verschieben?" },
      { speaker: "Receptionist+", text: "Natürlich. Wie heißen Sie, damit ich Ihre Buchung finde?" },
      { speaker: "Kunde", text: "Ana Novak. Am Freitag könnte ich um 10 Uhr kommen." },
      { speaker: "Receptionist+", text: "Um 10 Uhr ist frei. Ich habe Ihren Termin auf Freitag verschoben und die Erinnerung aktualisiert." },
    ],
    result: "Termin verschoben",
    detail: "Neuer Termin · Freitag, 10:00 Uhr",
    icon: CalendarClock,
  },
  {
    label: "Stornierung",
    messages: [
      greeting,
      { speaker: "Kunde", text: "Leider muss ich meinen Termin morgen absagen. Ich bin Ana Novak." },
      { speaker: "Receptionist+", text: "Verstanden. Geht es um den Haarschnitt morgen um 14:30 Uhr?" },
      { speaker: "Kunde", text: "Ja, genau. Vielen Dank für Ihre Hilfe." },
      { speaker: "Receptionist+", text: "Der Termin ist storniert und die Änderung vermerkt. Danke für die Nachricht." },
    ],
    result: "Stornierung erfasst",
    detail: "Kalender aktualisiert.",
    icon: CalendarX2,
  },
  {
    label: "Frage",
    messages: [
      greeting,
      { speaker: "Kunde", text: "Haben Sie auch samstags geöffnet?" },
      { speaker: "Receptionist+", text: "Ja, samstags von 8 bis 13 Uhr. Soll ich Ihnen auch einen Termin suchen?" },
      { speaker: "Kunde", text: "Für den Moment brauche ich nur die Information. Vielen Dank!" },
      { speaker: "Receptionist+", text: "Sehr gerne. Einen schönen Tag!" },
    ],
    result: "Kundenfrage beantwortet",
    detail: "Anrufergebnis · Information",
    icon: MessageSquareText,
  },
  {
    label: "Andere Sprache",
    messages: [
      greeting,
      { speaker: "Kunde", text: "Hi! Could we speak in English? I'd like to book a haircut." },
      { speaker: "Receptionist+", text: "Of course! We have an appointment on Friday at 10. Would that work for you?" },
      { speaker: "Kunde", text: "Yes, that's perfect. Thank you!" },
      { speaker: "Receptionist+", text: "You're welcome. Your appointment is booked for Friday at 10. See you then!" },
    ],
    result: "Gespräche in der Kundensprache",
    detail: "Termin vereinbart · Freitag, 10:00 Uhr",
    icon: Globe2,
  },
];

type MotionPreference = "unknown" | "animate" | "reduce";

export function ReceptionistDemo() {
  const [selected, setSelected] = useState(0);
  const [step, setStep] = useState(-1);
  const [run, setRun] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [paused, setPaused] = useState(false);
  const [entered, setEntered] = useState(false);
  const [inView, setInView] = useState(false);
  const [motionPreference, setMotionPreference] = useState<MotionPreference>("unknown");
  const rootRef = useRef<HTMLDivElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const example = examples[selected];
  const animated = motionPreference === "animate" && entered;
  const visibleCount = animated ? Math.min(Math.max(step + 1, 0), example.messages.length) : example.messages.length;
  const phase = !animated || step >= example.messages.length ? "done" : step < 0 ? "ringing" : "talking";
  const Icon = example.icon;
  const duration = `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setMotionPreference(preference.matches ? "reduce" : "animate");
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;
    if (!("IntersectionObserver" in window)) {
      setEntered(true);
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
      if (entry.isIntersecting) setEntered(true);
    }, { threshold: 0.25 });
    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animated || !inView || paused || step >= example.messages.length) return;
    const delay = step < 0 ? 1000 : step === 0 ? 3700 : 2600;
    const timeout = window.setTimeout(() => setStep((value) => value + 1), delay);
    return () => window.clearTimeout(timeout);
  }, [animated, inView, paused, step, example.messages.length, selected, run]);

  useEffect(() => {
    if (!animated || !inView || paused || phase !== "talking") return;
    const interval = window.setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => window.clearInterval(interval);
  }, [animated, inView, paused, phase, selected, run]);

  useEffect(() => {
    const transcript = transcriptRef.current;
    if (!transcript) return;
    transcript.scrollTo({ top: animated ? transcript.scrollHeight : 0, behavior: animated && visibleCount > 1 ? "smooth" : "auto" });
  }, [visibleCount, animated, selected, run]);

  const startExample = (index: number) => {
    setSelected(index);
    setStep(-1);
    setSeconds(0);
    setPaused(false);
    setEntered(true);
    setRun((value) => value + 1);
  };

  return (
    <div className="rp-demo" id="primer-klica" ref={rootRef} data-phase={phase} data-paused={paused || !inView}>
      <div className="rp-demo__picker">
        <span className="rp-demo__label">So läuft ein Anruf ab</span>
        <div className="rp-demo__tabs" role="tablist" aria-label="Anrufbeispiele">
          {examples.map((item, index) => (
            <button
              key={item.label}
              ref={(element) => { tabRefs.current[index] = element; }}
              type="button"
              id={`${id}-tab-${index}`}
              role="tab"
              aria-selected={selected === index}
              aria-controls={`${id}-panel`}
              tabIndex={selected === index ? 0 : -1}
              onClick={() => startExample(index)}
              onKeyDown={(event) => {
                let next = index;
                if (event.key === "ArrowRight") next = (index + 1) % examples.length;
                else if (event.key === "ArrowLeft") next = (index + examples.length - 1) % examples.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = examples.length - 1;
                else return;
                event.preventDefault();
                startExample(next);
                tabRefs.current[next]?.focus();
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="rp-phone-stage">
        <div className="rp-phone-glow" aria-hidden="true" />
        <div className="rp-phone" role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${selected}`} tabIndex={0}>
          <div className="rp-phone__screen">
            <div className="rp-phone__status" aria-hidden="true">
              <span>9:41</span>
              <span className="rp-phone__island" />
              <span><Signal size={12} /><Wifi size={12} /><BatteryFull size={16} /></span>
            </div>
            <div className="rp-phone__contact">
              <span className="rp-phone__avatar" aria-hidden="true">L<span /></span>
              <div><p>Salon Luna</p><span>Digitale Assistentin · Receptionist+</span></div>
              <Phone size={17} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="rp-phone__connection">
              <div className="rp-phone__wave" aria-hidden="true">
                {Array.from({ length: 13 }, (_, index) => <i key={index} style={{ "--bar": index } as CSSProperties} />)}
              </div>
              <span>{phase === "ringing" ? "Anruf wird verbunden" : phase === "done" ? "Gespräch beendet" : paused ? "Vorführung pausiert" : "Gespräch läuft"}</span>
              <time aria-label={`Demodauer ${seconds} Sekunden`}>{duration}</time>
            </div>
            <div className="rp-phone__transcript-label"><span>Gesprächsmitschrift</span><span>{example.label}</span></div>
            <div className="rp-phone__transcript" ref={transcriptRef} tabIndex={0} role="region" aria-label="Gesprächsmitschrift" aria-live="off">
              {phase === "ringing" && <div className="rp-phone__ringing"><span className="rp-phone__ring-icon"><Phone size={25} strokeWidth={1.4} aria-hidden="true" /></span><p>Salon Luna<br /><span>Einen Moment bitte…</span></p></div>}
              {example.messages.slice(0, visibleCount).map((message, index) => (
                <div key={`${selected}-${run}-${index}`} className={`rp-message${message.speaker === "Kunde" ? " rp-message--customer" : ""}`} lang={selected === 4 && index > 0 ? "en" : "de"}>
                  <span>{message.speaker === "Receptionist+" && <Sparkles size={10} aria-hidden="true" />}{message.speaker === "Receptionist+" ? "Digitale Assistentin" : "Kunde"}</span>
                  <p>{message.text}</p>
                </div>
              ))}
              {phase === "talking" && visibleCount < example.messages.length && example.messages[visibleCount].speaker === "Receptionist+" && <div className="rp-phone__typing" aria-hidden="true"><i /><i /><i /></div>}
            </div>
            <div className={`rp-phone__outcome${phase === "done" ? " is-complete" : ""}`}>
              {phase === "done" ? <><span><Icon size={18} aria-hidden="true" /></span><div><strong>{example.result}</strong><small>{example.detail}</small></div><Check size={15} aria-hidden="true" /></> : <><span><Sparkles size={18} aria-hidden="true" /></span><div><strong>Receptionist+ übernimmt das Gespräch</strong><small>Du konzentrierst dich auf deine Arbeit.</small></div></>}
            </div>
            {motionPreference !== "reduce" ? (
              <div className="rp-phone__controls">
                <button type="button" aria-label={paused ? "Gesprächsvorführung fortsetzen" : "Gesprächsvorführung pausieren"} onClick={() => setPaused((value) => !value)} disabled={phase === "done"}>
                  {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}<span>{paused ? "Fortsetzen" : "Pause"}</span>
                </button>
                <button type="button" aria-label="Anrufbeispiel wiederholen" onClick={() => startExample(selected)}><RotateCcw size={14} aria-hidden="true" /><span>Wiederholen</span></button>
              </div>
            ) : <p className="rp-phone__motion-note">Das vollständige Gesprächsbeispiel wird angezeigt.</p>}
            <span className="rp-phone__home" aria-hidden="true" />
          </div>
        </div>
      </div>
      <p className="rp-demo__caption">Illustratives Gespräch mit der digitalen Assistentin des Salons.</p>
    </div>
  );
}
