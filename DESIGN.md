---
name: David Zapata
description: A darkroom print of one person and one word; black and white, dark ground, silver-gelatin grain, no color accent.
colors:
  ground: "#0b0b0b"
  ink: "#efede8"
  mute: "#8f8d86"
  line: "#262624"
  white-hover: "#ffffff"
typography:
  display:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "clamp(96px, 13vw, 200px)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.005em"
  display-mobile:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "clamp(84px, 24vw, 110px)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.005em"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontWeight: 400
  descriptor:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.08em"
  index:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    letterSpacing: "0.06em"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.14em"
  data:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 4vw, 48px)"
  row: "18px"
  stack: "22px"
  column: "24px"
  chrome: "28px"
  block: "40px"
  baseline: "64px"
  stage-top: "104px"
components:
  nav-link:
    textColor: "{colors.mute}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  nav-link-hover:
    textColor: "{colors.white-hover}"
  nav-mark:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  descriptor:
    textColor: "{colors.mute}"
    typography: "{typography.descriptor}"
    width: "54ch"
  display-name:
    textColor: "{colors.ink}"
    typography: "{typography.display}"
  scroll-cue:
    width: "44px"
    height: "72px"
  index-row:
    textColor: "{colors.mute}"
    typography: "{typography.index}"
    rounded: "{rounded.none}"
    padding: "18px 0"
  index-row-hover:
    textColor: "{colors.white-hover}"
  index-row-active:
    textColor: "{colors.ink}"
  index-row-meta:
    textColor: "{colors.mute}"
    typography: "{typography.data}"
  print-caption:
    textColor: "{colors.mute}"
    typography: "{typography.descriptor}"
    width: "54ch"
  visit-link:
    textColor: "{colors.mute}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  visit-link-hover:
    textColor: "{colors.white-hover}"
  frame:
    textColor: "{colors.ink}"
    typography: "{typography.index}"
    rounded: "{rounded.none}"
    padding: "14px 16px 16px"
    width: "min(248px, calc(var(--year) - 16px))"
  frame-meta:
    textColor: "{colors.mute}"
    typography: "{typography.data}"
  year-label:
    textColor: "{colors.mute}"
    typography: "{typography.data}"
---

# Design System: David Zapata

## Overview

**Creative North Star: "La Copia de Cámara Oscura" (The Darkroom Print)**

The site is a print pulled from a darkroom, not a web page with a photo on it. One person, one word, and everything else is darkness and grain. The photograph is the argument; the name is the caption. There is no color anywhere: the whole world lives between a near-black ground and a warm paper white, with a single grey for anything that speaks second and a hairline that is barely lighter than the ground. Depth comes from the photograph's own burned edges and a generated silver-gelatin grain, never from CSS gradients, glass, or shadows.

Density is extremely low and deliberate. A stage is a single viewport with a handful of elements, each anchored to an edge or a gutter, and large areas of ground left empty on purpose. Type does the work of hierarchy: a condensed heavy display face at poster scale against small, widely tracked monospace annotations. Body text in Archivo is loaded and reserved but has not yet appeared on a surface; the three shipped stages (Hero, Build, Ship) are entirely display and mono.

Motion is either a print developing or the visitor's own scroll. On load the Hero print "develops" once (1.6s, exponential ease-out) from near-black to its true tones while the caption settles into place. From the second stage on, the page is a sequence of pinned viewports scrubbed by scroll: the Hero's print sinks back into the ground as it leaves, each change of print inside the Build spread is the same 1.6s develop again, and the Ship strip is dragged right-to-left by the scroll while its axis draws once (1.2s, exponential ease-out) on entry. Nothing moves on its own; every motion is tied to load, scroll position, or a hover. The resting state is complete without JavaScript and is shown immediately under `prefers-reduced-motion`, which removes smoothing, pinning and the develop. The product commits to six stages, one word each (Hero, Build, Ship, Prove, Live, Talk); every later stage inherits this world rather than opening a new one.

