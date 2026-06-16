import VideosGallery from "./VideosGallery";

export const metadata = {
  title: "Videos",
  description:
    "Watch the BLK Lotus video portfolio — concert event reels, community coverage, fashion, Indian festival highlights, and product shots.",
  alternates: {
    canonical: "/videos",
  },
  openGraph: {
    title: "Video Portfolio | BLK Lotus Productions",
    description:
      "Cinematic reels spanning concerts, community, fashion, and more — watch the full video portfolio.",
    url: "/videos",
  },
};

export default function VideosPage() {
  return <VideosGallery />;
}
