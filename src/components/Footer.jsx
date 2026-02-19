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
    <footer className="py-16 px-6" style={{ background: BRAND.charcoal }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          <div className="md:col-span-1">
            <Logo size="sm" light />
            <p
              className="mt-4"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem",
                color: BRAND.taupe,
                lineHeight: 1.8,
              }}
            >
              Curating the chicest finds for women who love beautiful things.
            </p>
          </div>

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
                  className="block mb-3 transition-colors duration-300 hover:opacity-70"
                  style={{
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

        <div
          className="pt-8 text-center"
          style={{ borderTop: "1px solid rgba(184,169,154,0.2)" }}
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
