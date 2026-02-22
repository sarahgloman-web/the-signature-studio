import { getAllPosts } from "@/lib/posts";
import EmailCapture from "@/components/EmailCapture";
import EditGrid from "@/components/EditGrid";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "The Signature Edit — Curated Finds Blog | The Signature Studio",
  description: "Curated finds, signature pairings, scent stories, starter kits, and more. Every pick is tried, loved, or obsessively researched.",
  openGraph: {
    title: "The Signature Edit — The Signature Studio",
    description: "Curated finds across fashion, beauty, home, and everything aesthetic. Updated weekly.",
    type: "website",
  },
};

export default function EditPage() {
  const posts = getAllPosts();

  return (
    <div style={{ paddingTop: "80px" }}>
      <section style={{ padding: "64px 24px", textAlign: "center", background: BRAND.cream }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: "12px" }}>
          The Signature Edit
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300, color: BRAND.charcoal, marginBottom: "12px" }}>
          The Signature Edit
        </h1>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: BRAND.taupe, maxWidth: "500px", margin: "0 auto" }}>
          Curated finds, signature pairings, scent stories, and more. Every pick is tried, loved, or obsessively researched.
        </p>
      </section>

      <section style={{ padding: "64px 24px", background: BRAND.warmWhite }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <EditGrid posts={posts} />
        </div>
      </section>

      <EmailCapture />
    </div>
  );
}
