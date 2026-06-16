import PageWrapper from "@/components/PageWrapper/PageWrapper";
import styles from "@/styles/pages.module.css";

export const metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions for BLK Lotus Productions photography and videography services — booking, payment, cancellation, copyright, and delivery policies.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <PageWrapper>
      <div className={styles.pageWrapper}>
        <div className="container">
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Terms and Conditions</h1>
            <p className={styles.pageSubtitle}>
              Please read these terms carefully before using our services.
            </p>
          </header>

          <div className={styles.termsContent}>
            <section className={styles.termsSection}>
              <h2 className={styles.termsHeading}>1. Services</h2>
              <p className={styles.termsParagraph}>
                BLK Lotus provides professional photography and videography
                services including but not limited to portrait sessions, event
                coverage, wedding photography and videography, commercial
                shoots, and post-production editing services.
              </p>
              <p className={styles.termsParagraph}>
                All services are subject to availability and scheduling. We
                recommend booking at least 4-6 weeks in advance for larger
                projects.
              </p>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.termsHeading}>2. Booking and Payment</h2>
              <p className={styles.termsParagraph}>
                A non-refundable deposit of 50% is required to secure your
                booking date. The remaining balance is due on or before the day
                of the shoot.
              </p>
              <p className={styles.termsParagraph}>
                Payment methods accepted include credit/debit cards, bank
                transfers, and approved payment platforms. All prices are quoted
                in USD.
              </p>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.termsHeading}>3. Cancellation Policy</h2>
              <p className={styles.termsParagraph}>
                Cancellations made more than 14 days before the scheduled date
                will receive a credit toward future services. Cancellations
                within 14 days will forfeit the deposit.
              </p>
              <p className={styles.termsParagraph}>
                Rescheduling is subject to availability and must be requested at
                least 7 days in advance.
              </p>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.termsHeading}>4. Copyright and Usage</h2>
              <p className={styles.termsParagraph}>
                BLK Lotus retains full copyright of all images and videos
                produced. Clients receive a license to use the materials for
                personal, non-commercial purposes unless otherwise specified in
                the contract.
              </p>
              <p className={styles.termsParagraph}>
                Commercial usage rights may be purchased separately. We reserve
                the right to use images and videos for portfolio, marketing, and
                promotional purposes.
              </p>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.termsHeading}>5. Delivery</h2>
              <p className={styles.termsParagraph}>
                Edited photos are typically delivered within 2-4 weeks of the
                shoot date. Video projects may take 4-8 weeks depending on
                complexity and length.
              </p>
              <p className={styles.termsParagraph}>
                Rush delivery is available for an additional fee. All
                deliverables are provided digitally via secure online gallery or
                file transfer.
              </p>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.termsHeading}>6. Liability</h2>
              <p className={styles.termsParagraph}>
                BLK Lotus is not responsible for any delays or failures due to
                circumstances beyond our control. In the unlikely event of
                equipment failure or unforeseen circumstances, liability is
                limited to a full refund of the services not rendered.
              </p>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.termsHeading}>7. Contact</h2>
              <p className={styles.termsParagraph}>
                For questions about these terms or our services, please contact
                us through our website contact form or email. We aim to respond
                to all inquiries within 24-48 business hours.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
