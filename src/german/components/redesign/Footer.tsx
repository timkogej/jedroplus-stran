// Generated from Slovenian source and src/locales/de.json.
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
                ? "Eine KI-Agentur für Dienstleister. Wir verbinden Betrieb, Kommunikation und Onlinepräsenz schnell und intelligent an einem Ort."
                : "Eine App für Dienstleister, die Termine, Kunden, Erinnerungen, Onlinebuchung und KI verbindet."}
            </p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link href="/de">Startseite</Link>
              </li>
              <li>
                <Link href="/de/funktionen">Funktionen</Link>
              </li>
              <li>
                <Link href="/de/funktionen/receptionist-plus">Receptionist+ <span className="new-badge">Neu</span></Link>
              </li>
              <li>
                <Link href="/de/fiskalkasse">Fiskalkasse</Link>
              </li>
              <li>
                <Link href="/de/branchen">Branchen</Link>
              </li>
              <li>
                <Link href="/de/preise">Preise</Link>
              </li>
              <li>
                <Link href="/de/vergleich">Vergleich</Link>
              </li>
              <li>
                <Link href="/de/blog">Blog</Link>
              </li>

              <li>
                <Link href="/de/agentur">Agentur</Link>
              </li>
              <li>
                <Link href="/de/ueber-uns">Über uns</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Folge uns</h4>
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
                <h4 style={{ marginTop: 28 }}>Ruf uns an</h4>
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
                <h4 style={{ marginTop: 28 }}>Rechtliche Informationen</h4>
                <ul>
                  <li>
                    <Link href="/de/nutzungsbedingungen">Nutzungsbedingungen</Link>
                  </li>
                  <li>
                    <Link href="/de/datenschutz">Datenschutzerklärung</Link>
                  </li>
                  <li>
                    <Link href="/de/ueber-uns">Über uns</Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="footer__bot">
          <span>
             © 2026 Sonja Žužek s.p. · Slowenische Steuernummer: 97477621. Alle Rechte vorbehalten. </span>
          <span>In Slowenien entwickelt 🇸🇮</span>
        </div>
      </div>
    </footer>
  );
}
