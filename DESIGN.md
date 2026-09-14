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
  display-compact:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "clamp(96px, 11vw, 150px)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.005em"
  display-band:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "clamp(64px, 8.5vw, 120px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.005em"
  display-band-mobile:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "clamp(40px, 11vw, 64px)"
    fontWeight: 400
    lineHeight: 1.02
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
  object: "36px"
  shelf: "clamp(48px, 8svh, 104px)"
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
  mail-band:
    textColor: "{colors.ink}"
    typography: "{typography.display-band}"
    rounded: "{rounded.none}"
    padding: "14px clamp(20px, 4vw, 48px) 18px"
  mail-band-hover:
    textColor: "{colors.white-hover}"
  band-separator:
    textColor: "{colors.mute}"
    typography: "{typography.display-band}"
    padding: "0 0.3em"
  channel-link:
    textColor: "{colors.mute}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  channel-link-hover:
    textColor: "{colors.white-hover}"
  signoff:
    textColor: "{colors.mute}"
    typography: "{typography.data}"
  shelf-label:
    textColor: "{colors.mute}"
    typography: "{typography.label}"
  shelf-object:
    textColor: "{colors.ink}"
    padding: "8px 8px 0"
  shelf-object-hover:
    textColor: "{colors.white-hover}"
  tag:
    textColor: "{colors.mute}"
    typography: "{typography.data}"
    rounded: "{rounded.none}"
    padding: "9px 14px 10px"
    width: "min(60ch, 80vw)"
  tag-name:
    textColor: "{colors.ink}"
    typography: "{typography.data}"
  tag-open:
    textColor: "{colors.mute}"
    typography: "{typography.label}"
---

# Design System: David Zapata

## Overview

**Creative North Star: "La Copia de Cámara Oscura" (The Darkroom Print)**

The site is a print pulled from a darkroom, not a web page with a photo on it. One person, one word, and everything else is darkness and grain. The photograph is the argument; the name is the caption. There is no color anywhere: the whole world lives between a near-black ground and a warm paper white, with a single grey for anything that speaks second and a hairline that is barely lighter than the ground. Depth comes from the photograph's own burned edges and a generated silver-gelatin grain, never from CSS gradients, glass, or shadows.

Density is extremely low and deliberate. A stage is a single viewport with a handful of elements, each anchored to an edge or a gutter, and large areas of ground left empty on purpose. Type does the work of hierarchy: a condensed heavy display face at poster scale against small, widely tracked monospace annotations. Body text in Archivo is loaded and reserved but has not yet appeared on a surface; the five shipped stages (Hero, Build, Ship, Prove, Talk) are entirely display and mono, plus, in Prove, line drawing: the vitrine's objects are 1px stroke drawings in ink with fine mute hatching, no fills, no raster, no icon font.

Motion is either a print developing or the visitor's own scroll. On load the Hero print "develops" once (1.6s, exponential ease-out) from near-black to its true tones while the caption settles into place. From the second stage on, the page is a sequence of pinned viewports scrubbed by scroll: the Hero's print sinks back into the ground as it leaves, each change of print inside the Build spread is the same 1.6s develop again, and the Ship strip is dragged right-to-left by the scroll while its axis draws once (1.2s, exponential ease-out) on entry; the closing Talk stage drags its email band the same way, and nothing on it animates but that drag. Prove, between Ship and Talk, is the third scrubbed grammar: the pinned stage reveals its three shelves one after another as the visitor scrolls (each board draws from the left, its objects are set down, its label comes up), and once the last shelf is set the pin holds a short beat and releases. Nothing moves on its own; every motion is tied to load, scroll position, or a hover. The resting state is complete without JavaScript and is shown immediately under `prefers-reduced-motion`, which removes smoothing, pinning and the develop. The product commits to six stages, one word each (Hero, Build, Ship, Prove, Live, Talk); Talk, the closing stage, was built and mounted before Prove; Prove (the trophy vitrine) shipped as an extension of this world, and the one remaining stage (Live) inherits it rather than opening a new one.

**Key Characteristics:**
- Black and white only; no color accent exists in the token set.
- One dark ground, one ink, one grey, one hairline; nothing in between.
- Poster-scale condensed display word against 12–13px tracked monospace annotations.
- Flat: no shadows, no CSS vignette on desktop, no radius; edges are the composition.
- Generated grain over the whole stage (`mix-blend-mode: overlay`, opacity 0.14).
- Every raster is a graded print: greyscale, blacks lifted to ground, edges burned to ground in the asset.
- Motion is the develop (1.6s) or the scroll; nothing animates on its own.
- Objects are drawn, not pictured: 1px `currentColor` strokes with round joins and 0.75px mute hatching, no fills; never a raster icon or a glyph font.

## Colors

A monochrome darkroom palette: a near-black ground, a warm paper white for ink, a single mid grey for secondary voice, and a hairline just above the ground.

### Primary
- **Paper White / Ink** (`{colors.ink}`): the only "positive" value. Display words (name, `Build.`, `Ship.`, `Talk.`), the email address in the Talk band at rest, the `DZ` mark, the active index row, focus outline, selection background, the bright end of the scroll cue, and in Prove the stroke of every shelf object at rest and the name line of a hanging tag. Everything that must be read first is this colour.

