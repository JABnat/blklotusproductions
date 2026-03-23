"use client";

import styles from "./FeaturedWorks.module.css";
import Link from "next/link";

export default function FeaturedWorks() {
  return (
    <section id="featured-works" className={styles.featuredWorks}>
      {/* Marquee Title */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          <span className={styles.marqueeText}>
            Featured Works<sup>(2)</sup>
          </span>
        </div>
      </div>

      {/* Works Container */}
      <div className={styles.containerHeader}>
        <h2 className={styles.featuredTitle}>
          Take a look at some of the work we've done at BlkLotus Productions
        </h2>
        <button className={styles.contactButton}>Contact Us</button>
      </div>
      <div className={styles.worksContainer}>
        {/* Row 1 — Photography */}
        <div className={styles.workItem}>
          <div className={styles.imageWrapper}>
            <img
              src="/assets/images/estuary.jpg"
              alt="Photography"
              className={`${styles.workImage} ${styles.photoImage}`}
            />
            <img
              src="/assets/images/aurora.webp"
              alt="Estuary Overlay"
              className={styles.estuaryOverlay}
            />
            <span className={styles.workCategory}>Photography</span>
          </div>
          <span className={styles.workTitle}>
            Photography <sup>(02)</sup>
          </span>
        </div>

        {/* Row 2 — Videography */}
        <div className={styles.workItem}>
          <div className={styles.imageWrapper}>
            <img
              src="/assets/images/estuary.jpg"
              alt="Videography"
              className={`${styles.workImage} ${styles.videoImage}`}
            />
            <img
              src="/assets/images/aurora.webp"
              alt="Estuary Overlay"
              className={styles.estuaryOverlay}
            />
            <span className={styles.workCategory}>Videography</span>
          </div>
          <span className={styles.workTitle}>
            Videography <sup>(01)</sup>
          </span>
        </div>
      </div>

      {/* View All Button */}
      <div className={styles.viewAllContainer}>
        <Link href="/photos" className={styles.viewAllBtn}>
          View All Works
        </Link>
      </div>
    </section>
  );
}
