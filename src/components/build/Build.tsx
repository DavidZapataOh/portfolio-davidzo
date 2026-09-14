"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/content/projects";
import { lenisRef } from "@/components/scroll/lenis";
import Grain from "@/components/hero/Grain";
import styles from "./Build.module.css";

gsap.registerPlugin(ScrollTrigger);

const STEPS = projects.length;

export default function Build() {
  const stage = useRef<HTMLElement>(null);
  const trigger = useRef<ScrollTrigger | null>(null);
  const [active, setActive] = useState(0);

  // Desktop with motion allowed: pin the spread and scrub through the four prints.
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 721px) and (prefers-reduced-motion: no-preference)", () => {
      if (!stage.current) return;
      const st = ScrollTrigger.create({
        trigger: stage.current,
        start: "top top",
        end: () => `+=${window.innerHeight * STEPS}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          setActive(Math.min(STEPS - 1, Math.floor(self.progress * STEPS + 1e-6)));
        },
      });
      trigger.current = st;
      return () => {
        st.kill();
        trigger.current = null;
      };
    });
    return () => mm.revert();
  }, []);

  const go = useCallback((index: number) => {
    const i = Math.max(0, Math.min(STEPS - 1, index));
    const st = trigger.current;
    if (!st) {
      setActive(i);
      return;
    }
    const y = st.start + ((i + 0.5) / STEPS) * (st.end - st.start);
    if (lenisRef.current) lenisRef.current.scrollTo(y, { duration: 0.9 });
    else window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      go(active + 1);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      go(active - 1);
    }
  };

  const current = projects[active];

  // Horizontal swipe on the print (mobile): previous / next project.
  const touchX = useRef<number | null>(null);
  const onTouchStart = (event: React.TouchEvent) => {
    touchX.current = event.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (event: React.TouchEvent) => {
    const start = touchX.current;
    touchX.current = null;
    if (start === null) return;
    const dx = (event.changedTouches[0]?.clientX ?? start) - start;
    if (Math.abs(dx) < 40) return;
    go(dx < 0 ? active + 1 : active - 1);
  };

  return (
    <section id="build" ref={stage} className={styles.stage} aria-labelledby="build-word">
      <Grain className={styles.grain} />
      <div className={styles.left}>
        <h2 id="build-word" className={styles.word}>
          Build.
        </h2>
        <ul className={styles.index} onKeyDown={onKeyDown} aria-label="Projects">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <button
                type="button"
                className={styles.row}
                aria-current={i === active ? "true" : undefined}
                onClick={() => go(i)}
              >
                <span className={styles.rowName}>{project.name}</span>
                <span className={styles.rowMeta}>{project.scope}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.right}>
        <figure className={styles.print} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {projects.map((project, i) => (
            <Image
              key={project.slug}
              src={project.print}
              alt={`${project.name} landing page, in black and white.`}
              fill
              sizes="(max-width: 720px) 100vw, 50vw"
              priority={i === 0}
              style={{ objectPosition: project.focus }}
              className={`${styles.printImg} ${i === active ? styles.on : ""}`}
            />
          ))}
        </figure>
        <div className={styles.caption}>
          <p className={styles.pitch}>{current.pitch}</p>
          <a className={styles.visit} href={current.url} target="_blank" rel="noopener">
            [ Visit {current.host} ]
          </a>
        </div>
      </div>
    </section>
  );
}
