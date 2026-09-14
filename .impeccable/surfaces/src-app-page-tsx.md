---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

## Scope

Home route `/`, visitor mode **Experience**. First surface: the Hero stage of a six-stage scroll journey (Hero → Build → Ship → Prove → Live → Talk). This brief covers the Hero; later stages extend it and inherit its world.

## Audience, job, action

Founders and companies hiring blockchain developers, then full-time recruiters. Job: decide in under two minutes whether David Zapata is worth writing to. Action: contact (email first). Proof: the photograph, the name, and a real commit hash; later stages carry the verifiable content.

## Constraints pinned by the user

Black and white only, no color accent. Dark ground. References christoph-nagel.dev and benjaminrighetti.netlify.app. Approved hero composition: "Maqueta A" (portrait bleeding from the right, giant two-line name lower left, mono descriptor line above it, hash lower right, bracketed nav). The finger-on-lips gesture is never covered by text. English only. Photo: `public/hero.jpg` (2752×1536).

## Direction contract

THESIS: One person, one word, everything else darkness and grain. The Hero is a darkroom print, not a header: the portrait is the argument and the name is the caption. It refuses the category default (centered name + role + button + project grid) and refuses decoration: no gradients, no glass, no color.

OWN-WORLD: Ground #0b0b0b, ink #efede8, one grey #8f8d86 for secondary text, hairline #262624. Display: Anton, condensed heavy, set at clamp(96px, 13vw, 200px) with line-height 0.9, always two lines for the name. Body: Archivo, weights 400/500 only. Data: JetBrains Mono for hash, labels, nav, at 12–13px with 0.08–0.14em tracking, uppercase for nav only. Silver-gelatin grain as a generated Canvas field (seamless at any width, ~10% opacity) over the whole stage. Vignette lives in the photograph, not in CSS. Controls are text in brackets: `[ BUILD ]`, hover fills the brackets' text to pure white; focus ring is a 1px #efede8 outline offset 4px. Selection is #efede8 on #0b0b0b inverted.

STORY: The visitor lands on a face asking for silence, reads the name, reads one line ("Blockchain developer · ZK · privacy. I build systems that prove without revealing."), notices a real commit hash that proves the page is built, and understands the site will continue below. They believe: this person is precise, private, and real. They do: scroll, or hit `[ TALK ]`.

FIRST VIEWPORT: 100svh stage, photo `object-fit: cover`, `object-position: right center` on desktop (face in the right third, left 55% dark). Nav top: `DZ` monogram left, five bracketed links centered, nothing right. Left column, from ~30% down: mono descriptor line (grey), below it the name `David` / `Zapata` in Anton, baseline sitting ~64px above the bottom edge. Lower right: mono `0x<short sha> · v0.1` in grey, anchored with a 1px leader line to the bottom-right corner. Bottom center: a 1px vertical scroll cue. Mobile (390px): the photograph is a 66svh band across the top, `object-position: 78% 0`, fading into the ground at its foot; descriptor, name (84–110px, two lines) and commit hash sit on solid ground below it so the gesture is never covered. Nav collapses to `DZ` left and `[ Talk ]` right (a working link, chosen over a `[ MENU ]` with nothing behind it yet).

FORM: The Darkroom Print, candidate 1 of my grounded list (top-ranked; the pick card), chosen by the user over the roll's assigned candidate 4 (Redacted Dossier). Seed key 599cc984. Signature interaction and motion grammar: on load the print *develops* once, 1.6s, exponential ease-out: the photograph rises from near-black (brightness 0.05, contrast 1.6) to its true tones while the name settles up 24px into place; nothing else animates on load. Hover on nav is a 200ms text-color step. `prefers-reduced-motion` disables the development and shows the resting state immediately; the resting state is fully visible without JavaScript.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Stage 2 · Build (surface concept locked 2026-09-13, seed 8ffa6507)

Concept chosen by the user on the decision page: **Pliego a dos páginas** (two-page spread; the roll's lead card). Inherits the Hero's world unchanged.

FIRST VIEWPORT (Build): a pinned 100svh stage. Left half: `Build.` in Anton at the display size, then an index of four rows in JetBrains Mono (name · chain · year when known); the active row in ink, the others in mute; rows are real links and buttons. Right half: the active project's black-and-white print (`public/prints/<name>.jpg`, a graded capture of the product's own landing) bleeding to the right edge, with a one-line pitch in mono and the link `[ Visit ]` below it. Order: Raffero, Glemo, Strickle, Sincerin.

