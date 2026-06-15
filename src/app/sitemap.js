const SITE_URL = "https://blklotus-productions.com";

export default function sitemap() {
  const now = new Date();

  const routes = [
    { url: "/",        priority: 1.0, changeFrequency: "monthly" },
    { url: "/works",   priority: 0.9, changeFrequency: "weekly"  },
    { url: "/photos",  priority: 0.9, changeFrequency: "weekly"  },
    { url: "/videos",  priority: 0.9, changeFrequency: "weekly"  },
    { url: "/about",   priority: 0.7, changeFrequency: "monthly" },
    { url: "/contact", priority: 0.8, changeFrequency: "yearly"  },
    { url: "/terms",   priority: 0.3, changeFrequency: "yearly"  },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${SITE_URL}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
