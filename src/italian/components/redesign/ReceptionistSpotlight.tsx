// Generated from Slovenian source and src/locales/it.json.
import Link from "next/link";
import { ArrowUpRight, CalendarCheck2, Check, Phone, Sparkles } from "lucide-react";
import { RECEPTIONIST_PATH, RECEPTIONIST_GREETING } from "@/italian/lib/receptionist";

export function ReceptionistSpotlight() {
  return (
    <section className="section rp-spotlight" aria-labelledby="receptionist-home-heading">
      <div className="wrap rp-spotlight__grid">
        <div>
          <div className="rp-kicker">Receptionist+ <span className="new-badge">Novità</span></div>
          <h2 id="receptionist-home-heading">Tu ti dedichi al cliente.<br /><span>Noi rispondiamo alla chiamata.</span></h2>
          <p>La receptionist AI parla la lingua del cliente, risponde alle domande, prenota, sposta o annulla appuntamenti e invia promemoria. Meno interruzioni, più tempo per il tuo lavoro.</p>
          <div className="rp-spotlight__actions"><Link className="btn btn--light" href={RECEPTIONIST_PATH}>Scopri Receptionist+ <ArrowUpRight size={18} aria-hidden="true" /></Link><Link className="rp-text-link" href={`${RECEPTIONIST_PATH}#cenik-receptionist`}>Vedi i prezzi <span aria-hidden="true">→</span></Link></div>
          <span className="rp-spotlight__trial">30 minuti gratuiti per la prima prova</span>
        </div>
        <div className="rp-call-flow" aria-label="Dalla chiamata all’appuntamento in calendario">
          <div className="rp-call-flow__top"><span className="rp-call-flow__phone"><Phone size={27} strokeWidth={1.4} aria-hidden="true" /></span><span><small>MENTRE LAVORI</small><strong>Il cliente chiama.</strong></span></div>
          <div className="rp-call-flow__line" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="rp-call-flow__reply"><Sparkles size={16} aria-hidden="true" /><p>»{RECEPTIONIST_GREETING}«</p></div>
          <div className="rp-call-flow__result"><CalendarCheck2 size={23} aria-hidden="true" /><div><strong>Dalla conversazione all’appuntamento.</strong><span>Collegato al tuo calendario Jedro+.</span></div><Check size={18} aria-hidden="true" /></div>
          <span className="rp-call-flow__caption">Esempio del flusso di chiamata</span>
        </div>
      </div>
    </section>
  );
}
