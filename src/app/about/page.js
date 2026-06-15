import PageWrapper from "@/components/PageWrapper/PageWrapper";
import styles from "@/styles/pages.module.css";

export const metadata = {
  title: "About",
  description:
    "Learn about BLK Lotus Productions — a creative visual studio based in San Luis Obispo, California, specializing in cinematic photography and videography.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About BLK Lotus Productions",
    description:
      "A creative visual studio based in San Luis Obispo, CA. Photography, videography, and brand content — available nationwide.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className={styles.pageWrapper}>
        <div className="container">
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>About Us</h1>
            <p className={styles.pageSubtitle}>
              Passionate storytellers bringing your vision to life through the
              lens.
            </p>
          </header>

          <div className={styles.aboutContent}>
            <div className={styles.aboutImage}>
              {/* Placeholder image - replace with actual portrait */}
              Placeholder Portrait
            </div>
            <div className={styles.aboutText}>
              <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Our Story</h2>
                <p className={styles.sectionText}>
                  BLK Lotus was founded with a simple mission: to capture the
                  beauty in every moment. Based in San Luis Obispo, California,
                  we specialize in photography and videography that tells your
                  unique story with creativity, passion, and professional
                  excellence.
                </p>
              </section>

              <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Our Approach</h2>
                <p className={styles.sectionText}>
                  We believe every project is unique. Whether it&rsquo;s a
                  wedding, corporate event, brand campaign, or personal portrait
                  session, we take the time to understand your vision and bring
                  it to life with attention to detail and artistic flair.
                </p>
              </section>

              <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Why Choose Us</h2>
                <p className={styles.sectionText}>
                  With years of experience and a portfolio spanning diverse
                  projects, we bring technical expertise and creative vision to
                  every shoot. We&rsquo;re committed to delivering exceptional
                  results that exceed your expectations.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
