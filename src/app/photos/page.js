import PageWrapper from "@/components/PageWrapper/PageWrapper";
import MediaGrid from "@/components/MediaGrid/MediaGrid";
import styles from "@/styles/pages.module.css";

export const metadata = {
  title: "Photos | BLK Lotus",
  description:
    "Browse our photography portfolio - Portraits, events, products, and lifestyle photography.",
};

const photos = [
  { id: 1, title: "Mountain Wedding",   medium: "photo", eventType: "wedding",        src: "/assets/portfolio/photos/mountianWedding.jpg" },
  { id: 2, title: "Family Reunion",     medium: "photo", eventType: "family-reunion", src: "/assets/portfolio/photos/familyReunion.jpg"   },
  { id: 3, title: "Maternity Session",  medium: "photo", eventType: "maternity",      src: "/assets/portfolio/photos/maternity.jpg"        },
  { id: 4, title: "Maternity Session",  medium: "photo", eventType: "maternity",      src: "/assets/portfolio/photos/maternity2.jpg"       },
  { id: 5, title: "Music Video",        medium: "photo", eventType: "music",          src: "/assets/portfolio/photos/musicVideo.jpg"       },
  { id: 6, title: "Music Video",        medium: "photo", eventType: "music",          src: "/assets/portfolio/photos/musivVideo2.jpg"      },
  { id: 7, title: "Documentary",        medium: "photo", eventType: "film",           src: "/assets/portfolio/photos/documentary.jpg"      },
  { id: 8, title: "Short Film",         medium: "photo", eventType: "film",           src: "/assets/portfolio/photos/shortFilm.jpg"        },
];

export default function PhotosPage() {
  return (
    <PageWrapper>
      <div className={styles.pageWrapper}>
        <div className="container">
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Photos</h1>
            <p className={styles.pageSubtitle}>
              Timeless imagery that captures your most precious moments.
            </p>
          </header>
          <MediaGrid items={photos} />
        </div>
      </div>
    </PageWrapper>
  );
}
