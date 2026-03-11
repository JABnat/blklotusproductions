"use client";

import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navbarInner}`}>
        {/* Logo Container */}
        <div className={styles.logoContainer}>
          <Image
            src="/assets/logo/blklotus-logo_white.png"
            alt="BLK Lotus Logo"
            width={60}
            height={60}
            className={styles.logo}
            priority
          />
          <span className={styles.logoText}>BLK LOTUS</span>
        </div>

        {/* Quick Links */}
        <div className={styles.quickLinks}>
          <button
            className={styles.quickLinkBtn}
            onClick={() => scrollToSection("featured-works")}
          >
            Featured Works
          </button>
          <button
            className={styles.quickLinkBtn}
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>
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
