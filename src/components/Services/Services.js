"use client";

import styles from "./Services.module.css";
import Link from "next/link";

const services = [
  {
    id: 1,
    icon: "📷",
    title: "Photography",
    description:
      "High-quality photography for portraits, events, products, and more.",
    features: [
      "Portrait Sessions",
      "Event Coverage",
      "Product Photography",
      "Lifestyle Shoots",
    ],
  },
  {
    id: 2,
    icon: "🎬",
    title: "Videography",
    description: "Professional video production from concept to final edit.",
    features: [
      "Wedding Films",
      "Promotional Videos",
      "Music Videos",
      "Documentaries",
    ],
  },
  {
    id: 3,
    icon: "✂️",
    title: "Editing",
    description: "Expert post-production services to polish your content.",
    features: [
      "Color Grading",
      "Photo Retouching",
      "Video Editing",
      "Sound Design",
    ],
  },
  {
    id: 4,
    icon: "🎯",
    title: "Creative Direction",
    description: "Full creative vision from concept development to execution.",
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
          <span className={styles.marqueeText}>Services<sup style={{ fontSize: "0.5em" }}>(3)</sup></span>
        </div>
      </div>

      {/* Services Container */}
      <div className={`container`}>
        <div className={styles.servicesContainer}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.features}>
                {service.features.map((feature, index) => (
                  <li key={index} className={styles.feature}>
                    {feature}
                  </li>
                ))}
              </ul>
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