**Key Characteristics:**
- Black and white only; no color accent exists in the token set.
- One dark ground, one ink, one grey, one hairline; nothing in between.
- Poster-scale condensed display word against 12–13px tracked monospace annotations.
- Flat: no shadows, no CSS vignette on desktop, no radius; edges are the composition.
- Generated grain over the whole stage (`mix-blend-mode: overlay`, opacity 0.14).
- Every raster is a graded print: greyscale, blacks lifted to ground, edges burned to ground in the asset.
- Motion is the develop (1.6s) or the scroll; nothing animates on its own.

## Colors

A monochrome darkroom palette: a near-black ground, a warm paper white for ink, a single mid grey for secondary voice, and a hairline just above the ground.

### Primary
- **Paper White / Ink** (`{colors.ink}`): the only "positive" value. Display words (name, `Build.`), the `DZ` mark, the active index row, focus outline, selection background, and the bright end of the scroll cue. Everything that must be read first is this colour.

### Neutral
- **Darkroom Ground** (`{colors.ground}`): page and stage background, `theme-color`, scrollbar track, selection text, the print window's fill behind every raster, and the mobile foot fade (`rgba(11,11,11,0→1)`). Every raster (the portrait, the four product prints) is burned to this value at its edges in the asset itself, so ground and print are indistinguishable at the seams.
- **Silver Grey / Mute** (`{colors.mute}`): every secondary voice: nav links at rest, the descriptor line, index rows at rest and their scope column, the print caption, `[ Visit ]` at rest, and in Ship the organisation, dates and year labels. It is also the colour of the 1px year ticks on the Ship axis, the one place a mute rule exists: a tick in `{colors.line}` would vanish against the line-coloured axis it crosses. Contrast on ground is about 6:1, which clears WCAG AA at 12px mono.
- **Hairline** (`{colors.line}`): 1px rules only: the scroll cue, the scrollbar thumb, the separators between index rows (desktop), and in Ship the timeline axis, the frame borders, the leaders from frame to tick, and the vertical hairline and row separators of the mobile list. Never a fill.
- **Pure White (hover)** (`{colors.white-hover}`): appears only as the hover target for text controls (nav links, index rows, `[ Visit ]`). It is a state, not a surface colour.

### Named Rules
**The No-Accent Rule.** There is no fifth colour. Emphasis is produced by scale (display vs mono), by value (ink vs mute), or by state (mute → pure white), never by hue.

**The Burned-In Rule.** Darkness belongs to the raster. Grading, vignette and the desktop left-field fade live in the image; CSS carries no gradient on desktop. The one CSS fade (the mobile foot veil, `linear-gradient(180deg, transparent 55%, ground 100%)`) exists only where the portrait crop must land on solid ground.

**The Graded Print Rule.** Any raster placed on a stage is a print, not a screenshot: converted to greyscale, blacks lifted to `{colors.ground}` so the image never goes darker than the page, and its edges burned toward `{colors.ground}` with a strength chosen per image (heavier on dark sources, lighter on light ones, no burn on an edge that would swallow a white bar), with the grading recipe embedded in the file's own metadata. Colour or an unburned raster never ships.

## Typography

**Display Font:** Anton 400 (with Impact, sans-serif)
**Body Font:** Archivo 400/500 (with Helvetica Neue, Arial, sans-serif)
**Label/Mono Font:** JetBrains Mono 400/500 (with ui-monospace, monospace)

**Character:** A condensed, heavy poster face carries the one word each stage owns; a light, widely tracked monospace carries the annotations around it, the way a contact sheet is labelled in pencil. Archivo is the reserved reading voice for future stages; neither shipped stage sets anything in it.

