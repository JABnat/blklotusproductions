"use client";

import { useState } from "react";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import MediaGrid from "@/components/MediaGrid/MediaGrid";
import styles from "./works.module.css";
import pageStyles from "@/styles/pages.module.css";

const works = [
  // Concert – Ajay Krishna
  { id: 1,  title: "Ajay Krishna",                medium: "photo", eventType: "concert", concertArtist: "ajay-krishna",         src: "/assets/portfolio/photos/Concert/Ajay%20Krishna/DSC00211-Enhanced-NR.jpg" },
  // Concert – Hrithik Roshan & Mika Singh
  { id: 2,  title: "Hrithik Roshan & Mika Singh", medium: "photo", eventType: "concert", concertArtist: "hrithik-mika",         src: "/assets/portfolio/photos/Concert/Hrithik%20Roshan%20%26%20Mika%20Singh/IMG_5426-Enhanced-NR.jpg" },
  { id: 3,  title: "Hrithik Roshan & Mika Singh", medium: "photo", eventType: "concert", concertArtist: "hrithik-mika",         src: "/assets/portfolio/photos/Concert/Hrithik%20Roshan%20%26%20Mika%20Singh/IMG_5482-Enhanced-NR.jpg" },
  { id: 4,  title: "Hrithik Roshan & Mika Singh", medium: "photo", eventType: "concert", concertArtist: "hrithik-mika",         src: "/assets/portfolio/photos/Concert/Hrithik%20Roshan%20%26%20Mika%20Singh/IMG_5546-Enhanced-NR.jpg" },
  { id: 5,  title: "Hrithik Roshan & Mika Singh", medium: "photo", eventType: "concert", concertArtist: "hrithik-mika",         src: "/assets/portfolio/photos/Concert/Hrithik%20Roshan%20%26%20Mika%20Singh/IMG_5644-Enhanced-NR.jpg" },
  { id: 6,  title: "Hrithik Roshan & Mika Singh", medium: "photo", eventType: "concert", concertArtist: "hrithik-mika",         src: "/assets/portfolio/photos/Concert/Hrithik%20Roshan%20%26%20Mika%20Singh/IMG_5659-Enhanced-NR.jpg" },
  { id: 7,  title: "Hrithik Roshan & Mika Singh", medium: "photo", eventType: "concert", concertArtist: "hrithik-mika",         src: "/assets/portfolio/photos/Concert/Hrithik%20Roshan%20%26%20Mika%20Singh/IMG_5745-Enhanced-NR.jpg" },
  { id: 8,  title: "Hrithik Roshan & Mika Singh", medium: "photo", eventType: "concert", concertArtist: "hrithik-mika",         src: "/assets/portfolio/photos/Concert/Hrithik%20Roshan%20%26%20Mika%20Singh/IMG_5748-Enhanced-NR.jpg" },
  { id: 9,  title: "Hrithik Roshan & Mika Singh", medium: "photo", eventType: "concert", concertArtist: "hrithik-mika",         src: "/assets/portfolio/photos/Concert/Hrithik%20Roshan%20%26%20Mika%20Singh/IMG_5756-Enhanced-NR.jpg" },
  // Concert – Javed Ali
  { id: 17, title: "Javed Ali",                   medium: "photo", eventType: "concert", concertArtist: "javed-ali",            src: "/assets/portfolio/photos/Concert/Javed%20Ali/IMG_5369-Enhanced-NR.jpg" },
  { id: 18, title: "Javed Ali",                   medium: "photo", eventType: "concert", concertArtist: "javed-ali",            src: "/assets/portfolio/photos/Concert/Javed%20Ali/IMG_5545-Enhanced-NR.jpg" },
  { id: 19, title: "Javed Ali",                   medium: "photo", eventType: "concert", concertArtist: "javed-ali",            src: "/assets/portfolio/photos/Concert/Javed%20Ali/IMG_5611-Enhanced-NR.jpg" },
  // Concert – Khurram Iqbal
  { id: 20, title: "Khurram Iqbal",               medium: "photo", eventType: "concert", concertArtist: "khurram-iqbal",        src: "/assets/portfolio/photos/Concert/Khurram%20Iqbal/IMG_1457.jpg" },
  { id: 21, title: "Khurram Iqbal",               medium: "photo", eventType: "concert", concertArtist: "khurram-iqbal",        src: "/assets/portfolio/photos/Concert/Khurram%20Iqbal/IMG_1493.jpg" },
  { id: 22, title: "Khurram Iqbal",               medium: "photo", eventType: "concert", concertArtist: "khurram-iqbal",        src: "/assets/portfolio/photos/Concert/Khurram%20Iqbal/IMG_1497.jpg" },
  // Concert – Unnikrishnan & Uthara
  { id: 23, title: "Unnikrishnan & Uthara",       medium: "photo", eventType: "concert", concertArtist: "unnikrishnan-uthara",  src: "/assets/portfolio/photos/Concert/Unnikrishnan%20%26%20Uthara/DSC00171-Enhanced-NR.jpg" },
  { id: 24, title: "Unnikrishnan & Uthara",       medium: "photo", eventType: "concert", concertArtist: "unnikrishnan-uthara",  src: "/assets/portfolio/photos/Concert/Unnikrishnan%20%26%20Uthara/IMG_3372-Enhanced-NR.jpg" },
  { id: 25, title: "Unnikrishnan & Uthara",       medium: "photo", eventType: "concert", concertArtist: "unnikrishnan-uthara",  src: "/assets/portfolio/photos/Concert/Unnikrishnan%20%26%20Uthara/IMG_3486-Enhanced-NR.jpg" },
  // Family Celebration
  { id: 26, title: "Family Celebration",          medium: "photo", eventType: "family-celebration", src: "/assets/portfolio/photos/Family%20Celebration/IMG_3036-2.jpg" },
  { id: 27, title: "Family Celebration",          medium: "photo", eventType: "family-celebration", src: "/assets/portfolio/photos/Family%20Celebration/IMG_3081.jpg" },
  { id: 28, title: "Family Celebration",          medium: "photo", eventType: "family-celebration", src: "/assets/portfolio/photos/Family%20Celebration/IMG_7812.jpg" },
  { id: 29, title: "Family Celebration",          medium: "photo", eventType: "family-celebration", src: "/assets/portfolio/photos/Family%20Celebration/IMG_8020.jpg" },
  { id: 30, title: "Family Celebration",          medium: "photo", eventType: "family-celebration", src: "/assets/portfolio/photos/Family%20Celebration/IMG_8030.jpg" },
  // Indian Festival
  { id: 31, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/DSC00307-Enhanced-NR.jpg" },
  { id: 32, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/DSC00312-Enhanced-NR.jpg" },
  { id: 33, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/DSC00346-Enhanced-NR.jpg" },
  { id: 34, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/DSC03143-Enhanced-NR.jpg" },
  { id: 35, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/DSC03195-Enhanced-NR.jpg" },
  { id: 36, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/DSC03577-Enhanced-NR.jpg" },
  { id: 37, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/DSC03702-Enhanced-NR.jpg" },
  { id: 38, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/DSC03710-Enhanced-NR.jpg" },
  { id: 39, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/IMG_0923.jpg" },
  { id: 40, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/IMG_0977.jpg" },
  // Senior's Photo
  { id: 41, title: "Senior's Photo",              medium: "photo", eventType: "seniors-photo",      src: "/assets/portfolio/photos/Senior%27s%20Photo/IMG_2964.jpg" },
  { id: 42, title: "Senior's Photo",              medium: "photo", eventType: "seniors-photo",      src: "/assets/portfolio/photos/Senior%27s%20Photo/IMG_5612.jpg" },
  { id: 43, title: "Senior's Photo",              medium: "photo", eventType: "seniors-photo",      src: "/assets/portfolio/photos/Senior%27s%20Photo/IMG_5863.jpg" },
  { id: 44, title: "Senior's Photo",              medium: "photo", eventType: "seniors-photo",      src: "/assets/portfolio/photos/Senior%27s%20Photo/IMG_6017.jpg" },
  { id: 45, title: "Senior's Photo",              medium: "photo", eventType: "seniors-photo",      src: "/assets/portfolio/photos/Senior%27s%20Photo/IMG_6019.jpg" },
  { id: 46, title: "Senior's Photo",              medium: "photo", eventType: "seniors-photo",      src: "/assets/portfolio/photos/Senior%27s%20Photo/IMG_6063.jpg" },
  // Sweet 16th
  { id: 47, title: "Sweet 16th",                  medium: "photo", eventType: "sweet-16th",         src: "/assets/portfolio/photos/Sweet%2016th/IMG_0170-Enhanced-NR.jpg" },
  { id: 48, title: "Sweet 16th",                  medium: "photo", eventType: "sweet-16th",         src: "/assets/portfolio/photos/Sweet%2016th/IMG_0340.jpg" },
  { id: 49, title: "Sweet 16th",                  medium: "photo", eventType: "sweet-16th",         src: "/assets/portfolio/photos/Sweet%2016th/IMG_8450-Enhanced-NR.jpg" },
  { id: 50, title: "Sweet 16th",                  medium: "photo", eventType: "sweet-16th",         src: "/assets/portfolio/photos/Sweet%2016th/IMG_9296.jpg" },
  // IG Reels – Community
  { id: 55, title: "Birthday Benefit Concert",           medium: "video", eventType: "community",       src: "/assets/portfolio/videos/IG%20REELS/Community/BIRTHDAY%20BENEFIT%20CONCERT%20(V1).mp4" },
  { id: 56, title: "Redlands Community",                 medium: "video", eventType: "community",       src: "/assets/portfolio/videos/IG%20REELS/Community/Redlands%20Community.mp4" },
  { id: 57, title: "VAPA",                               medium: "video", eventType: "community",       src: "/assets/portfolio/videos/IG%20REELS/Community/VAPA.mp4" },
  // IG Reels – Concert Event
  { id: 58, title: "A Concert for Altadena",             medium: "video", eventType: "concert",         src: "/assets/portfolio/videos/IG%20REELS/Concert%20Event/A%20Concert%20for%20Altadena%20(IG%20Highlight).mp4" },
  { id: 59, title: "BTS Concert",                        medium: "video", eventType: "concert",         src: "/assets/portfolio/videos/IG%20REELS/Concert%20Event/BTS%20Concert%20ig.mp4" },
  { id: 60, title: "Javed Ali",                          medium: "video", eventType: "concert",         concertArtist: "javed-ali", src: "/assets/portfolio/videos/IG%20REELS/Concert%20Event/Javed%20Ali%20IG.mp4" },
  // IG Reels – Fashion
  { id: 61, title: "LA Fashion Promo",                   medium: "video", eventType: "fashion",         src: "/assets/portfolio/videos/IG%20REELS/Fashion/IG%20PROMO%20LA%20FASHION%201.mp4" },
  { id: 62, title: "LA Fashion",                         medium: "video", eventType: "fashion",         src: "/assets/portfolio/videos/IG%20REELS/Fashion/LA%20Fashion%20IG.mp4" },
  // IG Reels – Indian Festival
  { id: 63, title: "Holi",                               medium: "video", eventType: "indian-festival",  src: "/assets/portfolio/videos/IG%20REELS/Indian%20Festival/Holi%20IG.mp4" },
  { id: 64, title: "Mela Teeyan Da 2024",                medium: "video", eventType: "indian-festival",  src: "/assets/portfolio/videos/IG%20REELS/Indian%20Festival/IG%20MELA%20TEEYAN%20DA%202024.mp4" },
  // IG Reels – Product Shots
  { id: 65, title: "300C",                               medium: "video", eventType: "product-shots",   src: "/assets/portfolio/videos/IG%20REELS/Product%20Shots/300C.mov" },
  { id: 66, title: "Air Force 1",                        medium: "video", eventType: "product-shots",   src: "/assets/portfolio/videos/IG%20REELS/Product%20Shots/Air%20Force%201.mov" },
  { id: 67, title: "Fujifilm",                           medium: "video", eventType: "product-shots",   src: "/assets/portfolio/videos/IG%20REELS/Product%20Shots/Fujifilm.mov" },
  { id: 68, title: "Patent Bred",                        medium: "video", eventType: "product-shots",   src: "/assets/portfolio/videos/IG%20REELS/Product%20Shots/Patent%20Bred.mov" },
  { id: 69, title: "Retro Pine Green",                   medium: "video", eventType: "product-shots",   src: "/assets/portfolio/videos/IG%20REELS/Product%20Shots/Retro%20Pine%20Green.mov" },
  { id: 70, title: "Sutefoto",                           medium: "video", eventType: "product-shots",   src: "/assets/portfolio/videos/IG%20REELS/Product%20Shots/Sutefoto.mov" },
  { id: 71, title: "ZGCine Charger",                     medium: "video", eventType: "product-shots",   src: "/assets/portfolio/videos/IG%20REELS/Product%20Shots/ZGCine%20charger.mov" },
  { id: 72, title: "ZGcine",                             medium: "video", eventType: "product-shots",   src: "/assets/portfolio/videos/IG%20REELS/Product%20Shots/ZGcine.mov" },
  { id: 73, title: "Angela",                             medium: "video", eventType: "community",       src: "/assets/portfolio/videos/IG%20REELS/Community/IG%20ANGELA.mp4" },
];

const MEDIUM_OPTIONS = ["all", "photo", "video"];
const EVENT_OPTIONS  = ["all", "concert", "community", "family-celebration", "fashion", "indian-festival", "product-shots", "seniors-photo", "sweet-16th"];

const CONCERT_ARTIST_OPTIONS = [
  "all",
  "ajay-krishna",
  "hrithik-mika",
  "javed-ali",
  "khurram-iqbal",
  "unnikrishnan-uthara",
];

const labelMap = {
  all:                    "All",
  photo:                  "Photo",
  video:                  "Video",
  concert:                "Concert",
  "family-celebration":   "Family Celebration",
  "indian-festival":      "Indian Festival",
  "seniors-photo":        "Senior's Photo",
  "sweet-16th":           "Sweet 16th",
  community:              "Community",
  fashion:                "Fashion",
  "product-shots":        "Product Shots",
  "ajay-krishna":         "Ajay Krishna",
  "hrithik-mika":         "Hrithik Roshan & Mika Singh",
  "javed-ali":            "Javed Ali",
  "khurram-iqbal":        "Khurram Iqbal",
  "unnikrishnan-uthara":  "Unnikrishnan & Uthara",
};

export default function WorksGallery() {
  const [medium,        setMedium]        = useState("all");
  const [eventType,     setEventType]     = useState("all");
  const [concertArtist, setConcertArtist] = useState("all");

  function handleEventType(opt) {
    setEventType(opt);
    setConcertArtist("all");
  }

  const filtered = works.filter((w) => {
    const mediumMatch = medium    === "all" || w.medium    === medium;
    const eventMatch  = eventType === "all" || w.eventType === eventType;
    const artistMatch =
      eventType !== "concert" ||
      concertArtist === "all" ||
      w.concertArtist === concertArtist;
    return mediumMatch && eventMatch && artistMatch;
  });

  function groupByEventType(items) {
    const order = [];
    const map = {};
    for (const item of items) {
      if (!map[item.eventType]) {
        map[item.eventType] = [];
        order.push(item.eventType);
      }
      map[item.eventType].push(item);
    }
    return order.map((key) => ({ key, items: map[key] }));
  }

  return (
    <PageWrapper>
      <div className={pageStyles.pageWrapper}>
        <div className="container">
          <header className={pageStyles.pageHeader}>
            <h1 className={pageStyles.pageTitle}>All Works</h1>
            <p className={pageStyles.pageSubtitle}>
              Photography and videography from every milestone.
            </p>
          </header>

          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Medium</span>
              <div className={styles.pillRow}>
                {MEDIUM_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    className={`${styles.pill} ${medium === opt ? styles.pillActive : ""}`}
                    onClick={() => setMedium(opt)}
                  >
                    {labelMap[opt]}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Event Type</span>
              <div className={styles.pillRow}>
                {EVENT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    className={`${styles.pill} ${eventType === opt ? styles.pillActive : ""}`}
                    onClick={() => handleEventType(opt)}
                  >
                    {labelMap[opt]}
                  </button>
                ))}
              </div>
            </div>

            {eventType === "concert" && (
              <div className={styles.filterGroup}>
                <span className={styles.filterLabel}>Artist</span>
                <div className={styles.pillRow}>
                  {CONCERT_ARTIST_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      className={`${styles.pill} ${concertArtist === opt ? styles.pillActive : ""}`}
                      onClick={() => setConcertArtist(opt)}
                    >
                      {labelMap[opt]}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {eventType === "all" ? (
            groupByEventType(filtered).map((group) => (
              <div key={group.key}>
                <div className={styles.sectionDivider}>
                  <span className={styles.sectionDividerLabel}>{labelMap[group.key]}</span>
                </div>
                <MediaGrid items={group.items} />
              </div>
            ))
          ) : (
            <MediaGrid
              items={filtered}
              noResultsMessage="No works match the selected filters."
            />
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
