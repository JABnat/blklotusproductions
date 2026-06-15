"use client";

import { useEffect, useRef } from "react";
import styles from "./BunnyBackgroundLoop.module.css";
import { hlsUrl } from "@/config/bunny";

/**
 * Silent autoplay background video via Bunny Stream HLS.
 *
 * Browser strategy:
 *   Safari (macOS + iOS) → native HLS (<video src="...m3u8">)
 *   All others           → hls.js (dynamically imported, zero cost until used)
 *   Fallback             → poster image (if HLS not supported or load fails)
 *
 * Behaviour:
 *   - muted / autoplay / loop / playsInline — safe for mobile autoplay policy
 *   - preload="none" — no network cost until initHls() fires
 *   - IntersectionObserver pauses when scrolled off-screen, resumes on return
 *   - prefers-reduced-motion: skips playback entirely; poster is shown instead
 *
 * Props:
 *   guid      — Bunny video GUID (required)
 *   poster    — Fallback still image shown before/instead of video (required)
 *   className — Extra class on the <video> element
 */
export default function BunnyBackgroundLoop({ guid, poster, className }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Honour prefers-reduced-motion — leave video unloaded; poster stays visible
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const src = hlsUrl(guid);
    let hlsInstance = null;
    let destroyed = false;

    async function initHls() {
      if (destroyed) return;

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // ── Safari: native HLS support ────────────────────────────────────
        video.src = src;
        video.load();
        video.play().catch(() => {
          // Autoplay blocked (unlikely for muted video, but safe to swallow)
        });
      } else {
        // ── Other browsers: hls.js ────────────────────────────────────────
        // Dynamic import keeps hls.js out of the initial JS bundle entirely.
        // It is only fetched the first time a BunnyBackgroundLoop mounts.
        const { default: Hls } = await import("hls.js");
        if (destroyed) return;

        if (!Hls.isSupported()) {
          // Browser can't do HLS at all — poster image remains
          return;
        }

        hlsInstance = new Hls({
          // startLevel -1 = auto quality selection
          startLevel: -1,
          // Cap buffer to 30 s — background loop doesn't need more
          maxMaxBufferLength: 30,
          // Keep it quiet in the console
          debug: false,
        });

        hlsInstance.loadSource(src);
        hlsInstance.attachMedia(video);

        hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
          if (!destroyed) {
            video.play().catch(() => {});
          }
        });

        hlsInstance.on(Hls.Events.ERROR, (_, data) => {
          if (data.fatal) {
            // Give up — poster image is already the background so nothing to do
            hlsInstance?.destroy();
            hlsInstance = null;
          }
        });
      }
    }

    // ── IntersectionObserver: pause off-screen, resume on-screen ──────────
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!video.src && !video.currentSrc) return; // not loaded yet
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    initHls();
    observer.observe(video);

    return () => {
      destroyed = true;
      hlsInstance?.destroy();
      observer.disconnect();
      video.pause();
      video.removeAttribute("src");
      video.load(); // release media resources
    };
  }, [guid]);

  return (
    <video
      ref={videoRef}
      className={`${styles.video} ${className ?? ""}`}
      muted
      autoPlay
      loop
      playsInline
      preload="none"
      poster={poster}
      // Decorative — screen readers don't need to know about it
      aria-hidden="true"
    />
  );
}
