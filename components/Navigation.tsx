"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-primary/5 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className={`relative transition-all duration-300 ${
              isScrolled ? "h-12" : "h-14"
            }`}>
              <Image
                src="/logo.svg"
                alt="AS Anlagenbau Schweizer GmbH"
                width={180}
                height={48}
                className={`h-full w-auto object-contain transition-all duration-300 ${
                  !isScrolled ? "brightness-0 invert" : ""
                }`}
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isScrolled
                    ? activeSection === link.href.substring(1)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                    : activeSection === link.href.substring(1)
                    ? "text-white bg-white/20"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-current rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+4971339289967"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              +49 7133 9289967
            </a>
            <a
              href="#kontakt"
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Anfrage stellen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`rounded-2xl p-4 ${
            isScrolled ? "bg-secondary" : "bg-white/10 backdrop-blur-md"
          }`}>
            {/* Mobile Logo */}
            <div className="flex justify-center mb-4 pb-4 border-b border-current/10">
              <Image
                src="/logo.svg"
                alt="AS Anlagenbau Schweizer GmbH"
                width={150}
                height={40}
                className={`h-10 w-auto ${!isScrolled ? "brightness-0 invert" : ""}`}
              />
            </div>

            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isScrolled
                    ? activeSection === link.href.substring(1)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-white hover:text-primary"
                    : activeSection === link.href.substring(1)
                    ? "bg-white/20 text-white"
                    : "text-white hover:bg-white/10"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-current/10 space-y-3">
              <a
                href="tel:+4971339289967"
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium ${
                  isScrolled ? "bg-white text-foreground" : "bg-white/10 text-white"
                }`}
              >
                <Phone className="w-4 h-4" />
                +49 7133 9289967
              </a>
              <a
                href="#kontakt"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-white"
              >
                Anfrage stellen
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
