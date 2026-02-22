"use client";
import { useState, useEffect } from "react";
import { BRAND } from "@/lib/brand";

function Sparkles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3,
      delay: Math.random() * 0.6,
      duration: Math.random() * 1 + 0.8,
      char: ["✦", "✧", "⋆", "·"][Math.floor(Math.random() * 4)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "-20px",
        left: "-20px",
        right: "-20px",
        bottom: "-20px",
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            color: BRAND.gold,
            animation: `sparkle-pop ${p.duration}s ease-out ${p.delay}s both`,
            opacity: 0,
          }}
        >
          {p.char}
        </span>
      ))}
      <style>{`
        @keyframes sparkle-pop {
          0% { opacity: 0; transform: scale(0) translateY(10px); }
          30% { opacity: 1; transform: scale(1.4) translateY(-5px); }
          70% { opacity: 0.8; transform: scale(1) translateY(-10px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-20px); }
        }
      `}</style>
    </div>
  );
}

export default function EmailCapture({ variant = "default" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!email.includes("@") || submitting) return;

    setSubmitting(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // still show success to user
    }
    setSubmitted(true);
    setSubmitting(false);
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
              Join The Signature Edit — free weekly curated finds + my Spring Shopping Guide
            </p>
            <div style={{ display: "flex", width: "100%" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your email"
                required
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
                disabled={submitting}
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
                  cursor: submitting ? "wait" : "pointer",
                  opacity: submitting ? 0.7 : 1,
                  transition: "opacity 0.3s",
                }}
              >
                {submitting ? "..." : "Join Free"}
              </button>
            </div>
          </>
        ) : (
          <div
            style={{
              position: "relative",
              textAlign: "center",
              padding: "24px 16px",
              animation: "fade-up 0.6s ease-out both",
            }}
          >
            <Sparkles />
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.4rem",
                fontWeight: 400,
                color: BRAND.gold,
                marginBottom: "8px",
                letterSpacing: "0.05em",
              }}
            >
              You're in, babe ✦
            </p>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem",
                color: BRAND.taupe,
                lineHeight: 1.7,
              }}
            >
              Your free weekly curated edits are on the way.
              <br />
              The chicest finds, delivered straight to your inbox.
            </p>
            <style>{`
              @keyframes fade-up {
                from { opacity: 0; transform: translateY(12px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
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
          out.
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
              required
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
              disabled={submitting}
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
                cursor: submitting ? "wait" : "pointer",
                opacity: submitting ? 0.7 : 1,
                transition: "opacity 0.3s",
              }}
            >
              {submitting ? "..." : "Get the Edit"}
            </button>
          </form>
        ) : (
          <div
            style={{
              position: "relative",
              padding: "24px 16px",
              animation: "fade-up 0.6s ease-out both",
            }}
          >
            <Sparkles />
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.5rem",
                fontWeight: 400,
                color: BRAND.gold,
                marginBottom: "8px",
                letterSpacing: "0.05em",
              }}
            >
              You're in, babe ✦
            </p>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.85rem",
                color: BRAND.taupe,
                lineHeight: 1.8,
              }}
            >
              Your free weekly curated edits are on the way.
              <br />
              The chicest finds, handpicked just for you — every week.
            </p>
            <style>{`
              @keyframes fade-up {
                from { opacity: 0; transform: translateY(12px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
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
