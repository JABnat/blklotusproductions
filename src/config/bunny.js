// ─────────────────────────────────────────────────────────────────────────────
// Bunny Stream — central configuration
//
// Where to find each value in the Bunny dashboard:
//   Library ID  →  Stream → Your Library → Library Settings → "Library ID"
//   Pull Zone   →  Stream → Your Library → Library Settings → "Pull Zone" hostname
//   Video GUID  →  Stream → Your Library → click any video →
//                  GUID shown in the URL bar or the "Video GUID" field in details
//
// PUBLIC-SAFE to commit:
//   LIBRARY_ID, PULL_ZONE_HOST, and video GUIDs are embedded in every
//   embed/stream URL that visitors can see in their browser — no secrets here.
//
// KEEP SECRET (never commit):
//   Your Bunny API key (Stream → Account → API → API Key).
//   Used only for server-side management (uploading, deleting).
//   Store it as BUNNY_API_KEY in .env.local if you build admin upload features.
// ─────────────────────────────────────────────────────────────────────────────

// Stream → Your Library → Library Settings → Library ID
export const LIBRARY_ID = "683644";

// Stream → Your Library → Library Settings → Pull Zone (the *.b-cdn.net hostname)
export const PULL_ZONE_HOST = "vz-2ae40eea-75b.b-cdn.net";

// The iframe embed host — always this domain regardless of your pull zone
const EMBED_HOST = "https://iframe.mediadelivery.net";

// ── URL helpers ──────────────────────────────────────────────────────────────

/** HLS playlist for BunnyBackgroundLoop and native players */
export function hlsUrl(guid) {
  return `https://${PULL_ZONE_HOST}/${guid}/playlist.m3u8`;
}

/** Bunny-hosted iframe embed URL (used by BunnyVideo) */
export function embedUrl(guid) {
  return `${EMBED_HOST}/embed/${LIBRARY_ID}/${guid}`;
}

/**
 * Bunny auto-generates a thumbnail for every video.
 * Use this as the default poster when you don't supply a custom one.
 * Dashboard: Stream → Your Library → click video → "Thumbnail" tab to customise.
 */
export function thumbnailUrl(guid) {
  return `https://${PULL_ZONE_HOST}/${guid}/thumbnail.jpg`;
}

// ── Video catalogue ──────────────────────────────────────────────────────────
// Add an entry here for every Bunny Stream video used on the site.
// GUIDs come from: Stream → Your Library → click video → "Video GUID" field.
//
// Usage:
//   import { VIDEOS } from "@/config/bunny";
//   <BunnyVideo guid={VIDEOS.showreel.guid} title={VIDEOS.showreel.title} />

export const VIDEOS = {
  // Hero background loop (silent, autoplays)
  heroLoop: {
    guid: "f3a6e51c-041a-4887-a80b-ce9ac9af24e9",
    // poster shown while HLS loads — use a high-contrast still from the video
    poster: "/assets/images/bhungra.png",
  },

  // // Main showreel / sizzle reel (click-to-play embed)
  // showreel: {
  //   guid: "REPLACE_WITH_SHOWREEL_GUID",
  //   title: "BLK Lotus Productions — Showreel",
  //   // null → falls back to Bunny's auto-generated thumbnail.jpg
  //   poster: null,
  // },
};

// ── Gallery catalogue ────────────────────────────────────────────────────────
// Map-able array for rendering a grid of BunnyVideo components.
// Add one object per project teaser / client reel.
//
// Usage:
//   import { VIDEO_GALLERY } from "@/config/bunny";
//   {VIDEO_GALLERY.map(v => <BunnyVideo key={v.guid} {...v} />)}

export const VIDEO_GALLERY = [
  // ── Community ──────────────────────────────────────────────────────────────
  {
    guid: "f3a6e51c-041a-4887-a80b-ce9ac9af24e9",
    title: "Birthday Benefit Concert",
    eventType: "community",
  },
  {
    guid: "821ceeed-ab7c-408a-a12a-5f190be842e6",
    title: "Redlands Community",
    eventType: "community",
  },
  {
    guid: "f1aaae9c-bb79-473e-b703-46e60e81170b",
    title: "VAPA",
    eventType: "community",
  },
  {
    guid: "c3182bd5-9877-489c-a2c7-ae46d75455a9",
    title: "Angela",
    eventType: "community",
  },
  // ── Concert ────────────────────────────────────────────────────────────────
  {
    guid: "6a34b631-a045-47b7-970c-983c66f9d2e5",
    title: "A Concert for Altadena",
    eventType: "concert",
  },
  {
    guid: "aa8c6565-81cf-4c8a-853a-c6cb7041bd98",
    title: "BTS Concert",
    eventType: "concert",
  },
  {
    guid: "4262d241-669b-44b9-ac5a-4d56f3d9bf93",
    title: "Javed Ali",
    eventType: "concert",
  },
  // ── Fashion ────────────────────────────────────────────────────────────────
  {
    guid: "4e73549e-6885-4dce-8604-98f9c7441e48",
    title: "LA Fashion Promo",
    eventType: "fashion",
  },
  {
    guid: "751d58c1-8559-49d7-a197-3042678bdfd7",
    title: "LA Fashion",
    eventType: "fashion",
  },
  // ── Indian Festival ────────────────────────────────────────────────────────
  {
    guid: "c9958db5-e892-46b2-97c4-f6624c2aab68",
    title: "Holi",
    eventType: "indian-festival",
  },
  {
    guid: "f65bf422-c7e6-4d2a-af11-e2fcd942632d",
    title: "Mela Teeyan Da 2024",
    eventType: "indian-festival",
  },
  // ── Product Shots ──────────────────────────────────────────────────────────
  {
    guid: "74d43833-d85e-4565-a272-6e459407a265",
    title: "Air Force 1",
    eventType: "product-shots",
  },
  {
    guid: "49978d34-c2ee-44ec-8c56-3266ae5caa30",
    title: "Fujifilm",
    eventType: "product-shots",
  },
  {
    guid: "c8067e48-5df8-40ed-8164-a67197ec5ea1",
    title: "Patent Bred",
    eventType: "product-shots",
  },
  {
    guid: "e47b9d1b-06ab-497f-b100-e7d644585f21",
    title: "Retro Pine Green",
    eventType: "product-shots",
  },
  {
    guid: "b4189379-c6d5-4d05-ad7f-bb63a4e72079",
    title: "Sutefoto",
    eventType: "product-shots",
  },
  {
    guid: "a4f7dbdc-107e-48ea-9e8a-4270e6eda8af",
    title: "ZGCine Charger",
    eventType: "product-shots",
  },
  {
    guid: "0cc439a3-1df9-4014-834f-98f644d60be3",
    title: "ZGcine",
    eventType: "product-shots",
  },
];
