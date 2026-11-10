# amudev: Design System

> Status: **draft v0.1**. Tokens are defined as CSS custom properties. Values marked `DECISION:` are placeholders for you to choose.

Guiding principle: **it should look like a well-typeset paper that happens to live on the web.** Typography does the work that cards, shadows, and gradients do on other sites.

---

## 1. Typography

### Typeface: **STIX Two Text** (decided 2026-11-10)

The closest web font to Times New Roman, made for scientific and academic publishing. It has true small caps and old-style numbers, and it's free on Google Fonts (weights 400/600 plus italic). Times New Roman stays as the system fallback. The candidates we compared are kept below for reference.

| Option | Character | Notes |
|---|---|---|
| **STIX Two Text** | Closest to Times; made for scientific publishing | The most "academic paper" of the four. Has true small caps and math support. |
| **Source Serif 4** | Times-adjacent, sturdier, more modern | Very readable on screens, with optical sizes. A safe, professional choice. |
| **Newsreader** | Editorial, slightly literary | Optical sizes; a bit warmer. |
| **EB Garamond** | Classical, bookish | Beautiful, but thinner on screens and less "technical". |
| *Times New Roman* | The original | Kept as the **system fallback** in every stack. It isn't installed on most Android or Linux devices, so it can't be the only choice. |

```css
--font-serif: "STIX Two Text", "Times New Roman", Times, serif;
--font-mono:  "IBM Plex Mono", ui-monospace, "SF Mono", Menlo, monospace; /* code + optional metadata */
```

One serif family for everything (headings and body). Hierarchy comes from **size, weight, italic, and small caps**, not from a second display font.

`DECISION (deferred):` Mono for metadata (dates, stack labels) as a subtle code nod, or small caps for everything? Small caps is more academic; mono is more "dev". The build sets this through a single `--font-meta` token (defaulting to small caps), so switching later is a one-line change.

### Scale (ratio 1.25, base 18px)

| Token | Size | Use |
|---|---|---|
| `--step--1` | 0.8rem (14.4px) | captions, footnotes, metadata |
| `--step-0` | 1rem (18px) | body |
| `--step-1` | 1.25rem | h3, abstract label |
| `--step-2` | 1.563rem | h2 / section heads |
| `--step-3` | 1.953rem | page titles (h1) |
| `--step-4` | 2.441rem | home page name only |

Base `font-size` 112.5% (18px). Serifs need a slightly larger size to read well on screens.

### Rules
- **Line length:** body text `max-width: 66ch`.
- **Line height:** 1.55 for body, 1.2 for headings.
- **Numbers:** `font-variant-numeric: oldstyle-nums proportional-nums` in prose; `lining-nums tabular-nums` in tables and timelines.
- **Small caps:** `font-variant-caps: all-small-caps; letter-spacing: 0.04em` for labels (ABSTRACT, FIG. 1, nav).
- **Section headings are not numbered.** How sections are styled is a later design decision; for now, headings are plain and set by size and weight only.
- **Links:** underlined (`text-decoration-thickness: 1px; text-underline-offset: 0.15em`), colored `--link`. Never rely on color alone.
- Headings are weight 600, never all caps, never letter-spaced.

---

## 2. Color

### Your colors: lilac, emerald, blue-grey

The three favourites map onto three jobs:
- **Blue-grey becomes the neutrals.** Paper, ink, muted text and rules all get a cool slate tint. It's subtle, but it gives the whole site its temperature.
- **Emerald and lilac become a lead accent and a support accent.** Only one of them colors links. The other marks small "academic" details: the ABSTRACT label, figure numbers, text selection.
- **Never mix them in a gradient.** Purple-to-anything gradients are the most recognisable AI-site cliché. Flat, sparing use keeps them looking deliberate.

**Decided: Palette A** (2026-11-10). Palette B is kept below for reference only.

**Shared blue-grey neutrals**

| Token | Light | Dark | Contrast on paper (L / D) |
|---|---|---|---|
| `--paper` | `#F5F7F9` | `#13161B` | — |
| `--ink` | `#1A1F27` | `#E4E8EE` | 15.4 / 14.7 |
| `--muted` | `#576272` | `#98A3B3` | 5.76 / 7.10 |
| `--rule` | `#D3D9E1` | `#2F3641` | decorative |
| `--code-bg` | `#EAEEF2` | `#1B2027` | ink on it: 14.2 / 13.3 |

