'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Check, ChevronDown } from 'lucide-react';
import { localizedPath, pageLocale } from '@/lib/localized-routes';
import { saveLanguagePreference } from '@/lib/language-preference';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = pageLocale(pathname);
  const labels = locale === 'de' ? { choose: 'Sprache wählen', languages: 'Sprachen' } : locale === 'it' ? { choose: 'Scegli la lingua', languages: 'Lingue' } : locale === 'en' ? { choose: 'Choose language', languages: 'Languages' } : { choose: 'Izberi jezik', languages: 'Jeziki' };
  const [open, setOpen] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!wrapper.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);

  return (
    <div className="language-picker" ref={wrapper} onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
    }}>
      <button className="language-switch" type="button" ref={trigger}
        aria-label={labels.choose}
        aria-expanded={open} aria-controls={id}
        onClick={() => setOpen(value => !value)}
        onKeyDown={event => {
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            setOpen(true);
            requestAnimationFrame(() => wrapper.current?.querySelector('a')?.focus());
          }
        }}>
        {locale.toUpperCase()}<ChevronDown size={12} aria-hidden="true" />
      </button>
      {open && <nav className="language-picker__options" id={id} aria-label={labels.languages}>
        {[
          { code: 'sl', label: 'Slovenščina', href: localizedPath(pathname, 'sl'), current: locale === 'sl' },
          { code: 'en', label: 'English', href: localizedPath(pathname, 'en'), current: locale === 'en' },
          { code: 'de', label: 'Deutsch', href: localizedPath(pathname, 'de'), current: locale === 'de' },
          { code: 'it', label: 'Italiano', href: localizedPath(pathname, 'it'), current: locale === 'it' },
        ].map(language => <a key={language.code} href={language.href} hrefLang={language.code} lang={language.code}
          aria-current={language.current ? 'true' : undefined}
          onClick={event => {
            saveLanguagePreference(language.code);
            event.currentTarget.href = language.href + window.location.search + window.location.hash;
          }}>
          <span>{language.label}</span>{language.current && <Check size={15} aria-hidden="true" />}
        </a>)}
      </nav>}
    </div>
  );
}
