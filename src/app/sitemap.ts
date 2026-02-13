import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://saeyoungdong.vercel.app";
  const locales = ["ko", "en", "zh"];
  const paths = ["", "/menu"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    paths.forEach((path) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
