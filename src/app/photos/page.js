import PageWrapper from "@/components/PageWrapper/PageWrapper";
import styles from "@/styles/pages.module.css";

export const metadata = {
  title: "Photos | BLK Lotus",
  description:
    "Browse our photography portfolio - Portraits, events, products, and lifestyle photography.",
};

const photos = [
  { id: 1, title: "Portrait Session" },
  { id: 2, title: "Wedding Photography" },
  { id: 3, title: "Product Shoot" },
  { id: 4, title: "Lifestyle Photography" },
  { id: 5, title: "Corporate Headshots" },
  { id: 6, title: "Event Coverage" },
  { id: 7, title: "Fashion Editorial" },
  { id: 8, title: "Real Estate Photography" },
  { id: 9, title: "Nature & Landscape" },
  { id: 10, title: "Golden Hour Portraits" },
  { id: 11, title: "Engagement Session" },
  { id: 12, title: "Brand Photography" },
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

          <div className={styles.mediaContainer}>
            {photos.map((photo) => (
              <div key={photo.id} className={styles.mediaItem}>
                {/* Placeholder image - replace with actual content */}
                <span>Placeholder Image: {photo.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