### Neutral
- **Darkroom Ground** (`{colors.ground}`): page and stage background, `theme-color`, scrollbar track, selection text, the print window's fill behind every raster, and the mobile foot fade (`rgba(11,11,11,0→1)`). Every raster (the portrait, the four product prints) is burned to this value at its edges in the asset itself, so ground and print are indistinguishable at the seams.
- **Silver Grey / Mute** (`{colors.mute}`): every secondary voice: nav links at rest, the descriptor line, index rows at rest and their scope column, the print caption, `[ Visit ]` at rest, in Ship the organisation, dates and year labels, in Talk the em-dash separators between the repeated address, the channel controls at rest, and the sign-off line, and in Prove the shelf labels (`Won`, `Shared`, `Certified`), the `detail · year` and `[ Open ]` of a tag, and the hatching and ruled lines drawn inside the objects (0.75px hatch strokes, 1px text lines on the diploma, book and floppy). It is also the colour of the 1px year ticks on the Ship axis, the one place a mute rule exists: a tick in `{colors.line}` would vanish against the line-coloured axis it crosses. Contrast on ground is about 6:1, which clears WCAG AA at 12px mono.
- **Hairline** (`{colors.line}`): 1px rules only: the scroll cue, the scrollbar thumb, the separators between index rows (desktop), in Ship the timeline axis, the frame borders, the leaders from frame to tick, and the vertical hairline and row separators of the mobile list, in Talk the two full-bleed rules above and below the email band, and in Prove the double hairline of every shelf board, the two 40px brackets drawn under it, the 16px thread and the border of a hanging tag. Never a fill.
- **Pure White (hover)** (`{colors.white-hover}`): appears only as the hover target for text controls (nav links, index rows, `[ Visit ]`, the channel links, the whole Talk email band, whose address steps from ink to pure white while its mute separators stay put, and a Prove shelf object on hover or while its tag is open; its mute hatching stays put). It is a state, not a surface colour.

### Named Rules
**The No-Accent Rule.** There is no fifth colour. Emphasis is produced by scale (display vs mono), by value (ink vs mute), or by state (mute → pure white), never by hue.

**The Burned-In Rule.** Darkness belongs to the raster. Grading, vignette and the desktop left-field fade live in the image; CSS carries no gradient on desktop. The one CSS fade (the mobile foot veil, `linear-gradient(180deg, transparent 55%, ground 100%)`) exists only where the portrait crop must land on solid ground.

**The Graded Print Rule.** Any raster placed on a stage is a print, not a screenshot: converted to greyscale, blacks lifted to `{colors.ground}` so the image never goes darker than the page, and its edges burned toward `{colors.ground}` with a strength chosen per image (heavier on dark sources, lighter on light ones, no burn on an edge that would swallow a white bar), with the grading recipe embedded in the file's own metadata. Colour or an unburned raster never ships.

## Typography

**Display Font:** Anton 400 (with Impact, sans-serif)
**Body Font:** Archivo 400/500 (with Helvetica Neue, Arial, sans-serif)
**Label/Mono Font:** JetBrains Mono 400/500 (with ui-monospace, monospace)

**Character:** A condensed, heavy poster face carries the one word each stage owns; a light, widely tracked monospace carries the annotations around it, the way a contact sheet is labelled in pencil. Archivo is the reserved reading voice for future stages; no shipped stage sets anything in it.

### Hierarchy
- **Display** (Anton 400, `clamp(96px, 13vw, 200px)`, line-height 0.9, tracking 0.005em): the stage word. In the Hero it is the name, always two lines (`David` / `Zapata`, `text-wrap: balance`), each word a block; in Build, Ship, Prove and Talk it is `Build.` / `Ship.` / `Prove.` / `Talk.`, one line with its full stop.
- **Display (compact)** (Anton 400, `clamp(96px, 11vw, 150px)`, same leading and tracking): the Display step for a pinned desktop stage that must hold everything in one short viewport. Used once, by `Prove.` between 741px and 820px of viewport height (with the shelf objects at `zoom: 0.85`), so three shelves and the word share the pin without clipping. Above 820px the word returns to Display. Recorded on the detector's advisory; the same floor (96px) as Display, only the ceiling drops.
- **Display (mobile)** (Anton 400, `clamp(84px, 24vw, 110px)`, same leading and tracking): the same role at 720px and below. The Hero name and the Build, Ship, Prove and Talk words step to it; it is the second and smaller stop of the display ramp, not a separate voice.
- **Band** (Anton 400, `clamp(64px, 8.5vw, 120px)`, line-height 1, tracking 0.005em, ink): the third stop of the display ramp, used once: the email address in the Talk band, repeated three times with an em-dash separator between repeats. Same face and tracking as Display, set solid rather than tight because it runs on one line between hairlines. The separator takes the same size in mute with 0.3em of padding either side.
- **Band (mobile / reduced motion)** (Anton 400, `clamp(40px, 11vw, 64px)`, line-height 1.02): the band step at 720px and below and under `prefers-reduced-motion`, where the address stands still, shown once, breaking only after the `@` (a `<wbr>`), never mid-word.
- **Descriptor** (JetBrains Mono 400, 13px, line-height 1.7, tracking 0.08em, mute): the one sentence beside the display word: the Hero line above the name, the pitch under the print in Build. Sentence case. Measure 54ch in both stages.
- **Index** (JetBrains Mono 400, 13px, tracking 0.06em, mute / ink when active): the project names in the Build index, and in ink the role title of every Ship frame (weight 400, never heavier). Sentence case, no uppercase; on mobile the Build names take typed brackets.
- **Label** (JetBrains Mono, 12px, tracking 0.14em, uppercase): the bracketed control voice: navigation, the `DZ` mark (weight 500, ink), the `[ Visit host ]` link under a print, the Talk channel controls (`[ GitHub ]` `[ X ]` `[ LinkedIn ]` `[ Instagram ]`), the `[ Open ]` control inside a Prove tag, and, as the one non-control in this voice, the three Prove shelf labels (`Won` / `Shared` / `Certified`) engraved under the right end of each board. Uppercase is reserved for this role.
- **Data** (JetBrains Mono 400, 12px, tracking 0.08em, tabular numerals, mute): data and measurements: the scope column of the Build index (`Avalanche`, `EU battery passport`, `Stellar · testnet`), the Ship year labels (`2019` … `2026`), the organisation and dates in each Ship frame (`2024 – present`, spaced en dash), the Talk sign-off (`© {year} David Zapata · davidzo.com`, the year computed at render), and in Prove the hanging tag's `detail · year` line (`Hackathon winner · 2026`, `2024 – 2026` with a spaced en dash) and, in ink, the tag's name line. Not uppercased. The Build scope and the year labels are hidden on mobile; frame dates stay because each row states its own years.
- **Body** (Archivo 400/500): loaded on `<body>` as the default font; no size, leading or measure has been set on any surface yet. Do not invent a body ramp until a stage sets one.

