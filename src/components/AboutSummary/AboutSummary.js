import styles from "./AboutSummary.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AboutSummary() {
  return (
    <section id="about-summary" className={styles.aboutSummary}>
      <div className={styles.aboutSectionHeader}>

        {/* Column 1 — portrait image, spans all rows */}
        <Image
          src="/assets/portfolio/photos/Indian%20Festival/IMG_0923.jpg"
          alt="Indian festival celebration"
          width={300}
          height={450}
          className={styles.aboutSummaryImage}
        />

        {/* Row 1, col 2 — headline + About button */}
        <div className={styles.containerSummaryTitle}>
          <h2>
            Blk Lotus Productions realises Photography &amp; Videography that
            elevates
          </h2>
          <Link href="/about" className={styles.aboutBtn}>About Us</Link>
        </div>

        {/* Row 2, full width — name strip, sits behind the image */}
        <div className={styles.aboutSummaryBarContainer}>
          <span className={styles.aboutSummaryBar}></span>
          <p className={styles.aboutSummaryText}>
            | Aaron | Audrey | IsAbella | Abigail | Aaron |
          </p>
          <span className={styles.aboutSummaryBar}></span>
        </div>

        {/* Row 3, col 2 — brand logo grid */}
        <div className={styles.net}>
          <div className={styles.boxTopRow}>
            <div className={styles.img1}>
              <img
                src="/assets/images/spotify.png"
                style={{ padding: "25%" }}
                alt="Spotify"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={styles.img2}>
              <img
                src="/assets/images/dolby.png"
                style={{ padding: "8%" }}
                alt="Dolby"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.img3}>
              <img src="/assets/images/sony.png" alt="Sony" loading="lazy" decoding="async" />
            </div>
            <div className={styles.img4}>
              <img
                src="/assets/images/lucasfilm.png"
                style={{ padding: "10%" }}
                alt="Lucasfilm"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
