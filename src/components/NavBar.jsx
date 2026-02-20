"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { BRAND } from "@/lib/brand";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "The Edit" },
  { href: "/shop", label: "Shop" },
  { href: "/archive", label: "Archive" },
  { href: "/scents", label: "Signature Scents" },
  { href: "/sparkle", label: "Signature Sparkle" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.5s",
        background: scrolled ? "rgba(250,247,242,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${BRAND.blush}` : "none",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
          {/* SS logo mark - oval */}
          <Image
            src="/ss-logo.png"
            alt="SS Logo"
            width={60}
            height={60}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          {/* Text logo - single line */}
          <Logo size="sm" light={!scrolled && isHome} inline />
        </Link>

        {/* Desktop Nav */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color:
                  pathname === link.href
                    ? BRAND.warmBrown
                    : scrolled || !isHome
                    ? BRAND.charcoal
                    : BRAND.cream,
                transition: "color 0.3s",
                textDecoration: "none",
                position: "relative",
              }}
            >
              {link.label}
              {pathname === link.href && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    width: "100%",
                    height: "1px",
                    background: BRAND.gold,
                  }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "6px",
            cursor: "pointer",
            background: "none",
            border: "none",
            padding: "8px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "1px",
                transition: "all 0.3s",
                background:
                  scrolled || !isHome ? BRAND.charcoal : BRAND.cream,
                transform: menuOpen
                  ? i === 0
                    ? "rotate(45deg) translate(3px, 5px)"
                    : i === 1
                    ? "scaleX(0)"
                    : "rotate(-45deg) translate(3px, -5px)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            background: "rgba(250,247,242,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: `1px solid ${BRAND.blush}`,
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color:
                  pathname === link.href ? BRAND.warmBrown : BRAND.charcoal,
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Responsive CSS for desktop/mobile toggle */}
      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
