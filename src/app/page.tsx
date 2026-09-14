import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main id="top">
      <Hero
        sha={process.env.NEXT_PUBLIC_COMMIT_SHA ?? "0000000"}
        repo={process.env.NEXT_PUBLIC_REPO_URL}
      />
    </main>
  );
}
