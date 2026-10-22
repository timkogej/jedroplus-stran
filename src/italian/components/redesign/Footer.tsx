// Generated from Slovenian source and src/locales/it.json.
import Link from "next/link";
import Image from "next/image";

export function Footer({
  variant = "default",
}: {
  variant?: "default" | "agency";
}) {
  return (
    <footer className="footer" id="onas">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <Image
              className="footer__logo"
              src="/redesign/logo-white.png"
              alt="Jedro+"
              width={116}
              height={30}
            />
            <p>
              {variant === "agency"
                ? "Un’agenzia AI per imprese di servizi. Riuniamo operatività, comunicazione e presenza online in un unico posto, rapidamente e in modo intelligente."
                : "Un’app per imprese di servizi che collega appuntamenti, clienti, promemoria, prenotazioni online e AI in un unico posto."}
            </p>
          </div>
          <div>
            <h4>Navigazione</h4>
            <ul>
              <li>
                <Link href="/it">Home</Link>
              </li>
              <li>
                <Link href="/it/funzionalita">Funzionalità</Link>
              </li>
              <li>
                <Link href="/it/funzionalita/receptionist-plus">Receptionist+ <span className="new-badge">Novità</span></Link>
              </li>
              <li>
                <Link href="/it/cassa-fiscale">Registratore di cassa fiscale</Link>
              </li>
              <li>
                <Link href="/it/settori">Settori</Link>
              </li>
              <li>
                <Link href="/it/prezzi">Prezzi</Link>
              </li>
              <li>
                <Link href="/it/confronti">Confronto</Link>
              </li>
              <li>
                <Link href="/it/blog">Blog</Link>
              </li>

              <li>
                <Link href="/it/agenzia">Agenzia</Link>
              </li>
              <li>
                <Link href="/it/chi-siamo">Chi siamo</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Seguici</h4>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/jedroplus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
            {variant === "agency" ? (
              <>
                <h4 style={{ marginTop: 28 }}>Chiamaci</h4>
                <ul>
                  <li>
                    <a href="tel:068663410">068 663 410</a>
                  </li>
                  <li>
                    <a href="mailto:info@jedroplus.com">info@jedroplus.com</a>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <h4 style={{ marginTop: 28 }}>Informazioni legali</h4>
                <ul>
                  <li>
                    <Link href="/it/condizioni-uso">Condizioni d’uso</Link>
                  </li>
                  <li>
                    <Link href="/it/privacy">Informativa sulla privacy</Link>
                  </li>
                  <li>
                    <Link href="/it/chi-siamo">Chi siamo</Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="footer__bot">
          <span>
             © 2026 Sonja Žužek s.p. · Codice fiscale sloveno: 97477621. Tutti i diritti riservati. </span>
          <span>Realizzato in Slovenia 🇸🇮</span>
        </div>
      </div>
    </footer>
  );
}
