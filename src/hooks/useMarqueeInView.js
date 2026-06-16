"use client";

import { useState, useEffect } from "react";

/**
 * Fires once — returns true after the watched element enters the viewport
 * and stays visible for `delay` ms. Once active it never resets, so the
 * marquee plays continuously without interruption on scroll.
 */
export function useMarqueeInView(ref, delay = 1000) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) return;

    const el = ref.current;
    if (!el) return;

    let timer = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setIsActive(true), delay);
        } else {
          clearTimeout(timer);
          timer = null;
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [ref, delay, isActive]);

  return isActive;
}
