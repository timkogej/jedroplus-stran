"use client";

import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, CalendarCheck2, ChevronDown, LayoutGrid, MessageSquareText, QrCode, ReceiptText, SlidersHorizontal, Sparkles, Tag, UsersRound, Phone } from "lucide-react";

type Variant = "flow" | "light" | "plain";

const FEATURES = [
  { href: "/funkcije/spletno-narocanje", label: "Spletno naročanje", text: "Stranke rezervirajo svoj termin 24/7.", icon: CalendarCheck2 },
  { href: "/funkcije/sms-opomniki", label: "SMS opomniki", text: "Pravo sporočilo pred vsakim obiskom.", icon: MessageSquareText },
  { href: "/funkcije/crm-baza-strank", label: "Baza strank", text: "Kontakti in zgodovina na enem mestu.", icon: UsersRound },
  { href: "/funkcije/ai-komunikacija", label: "AI komunikacija", text: "Osebna sporočila v vašem tonu.", icon: Sparkles },
  { href: "/funkcije/promocije-popusti", label: "Promocije in popusti", text: "Ponudbe za več obiska.", icon: Tag },
  { href: "/funkcije/resursi", label: "Sobe in oprema", text: "Uskladite izvajalce, prostore in opremo.", icon: SlidersHorizontal },
  { href: "/funkcije/zahteve-za-termin", label: "Zahteve za termin", text: "Vi potrdite, kdaj se vidite.", icon: LayoutGrid },
  { href: "/funkcije/qr-kode-booking-dizajni", label: "Booking dizajni in QR kode", text: "Naročanje v barvah vaše znamke.", icon: QrCode },
];

const LINKS = [
  { href: "/sl", label: "Domov" },
  { href: "/funkcije", label: "Funkcije" },
  { href: "/panoge", label: "Panoge" },
  { href: "/cenik", label: "Cenik" },
  { href: "/blog", label: "Blog" },
  { href: "/agencija", label: "Agencija" },
];

