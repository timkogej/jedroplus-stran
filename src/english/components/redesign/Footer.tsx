// Generated from Slovenian source and src/locales/en.json.
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
                ? "An AI agency for service businesses. We bring your operations, communication and online presence into one place, quickly and intelligently."
                : "An app for service businesses that connects appointments, clients, reminders, online booking and AI in one place."}
            </p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link href="/en">Home</Link>
              </li>
              <li>
                <Link href="/en/features">Features</Link>
              </li>
              <li>
                <Link href="/en/features/receptionist-plus">Receptionist+ <span className="new-badge">New</span></Link>
              </li>
              <li>
                <Link href="/en/fiscal-cash-register">Fiscal cash register</Link>
              </li>
              <li>
                <Link href="/en/industries">Industries</Link>
              </li>
              <li>
                <Link href="/en/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/en/compare">Comparison</Link>
              </li>
              <li>
                <Link href="/en/blog">Blog</Link>
              </li>

              <li>
                <Link href="/en/agency">Agency</Link>
              </li>
              <li>
                <Link href="/en/about">About us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Follow us</h4>
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
                <h4 style={{ marginTop: 28 }}>Call us</h4>
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
                <h4 style={{ marginTop: 28 }}>Legal information</h4>
                <ul>
                  <li>
                    <Link href="/en/terms">Terms of Use</Link>
                  </li>
                  <li>
                    <Link href="/en/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/en/about">About us</Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="footer__bot">
          <span>
             © 2026 Sonja Žužek s.p. · Tax number: 97477621. All rights reserved. </span>
          <span>Made in Slovenia 🇸🇮</span>
        </div>
      </div>
    </footer>
  );
}