**Palette A: emerald lead, lilac support** (calm and "academic green ink"; emerald links read clearly as links)

| Token | Light | Dark | Contrast (L / D) | Use |
|---|---|---|---|---|
| `--accent` | `#0A7352` emerald | `#4CCB9A` | 5.45 / 8.91 | links, active nav, focus ring |
| `--accent-2` | `#6E4FA3` lilac | `#C3AEEB` | 5.91 / 9.13 | ABSTRACT label, Fig. numbers |
| `--tint` | `#E7DEF5` | `#3A3150` | ink on it: 12.7 / 9.8 | text selection, highlighted note |

**Palette B: lilac lead, emerald support** (more personality and more memorable; lilac links are less conventional)

| Token | Light | Dark | Contrast (L / D) | Use |
|---|---|---|---|---|
| `--accent` | `#6E4FA3` lilac | `#C3AEEB` | 5.91 / 9.13 | links, active nav, focus ring |
| `--accent-2` | `#0A7352` emerald | `#4CCB9A` | 5.45 / 8.91 | ABSTRACT label, Fig. numbers |
| `--tint` | `#D6EFE5` | `#1F3A31` | ink on it: 13.7 / 10.0 | text selection, highlighted note |

On light paper, a true pastel lilac is too pale for text (~1.2:1). That's why the *text* lilac is a deeper `#6E4FA3`, while the pastel lilac you probably picture appears as `--tint` and as the dark-mode accent.

### Original draft (superseded, kept for reference)

Paper and ink, plus **one** accent. No gradients.

| Token | Light | Dark | Contrast on paper | Use |
|---|---|---|---|---|
| `--paper` | `#FBFAF7` | `#171614` | — | page background |
| `--ink` | `#1C1B18` | `#ECE8E0` | 16.5 / 14.8 | body text, headings |
| `--muted` | `#5F5B53` | `#A6A096` | 6.47 / 6.97 | captions, metadata, sidenotes |
| `--rule` | `#D8D4CA` | `#3B3833` | (decorative) | hairline rules, borders |
| `--accent` | `#1F4E8C` | `#93B4E6` | 7.96 / 8.54 | **placeholder ink-blue**, `DECISION:` your color |
| `--link` | `= --accent` | `= --accent` | | links |
| `--code-bg` | `#F1EFEA` | `#201F1C` | | code blocks |

All text pairs pass **WCAG AA** (≥ 4.5:1); most pass AAA. When you choose your accent, check it against `--paper` in **both** modes. Dark mode usually needs a lighter, less saturated version of the same hue.

The accent is used **sparingly**: links, the active nav item, figure numbers, and text selection. Nothing else. If everything is accented, nothing is.

### Theme behaviour
- The default follows `prefers-color-scheme`.
- A toggle in the header overrides it, stored in `localStorage` (`data-theme="light|dark"` on `<html>`).
- An inline script in `<head>` sets the theme before first paint (no flash).
- Dark mode is warm (brown-black), not pure `#000`, so it reads like dark paper and not a terminal.

---

## 3. Layout and spacing

### Spacing scale (rem)
`--space-3xs: .25` · `--space-2xs: .5` · `--space-xs: .75` · `--space-s: 1` · `--space-m: 1.5` · `--space-l: 2` · `--space-xl: 3` · `--space-2xl: 4.5` · `--space-3xl: 6`

### Grid
```
| margin |      text column (66ch)      | margin |
|        |  wide figure (up to ~90ch)        |        |
```
- A single centred text column at every width. Footnotes don't need a margin column.
- Wide figures can break out beyond the text column on large screens.
- Mobile: 16px side gutters, with no horizontal scroll ever.

### Structure without boxes
- Separate sections with **whitespace and hairline rules** (`1px solid var(--rule)`), not cards.
- No `box-shadow` anywhere except focus rings.
- `border-radius: 0` by default. Images can take a 2px radius at most.

---

## 4. Components (specs)

