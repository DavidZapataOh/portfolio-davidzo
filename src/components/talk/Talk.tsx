"use client";

import { Fragment, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contact } from "@/content/contact";
import Grain from "@/components/hero/Grain";
import styles from "./Talk.module.css";

gsap.registerPlugin(ScrollTrigger);

const REPEATS = 3;

export default function Talk() {
  const stage = useRef<HTMLElement>(null);
  const band = useRef<HTMLDivElement>(null);
  const channels = contact.channels.filter((c) => c.url);
  const year = new Date().getFullYear();
  const [local, domain] = contact.email.split("@");

  useEffect(() => {
    if (!contact.email) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 721px) and (prefers-reduced-motion: no-preference)", () => {
      const stageEl = stage.current;
      const bandEl = band.current;
      if (!stageEl || !bandEl) return;
      const distance = () => Math.max(0, bandEl.scrollWidth - window.innerWidth);
      const scrub = gsap.to(bandEl, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: stageEl,
          start: "top top",
          end: () => `+=${Math.max(distance() * 1.2, window.innerHeight * 0.6)}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      return () => {
        scrub.scrollTrigger?.kill();
        scrub.kill();
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="talk" ref={stage} className={styles.stage} aria-labelledby="talk-word">
      <Grain className={styles.grain} />
      <h2 id="talk-word" className={styles.word}>
        Talk.
      </h2>

      {contact.email && (
        <a href={`mailto:${contact.email}`} className={styles.mail} aria-label={`Email ${contact.email}`}>
          <div ref={band} className={styles.band}>
            {Array.from({ length: REPEATS }, (_, i) => (
              <Fragment key={i}>
                <span className={styles.address} aria-hidden={i > 0 ? "true" : undefined}>
                  {local}@<wbr />
                  {domain}
                </span>
                {i < REPEATS - 1 && (
                  <span className={styles.sep} aria-hidden="true">
                    —
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </a>
      )}

      <div className={styles.foot}>
        {channels.length > 0 && (
          <ul className={styles.channels} aria-label="Elsewhere">
            {channels.map((c) => (
              <li key={c.id}>
                <a href={c.url} rel="me noopener" target="_blank">
                  [ {c.label} ]
                </a>
              </li>
            ))}
          </ul>
        )}
        <p className={styles.signoff}>
          <span>
            © {year} {contact.name} · {contact.site}
          </span>
          {contact.ens && <span className={styles.key}>{contact.ens}</span>}
          {contact.pgp && (
            <span className={styles.key}>
              <span className={styles.keyLabel}>pgp</span> {contact.pgp}
            </span>
          )}
        </p>
      </div>
    </section>
  );
}
