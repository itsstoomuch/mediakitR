# Reheeshaa Design System

## Overview

**Reheeshaa** is a slow living creator and food storyteller based in Mumbai, India. The brand documents slow mornings, simple home cooking, and quiet daily rituals — targeting an intimate audience who craves intentional, unhurried living. The aesthetic is deeply editorial: warm photography, handcrafted scribble motifs, expressive serif typography, and a palette drawn from morning light and natural materials.

**Handle:** @reheeshaa.n (Instagram)  
**Email:** reheeshaanandanwar26@gmail.com  
**Location:** Mumbai, India  
**Niches:** Slow Living · Food · Beauty & Wellness · Calm Routines

### Sources Provided
- **Media Kit HTML:** `media kit/mediakit.htm` — the primary design reference; full editorial layout with all brand styles defined in `<style>` block
- **Media Kit PDF:** `media kit/ReheeshaaMediaKit_export.pdf`
- **Photography:** `media kit/assets/` — 13 images covering food, mornings, garden, tea, profile
- **Uploaded assets:** `uploads/` — same imagery set

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **First person, intimate** — always "I", never corporate "we". Feels like a personal journal, not a brand.
- **Lowercase-friendly** — headings and eyebrows often use lowercase or sentence case, never full ALL CAPS except short eyebrow labels (e.g. "SLOW LIVING · MUMBAI")
- **Soft, poetic, understated** — avoids superlatives. Nothing is "amazing" or "incredible"; things are "honest", "whole", "unhurried", "quiet"
- **Specificity over generality** — "From a small flat in Mumbai" not "a content creator from India"
- **No emoji** — zero emoji anywhere in the brand; decorative elements are SVG/CSS
- **Italic as emphasis** — key words within headlines are set in italic (Fraunces italic) rather than bold
- **Numbers written numerically** — "207+ followers" not "two hundred"

### Copywriting Examples (from media kit)
- "Slow mornings, simple meals, and the quiet rituals in between"
- "I cook, I rest, I document the unhurried parts of everyday life"
- "A small, warm room" (describing her follower count)
- "Every one intentional" (describing her 46 posts)
- "Slow living isn't a trend — it's a choice I make every morning"
- "No AI, no props I wouldn't own"
- "Let's create something slow & beautiful"

### Casing Rules
- Display headings: sentence case, with italic em tags on 1–2 key words
- Eyebrows / labels: ALL CAPS, wide letter-spacing (0.18–0.22em)
- Body: standard sentence case, warm conversational tone
- Captions / notes: lowercase italic, Fraunces font, feels handwritten

---

## VISUAL FOUNDATIONS

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `--cream` | `#FBF2E4` | Primary background, card fill |
| `--cream-2` | `#F6E8D4` | Secondary background, stats bar |
| `--rose` | `#E8C5C0` | Section backgrounds, about section |
| `--rose-deep` | `#D9A5A0` | Ampersands, secondary accents |
| `--mocha` | `#3D2B1F` | Primary text, dark backgrounds |
| `--mocha-soft` | `#5A4436` | Secondary text, labels |
| `--terracotta` | `#C96A4E` | Primary accent, CTAs, italic em color |
| `--olive` | `#6E7A4F` | Leaf decorations, nature badge |
| `--ink` | `#2A1C13` | Deepest text |
| `--yellow` | `#F3D89B` | Warm highlight accent, star decorations |
| `--page-bg` | `#EFE3D1` | Outer page background |

### Typography
- **Display / Headings:** Fraunces (serif, optical-size aware, italic variants) — weights 300–800
- **Body / UI:** Inter — weights 300, 400, 500, 600
- **Script / Signature:** Caveat — weights 400, 600; used for signatures, handwritten accents
- **Monospace:** `ui-monospace, 'SF Mono', Menlo` — system stack, used sparingly

