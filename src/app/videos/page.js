import PageWrapper from "@/components/PageWrapper/PageWrapper";
import styles from "@/styles/pages.module.css";

export const metadata = {
  title: "Videos | BLK Lotus",
  description:
    "Explore our video portfolio - Wedding films, promotional videos, documentaries and more.",
};

const videos = [
  { id: 1, title: "Mountain Wedding Film" },
  { id: 2, title: "Brand Documentary" },
  { id: 3, title: "Event Highlights Reel" },
  { id: 4, title: "Music Video Production" },
  { id: 5, title: "Corporate Promo" },
  { id: 6, title: "Engagement Story" },
  { id: 7, title: "Product Launch" },
  { id: 8, title: "Travel Documentary" },
  { id: 9, title: "Anniversary Film" },
];

export default function VideosPage() {
  return (
    <PageWrapper>
      <div className={styles.pageWrapper}>
        <div className="container">
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Videos</h1>
            <p className={styles.pageSubtitle}>
              Cinematic storytelling that captures the essence of your moments.
            </p>
          </header>

          <div className={styles.mediaContainer}>
            {videos.map((video) => (
              <div key={video.id} className={styles.mediaItem}>
                {/* Placeholder video - replace with actual content */}
                <span>Placeholder Video: {video.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
