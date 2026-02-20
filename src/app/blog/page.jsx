import { getAllPosts } from "@/lib/posts";
import EmailCapture from "@/components/EmailCapture";
import BlogPostGrid from "@/components/BlogPostGrid";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "The Edit — The Signature Studio Blog",
  description: "Curated finds across fashion, beauty, home, and everything aesthetic. Updated weekly.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Blog Header */}
      <section style={{ padding: "64px 24px", textAlign: "center", background: BRAND.cream }}>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: BRAND.gold,
            marginBottom: "12px",
          }}
        >
          The Edit — Shopping Blog
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 300,
            color: BRAND.charcoal,
            marginBottom: "12px",
          }}
        >
          The Signature Edit
        </h1>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.9rem",
            color: BRAND.taupe,
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          Curated finds across fashion, beauty, home, and everything aesthetic.
          Updated weekly.
        </p>
      </section>

      {/* Posts Grid with Filter Pills */}
      <section style={{ padding: "64px 24px", background: BRAND.warmWhite }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <BlogPostGrid posts={posts} />
        </div>
      </section>

      <EmailCapture />
    </div>
  );
}
