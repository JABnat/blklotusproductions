import PageWrapper from "@/components/PageWrapper/PageWrapper";
import MediaGrid from "@/components/MediaGrid/MediaGrid";
import styles from "@/styles/pages.module.css";

export const metadata = {
  title: "Videos | BLK Lotus",
  description:
    "Explore our video portfolio - Wedding films, promotional videos, documentaries and more.",
};

const videos = [
  { id: 1, title: "Wedding Film",      medium: "video", eventType: "wedding", src: "https://pub-e4760729ae4d4888ae3db5933e7300d8.r2.dev/7969935-uhd_4096_2160_25fps.mp4"  },
  { id: 2, title: "Music Video",       medium: "video", eventType: "music",   src: "https://pub-e4760729ae4d4888ae3db5933e7300d8.r2.dev/8684480-hd_1080_1920_25fps.mp4"   },
  { id: 3, title: "Documentary",       medium: "video", eventType: "film",    src: "https://pub-e4760729ae4d4888ae3db5933e7300d8.r2.dev/8912974-uhd_3840_2160_25fps.mp4"   },
  { id: 4, title: "Short Film",        medium: "video", eventType: "film",    src: "https://pub-e4760729ae4d4888ae3db5933e7300d8.r2.dev/8042851-uhd_2160_4096_25fps.mp4"   },
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
          <MediaGrid items={videos} />
        </div>
      </div>
    </PageWrapper>
  );
}
