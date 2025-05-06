import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://quizmoney.ng";

  const pages = [
    { url: `${siteUrl}/`, lastModified: new Date() },
    { url: `${siteUrl}/about`, lastModified: new Date() },
    { url: `${siteUrl}/projects`, lastModified: new Date() },
    { url: `${siteUrl}/contact`, lastModified: new Date() },
  ];

  return pages;
}
