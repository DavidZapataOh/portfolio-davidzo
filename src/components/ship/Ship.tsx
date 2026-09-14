"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { roles, span } from "@/content/experience";
import Grain from "@/components/hero/Grain";
import styles from "./Ship.module.css";

gsap.registerPlugin(ScrollTrigger, CustomEase);

// The system's one easing (--ease-out) as a GSAP ease.
const EASE_OUT = CustomEase.create("davidzo-out", "0.16,1,0.3,1");

const YEARS = Array.from({ length: span.to - span.from + 1 }, (_, i) => span.from + i);

// Chronological order for the strip; frames alternate above / below the axis.
const frames = [...roles]
  .sort((a, b) => Number(a.start) - Number(b.start) || a.slug.localeCompare(b.slug))
  .map((role, i) => ({ ...role, side: i % 2 === 0 ? "above" : "below" }));

function dates(start: string, end: string) {
  return `${start} – ${end}`;
}

export default function Ship() {
  const stage = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const axis = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 721px) and (prefers-reduced-motion: no-preference)", () => {
      const stageEl = stage.current;
      const trackEl = track.current;
      if (!stageEl || !trackEl) return;

      const gutter = () => parseFloat(getComputedStyle(stageEl).getPropertyValue("--gutter")) || 48;
      const distance = () => Math.max(0, trackEl.scrollWidth - (window.innerWidth - gutter() * 2));

      const scrub = gsap.to(trackEl, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: stageEl,
          start: "top top",
          end: () => `+=${distance() * 1.2}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const draw = axis.current
        ? gsap.from(axis.current, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.2,
            ease: EASE_OUT,
            scrollTrigger: { trigger: stageEl, start: "top 70%", once: true },
          })
        : null;

      return () => {
        scrub.scrollTrigger?.kill();
        scrub.kill();
        draw?.scrollTrigger?.kill();
        draw?.kill();
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="ship" ref={stage} className={styles.stage} aria-labelledby="ship-word">
      <Grain className={styles.grain} />
      <h2 id="ship-word" className={styles.word}>
        Ship.
      </h2>

      <div className={styles.strip}>
        <div ref={track} className={styles.track}>
          <div ref={axis} className={styles.axis} aria-hidden="true" />
          {YEARS.map((year, i) => (
            <div key={year} className={styles.year} style={{ "--i": i } as React.CSSProperties} aria-hidden="true">
              <span className={styles.tick} />
              <span className={styles.yearLabel}>{year}</span>
            </div>
          ))}
          <ol className={styles.frames} aria-label="Roles, 2019 to today">
            {frames.map((role) => (
              <li
                key={role.slug}
                className={`${styles.frame} ${role.side === "above" ? styles.above : styles.below}`}
                style={{ "--i": Number(role.start) - span.from } as React.CSSProperties}
              >
                <span className={styles.leader} aria-hidden="true" />
                <span className={styles.title}>{role.title}</span>
                <span className={styles.org}>{role.org}</span>
                <span className={styles.dates}>{dates(role.start, role.end)}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
