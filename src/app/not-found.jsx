import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Page Not Found — The Signature Studio",
};

export default function NotFound() {
  return (
    <div
      style={{
        paddingTop: "80px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: BRAND.cream,
      }}
    >
      <div style={{ textAlign: "center", padding: "64px 24px", maxWidth: "480px" }}>
        {/* SS Logo */}
        <div
          style={{
            width: "80px",
            height: "100px",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto 32px",
            position: "relative",
          }}
        >
          <Image
            src="/ss-logo.png"
            alt="The Signature Studio"
            width={200}
            height={200}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1.6)",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

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
          404 — Page Not Found
        </p>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 300,
            color: BRAND.charcoal,
            marginBottom: "16px",
          }}
        >
          This page doesn&apos;t exist yet
        </h1>

        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.9rem",
            color: BRAND.taupe,
            lineHeight: 1.8,
            marginBottom: "40px",
          }}
        >
          It might have been moved, or maybe it&apos;s still being curated.
          Let&apos;s get you back to the good stuff.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/shop", label: "Shop" },
            { href: "/blog", label: "The Signature Edit" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "12px 32px",
                border: `1px solid ${BRAND.blush}`,
                color: BRAND.charcoal,
                textDecoration: "none",
                background: BRAND.warmWhite,
                transition: "all 0.3s",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
