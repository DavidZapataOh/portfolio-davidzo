"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { passions, type Passion } from "@/content/passions";
import Grain from "@/components/hero/Grain";
import styles from "./Live.module.css";

gsap.registerPlugin(ScrollTrigger, CustomEase);
const EASE_OUT = CustomEase.create("davidzo-out-live", "0.16,1,0.3,1");

export default function Live({ available }: { available: Passion["id"][] }) {
  const stage = useRef<HTMLElement>(null);
  const [lifted, setLifted] = useState<string | null>(null);
  const [coarse, setCoarse] = useState(false);
  const prints = passions.filter((p) => available.includes(p.id));

  useEffect(() => {
    setCoarse(window.matchMedia("(hover: none)").matches);
  }, []);

  // Desktop with room: the stage pins and the scroll lays the prints on the table
  // one after another (each drops in, turns to its resting angle, and brightens).
  // Otherwise the same moment plays once as the stage enters. Nothing under reduced motion.
  useEffect(() => {
    if (prints.length === 0) return;
    const mm = gsap.matchMedia();
    // Each print is held a little above the table, turned, with its photograph
    // still undeveloped; it is set down as the image develops. Never translucent.
    const layDown = (tl: gsap.core.Timeline, items: HTMLElement[], step: number, hold: number) => {
      items.forEach((item, i) => {
        const rot = Number(item.dataset.rot ?? 0);
        const photo = item.querySelector<HTMLElement>("[data-photo]");
        tl.fromTo(
          item,
          { y: -56, rotation: rot + 9, scale: 1.06 },
          { y: 0, rotation: rot, scale: 1, duration: 1 },
          i * step,
        );
        if (photo) {
          tl.fromTo(
            photo,
            { filter: "brightness(0.05) contrast(1.6)" },
            { filter: "brightness(1) contrast(1)", duration: 1 },
            i * step + 0.1,
          );
        }
      });
      tl.to({}, { duration: hold });
    };

    mm.add("(min-width: 721px) and (min-height: 741px) and (prefers-reduced-motion: no-preference)", () => {
      const stageEl = stage.current;
      if (!stageEl) return;
      const items = Array.from(stageEl.querySelectorAll<HTMLElement>("[data-print]"));
      const tl = gsap.timeline({
        defaults: { ease: EASE_OUT },
        scrollTrigger: {
          trigger: stageEl,
          start: "top top",
          end: () => `+=${window.innerHeight * (0.55 * items.length + 0.4)}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      layDown(tl, items, 0.9, 0.6);
      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    mm.add("((max-width: 720px) or (max-height: 740px)) and (prefers-reduced-motion: no-preference)", () => {
      const stageEl = stage.current;
      if (!stageEl) return;
      const items = Array.from(stageEl.querySelectorAll<HTMLElement>("[data-print]"));
      const tl = gsap.timeline({
        defaults: { ease: EASE_OUT },
        scrollTrigger: { trigger: stageEl, start: "top 75%", once: true },
      });
      layDown(tl, items, 0.14, 0);
      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, [prints.length]);

  return (
    <section id="live" ref={stage} className={styles.stage} aria-labelledby="live-word">
      <Grain className={styles.grain} />
      <h2 id="live-word" className={styles.word}>
        Live.
      </h2>

      {prints.length > 0 && (
        <ul className={styles.table} aria-label="What I live for">
          {prints.map((p, i) => (
            <li
              key={p.id}
              data-print=""
              data-rot={p.rotate}
              className={`${styles.print} ${lifted === p.id ? styles.lifted : ""}`}
              style={
                {
                  "--rot": `${p.rotate}deg`,
                  "--x": `${p.x}%`,
                  "--y": `${p.y}%`,
                  "--yf": p.y / 100,
                  "--z": i + 1,
                  "--o": p.order,
                  "--aspect": p.aspect,
                  "--w": p.aspect === "2/3" ? "22%" : "34%",
                } as React.CSSProperties
              }
            >
              <button
                type="button"
                className={styles.paper}
                onPointerEnter={(e) => e.pointerType === "mouse" && setLifted(p.id)}
                onPointerLeave={(e) => e.pointerType === "mouse" && setLifted((cur) => (cur === p.id ? null : cur))}
                onFocus={() => setLifted(p.id)}
                onBlur={() => setLifted((cur) => (cur === p.id ? null : cur))}
                onClick={() => {
                  if (coarse) setLifted((cur) => (cur === p.id ? null : p.id)); // touch: tap lifts, tap again drops
                }}
                aria-pressed={lifted === p.id}
              >
                <span className={styles.photo} data-photo="">
                  <Image src={`/live/${p.id}.jpg`} alt={p.alt} fill sizes="(max-width: 720px) 100vw, 34vw" quality={84} />
                </span>
                <span className={styles.caption}>
                  <span className={styles.captionWord}>{p.word}</span>
                  {p.line && <span className={styles.captionLine}>{p.line}</span>}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
