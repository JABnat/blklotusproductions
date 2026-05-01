"use client";

import { useState } from "react";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import MediaGrid from "@/components/MediaGrid/MediaGrid";
import styles from "./works.module.css";
import pageStyles from "@/styles/pages.module.css";

const works = [
  { id: 1,  title: "Mountain Wedding",  medium: "photo", eventType: "wedding",        src: "/assets/portfolio/photos/mountianWedding.jpg"                },
  { id: 2,  title: "Family Reunion",    medium: "photo", eventType: "family-reunion", src: "/assets/portfolio/photos/familyReunion.jpg"                   },
  { id: 3,  title: "Maternity Session", medium: "photo", eventType: "maternity",      src: "/assets/portfolio/photos/maternity.jpg"                        },
  { id: 4,  title: "Maternity Session", medium: "photo", eventType: "maternity",      src: "/assets/portfolio/photos/maternity2.jpg"                       },
  { id: 5,  title: "Music Video",       medium: "photo", eventType: "music",          src: "/assets/portfolio/photos/musicVideo.jpg"                       },
  { id: 6,  title: "Music Video",       medium: "photo", eventType: "music",          src: "/assets/portfolio/photos/musivVideo2.jpg"                      },
  { id: 7,  title: "Documentary",       medium: "photo", eventType: "film",           src: "/assets/portfolio/photos/documentary.jpg"                      },
  { id: 8,  title: "Short Film",        medium: "photo", eventType: "film",           src: "/assets/portfolio/photos/shortFilm.jpg"                        },
  { id: 9,  title: "Wedding Film",      medium: "video", eventType: "wedding",        src: "/assets/portfolio/videos/7969935-uhd_4096_2160_25fps.mp4"  },
  { id: 10, title: "Music Video",       medium: "video", eventType: "music",          src: "/assets/portfolio/videos/8684480-hd_1080_1920_25fps.mp4"   },
  { id: 11, title: "Documentary",       medium: "video", eventType: "film",           src: "/assets/portfolio/videos/8912974-uhd_3840_2160_25fps.mp4"   },
  { id: 12, title: "Short Film",        medium: "video", eventType: "film",           src: "/assets/portfolio/videos/8042851-uhd_2160_4096_25fps.mp4"   },
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

          <MediaGrid
            items={filtered}
            noResultsMessage="No works match the selected filters."
          />
        </div>
      </div>
    </PageWrapper>
  );
}
