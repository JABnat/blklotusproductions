import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <Image
            src="/assets/logo/blklotus-logo_white.png"
            alt="BLK Lotus Logo"
            width={100}
            height={100}
            className={styles.logo}
          />
          <span className={styles.businessName}>
            <span className={styles.nameThick}>BLK</span><span className={styles.nameThin}>LOTUS</span>
            <br />
            <span className={styles.nameThin}>PRODUCTIONS</span>
          </span>
        </div>

        {/* Links Section - 4 Columns */}
        <div className={styles.linksSection}>
          <div className={styles.linkColumn}>
            <span className={styles.linkTitle}>Explore</span>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </div>

          <div className={styles.linkColumn}>
            <span className={styles.linkTitle}>Portfolio</span>
            <Link href="/videos" className={styles.link}>
              Videos
            </Link>
            <Link href="/photos" className={styles.link}>
              Photos
            </Link>
          </div>

          <div className={styles.linkColumn}>
            <span className={styles.linkTitle}>Connect</span>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </div>

          <div className={styles.linkColumn}>
            <span className={styles.linkTitle}>Legal</span>
            <Link href="/terms" className={styles.link}>
              Terms and Conditions
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <p className={styles.copyright}>
          © {currentYear} BLK Lotus. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
