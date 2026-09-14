import type Lenis from "lenis";

/** The live Lenis instance, when smooth scroll is active. */
export const lenisRef: { current: Lenis | null } = { current: null };
