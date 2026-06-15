# Han Bin Lee — Ophthalmology Design System

A clean, modern design system for the practice of **Miss Han Bin Lee, Consultant Ophthalmologist** (London & Surrey). It elevates the existing practice website into a coherent, reusable brand language — petrol-teal and gold on a cool clinical slate, set in Source Sans Pro — for web, print, slides and prototypes.

> *"Advancing surgical excellence through digital integration and precision patient care."*

---

## Brand context

Miss Han Bin Lee is a consultant ophthalmologist holding substantive posts at **Frimley Health NHS Foundation Trust** and **Benenden Hospital**, with private clinics at **Parkside**. Her practice specialises in:

- **Cataract surgery**
- **Corneal conditions** — she is a recognised **EndoArt® Pioneer**, having performed one of the first commercial artificial-cornea transplants (covered by the BBC and Frimley Health NHS)
- **Dry eye management**
- **YAG laser capsulotomy**

The audience is prospective patients and referrers: the tone is reassuring, precise and credible — a balance of clinical authority and human warmth.

### Sources
- **Codebase:** `hanbinlee/` — a Jekyll site on the *Type-on-Strap* theme (`sylhare/Type-on-Strap`), with custom pages for the clinical profile, fees and press release. Brand colours, the Source Sans Pro webfont, the eye logo and photography were lifted from here.
- **Original logo:** `assets/brand/original-logo.jfif` — serif "Han Bin Lee" wordmark with a calligraphic eye whose iris is a Korean *taegeuk* (a heritage nod). Transparent derivatives in `assets/brand/logo-full.png` and `assets/brand/logo-mark.png`.
- Live references cited in the source: BBC article on the artificial cornea; Frimley Health NHS news.

---

## Content fundamentals

How the practice writes:

- **Voice:** first person from the consultant in profile/bio copy ("My practice is grounded in precision…"), third person for formal/SEO contexts ("Miss Han Bin Lee is a highly experienced consultant…"). Addresses the patient as **you** in instructional copy ("Please have your authorisation code ready").
- **Register:** British English, formal-but-warm. Spellings: *specialise, centred, paediatric*. Honorific is **"Miss"** (UK surgical convention — never "Dr").
- **Tone:** confident and reassuring, never salesy. Leads with patient benefit ("Clearer vision, expertly restored"), backs it with credentials. Precision and innovation are recurring themes ("digital integration", "predictive modelling", "precision patient care").
- **Casing:** sentence case for headings and buttons. Uppercase reserved for small eyebrow labels only (e.g. *SPECIALIST SERVICES*).
- **Numbers:** fees as `£250`, phone as `07737 228 164`. Be concrete and transparent about pricing.
- **No emoji.** Icons carry visual meaning instead. Avoid exclamation marks and hype.
- **Punctuation:** en-dashes for asides and ranges; mission statements set in italic quotes.

Example phrases: "Book a consultation" · "No GP referral required" · "EndoArt® Pioneer" · "Consultant-led assessment" · "We'll confirm your appointment by text within one working day."

---

## Visual foundations

- **Colour vibe:** a signature **petrol-teal** (`#007A87`, deep `#004A55`) reads as clean, clinical and trustworthy — cool, never cold. A **gold** accent (`#FFC107`, from the favicon spark and the EndoArt pioneer award) is used *sparingly* for distinctions only. Neutrals are a slightly cool slate. White and a pale teal `tint`/`mist` carry most surfaces.
- **Type:** **Source Sans Pro** throughout — a humanist sans that is legible and approachable. Bold (700) for display and headings, semibold (600) for UI, regular (400) for body. Tight tracking on large headings; an uppercase wide-tracked eyebrow sits above section titles. The *logo* alone uses a serif wordmark (brand asset, not a UI font).
- **Backgrounds:** predominantly white and pale-teal washes; one soft top-down `teal-50 → white` gradient on the hero. No heavy gradients, no textures, no patterns. Photography (real clinical portraiture, warm daylight, shallow depth) provides the colour; supporting surfaces stay quiet.
- **Imagery:** warm, real, human — genuine portraits in clinical/award settings, not stock abstractions. Rounded corners (`--radius-2xl`), a thin white frame and soft shadow lift hero images off the page.
- **Cards:** white, `--radius-card` (16px), a hairline `--border-subtle` and a soft, cool-tinted `--shadow-card`. Interactive cards lift 2px and deepen to `--shadow-lg` on hover. Tinted (`--surface-tint`) and mist (`--surface-mist`) variants for quieter blocks.
- **Borders & dividers:** 1px `--neutral-200`; inputs use a 1.5px border that turns teal on focus with a 3px teal focus ring (`--focus-ring`).
- **Corner radii:** controls 8px, cards 16px, hero/feature blocks 24px, pills/toggles fully rounded. Consistent and generous — modern, not sharp.
- **Elevation:** a single soft shadow family tinted with teal-black (`rgba(6,38,44,…)`) — xs → xl. Shadows are diffuse and low-contrast; nothing harsh.
- **Motion:** quick and understated. `--duration-fast` (140ms) for hovers, `--duration-base` (200ms) for toggles/accordions, `--ease-standard` `cubic-bezier(0.2,0,0,1)`. Buttons nudge down 1px on press; cards translateY(-2px) on hover. No bounces, no decorative loops.
- **Hover/press:** primary buttons darken one teal step on hover; secondary/ghost fill with `teal-50`; press states darken and shift down 1px. Links shift from `teal-600` to `teal-700`.
- **Transparency & blur:** reserved for the sticky header — `rgba(255,255,255,0.86)` + 12px backdrop blur — so content scrolls cleanly beneath. Used purposefully, not decoratively.
- **Layout:** centred max-width containers (`1100px` content, `880px` reading), generous 40px gutters, `4px` spacing grid. Section rhythm alternates white and tint/mist backgrounds; a deep-teal CTA band anchors page ends.

