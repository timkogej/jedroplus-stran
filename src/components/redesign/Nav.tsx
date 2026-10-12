"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type Variant = "flow" | "light" | "plain";

const FUNKCIJE_SUB = [
  { href: "/funkcije", label: "Glavne funkcije", text: "Koledar, CRM, opomniki, spletno naročanje" },
  { href: "/funkcije/receptionist-plus", label: "Receptionist+", text: "AI recepcionistka, ki sprejema klice" },
  { href: "/davcna-blagajna", label: "Davčna blagajna", text: "FURS blagajna, povezana z naročanjem" },
];

const isFunkcijeActive = (active?: string) =>
  !!active && (active.startsWith("/funkcije") || active === "/davcna-blagajna");

const LINKS = [
  { href: "/", label: "Domov" },
  { href: "/funkcije", label: "Funkcije", children: FUNKCIJE_SUB },
  { href: "/panoge", label: "Panoge" },
  { href: "/cenik", label: "Cenik" },
  { href: "/blog", label: "Blog" },
  { href: "/agencija", label: "Agencija" },
];

export function Nav({
  variant = "plain",
  active,
  aboutHref = "/o-nas",
  tone = "dark",
}: {
  variant?: Variant;
  active?: string;
  aboutHref?: string;
  /** Initial colour of the flow nav, so it never flashes the wrong tone before the hero takes over. */
  tone?: "light" | "dark";
}) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const cls = [
    "nav",
    variant === "flow" ? `nav--flow ${tone === "light" ? "on-light" : "on-dark"}` : "",
    variant === "light" ? "nav--light" : "",
    stuck ? "is-stuck" : "",
    open ? "is-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const menu = (
    <>
      {LINKS.map((l) =>
        l.children ? (
          <div className="nav__dd" key={l.href}>
            <Link
              href={l.href}
              className={`nav__dd-trigger${isFunkcijeActive(active) ? " is-active" : ""}`}
              aria-haspopup="true"
            >
              {l.label}
              <svg className="nav__dd-caret" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="nav__dd-panel" role="menu">
              {l.children.map((c) => (
                <Link key={c.href} href={c.href} role="menuitem" className={`nav__dd-link${active === c.href ? " is-active" : ""}`}>
                  <b>{c.label}</b>
                  <span>{c.text}</span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link
            key={l.href}
            href={l.href}
            className={active === l.href ? "is-active" : undefined}
          >
            {l.label}
          </Link>
        )
      )}
      <Link href={aboutHref}>O nas</Link>
    </>
  );

  return (
    <>
      <header className={cls}>
        <Link className="nav__logo" href="/" aria-label="Jedro+">
          <Image
            className="nav__logo-img nav__logo-img--ink"
            src="/redesign/logo.png"
            alt="Jedro+"
            width={132}
            height={34}
            priority
          />
          <Image
            className="nav__logo-img nav__logo-img--white"
            src="/redesign/logo-white.png"
            alt=""
            aria-hidden
            width={132}
            height={34}
            priority
          />
        </Link>
        <nav className="nav__menu">{menu}</nav>
        <div className="nav__cta">
          <a className="nav__login" href="https://app.jedroplus.com/login">
            Prijavi se
          </a>
          <a className="btn btn--grad" href="https://app.jedroplus.com/signup">
            Preizkusi zdaj
          </a>
          <button
            type="button"
            className="nav__burger"
            aria-label="Meni"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? " is-open" : ""}`}>
        <nav className="mobile-menu__links" aria-label="Mobilni meni">
          {LINKS.map((l) =>
            l.children ? (
              <div className={`mm-group${subOpen ? " is-open" : ""}`} key={l.href}>
                <button
                  type="button"
                  className="mm-group__btn"
                  aria-expanded={subOpen}
                  onClick={() => setSubOpen((v) => !v)}
                >
                  {l.label}
                  <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="mm-group__list">
                  <div>
                    {l.children.map((c) => (
                      <Link key={c.href} href={c.href} onClick={() => setOpen(false)}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            )
          )}
          <Link href={aboutHref} onClick={() => setOpen(false)}>
            O nas
          </Link>
        </nav>
        <div className="mobile-menu__actions">
          <a
            className="btn btn--grad btn--lg"
            href="https://app.jedroplus.com/signup"
            onClick={() => setOpen(false)}
          >
            Preizkusi zdaj
          </a>
          <a
            className="btn btn--ghost btn--lg"
            href="https://app.jedroplus.com/login"
            onClick={() => setOpen(false)}
          >
            Prijavi se
          </a>
        </div>
      </div>
    </>
  );
}
