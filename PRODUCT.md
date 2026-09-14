# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary, in this order:

1. **Founders and companies hiring blockchain developers** for contracts, freelance work or senior technical roles. They arrive from a referral, a hackathon result or a product page, spend under two minutes, and need to decide whether to write to David.
2. **Recruiters for full-time roles.** They need roles, dates and companies readable at a glance, then proof that the titles are real.

Secondary, not designed for but not excluded: hackathon organizers and communities looking for a speaker, judge or mentor; users of David's products curious about who built them.

Success is a message. The one action that matters is contact (email first, then GitHub, X, LinkedIn, Instagram).

## Product Purpose

Personal portfolio of David Zapata, blockchain developer based in Cali, Colombia, focused on zero-knowledge proofs and privacy. The site exists to prove, not to claim: every statement about skill should be backed by something a visitor can open and verify. The site itself is part of the proof; a slow or sloppy site would contradict the claim of technical quality.

## Positioning

Every one of David's projects is a system that proves something without revealing the rest: private raffles, verifiable credentials, confidential compliance, confidential payments. The portfolio's thesis is that same idea applied to a person: "prove without revealing". A generic full-stack portfolio cannot truthfully make that claim; a ZK developer with four shipped privacy products can.

Secondary differentiator: David teaches (university chair, workshops, community building), not only builds.

## Operating Context

- Visitors come from LinkedIn, X, GitHub profiles, hackathon result pages and the product sites (Raffero, Glemo, Strickle, Sincerin).
- The site is read on laptops by hirers and on phones from social links. Both are first-class.
- Language: **English only**. Spanish was considered and rejected for now.
- Public name: **David Zapata**. Domain: **davidzo.com** (purchased 2026-09-13, not yet pointed at a deployment). Project folder and alias are `davidzo`.
- Portfolio structure agreed with the user: a staged scroll journey of six stages, each anchored by one word: Hero (name) → Build (projects) → Ship (experience) → Prove (hackathons won, classes taught, verifiable certificates) → Live (passions) → Talk (contact).

## Capabilities and Constraints

**Content, confirmed:**

- Projects (Build), in this order, all live: Raffero (raffero.com, private raffles with ZK proofs on Avalanche) · Glemo (glemo.io, issue and verify digital credentials, REST API) · Strickle (strickle.vercel.app, ZK compliance for EU battery passport, Regulation 2023/1542) · Sincerin (sincerin.com, confidential payments rollup on Stellar, early stage; landing is a single line).
- Experience (Ship), ordered by weight: CTO, Buckspay, 2025–2026 · Technical Contributor, Avalanche Team1, 2024–present · Blockchain Developer, freelance, 2022–present · Web3 Community Builder, UltravioletaDAO, 2023–2025 · Profesor de cátedra, Pontificia Universidad Javeriana Cali, 2025–2026 · Full Stack Developer, freelance, 2019–2022.
- Prove: hackathons won, classes and talks given, certificates. Rule agreed: the teaching role lives in Ship; the courses themselves are objects in Prove. Same rule for founder roles: role in Ship, product in Build.
- Live: football, travel, mathematics, nature. Mathematics is the honest bridge to ZK.
- Talk: email as primary action; GitHub, X, LinkedIn, Instagram. A PGP fingerprint or ENS is welcome and coherent with the privacy positioning.

**Rules future work must keep:**

- No dead links in Build. Retired projects are shown as archived with repo, video or screenshots, or removed.
- Certificates are curated, not dumped; each opens a verifiable link. Hackathon wins come first, then teaching, then diplomas.
- Each stage must work as a single viewport moment; longer detail goes to overlays or expands within the pinned stage rather than breaking the journey.
- No third-party trackers or analytics that contradict the privacy positioning.
- Performance is part of the product: target Lighthouse 100 across categories on the home route.

**Stack:** Next.js 16 (App Router, `src/`), React 19, TypeScript, Tailwind 4, ESLint. Scroll journey planned with GSAP ScrollTrigger (pinned sections) and Lenis; this is a build decision, not a product one.

**Undecided:** hosting/deploy target for davidzo.com; exact list of hackathons, courses and certificates to show; which passions get photographs; pointing strickle.xyz at the Strickle deployment.

## Brand Commitments

- Name: David Zapata. Alias davidzo for repo and domain (davidzo.com).
- Hero photograph exists and is approved: black and white, dark background, direct gaze, finger on lips. Path: `/home/david/portfolio/hero.jpg` (2752×1536), to be moved into `public/`. The gesture is the visual thesis of the site and must not be covered by text.
- Binding visual constraint volunteered by the user: black and white only, no color accent; references christoph-nagel.dev and benjaminrighetti.netlify.app; full reference board at https://claude.ai/code/artifact/1b19e8a0-5d3a-43c3-aa35-86b82713eec0 and `/home/david/portfolio/REFERENCES.md`. Recorded here as a constraint; the visual system itself is defined later in DESIGN.md.
- Voice: direct, technical, without hype. Says what was built and lets the link prove it.

## Evidence on Hand

Confirmed by the user as existing today, to be gathered into the repo:

- Public result pages for hackathons won (ETHGlobal, Devfolio, DoraHacks or similar).
- Certificates with verifiable URLs, including ones issuable through Glemo.
- Teaching material: course programme at Javeriana Cali, recordings, slides or workshop lists.
- Public repositories or demos for the four projects beyond their landings.
- The hero photograph.

Not on hand and not to be fabricated: testimonials, metrics (users, TVL, revenue) for the products, press. If a number is shown it must come from David.

## Product Principles

1. **Prove, don't claim.** Every credential, project and role points to something the visitor can open.
2. **The site is exhibit A.** Speed, precision and accessibility are content, not chores.
3. **One idea per screen.** Each stage carries one word and one job; detail is a click away, never in the way.
4. **Hirers first.** Contact is always reachable; roles and dates are never ambiguous.
5. **Privacy is the brand.** No trackers, no dark patterns, a public key instead of a newsletter.

## Accessibility & Inclusion

Standard target: WCAG 2.2 AA. The scroll journey must remain usable with keyboard, screen readers and `prefers-reduced-motion` (stages readable without animation). Black-on-white and white-on-black contrast is inherent; grey text must still meet AA.
