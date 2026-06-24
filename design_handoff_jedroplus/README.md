# Predaja: JedroPlus — prenova spletne strani

> **Za Claude Code:** Ta mapa vsebuje **referenčni dizajn v obliki HTML datotek**. To so prototipi, ki prikazujejo želeni izgled in obnašanje strani — **niso nujno produkcijska koda za neposredno kopiranje**. Tvoja naloga je, da te dizajne **poustvariš v obstoječem projektu/kodni bazi** (uporabi njene obstoječe vzorce: React, Vue, Astro, navaden HTML/CSS, kar že je). Če projekt nima okvira, so te HTML datoteke že povsem uporabne kot statična stran in jih lahko prilagodiš/vključiš neposredno.

---

## Pregled

JedroPlus (Jedro+) je SaaS aplikacija za storitvena podjetja — povezuje termine, stranke, opomnike, spletno naročanje in AI v eno jedro. Ta paket je **prenovljena, uredniško zasnovana (editorial) marketinška spletna stran** z več podstranmi.

## Stopnja izdelave (fidelity)

**High-fidelity (hi-fi).** Barve, tipografija, razmiki in razporeditev so dokončni. Poustvari UI čim bolj natančno (pixel-perfect) z orodji obstoječe kodne baze. Vsa besedila (copy) v datotekah so dokončna in v slovenščini.

---

## Strani (Screens / Views)

| Datoteka | Stran | Namen |
|---|---|---|
| `index.html` | Domov | Hero, prednosti, pregled funkcij, panoge, FAQ, CTA, noga |
| `funkcije.html` | Funkcije | Podroben prikaz funkcionalnosti v mreži |
| `cenik.html` | Cenik | Cenovni paketi / naročnine |
| `panoge.html` | Panoge | Razdelitveni rozcepnik po dejavnostih |
| `panoge/*.html` | Posamezne panoge | Frizerski saloni, wellness, fitnes, klinike, avtoservisi, coaching, poslovne storitve, ostalo |
| `agencija.html` | Agencija | Stran za agencijsko/partnersko ponudbo |

Navigacija med stranmi poteka z navadnimi relativnimi povezavami (`href="index.html"` ipd.), zato struktura map mora ostati nespremenjena.

---

## Designerski tokeni (Design Tokens)

Vsi tokeni so definirani kot CSS spremenljivke v `:root` na vrhu vsakega `<style>` bloka.

### Barve
```
--bg:        #FFFFFF   /* glavno ozadje (platno) */
--bg-soft:   #F6F6F3   /* nežno sivo ozadje sekcij */
--bg-deep:   #0C0D10   /* temne sekcije */
--ink:       #0E0E12   /* glavno besedilo */
--ink-2:     #44454C   /* sekundarno besedilo */
--muted:     #82838C   /* mehko / namigi */
--line:      #E9E9E4   /* svetle ločnice */
--line-2:    #1d1e24   /* temne ločnice */

/* Gradient poudarek (iz logotipa Jedro+) */
--violet:    #6E5BF6
--blue:      #3D8BF5
--teal:      #25D3C0
--accent:    #4F7BF6
--grad:      linear-gradient(108deg, #6E5BF6 0%, #3D8BF5 48%, #25D3C0 100%)
--grad-soft: linear-gradient(108deg, rgba(110,91,246,.14), rgba(61,139,245,.12) 50%, rgba(37,211,192,.14))
```

### Tipografija
- **Display / naslovi:** „Inter Display"/„Inter" — `font-weight: 300`, `letter-spacing: -.04em`, `line-height: 1.08`
- **Besedilo:** „General Sans" (Fontshare) — osnovna velikost `17px`, `line-height: 1.55`, `letter-spacing: -.01em`
- **Akcent (logo/wordmark):** „Baloo 2" (700/800)
- Naslovi so fluidni: `h1: clamp(44px, 7vw, 104px)`, `h2: clamp(34px, 4.6vw, 68px)`, `h3: clamp(22px, 2vw, 30px)`
- **Gradient besedilo:** `.grad-text` — gradient z `background-clip: text`
- **Eyebrow** (mala oznaka nad naslovi): `12.5px`, `font-weight: 600`, `letter-spacing: .16em`, `text-transform: uppercase`, s piko v gradientu

Povezave do pisav (vključene kot `@import` v CSS):
```
https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300..700
https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700
https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800
```

### Metrike / razmiki
```
--maxw:   1480px           /* maks. širina vsebine */
--gutter: clamp(20px, 5vw, 64px)
--r-sm: 12px   --r: 18px   --r-lg: 28px   --r-xl: 40px   /* zaobljenost robov */
--ease: cubic-bezier(.22,.61,.36,1)
section padding-block: clamp(76px, 11vh, 152px)
```

### Sekcije
- `.section--soft` → ozadje `--bg-soft`
- `.section--dark` → ozadje `--bg-deep`, belo besedilo
- `.wrap` → centrirana vsebina, maks. širina `--maxw`, stranski padding `--gutter`

---

## Interakcije in obnašanje
- Gladko drsenje (`scroll-behavior: smooth`) za sidrne povezave
- Gumbi `.btn` z gradientnim poudarkom; hover stanja so v CSS
- Kartice panog z barvnimi prelivi (`--p-bg`, `--p-tint`) podanimi inline na elementih
- Responzivnost je urejena s `clamp()` in mrežami; preveri obnašanje na mobilnih širinah

## Sredstva (Assets)
- **Logotip in slike herojev** so večinoma **vdelani kot base64 data-URI neposredno v HTML** — torej so datoteke samozadostne.
- Dodatne slike so v mapi `assets/` (`hero-bg.jpg`, `hero-salon.jpg`, `rezultati-stranka.jpg`).
- `jedro-logo.png` — ločen logotip, če ga potrebuješ kot datoteko.

---

## Datoteke v tem paketu
```
design_handoff_jedroplus/
├── README.md            ← ta datoteka
├── index.html           ← domača stran (referenca št. 1)
├── funkcije.html
├── cenik.html
├── panoge.html
├── agencija.html
├── jedro-logo.png
├── assets/              ← slike, na katere se sklicujejo strani
└── panoge/              ← 8 podstrani po dejavnostih
```

## Predlagan postopek za Claude Code
1. Odpri `index.html` v brskalniku in poglej želeni izgled.
2. Ugotovi okvir obstoječega projekta (React/Astro/HTML…).
3. Prenesi designerske tokene zgoraj v obstoječi sistem (CSS spremenljivke / theme).
4. Poustvari vsako stran s komponentami obstoječe kodne baze, pri čemer ohrani natančne barve, tipografijo in razmike.
5. Ohrani slovenska besedila iz datotek nespremenjena.
6. Poskrbi za enako navigacijo in povezave med stranmi.
