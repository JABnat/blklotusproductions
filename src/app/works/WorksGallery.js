"use client";

import { useState } from "react";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import styles from "./works.module.css";
import pageStyles from "@/styles/pages.module.css";

const works = [
  { id: 1,  title: "Spring Wedding",          medium: "photo", eventType: "wedding"        },
  { id: 2,  title: "Mountain Wedding Film",   medium: "video", eventType: "wedding"        },
  { id: 3,  title: "Short Film – Echoes",     medium: "video", eventType: "film"           },
  { id: 4,  title: "Family Reunion 2024",     medium: "photo", eventType: "family-reunion" },
  { id: 5,  title: "Music Video – Rise",      medium: "video", eventType: "music"          },
  { id: 6,  title: "Maternity Session",       medium: "photo", eventType: "maternity"      },
  { id: 7,  title: "Documentary Reel",        medium: "video", eventType: "film"           },
  { id: 8,  title: "Johnson Family Reunion",  medium: "photo", eventType: "family-reunion" },
  { id: 9,  title: "Newborn & Maternity",     medium: "photo", eventType: "maternity"      },
  { id: 10, title: "Music Video – Bloom",     medium: "video", eventType: "music"          },
  { id: 11, title: "Wedding Portraits",       medium: "photo", eventType: "wedding"        },
  { id: 12, title: "Indie Film – Roots",      medium: "video", eventType: "film"           },
];

const MEDIUM_OPTIONS  = ["all", "photo", "video"];
const EVENT_OPTIONS   = ["all", "film", "wedding", "family-reunion", "maternity", "music"];

const labelMap = {
  all:              "All",
  photo:            "Photo",
  video:            "Video",
  film:             "Film",
  wedding:          "Wedding",
  "family-reunion": "Family Reunion",
  maternity:        "Maternity",
  music:            "Music",
};

export default function WorksGallery() {
  const [medium,    setMedium]    = useState("all");
  const [eventType, setEventType] = useState("all");

  const filtered = works.filter((w) => {
    const mediumMatch = medium    === "all" || w.medium    === medium;
    const eventMatch  = eventType === "all" || w.eventType === eventType;
    return mediumMatch && eventMatch;
  });

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
                    onClick={() => setEventType(opt)}
                  >
                    {labelMap[opt]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={pageStyles.mediaContainer}>
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <div key={item.id} className={pageStyles.mediaItem}>
                  <span>{item.title}</span>
                </div>
              ))
            ) : (
              <p className={styles.noResults}>No works match the selected filters.</p>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
