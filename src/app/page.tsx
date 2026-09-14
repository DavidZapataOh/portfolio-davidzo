import Hero from "@/components/hero/Hero";
import Build from "@/components/build/Build";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import HeroExit from "@/components/scroll/HeroExit";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <HeroExit />
      <main id="top">
        <Hero />
        <Build />
      </main>
    </>
  );
}