### Hierarchy
- **Display** (Anton 400, `clamp(96px, 13vw, 200px)`, line-height 0.9, tracking 0.005em): the stage word. In the Hero it is the name, always two lines (`David` / `Zapata`, `text-wrap: balance`), each word a block; in Build it is `Build.`, one line with its full stop.
- **Display (mobile)** (Anton 400, `clamp(84px, 24vw, 110px)`, same leading and tracking): the same role at 720px and below. Both the Hero name and the Build word step to it; it is the second and smaller stop of the display ramp, not a separate voice.
- **Descriptor** (JetBrains Mono 400, 13px, line-height 1.7, tracking 0.08em, mute): the one sentence beside the display word: the Hero line above the name, the pitch under the print in Build. Sentence case. Measure 54ch in both stages.
- **Index** (JetBrains Mono 400, 13px, tracking 0.06em, mute / ink when active): the project names in the Build index, and in ink the role title of every Ship frame (weight 400, never heavier). Sentence case, no uppercase; on mobile the Build names take typed brackets.
- **Label** (JetBrains Mono, 12px, tracking 0.14em, uppercase): the bracketed control voice: navigation, the `DZ` mark (weight 500, ink), and the `[ Visit host ]` link under a print. Uppercase is reserved for this role.
- **Data** (JetBrains Mono 400, 12px, tracking 0.08em, tabular numerals, mute): data and measurements: the scope column of the Build index (`Avalanche`, `EU battery passport`, `Stellar · testnet`), the Ship year labels (`2019` … `2026`), and the organisation and dates in each Ship frame (`2024 – present`, spaced en dash). Not uppercased. The Build scope and the year labels are hidden on mobile; frame dates stay because each row states its own years.
- **Body** (Archivo 400/500): loaded on `<body>` as the default font; no size, leading or measure has been set on any surface yet. Do not invent a body ramp until a stage sets one.

### Named Rules
**The One Word Rule.** Each stage owns exactly one display-scale word; everything else on the stage is 12–13px monospace. A stage with two display-scale elements has broken the world.

**The Uppercase-Is-Control Rule.** Uppercase with 0.14em tracking is the voice of bracketed navigation and action links (`[ Build ]`, `[ Talk ]`, `[ Visit raffero.com ]`) only. Descriptor, index and data lines stay in sentence case at 0.06–0.08em, even when they are typed in brackets on mobile.

## Layout

The spatial model is a stack of full-height stages (`100svh`, min 560px, `isolation: isolate`) with elements pinned to edges or split into halves rather than flowed. There is no container width or column grid; the only horizontal measure is the gutter, `clamp(20px, 4vw, 48px)`, used as the left inset for copy blocks, the nav padding, and the right inset for captions.

Desktop (above 720px), Hero: the photograph fills the stage with `object-fit: cover`, `object-position: right center`, the face in the right third and the left ~55% burned to ground. Nav sits at the top in a three-column grid (`1fr auto 1fr`): mark left, five bracketed links centred with a 22px gap, right column empty. The copy block (descriptor over name, 22px gap) is absolutely anchored left at the gutter and 64px above the bottom edge. A 44×72px scroll cue sits bottom centre.

Desktop, Build: a two-page spread (`grid-template-columns: 1fr 1fr`). The left page is a column padded 104px top, 64px bottom and the gutter on both sides, with the display word at the top and the index at the bottom (`justify-content: space-between`, 40px minimum gap). The right page is a print window filling the page's height (104px top, 64px bottom, bleeding to the right viewport edge with no right inset) and, 20px below it, a caption row: pitch left, `[ Visit host ]` right, 24px apart, inset by the gutter on the right. In the 1440×900 capture the print window runs from y=104 to y=740 and the index's top hairline lands at y=612.

