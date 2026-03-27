"use client";

import { useState } from "react";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import styles from "./contact.module.css";

const faqs = [
  {
    id: "01",
    q: "What services do you offer?",
    a: "I provide photography, videography, brand content, wedding coverage, music videos, and creative direction tailored for modern visual identities.",
  },
  {
    id: "02",
    q: "What is your typical turnaround time?",
    a: "Turnaround depends on the project scope, but most deliverables are ready within 1–2 weeks from the shoot date.",
  },
  {
    id: "03",
    q: "Do you travel for shoots?",
    a: "Yes. Based in San Luis Obispo, CA but available for on-location work anywhere in the U.S.",
  },
  {
    id: "04",
    q: "Can you handle both photo and video for the same project?",
    a: "Absolutely. Many clients book both simultaneously — it's more efficient and keeps the visual language consistent.",
  },
  {
    id: "05",
    q: "How do I book a session?",
    a: "Reach out via email or Instagram with your project details and preferred dates. I'll get back to you within 24 hours.",
  },
  {
    id: "06",
    q: "What's your process like?",
    a: "Discovery call → concept/mood board → shoot day → editing → final delivery. Simple, collaborative, and focused on your vision.",
  },
];

// Swap these paths for your actual portfolio images
const marqueeImages = [
  "/assets/images/portfolio-1.jpg",
  "/assets/images/portfolio-2.jpg",
  "/assets/images/portfolio-3.jpg",
  "/assets/images/portfolio-4.jpg",
  "/assets/images/portfolio-5.jpg",
  "/assets/images/portfolio-6.jpg",
  "/assets/images/portfolio-7.jpg",
  "/assets/images/portfolio-8.jpg",
];

function Accordion() {
  const [open, setOpen] = useState(new Set(["01", "02", "03", "04"]));

  const toggle = (id) => {
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className={styles.accordion}>
      {faqs.map(({ id, q, a }) => {
        const isOpen = open.has(id);
        return (
          <div
            key={id}
            className={styles.accordionItem}
            onClick={() => toggle(id)}
          >
            <div className={styles.accordionHeader}>
              <span className={styles.accordionNum}>{id}</span>
              <span className={styles.accordionQ}>{q}</span>
              <span className={styles.accordionIcon}>{isOpen ? "−" : "+"}</span>
            </div>
            {isOpen && (
              <div className={styles.accordionBody}>
                <p>{a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className={styles.contact}>
        {/* ── TOP SPLIT ── */}
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.portrait}>
              <img src="/assets/images/aurora.webp" alt="BLK Lotus" />
            </div>
            <p className={styles.tagline}>
              Delivering Creative, cinematic visuals that perfectly express your
              identity
            </p>
          </div>
          <div className={styles.right}>
            <a
              href="https://instagram.com/blklotusproductions"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactRow}
            >
              <span>Follow me on Instagram</span>
              <span className={styles.arrow}>↗</span>
            </a>
            <a href="tel:+15554565" className={styles.contactRow}>
              <span>+1 555 4565</span>
              <span className={styles.arrow}>↗</span>
            </a>
            <a
              href="mailto:contact@blklotus-productions.com"
              className={styles.contactRow}
            >
              <span>contact@blklotus-productions.com</span>
              <span className={styles.arrow}>↗</span>
            </a>
          </div>
        </div>

        {/* ── TICKER ── */}
        <div className={styles.ticker}>
          <div className={styles.tickerTrack}>
            {[...Array(4)].map((_, i) => (
              <span key={i} className={styles.tickerItem}>
                Call Me <span className={styles.dot}>·</span> 24/7 Support{" "}
                <span className={styles.dot}>·</span> Remote{" "}
                <span className={styles.dot}>·</span> On Location{" "}
                <span className={styles.dot}>·</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── FAQ + ACCORDION ── */}
        <div className={styles.faqSection}>
          <div className={styles.faqLeft}>
            <p className={styles.faqHeadline}>
              Delivering Creative, nostalgic visuals that perfectly express your
              identity
            </p>
          </div>
          <div className={styles.faqRight}>
            <Accordion />
          </div>
        </div>

        {/* ── PHOTO MARQUEE STRIP ── */}
        <div className={styles.photoMarquee}>
          <div className={styles.photoTrack}>
            {[...marqueeImages, ...marqueeImages].map((src, i) => (
              <div key={i} className={styles.photoCard}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
          {/* Bottom label bar */}
          <div className={styles.photoLabels}>
            {["Independent", "Overview", "Multidisciplinary", "Focused"].map(
              (label) => (
                <span key={label} className={styles.photoLabel}>
                  {label}
                </span>
              ),
            )}
          </div>
        </div>

        {/* ── BIG CTA ── */}
        <div className={styles.cta}>
          <hr className={styles.rule} />
          <h1 className={styles.ctaText}>Contact Now</h1>
          <hr className={styles.rule} />
        </div>
      </div>
    </PageWrapper>
  );
}
