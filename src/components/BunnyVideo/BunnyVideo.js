"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./BunnyVideo.module.css";
import { embedUrl, thumbnailUrl } from "@/config/bunny";

/**
 * Click-to-play Bunny Stream embed with a facade poster.
 *
 * The iframe is never mounted until the user clicks — zero network cost on
 * page load. An IntersectionObserver additionally blocks activation until
 * the component is actually near the viewport, so programmatic triggers
 * (e.g. keyboard shortcut) can't fire a hidden off-screen embed.
 *
 * Props:
 *   guid    — Video GUID from Bunny dashboard (required)
 *   title   — Accessible label / iframe title (required)
 *   poster  — Custom poster image src. Omit to use Bunny's auto-thumbnail.
 *   className — Optional extra class on the outer wrapper
 *   loop    — Pass true to loop the embed (default false)
 */
/**
 * onClick — optional callback. When provided, clicking the facade calls this
 *           instead of activating the embed inline (used to open a lightbox).
 * autoActivate — skip the facade and load the iframe immediately. Use this
 *                when mounting the component inside a lightbox/modal.
 */
export default function BunnyVideo({ guid, title, poster, className, loop = false, onClick, autoActivate = false }) {
  const [active, setActive]   = useState(autoActivate);
  const [inView, setInView]   = useState(false);
  const wrapperRef            = useRef(null);

  // Track whether the component is near the viewport.
  // We only honour inline activation once it's visible.
  useEffect(() => {
    if (autoActivate) return; // lightbox usage — skip the observer
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [autoActivate]);

  const activate = () => {
    if (onClick) { onClick(); return; }  // delegate to parent (e.g. open lightbox)
    if (inView) setActive(true);
  };

  // Bunny embed query params:
  //   autoplay  — start playing immediately after the facade is clicked
  //   loop      — controlled by prop
  //   muted     — false (user chose to watch; let them hear it)
  //   preload   — false (the facade already avoids preloading)
  //   responsive — false (we control sizing with CSS; avoids Bunny's extra wrapper div)
  const src = `${embedUrl(guid)}?autoplay=true&loop=${loop}&muted=false&preload=false&responsive=false`;
  const posterSrc = poster ?? thumbnailUrl(guid);

  return (
    <div
      ref={wrapperRef}
      className={`${styles.wrapper} ${className ?? ""}`}
    >
      {active ? (
        <iframe
          src={src}
          className={styles.iframe}
          title={title}
          // Permissions required by Bunny's player (gyroscope for mobile tilt controls)
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          className={styles.facade}
          onClick={activate}
          aria-label={`Play: ${title}`}
          // If not yet in view, show as disabled to prevent keyboard activation
          aria-disabled={!inView}
        >
          <img
            src={posterSrc}
            alt={title}
            className={styles.poster}
            loading="lazy"
            decoding="async"
          />
          <span className={styles.overlay} aria-hidden="true" />
          <span className={styles.playRing} aria-hidden="true">
            <svg
              className={styles.playIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <polygon points="6,3 20,12 6,21" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
