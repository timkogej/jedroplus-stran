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
              src="/redesign/logo.png"
              alt="Jedro+"
              width={120}
              height={30}
            />
            <p>
              {variant === "agency"
                ? "AI agencija za storitvena podjetja. Združimo poslovanje, komunikacijo in spletno prisotnost v eno jedro — hitro in pametno."
                : "Aplikacija za storitvena podjetja, ki poveže termine, stranke, opomnike, spletno naročanje in AI v eno jedro."}
            </p>
          </div>
          <div>
            <h4>Navigacija</h4>
            <ul>
              <li>
                <Link href="/">Domov</Link>
              </li>
              <li>
                <Link href="/funkcije">Funkcije</Link>
              </li>
              <li>
                <Link href="/panoge">Panoge</Link>
              </li>
              <li>
                <Link href="/cenik">Cenik</Link>
              </li>
              <li>
                <Link href="/primerjava">Primerjava</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/davcna-blagajna">Davčna blagajna</Link>
              </li>
              <li>
                <Link href="/agencija">Agencija</Link>
              </li>
              <li>
                <Link href="/o-nas">O nas</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Sledite nam</h4>
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
                <h4 style={{ marginTop: 28 }}>Pokličite</h4>
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
                <h4 style={{ marginTop: 28 }}>Pravne informacije</h4>
                <ul>
                  <li>
                    <Link href="/pogoji-uporabe">Pogoji uporabe</Link>
                  </li>
                  <li>
                    <Link href="/zasebnost">Politika zasebnosti</Link>
                  </li>
                  <li>
                    <Link href="/o-nas">O nas</Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="footer__bot">
          <span>
            © 2026 Sonja Žužek s.p. · Davčna številka: 97477621. Vse pravice
            pridržane.
          </span>
          <span>Narejeno v Sloveniji 🇸🇮</span>
        </div>
      </div>
    </footer>
  );
}
