"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUp, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Kontakt", href: "#kontakt" },
];

const services = [
  { label: "Energieverteilung", href: "#leistungen" },
  { label: "Zähleranlagen", href: "#leistungen" },
  { label: "Steuerungstechnik", href: "#leistungen" },
  { label: "Smart Home", href: "#leistungen" },
  { label: "Installationsverteiler", href: "#leistungen" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 decoration-grid opacity-5" />

      {/* Top CTA Section */}
      <div className="border-b border-white/10 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                Bereit für Ihr <span className="text-gradient">Projekt</span>?
              </h3>
              <p className="text-white/90 text-sm sm:text-base">
                Kontaktieren Sie uns für eine unverbindliche Beratung.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="tel:+4971339289967"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-slate-900 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all hover:bg-white/90 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Jetzt anrufen
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-accent rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Anfrage senden
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-block mb-4 sm:mb-6">
              <Image
                src="/logo.svg"
                alt="AS Anlagenbau Schweizer GmbH"
                width={180}
                height={48}
                className="h-10 sm:h-12 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
              Ihr kompetenter Partner für Elektrotechnik, Energieverteilung
              und intelligente Gebäudetechnik in der Region.
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/images/e-masters.png"
                alt="e-masters"
                width={80}
                height={15}
                className="h-3.5 sm:h-4 w-auto"
              />
              <span className="text-xs sm:text-sm text-white/95">e-masters zertifiziert</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-white">Navigation</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-accent transition-colors inline-flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-white">Leistungen</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-white/90 hover:text-accent transition-colors inline-flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-white">Kontakt</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="tel:+4971339289967"
                  className="flex items-start gap-2 sm:gap-3 text-white/90 hover:text-accent transition-colors group"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-white/70 mb-0.5 sm:mb-1">Telefon</div>
                    <span className="font-medium text-sm sm:text-base">+49 7133 9289967</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@anlagenbau-schweizer.de"
                  className="flex items-start gap-2 sm:gap-3 text-white/90 hover:text-accent transition-colors group"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-white/70 mb-0.5 sm:mb-1">E-Mail</div>
                    <span className="font-medium text-xs sm:text-sm break-all">info@anlagenbau-schweizer.de</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Schindersgrube+77+74388+Talheim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 sm:gap-3 text-white/90 hover:text-accent transition-colors group"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-white/70 mb-0.5 sm:mb-1">Adresse</div>
                    <span className="font-medium text-sm sm:text-base">
                      Schindersgrube 77
                      <br />
                      74388 Talheim
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 sm:gap-3 text-white/70">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-white/70 mb-0.5 sm:mb-1">Öffnungszeiten</div>
                    <span className="font-medium text-sm sm:text-base">Mo-Fr: 7:00 - 16:00</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-white/80 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} AS Anlagenbau Schweizer GmbH. Alle Rechte vorbehalten.
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#" className="text-white/80 hover:text-accent text-xs sm:text-sm transition-colors">
                Impressum
              </a>
              <a href="#" className="text-white/80 hover:text-accent text-xs sm:text-sm transition-colors">
                Datenschutz
              </a>
              <button
                onClick={scrollToTop}
                className="p-1.5 sm:p-2 bg-gradient-to-r from-primary to-accent rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
                aria-label="Nach oben scrollen"
              >
                <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
