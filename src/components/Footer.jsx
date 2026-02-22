"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { BRAND } from "@/lib/brand";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const columns = [
    {
      title: "Explore",
      links: [
        { label: "The Signature Edit", href: "/blog" },
        { label: "Shop", href: "/shop" },
        { label: "The Signature Shelf", href: "/shelf" },
        { label: "Archive", href: "/archive" },
        { label: "Work With Me", href: "/work-with-me" },
        { label: "About", href: "/about" },
      ],
    },
    {
      title: "The Studio",
      links: [
        { label: "Signature Scents", href: "/scents" },
        { label: "Signature Sparkle", href: "/sparkle" },
        { label: "Starter Kits", href: "/shop/starter-kits" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Pinterest", href: "https://www.pinterest.com/signedbysarah1/", external: true },
        { label: "TikTok", href: "https://www.tiktok.com/@signedbysarahh", external: true },
        { label: "ShopMy", href: "https://shopmy.us/shop/sarahl1", external: true },
      ],
    },
  ];

  return (
    <footer style={{ background: BRAND.charcoal }}>
      {/* Email Signup Row */}
      <div
        style={{
          padding: "32px 24px",
          borderBottom: "1px solid rgba(184,169,154,0.15)",
        }}
      >
        <form
          onSubmit={handleSubscribe}
          style={{
            maxWidth: "480px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: BRAND.gold,
              whiteSpace: "nowrap",
            }}
          >
            Join The Signature Edit
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email"
            required
            style={{
              flex: "1 1 180px",
              padding: "10px 14px",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.75rem",
              background: "rgba(255,255,255,0.06)",
              border: `1px solid rgba(184,169,154,0.3)`,
              color: BRAND.cream,
              outline: "none",
              letterSpacing: "0.05em",
              minWidth: 0,
            }}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              padding: "10px 24px",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              background: BRAND.warmBrown,
              color: BRAND.cream,
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s",
              whiteSpace: "nowrap",
            }}
          >
            {status === "sending" ? "..." : status === "success" ? "Subscribed!" : "Subscribe"}
          </button>
        </form>
      </div>

      {/* Main Footer */}
      <div style={{ padding: "64px 24px", maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
        {/* Logo + Tagline */}
        <div style={{ marginBottom: "48px" }}>
          <Logo size="sm" light center />
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
              {col.links.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  </a>
                ) : (
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
                )
              )}
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
