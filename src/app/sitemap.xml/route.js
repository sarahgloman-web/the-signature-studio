import { getAllPostSlugs } from "@/lib/posts";

const SITE_URL = "https://the-signature-studio.vercel.app";

const staticPages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/edit", priority: "0.9", changefreq: "weekly" },
  { path: "/shop", priority: "0.9", changefreq: "weekly" },
  { path: "/shelf", priority: "0.8", changefreq: "weekly" },
  { path: "/shop/starter-kits", priority: "0.7", changefreq: "monthly" },
  { path: "/scents", priority: "0.6", changefreq: "monthly" },
  { path: "/sparkle", priority: "0.6", changefreq: "monthly" },
  { path: "/work-with-me", priority: "0.7", changefreq: "monthly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/archive", priority: "0.5", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
];

export async function GET() {
  const slugs = getAllPostSlugs();

  const staticEntries = staticPages
    .map(
      (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("\n");

  const postEntries = slugs
    .map(
      (slug) => `  <url>
    <loc>${SITE_URL}/edit/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}
${postEntries}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