### Header / nav
The text wordmark **AMUdev** sits on the left, set in the serif, as a placeholder until Alex's custom logo exists (keep it a single swappable component). Nav on the right: *Projects · Writing · About*, plus the theme toggle. Text only, no icons except the toggle. The active page gets an `--accent` underline.

### Theme toggle
A text button ("Light" / "Dark"), or a small ☾/☀ glyph set in the serif. Has `aria-pressed` and a visible focus ring.

### Paper entry (project list item)
```
2025 ─────────────────────────────────────────
Campus Printer Finder
Co-op project · TypeScript, Rust, PostgreSQL
A tool that tells students which campus printers are free
right now, so they stop walking between buildings.
[Read →]  [Live demo]  [Source]
```
Year headings group entries like a publication list. An optional figure thumbnail sits to the right on wide screens.

### Abstract block
The label ABSTRACT in small caps, then 2–3 sentences in body size, *italic optional*, `DECISION:`. A thin rule above and below. It is the first thing on every project page.

### Figure
```html
<figure>
  <img …>  <!-- or video/GIF, or later: an interactive component -->
  <figcaption><span class="fig-num">Fig. 1</span> — The search view on mobile.</figcaption>
</figure>
```
Figure numbers are automatic (CSS counters). Captions use `--step--1` in `--muted`, and the number uses `--accent`. A 1px `--rule` border around screenshots separates them from the paper.

### Footnotes (decided)
- A superscript number in the text, colored `--accent`, links to the note. Each note has a ↩ back-link to its reference.
- Notes are collected at the end of the article under a hairline rule and a small-caps NOTES label, set in `--step--1` and `--muted`.
- Built from standard Markdown footnote syntax (`[^1]`), so writing them takes no effort.
- Works with no JS. A hover or tap preview can be added later as an optional enhancement.

### Byline / metadata
`Sept 2025 – Dec 2025 · Role: Backend developer · Rust, Axum, Postgres`. Set in `--muted`, at `--step--1`, in small caps or mono (`DECISION:` from §1).

### Writing list
`2025-10-02   Title of the post` with a one-line summary below. Tabular dates aligned in a column.

### Résumé timeline
A CV-style two-column layout: dates (tabular, muted) on the left; role, org, and 1–3 bullet outcomes on the right. A "Download PDF" link at the top.

### Code blocks
`--font-mono` at 0.85em on `--code-bg`, with no rounded "macOS window" chrome. Syntax theme: a low-saturation one that matches paper and ink, `DECISION:` later.

### Footer
One line: © year · email · GitHub · LinkedIn · RSS. Text links only.

---

## 5. Motion and interaction policy

- **Default: no motion.** No scroll animations, no load animations, no parallax.
- Allowed: instant or ≤150ms color and underline changes on hover and focus.
- Everything respects `prefers-reduced-motion: reduce`.
- **Playful features later** are welcome, but they must:
  1. live inside a **figure** (or a clearly bounded element), not in the page chrome;
  2. be opt-in (user-triggered), never auto-playing on scroll;
  3. degrade to a static image or caption with no JS.

## 6. Accessibility baseline
- Semantic HTML: `<article>`, `<figure>`, `<nav>`, and real heading order.
- A visible focus ring: `outline: 2px solid var(--accent); outline-offset: 2px`.
- Alt text on every figure. Captions don't replace alt text.
- A skip link and `lang` attribute, and the site is fully usable without JS.
- Contrast is checked for every token pair (see §2).

## 7. Decision log

| # | Decision | Choice | Date |
|---|---|---|---|
| 1 | Body typeface | **STIX Two Text** (Times New Roman fallback) | 2026-11-10 |
| 2 | Accent colors | **Palette A**: emerald lead, lilac support, blue-grey neutrals | 2026-11-10 |
| 3 | Metadata style (mono vs small caps) | _deferred_: small caps by default, behind `--font-meta` | |
| 4 | Sidenotes vs footnotes | **Footnotes** | 2026-11-10 |
| 5 | Name / wordmark | Site **AMUdev**; person **Alex McPherson Uribe**; custom logo later (text wordmark until then) | 2026-11-10 |
| 6 | Numbered sections | **Not numbered**; section design deferred | 2026-11-10 |
