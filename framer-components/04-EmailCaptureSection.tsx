// FRAMER CODE COMPONENT: Email Capture (Full Dark Section)
// Paste into: Assets > Code > Create Code File > name it "EmailCaptureSection"

import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

const BRAND = {
    cream: "#FAF7F2", taupe: "#B8A99A", deepBrown: "#5C4A3A",
    charcoal: "#3A3632", gold: "#C4A86B",
}

export default function EmailCaptureSection(props) {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)

    return (
        <div style={{ padding: "80px 24px", background: `linear-gradient(135deg, ${BRAND.charcoal} 0%, ${BRAND.deepBrown} 100%)`, fontFamily: "'Outfit', sans-serif" }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Outfit:wght@200;300;400;500&display=swap');`}</style>
            <div style={{ maxWidth: 672, margin: "0 auto", textAlign: "center" }}>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: BRAND.gold, marginBottom: 16 }}>{props.label}</p>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 300, color: BRAND.cream, lineHeight: 1.3, marginBottom: 16 }}>{props.heading}</h2>
                <p style={{ fontSize: "0.85rem", color: BRAND.taupe, lineHeight: 1.8, marginBottom: 32 }}>{props.description}</p>

                {!submitted ? (
                    <div style={{ display: "flex", flexDirection: "row", gap: 12, maxWidth: 512, margin: "0 auto", flexWrap: "wrap" }}>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"
                            style={{ flex: 1, minWidth: 200, padding: "14px 20px", fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(196,168,107,0.3)", color: BRAND.cream, letterSpacing: "0.05em", outline: "none" }} />
                        <button onClick={() => email.includes("@") && setSubmitted(true)}
                            style={{ padding: "14px 32px", fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", background: BRAND.gold, color: BRAND.charcoal, border: "none", fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap" }}>{props.buttonText}</button>
                    </div>
                ) : (
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", color: BRAND.gold }}>{props.successMessage}</p>
                )}

                <p style={{ fontSize: "0.65rem", color: "rgba(184,169,154,0.5)", marginTop: 16, letterSpacing: "0.1em" }}>{props.disclaimer}</p>
            </div>
        </div>
    )
}

addPropertyControls(EmailCaptureSection, {
    label: { type: ControlType.String, title: "Label", defaultValue: "The Signature Edit" },
    heading: { type: ControlType.String, title: "Heading", defaultValue: "Your Weekly Dose of Curated Finds" },
    description: { type: ControlType.String, title: "Description", defaultValue: "Every week I handpick the chicest new arrivals, hidden gems, and must-have products — delivered straight to your inbox before they sell out. Plus, get my free Spring Shopping Guide with 50+ curated picks when you join." },
    buttonText: { type: ControlType.String, title: "Button Text", defaultValue: "Get the Edit" },
    successMessage: { type: ControlType.String, title: "Success Message", defaultValue: "You're in! Check your inbox for your free guide" },
    disclaimer: { type: ControlType.String, title: "Disclaimer", defaultValue: "No spam. Unsubscribe anytime. Your taste is safe with me." },
})