Desktop, Ship: a single stage with `Ship.` top-anchored at 104px on the gutter and, at 56% of the stage height, a horizontal timeline strip whose left origin sits on the gutter. The axis is a 1px `{colors.line}` rule running seven year-pitches (2019 to 2026, pitch `clamp(220px, 22vw, 320px)`); each year has a 1px `{colors.mute}` tick (9px tall, straddling the axis 4px above it) and a Data-voice year label 8px right and 12px below the tick. The six roles are frames `min(248px, pitch − 16px)` wide (so two neighbours can never overlap at narrow desktop widths) anchored at their start year, alternating above and below the axis in chronological order (first frame above), each 44px clear of the axis and joined to its tick by a 1px leader of the same 44px. The track is `7 × pitch + 48px` wide so the 2026 label is the last thing in it; the terminal state lands `2026` on the right gutter with nothing trailing.

Scroll grammar (desktop, motion allowed): stages are pinned viewports scrubbed by scroll position. GSAP ScrollTrigger pins the Build stage for four viewport-heights (`+= innerHeight × 4`, `scrub: true`) and the active project is `floor(progress × 4)`; Lenis smooths the scroll on GSAP's ticker so both share one clock, and anchor links (`#build`) and index clicks scroll to the middle of the target step (Lenis 0.9s). As the Hero unpins (`start: top top`, `end: bottom top`), its photograph is scrubbed to `brightness(0.08)` and `yPercent: -8` so it sinks into the ground while `Build.` rises. Ship is the second pin grammar: instead of stepping, the pinned stage translates its track on x by `scrollWidth − (innerWidth − 2 × gutter)` with `ease: none`, the pin lasting that distance × 1.2 (`invalidateOnRefresh`); the axis draws once from the left (`scaleX` 0 → 1, 1.2s, the system's `--ease-out` bezier registered as a GSAP CustomEase) when the stage's top reaches 70% of the viewport, and never again. Under `prefers-reduced-motion` Lenis is not created, nothing is pinned, the Hero photograph does not darken, and the index buttons switch the print without the develop.

Mobile (720px and below, verified at 390px): the Hero photograph becomes a 66svh band across the top (`object-position: 78% 0`) with a CSS veil fading its foot into ground; the copy block moves to 76px from the bottom with a 16px gap; the scroll cue disappears; nav becomes `DZ` left and `[ Talk ]` right (padding-top 20px). Build is not pinned and is not a fixed viewport: the stage becomes `height: auto`, single column, 72px top padding, 24px gaps, 56px bottom padding; the index is a 2×2 grid of bracketed names (4px row gap, 16px column gap, 8px row padding, no hairlines, scope hidden); the print is a 4:3 window inset by the gutter on both sides, with pitch and `[ Visit ]` stacked 12px apart, 16px below it. Swiping the print (≥40px horizontally) or tapping a name changes the project. Ship at 720px and below, and on any desktop under `prefers-reduced-motion`, is not pinned and does not translate: `height: auto`, 72px top and 56px bottom padding by the gutter, the word 32px above a list; the axis, ticks and year labels are hidden and the frames become hairline-separated rows (14px top / 16px bottom padding, `border-top` each, `border-bottom` on the last, no side borders, no leader) set 20px right of a vertical 1px `{colors.line}` rule on the list's left edge, in the same chronological order.

Spacing rhythm as used: 4 (mobile index row gap, frame line gap, tick overshoot) · 8 (mobile row padding, tick-to-year-label) · 9 (tick height) · 12 (mobile caption gap, axis-to-year-label) · 14 (frame head) · 16 (mobile stack, mobile index column gap, mobile print-to-caption, frame sides and foot) · 18 (index row padding) · 20 (mobile chrome, print-to-caption, mobile list inset from its hairline) · 22 (Hero stack, nav gap) · 24 (row / caption column gap, mobile Build gap) · 28 (chrome) · 32 (mobile Ship word-to-list) · 40 (word-to-index minimum) · 44 (frame-to-axis, leader length) · 56 (mobile Build and Ship foot) · 64 (desktop baseline) · 72 (mobile Build and Ship head) · 104 (desktop stage head, Build and Ship) · 248 (frame width) · `clamp(220px, 22vw, 320px)` (year pitch). Vertical chrome is 28px on desktop; the gutter governs everything horizontal.

