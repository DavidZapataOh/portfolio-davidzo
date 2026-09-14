import Image from "next/image";
import Grain from "./Grain";
import styles from "./Hero.module.css";

const STAGES = [
  { id: "build", label: "Build" },
  { id: "ship", label: "Ship" },
  { id: "prove", label: "Prove" },
  { id: "live", label: "Live" },
  { id: "talk", label: "Talk" },
] as const;

export default function Hero() {
  return (
    <section className={styles.stage} aria-labelledby="hero-name">
      <Image
        src="/hero.jpg"
        alt="David Zapata in black and white, looking straight at the camera with a finger on his lips."
        fill
        priority
        quality={82}
        sizes="(max-width: 720px) 180vw, 100vw"
        className={styles.photo}
      />
      <div className={styles.veil} aria-hidden="true" />
      <Grain className={styles.grain} />

      <header className={styles.nav}>
        <a href="#top" className={styles.mark} aria-label="David Zapata, home">
          DZ
        </a>
        <nav aria-label="Stages">
          <ul>
            {STAGES.map((stage) => (
              <li key={stage.id}>
                <a href={`#${stage.id}`}>[ {stage.label} ]</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#talk" className={styles.talk}>
          [ Talk ]
        </a>
      </header>

      <div className={styles.copy}>
        <p className={styles.descriptor}>
          Blockchain developer · ZK · privacy.
          <br />
          I&nbsp;build systems that prove without revealing.
        </p>
        <h1 id="hero-name" className={styles.name}>
          <span>David</span>
          <span>Zapata</span>
        </h1>
      </div>

      <a href="#build" className={styles.cue} aria-label="Scroll to the next stage">
        <span aria-hidden="true" />
      </a>
    </section>
  );
}
