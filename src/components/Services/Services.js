"use client";

import styles from "./Services.module.css";
import Link from "next/link";

const services = [
  {
    id: 1,
    number: "(01)",
    title: "Photography",
    features: [
      "Portrait Sessions",
      "Event Coverage",
      "Product Photography",
      "Lifestyle Shoots",
    ],
  },
  {
    id: 2,
    number: "(02)",
    title: "Videography",
    features: [
      "Wedding Videos",
      "Promotional Videos",
      "Music Videos",
      "Documentaries",
    ],
  },
  {
    id: 3,
    number: "(03)",
    title: "Editing",
    features: [
      "Color Grading",
      "Photo Retouching",
      "Video Editing",
      "Sound Design",
    ],
  },
  {
    id: 4,
    number: "(04)",
    title: "Creative Direction",
    features: [
      "Concept Development",
      "Art Direction",
      "Storyboarding",
      "Brand Strategy",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      {/* Marquee Title */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          <span className={styles.marqueeText}>
            Services<sup style={{ fontSize: "0.5em" }}>(3)</sup>
          </span>
        </div>
      </div>

      {/* Services Container */}
      <div className="container">
        <div className={styles.servicesContainer}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              {/* Column 1 — Number */}
              <div className={styles.column}>
                <div className={styles.numberWrapper}>
                  <span className={styles.number}>{service.number}</span>
                </div>
              </div>

              {/* Column 2 — Title */}
              <div className={styles.column}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>

              {/* Column 3 — Features */}
              <div className={styles.column}>
                <ul className={styles.features}>
                  {service.features.map((feature, index) => (
                    <li key={index} className={styles.feature}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>Ready to bring your vision to life?</p>
          <Link href="/contact" className={styles.ctaBtn}>
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