Product rule inherited by later stages: each stage must work as a single viewport moment on desktop; detail expands within the pinned stage (as Build's four steps and Ship's strip do) or in an overlay rather than breaking the journey.

### Named Rules
**The Two Pins Rule.** A pinned stage is scrubbed either by steps (Build: pin length `innerHeight × steps`, active step = `floor(progress × steps)`) or by distance (Ship: pin length `distance × 1.2`, track translated by that distance). Both start `top top`, both `scrub: true`, both vanish at 720px and under `prefers-reduced-motion`, where the stage becomes an ordinary flowing section. A third pin grammar needs a reason these two cannot serve.

## Elevation & Depth

This system uses no shadows and no tonal layering. Depth is photographic: every graded raster carries its own vignette and burned edges, and a single generated grain canvas (`opacity: 0.14`, `mix-blend-mode: overlay`, above the raster and veil, below all text) unifies image and ground into one print surface on every stage. Text sits directly on the print with no scrim, panel, or backdrop; legibility comes from the raster being burned to ground where text lands. The Build print window is filled with ground behind the raster, so the develop animation rises out of the page rather than out of a box. Ship's frames carry no background at all: the hairline border sits directly on the ground and the grain passes through it as one layer, so a frame is a drawn rectangle on the print, not a panel on top of it.

### Named Rules
**The Flat Print Rule.** No `box-shadow`, no `backdrop-filter`, no glass, no elevation states. If an element needs separation, it gets a 1px hairline (`{colors.line}`) or more empty ground, never a shadow.

**The Grain Is Material Rule.** The grain is one static field over the whole stage, regenerated only on resize. Every stage mounts its own Grain canvas at the same opacity and blend; it is never animated, never tiled per element, and never applied to text alone.

## Shapes

Everything is square. No border radius exists anywhere (`rounded.none` = 0px); edges are the viewport, the gutter, the print window's hard rectangle, and the raster's burned frame. The only strokes are 1px hairlines: the scroll cue (1px wide, 56px tall, transparent→ink gradient), the index row separators (`border-top` on each row, `border-bottom` on the last), the focus outline (1px ink, offset 4px), and in Ship the timeline axis, the 9px year ticks (mute), the 44px leaders, and the frame borders (`{colors.line}`, no fill). A frame is the one hairline rectangle in the world and it encloses data, never a control; controls still have no boxes at all; brackets typed as text (`[ Build ]`, `[ Visit glemo.io ]`, and on mobile `[ Raffero ]`) are the affordance. Curved corners visible inside a product print belong to that product's page and are part of the raster, not of this system.

## Components

The three shipped stages have no cards, inputs, or chips. Their vocabulary is text links, one text-only button (the index row), one signature display block, one print window, one timeline axis with its frames and leaders, and one grain field.

### Navigation
- **Style:** absolute top bar, three-column grid, 28px vertical padding by the gutter horizontally; no background, no border.
- **Typography:** Label (JetBrains Mono 12px, 0.14em, uppercase). The `DZ` mark is ink at weight 500; stage links are mute.
- **Links:** typed brackets, `[ Build ]` `[ Ship ]` `[ Prove ]` `[ Live ]` `[ Talk ]`, 22px apart, no underline.
- **Hover:** text steps from mute to pure white over 200ms (`--ease-out`); nothing else changes. Transition removed under reduced motion.
- **Focus:** 1px ink outline, 4px offset (global).
- **Mobile:** stage links hidden; `[ Talk ]` appears in the right column as the single working action.

