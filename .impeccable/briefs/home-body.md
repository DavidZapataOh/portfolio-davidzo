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

FIRST VIEWPORT (Ship): a pinned 100svh stage with the grain. `Ship.` in Anton at the display size, top-left. At ~56% height, a hairline axis from 2019 to 2026 with a 1px tick and a mono year label per year (year spacing clamp(220px, 22vw, 320px)). The six roles are frames anchored at their start year, alternating above and below the axis (chronological: Full Stack 2019 above, Blockchain 2022 below, UltravioletaDAO (Developer Contributor) 2023 above, Avalanche Team1 2024 below, Buckspay 2025 above, Javeriana 2025–present below), each drawn object standing on the shelf, organisation and dates in mono 12px mute (`2024 – present` for active roles), a 1px leader joining the frame to its tick. The strip is wider than the viewport; scrolling inside the pinned stage translates it right-to-left until 2026 reaches the right gutter.

SIGNATURE INTERACTION: the scroll-scrubbed strip itself; on first entry the axis draws once from left to right (1.2s, exponential ease-out). Nothing else animates.

MOBILE (≤720px) AND REDUCED MOTION: no pin, no translation. The axis becomes a vertical hairline at the left; the frames stack in chronological order beside it, each carrying its own dates; ticks and year labels are hidden because every frame states its years.

CONTENT RULES: the six roles and dates confirmed by David on 2026-09-13; no descriptions until he provides them (the `note` field renders nothing while empty).

## Stage 6 · Talk (surface concept locked 2026-09-14, seed 654f16a1)

