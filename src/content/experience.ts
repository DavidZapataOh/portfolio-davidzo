/**
 * Ship stage content: roles with responsibility over time, ordered by weight
 * (not by date). Facts confirmed by David on 2026-09-13.
 */
export type Role = {
  slug: string;
  title: string;
  org: string;
  kind: "company" | "ecosystem" | "freelance" | "community" | "university";
  start: string; // year
  end: string | "present";
  place?: string;
  note?: string; // one line, only when confirmed
  url?: string;
};

export const roles: Role[] = [
  {
    slug: "buckspay",
    title: "CTO",
    org: "Buckspay",
    kind: "company",
    start: "2025",
    end: "2026",
  },
  {
    slug: "avalanche-team1",
    title: "Technical Contributor",
    org: "Avalanche Team1",
    kind: "ecosystem",
    start: "2024",
    end: "present",
  },
  {
    slug: "blockchain-freelance",
    title: "Blockchain Developer",
    org: "Freelance",
    kind: "freelance",
    start: "2022",
    end: "present",
  },
  {
    slug: "ultravioleta",
    title: "Developer Contributor",
    org: "UltravioletaDAO",
    kind: "community",
    start: "2023",
    end: "2025",
  },
  {
    slug: "javeriana",
    title: "Profesor de cátedra",
    org: "Pontificia Universidad Javeriana Cali",
    kind: "university",
    start: "2025",
    end: "present",
    place: "Cali",
  },
  {
    slug: "fullstack-freelance",
    title: "Full Stack Developer",
    org: "Freelance",
    kind: "freelance",
    start: "2019",
    end: "2022",
  },
];

/** First and last year on the axis, for structures that draw time. */
export const span = { from: 2019, to: 2026 };
