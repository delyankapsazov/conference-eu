import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot", "anthropic-ai"],
        allow: "/",
      },
    ],
    sitemap: "https://conference-bg.com/sitemap.xml",
  };
}
