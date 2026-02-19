// FRAMER CODE COMPONENT: Hero Section
// Paste this into: Assets panel > Code > Create Code File > name it "HeroSection"

import { addPropertyControls, ControlType } from "framer"
import { useState, useEffect } from "react"

const BRAND = {
    cream: "#FAF7F2", warmWhite: "#FDF9F4", blush: "#F0E4DA",
    taupe: "#B8A99A", warmBrown: "#8B7355", deepBrown: "#5C4A3A",
    charcoal: "#3A3632", gold: "#C4A86B", softPink: "#E8D5CC",
    sage: "#B5BFA8", dustyRose: "#C9A9A6",
}

export default function HeroSection(props) {
    const [loaded, setLoaded] = useState(false)
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => { setTimeout(() => setLoaded(true), 100) }, [])

    return (
        <div style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px", background: `linear-gradient(160deg, ${BRAND.deepBrown} 0%, ${BRAND.charcoal} 40%, #4A3F35 100%)`, fontFamily: "'Outfit', sans-serif", overflow: "hidden" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Outfit:wght@200;300;400;500&display=swap');
                @keyframes float { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
            `}</style>

            {/* Gold orb top-right */}
            <div style={{ position: "absolute", top: 0, right: 0, width: 384, height: 384, opacity: 0.1, background: `radial-gradient(circle, ${BRAND.gold} 0%, transparent 70%)` }} />
            {/* Dusty rose orb bottom-left */}
            <div style={{ position: "absolute", bottom: 0, left: 0, width: 288, height: 288, opacity: 0.1, background: `radial-gradient(circle, ${BRAND.dustyRose} 0%, transparent 70%)` }} />

            <div style={{ position: "relative", textAlign: "center", maxWidth: 768, margin: "0 auto", opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", letterSpacing: "0.4em", textTransform: "uppercase", color: BRAND.gold, marginBottom: 24, opacity: loaded ? 1 : 0, transition: "opacity 1s ease 0.3s" }}>
                    {props.welcomeText}
                </p>

                <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 300, color: BRAND.cream, lineHeight: 1.1, marginBottom: 24, letterSpacing: "0.08em" }}>
                    {props.titleLine1}<br />
                    <span style={{ fontStyle: "italic", color: BRAND.gold }}>{props.titleLine2}</span>
                </h1>

                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: BRAND.taupe, lineHeight: 1.9, marginBottom: 48, maxWidth: 512, margin: "0 auto 48px", opacity: loaded ? 1 : 0, transition: "opacity 1s ease 0.6s" }}>
                    {props.subtitle}
                </p>

                <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease 0.9s" }}>
                    {!submitted ? (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, maxWidth: 448, margin: "0 auto" }}>
                            <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BRAND.taupe }}>{props.emailLabel}</p>
                            <div style={{ display: "flex", width: "100%" }}>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your email" style={{ flex: 1, padding: "14px 20px", fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", letterSpacing: "0.05em", background: "rgba(255,255,255,0.8)", border: `1px solid ${BRAND.blush}`, borderRight: "none", color: BRAND.charcoal, outline: "none" }} />
                                <button onClick={() => email.includes("@") && setSubmitted(true)} style={{ padding: "14px 24px", fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", background: BRAND.charcoal, color: BRAND.cream, border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>{props.buttonText}</button>
                            </div>
                        </div>
                    ) : (
                        <div style={{ textAlign: "center", padding: 16 }}>
                            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: BRAND.warmBrown }}>{props.successMessage}</p>
                            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", color: BRAND.taupe, marginTop: 8 }}>{props.successSubtext}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, animation: "float 3s ease-in-out infinite" }}>
                <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(184,169,154,0.4)", textTransform: "uppercase" }}>scroll</span>
                <div style={{ width: 1, height: 32, background: `linear-gradient(to bottom, ${BRAND.taupe}40, transparent)` }} />
            </div>
        </div>
    )
}

addPropertyControls(HeroSection, {
    welcomeText: { type: ControlType.String, title: "Welcome Text", defaultValue: "Welcome to" },
    titleLine1: { type: ControlType.String, title: "Title Line 1", defaultValue: "The Signature" },
    titleLine2: { type: ControlType.String, title: "Title Line 2 (italic)", defaultValue: "Studio" },
    subtitle: { type: ControlType.String, title: "Subtitle", defaultValue: "A curated world of chic finds, signature scents, and sparkling things — for women who love beautiful details and intentional living." },
    emailLabel: { type: ControlType.String, title: "Email Label", defaultValue: "Join the signature edit — free weekly curated finds" },
    buttonText: { type: ControlType.String, title: "Button Text", defaultValue: "Join Free" },
    successMessage: { type: ControlType.String, title: "Success Message", defaultValue: "Welcome to The Signature Edit" },
    successSubtext: { type: ControlType.String, title: "Success Subtext", defaultValue: "Check your inbox for your free spring guide" },
})
