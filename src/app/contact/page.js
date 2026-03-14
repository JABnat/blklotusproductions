import PageWrapper from "@/components/PageWrapper/PageWrapper";
import styles from "@/styles/pages.module.css";

export const metadata = {
  title: "Contact | BLK Lotus",
  description:
    "Get in touch with BLK Lotus for your photography and videography needs.",
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className={styles.pageWrapper}>
        <div className="container">
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Contact Us</h1>
            <p className={styles.pageSubtitle}>
              Ready to start your project? We&rsquo;d love to hear from you.
            </p>
          </header>

          <div className={styles.formContainer}>
            <form>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.formInput}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="phone">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={styles.formInput}
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="service">
                  Service Interested In
                </label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  className={styles.formInput}
                  placeholder="e.g., Wedding Photography, Video Production"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.formTextarea}
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
