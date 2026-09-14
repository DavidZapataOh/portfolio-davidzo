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
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontWeight: 400
  descriptor:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.08em"
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
  hairline-gap: "12px"
  stack: "22px"
  chrome: "28px"
  baseline: "64px"
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
    width: "46ch"
  display-name:
    textColor: "{colors.ink}"
    typography: "{typography.display}"
  hash-link:
    textColor: "{colors.mute}"
    typography: "{typography.data}"
    rounded: "{rounded.none}"
  hash-link-hover:
    textColor: "{colors.white-hover}"
  scroll-cue:
    width: "44px"
    height: "72px"
---

# Design System: David Zapata

## Overview

**Creative North Star: "La Copia de Cámara Oscura" (The Darkroom Print)**

The site is a print pulled from a darkroom, not a web page with a photo on it. One person, one word, and everything else is darkness and grain. The photograph is the argument; the name is the caption; a real commit hash is the proof that the print was made. There is no color anywhere: the whole world lives between a near-black ground and a warm paper white, with a single grey for anything that speaks second and a hairline that is barely lighter than the ground. Depth comes from the photograph's own burned edges and a generated silver-gelatin grain, never from CSS gradients, glass, or shadows.

Density is extremely low and deliberate. A stage is a single viewport with a handful of elements, each anchored to an edge or a gutter, and large areas of ground left empty on purpose. Type does the work of hierarchy: a condensed heavy display face at poster scale against small, widely tracked monospace annotations. Body text in Archivo is loaded and reserved but has not yet appeared on a surface; the first stage is entirely display and mono.

Motion is a single event. On load the print "develops" once (1.6s, exponential ease-out) from near-black to its true tones while the caption settles into place; after that nothing moves except a 200ms colour step on hover. The resting state is complete without JavaScript and is shown immediately under `prefers-reduced-motion`. The product commits to six stages, one word each (Hero, Build, Ship, Prove, Live, Talk); every later stage inherits this world rather than opening a new one.

**Key Characteristics:**
- Black and white only; no color accent exists in the token set.
- One dark ground, one ink, one grey, one hairline; nothing in between.
- Poster-scale condensed display name against 12–13px tracked monospace annotations.
- Flat: no shadows, no CSS vignette on desktop, no radius; edges are the composition.
- Generated grain over the whole stage (`mix-blend-mode: overlay`, opacity 0.14).
- One load animation ("develop"), then stillness.

## Colors

A monochrome darkroom palette: a near-black ground, a warm paper white for ink, a single mid grey for secondary voice, and a hairline just above the ground.

### Primary
- **Paper White / Ink** (`{colors.ink}`): the only "positive" value. Display name, the `DZ` mark, focus outline, selection background, and the bright end of the scroll cue. Everything that must be read first is this colour.

### Neutral
- **Darkroom Ground** (`{colors.ground}`): page and stage background, `theme-color`, scrollbar track, selection text, and the mobile foot fade (`rgba(11,11,11,0→1)`). The photograph's left field and frame edges are burned to this value in the asset itself, so ground and print are indistinguishable at the seams.
- **Silver Grey / Mute** (`{colors.mute}`): every secondary voice: nav links at rest, the descriptor line, the commit hash and version. Contrast on ground is about 6:1, which clears WCAG AA at 12px mono.
- **Hairline** (`{colors.line}`): 1px rules only: the hash underline, the leader line to the stage edge, the scrollbar thumb. Never a fill.
- **Pure White (hover)** (`{colors.white-hover}`): appears only as the hover target for text links (nav, hash) and the hash's hover underline. It is a state, not a surface colour.

### Named Rules
**The No-Accent Rule.** There is no fifth colour. Emphasis is produced by scale (display vs mono), by value (ink vs mute), or by state (mute → pure white), never by hue.

**The Burned-In Rule.** Darkness belongs to the photograph. Grading, vignette and the desktop left-field fade live in the raster; CSS carries no gradient on desktop. The one CSS fade (the mobile foot veil, `linear-gradient(180deg, transparent 55%, ground 100%)`) exists only where the portrait crop must land on solid ground.

## Typography

**Display Font:** Anton 400 (with Impact, sans-serif)
**Body Font:** Archivo 400/500 (with Helvetica Neue, Arial, sans-serif)
**Label/Mono Font:** JetBrains Mono 400/500 (with ui-monospace, monospace)

