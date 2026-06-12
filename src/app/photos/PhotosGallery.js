"use client";

import { useState } from "react";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import MediaGrid from "@/components/MediaGrid/MediaGrid";
import styles from "./photos.module.css";
import pageStyles from "@/styles/pages.module.css";

const photos = [
  // Concert – Ajay Krishna
  { id: 1,  title: "Ajay Krishna",                medium: "photo", eventType: "concert", concertArtist: "ajay-krishna",        src: "/assets/portfolio/photos/Concert/Ajay%20Krishna/DSC00211-Enhanced-NR.jpg" },
  // Concert – Hrithik Roshan & Mika Singh
  { id: 2,  title: "Hrithik Roshan & Mika Singh", medium: "photo", eventType: "concert", concertArtist: "hrithik-mika",        src: "/assets/portfolio/photos/Concert/Hrithik%20Roshan%20%26%20Mika%20Singh/IMG_5426-Enhanced-NR.jpg" },
  { id: 3,  title: "Hrithik Roshan & Mika Singh", medium: "photo", eventType: "concert", concertArtist: "hrithik-mika",        src: "/assets/portfolio/photos/Concert/Hrithik%20Roshan%20%26%20Mika%20Singh/IMG_5482-Enhanced-NR.jpg" },
  { id: 4,  title: "Hrithik Roshan & Mika Singh", medium: "photo", eventType: "concert", concertArtist: "hrithik-mika",        src: "/assets/portfolio/photos/Concert/Hrithik%20Roshan%20%26%20Mika%20Singh/IMG_5546-Enhanced-NR.jpg" },
  { id: 5,  title: "Hrithik Roshan & Mika Singh", medium: "photo", eventType: "concert", concertArtist: "hrithik-mika",        src: "/assets/portfolio/photos/Concert/Hrithik%20Roshan%20%26%20Mika%20Singh/IMG_5644-Enhanced-NR.jpg" },
  { id: 6,  title: "Hrithik Roshan & Mika Singh", medium: "photo", eventType: "concert", concertArtist: "hrithik-mika",        src: "/assets/portfolio/photos/Concert/Hrithik%20Roshan%20%26%20Mika%20Singh/IMG_5659-Enhanced-NR.jpg" },
  { id: 7,  title: "Hrithik Roshan & Mika Singh", medium: "photo", eventType: "concert", concertArtist: "hrithik-mika",        src: "/assets/portfolio/photos/Concert/Hrithik%20Roshan%20%26%20Mika%20Singh/IMG_5745-Enhanced-NR.jpg" },
  { id: 8,  title: "Hrithik Roshan & Mika Singh", medium: "photo", eventType: "concert", concertArtist: "hrithik-mika",        src: "/assets/portfolio/photos/Concert/Hrithik%20Roshan%20%26%20Mika%20Singh/IMG_5748-Enhanced-NR.jpg" },
  { id: 9,  title: "Hrithik Roshan & Mika Singh", medium: "photo", eventType: "concert", concertArtist: "hrithik-mika",        src: "/assets/portfolio/photos/Concert/Hrithik%20Roshan%20%26%20Mika%20Singh/IMG_5756-Enhanced-NR.jpg" },
  // Concert – Javed Ali
  { id: 10, title: "Javed Ali",                   medium: "photo", eventType: "concert", concertArtist: "javed-ali",           src: "/assets/portfolio/photos/Concert/Javed%20Ali/IMG_5369-Enhanced-NR.jpg" },
  { id: 11, title: "Javed Ali",                   medium: "photo", eventType: "concert", concertArtist: "javed-ali",           src: "/assets/portfolio/photos/Concert/Javed%20Ali/IMG_5545-Enhanced-NR.jpg" },
  { id: 12, title: "Javed Ali",                   medium: "photo", eventType: "concert", concertArtist: "javed-ali",           src: "/assets/portfolio/photos/Concert/Javed%20Ali/IMG_5611-Enhanced-NR.jpg" },
  // Concert – Khurram Iqbal
  { id: 13, title: "Khurram Iqbal",               medium: "photo", eventType: "concert", concertArtist: "khurram-iqbal",       src: "/assets/portfolio/photos/Concert/Khurram%20Iqbal/IMG_1457.jpg" },
  { id: 14, title: "Khurram Iqbal",               medium: "photo", eventType: "concert", concertArtist: "khurram-iqbal",       src: "/assets/portfolio/photos/Concert/Khurram%20Iqbal/IMG_1493.jpg" },
  { id: 15, title: "Khurram Iqbal",               medium: "photo", eventType: "concert", concertArtist: "khurram-iqbal",       src: "/assets/portfolio/photos/Concert/Khurram%20Iqbal/IMG_1497.jpg" },
  // Concert – Unnikrishnan & Uthara
  { id: 16, title: "Unnikrishnan & Uthara",       medium: "photo", eventType: "concert", concertArtist: "unnikrishnan-uthara", src: "/assets/portfolio/photos/Concert/Unnikrishnan%20%26%20Uthara/DSC00171-Enhanced-NR.jpg" },
  { id: 17, title: "Unnikrishnan & Uthara",       medium: "photo", eventType: "concert", concertArtist: "unnikrishnan-uthara", src: "/assets/portfolio/photos/Concert/Unnikrishnan%20%26%20Uthara/IMG_3372-Enhanced-NR.jpg" },
  { id: 18, title: "Unnikrishnan & Uthara",       medium: "photo", eventType: "concert", concertArtist: "unnikrishnan-uthara", src: "/assets/portfolio/photos/Concert/Unnikrishnan%20%26%20Uthara/IMG_3486-Enhanced-NR.jpg" },
  // Family Celebration
  { id: 19, title: "Family Celebration",          medium: "photo", eventType: "family-celebration", src: "/assets/portfolio/photos/Family%20Celebration/IMG_3036-2.jpg" },
  { id: 20, title: "Family Celebration",          medium: "photo", eventType: "family-celebration", src: "/assets/portfolio/photos/Family%20Celebration/IMG_3081.jpg" },
  { id: 21, title: "Family Celebration",          medium: "photo", eventType: "family-celebration", src: "/assets/portfolio/photos/Family%20Celebration/IMG_7812.jpg" },
  { id: 22, title: "Family Celebration",          medium: "photo", eventType: "family-celebration", src: "/assets/portfolio/photos/Family%20Celebration/IMG_8020.jpg" },
  { id: 23, title: "Family Celebration",          medium: "photo", eventType: "family-celebration", src: "/assets/portfolio/photos/Family%20Celebration/IMG_8030.jpg" },
  // Indian Festival
  { id: 24, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/DSC00307-Enhanced-NR.jpg" },
  { id: 25, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/DSC00312-Enhanced-NR.jpg" },
  { id: 26, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/DSC00346-Enhanced-NR.jpg" },
  { id: 27, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/DSC03143-Enhanced-NR.jpg" },
  { id: 28, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/DSC03195-Enhanced-NR.jpg" },
  { id: 29, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/DSC03577-Enhanced-NR.jpg" },
  { id: 30, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/DSC03702-Enhanced-NR.jpg" },
  { id: 31, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/DSC03710-Enhanced-NR.jpg" },
  { id: 32, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/IMG_0923.jpg" },
  { id: 33, title: "Indian Festival",             medium: "photo", eventType: "indian-festival",    src: "/assets/portfolio/photos/Indian%20Festival/IMG_0977.jpg" },
  // Senior's Photo
  { id: 34, title: "Senior's Photo",              medium: "photo", eventType: "seniors-photo",      src: "/assets/portfolio/photos/Senior%27s%20Photo/IMG_2964.jpg" },
  { id: 35, title: "Senior's Photo",              medium: "photo", eventType: "seniors-photo",      src: "/assets/portfolio/photos/Senior%27s%20Photo/IMG_5612.jpg" },
  { id: 36, title: "Senior's Photo",              medium: "photo", eventType: "seniors-photo",      src: "/assets/portfolio/photos/Senior%27s%20Photo/IMG_5863.jpg" },
  { id: 37, title: "Senior's Photo",              medium: "photo", eventType: "seniors-photo",      src: "/assets/portfolio/photos/Senior%27s%20Photo/IMG_6017.jpg" },
  { id: 38, title: "Senior's Photo",              medium: "photo", eventType: "seniors-photo",      src: "/assets/portfolio/photos/Senior%27s%20Photo/IMG_6019.jpg" },
  { id: 39, title: "Senior's Photo",              medium: "photo", eventType: "seniors-photo",      src: "/assets/portfolio/photos/Senior%27s%20Photo/IMG_6063.jpg" },
  // Sweet 16th
  { id: 40, title: "Sweet 16th",                  medium: "photo", eventType: "sweet-16th",         src: "/assets/portfolio/photos/Sweet%2016th/IMG_0170-Enhanced-NR.jpg" },
  { id: 41, title: "Sweet 16th",                  medium: "photo", eventType: "sweet-16th",         src: "/assets/portfolio/photos/Sweet%2016th/IMG_0340.jpg" },
  { id: 42, title: "Sweet 16th",                  medium: "photo", eventType: "sweet-16th",         src: "/assets/portfolio/photos/Sweet%2016th/IMG_8450-Enhanced-NR.jpg" },
  { id: 43, title: "Sweet 16th",                  medium: "photo", eventType: "sweet-16th",         src: "/assets/portfolio/photos/Sweet%2016th/IMG_9296.jpg" },
];

const EVENT_OPTIONS = ["all", "concert", "family-celebration", "indian-festival", "seniors-photo", "sweet-16th"];

const CONCERT_ARTIST_OPTIONS = [
  "all",
  "ajay-krishna",
  "hrithik-mika",
  "javed-ali",
  "khurram-iqbal",
  "unnikrishnan-uthara",
];

const labelMap = {
  all:                   "All",
  concert:               "Concert",
  "family-celebration":  "Family Celebration",
  "indian-festival":     "Indian Festival",
  "seniors-photo":       "Senior's Photo",
  "sweet-16th":          "Sweet 16th",
  "ajay-krishna":        "Ajay Krishna",
  "hrithik-mika":        "Hrithik Roshan & Mika Singh",
  "javed-ali":           "Javed Ali",
  "khurram-iqbal":       "Khurram Iqbal",
  "unnikrishnan-uthara": "Unnikrishnan & Uthara",
};

export default function PhotosGallery() {
  const [eventType,     setEventType]     = useState("all");
  const [concertArtist, setConcertArtist] = useState("all");

  function handleEventType(opt) {
    setEventType(opt);
    setConcertArtist("all");
  }

  const filtered = photos.filter((p) => {
    const eventMatch  = eventType === "all" || p.eventType === eventType;
    const artistMatch =
      eventType !== "concert" ||
      concertArtist === "all" ||
      p.concertArtist === concertArtist;
    return eventMatch && artistMatch;
  });

  return (
    <PageWrapper>
      <div className={pageStyles.pageWrapper}>
        <div className="container">
          <header className={pageStyles.pageHeader}>
            <h1 className={pageStyles.pageTitle}>Photos</h1>
            <p className={pageStyles.pageSubtitle}>
              Timeless imagery that captures your most precious moments.
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

          <MediaGrid
            items={filtered}
            noResultsMessage="No photos match the selected filter."
          />
        </div>
      </div>
    </PageWrapper>
  );
}
