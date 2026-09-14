"use client";

import { useEffect, useRef } from "react";

/**
 * Silver-gelatin grain: a single generated noise field covering the stage.
 * Regenerated on resize so it is seamless at any width; static otherwise,
 * so it costs nothing after the first paint.
 */
export default function Grain({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let frame = 0;
    const paint = () => {
      const w = Math.ceil(canvas.clientWidth);
      const h = Math.ceil(canvas.clientHeight);
      if (w === 0 || h === 0) return;
      canvas.width = w;
      canvas.height = h;
      const image = ctx.createImageData(w, h);
      const data = image.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 255;
      }
      ctx.putImageData(image, 0, 0);
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(paint);
    };

    schedule();
    const observer = new ResizeObserver(schedule);
    observer.observe(canvas);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
