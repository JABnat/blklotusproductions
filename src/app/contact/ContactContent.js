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
    a: "Reach out via the form below or Instagram with your project details and preferred dates. I'll get back to you within 24 hours.",
  },
  {
    id: "06",
    q: "What's your process like?",
    a: "Discovery call → concept/mood board → shoot day → editing → final delivery. Simple, collaborative, and focused on your vision.",
  },
];

const marqueeImages = [
  "/assets/images/estuary.jpg",
  "/assets/images/aurora.webp",
  "/assets/images/estuary.jpg",
  "/assets/images/aurora.webp",
  "/assets/images/estuary.jpg",
  "/assets/images/aurora.webp",
  "/assets/images/estuary.jpg",
  "/assets/images/aurora.webp",
];

const PROJECT_TYPES = [
  "Photography",
  "Videography",
  "Photo + Video",
  "Music Video",
  "Brand Content",
  "Wedding Coverage",
  "Other",
];

function Accordion() {
  const [open, setOpen] = useState(new Set());

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
        const panelId = `faq-panel-${id}`;
        return (
          <div key={id} className={styles.accordionItem}>
            <button
              className={styles.accordionHeader}
              onClick={() => toggle(id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className={styles.accordionNum} aria-hidden="true">{id}</span>
              <span className={styles.accordionQ}>{q}</span>
              <span className={styles.accordionIcon} aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div id={panelId} className={styles.accordionBody} role="region">
                <p>{a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ContactForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors]       = useState({});
  const [status, setStatus]       = useState("idle"); // idle | submitting | success | error
  const [serverError, setServerError] = useState("");

  const set = (key) => (e) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  function validate() {
    const e = {};
    if (!fields.name.trim()) e.name = "Name is required.";
    if (!fields.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      e.email = "Enter a valid email address.";
    if (!fields.message.trim()) e.message = "Message is required.";
    else if (fields.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.formSuccess}>
        <p className={styles.formSuccessTitle}>Message Sent</p>
        <p className={styles.formSuccessText}>
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* Honeypot: hidden from real users, bots fill it in */}
      <input
        className={styles.honeypot}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={fields.honeypot}
        onChange={set("honeypot")}
        aria-hidden="true"
      />

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="contact-name" className={styles.formLabel}>Name *</label>
          <input
            id="contact-name"
            className={styles.formInput}
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={set("name")}
            aria-required="true"
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name && (
            <span id="contact-name-error" className={styles.formError} role="alert">{errors.name}</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="contact-email" className={styles.formLabel}>Email *</label>
          <input
            id="contact-email"
            className={styles.formInput}
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={set("email")}
            aria-required="true"
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email && (
            <span id="contact-email-error" className={styles.formError} role="alert">{errors.email}</span>
          )}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="contact-project" className={styles.formLabel}>Project Type</label>
        <select
          id="contact-project"
          className={styles.formSelect}
          value={fields.projectType}
          onChange={set("projectType")}
        >
          <option value="">Select a service…</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="contact-message" className={styles.formLabel}>Message *</label>
        <textarea
          id="contact-message"
          className={styles.formTextarea}
          value={fields.message}
          onChange={set("message")}
          aria-required="true"
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          placeholder="Tell me about your project, preferred dates, and any specific ideas…"
        />
        {errors.message && (
          <span id="contact-message-error" className={styles.formError} role="alert">{errors.message}</span>
        )}
      </div>

      {status === "error" && (
        <p className={styles.formServerError}>{serverError}</p>
      )}

      <button
        className={styles.submitBtn}
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

export default function ContactContent() {
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
            <a
              href="mailto:contact@blklotus-productions.com"
              className={styles.contactRow}
            >
              <span>contact@blklotus-productions.com</span>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* ── TICKER ── */}
        <div className={styles.ticker}>
          <div className={styles.tickerTrack}>
            {[...Array(6)].map((_, i) => (
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
        </div>

        {/* ── CONTACT FORM ── */}
        <div className={styles.formSection}>
          <hr className={styles.rule} />
          <h2 className={styles.ctaText}>Contact Now</h2>
          <hr className={styles.rule} />
          <ContactForm />
        </div>
      </div>
    </PageWrapper>
  );
}