**Character:** A condensed, heavy poster face carries the one word each stage owns; a light, widely tracked monospace carries the annotations around it, the way a contact sheet is labelled in pencil. Archivo is the reserved reading voice for future stages; the Hero sets nothing in it.

### Hierarchy
- **Display** (Anton 400, `clamp(96px, 13vw, 200px)`, line-height 0.9, tracking 0.005em, `text-wrap: balance`): the stage word. In the Hero it is the name, always two lines (`David` / `Zapata`), each word a block. On mobile it steps to `clamp(84px, 24vw, 110px)`.
- **Descriptor** (JetBrains Mono 400, 13px, line-height 1.7, tracking 0.08em, max 46ch, `text-wrap: pretty`, mute): the one sentence above the display word. Sentence case.
- **Label** (JetBrains Mono, 12px, tracking 0.14em, uppercase): navigation and the `DZ` mark (mark at weight 500, ink). Uppercase is reserved for this role.
- **Data** (JetBrains Mono 400, 12px, tracking 0.08em, tabular numerals, mute): the commit hash `0x<sha>` and version `v0.1`. Not uppercased.
- **Body** (Archivo 400/500): loaded on `<body>` as the default font; no size, leading or measure has been set on any surface yet. Do not invent a body ramp until a stage sets one.

### Named Rules
**The One Word Rule.** Each stage owns exactly one display-scale word; everything else on the stage is 12–13px monospace. A stage with two display-scale elements has broken the world.

**The Uppercase-Is-Nav Rule.** Uppercase with 0.14em tracking is the navigation voice only. The descriptor and data lines stay in sentence case at 0.08em.

## Layout

The spatial model is a single full-height stage (`100svh`, min 560px, `overflow: hidden`, `isolation: isolate`) with elements pinned to its edges rather than flowed. There is no container width or column grid; the only horizontal measure is the gutter, `clamp(20px, 4vw, 48px)`, used as left inset for the copy block, the nav padding, and the length of the hash's leader line.

Desktop (above 720px): the photograph fills the stage with `object-fit: cover`, `object-position: right center`, the face in the right third and the left ~55% burned to ground. Nav sits at the top in a three-column grid (`1fr auto 1fr`): mark left, five bracketed links centred with a 22px gap, right column empty. The copy block (descriptor over name, 22px gap) is absolutely anchored left at the gutter and 64px above the bottom edge; in the 1440 capture the descriptor lands at about 47% of the viewport height. The hash is anchored at the same 64px baseline on the right edge, followed by a 12px gap and a horizontal 1px leader of gutter length running to the stage edge. A 44×72px scroll cue sits bottom centre.

Mobile (720px and below, verified at 390px): the photograph becomes a 66svh band across the top (`object-position: 78% 0`) with a CSS veil fading its foot into ground from 55% to 100%. The copy block moves to 76px from the bottom with a 16px gap and is bounded by the gutter on both sides so the name wraps inside the viewport. The hash moves to bottom-left at 28px; its leader line and the scroll cue disappear. Nav becomes `DZ` left and `[ Talk ]` right (nav padding-top 20px); the five stage links are hidden.

Spacing rhythm as used: 12 (hairline gap) · 16 (mobile stack) · 20 (mobile chrome) · 22 (stack, nav gap) · 28 (chrome, mobile hash baseline) · 64 (desktop baseline) · 76 (mobile baseline). Vertical chrome is 28px on desktop; the gutter governs everything horizontal.

Product rule inherited by later stages: each stage must work as a single viewport moment; detail expands within the pinned stage or in an overlay rather than breaking the journey.

## Elevation & Depth

This system uses no shadows and no tonal layering. Depth is photographic: the graded raster carries its own vignette and burned edges, and a single generated grain canvas (`opacity: 0.14`, `mix-blend-mode: overlay`, z-index 2, above the photo and veil, below all text) unifies photo and ground into one print surface. Text sits on z-index 3 directly on the print with no scrim, panel, or backdrop; legibility comes from the raster being burned to ground where text lands.

### Named Rules
**The Flat Print Rule.** No `box-shadow`, no `backdrop-filter`, no glass, no elevation states. If an element needs separation, it gets a 1px hairline (`{colors.line}`) or more empty ground, never a shadow.

