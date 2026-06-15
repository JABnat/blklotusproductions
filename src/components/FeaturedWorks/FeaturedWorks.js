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
          Take a look at some of the work we&apos;ve done at BlkLotus
          Productions
        </h2>
        <Link href="/contact" className={styles.contactButton}>
          Contact Us
        </Link>
      </div>
      <div className={styles.worksContainer}>
        {/* Row 1 — Photography */}
        <div className={styles.workItem}>
          <Link href="/photos" className={styles.imageWrapper}>
            <img
              src="/assets/images/estuary.jpg"
              alt="Photography"
              className={`${styles.workImage} ${styles.photoImage}`}
              loading="lazy"
              decoding="async"
            />
            <img
              src="/assets/images/pexels-delilah.jpg"
              alt=""
              className={styles.estuaryOverlay}
              loading="lazy"
              decoding="async"
            />
            <span className={styles.workCategory}>Photography</span>
          </Link>
          <span className={styles.workTitle}>
            Photography <sup>(02)</sup>
          </span>
        </div>

        {/* Row 2 — Videography */}
        <div className={styles.workItem}>
          <Link href="/videos" className={styles.imageWrapper}>
            <img
              src="/assets/images/estuary.jpg"
              alt="Videography"
              className={`${styles.workImage} ${styles.videoImage}`}
              loading="lazy"
              decoding="async"
            />
            <img
              src="/assets/images/pexels-philippe-dubois.jpg"
              alt=""
              className={styles.estuaryOverlay}
              loading="lazy"
              decoding="async"
            />
            <span className={styles.workCategory}>Videography</span>
          </Link>
          <span className={styles.workTitle}>
            Videography <sup>(01)</sup>
          </span>
        </div>
      </div>

      {/* View All Button */}
      <div className={styles.viewAllContainer}>
        <Link href="/works" className={styles.viewAllBtn}>
          View All Works
        </Link>
      </div>
    </section>
  );
}
