"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./admin.module.css";

const CREDENTIALS = { username: "AAEA4", password: "SanLuisContenta4" };

const QUICK_LINKS = [
  {
    label: "Gmail",
    href: "https://mail.google.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
  },
  {
    label: "Epidemic Sound",
    href: "https://www.epidemicsound.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    label: "Motion VFX",
    href: "https://www.motionvfx.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="5,3 19,12 5,21" />
      </svg>
    ),
  },
  {
    label: "Storyblocks",
    href: "https://www.storyblocks.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="8" height="8" rx="1" />
        <rect x="14" y="2" width="8" height="8" rx="1" />
        <rect x="2" y="14" width="8" height="8" rx="1" />
        <rect x="14" y="14" width="8" height="8" rx="1" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    // TODO: replace with your channel URL e.g. https://youtube.com/@yourhandle
    href: "https://www.youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    // TODO: replace with your profile URL e.g. https://instagram.com/yourhandle
    href: "https://www.instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

// ── Google Analytics Embed ────────────────────────────────────────────────────
// Replace the src below with a Looker Studio report URL connected to your GA4
// property. In Looker Studio: Share → Embed → copy the iframe src.
const GA_EMBED_SRC = "";

export default function AdminPage() {
  const [authed, setAuthed]     = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("blklotus_admin") === "1") setAuthed(true);
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    if (
      username === CREDENTIALS.username &&
      password === CREDENTIALS.password
    ) {
      sessionStorage.setItem("blklotus_admin", "1");
      setAuthed(true);
    } else {
      setError("Incorrect username or password.");
    }
  }

  function handleLogout() {
    sessionStorage.removeItem("blklotus_admin");
    setAuthed(false);
    setUsername("");
    setPassword("");
  }

  if (!authed) {
    return (
      <div className={styles.loginBg}>
        <div className={styles.loginOverlay} />
        <form className={styles.loginCard} onSubmit={handleLogin}>
          <Link href="/">
            <img
              src="/assets/logo/blklotus-logo_white.png"
              alt="BLK Lotus"
              className={styles.loginLogo}
            />
          </Link>
          <h1 className={styles.loginTitle}>The Darkroom</h1>
          <div className={styles.field}>
            <label htmlFor="admin-username" className={styles.label}>Username</label>
            <input
              id="admin-username"
              className={styles.input}
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => { setUsername(e.target.value); setError(""); }}
              aria-required="true"
              aria-describedby={error ? "admin-error" : undefined}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="admin-password" className={styles.label}>Password</label>
            <input
              id="admin-password"
              className={styles.input}
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              aria-required="true"
              aria-describedby={error ? "admin-error" : undefined}
            />
          </div>
          {error && <p id="admin-error" className={styles.error} role="alert">{error}</p>}
          <button className={styles.loginBtn} type="submit">Enter</button>
        </form>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <header className={styles.dashHeader}>
        <img
          src="/assets/logo/blklotus-logo_white.png"
          alt="BLK Lotus"
          className={styles.dashLogo}
        />
        <button className={styles.logoutBtn} onClick={handleLogout}>Log Out</button>
      </header>

      <main className={styles.dashMain}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Quick Links</h2>
          <div className={styles.linksGrid}>
            {QUICK_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkCard}
              >
                <span className={styles.linkIcon}>{link.icon}</span>
                <span className={styles.linkLabel}>{link.label}</span>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Google Analytics</h2>
          <div className={styles.analyticsWindow}>
            {GA_EMBED_SRC ? (
              <iframe
                src={GA_EMBED_SRC}
                className={styles.analyticsFrame}
                title="Google Analytics"
                allowFullScreen
              />
            ) : (
              <div className={styles.analyticsPlaceholder}>
                <p className={styles.placeholderText}>
                  Connect your Google Analytics data here.
                </p>
                <p className={styles.placeholderSub}>
                  In Google Looker Studio, create a report linked to your GA4
                  property → Share → Embed report → paste the iframe URL into{" "}
                  <code>GA_EMBED_SRC</code> in <code>AdminPage.js</code>.
                </p>
                <a
                  href="https://analytics.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.gaLink}
                >
                  Open Google Analytics →
                </a>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
