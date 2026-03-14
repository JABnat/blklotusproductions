import styles from "./AboutSummary.module.css";
import Image from "next/image";

export default function AboutSummary() {
  return (
    <section id="about-summary" className={styles.aboutSummary}>
      <div className={styles.aboutSectionHeader}>
        <Image
          src="/assets/images/bhungra.png"
          alt="two women dancing bhungra image"
          width={300}
          height={200}
          className={styles.aboutSummaryImage}
        />
        <div className={styles.textButtonContainer}>
          <h2>
            Blk Lotus Productions realises Photography &amp; Videography that
            elevates
          </h2>
        </div>
      </div>
      <div className={styles.aboutSummaryBarContainer}>
        <span className={styles.aboutSummaryBar}></span>
        <p className={styles.aboutSummaryText}>
          | Aaron | Audrey | IsAbella | Abigail |
        </p>
        <span className={styles.aboutSummaryBar}></span>
      </div>
    </section>
  );
}