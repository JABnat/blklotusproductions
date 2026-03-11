"use client";

import styles from "./FeaturedWorks.module.css";
import Link from "next/link";

const featuredItems = [
  {
    id: 1,
    title: "Mountain Wedding",
    category: "Video",
    type: "video",
    placeholder: true,
  },
  {
    id: 2,
    title: "Urban Portrait Session",
    category: "Photography",
    type: "image",
    placeholder: true,
  },
  {
    id: 3,
    title: "Coastal Engagement",
    category: "Photography",
    type: "image",
    placeholder: true,
  },
  {
    id: 4,
    title: "Brand Documentary",
    category: "Video",
    type: "video",
    placeholder: true,
  },
  {
    id: 5,
    title: "Golden Hour Portraits",
    category: "Photography",
    type: "image",
    placeholder: true,
  },
  {
    id: 6,
    title: "Event Highlights",
    category: "Video",
    type: "video",
    placeholder: true,
  },
];

export default function FeaturedWorks() {
  return (
    <section id="featured-works" className={styles.featuredWorks}>
      {/* Marquee Title */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          <span className={styles.marqueeText}>Featured Works</span>
          <span className={styles.marqueeText}>★</span>
          <span className={styles.marqueeText}>Featured Works</span>
          <span className={styles.marqueeText}>★</span>
          <span className={styles.marqueeText}>Featured Works</span>
          <span className={styles.marqueeText}>★</span>
          <span className={styles.marqueeText}>Featured Works</span>
          <span className={styles.marqueeText}>★</span>
        </div>
      </div>

      {/* Works Container */}
      <div className={`container`}>
        <div className={styles.worksContainer}>
          {featuredItems.map((item) => (
            <div key={item.id} className={styles.workItem}>
              {item.type === "video" ? (
                <video
                  className={styles.workVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  {/* Placeholder video - replace with actual content */}
                  <source src="" type="video/mp4" />
                </video>
              ) : (
                <div
                  className={styles.workImage}
                  style={{
                    backgroundColor: `hsl(${item.id * 40}, 20%, 30%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-accent-2)",
                    fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
                  }}
                >
                  {/* Placeholder image - replace with actual content */}
                  Placeholder Image
                </div>
              )}
              <div className={styles.workOverlay}>
                <span className={styles.workCategory}>{item.category}</span>
                <h3 className={styles.workTitle}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={styles.viewAllContainer}>
          <Link href="/photos" className={styles.viewAllBtn}>
            View All Works
          </Link>
        </div>
      </div>
    </section>
  );
}
