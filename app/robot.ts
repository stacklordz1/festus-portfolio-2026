// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = "https://festus-jnr-portfolio.vercel.app"
  return {
    rules:[
     {
      userAgent: "*",
      allow: ["/", "/about"],
      disallow: "/api"
    },
     {
      userAgent: "Googlebot",
      allow: ["/", "/about"],
      disallow: "/api"
    },],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}