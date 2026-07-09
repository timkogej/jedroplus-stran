"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type Variant = "flow" | "light" | "plain";

const LINKS = [
  { href: "/", label: "Domov" },
  { href: "/funkcije", label: "Funkcije" },
  { href: "/panoge", label: "Panoge" },
  { href: "/cenik", label: "Cenik" },
  { href: "/blog", label: "Blog" },
  { href: "/agencija", label: "Agencija" },
];

export function Nav({
  variant = "plain",
  active,
  aboutHref = "/o-nas",
}: {
  variant?: Variant;
  active?: string;
  aboutHref?: string;
}) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

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
    variant === "flow" ? "nav--flow on-dark" : "",
    variant === "light" ? "nav--light" : "",
    stuck ? "is-stuck" : "",
    open ? "is-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const menu = (
    <>
      {LINKS.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={active === l.href ? "is-active" : undefined}
        >
          {l.label}
        </Link>
      ))}
      <Link href={aboutHref}>O nas</Link>
    </>
  );

  return (
    <>
      <header className={cls}>
        <Link className="nav__logo" href="/" aria-label="Jedro+">
          <span className="nav__word">Jedro+</span>
          <Image src="/redesign/logo.png" alt="Jedro+" width={120} height={34} priority />
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
            className="nav__burger"
            aria-label="Meni"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? " is-open" : ""}`}>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href={aboutHref} onClick={() => setOpen(false)}>
          O nas
        </Link>
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
