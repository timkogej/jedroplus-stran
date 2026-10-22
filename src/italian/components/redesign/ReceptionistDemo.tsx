// Generated from Slovenian source and src/locales/it.json.
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
import { RECEPTIONIST_GREETING } from "@/italian/lib/receptionist";

const greeting = { speaker: "Receptionist+", text: RECEPTIONIST_GREETING };
const examples = [
  {
    label: "Prenotazione",
    messages: [
      greeting,
      { speaker: "Cliente", text: "Buongiorno, vorrei prenotare un taglio." },
      { speaker: "Receptionist+", text: "Con piacere! Abbiamo molti appuntamenti disponibili. Quale giorno preferisce?" },
      { speaker: "Cliente", text: "Vorrei venire giovedì." },
      { speaker: "Receptionist+", text: "Giovedì siamo disponibili alle 13:00, 14:00 e 15:00. Quale orario preferisce?" },
      { speaker: "Cliente", text: "Alle 14:00, grazie." },
      { speaker: "Receptionist+", text: "Confermato, l’appuntamento è registrato. Le invieremo anche un promemoria. A presto!" },
    ],
    result: "Appuntamento prenotato",
    detail: "Taglio · giovedì alle 14:00",
    icon: CalendarCheck2,
  },
  {
    label: "Spostamento",
    messages: [
      greeting,
      { speaker: "Cliente", text: "Ho un appuntamento giovedì. Potrei spostarlo a venerdì?" },
      { speaker: "Receptionist+", text: "Certamente. Può dirmi il suo nome per trovare la prenotazione?" },
      { speaker: "Cliente", text: "Ana Novak. Venerdì potrei venire alle 10." },
      { speaker: "Receptionist+", text: "Alle 10 siamo disponibili. Ho spostato l’appuntamento a venerdì e aggiornato il promemoria." },
    ],
    result: "Appuntamento spostato",
    detail: "Nuovo appuntamento · venerdì alle 10:00",
    icon: CalendarClock,
  },
  {
    label: "Cancellazione",
    messages: [
      greeting,
      { speaker: "Cliente", text: "Purtroppo devo annullare l’appuntamento di domani. Sono Ana Novak." },
      { speaker: "Receptionist+", text: "Capisco. Si tratta del taglio di domani alle 14:30?" },
      { speaker: "Cliente", text: "Sì, proprio quello. Grazie per l’aiuto." },
      { speaker: "Receptionist+", text: "L’appuntamento è annullato e la modifica è registrata. Grazie per averci avvisato." },
    ],
    result: "Cancellazione registrata",
    detail: "Calendario aggiornato.",
    icon: CalendarX2,
  },
  {
    label: "Domanda",
    messages: [
      greeting,
      { speaker: "Cliente", text: "Vorrei sapere se siete aperti anche il sabato." },
      { speaker: "Receptionist+", text: "Sì, il sabato siamo aperti dalle 8 alle 13. Posso aiutarla a trovare un appuntamento?" },
      { speaker: "Cliente", text: "Per ora mi serviva solo questa informazione. Grazie mille!" },
      { speaker: "Receptionist+", text: "Con piacere. Le auguro una buona giornata!" },
    ],
    result: "Il cliente ha ricevuto una risposta",
    detail: "Esito chiamata · informazioni",
    icon: MessageSquareText,
  },
  {
    label: "Un’altra lingua",
    messages: [
      greeting,
      { speaker: "Cliente", text: "Hi! Could we speak in English? I'd like to book a haircut." },
      { speaker: "Receptionist+", text: "Of course! We have an appointment on Friday at 10. Would that work for you?" },
      { speaker: "Cliente", text: "Yes, that's perfect. Thank you!" },
      { speaker: "Receptionist+", text: "You're welcome. Your appointment is booked for Friday at 10. See you then!" },
    ],
    result: "Conversazioni nella lingua del cliente",
    detail: "Appuntamento fissato · venerdì alle 10:00",
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
        <span className="rp-demo__label">Guarda come si svolge una chiamata</span>
        <div className="rp-demo__tabs" role="tablist" aria-label="Esempi di chiamate">
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
              <div><p>Salon Luna</p><span>Assistente digitale · Receptionist+</span></div>
              <Phone size={17} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="rp-phone__connection">
              <div className="rp-phone__wave" aria-hidden="true">
                {Array.from({ length: 13 }, (_, index) => <i key={index} style={{ "--bar": index } as CSSProperties} />)}
              </div>
              <span>{phase === "ringing" ? "Connessione della chiamata" : phase === "done" ? "Conversazione conclusa" : paused ? "Dimostrazione in pausa" : "Conversazione in corso"}</span>
              <time aria-label={`Durata della dimostrazione ${seconds} secondi`}>{duration}</time>
            </div>
            <div className="rp-phone__transcript-label"><span>Trascrizione della chiamata</span><span>{example.label}</span></div>
            <div className="rp-phone__transcript" ref={transcriptRef} tabIndex={0} role="region" aria-label="Trascrizione della chiamata" aria-live="off">
              {phase === "ringing" && <div className="rp-phone__ringing"><span className="rp-phone__ring-icon"><Phone size={25} strokeWidth={1.4} aria-hidden="true" /></span><p>Salon Luna<br /><span>Un momento, prego…</span></p></div>}
              {example.messages.slice(0, visibleCount).map((message, index) => (
                <div key={`${selected}-${run}-${index}`} className={`rp-message${message.speaker === "Cliente" ? " rp-message--customer" : ""}`} lang={selected === 4 && index > 0 ? "en" : "it"}>
                  <span>{message.speaker === "Receptionist+" && <Sparkles size={10} aria-hidden="true" />}{message.speaker === "Receptionist+" ? "Assistente digitale" : "Cliente"}</span>
                  <p>{message.text}</p>
                </div>
              ))}
              {phase === "talking" && visibleCount < example.messages.length && example.messages[visibleCount].speaker === "Receptionist+" && <div className="rp-phone__typing" aria-hidden="true"><i /><i /><i /></div>}
            </div>
            <div className={`rp-phone__outcome${phase === "done" ? " is-complete" : ""}`}>
              {phase === "done" ? <><span><Icon size={18} aria-hidden="true" /></span><div><strong>{example.result}</strong><small>{example.detail}</small></div><Check size={15} aria-hidden="true" /></> : <><span><Sparkles size={18} aria-hidden="true" /></span><div><strong>Receptionist+ gestisce la chiamata</strong><small>Tu continui il tuo lavoro.</small></div></>}
            </div>
            {motionPreference !== "reduce" ? (
              <div className="rp-phone__controls">
                <button type="button" aria-label={paused ? "Riprendi la dimostrazione" : "Metti in pausa la dimostrazione"} onClick={() => setPaused((value) => !value)} disabled={phase === "done"}>
                  {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}<span>{paused ? "Riprendi" : "Pausa"}</span>
                </button>
                <button type="button" aria-label="Ripeti l’esempio di chiamata" onClick={() => startExample(selected)}><RotateCcw size={14} aria-hidden="true" /><span>Ripeti</span></button>
              </div>
            ) : <p className="rp-phone__motion-note">È mostrato l’intero esempio di conversazione.</p>}
            <span className="rp-phone__home" aria-hidden="true" />
          </div>
        </div>
      </div>
      <p className="rp-demo__caption">Esempio illustrativo di chiamata con l’assistente digitale del salone.</p>
    </div>
  );
}
