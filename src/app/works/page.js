import WorksGallery from "./WorksGallery";

export const metadata = {
  title: "Works",
  description:
    "Explore the complete BLK Lotus portfolio — photography and video across concerts, events, fashion, community, and more.",
  alternates: {
    canonical: "/works",
  },
  openGraph: {
    title: "Portfolio | BLK Lotus Productions",
    description:
      "The full portfolio — photography and video across concerts, fashion, community events, and more.",
    url: "/works",
  },
};

export default function WorksPage() {
  return <WorksGallery />;
}