Concept chosen by the user on the decision page: **Marquesina del correo** (email marquee; the roll's lead card). Inherits the world unchanged. Built before Prove and Live because its content is the smallest; it is the last stage in the DOM order regardless.

FIRST VIEWPORT (Talk): a pinned 100svh stage with the grain. `Talk.` in Anton at the display size, top-left. At ~50% height, a band between two hairlines carrying the email address in Anton at clamp(64px, 8.5vw, 120px), repeated so the band is wider than the viewport; the band is one `mailto:` link; hover turns its text pure white. Scrolling inside the pinned stage translates the band right-to-left by its overflow (the same distance-scrub as Ship; short pin). Below the band, at the left gutter, the channels as bracket controls in mono: `[ GitHub ]` `[ X ]` `[ LinkedIn ]` `[ Instagram ]` (only those with a confirmed URL render). Bottom-left, the sign-off line in mono 12px mute: `© 2026 David Zapata · davidzo.com` (David removed the "no trackers" claim on 2026-09-14: "cringe"). Optional, only if David supplies it: a PGP fingerprint or ENS name in the Data voice next to the sign-off.

SIGNATURE INTERACTION: the scroll-scrubbed band. Nothing else animates.

MOBILE (≤720px) AND REDUCED MOTION: no pin, no translation. The email sits as static text in Anton at clamp(40px, 11vw, 64px) wrapping at the `@`, still one mailto link; the channels stack; the sign-off closes the page.

CONTENT RULES: email, channel URLs, PGP/ENS only as confirmed by David; empty fields render nothing.

DEVIATIONS (recorded after the finish review): the band's keyboard focus ring is a 1px ink outline inset by 1px (`outline-offset: -1px`) instead of the world's 4px offset, because the band is full-bleed and an outside offset would be clipped by the stage; the mobile channel list is Build's 2×2 bracketed grid rather than a single stack.

## Stage 4 · Prove (surface concept locked 2026-09-14, seed a034522f, re-roll 1 steered by the user)

User steer (verbatim intent): a vintage shelf/vitrine where hackathons are trophies and medals, bootcamps taught are cassettes, certificates are diplomas; hovering an object shows a box saying what it is; clicking opens the proof. Chosen card: **Estantería vintage** (three free shelves with drawn brackets, engraved-line objects, a hanging tag as the hover label).

FIRST VIEWPORT (Prove, revised 2026-09-14): on desktop ≥721px wide and ≥741px high with motion allowed, a single pinned 100svh stage with the grain: `Prove.` in Anton at the display size 104px from the top (the same seat as every stage word; David: "todos los títulos deben estar en la misma posición"), then three shelves sharing the viewport with a gap of clamp(48px, 9svh, 110px), objects at full size; under 820px of height the word drops to clamp(96px, 11vw, 150px) and objects to 85% zoom (revised after the user found the first compaction too tight). Otherwise (narrow or short viewports) a long unpinned stage. Shelves top to bottom: Won (trophies for overall hackathon wins, medals for track wins), Shared (cassette for the video bootcamp, book for the GitBook guide, floppy disks for repositories), Certified (diplomas). Each shelf is a double hairline (2 lines, 3px apart) with two 40px drawn brackets beneath, 48px in from each end, spanning gutter to gutter, with a mono 12px uppercase label under its right end. Objects are inline SVG in 1px ink strokes with fine mute hatching, one stroke language across the six families; every object's foot touches the board's top hairline (viewBoxes trimmed to the foot, no bottom padding on the link). No caption under the objects: the object is the link (named for assistive tech) and the hanging tag names it.

SIGNATURE INTERACTION: hover or focus on an object turns its strokes pure white and lowers a hanging tag from the shelf on a 1px thread: a hairline-bordered label in mono, `name`, `detail · year` and `[ Open ]` when a URL exists; the whole object is the link (new tab). Touch: first tap shows the tag, second tap follows the link. Tags never overlap: one open at a time. SIGNATURE INTERACTION (pinned): the scroll scrubs a reveal timeline, one shelf per step (pin end = 0.7 x innerHeight per shelf + 0.4): the board draws from the left and the objects and captions are set down (from 14px above and 25% opacity) with a stagger; a short beat before the pin releases. Unpinned fallback (short desktop, mobile): as each shelf enters the viewport (top at 82%), its board draws from the left (1.1s) and the objects are set down onto it with a 70ms stagger from 14px above (0.9s), once, on the system ease; not under reduced motion. No other motion beyond that and the 200ms tag drop.

MOBILE (≤720px): shelves stack; each shelf becomes a horizontally scrollable row (scroll-snap, objects at 80% scale), the tag opens below the row. Reduced motion: the tag appears without the drop.

CONTENT RULES: only proofs David lists (name, org/event, year, placing, URL); no URL → no `[ Open ]`, object still shown; up to 24 objects on the shelves (19 today), the rest under a mono `[ Archive ]` list. Nothing is invented; while the list is empty the stage renders only the word and the empty shelves are not shown.

## Stage 5 · Live (surface concept locked 2026-09-14, seed dac6f698)

Concept chosen by the user on the decision page: **La mesa de copias** (prints left on the darkroom table). Inherits the world unchanged; the one licence the card grants is rotation (−6° to +5°) and a thin paper border, because these are physical prints on a table.

FIRST VIEWPORT (Live, revised 2026-09-14 at the user's request for a pin): on desktop ≥721px wide and ≥741px high with motion allowed, a single pinned 100svh stage with the grain; otherwise a single unpinned screen. `Live.` in Anton at the display size, 104px from the top, left gutter. The rest of the stage is the table: four prints of David's own photographs (football, travel, mathematics, community; nature was replaced by community on 2026-09-14 because his travel and nature photos were near-duplicates), landscape prints ~34% of the stage width at 3:2 and the portrait travel print 24% at 2:3, with a 10px paper border in ink and a taller bottom margin carrying a handwritten-style mono caption in ground colour: the passion word and its line (team, place, reason). Prints are rotated −4°, +3°, +5°, −2° (football, travel, community, mathematics; stacked in that order so every caption stays uncovered, mathematics on top; travel overlaps football's right edge and mathematics overlaps community's top) and overlap slightly, resting dimmed (brightness 0.72). Each print's width is capped by the table height left below its own top (minus 66px of paper margins and rotation reach, times its aspect), so at 900px of height the prints keep their 34% / 22% and their overlaps, and only shorter viewports shrink them; the table never leaves the pinned stage. Photographs are graded as prints (greyscale, blacks lifted to the ground token) with provenance embedded; the user supplies them.

SIGNATURE INTERACTION (pinned): the scroll scrubs the prints onto the table one after another (each held 56px above, 9° further turned and 6% larger, its photograph still undeveloped at brightness 0.05 / contrast 1.6; it is set down to its resting angle as the image develops; prints are never translucent), pin end = innerHeight × (0.55 × prints + 0.4) with a 0.6 beat; unpinned fallback plays the same lay-down once at top 75%. Hover, focus or tap lifts a print (z-index), straightens it (counter-rotation on the paper, scale 1.02) and brings it to full brightness, 300ms on the system ease; one at a time. Nothing to click. Nothing under reduced motion.

MOBILE (≤720px): the prints stack in one column (football, travel, mathematics, community) at full width, the portrait print at 72% centred, rotations reduced to ≈±2°, captions readable; tap lifts, tap again drops; a mouse click never drops a hovered print.

CONTENT RULES: only David's photographs and words; the caption lines (team, place) render only when he gives them. Until the four files exist in `public/live/`, the stage renders only the word.

## Known deviations from the contract (recorded after the finish review)

- The descriptor sits at ~47% of the viewport height, not ~30%: the block is bottom-anchored under a two-line name at 13vw, which pushes it down. Kept.
- The hash's leader line runs horizontally to the right edge at the hash's own height, not diagonally to the corner. Kept; it is a hairline (#262624) by design.
- The photograph shipped in `public/hero.jpg` is a graded copy of the user's original (`/home/david/portfolio/hero.jpg`): the left field and the frame edges are burned to #0b0b0b in the asset, so the stage has no CSS gradient on desktop. The mobile foot fade remains CSS.
- The commit hash and its leader line were removed on 2026-09-13 at the user's request ("innecesario"). The FIRST VIEWPORT block's lower-right annotation no longer exists; the proof-of-build idea may return in a later stage.
- "Cali, Colombia" was removed from the descriptor at the user's request; the line now reads "Blockchain developer · ZK · privacy. I build systems that prove without revealing."

## Unresolved

Deploy target for davidzo.com (domain owned since 2026-09-13); exact wording of the descriptor line (English, one sentence); 
