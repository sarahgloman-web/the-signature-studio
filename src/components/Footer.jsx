"use client";
import Link from "next/link";
import Logo from "./Logo";
import { BRAND } from "@/lib/brand";

export default function Footer() {
  const columns = [
    {
      title: "Explore",
      links: [
        { label: "The Edit (Blog)", href: "/blog" },
        { label: "Shop My Finds", href: "/shop" },
        { label: "Archive", href: "/archive" },
        { label: "About", href: "/about" },
      ],
    },
    {
      title: "The Studio",
      links: [
        { label: "Signature Scents", href: "/scents" },
        { label: "Signature Sparkle", href: "/sparkle" },
        { label: "Digital Products", href: "/shop" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Pinterest", href: "#" },
        { label: "TikTok", href: "#" },
        { label: "Email Newsletter", href: "#" },
      ],
    },
  ];

  return (
    <footer style={{ padding: "64px 24px", background: BRAND.charcoal }}>
      <div style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
        {/* Logo + Tagline */}
        <div style={{ marginBottom: "48px" }}>
          <Logo size="sm" light />
          <p
            style={{
              marginTop: "16px",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.8rem",
              color: BRAND.taupe,
              lineHeight: 1.8,
            }}
          >
            Curating the chicest finds for women who love beautiful things.
          </p>
        </div>

        {/* Link Columns */}
        <div style={{ display: "flex", justifyContent: "center", gap: "64px", flexWrap: "wrap", marginBottom: "48px" }}>
          {columns.map((col) => (
            <div key={col.title}>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: BRAND.gold,
                  marginBottom: "16px",
                }}
              >
                {col.title}
              </p>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    display: "block",
                    marginBottom: "12px",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.8rem",
                    color: BRAND.taupe,
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div
          style={{
            paddingTop: "32px",
            borderTop: "1px solid rgba(184,169,154,0.2)",
          }}
        >
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.65rem",
              color: "rgba(184,169,154,0.4)",
              letterSpacing: "0.15em",
            }}
          >
            &copy; 2026 The Signature Studio. All rights reserved. This site
            contains affiliate links.
          </p>
        </div>
      </div>
    </footer>
  );
}
