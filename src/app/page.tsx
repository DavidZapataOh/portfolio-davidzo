import { existsSync } from "node:fs";
import { join } from "node:path";
import Hero from "@/components/hero/Hero";
import Build from "@/components/build/Build";
import Ship from "@/components/ship/Ship";
import Prove from "@/components/prove/Prove";
import Live from "@/components/live/Live";
import Talk from "@/components/talk/Talk";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import HeroExit from "@/components/scroll/HeroExit";
import { passions } from "@/content/passions";

export default function Home() {
  // The Live stage shows only the photographs that actually exist in public/live.
  const available = passions
    .map((p) => p.id)
    .filter((id) => existsSync(join(process.cwd(), "public", "live", `${id}.jpg`)));

  return (
    <>
      <SmoothScroll />
      <HeroExit />
      <main id="top">
        <Hero />
        <Build />
        <Ship />
        <Prove />
        <Live available={available} />
        <Talk />
      </main>
    </>
  );
}
