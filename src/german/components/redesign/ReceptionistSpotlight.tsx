// Generated from Slovenian source and src/locales/de.json.
import Link from "next/link";
import { ArrowUpRight, CalendarCheck2, Check, Phone, Sparkles } from "lucide-react";
import { RECEPTIONIST_PATH, RECEPTIONIST_GREETING } from "@/german/lib/receptionist";

export function ReceptionistSpotlight() {
  return (
    <section className="section rp-spotlight" aria-labelledby="receptionist-home-heading">
      <div className="wrap rp-spotlight__grid">
        <div>
          <div className="rp-kicker">Receptionist+ <span className="new-badge">Neu</span></div>
          <h2 id="receptionist-home-heading">Du widmest dich deinem Kunden.<br /><span>Wir nehmen den Anruf an.</span></h2>
          <p>Die KI-Rezeptionistin spricht die Kundensprache, beantwortet Fragen, bucht, verschiebt oder storniert Termine und sendet Erinnerungen. Weniger Unterbrechungen, mehr Zeit für deine Arbeit.</p>
          <div className="rp-spotlight__actions"><Link className="btn btn--light" href={RECEPTIONIST_PATH}>Receptionist+ entdecken <ArrowUpRight size={18} aria-hidden="true" /></Link><Link className="rp-text-link" href={`${RECEPTIONIST_PATH}#cenik-receptionist`}>Preise ansehen <span aria-hidden="true">→</span></Link></div>
          <span className="rp-spotlight__trial">30 kostenlose Minuten für deinen ersten Test</span>
        </div>
        <div className="rp-call-flow" aria-label="Vom Anruf zum Termin im Kalender">
          <div className="rp-call-flow__top"><span className="rp-call-flow__phone"><Phone size={27} strokeWidth={1.4} aria-hidden="true" /></span><span><small>WÄHREND DU ARBEITEST</small><strong>Ein Kunde ruft an.</strong></span></div>
          <div className="rp-call-flow__line" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="rp-call-flow__reply"><Sparkles size={16} aria-hidden="true" /><p>»{RECEPTIONIST_GREETING}«</p></div>
          <div className="rp-call-flow__result"><CalendarCheck2 size={23} aria-hidden="true" /><div><strong>Vom Gespräch zum Termin.</strong><span>Mit deinem Jedro+ Kalender verbunden.</span></div><Check size={18} aria-hidden="true" /></div>
          <span className="rp-call-flow__caption">Illustration des Anrufablaufs</span>
        </div>
      </div>
    </section>
  );
}
