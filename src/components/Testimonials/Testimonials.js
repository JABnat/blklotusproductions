"use client";

import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Wedding Client",
    initials: "SM",
    text: "BLK Lotus captured our wedding day beautifully. Every moment was preserved with such artistry and emotion. We couldn't be happier with our photos and video.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Brand Owner",
    initials: "MC",
    text: "Working with BLK Lotus transformed our brand's visual identity. The creativity and professionalism exceeded our expectations. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Event Organizer",
    initials: "ER",
    text: "The team was incredibly professional and captured the essence of our corporate event perfectly. The final deliverables were stunning.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Park",
    role: "Music Artist",
    initials: "DP",
    text: "My music video turned out better than I imagined. BLK Lotus understood my vision from day one and brought it to life with incredible attention to detail.",
    rating: 5,
  },
  {
    id: 5,
    name: "Jessica Thompson",
    role: "Portrait Client",
    initials: "JT",
    text: "The portrait session was such a fun experience! The photos came out amazing and really captured my personality. Will definitely be coming back!",
    rating: 5,
  },
  {
    id: 6,
    name: "Michael Adams",
    role: "Real Estate Agent",
    initials: "MA",
    text: "BLK Lotus helped me elevate my property listings with professional photos and video tours. My clients love the quality of the visuals.",
    rating: 5,
  },
];

export default function Testimonials() {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`${styles.star} ${i >= rating ? styles.starEmpty : ""}`}
        >
          ★
        </span>,
      );
    }
    return stars;
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      {/* Marquee Title */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          <span className={styles.marqueeText}>Client Testimonials</span>
          <span className={styles.marqueeText}>♦</span>
          <span className={styles.marqueeText}>Client Testimonials</span>
          <span className={styles.marqueeText}>♦</span>
          <span className={styles.marqueeText}>Client Testimonials</span>
          <span className={styles.marqueeText}>♦</span>
          <span className={styles.marqueeText}>Client Testimonials</span>
          <span className={styles.marqueeText}>♦</span>
        </div>
      </div>

      {/* Testimonials Container */}
      <div className={`container`}>
        <div className={styles.testimonialsContainer}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <span className={styles.quoteIcon}>"</span>

              <div className={styles.avatarContainer}>
                <div className={styles.avatar}>{testimonial.initials}</div>
                <div className={styles.clientInfo}>
                  <span className={styles.clientName}>{testimonial.name}</span>
                  <span className={styles.clientRole}>{testimonial.role}</span>
                </div>
              </div>

              <p className={styles.testimonialText}>"{testimonial.text}"</p>

              <div className={styles.rating}>
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