**The Grain Is Material Rule.** The grain is one static field over the whole stage, regenerated only on resize. It is never animated, never tiled per element, and never applied to text alone.

## Shapes

Everything is square. No border radius exists anywhere (`rounded.none` = 0px); edges are the viewport, the gutter, and the photograph's burned frame. The only strokes are 1px hairlines: the hash underline (`border-bottom`), the leader line (`::after`, 1px high, gutter wide), the scroll cue (1px wide, 56px tall, transparent→ink gradient), and the focus outline (1px ink, offset 4px). Controls have no boxes at all; brackets typed as text (`[ Build ]`) are the affordance.

## Components

The Hero stage has no buttons, cards, inputs, or chips. Its vocabulary is text links, one signature display block, and one leader line.

### Navigation
- **Style:** absolute top bar, three-column grid, 28px vertical padding by the gutter horizontally; no background, no border.
- **Typography:** Label (JetBrains Mono 12px, 0.14em, uppercase). The `DZ` mark is ink at weight 500; stage links are mute.
- **Links:** typed brackets, `[ Build ]` `[ Ship ]` `[ Prove ]` `[ Live ]` `[ Talk ]`, 22px apart, no underline.
- **Hover:** text steps from mute to pure white over 200ms (`--ease-out`); nothing else changes. Transition removed under reduced motion.
- **Focus:** 1px ink outline, 4px offset (global).
- **Mobile:** stage links hidden; `[ Talk ]` appears in the right column as the single working action (chosen over a `[ MENU ]` with nothing behind it).

### Text Links (Data)
- **Style:** inherit colour (mute), no underline; the commit hash carries a 1px hairline `border-bottom` in `{colors.line}` when it links.
- **Hover:** text and hairline both step to pure white over 200ms.
- **Numerals:** tabular.

### Display Name (signature)
- The stage word set in Display, two lines, each word a block, ink, bottom-anchored at 64px above the stage edge on desktop. Preceded by the Descriptor at a 22px gap. The pair "settles" up 24px on load; that is the only motion the block ever has.

### Commit Hash with Leader (signature)
- `0x<sha>` and `v0.1` in Data, mute, 12px gap, anchored bottom-right at the same 64px baseline as the name. A 1px hairline of gutter length runs horizontally from the hash to the stage edge, tying the annotation to the frame. On mobile the leader is dropped and the hash sits bottom-left.

### Scroll Cue
- A 44×72px hit area at bottom centre containing a 1px, 56px line fading from transparent to ink. Links to the next stage. Hidden on mobile.

### Grain (signature material)
- A `<canvas>` filling the stage, white-noise greyscale, `opacity: 0.14`, `mix-blend-mode: overlay`, `pointer-events: none`, `aria-hidden`. Regenerated on resize so it is seamless at any width.

## Do's and Don'ts

### Do:
- **Do** keep every stage to one display-scale word in Anton and 12–13px JetBrains Mono for everything else.
- **Do** anchor elements to edges and the gutter (`clamp(20px, 4vw, 48px)`); leave the rest of the stage as ground.
- **Do** use `{colors.mute}` for every secondary voice and `{colors.line}` for every 1px rule; use pure white only as a hover state.
- **Do** put darkness into the raster (burn edges to `#0b0b0b` in the asset) and keep the grain canvas over the whole stage at opacity 0.14 with `overlay` blending.
- **Do** ship the resting state complete without JavaScript, and disable the develop/settle animation under `prefers-reduced-motion`.
- **Do** type controls as bracketed text (`[ Word ]`) with a 200ms colour step on hover and the global 1px ink focus outline.

### Don't:
- **Don't** introduce any hue: no accent colour, no tinted greys, no coloured links or focus rings.
- **Don't** use `box-shadow`, `backdrop-filter`, glass, or CSS gradients on desktop; the only permitted gradient is the mobile foot veil and the 1px scroll cue.
- **Don't** round any corner or draw any box around a control.
- **Don't** cover the finger-on-lips gesture with text at any breakpoint.
- **Don't** uppercase anything except navigation labels, and never track the descriptor or hash beyond 0.08em.
- **Don't** animate anything after load except the 200ms hover colour step; the grain never moves.
