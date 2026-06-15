"use client";

import { useEffect, useRef } from "react";
import styles from "./Testimonials.module.css";
import { useMarqueeInView } from "@/hooks/useMarqueeInView";

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
  const marqueeRef = useRef(null);
  const marqueeActive = useMarqueeInView(marqueeRef);

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

  // HELIX EFFECT
useEffect(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const helix = document.getElementById("helix");
  const section = document.getElementById("testimonials");
  if (!helix || !section) return;

  const cards = helix.querySelectorAll(`.${styles.testimonialCard}`);
  const total = cards.length;
  if (total === 0) return;

  const radius = 18;
  let currentIndex = 0; // float, 0 → total-1
  let isLocked = false;
  let animationId = null;

  const renderCards = (floatIndex) => {
    cards.forEach((card, i) => {
      const offset = i - floatIndex;
      const angle = offset * (Math.PI / 3);
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle);
      const y = offset * 14;
      const scale = 0.65 + (z + 1) * 0.175;
      const opacity = 0.3 + (z + 1) * 0.35;
      const zIndex = Math.round((z + 1) * 50);

      card.style.transform = `translateX(${x}vw) translateY(${y}vh) scale(${scale})`;
      card.style.opacity = opacity;
      card.style.zIndex = zIndex;
    });
  };

  // Animate float index smoothly to a target
  let targetIndex = 0;
  let rafRunning = false;

  const animateTo = (target) => {
    targetIndex = Math.max(0, Math.min(total - 1, target));
    if (rafRunning) return;
    rafRunning = true;

    const tick = () => {
      currentIndex += (targetIndex - currentIndex) * 0.12;
      renderCards(currentIndex);

      if (Math.abs(targetIndex - currentIndex) > 0.001) {
        animationId = requestAnimationFrame(tick);
      } else {
        currentIndex = targetIndex;
        renderCards(currentIndex);
        rafRunning = false;
      }
    };
    animationId = requestAnimationFrame(tick);
  };

  // Check if section is filling the viewport vertically
  const isSectionActive = () => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 10 && rect.bottom >= window.innerHeight - 10;
  };

  // Track mouse X so side-of-screen scrolling escapes the helix
  let mouseX = window.innerWidth / 2;
  const handleMouseMove = (e) => { mouseX = e.clientX; };
  // True when cursor is in the centre 60% of the viewport width
  const isMouseInHelixZone = () => {
    const edge = window.innerWidth * 0.2;
    return mouseX > edge && mouseX < window.innerWidth - edge;
  };

  // Wheel: accumulate delta so a single tick can't advance a card.
  // Only fire when enough scroll has built up, then lock out for 700 ms
  // so a fast flick can't chain multiple advances in one gesture.
  let wheelAccum = 0;
  let wheelLocked = false;
  const WHEEL_THRESHOLD = 100; // px of deltaY before a card change fires
  const WHEEL_COOLDOWN  = 600; // ms before the next card change is allowed

  const handleWheel = (e) => {
    if (!isSectionActive() || !isMouseInHelixZone()) return;

    const goingDown = e.deltaY > 0;

    if (goingDown && currentIndex >= total - 1) return;
    if (!goingDown && currentIndex <= 0) return;

    e.preventDefault();

    if (wheelLocked) return;

    wheelAccum += e.deltaY;
    if (Math.abs(wheelAccum) < WHEEL_THRESHOLD) return;

    // Threshold crossed — advance one card and start cooldown
    wheelAccum = 0;
    wheelLocked = true;
    setTimeout(() => { wheelLocked = false; }, WHEEL_COOLDOWN);

    animateTo(Math.round(currentIndex) + (goingDown ? 1 : -1));
  };

  // Touch: require a more deliberate swipe (60 px) and the same cooldown
  let touchStartY = 0;
  let touchLocked = false;
  const TOUCH_THRESHOLD = 60;

  const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY;
  };
  const handleTouchMove = (e) => {
    if (!isSectionActive() || touchLocked) return;
    const delta = touchStartY - e.touches[0].clientY;
    const goingDown = delta > TOUCH_THRESHOLD;
    const goingUp   = delta < -TOUCH_THRESHOLD;

    if (goingDown && currentIndex >= total - 1) return;
    if (goingUp   && currentIndex <= 0)         return;

    if (goingDown || goingUp) {
      e.preventDefault();
      touchStartY = e.touches[0].clientY;
      touchLocked = true;
      setTimeout(() => { touchLocked = false; }, WHEEL_COOLDOWN);
      animateTo(Math.round(currentIndex) + (goingDown ? 1 : -1));
    }
  };

  renderCards(0);
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("wheel", handleWheel, { passive: false });
  window.addEventListener("touchstart", handleTouchStart, { passive: true });
  window.addEventListener("touchmove", handleTouchMove, { passive: false });

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("wheel", handleWheel);
    window.removeEventListener("touchstart", handleTouchStart);
    window.removeEventListener("touchmove", handleTouchMove);
    if (animationId) cancelAnimationFrame(animationId);
  };
}, []);

  return (
    <section id="testimonials" className={styles.testimonials}>
      {/* Marquee Title */}
      <div ref={marqueeRef} className={styles.marqueeWrapper}>
        <div className={`${styles.marquee} ${marqueeActive ? styles.marqueeActive : ""}`}>
          <span className={styles.marqueeText}>
            Testimonials<sup style={{ fontSize: "0.5em" }}>(4)</sup>
          </span>
        </div>
      </div>

      {/* Helix of Testimonial Cards */}
      <div id="helix" className={styles.helix}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <span className={styles.quoteIcon}>&ldquo;</span>

            <div className={styles.avatarContainer}>
              <div className={styles.avatar}>{testimonial.initials}</div>
              <div className={styles.clientInfo}>
                <span className={styles.clientName}>{testimonial.name}</span>
                <span className={styles.clientRole}>{testimonial.role}</span>
              </div>
            </div>

            <p className={styles.testimonialText}>
              &ldquo;{testimonial.text}&rdquo;
            </p>

            <div className={styles.rating}>
              {renderStars(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
