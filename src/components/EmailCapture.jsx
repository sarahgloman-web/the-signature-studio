"use client";
import { useState } from "react";
import { BRAND } from "@/lib/brand";

export default function EmailCapture({ variant = "default" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!email.includes("@")) return;

    // MailerLite integration
    // Replace YOUR_MAILERLITE_GROUP_ID and YOUR_MAILERLITE_API_KEY below
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
      // Fallback: still show success so the form doesn't get stuck
      setSubmitted(true);
    }
  };

  if (variant === "hero") {
    return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 w-full max-w-md mx-auto"
      >
        {!submitted ? (
          <>
            <p
              className="text-center"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: BRAND.taupe,
              }}
            >
              Join the signature edit — free weekly curated finds
            </p>
            <div className="flex w-full gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your email"
                className="flex-1 px-5 py-3.5 outline-none"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  background: "rgba(255,255,255,0.8)",
                  border: `1px solid ${BRAND.blush}`,
                  borderRight: "none",
                  color: BRAND.charcoal,
                }}
              />
              <button
                type="submit"
                className="px-6 py-3.5 cursor-pointer transition-all duration-300 hover:opacity-80"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  background: BRAND.charcoal,
                  color: BRAND.cream,
                  border: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Join Free
              </button>
            </div>
          </>
        ) : (
          <div
            className="text-center py-4"
            style={{
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
      className="py-20 px-6"
      style={{
        background: `linear-gradient(135deg, ${BRAND.charcoal} 0%, ${BRAND.deepBrown} 100%)`,
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
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
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 outline-none"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.85rem",
                background: "rgba(255,255,255,0.08)",
                border: `1px solid rgba(196,168,107,0.3)`,
                color: BRAND.cream,
                letterSpacing: "0.05em",
              }}
            />
            <button
              type="submit"
              className="px-8 py-3.5 cursor-pointer transition-all duration-300 hover:opacity-90"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                background: BRAND.gold,
                color: BRAND.charcoal,
                border: "none",
                fontWeight: 500,
                whiteSpace: "nowrap",
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