SIGNATURE INTERACTION: scrolling inside the pinned stage advances the active project through four steps (scroll-scrubbed with GSAP ScrollTrigger, smoothed by Lenis); every change develops the new print from near-black exactly like the Hero's load moment (1.6s, exponential ease-out) while the index row switches colour. Clicking an index row jumps to that step. Keyboard: rows are focusable; arrow keys move the step. `prefers-reduced-motion`: no pin, the four projects stack as ordinary sections with the same layout and no develop animation.

MOBILE (≤720px): not pinned. Index above as a horizontal row of four bracketed names, print below at 4:3 with the pitch and link under it; swipe on the print or tap a name to change.

REDUCED MOTION (desktop), deviation recorded after the finish review: instead of stacking four sections, the stage stays a single spread whose index buttons switch the print with no develop animation. Chosen because four repeated spreads under reduced motion is more scrolling for the same content; every project remains reachable by keyboard and pointer.

TRANSITION FROM HERO: as the Hero unpins, its photograph darkens toward the ground and eases up 8% while `Build.` rises; nothing else animates.

CONTENT RULES: facts only from the products' own pages or from David. Fields not yet confirmed (role, year, ZK stack, repo, metric) render nothing rather than placeholders.

## Stage 3 · Ship (surface concept locked 2026-09-14, seed 56a83038)

Concept chosen by the user on the decision page: **Tira de contactos** (contact strip; the roll's lead card). Inherits the world unchanged.

FIRST VIEWPORT (Ship): a pinned 100svh stage with the grain. `Ship.` in Anton at the display size, top-left. At ~56% height, a hairline axis from 2019 to 2026 with a 1px tick and a mono year label per year (year spacing clamp(220px, 22vw, 320px)). The six roles are frames anchored at their start year, alternating above and below the axis (chronological: Full Stack 2019 above, Blockchain 2022 below, UltravioletaDAO (Developer Contributor) 2023 above, Avalanche Team1 2024 below, Buckspay 2025 above, Javeriana 2025–present below), each a hairline-bordered frame on the ground: title in mono 13px ink, organisation and dates in mono 12px mute (`2024 – present` for active roles), a 1px leader joining the frame to its tick. The strip is wider than the viewport; scrolling inside the pinned stage translates it right-to-left until 2026 reaches the right gutter.

SIGNATURE INTERACTION: the scroll-scrubbed strip itself; on first entry the axis draws once from left to right (1.2s, exponential ease-out). Nothing else animates.

MOBILE (≤720px) AND REDUCED MOTION: no pin, no translation. The axis becomes a vertical hairline at the left; the frames stack in chronological order beside it, each carrying its own dates; ticks and year labels are hidden because every frame states its years.

CONTENT RULES: the six roles and dates confirmed by David on 2026-09-13; no descriptions until he provides them (the `note` field renders nothing while empty).

## Known deviations from the contract (recorded after the finish review)

- The descriptor sits at ~47% of the viewport height, not ~30%: the block is bottom-anchored under a two-line name at 13vw, which pushes it down. Kept.
- The hash's leader line runs horizontally to the right edge at the hash's own height, not diagonally to the corner. Kept; it is a hairline (#262624) by design.
- The photograph shipped in `public/hero.jpg` is a graded copy of the user's original (`/home/david/portfolio/hero.jpg`): the left field and the frame edges are burned to #0b0b0b in the asset, so the stage has no CSS gradient on desktop. The mobile foot fade remains CSS.
- The commit hash and its leader line were removed on 2026-09-13 at the user's request ("innecesario"). The FIRST VIEWPORT block's lower-right annotation no longer exists; the proof-of-build idea may return in a later stage.
- "Cali, Colombia" was removed from the descriptor at the user's request; the line now reads "Blockchain developer · ZK · privacy. I build systems that prove without revealing."

## Unresolved

Deploy target for davidzo.com (domain owned since 2026-09-13); exact wording of the descriptor line (English, one sentence);
