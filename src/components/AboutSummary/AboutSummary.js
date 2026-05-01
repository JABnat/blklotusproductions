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
          borderRadius={"1rem"}
          className={styles.aboutSummaryImage}
        />
        <div className={styles.textButtonContainer}>
          <div className={styles.containerSummaryTitle}>
            <h2>
              Blk Lotus Productions realises Photography &amp; Videography that
              elevates
            </h2>
          </div>
          <div className={styles.net}>
            {/* box */}
            <div className={styles.boxTopRow}>
              <a href="/page1" className={styles.img1}>
                <img
                  src="/assets/images/spotify.png"
                  style={{ padding: "25%" }}
                  alt="gradient"
                />
              </a>
              <a href="/page2" className={styles.img2}>
                <img
                  src="/assets/images/dolby.png"
                  style={{ padding: "8%" }}
                  alt="gradient"
                />
              </a>
            </div>
            <div className={styles.bottomRow}>
              <a href="/page4" className={styles.img3}>
                <img src="/assets/images/sony.png" alt="gradient" />
              </a>
              <a href="/page5" className={styles.img4}>
                <img
                  src="/assets/images/lucasfilm.png"
                  style={{ padding: "10%" }}
                  alt="gradient"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutSummaryBarContainer}>
        <span className={styles.aboutSummaryBar}></span>
        <p className={styles.aboutSummaryText}>
          | Aaron | Audrey | IsAbella | Abigail | Aaron |                    
        </p>
        <span className={styles.aboutSummaryBar}></span>
      </div>
    </section>
  );
}
