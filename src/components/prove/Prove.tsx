"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { proofs, type Proof, type ProofKind } from "@/content/proofs";
import Grain from "@/components/hero/Grain";
import { ShelfObject } from "./objects";
import styles from "./Prove.module.css";

const SHELVES: { id: string; label: string; kinds: ProofKind[] }[] = [
  { id: "won", label: "Won", kinds: ["trophy", "medal"] },
  { id: "shared", label: "Shared", kinds: ["cassette", "book", "floppy"] },
  { id: "certified", label: "Certified", kinds: ["diploma"] },
];

const MAX_ON_SHELVES = 24;

gsap.registerPlugin(ScrollTrigger, CustomEase);
const EASE_OUT = CustomEase.create("davidzo-out-prove", "0.16,1,0.3,1");

export default function Prove() {
  const [open, setOpen] = useState<string | null>(null);
  const [coarse, setCoarse] = useState(false);
  const stage = useRef<HTMLElement>(null);

  useEffect(() => {
    setCoarse(window.matchMedia("(hover: none)").matches);
  }, []);

  // A tap anywhere outside the open object closes its tag (touch only has taps).
  useEffect(() => {
    if (open === null) return;
    const close = (event: PointerEvent) => {
      const target = event.target as Element | null;
      if (target?.closest(`[data-proof="${open}"]`)) return;
      setOpen(null);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  // Desktop with room and motion allowed: pin the stage and let the scroll reveal
  // the shelves step by step (board draws, objects are set down). Otherwise the
  // same moment plays once per shelf as it enters. Nothing under reduced motion.
  useEffect(() => {
    const mm = gsap.matchMedia();
    const shelvesOf = (stageEl: HTMLElement) => Array.from(stageEl.querySelectorAll<HTMLElement>("[data-shelf]"));
    const reveal = (tl: gsap.core.Timeline, shelf: HTMLElement, at: number) => {
      const board = shelf.querySelector<HTMLElement>("[data-board]");
      const objects = shelf.querySelectorAll<HTMLElement>("[data-object]");
      const label = shelf.querySelector<HTMLElement>("[data-label]");
      if (board) tl.fromTo(board, { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 1 }, at);
      tl.fromTo(objects, { y: -14, opacity: 0.25 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 }, at + 0.2);
      if (label) tl.fromTo(label, { opacity: 0.25 }, { opacity: 1, duration: 0.6 }, at + 0.5);
    };

    mm.add("(min-width: 721px) and (min-height: 741px) and (prefers-reduced-motion: no-preference)", () => {
      const stageEl = stage.current;
      if (!stageEl) return;
      const shelves = shelvesOf(stageEl);
      if (shelves.length === 0) return;
      const tl = gsap.timeline({
        defaults: { ease: EASE_OUT },
        scrollTrigger: {
          trigger: stageEl,
          start: "top top",
          end: () => `+=${window.innerHeight * (0.7 * shelves.length + 0.4)}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      shelves.forEach((shelf, i) => reveal(tl, shelf, i * 1.4));
      tl.to({}, { duration: 0.6 }); // a beat at the end before the pin releases
      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    mm.add("((max-width: 720px) or (max-height: 740px)) and (prefers-reduced-motion: no-preference)", () => {
      const stageEl = stage.current;
      if (!stageEl) return;
      const timelines = shelvesOf(stageEl).map((shelf) => {
        const tl = gsap.timeline({
          defaults: { ease: EASE_OUT },
          scrollTrigger: { trigger: shelf, start: "top 82%", once: true },
        });
        reveal(tl, shelf, 0);
        return tl;
      });
      return () => timelines.forEach((tl) => { tl.scrollTrigger?.kill(); tl.kill(); });
    });

    return () => mm.revert();
  }, []);

  const shown = proofs.slice(0, MAX_ON_SHELVES);
  const archive = proofs.slice(MAX_ON_SHELVES);

  return (
    <section id="prove" ref={stage} className={styles.stage} aria-labelledby="prove-word">
      <Grain className={styles.grain} />
      <h2 id="prove-word" className={styles.word}>
        Prove.
      </h2>

      {shown.length > 0 && (
        <div className={styles.shelves}>
          {SHELVES.map((shelf) => {
            const items = shown.filter((p) => shelf.kinds.includes(p.kind));
            if (items.length === 0) return null;
            return (
              <div key={shelf.id} className={styles.shelf} data-shelf="">
                <span className={styles.shelfLabel} data-label="">
                  {shelf.label}
                </span>
                <ul className={styles.row} aria-label={shelf.label}>
                  {items.map((proof) => (
                    <ShelfItem
                      key={proof.id}
                      proof={proof}
                      open={open === proof.id}
                      coarse={coarse}
                      onOpen={() => setOpen(proof.id)}
                      onClose={() => setOpen((cur) => (cur === proof.id ? null : cur))}
                    />
                  ))}
                </ul>
                <div className={styles.board} data-board="" aria-hidden="true">
                  <Bracket side="left" />
                  <Bracket side="right" />
                </div>
                {/* Below 720px the tag cannot hang inside the scrolling row, so it opens under the shelf. */}
                {(() => {
                  const current = items.find((p) => p.id === open);
                  return current ? (
                    <div className={styles.rowTag} aria-hidden="true">
                      <TagBody proof={current} />
                    </div>
                  ) : null;
                })()}
              </div>
            );
          })}
        </div>
      )}

      {archive.length > 0 && (
        <details className={styles.archive}>
          <summary>[ Archive ]</summary>
          <ul>
            {archive.map((p) => (
              <li key={p.id}>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener">
                    {p.name} · {p.detail} · {p.year}
                  </a>
                ) : (
                  <span>
                    {p.name} · {p.detail} · {p.year}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}

/* A drawn bracket under the shelf: a drop and a diagonal back to the board. */
function Bracket({ side }: { side: "left" | "right" }) {
  return (
    <svg
      className={`${styles.bracket} ${side === "right" ? styles.bracketRight : ""}`}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      stroke="var(--line)"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 0v38L38 0" />
      <path d="M1 12L24 0" />
    </svg>
  );
}

/* One line: name in ink, detail · year in mute, the control when there is a link. */
function TagBody({ proof }: { proof: Proof }) {
  return (
    <span className={styles.tagBody}>
      <span className={styles.tagLine}>{proof.name}</span>
      <span className={styles.tagMeta}>
        {proof.detail} · {proof.year}
      </span>
      {proof.url && <span className={styles.verify}>[ Open ]</span>}
    </span>
  );
}

function ShelfItem({
  proof,
  open,
  coarse,
  onOpen,
  onClose,
}: {
  proof: Proof;
  open: boolean;
  coarse: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const tagId = `tag-${proof.id}`;
  const body = (
    <>
      <span className={styles.object} data-object="">
        <ShelfObject kind={proof.kind} />
      </span>
    </>
  );

  // Mouse: hover opens. Touch: the first tap opens the tag, the second follows the link.
  const enter = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse") onOpen();
  };
  const leave = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse") onClose();
  };
  const onClick = (event: React.MouseEvent) => {
    if (coarse && !open) {
      event.preventDefault();
      onOpen();
    }
  };
  // Keyboard focus opens the tag; a tap also focuses, so on touch the click decides.
  const focus = () => {
    if (!coarse) onOpen();
  };

  return (
    <li className={`${styles.item} ${open ? styles.open : ""}`} data-proof={proof.id}>
      {proof.url ? (
        <a
          href={proof.url}
          target="_blank"
          rel="noopener"
          className={styles.link}
          aria-label={proof.name}
          aria-describedby={tagId}
          onPointerEnter={enter}
          onPointerLeave={leave}
          onFocus={focus}
          onBlur={onClose}
          onClick={onClick}
        >
          {body}
        </a>
      ) : (
        <button
          type="button"
          className={styles.link}
          aria-label={proof.name}
          aria-describedby={tagId}
          onPointerEnter={enter}
          onPointerLeave={leave}
          onFocus={focus}
          onBlur={onClose}
          onClick={() => (open ? onClose() : onOpen())}
        >
          {body}
        </button>
      )}
      <span id={tagId} role="tooltip" className={styles.tag}>
        <span className={styles.thread} aria-hidden="true" />
        <TagBody proof={proof} />
      </span>
    </li>
  );
}
