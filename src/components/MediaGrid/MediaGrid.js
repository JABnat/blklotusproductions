"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import styles from "./MediaGrid.module.css";
import pageStyles from "@/styles/pages.module.css";
import BunnyVideo from "@/components/BunnyVideo/BunnyVideo";
import { thumbnailUrl } from "@/config/bunny";

export default function MediaGrid({ items, noResultsMessage }) {
  const [selected, setSelected] = useState(null);
  const pushedState  = useRef(false);
  const closeBtnRef  = useRef(null);
  const triggerRef   = useRef(null); // element that opened the lightbox

  const close = useCallback(() => {
    setSelected(null);
    if (pushedState.current) {
      pushedState.current = false;
      window.history.back();
    }
  }, []);

  const open = useCallback((item, triggerEl) => {
    triggerRef.current = triggerEl ?? null;
    setSelected(item);
    window.history.pushState({ lightbox: true }, "");
    pushedState.current = true;
  }, []);

  // Keyboard, scroll-lock, popstate, focus trap
  useEffect(() => {
    if (!selected) return;

    // Move focus into the lightbox
    closeBtnRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") { close(); return; }

      // Tab focus trap
      if (e.key === "Tab") {
        const overlay = document.getElementById("media-lightbox");
        if (!overlay) return;
        const focusable = Array.from(
          overlay.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.disabled);
        if (focusable.length === 0) { e.preventDefault(); return; }
        const first = focusable[0];
        const last  = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
          if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
        }
      }
    };

    const onPop = () => {
      pushedState.current = false;
      setSelected(null);
    };

    document.addEventListener("keydown", onKey);
    window.addEventListener("popstate", onPop);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("popstate", onPop);
      document.body.style.overflow = "";
      // Return focus to the element that opened the lightbox
      triggerRef.current?.focus();
    };
  }, [selected, close]);

  if (items.length === 0) {
    return noResultsMessage
      ? <p className={styles.noResults}>{noResultsMessage}</p>
      : null;
  }

  return (
    <>
      <div className={pageStyles.mediaContainer} role="list">
        {items.map((item) => (
          <div
            key={item.id}
            className={`${pageStyles.mediaItem} ${styles.clickable}`}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title}`}
            onClick={(e) => open(item, e.currentTarget)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open(item, e.currentTarget);
              }
            }}
          >
            {item.guid && item.medium === "video" ? (
              <>
                <img
                  src={thumbnailUrl(item.guid)}
                  alt={item.title}
                  className={styles.thumbnail}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.playIcon} aria-hidden="true">▶</div>
              </>
            ) : item.src ? (
              item.medium === "video" ? (
                <>
                  <video
                    src={item.src}
                    className={styles.thumbnail}
                    muted
                    preload="none"
                    playsInline
                    aria-hidden="true"
                  />
                  <div className={styles.playIcon} aria-hidden="true">▶</div>
                </>
              ) : (
                <img src={item.src} alt={item.title} className={styles.thumbnail} loading="lazy" decoding="async" />
              )
            ) : (
              <span>{item.title}</span>
            )}
          </div>
        ))}
      </div>

      {selected && (
        <div
          id="media-lightbox"
          className={styles.overlay}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <button
            ref={closeBtnRef}
            className={styles.closeBtn}
            onClick={close}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <div className={styles.overlayCard} onClick={(e) => e.stopPropagation()}>
            {selected.guid && selected.medium === "video" ? (
              <BunnyVideo
                guid={selected.guid}
                title={selected.title}
                className={styles.overlayVideo}
                autoActivate
              />
            ) : selected.src ? (
              selected.medium === "video" ? (
                <video
                  src={selected.src}
                  controls
                  autoPlay
                  muted
                  playsInline
                  className={styles.overlayMedia}
                />
              ) : (
                <img
                  src={selected.src}
                  alt={selected.title}
                  className={styles.overlayMedia}
                  decoding="async"
                />
              )
            ) : (
              <div className={styles.overlayPlaceholder}>
                <span className={styles.overlayTitle}>{selected.title}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