### Index Row (button)
- **Character:** a contact-sheet line: a name and its scope on one baseline, separated from its neighbours by hairlines, no box.
- **Shape:** square (0px); `all: unset` button, full width, `grid-template-columns: 1fr auto`, 24px column gap, 18px vertical padding, `cursor: pointer`.
- **Typography:** Index (JetBrains Mono 13px, 0.06em) for the name; Data (12px, 0.08em, tabular) for the scope.
- **Separators:** 1px `{colors.line}` `border-top` on every row and `border-bottom` on the last.
- **States:** rest mute; hover pure white (200ms `--ease-out`); active (`aria-current="true"`) ink, no other marker; focus 1px ink outline offset 4px.
- **Behaviour:** click scrolls to that step inside the pinned stage; Arrow Up/Left and Down/Right move one step.
- **Mobile:** four names in a 2×2 grid (4px × 16px gaps, 8px row padding), separators removed, scope hidden, each name typed in brackets via `::before`/`::after` (`[ Raffero ]`) so the names read as the controls.

### Print (signature window)
- **Character:** the active project's landing page as a darkroom print, bleeding to the right edge of the desktop stage.
- **Source:** `public/prints/<slug>.jpg`, a 1000×900 capture graded per the Graded Print Rule (greyscale, contrast 1.06, brightness 0.96, blacks lifted to ground, edges burned toward ground per landing, JPEG q0.86, recipe in the JPEG comment segment and `.impeccable/prints-provenance.txt`).
- **Window:** `figure` with `overflow: hidden`, background ground, all four prints stacked with `fill` and `object-fit: cover`, `object-position` per project (`50% 0`, the landing's headline). Only the active print is visible.
- **Develop:** every change of active print plays the Hero's develop verbatim (`filter: brightness(0.05) contrast(1.6)` → `brightness(1) contrast(1)`, 1.6s `--ease-out`, `both`); disabled under reduced motion.
- **Mobile:** `aspect-ratio: 4 / 3`, inset by the gutter, `touch-action: pan-y`; horizontal swipe changes the project.

### Caption
- **Pitch:** Descriptor voice (JetBrains Mono 13px, 1.7, 0.08em, mute), max 54ch, sentence case, one line from the product's own words.
- **Control:** `[ Visit host ]` in Label voice (12px, 0.14em, uppercase, mute), `white-space: nowrap`, right-aligned on the same baseline 24px away; hover pure white over 200ms; opens the product in a new tab.
- **Mobile:** stacked, 12px apart, pitch first.

### Text Links (Data)
- **Style:** inherit colour (mute), no underline.
- **Hover:** text and any hairline both step to pure white over 200ms.
- **Numerals:** tabular.

### Display Word (signature)
- The stage word set in Display, ink. In the Hero: two lines, each word a block, bottom-anchored 64px above the stage edge, preceded by the Descriptor at a 22px gap; the pair "settles" up 24px on load. In Build and Ship: `Build.` / `Ship.`, top-anchored at 104px on the gutter; it does not animate on its own. On mobile Ship the word is static with 32px below it.

### Timeline Axis (signature)
- **Character:** a contact strip's edge markings: one hairline for time, a short tick and a small year at each stop.
- **Axis:** 1px `{colors.line}`, seven pitches long (`clamp(220px, 22vw, 320px)` per year, 2019 → 2026), at 56% of the stage height, left origin on the gutter.
- **Ticks:** 1px × 9px `{colors.mute}`, top 4px above the axis, one per year.
- **Year labels:** Data voice (JetBrains Mono 12px, 0.08em, tabular, mute), 8px right and 12px below the tick, `aria-hidden` (the frames carry the dates for readers).
- **Draw:** once, on the stage's first entry (top at 70% of the viewport): `scaleX` 0 → 1 from the left, 1.2s on the system's `--ease-out` bezier (`cubic-bezier(0.16, 1, 0.3, 1)` via GSAP CustomEase). Desktop and no-preference only.
- **Mobile / reduced motion:** axis, ticks and labels hidden; a vertical 1px `{colors.line}` rule on the left edge of the list stands in for the axis.

### Frame (timeline entry)
- **Character:** a contact-sheet frame drawn on the print: three mono lines inside a hairline rectangle, transparent, anchored to its start year.
- **Shape:** square (0px), `min(248px, pitch − 16px)` wide, `border: 1px solid {colors.line}`, no background, `padding: 14px 16px 16px`, lines 4px apart.
- **Typography:** title in Index voice at ink, weight 400 (13px, 0.06em); organisation and dates in Data voice (12px, 0.08em, tabular, mute); dates read `start – end` with `present` for an active role.
- **Placement:** `left = (start − 2019) × pitch`; frames alternate above (`bottom: 44px`) and below (`top: 44px`) the axis in chronological order, first frame above; a 1px × 44px `{colors.line}` leader on the frame's left edge joins it to its tick.
- **States:** none; frames are data, not controls (no hover, no focus).
- **Mobile / reduced motion:** the rectangle becomes a row: `border-top` 1px `{colors.line}` on each, `border-bottom` on the last, no side borders, no leader, `padding: 14px 0 16px`, stacked chronologically 20px right of the vertical hairline.

### Scroll Cue
- A 44×72px hit area at bottom centre containing a 1px, 56px line fading from transparent to ink. Links to the next stage. Hidden on mobile.

### Grain (signature material)
- A `<canvas>` filling the stage, white-noise greyscale, `opacity: 0.14`, `mix-blend-mode: overlay`, `pointer-events: none`, `aria-hidden`. Regenerated on resize so it is seamless at any width. Every stage mounts one (Hero at z-index 2 above photo and veil; Build at z-index 1 above the print); text always sits above it.

## Do's and Don'ts

### Do:
- **Do** keep every stage to one display-scale word in Anton (`clamp(96px, 13vw, 200px)`, stepping to `clamp(84px, 24vw, 110px)` at 720px and below) and 12–13px JetBrains Mono for everything else.
- **Do** anchor elements to edges and the gutter (`clamp(20px, 4vw, 48px)`); leave the rest of the stage as ground.
- **Do** use `{colors.mute}` for every secondary voice and `{colors.line}` for every 1px rule (the one exception: a tick that crosses a line-coloured axis is 1px `{colors.mute}`); use pure white only as a hover state.
- **Do** put darkness into the raster (greyscale, blacks lifted to `#0b0b0b`, edges burned toward it in the asset, recipe embedded) and keep the grain canvas over the whole stage at opacity 0.14 with `overlay` blending.
- **Do** ship the resting state complete without JavaScript, and disable smoothing, pinning, the hero exit and the develop under `prefers-reduced-motion`.
- **Do** type controls as bracketed text (`[ Word ]`) with a 200ms colour step on hover and the global 1px ink focus outline; mark the active item by stepping it to ink, nothing else.
- **Do** reuse the develop (1.6s, `brightness(0.05) contrast(1.6)` → true tones, `--ease-out`) for any print that changes on a stage, and drive stage progress from scroll position (pin + scrub, by steps or by distance) rather than from timers.
- **Do** keep any hairline rectangle transparent and around data only (a Ship frame), and collapse it to hairline-separated rows on mobile and under reduced motion; never box a control.

### Don't:
- **Don't** introduce any hue: no accent colour, no tinted greys, no coloured links or focus rings.
- **Don't** use `box-shadow`, `backdrop-filter`, glass, or CSS gradients on desktop; the only permitted gradient is the mobile foot veil and the 1px scroll cue.
- **Don't** round any corner or draw any box around a control.
- **Don't** cover the finger-on-lips gesture with text at any breakpoint.
- **Don't** uppercase anything except bracketed navigation and action links, and never track the descriptor beyond 0.08em.
- **Don't** animate anything on its own after load; motion is the develop, the scroll-scrubbed pin and hero exit, the once-only axis draw on entry, or the 200ms hover colour step. The grain never moves.
- **Don't** place a colour screenshot, an unburned raster, or a raster without its provenance on a stage.
