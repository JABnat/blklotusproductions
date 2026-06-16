"use client";

import { useState, useEffect, useCallback } from "react";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import BunnyVideo from "@/components/BunnyVideo/BunnyVideo";
import { VIDEO_GALLERY } from "@/config/bunny";
import styles from "./videos.module.css";
import pageStyles from "@/styles/pages.module.css";

const EVENT_OPTIONS = ["all", "concert", "community", "fashion", "indian-festival", "product-shots"];

const labelMap = {
  all:               "All",
  concert:           "Concert",
  community:         "Community",
  fashion:           "Fashion",
  "indian-festival": "Indian Festival",
  "product-shots":   "Product Shots",
};

export default function VideosGallery() {
  const [eventType, setEventType] = useState("all");
  const [lightbox,  setLightbox]  = useState(null); // { guid, title }

  const closeLightbox = useCallback(() => setLightbox(null), []);

  // Escape key + scroll-lock while lightbox is open
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === "Escape") closeLightbox(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox]);

  // Skip entries whose GUIDs haven't been filled in yet
  const configured = VIDEO_GALLERY.filter((v) => !v.guid.startsWith("REPLACE_"));
  const filtered = configured.filter(
    (v) => eventType === "all" || v.eventType === eventType
  );

  return (
    <PageWrapper>
      <div className={pageStyles.pageWrapper}>
        <div className="container">
          <header className={pageStyles.pageHeader}>
            <h1 className={pageStyles.pageTitle}>Videos</h1>
            <p className={pageStyles.pageSubtitle}>
              Cinematic storytelling that captures the essence of your moments.
            </p>
          </header>

          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Event Type</span>
              <div className={styles.pillRow}>
                {EVENT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    className={`${styles.pill} ${eventType === opt ? styles.pillActive : ""}`}
                    onClick={() => setEventType(opt)}
                    aria-pressed={eventType === opt}
                  >
                    {labelMap[opt]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className={styles.videoGrid}>
              {filtered.map((video) => (
                <BunnyVideo
                  key={video.guid}
                  guid={video.guid}
                  title={video.title}
                  poster={video.poster ?? undefined}
                  onClick={() => setLightbox({ guid: video.guid, title: video.title })}
                />
              ))}
            </div>
          ) : (
            <p className={styles.emptyState}>
              No videos match the selected filter.
            </p>
          )}
        </div>
      </div>

      {lightbox && (
        <div
          className={styles.lightboxOverlay}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Close video"
          >
            ✕
          </button>
          <div
            className={styles.lightboxCard}
            onClick={(e) => e.stopPropagation()}
          >
            <BunnyVideo
              guid={lightbox.guid}
              title={lightbox.title}
              autoActivate
            />
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
