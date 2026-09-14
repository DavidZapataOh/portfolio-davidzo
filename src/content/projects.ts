/**
 * Build stage content. Facts come from the products' own landing pages or
 * from David; optional fields stay undefined until confirmed and render nothing.
 */
export type Project = {
  slug: "raffero" | "glemo" | "strickle" | "sincerin";
  name: string;
  scope: string; // chain or domain, shown next to the name in the index
  pitch: string; // one line, in the product's own words where possible
  url: string;
  host: string;
  print: string; // black-and-white capture of the product's landing
  focus: string; // CSS object-position for the print crop (where the landing's headline sits)
  year?: string;
  role?: string;
  stack?: string;
  repo?: string;
  metric?: string;
};

export const projects: Project[] = [
  {
    slug: "raffero",
    name: "Raffero",
    scope: "Avalanche",
    pitch:
      "Zero-knowledge raffles on Avalanche. Pick an alias, join a raffle, and your identity stays yours.",
    url: "https://raffero.com",
    host: "raffero.com",
    print: "/prints/raffero.jpg",
    focus: "50% 0",
  },
  {
    slug: "glemo",
    name: "Glemo",
    scope: "Verifiable credentials",
    pitch:
      "Credentials that prove themselves. Issue certificates anyone can verify in seconds, without chasing the issuer.",
    url: "https://glemo.io",
    host: "glemo.io",
    print: "/prints/glemo.jpg",
    focus: "50% 0",
  },
  {
    slug: "strickle",
    name: "Strickle",
    scope: "EU battery passport",
    pitch:
      "Prove the threshold, keep the recipe. Battery makers show recycled-content compliance without exposing suppliers.",
    url: "https://strickle.xyz",
    host: "strickle.xyz",
    print: "/prints/strickle.jpg",
    focus: "50% 0",
  },
  {
    slug: "sincerin",
    name: "Sincerin",
    scope: "Stellar · testnet",
    pitch:
      "Many private payments, one transaction. A confidential payments rollup on Stellar.",
    url: "https://sincerin.com",
    host: "sincerin.com",
    print: "/prints/sincerin.jpg",
    focus: "50% 0",
  },
];