**Scale (from media kit):**
- Hero H1: clamp(64px, 9vw, 128px), weight 400, line-height 0.92, letter-spacing -0.035em
- Section H2: 52px, weight 400, line-height 1, letter-spacing -0.03em
- Stat numbers: 56px, weight 400, line-height 1
- Card titles: 26–32px, weight 400
- Body / lede: 15px (body), 30px (lede serif), line-height 1.6–1.65
- Eyebrows: 11px, letter-spacing 0.22em, uppercase, weight 500
- Caveat signature: 28–56px

### Layout
- **Max width:** 1180px centered, `margin: 32px auto`
- **Section padding:** 80px 48px
- **Grid system:** CSS Grid — 2-col hero, 3-col cards, 3-col stats, 6-col feed strip
- **Responsive break:** 900px — collapses to single column

### Backgrounds & Textures
- Cream warm papers are the dominant surface; no cold whites
- Decorative dashed/dotted circles in terracotta/mocha around portrait images
- Subtle shadow on page: `0 30px 80px -30px rgba(61,43,31,.25)`
- **No gradients as design elements** — the only gradient is a darkening overlay on photo cards (linear-gradient to top, mocha 0 → transparent 55%)
- Tape motifs (rotated rectangles in rose/yellow) used as collage embellishments

### Decorative Motifs (SVG Symbols)
Inline SVG defs define reusable brand shapes:
- `#leaf` — pointed oval leaf, solid fill
- `#leaf2` — wide tropical leaf
- `#sprig` — botanical sprig with buds along a stem
- `#scribble-under` — hand-drawn underline wave
- `#arrow-curl` — curved hand-drawn arrow
- `#star4` — 4-pointed compass star
- `#scribble-circle` — elliptical dashed/solid border ring (CSS class)

Decorative dots: colored circles (`.dot-orange`, `.dot-rose`, `.dot-yellow`) placed absolutely at low opacity as background blobs.

### Cards
- **Photo cards** (content grid): aspect-ratio 3/4, no border-radius, dark gradient overlay, category badge rotated ±3–8° in terracotta/mocha/rose/yellow/olive
- **Value cards** (vcard): 1px border `rgba(cream,0.2)`, transparent dark bg, min-height 260px, gap 14px, italic index label in yellow
- **Package cards** (pk): no radius, solid border system, featured = mocha bg + cream text
- **Keyword cards** (about): cream bg, 4px radius, slight rotation ±0.8°, soft shadow
- **Corner radius philosophy:** Almost zero radius on content cards; only pill shapes (`999px`) on niche tags/badges

### Shadows
- Page: `0 30px 80px -30px rgba(61,43,31,.25), 0 2px 4px rgba(61,43,31,.05)`
- Food sticker circles: `0 20px 40px -15px rgba(61,43,31,.3)` + 6px cream border
- Photo cards: `0 14px 30px -18px rgba(61,43,31,.3)`
- Badges: `0 4px 10px rgba(61,43,31,.25)`

### Animations & Motion
- **Scroll-reveal fade-ins** (AOS or Intersection Observer)
- **Floating / breathing** keyframes on decorative elements (gentle translateY oscillation)
- **Parallax** on hero background images
- **Hover on cards:** lift + subtle scale (transform: translateY(-4px) scale(1.01))
- **Hover on images:** slight zoom (scale 1.03) with overflow hidden
- **Cursor:** custom crosshair or soft dot cursor
- **Transitions:** ease-out, 0.4–0.6s duration; never abrupt
- **No bounce** — everything eases out softly

### Hover States
- Tags/pills: fill swap (mocha → cream, cream → mocha), 0.3s transition
- Cards: translateY(-6px), box-shadow deepens
- CTA text: terracotta underline slides in from left

### Borders
- Thin 1px lines in `rgba(61,43,31, 0.12–0.25)` for dividers
- Dashed circles in terracotta/mocha for portrait framing (via `::after` pseudo)
- No colored left-border accents

