"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { BRAND } from "@/lib/brand";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/edit", label: "The Signature Edit" },
  { href: "/shop", label: "Shop", hasDropdown: "shop" },
  { href: "/shelf", label: "The Signature Shelf" },
  { label: "The Studio", hasDropdown: "studio" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/about", label: "About" },
];

const shopSublinks = [
  { label: "Signature Style", slug: "style" },
  { label: "Signature Scents", slug: "scents" },
  { label: "Signature Sparkle", slug: "sparkle" },
  { label: "Signature Space", slug: "space" },
  { label: "Signature Skin", slug: "skin" },
  { label: "Signature Starter Kits", slug: "starter-kits", direct: "/shop/starter-kits" },
];

const studioSublinks = [
  { label: "Signature Scents", href: "/scents" },
  { label: "Signature Sparkle", href: "/sparkle" },
];

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/edit", label: "The Signature Edit" },
  { href: "/shop", label: "Shop" },
  { href: "/shelf", label: "The Signature Shelf" },
  { href: "/scents", label: "Signature Scents" },
  { href: "/sparkle", label: "Signature Sparkle" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownTimeout = useRef(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (key) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(key);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const textColor = scrolled || !isHome ? BRAND.charcoal : BRAND.cream;

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
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "40px",
              height: "52px",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              position: "relative",
            }}
          >
            <Image
              src="/ss-logo.png"
              alt="SS Logo"
              width={200}
              height={200}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1.6)",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <Logo size="sm" light={!scrolled && isHome} inline />
        </Link>

        {/* Desktop Nav */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
        >
          {mainLinks.map((link) => {
            const isActive = link.href && pathname === link.href;
            const hasDropdown = link.hasDropdown;

            if (hasDropdown) {
              return (
                <div
                  key={link.label}
                  style={{ position: "relative" }}
                  onMouseEnter={() => handleDropdownEnter(hasDropdown)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {link.href ? (
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.75rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: isActive ? BRAND.warmBrown : textColor,
                        transition: "color 0.3s",
                        textDecoration: "none",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      {link.label}
                      <span style={{ fontSize: "0.55rem" }}>{"\u25BE"}</span>
                      {isActive && (
                        <span style={{ position: "absolute", bottom: "-4px", left: 0, width: "100%", height: "1px", background: BRAND.gold }} />
                      )}
                    </Link>
                  ) : (
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.75rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: textColor,
                        cursor: "default",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      {link.label}
                      <span style={{ fontSize: "0.55rem" }}>{"\u25BE"}</span>
                    </span>
                  )}

                  {/* Dropdown */}
                  {activeDropdown === hasDropdown && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        paddingTop: "12px",
                        zIndex: 60,
                      }}
                    >
                      <div
                        style={{
                          background: "rgba(250,247,242,0.98)",
                          backdropFilter: "blur(20px)",
                          border: `1px solid ${BRAND.blush}`,
                          padding: "16px 24px",
                          minWidth: "200px",
                          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                        }}
                      >
                        {hasDropdown === "shop" &&
                          shopSublinks.map((sub) => (
                            <Link
                              key={sub.slug}
                              href={sub.direct || `/shop?category=${sub.slug}`}
                              style={{
                                display: "block",
                                padding: "8px 0",
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: "0.72rem",
                                letterSpacing: "0.1em",
                                color: BRAND.charcoal,
                                textDecoration: "none",
                                transition: "color 0.2s",
                                whiteSpace: "nowrap",
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = BRAND.warmBrown)}
                              onMouseLeave={(e) => (e.currentTarget.style.color = BRAND.charcoal)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        {hasDropdown === "studio" &&
                          studioSublinks.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              style={{
                                display: "block",
                                padding: "8px 0",
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: "0.72rem",
                                letterSpacing: "0.1em",
                                color: BRAND.charcoal,
                                textDecoration: "none",
                                transition: "color 0.2s",
                                whiteSpace: "nowrap",
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = BRAND.warmBrown)}
                              onMouseLeave={(e) => (e.currentTarget.style.color = BRAND.charcoal)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: isActive ? BRAND.warmBrown : textColor,
                  transition: "color 0.3s",
                  textDecoration: "none",
                  position: "relative",
                }}
              >
                {link.label}
                {isActive && (
                  <span style={{ position: "absolute", bottom: "-4px", left: 0, width: "100%", height: "1px", background: BRAND.gold }} />
                )}
              </Link>
            );
          })}

          {/* Search Icon */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Search"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={textColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: "stroke 0.3s" }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>

        {/* Mobile: Search + Menu Button */}
        <div className="mobile-menu-btn" style={{ display: "none", alignItems: "center", gap: "12px" }}>
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center" }}
            aria-label="Search"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "flex",
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
                  background: textColor,
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
      </div>

      {/* Search Bar (slides down) */}
      {searchOpen && (
        <div
          style={{
            padding: "12px 32px 16px",
            background: "rgba(250,247,242,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: `1px solid ${BRAND.blush}`,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative", width: "100%", maxWidth: "400px" }}>
            <input
              type="text"
              placeholder="Search the studio..."
              style={{
                width: "100%",
                padding: "10px 16px",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem",
                border: `1px solid ${BRAND.blush}`,
                background: BRAND.warmWhite,
                color: BRAND.charcoal,
                outline: "none",
                letterSpacing: "0.05em",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = BRAND.gold)}
              onBlur={(e) => (e.currentTarget.style.borderColor = BRAND.blush)}
            />
          </div>
        </div>
      )}

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
          {mobileLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: pathname === link.href ? BRAND.warmBrown : BRAND.charcoal,
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Responsive CSS */}
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
