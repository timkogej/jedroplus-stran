import Link from "next/link";
import { ArrowUpRight, CalendarCheck2, Check, Phone, Sparkles } from "lucide-react";
import { RECEPTIONIST_PATH, RECEPTIONIST_GREETING } from "@/lib/receptionist";

export function ReceptionistSpotlight() {
  return (
    <section className="section rp-spotlight" aria-labelledby="receptionist-home-heading">
      <div className="wrap rp-spotlight__grid">
        <div>
          <div className="rp-kicker">Receptionist+ <span className="new-badge">Novo</span></div>
          <h2 id="receptionist-home-heading">Vi se posvetite stranki.<br /><span>Mi sprejmemo klic.</span></h2>
          <p>AI recepcionistka govori v jeziku stranke, odgovori na vprašanja, rezervira, prestavi ali odpove termin ter pošlje opomnik. Manj prekinitev, več časa za vaše delo.</p>
          <div className="rp-spotlight__actions"><Link className="btn btn--light" href={RECEPTIONIST_PATH}>Spoznaj Receptionist+ <ArrowUpRight size={18} aria-hidden="true" /></Link><Link className="rp-text-link" href={`${RECEPTIONIST_PATH}#cenik-receptionist`}>Poglej cenik <span aria-hidden="true">→</span></Link></div>
          <span className="rp-spotlight__trial">30 brezplačnih minut za prvi preizkus</span>
        </div>
        <div className="rp-call-flow" aria-label="Od telefonskega klica do termina v koledarju">
          <div className="rp-call-flow__top"><span className="rp-call-flow__phone"><Phone size={27} strokeWidth={1.4} aria-hidden="true" /></span><span><small>KO STE PRI DELU</small><strong>Stranka pokliče.</strong></span></div>
          <div className="rp-call-flow__line" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="rp-call-flow__reply"><Sparkles size={16} aria-hidden="true" /><p>»{RECEPTIONIST_GREETING}«</p></div>
          <div className="rp-call-flow__result"><CalendarCheck2 size={23} aria-hidden="true" /><div><strong>Od pogovora do termina.</strong><span>Povezano z vašim koledarjem Jedro+.</span></div><Check size={18} aria-hidden="true" /></div>
          <span className="rp-call-flow__caption">Ponazoritev poteka klica</span>
        </div>
      </div>
    </section>
  );
}