### Photography Style
- **Warm, natural window light** — golden hour tones, soft shadows
- **Close-up, tactile** — food in real dishes, hands pouring tea, unmade beds with cats
- **Slightly desaturated portrait** — profile photo is grayscale with slight contrast boost
- **No harsh edits** — no heavy filters, no neon tones
- **Color palette of imagery** matches brand: creams, terracottas, greens from nature

---

## ICONOGRAPHY

### Approach
Reheeshaa uses **no icon library or icon font**. All decorative icons are custom inline SVG symbols defined in a `<svg width="0" height="0"><defs>` block at the top of each page. These are:

| Symbol ID | Description | Usage |
|---|---|---|
| `#leaf` | Pointed oval leaf | Background decor, section separators |
| `#leaf2` | Wide tropical leaf | About section background |
| `#sprig` | Botanical sprig | Header/footer accents |
| `#scribble-under` | Hand-drawn wave underline | Under value card headings |
| `#arrow-curl` | Curled hand-drawn arrow | Scroll indicators, editorial callouts |
| `#star4` | 4-pointed star / compass | Scattered decorative sparkles |

### Usage Rules
- SVG icons are **always decorative** (pointer-events: none, position: absolute)
- Icons are monochromatic: `currentColor` inherits from parent
- Sizes range from 22px (tiny sparkle) to 220px (large leaf)
- Opacity always reduced (0.2–0.6) when used as background texture
- **No external icon fonts** (no Lucide, Heroicons, Font Awesome)
- **No emoji** used anywhere

### Key Assets (in `assets/`)
| File | Type | Description |
|---|---|---|
| `profile.jpg` | Photo | Creator portrait (B&W, circular crop) |
| `1.jpg` | Photo | Morning stretch, pink bedroom, cat |
| `2.jpg` | Photo | Calm routine / daily life |
| `3.jpg` | Photo | Beauty / self-care ritual |
| `tea.jpg` | Photo | Tea pouring, vintage set, garden bg |
| `garden.jpg` | Photo | Mumbai garden, tropical trees |
| `night.jpg` | Photo | Night mood shot |
| `food-pasta.png` | Photo | Spaghetti in purple bowl |
| `food-pink-eggs.png` | Photo | Egg dish, pink tones |
| `food-egg-pizza.png` | Photo | Egg pizza / flatbread |
| `food-omelette.png` | Photo | Omelette |
| `food-quesadilla.png` | Photo | Quesadilla |
| `food-wrap.png` | Photo | Comfort wrap/bowl |

---

## File Index

```
README.md                    ← This file; brand overview + design guidelines
SKILL.md                     ← Agent skill definition for Claude Code
colors_and_type.css          ← CSS custom properties: all color + type tokens
assets/                      ← All photography and visual assets
  profile.jpg, 1.jpg, 2.jpg, 3.jpg
  tea.jpg, garden.jpg, night.jpg
  food-*.png (6 food images)
preview/                     ← Design System tab cards
  colors-base.html           · Base color palette swatches
  colors-semantic.html       · Semantic color tokens
  type-display.html          · Display / heading type specimens
  type-body.html             · Body + UI type specimens
  type-script.html           · Script / Caveat specimens
  spacing-tokens.html        · Border radius, shadow, spacing tokens
  components-cards.html      · Photo card + keyword card components
  components-badges.html     · Niche tags, badges, pills
  components-packages.html   · Collaboration package cards
  components-navbar.html     · Sticky minimal navbar
  components-buttons.html    · CTA button states
  brand-motifs.html          · SVG decorative motifs (leaves, stars, scribbles)
  brand-photography.html     · Photography style & asset reference
ui_kits/website/             ← Full website UI kit (interactive prototype)
  index.html                 ← Main website prototype
  Hero.jsx                   ← Hero section component
  Nav.jsx                    ← Sticky navbar component
  About.jsx                  ← About section component
  ContentGrid.jsx            ← Content category cards
  Packages.jsx               ← Collab packages section
  FeedStrip.jsx              ← Recent work + quote section
  Contact.jsx                ← Contact / CTA section
```

---

*Design system built April 2026. Primary source: media kit HTML + photography assets.*
