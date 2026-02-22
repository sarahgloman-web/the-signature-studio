import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "2026-01-01",
        tag: data.tag || "The Edit",
        tagColor: data.tagColor || "sage",
        postType: data.postType || "curated-finds",
        description: data.description || "",
        signatureNumber: data.signatureNumber || null,
        image: data.image || null,
        coverImage: data.coverImage || null,
        products: data.products || [],
        productIds: data.productIds || [],
        scentPairing: data.scentPairing || null,
        category: data.category || null,
        tags: data.tags || [],
      };
    });

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    title: data.title || slug,
    date: data.date || "2026-01-01",
    tag: data.tag || "The Edit",
    tagColor: data.tagColor || "sage",
    postType: data.postType || "curated-finds",
    description: data.description || "",
    signatureNumber: data.signatureNumber || null,
    image: data.image || null,
    coverImage: data.coverImage || null,
    products: data.products || [],
    productIds: data.productIds || [],
    scentPairing: data.scentPairing || null,
    category: data.category || null,
    tags: data.tags || [],
  };
}

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

export function getPostsByMonthYear() {
  const posts = getAllPosts();
  const grouped = {};

  posts.forEach((post) => {
    const d = new Date(post.date);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    const label = d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    if (!grouped[key]) {
      grouped[key] = { label, posts: [] };
    }
    grouped[key].posts.push(post);
  });

  return Object.entries(grouped)
    .sort(([a], [b]) => (a < b ? 1 : -1))
    .map(([key, val]) => ({ key, ...val }));
}
