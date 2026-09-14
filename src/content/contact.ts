/**
 * Talk stage content. Fill only with what David confirms; empty fields render nothing.
 */
export type Channel = { id: "github" | "x" | "linkedin" | "instagram"; label: string; url: string };

export const contact = {
  email: "iam@davidzo.com",
  channels: [
    { id: "github", label: "GitHub", url: "https://github.com/DavidZapataOh/" },
    { id: "x", label: "X", url: "https://x.com/DavidZapataOh" },
    { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/davidzapatao/" },
    { id: "instagram", label: "Instagram", url: "https://www.instagram.com/davidzapatao/" },
  ] as Channel[],
  /** Optional cypherpunk credentials, shown only when present. */
  pgp: "", // fingerprint, e.g. "ABCD 1234 …"
  ens: "", // e.g. "davidzo.eth"
  site: "davidzo.com",
  name: "David Zapata",
};
