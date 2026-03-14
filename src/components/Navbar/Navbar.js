"use client";

import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navbarInner}`}>
        {/* Logo Container */}
        <div className={styles.logoContainer}>
          <Image
            src="/assets/logo/blklotus-logo_white.png"
            alt="BLK Lotus Productions Logo"
            width={60}
            height={60}
            className={styles.logo}
            priority
          />
          <span className={styles.logoText}>
            Blk Lotus
            <br /> Productions
          </span>
        </div>

        {/* Quick Links */}
        <div className={styles.quickLinks}>
          <span className={styles.locationTitle}>Quick links</span>
          <div className={styles.quickLinkBtnContainer}>
            <Link href="/#hero" className={styles.quickLinkBtn}>
              home
            </Link>
            <Link href="/#featured-works" className={styles.quickLinkBtn}>
              works
            </Link>
            <Link href="/#services" className={styles.quickLinkBtn}>
              services
            </Link>
          </div>
        </div>

        {/* Location Text */}
        <div className={styles.locationContainer}>
          <span className={styles.locationTitle}>
            Based in San Luis Obispo, California
          </span>
          <span className={styles.locationSubtitle}>
            Available for travel within the US
          </span>
        </div>
      </div>
    </nav>
  );
}