### Named Rules
**The One Word Rule.** Each stage owns exactly one display-scale word; everything else on the stage is 12–13px monospace. A stage with two display-scale elements has broken the world. The one recorded exception is the Talk band: the email address is set in the display face at the smaller Band step because the address is the stage's action, not a second word; it earns the face by being the thing the visitor came to do, and no other stage may borrow the step for a headline.

**The Uppercase-Is-Control Rule.** Uppercase with 0.14em tracking is the voice of bracketed navigation and action links (`[ Build ]`, `[ Talk ]`, `[ Visit raffero.com ]`, `[ Open ]`) only. Descriptor, index and data lines stay in sentence case at 0.06–0.08em, even when they are typed in brackets on mobile. The one recorded exception is the shelf label under a Prove board (`Won`, `Shared`, `Certified`): a one-word engraving at the edge of a fixture, mute, never bracketed, never a link; it may not be borrowed as a kicker, eyebrow or section heading anywhere else.

## Layout

The spatial model is a stack of full-height stages (`100svh`, min 560px, `isolation: isolate`) with elements pinned to edges or split into halves rather than flowed. There is no container width or column grid; the only horizontal measure is the gutter, `clamp(20px, 4vw, 48px)`, used as the left inset for copy blocks, the nav padding, and the right inset for captions.

Desktop (above 720px), Hero: the photograph fills the stage with `object-fit: cover`, `object-position: right center`, the face in the right third and the left ~55% burned to ground. Nav sits at the top in a three-column grid (`1fr auto 1fr`): mark left, five bracketed links centred with a 22px gap, right column empty. The copy block (descriptor over name, 22px gap) is absolutely anchored left at the gutter and 64px above the bottom edge. A 44×72px scroll cue sits bottom centre.

Desktop, Build: a two-page spread (`grid-template-columns: 1fr 1fr`). The left page is a column padded 104px top, 64px bottom and the gutter on both sides, with the display word at the top and the index at the bottom (`justify-content: space-between`, 40px minimum gap). The right page is a print window filling the page's height (104px top, 64px bottom, bleeding to the right viewport edge with no right inset) and, 20px below it, a caption row: pitch left, `[ Visit host ]` right, 24px apart, inset by the gutter on the right. In the 1440×900 capture the print window runs from y=104 to y=740 and the index's top hairline lands at y=612.

Desktop, Ship: a single stage with `Ship.` top-anchored at 104px on the gutter and, at 56% of the stage height, a horizontal timeline strip whose left origin sits on the gutter. The axis is a 1px `{colors.line}` rule running seven year-pitches (2019 to 2026, pitch `clamp(220px, 22vw, 320px)`); each year has a 1px `{colors.mute}` tick (9px tall, straddling the axis 4px above it) and a Data-voice year label 8px right and 12px below the tick. The six roles are frames `min(248px, pitch − 16px)` wide (so two neighbours can never overlap at narrow desktop widths) anchored at their start year, alternating above and below the axis in chronological order (first frame above), each 44px clear of the axis and joined to its tick by a 1px leader of the same 44px. The track is `7 × pitch + 48px` wide so the 2026 label is the last thing in it; the terminal state lands `2026` on the right gutter with nothing trailing.

