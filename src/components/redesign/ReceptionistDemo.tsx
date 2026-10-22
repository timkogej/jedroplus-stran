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
import { RECEPTIONIST_GREETING } from "@/lib/receptionist";

const greeting = { speaker: "Receptionist+", text: RECEPTIONIST_GREETING };
const examples = [
  {
    label: "Rezervacija",
    messages: [
      greeting,
      { speaker: "Stranka", text: "Pozdravljeni, rada bi se naročila na striženje." },
      { speaker: "Receptionist+", text: "Z veseljem! Na voljo imamo veliko prostih terminov. Kateri dan bi vam najbolj ustrezal?" },
      { speaker: "Stranka", text: "Rada bi prišla v četrtek." },
      { speaker: "Receptionist+", text: "V četrtek imamo prosto ob 13.00, 14.00 in 15.00. Katera ura vam najbolj ustreza?" },
      { speaker: "Stranka", text: "Ob 14.00, prosim." },
      { speaker: "Receptionist+", text: "Dogovorjeno, vaš termin je zabeležen. Poslali vam bomo tudi opomnik. Se vidimo!" },
    ],
    result: "Termin rezerviran",
    detail: "Striženje · četrtek ob 14.00",
    icon: CalendarCheck2,
  },
  {
    label: "Prestavitev",
    messages: [
      greeting,
      { speaker: "Stranka", text: "Termin imam v četrtek. Bi ga lahko prestavila na petek?" },
      { speaker: "Receptionist+", text: "Seveda. Mi poveste svoje ime, da poiščem rezervacijo?" },
      { speaker: "Stranka", text: "Ana Novak. V petek bi lahko prišla ob 10. uri." },
      { speaker: "Receptionist+", text: "Ob 10. uri imamo prosto. Vaš termin sem prestavila na petek in posodobila opomnik." },
    ],
    result: "Termin prestavljen",
    detail: "Novi termin · petek ob 10.00",
    icon: CalendarClock,
  },
  {
    label: "Odpoved",
    messages: [
      greeting,
      { speaker: "Stranka", text: "Žal moram odpovedati jutrišnji termin. Sem Ana Novak." },
      { speaker: "Receptionist+", text: "Razumem. Imate v mislih striženje jutri ob 14.30?" },
      { speaker: "Stranka", text: "Da, ta termin. Hvala za pomoč." },
      { speaker: "Receptionist+", text: "Termin je odpovedan in sprememba zabeležena. Hvala, da ste nas obvestili." },
    ],
    result: "Odpoved zabeležena",
    detail: "Koledar je posodobljen.",
    icon: CalendarX2,
  },
  {
    label: "Vprašanje",
    messages: [
      greeting,
      { speaker: "Stranka", text: "Zanima me, ali ste odprti tudi ob sobotah." },
      { speaker: "Receptionist+", text: "Da, ob sobotah smo odprti od 8. do 13. ure. Vam pomagam poiskati še termin?" },
      { speaker: "Stranka", text: "Za zdaj potrebujem samo informacijo. Hvala lepa!" },
      { speaker: "Receptionist+", text: "Z veseljem. Lep dan vam želim!" },
    ],
    result: "Stranka je dobila odgovor",
    detail: "Izid klica · informacije",
    icon: MessageSquareText,
  },
  {
    label: "Drugi jezik",
    messages: [
      greeting,
      { speaker: "Stranka", text: "Hi! Could we speak in English? I'd like to book a haircut." },
      { speaker: "Receptionist+", text: "Of course! We have an appointment on Friday at 10. Would that work for you?" },
      { speaker: "Stranka", text: "Yes, that's perfect. Thank you!" },
      { speaker: "Receptionist+", text: "You're welcome. Your appointment is booked for Friday at 10. See you then!" },
    ],
    result: "Pogovor v jeziku stranke",
    detail: "Termin urejen · petek ob 10.00",
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
        <span className="rp-demo__label">Poglejte, kako poteka klic</span>
        <div className="rp-demo__tabs" role="tablist" aria-label="Primeri klicev">
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
              <div><p>Salon Luna</p><span>Digitalna asistentka · Receptionist+</span></div>
              <Phone size={17} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="rp-phone__connection">
              <div className="rp-phone__wave" aria-hidden="true">
                {Array.from({ length: 13 }, (_, index) => <i key={index} style={{ "--bar": index } as CSSProperties} />)}
              </div>
              <span>{phase === "ringing" ? "Vzpostavljanje klica" : phase === "done" ? "Pogovor zaključen" : paused ? "Prikaz je na premoru" : "Pogovor v teku"}</span>
              <time aria-label={`Trajanje prikaza ${seconds} sekund`}>{duration}</time>
            </div>
            <div className="rp-phone__transcript-label"><span>Prepis pogovora</span><span>{example.label}</span></div>
            <div className="rp-phone__transcript" ref={transcriptRef} tabIndex={0} role="region" aria-label="Prepis pogovora" aria-live="off">
              {phase === "ringing" && <div className="rp-phone__ringing"><span className="rp-phone__ring-icon"><Phone size={25} strokeWidth={1.4} aria-hidden="true" /></span><p>Salon Luna<br /><span>Trenutek, prosim …</span></p></div>}
              {example.messages.slice(0, visibleCount).map((message, index) => (
                <div key={`${selected}-${run}-${index}`} className={`rp-message${message.speaker === "Stranka" ? " rp-message--customer" : ""}`} lang={selected === 4 && index > 0 ? "en" : "sl"}>
                  <span>{message.speaker === "Receptionist+" && <Sparkles size={10} aria-hidden="true" />}{message.speaker === "Receptionist+" ? "Digitalna asistentka" : "Stranka"}</span>
                  <p>{message.text}</p>
                </div>
              ))}
              {phase === "talking" && visibleCount < example.messages.length && example.messages[visibleCount].speaker === "Receptionist+" && <div className="rp-phone__typing" aria-hidden="true"><i /><i /><i /></div>}
            </div>
            <div className={`rp-phone__outcome${phase === "done" ? " is-complete" : ""}`}>
              {phase === "done" ? <><span><Icon size={18} aria-hidden="true" /></span><div><strong>{example.result}</strong><small>{example.detail}</small></div><Check size={15} aria-hidden="true" /></> : <><span><Sparkles size={18} aria-hidden="true" /></span><div><strong>Za pogovor poskrbi Receptionist+</strong><small>Vi ostanete pri svojem delu.</small></div></>}
            </div>
            {motionPreference !== "reduce" ? (
              <div className="rp-phone__controls">
                <button type="button" aria-label={paused ? "Nadaljuj prikaz pogovora" : "Ustavi prikaz pogovora"} onClick={() => setPaused((value) => !value)} disabled={phase === "done"}>
                  {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}<span>{paused ? "Nadaljuj" : "Premor"}</span>
                </button>
                <button type="button" aria-label="Ponovi primer klica" onClick={() => startExample(selected)}><RotateCcw size={14} aria-hidden="true" /><span>Ponovi</span></button>
              </div>
            ) : <p className="rp-phone__motion-note">Prikazan je celoten primer pogovora.</p>}
            <span className="rp-phone__home" aria-hidden="true" />
          </div>
        </div>
      </div>
      <p className="rp-demo__caption">Ilustrativni primer klica z digitalno asistentko salona.</p>
    </div>
  );
}
