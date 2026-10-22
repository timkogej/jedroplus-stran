// Generated from Slovenian source and src/locales/en.json.
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
import { RECEPTIONIST_GREETING } from "@/english/lib/receptionist";

const greeting = { speaker: "Receptionist+", text: RECEPTIONIST_GREETING };
const examples = [
  {
    label: "Booking",
    messages: [
      greeting,
      { speaker: "Client", text: "Hello, I’d like to book a haircut." },
      { speaker: "Receptionist+", text: "Of course! We have plenty of appointments available. Which day would suit you best?" },
      { speaker: "Client", text: "I’d like to come on Thursday." },
      { speaker: "Receptionist+", text: "On Thursday, we have openings at 13:00, 14:00 and 15:00. Which time suits you best?" },
      { speaker: "Client", text: "At 14:00, please." },
      { speaker: "Receptionist+", text: "All booked. We’ll also send you a reminder. See you then!" },
    ],
    result: "Appointment booked",
    detail: "Haircut · Thursday at 14:00",
    icon: CalendarCheck2,
  },
  {
    label: "Rescheduling",
    messages: [
      greeting,
      { speaker: "Client", text: "I have an appointment on Thursday. Could I move it to Friday?" },
      { speaker: "Receptionist+", text: "Of course. Could you tell me your name so I can find your booking?" },
      { speaker: "Client", text: "Ana Novak. I could come on Friday at 10." },
      { speaker: "Receptionist+", text: "We have a slot at 10. I’ve moved your appointment to Friday and updated the reminder." },
    ],
    result: "Appointment rescheduled",
    detail: "New appointment · Friday at 10:00",
    icon: CalendarClock,
  },
  {
    label: "Cancellation",
    messages: [
      greeting,
      { speaker: "Client", text: "Unfortunately, I need to cancel tomorrow’s appointment. My name is Ana Novak." },
      { speaker: "Receptionist+", text: "I understand. Is that the haircut tomorrow at 14:30?" },
      { speaker: "Client", text: "Yes, that’s the one. Thank you for your help." },
      { speaker: "Receptionist+", text: "The appointment is cancelled and the change has been recorded. Thank you for letting us know." },
    ],
    result: "Cancellation recorded",
    detail: "Calendar updated.",
    icon: CalendarX2,
  },
  {
    label: "Question",
    messages: [
      greeting,
      { speaker: "Client", text: "Are you open on Saturdays too?" },
      { speaker: "Receptionist+", text: "Yes, we’re open from 8 to 13 on Saturdays. Would you like help finding an appointment?" },
      { speaker: "Client", text: "I only needed the opening hours for now. Thank you!" },
      { speaker: "Receptionist+", text: "You’re welcome. Have a lovely day!" },
    ],
    result: "Client’s question answered",
    detail: "Call outcome · information",
    icon: MessageSquareText,
  },
  {
    label: "Another language",
    messages: [
      greeting,
      { speaker: "Client", text: "Hallo! Können wir Deutsch sprechen? Ich möchte einen Haarschnitt buchen." },
      { speaker: "Receptionist+", text: "Natürlich! Am Freitag um 10 Uhr ist ein Termin frei. Passt Ihnen das?" },
      { speaker: "Client", text: "Ja, das passt perfekt. Vielen Dank!" },
      { speaker: "Receptionist+", text: "Gern geschehen. Ihr Termin ist am Freitag um 10 Uhr gebucht. Bis dann!" },
    ],
    result: "Conversations in the client’s language",
    detail: "Appointment arranged · Friday at 10:00",
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
        <span className="rp-demo__label">See how a call works</span>
        <div className="rp-demo__tabs" role="tablist" aria-label="Call examples">
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
              <div><p>Salon Luna</p><span>Digital assistant · Receptionist+</span></div>
              <Phone size={17} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="rp-phone__connection">
              <div className="rp-phone__wave" aria-hidden="true">
                {Array.from({ length: 13 }, (_, index) => <i key={index} style={{ "--bar": index } as CSSProperties} />)}
              </div>
              <span>{phase === "ringing" ? "Connecting the call" : phase === "done" ? "Call ended" : paused ? "Demo paused" : "Call in progress"}</span>
              <time aria-label={`Demo duration ${seconds} seconds`}>{duration}</time>
            </div>
            <div className="rp-phone__transcript-label"><span>Call transcript</span><span>{example.label}</span></div>
            <div className="rp-phone__transcript" ref={transcriptRef} tabIndex={0} role="region" aria-label="Call transcript" aria-live="off">
              {phase === "ringing" && <div className="rp-phone__ringing"><span className="rp-phone__ring-icon"><Phone size={25} strokeWidth={1.4} aria-hidden="true" /></span><p>Salon Luna<br /><span>One moment, please…</span></p></div>}
              {example.messages.slice(0, visibleCount).map((message, index) => (
                <div key={`${selected}-${run}-${index}`} className={`rp-message${message.speaker === "Client" ? " rp-message--customer" : ""}`} lang={selected === 4 && index > 0 ? "de" : "en"}>
                  <span>{message.speaker === "Receptionist+" && <Sparkles size={10} aria-hidden="true" />}{message.speaker === "Receptionist+" ? "Digital assistant" : "Client"}</span>
                  <p>{message.text}</p>
                </div>
              ))}
              {phase === "talking" && visibleCount < example.messages.length && example.messages[visibleCount].speaker === "Receptionist+" && <div className="rp-phone__typing" aria-hidden="true"><i /><i /><i /></div>}
            </div>
            <div className={`rp-phone__outcome${phase === "done" ? " is-complete" : ""}`}>
              {phase === "done" ? <><span><Icon size={18} aria-hidden="true" /></span><div><strong>{example.result}</strong><small>{example.detail}</small></div><Check size={15} aria-hidden="true" /></> : <><span><Sparkles size={18} aria-hidden="true" /></span><div><strong>Receptionist+ handles the call</strong><small>You focus on your work.</small></div></>}
            </div>
            {motionPreference !== "reduce" ? (
              <div className="rp-phone__controls">
                <button type="button" aria-label={paused ? "Resume conversation demo" : "Pause conversation demo"} onClick={() => setPaused((value) => !value)} disabled={phase === "done"}>
                  {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}<span>{paused ? "Resume" : "Pause"}</span>
                </button>
                <button type="button" aria-label="Replay call example" onClick={() => startExample(selected)}><RotateCcw size={14} aria-hidden="true" /><span>Replay</span></button>
              </div>
            ) : <p className="rp-phone__motion-note">The full conversation example is shown.</p>}
            <span className="rp-phone__home" aria-hidden="true" />
          </div>
        </div>
      </div>
      <p className="rp-demo__caption">Illustrative call with the salon’s digital assistant.</p>
    </div>
  );
}