Desktop, Prove: one stage, the word top-anchored on the gutter and three shelves stacked under it, each a full-width row of objects standing on a board. Unpinned (a desktop shorter than 741px, or reduced motion) the stage is `min-height: 100svh`, padded 104px top / 96px bottom by the gutter, the word 72px above the shelves and the shelves 120px apart. Pinned (≥721×741 with motion) the stage becomes exactly `100svh`, `overflow: hidden`, padded 72px top / 40px bottom, the word 32px above the shelves and the shelves `clamp(48px, 9svh, 110px)` apart, so three boards always fit one viewport; between 741px and 820px of height the word drops to Display (compact) and the objects to `zoom: 0.85`. A shelf is: a row (`padding: 0 40px`, `gap: 36px`, `align-items: flex-end`) of objects whose feet touch the board; a board 4px tall (`border-top` and `border-bottom` 1px `{colors.line}`); two 40×40 brackets drawn under the board 48px in from each end (the right one mirrored); and the label absolutely placed at the right end, 30px below the board. Objects sit in the row in content order (Won: newest first, trophies and medals; Shared: cassette, book, floppies; Certified: diplomas), at most 24 on the shelves; anything beyond would fall into a `[ Archive ]` disclosure list 28px (pinned) / 72px below, which today never renders because nineteen proofs fit. In the 1440×900 capture the boards land at y≈379, 549 and 726 and the word occupies y≈72–232.

Desktop, Talk: a single stage with `Talk.` top-anchored at 104px on the gutter; at 50% of the stage height (centred by `translate: 0 -50%`) a full-bleed band, `border-top` and `border-bottom` 1px `{colors.line}`, whose inner strip is `width: max-content`, padded 14px top / 18px bottom and the gutter on both sides, carrying the address three times with an em-dash separator between repeats and none after the last, so the terminal scroll state closes on the address. The whole band is one `mailto:` link. The foot is a grid anchored left and right at the gutter and 64px above the bottom edge: the channel controls in a wrapping row (8px × 22px gaps), and 20px below them the sign-off line. In the 1440×900 capture the band's hairlines land at y≈373 and y≈523.

Scroll grammar (desktop, motion allowed): stages are pinned viewports scrubbed by scroll position. GSAP ScrollTrigger pins the Build stage for four viewport-heights (`+= innerHeight × 4`, `scrub: true`) and the active project is `floor(progress × 4)`; Lenis smooths the scroll on GSAP's ticker so both share one clock, and anchor links (`#build`) and index clicks scroll to the middle of the target step (Lenis 0.9s). As the Hero unpins (`start: top top`, `end: bottom top`), its photograph is scrubbed to `brightness(0.08)` and `yPercent: -8` so it sinks into the ground while `Build.` rises. Ship is the second pin grammar: instead of stepping, the pinned stage translates its track on x by `scrollWidth − (innerWidth − 2 × gutter)` with `ease: none`, the pin lasting that distance × 1.2 (`invalidateOnRefresh`); the axis draws once from the left (`scaleX` 0 → 1, 1.2s, the system's `--ease-out` bezier registered as a GSAP CustomEase) when the stage's top reaches 70% of the viewport, and never again. Talk reuses the distance grammar on its band: translated on x by `scrollWidth − innerWidth` (the band is full-bleed, so no gutter is subtracted), pin length `max(distance × 1.2, innerHeight × 0.6)` so a short overflow still gives the pin a floor of six-tenths of a viewport. Prove is the third pin grammar, the reveal: the stage's whole content already fits one viewport, so nothing steps or drags; instead a scrubbed timeline sets the vitrine down shelf by shelf. Each shelf's reveal starts 1.4s apart on the timeline: its board draws from the left (`scaleX` 0 → 1, 1s), 0.2s later its objects are set down (`y` −14 → 0 and `opacity` 0.25 → 1, 0.9s, 0.12s stagger), 0.5s in its label comes up (`opacity` 0.25 → 1, 0.6s), all on the system's `--ease-out` CustomEase; a 0.6s empty beat closes the timeline before the pin releases. The pin runs `innerHeight × (0.7 × shelves + 0.4)` (2.5 viewports for three shelves), `start: top top`, `scrub: true`, `invalidateOnRefresh`, and only on ≥721px wide and ≥741px tall with motion allowed. On a desktop shorter than 741px, and on phones, the same reveal plays once per shelf as it enters (`start: top 82%`, `once: true`), unpinned. Under `prefers-reduced-motion` Lenis is not created, nothing is pinned, the Hero photograph does not darken, and the index buttons switch the print without the develop; Prove's shelves are simply there, fully set.

