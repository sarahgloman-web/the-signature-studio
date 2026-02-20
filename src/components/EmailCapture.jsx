"use client";
import { useState } from "react";
import { BRAND } from "@/lib/brand";

export default function EmailCapture({ variant = "default" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!email.includes("@")) return;

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    }
  };

  if (variant === "hero") {
    return (
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          width: "100%",
          maxWidth: "28rem",
          margin: "0 auto",
        }}
      >
        {!submitted ? (
          <>
            <p
              style={{
                textAlign: "center",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: BRAND.taupe,
              }}
            >
              Join the signature edit — free weekly curated finds
            </p>
            <div style={{ display: "flex", width: "100%" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your email"
                style={{
                  flex: 1,
                  padding: "14px 20px",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  background: "rgba(255,255,255,0.8)",
                  border: `1px solid ${BRAND.blush}`,
                  borderRight: "none",
                  color: BRAND.charcoal,
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "14px 24px",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  background: BRAND.charcoal,
                  color: BRAND.cream,
                  border: "none",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              >
                Join Free
              </button>
            </div>
          </>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "16px 0",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
              color: BRAND.warmBrown,
            }}
          >
            Welcome to The Signature Edit
            <br />
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem",
                color: BRAND.taupe,
              }}
            >
              Check your inbox for your free spring guide
            </span>
          </div>
        )}
      </form>
    );
  }

  // Full section variant
  return (
    <section
      style={{
        padding: "80px 24px",
        background: `linear-gradient(135deg, ${BRAND.charcoal} 0%, ${BRAND.deepBrown} 100%)`,
      }}
    >
      <div style={{ maxWidth: "42rem", margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: BRAND.gold,
            marginBottom: "16px",
          }}
        >
          The Signature Edit
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 300,
            color: BRAND.cream,
            lineHeight: 1.3,
            marginBottom: "16px",
          }}
        >
          Your Weekly Dose of Curated Finds
        </h2>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.85rem",
            color: BRAND.taupe,
            lineHeight: 1.8,
            marginBottom: "32px",
          }}
        >
          Every week I handpick the chicest new arrivals, hidden gems, and
          must-have products — delivered straight to your inbox before they sell
          out. Plus, get my free Spring Shopping Guide with 50+ curated picks
          when you join.
        </p>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              gap: "12px",
              maxWidth: "32rem",
              margin: "0 auto",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                flex: 1,
                minWidth: "200px",
                padding: "14px 20px",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.85rem",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(196,168,107,0.3)",
                color: BRAND.cream,
                letterSpacing: "0.05em",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "14px 32px",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                background: BRAND.gold,
                color: BRAND.charcoal,
                border: "none",
                fontWeight: 500,
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
            >
              Get the Edit
            </button>
          </form>
        ) : (
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.3rem",
              color: BRAND.gold,
            }}
          >
            You&apos;re in! Check your inbox for your free guide
          </div>
        )}
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.65rem",
            color: "rgba(184,169,154,0.5)",
            marginTop: "16px",
            letterSpacing: "0.1em",
          }}
        >
          No spam. Unsubscribe anytime. Your taste is safe with me.
        </p>
      </div>
    </section>
  );
}
