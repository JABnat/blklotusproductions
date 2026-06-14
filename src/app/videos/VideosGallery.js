"use client";

import { useState } from "react";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import MediaGrid from "@/components/MediaGrid/MediaGrid";
import styles from "./videos.module.css";
import pageStyles from "@/styles/pages.module.css";

const videos = [
  // IG Reels – Community
  { id: 5,  title: "Birthday Benefit Concert", medium: "video", eventType: "community",       src: "/assets/portfolio/videos/IG%20REELS/Community/BIRTHDAY%20BENEFIT%20CONCERT%20(V1).mp4" },
  { id: 6,  title: "Redlands Community",       medium: "video", eventType: "community",       src: "/assets/portfolio/videos/IG%20REELS/Community/Redlands%20Community.mp4" },
  { id: 7,  title: "VAPA",                     medium: "video", eventType: "community",       src: "/assets/portfolio/videos/IG%20REELS/Community/VAPA.mp4" },
  { id: 8,  title: "Angela",                   medium: "video", eventType: "community",       src: "/assets/portfolio/videos/IG%20REELS/Community/IG%20ANGELA.mp4" },
  // IG Reels – Concert Event
  { id: 9,  title: "A Concert for Altadena",   medium: "video", eventType: "concert",         src: "/assets/portfolio/videos/IG%20REELS/Concert%20Event/A%20Concert%20for%20Altadena%20(IG%20Highlight).mp4" },
  { id: 10, title: "BTS Concert",              medium: "video", eventType: "concert",         src: "/assets/portfolio/videos/IG%20REELS/Concert%20Event/BTS%20Concert%20ig.mp4" },
  { id: 11, title: "Javed Ali",                medium: "video", eventType: "concert",         src: "/assets/portfolio/videos/IG%20REELS/Concert%20Event/Javed%20Ali%20IG.mp4" },
  // IG Reels – Fashion
  { id: 12, title: "LA Fashion Promo",         medium: "video", eventType: "fashion",         src: "/assets/portfolio/videos/IG%20REELS/Fashion/IG%20PROMO%20LA%20FASHION%201.mp4" },
  { id: 13, title: "LA Fashion",               medium: "video", eventType: "fashion",         src: "/assets/portfolio/videos/IG%20REELS/Fashion/LA%20Fashion%20IG.mp4" },
  // IG Reels – Indian Festival
  { id: 14, title: "Holi",                     medium: "video", eventType: "indian-festival", src: "/assets/portfolio/videos/IG%20REELS/Indian%20Festival/Holi%20IG.mp4" },
  { id: 15, title: "Mela Teeyan Da 2024",      medium: "video", eventType: "indian-festival", src: "/assets/portfolio/videos/IG%20REELS/Indian%20Festival/IG%20MELA%20TEEYAN%20DA%202024.mp4" },
  // IG Reels – Product Shots
  { id: 16, title: "300C",                     medium: "video", eventType: "product-shots",   src: "/assets/portfolio/videos/IG%20REELS/Product%20Shots/300C.mov" },
  { id: 17, title: "Air Force 1",              medium: "video", eventType: "product-shots",   src: "/assets/portfolio/videos/IG%20REELS/Product%20Shots/Air%20Force%201.mov" },
  { id: 18, title: "Fujifilm",                 medium: "video", eventType: "product-shots",   src: "/assets/portfolio/videos/IG%20REELS/Product%20Shots/Fujifilm.mov" },
  { id: 19, title: "Patent Bred",              medium: "video", eventType: "product-shots",   src: "/assets/portfolio/videos/IG%20REELS/Product%20Shots/Patent%20Bred.mov" },
  { id: 20, title: "Retro Pine Green",         medium: "video", eventType: "product-shots",   src: "/assets/portfolio/videos/IG%20REELS/Product%20Shots/Retro%20Pine%20Green.mov" },
  { id: 21, title: "Sutefoto",                 medium: "video", eventType: "product-shots",   src: "/assets/portfolio/videos/IG%20REELS/Product%20Shots/Sutefoto.mov" },
  { id: 22, title: "ZGCine Charger",           medium: "video", eventType: "product-shots",   src: "/assets/portfolio/videos/IG%20REELS/Product%20Shots/ZGCine%20charger.mov" },
  { id: 23, title: "ZGcine",                   medium: "video", eventType: "product-shots",   src: "/assets/portfolio/videos/IG%20REELS/Product%20Shots/ZGcine.mov" },
];

const EVENT_OPTIONS = ["all", "concert", "community", "fashion", "indian-festival", "product-shots"];

const labelMap = {
  all:                 "All",
  concert:             "Concert",
  community:           "Community",
  fashion:             "Fashion",
  "indian-festival":   "Indian Festival",
  "product-shots":     "Product Shots",
};

export default function VideosGallery() {
  const [eventType, setEventType] = useState("all");

  const filtered = videos.filter(
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

          <MediaGrid
            items={filtered}
            noResultsMessage="No videos match the selected filter."
          />
        </div>
      </div>
    </PageWrapper>
  );
}