Mobile (720px and below, verified at 390px): the Hero photograph becomes a 66svh band across the top (`object-position: 78% 0`) with a CSS veil fading its foot into ground; the copy block moves to 76px from the bottom with a 16px gap; the scroll cue disappears; nav becomes `DZ` left and `[ Talk ]` right (padding-top 20px). Build is not pinned and is not a fixed viewport: the stage becomes `height: auto`, single column, 72px top padding, 24px gaps, 56px bottom padding; the index is a 2×2 grid of bracketed names (4px row gap, 16px column gap, 8px row padding, no hairlines, scope hidden); the print is a 4:3 window inset by the gutter on both sides, with pitch and `[ Visit ]` stacked 12px apart, 16px below it. Swiping the print (≥40px horizontally) or tapping a name changes the project. Ship at 720px and below, and on any desktop under `prefers-reduced-motion`, is not pinned and does not translate: `height: auto`, 72px top and 56px bottom padding by the gutter, the word 32px above a list; the axis, ticks and year labels are hidden and the frames become hairline-separated rows (14px top / 16px bottom padding, `border-top` each, `border-bottom` on the last, no side borders, no leader) set 20px right of a vertical 1px `{colors.line}` rule on the list's left edge, in the same chronological order. Talk at 720px and below, and on any desktop under `prefers-reduced-motion`, is not pinned and does not translate: `height: auto`, 72px top and 56px bottom padding by the gutter (the same foot as Build and Ship), the word 32px above the band; the band becomes static (`width: auto`, 16px top / 18px bottom padding, no side padding, its hairlines now running gutter to gutter), the address shown once at the mobile Band step breaking only after the `@`, the repeats and separators hidden; the foot follows 40px below with the channels in Build's 2×2 bracketed grid (4px × 16px gaps) and the sign-off under them. Prove at 720px and below is not pinned: `min-height: 0`, 72px top and 56px bottom padding by the gutter, the word 40px above the shelves and the shelves 96px apart; each row becomes a horizontal scroller (`overflow-x: auto`, `scroll-snap-type: x mandatory`, scrollbar hidden, `padding: 0 8px`, `gap: 32px`, each item `scroll-snap-align: start`) so the visitor swipes object by object along the board, with the objects at `transform: scale(0.8)` from their feet; `min-width: 0` on the shelf and on the shelves grid keeps the page itself from ever scrolling sideways. The hanging tag does not hang on phones (it cannot live inside a scrolling row): the open object's tag renders under the shelf instead (`.rowTag`, 48px below the board to clear the brackets, gutter to gutter, `white-space: normal` so the name may wrap while `detail · year` stays unbreakable).

