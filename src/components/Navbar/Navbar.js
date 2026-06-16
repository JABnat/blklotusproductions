"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <div className={`container ${styles.navbarInner}`}>

        {/* Logo */}
        <Link href="/" className={styles.logoContainer} aria-label="Home" onClick={close}>
          <Image
            src="/assets/logo/blklotus-logo_white.png"
            alt="BLK Lotus Productions Logo"
            width={60}
            height={60}
            className={styles.logo}
            priority
          />
          <span className={styles.logoText}>
            <span className={styles.logoThick}>BLK</span><span className={styles.logoThin}>LOTUS</span>
            <br />
            <span className={styles.logoThin}>PRODUCTIONS</span>
          </span>
        </Link>

        {/* Desktop: quick links */}
        <div className={styles.quickLinks}>
          <span className={styles.locationTitle}>Quick links</span>
          <div className={styles.quickLinkBtnContainer}>
            <Link href="/#hero"          className={styles.quickLinkBtn}>home</Link>
            <Link href="/#featured-works" className={styles.quickLinkBtn}>works</Link>
            <Link href="/#services"      className={styles.quickLinkBtn}>services</Link>
          </div>
        </div>

        {/* Desktop: location */}
        <div className={styles.locationContainer}>
          <span className={styles.locationTitle}>Based in San Luis Obispo, California</span>
          <span className={styles.locationSubtitle}>Available for travel within the US</span>
        </div>

        {/* Mobile: hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={`${styles.bar} ${open ? styles.barTop : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barMid : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barBot : ""}`} />
        </button>
      </div>

      {/* Mobile: dropdown */}
      {open && (
        <div id="mobile-menu" className={styles.mobileMenu}>
          <Link href="/#hero"           className={styles.mobileLink} onClick={close}>Home</Link>
          <Link href="/#featured-works" className={styles.mobileLink} onClick={close}>Works</Link>
          <Link href="/#services"       className={styles.mobileLink} onClick={close}>Services</Link>
          <div className={styles.mobileLocation}>
            <span className={styles.mobileLocationTitle}>Based in San Luis Obispo, CA</span>
            <span className={styles.mobileLocationSub}>Available for travel within the US</span>
          </div>
        </div>
      )}
    </nav>
  );
}
