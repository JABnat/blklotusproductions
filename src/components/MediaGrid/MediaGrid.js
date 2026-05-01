"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./MediaGrid.module.css";
import pageStyles from "@/styles/pages.module.css";

export default function MediaGrid({ items, noResultsMessage }) {
  const [selected, setSelected] = useState(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close]);

  if (items.length === 0) {
    return noResultsMessage
      ? <p className={styles.noResults}>{noResultsMessage}</p>
      : null;
  }

  return (
    <>
      <div className={pageStyles.mediaContainer}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`${pageStyles.mediaItem} ${styles.clickable}`}
            onClick={() => setSelected(item)}
          >
            {item.src ? (
              item.medium === "video" ? (
                <>
                  <video src={item.src} className={styles.thumbnail} muted preload="metadata" />
                  <div className={styles.playIcon}>▶</div>
                </>
              ) : (
                <img src={item.src} alt={item.title} className={styles.thumbnail} />
              )
            ) : (
              <span>{item.title}</span>
            )}
          </div>
        ))}
      </div>

      {selected && (
        <div className={styles.overlay} onClick={close}>
          <div className={styles.overlayCard} onClick={(e) => e.stopPropagation()}>
            {selected.src ? (
              selected.medium === "video" ? (
                <video
                  src={selected.src}
                  controls
                  autoPlay
                  className={styles.overlayMedia}
                />
              ) : (
                <img
                  src={selected.src}
                  alt={selected.title}
                  className={styles.overlayMedia}
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