Spacing rhythm as used: 2 (tag row gap) · 4 (mobile index and channel row gap, frame line gap, tick overshoot, shelf board height) · 6 (sign-off row gap) · 8 (mobile row padding, tick-to-year-label, channel row gap, object foot pad, mobile shelf row inset) · 9 (tick height, tag head) · 10 (tag foot) · 12 (mobile caption gap, axis-to-year-label) · 14 (frame head, band head, tag sides and column gap) · 16 (mobile stack, mobile index and channel column gap, mobile print-to-caption, frame sides and foot, mobile band head, tag thread) · 18 (index row padding, band foot) · 20 (mobile chrome, print-to-caption, mobile list inset from its hairline, channels-to-sign-off) · 22 (Hero stack, nav gap, channel gap) · 24 (row / caption column gap, mobile Build gap, sign-off column gap) · 28 (chrome, pinned Prove archive gap) · 30 (shelf label drop) · 32 (mobile Ship and Talk word-to-content, pinned Prove word-to-shelves, mobile object gap) · 36 (object gap) · 40 (word-to-index minimum, mobile Talk band-to-foot and foot, shelf row inset, bracket size, pinned Prove foot, mobile Prove word-to-shelves) · 44 (frame-to-axis, leader length) · 48 (bracket inset from the board's ends, mobile tag-under-shelf) · 56 (mobile Build, Ship and Prove foot) · 64 (desktop baseline) · 72 (mobile Build, Ship, Prove and Talk head, pinned Prove head, unpinned Prove word-to-shelves) · 96 (unpinned Prove foot, mobile Prove shelf gap) · 104 (desktop stage head, Build, Ship and unpinned Prove) · 120 (unpinned Prove shelf gap) · 248 (frame width) · `clamp(48px, 9svh, 110px)` (pinned shelf gap) · `clamp(220px, 22vw, 320px)` (year pitch). Vertical chrome is 28px on desktop; the gutter governs everything horizontal.

Product rule inherited by later stages: each stage must work as a single viewport moment on desktop; detail expands within the pinned stage (as Build's four steps and Ship's strip do) or in an overlay rather than breaking the journey.

### Named Rules
**The Three Pins Rule.** A pinned stage is scrubbed by steps (Build: pin length `innerHeight × steps`, active step = `floor(progress × steps)`), by distance (Ship and Talk: pin length `distance × 1.2` with a floor of `innerHeight × 0.6`, track translated by that distance), or by reveal (Prove: pin length `innerHeight × (0.7 × shelves + 0.4)`, a scrubbed timeline that sets the stage's content down piece by piece and ends on a 0.6s beat). The reveal exists because Prove's whole content fits one viewport, so there is nothing to step or drag; it is not for stages that have. All three start `top top`, all `scrub: true`, all vanish at 720px and under `prefers-reduced-motion`, where the stage becomes an ordinary flowing section; the reveal additionally requires 741px of height and otherwise plays once per piece on entry. A fourth pin grammar needs a reason these three cannot serve.

## Elevation & Depth

This system uses no shadows and no tonal layering. Depth is photographic: every graded raster carries its own vignette and burned edges, and a single generated grain canvas (`opacity: 0.14`, `mix-blend-mode: overlay`, above the raster and veil, below all text) unifies image and ground into one print surface on every stage. Text sits directly on the print with no scrim, panel, or backdrop; legibility comes from the raster being burned to ground where text lands. The Build print window is filled with ground behind the raster, so the develop animation rises out of the page rather than out of a box. Ship's frames carry no background at all: the hairline border sits directly on the ground and the grain passes through it as one layer, so a frame is a drawn rectangle on the print, not a panel on top of it. Talk's band is the same: two hairlines on the ground with the address between them and the grain passing through, no fill, and its focus ring sits inside the hairlines rather than around a box. Prove's shelves and objects follow suit: a board is two hairlines with ground between, the brackets and objects are unfilled strokes, and the grain passes through all of them. The one exception is the hanging tag body, which carries a ground fill (`background: var(--bg)`) and sits at z-index 3, above the grain, so it can cover the bracket it hangs over; it is the only element in the world that is not grained. That is a shipped fact, not a licence: nothing else takes a fill.

### Named Rules
**The Flat Print Rule.** No `box-shadow`, no `backdrop-filter`, no glass, no elevation states. If an element needs separation, it gets a 1px hairline (`{colors.line}`) or more empty ground, never a shadow.

**The Grain Is Material Rule.** The grain is one static field over the whole stage, regenerated only on resize. Every stage mounts its own Grain canvas at the same opacity and blend; it is never animated, never tiled per element, and never applied to text alone.

## Shapes

Everything is square. No border radius exists anywhere (`rounded.none` = 0px); edges are the viewport, the gutter, the print window's hard rectangle, and the raster's burned frame. The only strokes are 1px hairlines: the scroll cue (1px wide, 56px tall, transparent→ink gradient), the index row separators (`border-top` on each row, `border-bottom` on the last), the focus outline (1px ink, offset 4px), in Ship the timeline axis, the 9px year ticks (mute), the 44px leaders, and the frame borders (`{colors.line}`, no fill), and in Talk the two full-bleed rules of the email band. The band is the one control drawn between hairlines, and the hairlines belong to the band, not to the link: they run edge to edge, they do not close at the sides, and because the band bleeds past the stage its focus ring is the global 1px ink outline drawn inset (`outline-offset: -1px`) instead of 4px outside. A frame is the one hairline rectangle in the world and it encloses data, never a control; controls still have no boxes at all; brackets typed as text (`[ Build ]`, `[ Visit glemo.io ]`, and on mobile `[ Raffero ]`) are the affordance. Curved corners visible inside a product print belong to that product's page and are part of the raster, not of this system. Prove adds the drawn fixture and the drawn object: a shelf board is a double hairline 4px tall with two 40×40 line brackets hung under it (a 38px drop and a diagonal back to the board, plus a short inner strut: `M1 0v38L38 0` and `M1 12L24 0`), and every object on it is a 1px `currentColor` line drawing with round caps and joins, 0.75px mute hatching for volume, and no fill. Curves inside a drawing (the medal's rings, the diploma's scroll ends, the cassette's `rx="3"` body) are the object's geometry, not a UI radius; no box, control or tag ever rounds. The hanging tag is a hairline rectangle enclosing data with one text control inside it (`[ Open ]`), the second hairline rectangle in the world after the frame; it is an annotation attached to an object, not a card.

## Components

The five shipped stages have no cards, inputs, or chips. Their vocabulary is text links, one text-only button (the index row), one signature display block, one print window, one timeline axis with its frames and leaders, one email band, one shelf with its drawn objects and hanging tags, and one grain field.

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
- The stage word set in Display, ink. In the Hero: two lines, each word a block, bottom-anchored 64px above the stage edge, preceded by the Descriptor at a 22px gap; the pair "settles" up 24px on load. In Build, Ship, Prove and Talk: `Build.` / `Ship.` / `Prove.` / `Talk.`, top-anchored at 104px on the gutter (72px when Prove is pinned); it does not animate on its own. On mobile Ship and Talk the word is static with 32px below it, on mobile Prove with 40px. Only Prove takes the compact step (`clamp(96px, 11vw, 150px)`) and only between 741 and 820px of pinned desktop height.

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

### Email Band (signature control)
- **Character:** the address as a marquee between two hairlines: the one thing the closing stage asks the visitor to do, set in the display face and dragged by the scroll.
- **Shape:** full-bleed (`left: 0; right: 0`), `border-top` and `border-bottom` 1px `{colors.line}`, `overflow: hidden`, no radius, no fill; the inner strip is `width: max-content`, padded 14px top / 18px bottom and the gutter on both sides.
- **Typography:** Band (Anton 400, `clamp(64px, 8.5vw, 120px)`, line-height 1, 0.005em, `white-space: nowrap`), ink. The address is repeated three times; the repeats after the first are `aria-hidden`. Between repeats an em dash (`—`) is its own flex item at the same size in mute, padded 0 0.3em; there is no separator after the last repeat.
- **Link:** the whole band is one `mailto:` anchor with `aria-label="Email <address>"`, no underline.
- **States:** rest ink; hover pure white over 200ms `--ease-out` (the address only; separators stay mute); focus 1px ink outline, `outline-offset: -1px`, inset because an outside ring would be clipped at the bleed. Transition removed under reduced motion.
- **Scrub:** desktop and no-preference only: the strip translates on x by `scrollWidth − innerWidth` while the stage is pinned for `max(distance × 1.2, innerHeight × 0.6)`, `ease: none`, `invalidateOnRefresh`.
- **Mobile / reduced motion:** static (`transform: none !important`), one address at `clamp(40px, 11vw, 64px)`, line-height 1.02, `white-space: normal` with a `<wbr>` after the `@` so it breaks there and only there; repeats and separators `display: none`; padding 16px 0 18px.

### Channel Controls
- **Style:** bracketed text links, `[ GitHub ]` `[ X ]` `[ LinkedIn ]` `[ Instagram ]`, only those with a confirmed URL, in a wrapping flex row with 8px × 22px gaps; `rel="me noopener"`, new tab.
- **Typography:** Label (JetBrains Mono 12px, 0.14em, uppercase), mute.
- **Hover / Focus:** pure white over 200ms; global 1px ink outline offset 4px.
- **Mobile / reduced motion:** a 2×2 grid (4px × 16px gaps), the same grid as Build's mobile index, so no control is orphaned on its own row.

### Sign-off
- **Style:** one Data-voice line (JetBrains Mono 12px, 0.08em, tabular, mute) reading `© {year} David Zapata · davidzo.com`, the year computed at render; a wrapping flex row with 6px × 24px gaps so an optional ENS name or PGP fingerprint (`pgp` label and fingerprint both in the Data voice, sentence case, 0.08em: the label is not a control) can sit beside it when supplied. Neither is supplied today, so only the copyright renders. Contains no claim about tracking.

### Shelf (signature fixture)
- **Character:** a trophy shelf drawn in one line weight: objects standing on a board, two brackets beneath, a small engraved label at the right end.
- **Row:** `ul`, `display: flex`, `align-items: flex-end`, `padding: 0 40px`, `gap: 36px`; each object is an `all: unset` link or button (`padding: 8px 8px 0`, `cursor: pointer`, `display: grid`, `justify-items: center`) so the object's foot touches the board.
- **Board:** 4px tall, `border-top` and `border-bottom` 1px `{colors.line}`, no fill, full width of the stage between gutters.
- **Brackets:** two 40×40 inline SVGs, `stroke: var(--line)`, 1px, round caps and joins, placed 4px under the board at 48px from the left and right ends (the right one `scaleX(-1)`); `aria-hidden`.
- **Label:** Label voice (JetBrains Mono 12px, 0.14em, uppercase, mute), absolutely positioned `right: 0; bottom: −30px`, one word: `Won`, `Shared`, `Certified`. It is not a control and takes no brackets.
- **Reveal:** desktop ≥721×741 with motion: scrubbed inside the stage pin (board `scaleX` 0 → 1 from the left, objects `y` −14 → 0 / opacity 0.25 → 1 with a 0.12s stagger, label opacity 0.25 → 1). Shorter desktops and phones: the same, once, when the shelf's top reaches 82% of the viewport. Reduced motion: none.
- **Mobile:** the row scrolls horizontally with mandatory snap, `padding: 0 8px`, `gap: 32px`, scrollbar hidden; objects `scale(0.8)` from their feet; board, brackets and label unchanged.

### Shelf Object
- **Character:** a line drawing of the kind of proof (trophy for a hackathon win, medal for a track win, cassette for a course, book for a guide, floppy for a repository, diploma for a certificate); six drawings, one stroke family.
- **Sizes:** trophy 92×96, medal 72×84, cassette 104×66, book 72×86, floppy 84×78, diploma 100×94 (viewBox = box, no scaling on desktop above 820px of height; `zoom: 0.85` between 741 and 820px; `scale(0.8)` on phones).
- **Stroke:** `fill: none`, `stroke: currentColor`, 1px, `stroke-linecap: round`, `stroke-linejoin: round`; hatching in `var(--mute)` at 0.75px; ruled text lines on the diploma, book and floppy in `var(--mute)` at 1px. `aria-hidden`; the link carries `aria-label={name}`.
- **States:** rest ink; hover and open pure white over 200ms `--ease-out` (the mute hatching does not change); focus 1px ink outline offset 4px; transition removed under reduced motion.
- **Behaviour:** an `<a target="_blank" rel="noopener">` when the proof has a URL, a `<button>` otherwise. Mouse enter/leave opens and closes the tag; keyboard focus opens it on fine pointers only; on a coarse pointer (`hover: none`) the first tap opens the tag (`preventDefault`) and the second follows the link, a tap anywhere outside closes it. No caption: the object's name lives only in its tag.

### Hanging Tag (annotation)
- **Character:** a shop tag on a thread: hangs from the object's box, one line, hairline border.
- **Shape:** `role="tooltip"`, absolutely centred under the object (`left: 50%; top: 100%; translate: −50% 0`, z-index 3); a 1px × 16px `{colors.line}` thread, then the body: `border: 1px solid {colors.line}`, background ground, `padding: 9px 14px 10px`, `width: max-content`, `max-width: min(60ch, 80vw)`, flex with `column-gap: 14px`, `row-gap: 2px`, baseline-aligned, `white-space: nowrap` (only the longest names wrap to a second line).
- **Typography:** Data voice (JetBrains Mono 12px, 0.08em): name in ink, `detail · year` in mute, and, when a URL exists, `[ Open ]` in the Label voice (0.14em, uppercase, mute) as the last item. The tag is `aria-describedby` for its object.
- **States:** hidden at rest (`opacity: 0`, `translateY(−8px)`, `pointer-events: none`); open: opacity 1, no offset, 200ms `--ease-out`; instant under reduced motion.
- **Mobile:** the hanging tag is `display: none`; the open object's tag renders instead under its shelf (`.rowTag`, `margin-top: 48px`, `width: auto`, gutter to gutter, `white-space: normal`, `detail · year` kept `nowrap`), `aria-hidden` because the tooltip copy already describes the control.

### Scroll Cue
- A 44×72px hit area at bottom centre containing a 1px, 56px line fading from transparent to ink. Links to the next stage. Hidden on mobile.

### Grain (signature material)
- A `<canvas>` filling the stage, white-noise greyscale, `opacity: 0.14`, `mix-blend-mode: overlay`, `pointer-events: none`, `aria-hidden`. Regenerated on resize so it is seamless at any width. Every stage mounts one (Hero at z-index 2 above photo and veil; Build at z-index 1 above the print; Ship, Prove and Talk at z-index 1 above the ground, under the hairlines, drawn objects and text); text always sits above it. The Prove tag body (z-index 3, ground-filled) is the one element that sits above the grain.

## Do's and Don'ts

### Do:
- **Do** keep every stage to one display-scale word in Anton (`clamp(96px, 13vw, 200px)`, stepping to `clamp(84px, 24vw, 110px)` at 720px and below) and 12–13px JetBrains Mono for everything else.
- **Do** anchor elements to edges and the gutter (`clamp(20px, 4vw, 48px)`); leave the rest of the stage as ground.
- **Do** use `{colors.mute}` for every secondary voice and `{colors.line}` for every 1px rule (the one exception: a tick that crosses a line-coloured axis is 1px `{colors.mute}`); use pure white only as a hover state.
- **Do** put darkness into the raster (greyscale, blacks lifted to `#0b0b0b`, edges burned toward it in the asset, recipe embedded) and keep the grain canvas over the whole stage at opacity 0.14 with `overlay` blending.
- **Do** ship the resting state complete without JavaScript, and disable smoothing, pinning, the hero exit and the develop under `prefers-reduced-motion`.
- **Do** type controls as bracketed text (`[ Word ]`) with a 200ms colour step on hover and the global 1px ink focus outline; mark the active item by stepping it to ink, nothing else.
- **Do** reuse the develop (1.6s, `brightness(0.05) contrast(1.6)` → true tones, `--ease-out`) for any print that changes on a stage, and drive stage progress from scroll position (pin + scrub, by steps, by distance or by reveal) rather than from timers.
- **Do** draw any object that stands on a stage as a line drawing: `fill: none`, 1px `currentColor` stroke with round caps and joins, 0.75px `{colors.mute}` hatching for volume, ink at rest and pure white on hover; set its foot on a hairline and put its name in a hanging tag, never in a caption under it.
- **Do** give a pinned stage that must hold everything in one viewport its own height floor (741px) and, when the viewport is short (741–820px), the compact display step (`clamp(96px, 11vw, 150px)`) with objects at `zoom: 0.85`; below the floor, unpin and let it flow.
- **Do** keep any hairline rectangle transparent and around data only (a Ship frame), and collapse it to hairline-separated rows on mobile and under reduced motion; never box a control. The Talk band is not a box: its two rules run full-bleed and never close at the sides.
- **Do** set a stage's single action in the display face only at the Band step (`clamp(64px, 8.5vw, 120px)`, `clamp(40px, 11vw, 64px)` on mobile and under reduced motion) between two hairlines, as the Talk email band does; a full-bleed control takes its focus ring inset (`outline-offset: -1px`) so the ring is never clipped.
- **Do** keep the site free of trackers and third-party scripts as a build rule, silently: the sign-off reads `© {year} David Zapata · davidzo.com` and nothing more.

### Don't:
- **Don't** introduce any hue: no accent colour, no tinted greys, no coloured links or focus rings.
- **Don't** use `box-shadow`, `backdrop-filter`, glass, or CSS gradients on desktop; the only permitted gradient is the mobile foot veil and the 1px scroll cue.
- **Don't** round any corner or draw any box around a control.
- **Don't** cover the finger-on-lips gesture with text at any breakpoint.
- **Don't** uppercase anything except bracketed navigation and action links, and never track the descriptor beyond 0.08em.
- **Don't** animate anything on its own after load; motion is the develop, the scroll-scrubbed pin and hero exit, the once-only axis draw on entry, or the 200ms hover colour step. The grain never moves.
- **Don't** place a colour screenshot, an unburned raster, or a raster without its provenance on a stage.
- **Don't** print a "no trackers" (or any privacy) claim as copy anywhere on the site; the user removed it from the sign-off. Privacy is demonstrated by the build, not announced.
- **Don't** borrow the Band step for a headline or a second word on any stage; it exists for the one address on Talk.
- **Don't** caption, fill, colour, or replace with a raster or icon-font glyph any shelf object; and don't reuse the shelf label's uppercase for a kicker, eyebrow or heading. The label is an engraving on a fixture, not a type role.
- **Don't** let a phone page scroll sideways: a row that overflows scrolls inside itself (`overflow-x: auto`, snap) with `min-width: 0` on its ancestors.
