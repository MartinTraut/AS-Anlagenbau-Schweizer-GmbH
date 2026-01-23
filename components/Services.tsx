"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Zap,
  Gauge,
  Settings,
  Box,
  Home,
  ArrowRight,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Energieverteilung",
    description: "Maßgeschneiderte Energieverteilungslösungen für Industrie, Gewerbe und öffentliche Gebäude. Von der Planung bis zur Inbetriebnahme.",
    features: ["Schaltanlagen", "Unterverteilungen", "Hauptverteilungen"],
    image: "/images/energieverteiler.jpg",
    gradient: "from-primary to-primary/80",
  },
  {
    icon: Gauge,
    title: "Zähleranlagen",
    description: "Professionelle Zähleranlagen und Messeinrichtungen nach aktuellen Normen und Vorschriften für präzise Energieerfassung.",
    features: ["Zählerschränke", "Messeinrichtungen", "Smart Metering"],
    image: "/images/zaehlerschrank.jpg",
    gradient: "from-primary/90 to-accent/80",
  },
  {
    icon: Settings,
    title: "Steuerungstechnik",
    description: "Intelligente Steuerungssysteme für automatisierte Prozesse. Wir entwickeln individuelle Lösungen für Ihre Anforderungen.",
    features: ["SPS-Programmierung", "Automatisierung", "Prozesssteuerung"],
    image: "/images/steuerung.jpg",
    gradient: "from-accent to-accent/80",
  },
  {
    icon: Box,
    title: "Installationsverteiler",
    description: "Hochwertige Installationsverteiler in Isolierstoffausführung mit IP65 Schutzart für maximale Sicherheit und Langlebigkeit.",
    features: ["IP65 Schutzart", "Isolierstoff", "Maßanfertigung"],
    image: "/images/elektriker.jpg",
    gradient: "from-accent/90 to-primary/80",
  },
  {
    icon: Home,
    title: "Smart Home",
    description: "Intelligente Modernisierung für mehr Komfort, Sicherheit und Energieeffizienz in Ihrem Zuhause oder Gebäude.",
    features: ["Gebäudeautomation", "Energiemanagement", "Altersgerechtes Wohnen"],
    image: "/images/smart-home.jpg",
    gradient: "from-primary/80 to-accent",
  },
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="leistungen" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full gradient-radial opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 decoration-lines" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Unsere Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="text-gradient">Leistungen</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Von der Energieverteilung bis zur intelligenten Gebäudetechnik -
            wir bieten Ihnen das komplette Spektrum moderner Elektrotechnik.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-border card-3d ${
                visibleCards.includes(index) ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />

                {/* Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`p-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300 ${
                    hoveredCard === index ? "scale-110 rotate-3" : ""
                  }`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-foreground">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div
            data-index={5}
            className={`group relative rounded-2xl overflow-hidden ${
              visibleCards.includes(5) ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "500ms" }}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />

            {/* Pattern */}
            <div className="absolute inset-0 decoration-dots opacity-10" />

            {/* Animated Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="relative p-8 h-full flex flex-col justify-center text-white">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  Individuell
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Sie haben ein spezielles Projekt?
              </h3>
              <p className="text-white/95 mb-8 leading-relaxed">
                Wir entwickeln individuelle Lösungen für Ihre spezifischen Anforderungen.
                Kontaktieren Sie uns für eine unverbindliche Beratung.
              </p>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-xl font-semibold transition-all hover:bg-white/90 hover:shadow-xl hover:-translate-y-1 self-start"
              >
                Jetzt anfragen
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "500+", label: "Abgeschlossene Projekte" },
            { value: "25+", label: "Jahre Erfahrung" },
            { value: "100%", label: "Qualitätsgarantie" },
          ].map((stat, index) => (
            <div
              key={index}
              data-index={6 + index}
              className={`${visibleCards.includes(6 + index) ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