---

## Iconography

- **System:** [**Lucide**](https://lucide.dev) — clean, 2px-stroke, rounded line icons that match the modern-clinical aesthetic. Loaded from CDN (`unpkg.com/lucide`) and rendered via `<i data-lucide="name"></i>` + `lucide.createIcons()`.
- **Substitution flag:** the original Jekyll theme shipped **Font Awesome** (solid, heavier) and a few hand-inlined SVGs. We standardised on **Lucide** for a lighter, more contemporary feel. If you need exact parity with the live site, swap back to Font Awesome — but Lucide is the system default.
- Common icons: `eye`, `scan-eye`, `droplet`, `zap` (services); `calendar-check`, `phone`, `mail`, `message-circle` (contact/booking); `award`, `shield-check`, `check-circle-2` (trust); `map-pin`, `arrow-right`, `arrow-up-right`.
- **No emoji**, ever. Icons always pair with a text label for accessibility.
- The **eye mark** (`assets/brand/logo-mark.png`) is the brand glyph — use it, don't redraw eyes as icons.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point (consumers link this). `@import`s the token + base layer only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter for use in Claude Code.

**Tokens** (`tokens/`)
- `colors.css` — teal/gold/neutral ramps + semantic aliases (`--color-primary`, `--text-body`, `--surface-tint`, …) + brand-mark heritage colours.
- `typography.css` — family, weights, type scale, tracking, semantic roles.
- `spacing.css` — spacing grid, radius, shadow, motion, layout, z-index.
- `fonts.css` — `@font-face` (local Source Sans Pro) + Source Sans 3 (Google) for intermediate weights.
- `base.css` — element resets and brand defaults.

**Foundation cards** (`guidelines/`) — specimen cards shown in the Design System tab: colours (primary, accent, neutral, semantic, surfaces), type (scale, family, pairing), spacing (scale, radius, elevation), brand (logo, imagery).

**Components** (`components/`) — reusable React primitives (`window.HanBinLeeOphthalmologyDesignSystem_17f2f2`):
- `core/` — Button, IconButton, Badge, Tag, Avatar, Card
- `forms/` — Input, Textarea, Select, Checkbox, SegmentedControl
- `feedback/` — Callout, Accordion

**UI kits** (`ui_kits/`)
- `practice-website/` — interactive click-through of the full practice site (home, profile, fees, booking, press).

**Assets** (`assets/`)
- `brand/` — `logo-full.png`, `logo-mark.png`, `original-logo.jfif`, `eye-favicon.svg`
- `images/` — `portrait.jpg`, `practice-banner.jpg`, `endoart-award.jpg`
- `fonts/` — Source Sans Pro woff2 (400/700 + italics)

---

## Using the system

Link the stylesheet and read components off the global namespace:

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script>
  const { Button, Card, SegmentedControl } = window.HanBinLeeOphthalmologyDesignSystem_17f2f2;
</script>
```

Reference colours, type and spacing through the semantic CSS variables (`var(--color-primary)`, `var(--text-body)`, `var(--space-6)`) rather than raw hex — they carry the brand and keep everything consistent.
