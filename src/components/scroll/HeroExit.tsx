"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** As the Hero scrolls away, its print darkens toward the ground and eases up. */
export default function HeroExit() {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const stage = document.querySelector<HTMLElement>('[data-stage="hero"]');
      const photo = document.querySelector<HTMLElement>("[data-hero-photo]");
      if (!stage || !photo) return;
      // fromTo: an explicit start value, otherwise GSAP cannot interpolate from
      // the browser's "none" and the photo would snap dark on the first tick.
      const tween = gsap.fromTo(
        photo,
        { yPercent: 0, filter: "brightness(1)" },
        {
          yPercent: -8,
          filter: "brightness(0.08)",
          ease: "none",
          scrollTrigger: { trigger: stage, start: "top top", end: "bottom top", scrub: true },
        },
      );
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });
    return () => mm.revert();
  }, []);

  return null;
}
