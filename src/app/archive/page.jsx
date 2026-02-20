import { getPostsByMonthYear } from "@/lib/posts";
import EmailCapture from "@/components/EmailCapture";
import ArchiveGroup from "@/components/ArchiveGroup";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Archive — The Signature Studio",
  description: "Browse all shopping finds sorted by month and year.",
};

export default function ArchivePage() {
  const groups = getPostsByMonthYear();

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Header */}
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
          Browse by Date
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
          The Archive
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
          Every curated find, sorted by month and year. Click a month to explore.
        </p>
      </section>

      {/* Archive Groups */}
      <section style={{ padding: "64px 24px", background: BRAND.warmWhite }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          {groups.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                padding: "48px 0",
                fontFamily: "'Outfit', sans-serif",
                color: BRAND.taupe,
              }}
            >
              No finds in the archive yet.
            </p>
          ) : (
            groups.map((group) => (
              <ArchiveGroup
                key={group.key}
                label={group.label}
                posts={group.posts}
              />
            ))
          )}
        </div>
      </section>

      <EmailCapture />
    </div>
  );
}
