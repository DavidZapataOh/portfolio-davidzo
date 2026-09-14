import type { ProofKind } from "@/content/proofs";

/**
 * The shelf objects, one stroke family: 1px ink lines, round joins, fine
 * hatching in mute for volume. No fills, no second colour.
 */
const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const hatch = { stroke: "var(--mute)", strokeWidth: 0.75 };

export function Trophy() {
  return (
    <svg width="92" height="96" viewBox="0 0 92 96" {...common} aria-hidden="true">
      <path d="M24 10h44v22c0 16-10 28-22 28S24 48 24 32V10z" />
      <path d="M24 16H12c0 14 5 22 12 24" />
      <path d="M68 16h12c0 14-5 22-12 24" />
      <path d="M42 60v10M50 60v10" />
      <path d="M34 70h24l4 12H30z" />
      <path d="M26 82h40v8H26z" />
      <path d="M20 90h52v6H20z" />
      <path d="M40 96h12" />
      <path d="M52 14l-12 12M56 18l-14 14M60 22l-14 14M62 28l-12 12M62 34l-8 8" {...hatch} />
    </svg>
  );
}

export function Medal() {
  return (
    <svg width="72" height="84" viewBox="0 0 72 84" {...common} aria-hidden="true">
      <path d="M18 2h16l-8 30zM38 2h16l-8 30z" />
      <path d="M26 2l10 34 10-34" />
      <circle cx="36" cy="60" r="24" />
      <circle cx="36" cy="60" r="17" />
      <path d="M36 50l3 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7z" />
      <path d="M48 70l-6 6M52 66l-9 9M54 61l-11 11M54 55l-8 8" {...hatch} />
    </svg>
  );
}

export function Cassette() {
  return (
    <svg width="104" height="66" viewBox="0 0 104 66" {...common} aria-hidden="true">
      <rect x="2" y="2" width="100" height="62" rx="3" />
      <rect x="12" y="10" width="80" height="34" rx="2" />
      <circle cx="34" cy="27" r="9" />
      <circle cx="70" cy="27" r="9" />
      <path d="M34 18v4M34 32v4M25 27h4M39 27h4M70 18v4M70 32v4M61 27h4M75 27h4M46 27h12" />
      <path d="M22 52h60l6 10H16z" />
      <path d="M10 8h1M93 8h1M10 58h1M93 58h1" />
      <path d="M14 14l-4 4M20 14l-6 6M84 14l6 6M90 14l4 4" {...hatch} />
    </svg>
  );
}

export function Diploma() {
  return (
    <svg width="100" height="94" viewBox="0 0 100 94" {...common} aria-hidden="true">
      <path d="M20 30h60" />
      <path d="M20 30c-8 0-8 12 0 12h4" />
      <path d="M80 30c8 0 8 12 0 12h-4" />
      <path d="M24 30v40M76 30v40" />
      <path d="M24 70c-8 0-8 12 0 12h52c8 0 8-12 0-12" />
      <path d="M32 46h36M32 54h36M32 62h24" stroke="var(--mute)" />
      <path d="M50 82v10M50 84l-8 10M50 84l8 10" />
      <path d="M18 34l-3 3M18 38l-2 2M82 34l3 3M82 38l2 2" {...hatch} />
    </svg>
  );
}

export function Book() {
  return (
    <svg width="72" height="86" viewBox="0 0 72 86" {...common} aria-hidden="true">
      <path d="M14 6h44v80H14z" />
      <path d="M14 6c-4 0-6 2-6 6v70c0 4 2 6 6 6" />
      <path d="M8 12h6M8 82h6" />
      <path d="M24 28h24M24 36h24M24 44h16" stroke="var(--mute)" />
      <path d="M10 20v54" />
      <path d="M50 10l6 6M46 8l10 10" {...hatch} />
      <path d="M16 78l-4 4M20 80l-6 6" {...hatch} />
    </svg>
  );
}

export function Floppy() {
  return (
    <svg width="84" height="78" viewBox="0 0 84 78" {...common} aria-hidden="true">
      <path d="M6 6h64l8 8v64H6z" />
      <path d="M22 6v22h36V6" />
      <path d="M44 10v14" />
      <path d="M18 78V50h48v28" />
      <path d="M26 60h32M26 68h20" stroke="var(--mute)" />
      <path d="M10 74l-2 2M12 78l-4 4M70 10l4 4" {...hatch} />
    </svg>
  );
}

export function ShelfObject({ kind }: { kind: ProofKind }) {
  switch (kind) {
    case "trophy":
      return <Trophy />;
    case "medal":
      return <Medal />;
    case "cassette":
      return <Cassette />;
    case "book":
      return <Book />;
    case "floppy":
      return <Floppy />;
    case "diploma":
      return <Diploma />;
  }
}
