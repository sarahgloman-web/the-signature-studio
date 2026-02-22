"use client";
import { useState } from "react";
import { BRAND } from "@/lib/brand";

const collabTypes = [
  { title: "Sponsored Blog Posts", desc: "Full-length editorial features with Signature Number review and ShopMy integration." },
  { title: "Social Media Partnerships", desc: "Pinterest and TikTok content creation showcasing your brand to an engaged audience." },
  { title: "UGC Content Creation", desc: "Authentic, on-brand user-generated content for your marketing channels." },
  { title: "Affiliate Campaigns", desc: "Long-term affiliate partnerships with performance tracking and authentic promotion." },
  { title: "Brand Ambassadorships", desc: "Ongoing collaboration with dedicated coverage across all Signature Studio platforms." },
];

const socials = [
  { label: "Pinterest", href: "https://www.pinterest.com/signedbysarah1/" },
  { label: "TikTok", href: "https://www.tiktok.com/@signedbysarahh" },
  { label: "Email", href: "mailto:hello@thesignaturestudio.com" },
];

export default function WorkWithMePage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder - will connect to form handler later
    setStatus("sent");
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Header */}
      <section style={{ padding: "80px 24px", textAlign: "center", background: BRAND.cream }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: "12px" }}>
          Partnerships & Collaborations
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300, color: BRAND.charcoal, marginBottom: "16px" }}>
          Let&apos;s Collaborate
        </h1>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: BRAND.taupe, lineHeight: 1.8, maxWidth: "32rem", margin: "0 auto" }}>
          Partnerships, features, and more
        </p>
      </section>

      {/* Intro */}
      <section style={{ padding: "64px 24px", background: BRAND.warmWhite }}>
        <div style={{ maxWidth: "42rem", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: BRAND.charcoal, lineHeight: 2, marginBottom: "24px" }}>
            The Signature Studio by Sarah is a curated lifestyle brand reaching women who love beautiful details across Pinterest, TikTok, and our blog. We partner with brands that align with our aesthetic and values.
          </p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: BRAND.taupe, lineHeight: 1.8 }}>
            Whether you&apos;re a beauty brand, home brand, fashion label, or fragrance house — if your products are made with intention and quality, we&apos;d love to work together.
          </p>
        </div>
      </section>

      {/* Collaboration Types */}
      <section style={{ padding: "64px 24px", background: BRAND.cream }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: "12px" }}>
              How We Can Work Together
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 300, color: BRAND.charcoal }}>
              Collaboration Options
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {collabTypes.map((collab) => (
              <div key={collab.title} style={{ padding: "28px", background: BRAND.warmWhite, border: `1px solid ${BRAND.blush}` }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", color: BRAND.charcoal, marginBottom: "8px" }}>{collab.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.82rem", color: BRAND.taupe, lineHeight: 1.7 }}>{collab.desc}</p>
              </div>
            ))}
          </div>

          {/* Media Kit Button */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button
              disabled
              style={{
                padding: "14px 40px",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                background: BRAND.charcoal,
                color: BRAND.cream,
                border: "none",
                cursor: "not-allowed",
                opacity: 0.6,
              }}
            >
              Download Media Kit (Coming Soon)
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ padding: "64px 24px", background: BRAND.warmWhite }}>
        <div style={{ maxWidth: "32rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 300, color: BRAND.charcoal }}>
              Get in Touch
            </h2>
          </div>

          {status === "sent" ? (
            <div style={{ textAlign: "center", padding: "40px" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: BRAND.gold, marginBottom: "8px" }}>
                Message sent!
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: BRAND.taupe }}>
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { name: "name", label: "Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "company", label: "Brand / Company Name", type: "text" },
              ].map((field) => (
                <div key={field.name}>
                  <label style={{ display: "block", fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: BRAND.taupe, marginBottom: "6px" }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required={field.name !== "company"}
                    value={form[field.name]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.85rem",
                      border: `1px solid ${BRAND.blush}`,
                      background: BRAND.cream,
                      color: BRAND.charcoal,
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: "block", fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: BRAND.taupe, marginBottom: "6px" }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.85rem",
                    border: `1px solid ${BRAND.blush}`,
                    background: BRAND.cream,
                    color: BRAND.charcoal,
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <button type="submit" style={{
                padding: "14px 40px",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                background: BRAND.charcoal,
                color: BRAND.cream,
                border: "none",
                cursor: "pointer",
                transition: "opacity 0.3s",
                alignSelf: "center",
              }}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Social Links */}
      <section style={{ padding: "48px 24px", textAlign: "center", background: BRAND.cream }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: BRAND.taupe, marginBottom: "16px" }}>
          Find me on
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" style={{
              fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: BRAND.warmBrown, textDecoration: "none", borderBottom: `1px solid ${BRAND.blush}`, paddingBottom: "2px",
            }}>
              {s.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
