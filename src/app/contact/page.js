import ContactContent from "./ContactContent";

export const metadata = {
  title: "Contact",
  description:
    "Book a photography or videography session with BLK Lotus Productions. Based in San Luis Obispo, CA — available nationwide.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact BLK Lotus Productions",
    description:
      "Book a photography or videography session. Based in San Luis Obispo, CA — available nationwide.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
