/**
 * Prove stage content, as confirmed by David on 2026-09-14.
 * kind decides the drawn object:
 *   trophy   overall hackathon win
 *   medal    track win
 *   cassette bootcamp / video course
 *   book     written guide
 *   floppy   open-source repository
 *   diploma  certificate or programme
 */
export type ProofKind = "trophy" | "medal" | "cassette" | "book" | "floppy" | "diploma";

export type Proof = {
  id: string;
  kind: ProofKind;
  name: string; // what it is
  detail: string; // where / which
  year: string;
  url?: string; // verification, results, recording or repository link
};

export const proofs: Proof[] = [
  // Won — hackathons, newest first
  { id: "hackmoney-2026", kind: "trophy", name: "ETHGlobal HackMoney", detail: "Hackathon winner", year: "2026" },
  { id: "chainlink-convergence-2026", kind: "medal", name: "Chainlink Convergence", detail: "Privacy track winner", year: "2026" },
  { id: "scroll-vibe-2025", kind: "trophy", name: "Scroll Vibe Code Bootcamp", detail: "Hackathon winner", year: "2025" },
  { id: "ethargentina-2024", kind: "medal", name: "ETHArgentina", detail: "Privacy track winner", year: "2024" },
  { id: "avalanche-bogota-2024", kind: "trophy", name: "Avalanche Bogotá", detail: "Hackathon winner", year: "2024" },
  { id: "avalanche-medellin-2024", kind: "trophy", name: "Avalanche Medellín", detail: "Hackathon winner", year: "2024" },
  { id: "ethcolombia-2023", kind: "trophy", name: "ETHColombia", detail: "Hackathon winner", year: "2023" },

  // Shared — knowledge given away
  { id: "bootcamp-avalanche", kind: "cassette", name: "Bootcamp Avalanche", detail: "Team1 Latam · YouTube", year: "2025", url: "https://www.youtube.com/@Team1Latam" },
  { id: "avalanche-gitbook", kind: "book", name: "Desarrollo de aplicaciones blockchain en Avalanche", detail: "GitBook guide", year: "2024 – 2026", url: "https://david-zapata.gitbook.io/desarrollo-de-aplicaciones-blockchain-en-avalanche" },
  { id: "awesome-zk", kind: "floppy", name: "awesome-zk", detail: "Curated list · GitHub", year: "2026", url: "https://github.com/DavidZapataOh/awesome-zk" },
  { id: "avalanche-noir-kit", kind: "floppy", name: "avalanche-noir-kit-foundry", detail: "Noir + Foundry starter kit · GitHub", year: "2026", url: "https://github.com/DavidZapataOh/avalanche-noir-kit-foundry" },

  // Certified — newest first
  { id: "invisible-garden-2025", kind: "diploma", name: "Invisible Garden Fellowship", detail: "Invisible Garden", year: "2025" },
  { id: "cyfrin-noir-2025", kind: "diploma", name: "Noir Programming and ZK Circuits", detail: "Cyfrin", year: "2025" },
  { id: "ethbogota-2024", kind: "diploma", name: "Onchain Application Development on Ethereum", detail: "ETHBogotá", year: "2024" },
  { id: "colledge-2023", kind: "diploma", name: "Advanced Web3 Applications Program", detail: "Colledge", year: "2023" },
  { id: "blockchain-bites-2023", kind: "diploma", name: "Bootcamp Blockchain Development (+70 h)", detail: "Blockchain Bites", year: "2023" },
  { id: "ethkipu-2023", kind: "diploma", name: "Ethereum Developer Pack", detail: "ETH Kipu", year: "2023" },
  { id: "comfenalco-2022", kind: "diploma", name: "Blockchain and IoT Development", detail: "Comfenalco", year: "2022" },
  { id: "censa-2018", kind: "diploma", name: "Técnica en Análisis y Desarrollo de Software", detail: "CENSA", year: "2017 – 2018" },
];
