"use client";

import styles from "./Hero.module.css";
import Link from "next/link";
import BunnyBackgroundLoop from "@/components/BunnyBackgroundLoop/BunnyBackgroundLoop";
import { VIDEOS } from "@/config/bunny";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        {/* Text Content */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Capturing Your <span className={styles.titleAccent}>Story</span>
            <br />
            Frame by Frame
          </h1>
          <p className={styles.subtitle}>
            Professional photography and videography that brings your vision to
            life. Based in San Luis Obispo, serving clients nationwide.
          </p>
          <div className={styles.ctaContainer}>
            <Link
              href="/contact"
              className={`${styles.ctaBtn} ${styles.ctaPrimary}`}
            >
              Get in Touch
            </Link>
          </div>
         
        </div>

        {/* Video Content */}
        <div className={styles.videoContent} aria-hidden="true">
          <div className={styles.videoWrapper}>
            <BunnyBackgroundLoop
              guid={VIDEOS.heroLoop.guid}
              poster={VIDEOS.heroLoop.poster}
              className={styles.video}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
