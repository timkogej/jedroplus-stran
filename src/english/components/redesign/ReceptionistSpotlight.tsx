// Generated from Slovenian source and src/locales/en.json.
import Link from "next/link";
import { ArrowUpRight, CalendarCheck2, Check, Phone, Sparkles } from "lucide-react";
import { RECEPTIONIST_PATH, RECEPTIONIST_GREETING } from "@/english/lib/receptionist";

export function ReceptionistSpotlight() {
  return (
    <section className="section rp-spotlight" aria-labelledby="receptionist-home-heading">
      <div className="wrap rp-spotlight__grid">
        <div>
          <div className="rp-kicker">Receptionist+ <span className="new-badge">New</span></div>
          <h2 id="receptionist-home-heading">You focus on your client.<br /><span>We take the call.</span></h2>
          <p>The AI receptionist speaks your client’s language, answers questions, books, reschedules or cancels appointments and sends reminders. Fewer interruptions, more time for your work.</p>
          <div className="rp-spotlight__actions"><Link className="btn btn--light" href={RECEPTIONIST_PATH}>Discover Receptionist+ <ArrowUpRight size={18} aria-hidden="true" /></Link><Link className="rp-text-link" href={`${RECEPTIONIST_PATH}#cenik-receptionist`}>View pricing <span aria-hidden="true">→</span></Link></div>
          <span className="rp-spotlight__trial">30 free minutes for your first trial</span>
        </div>
        <div className="rp-call-flow" aria-label="From phone call to appointment in your calendar">
          <div className="rp-call-flow__top"><span className="rp-call-flow__phone"><Phone size={27} strokeWidth={1.4} aria-hidden="true" /></span><span><small>WHILE YOU WORK</small><strong>A client calls.</strong></span></div>
          <div className="rp-call-flow__line" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="rp-call-flow__reply"><Sparkles size={16} aria-hidden="true" /><p>»{RECEPTIONIST_GREETING}«</p></div>
          <div className="rp-call-flow__result"><CalendarCheck2 size={23} aria-hidden="true" /><div><strong>From conversation to appointment.</strong><span>Connected to your Jedro+ calendar.</span></div><Check size={18} aria-hidden="true" /></div>
          <span className="rp-call-flow__caption">Illustrated call flow</span>
        </div>
      </div>
    </section>
  );
}
