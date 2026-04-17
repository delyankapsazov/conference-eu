import type { MetadataRoute } from "next";

const base = "https://conference-bg.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/%D0%BE%D0%B7%D0%B2%D1%83%D1%87%D0%B0%D0%B2%D0%B0%D0%BD%D0%B5`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/%D1%81%D0%B8%D0%BC%D1%83%D0%BB%D1%82%D0%B0%D0%BD%D0%B5%D0%BD-%D0%BF%D1%80%D0%B5%D0%B2%D0%BE%D0%B4`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/%D0%BC%D1%83%D0%BB%D1%82%D0%B8%D0%BC%D0%B5%D0%B4%D0%B8%D1%8F`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B8-%D0%BE%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/%D1%82%D1%83%D1%80-%D0%B3%D0%B0%D0%B9%D0%B4-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/%D0%B7%D0%B0%D0%BF%D0%B8%D1%81-%D0%B8-%D1%81%D1%82%D1%80%D0%B8%D0%B9%D0%BC%D0%B8%D0%BD%D0%B3`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/%D0%B7%D0%B0-%D0%BD%D0%B0%D1%81`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%B8`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B8`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
