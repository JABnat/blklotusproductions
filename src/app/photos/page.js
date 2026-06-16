import PhotosGallery from "./PhotosGallery";

export const metadata = {
  title: "Photos",
  description:
    "Browse the BLK Lotus photography portfolio — concerts, events, fashion, Indian festivals, community, and product shots.",
  alternates: {
    canonical: "/photos",
  },
  openGraph: {
    title: "Photography Portfolio | BLK Lotus Productions",
    description:
      "Concerts, events, fashion, and more — browse the full photography portfolio.",
    url: "/photos",
  },
};

export default function PhotosPage() {
  return <PhotosGallery />;
}