export function Nav({ variant = "plain", active, aboutHref = "/o-nas", tone = "dark" }: {
  variant?: Variant;
  active?: string;
  aboutHref?: string;
  tone?: "light" | "dark";
}) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const featuresButtonRef = useRef<HTMLButtonElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const featuresActive = !!active && (active.startsWith("/funkcije") || active === "/davcna-blagajna");

  const closeMenus = () => {
    setOpen(false);
    setFeaturesOpen(false);
    setMobileFeaturesOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!featuresOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) setFeaturesOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFeaturesOpen(false);
        featuresButtonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [featuresOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1101px)");
    const onChange = () => closeMenus();
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    const previousInert = background.map((element) => element.inert);
    background.forEach((element) => { element.inert = true; });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenus();
        burgerRef.current?.focus();
      }
      if (event.key !== "Tab") return;
      const focusable = [
        ...Array.from(headerRef.current?.querySelectorAll<HTMLElement>("a[href], button") ?? []),
        ...Array.from(mobileRef.current?.querySelectorAll<HTMLElement>("a[href], button") ?? []),
      ].filter((el) => el.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach((element, index) => { element.inert = previousInert[index]; });
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const startsDark = variant === "flow" && tone === "dark";
  const cls = ["nav", variant === "flow" ? `nav--flow ${tone === "light" ? "on-light" : "on-dark"}` : "", variant === "light" ? "nav--light" : "", stuck ? "is-stuck" : "", open ? "is-open" : "", featuresOpen ? "is-menu-open" : ""].filter(Boolean).join(" ");

  return (
    <>
      <header className={cls} ref={headerRef}>
        <Link className="nav__logo" href="/sl" aria-label="Jedro+ — domov" onClick={closeMenus}>
          <Image className="nav__logo-img nav__logo-img--ink" src="/redesign/logo.png" alt="Jedro+" width={132} height={34} priority={!startsDark} />
          <Image className="nav__logo-img nav__logo-img--white" src="/redesign/logo-white.png" alt="" aria-hidden width={132} height={34} priority={startsDark} />
        </Link>
        <nav className="nav__menu" aria-label="Glavna navigacija">
          {LINKS.map((link) => link.href === "/funkcije" ? (
            <div className="nav__dd" key={link.href} ref={dropdownRef} onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFeaturesOpen(false);
            }}>
              <button ref={featuresButtonRef} type="button" className={`nav__dd-trigger${featuresActive ? " is-active" : ""}`} aria-expanded={featuresOpen} aria-controls={`${id}-features`} onClick={() => setFeaturesOpen((value) => !value)}>
                Funkcije <ChevronDown size={13} aria-hidden="true" />
              </button>
              <div id={`${id}-features`} className="nav__dd-panel" hidden={!featuresOpen}>
                  <div className="nav__dd-main">
                    <p className="nav__dd-heading">Povežite svoj vsakdan</p>
                    <div className="nav__dd-grid">
                      {FEATURES.map(({ icon: Icon, ...feature }) => (
                        <Link key={feature.href} href={feature.href} className="nav__dd-link" aria-current={active === feature.href ? "page" : undefined} onClick={closeMenus}>
                          <span className="nav__dd-icon"><Icon size={19} strokeWidth={1.6} aria-hidden="true" /></span>
                          <span><b>{feature.label}</b><small>{feature.text}</small></span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="nav__dd-aside">
                    <Link className="nav__spotlight" href="/funkcije/receptionist-plus" onClick={closeMenus} aria-current={active === "/funkcije/receptionist-plus" ? "page" : undefined}>
                      <span className="nav__spotlight-top"><Phone size={24} strokeWidth={1.5} aria-hidden="true" /><span className="new-badge">Novo</span></span>
                      <strong>Receptionist+</strong>
                      <span>AI recepcionistka, ki sprejme klic in uredi termin, medtem ko vi delate.</span>
                      <span className="nav__spotlight-more">Spoznajte Receptionist+ <ArrowUpRight size={17} aria-hidden="true" /></span>
                    </Link>
                    <Link className="nav__dd-module" href="/davcna-blagajna" onClick={closeMenus}><ReceiptText size={19} aria-hidden="true" /><span>Davčna blagajna</span><ArrowUpRight size={15} aria-hidden="true" /></Link>
                  </div>
                  <Link className="nav__dd-all" href="/funkcije" onClick={closeMenus}><span>Poglej vse funkcije</span><ArrowUpRight size={18} aria-hidden="true" /></Link>
                </div>
            </div>
          ) : (
            <Link key={link.href} href={link.href} className={active === link.href ? "is-active" : undefined} aria-current={active === link.href ? "page" : undefined} onClick={closeMenus}>{link.label}</Link>
          ))}
          <Link href={aboutHref} onClick={closeMenus}>O nas</Link>
        </nav>
        <div className="nav__cta">
          <LanguageSwitcher />
          <a className="nav__login" href="https://app.jedroplus.com/login">Prijavi se</a>
          <a className="btn btn--grad" href="https://app.jedroplus.com/signup">Preizkusi zdaj</a>
          <button ref={burgerRef} type="button" className="nav__burger" aria-label={open ? "Zapri meni" : "Odpri meni"} aria-expanded={open} aria-controls={`${id}-mobile`} onClick={() => { setOpen((value) => !value); setMobileFeaturesOpen(false); }}><span /><span /></button>
        </div>
      </header>
      {open && (
        <div className="mobile-menu is-open" id={`${id}-mobile`} ref={mobileRef}>
          <nav className="mobile-menu__links" aria-label="Mobilna navigacija">
            {LINKS.map((link) => link.href === "/funkcije" ? (
              <div className={`mm-group${mobileFeaturesOpen ? " is-open" : ""}`} key={link.href}>
                <button type="button" className="mm-group__btn" aria-expanded={mobileFeaturesOpen} aria-controls={`${id}-mobile-features`} onClick={() => setMobileFeaturesOpen((value) => !value)}>Funkcije <ChevronDown size={18} aria-hidden="true" /></button>
                {mobileFeaturesOpen && <div id={`${id}-mobile-features`} className="mm-features">
                  <Link className="mm-features__featured" href="/funkcije/receptionist-plus" onClick={closeMenus}><Phone size={18} aria-hidden="true" /><span>Receptionist+</span><span className="new-badge">Novo</span></Link>
                  {FEATURES.map((feature) => <Link key={feature.href} href={feature.href} onClick={closeMenus}>{feature.label}</Link>)}
                  <Link href="/davcna-blagajna" onClick={closeMenus}>Davčna blagajna</Link>
                  <Link className="mm-features__all" href="/funkcije" onClick={closeMenus}>Poglej vse funkcije <ArrowUpRight size={17} aria-hidden="true" /></Link>
                </div>}
              </div>
            ) : <Link key={link.href} href={link.href} onClick={closeMenus} aria-current={active === link.href ? "page" : undefined}>{link.label}</Link>)}
            <Link href={aboutHref} onClick={closeMenus}>O nas</Link>
          </nav>
          <div className="mobile-menu__actions">
            <a className="btn btn--grad btn--lg" href="https://app.jedroplus.com/signup">Preizkusi zdaj</a>
            <a className="btn btn--ghost btn--lg" href="https://app.jedroplus.com/login">Prijavi se</a>
          </div>
        </div>
      )}
    </>
  );
}
