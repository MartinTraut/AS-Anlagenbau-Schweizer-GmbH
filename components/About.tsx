"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award, Users, Target, TrendingUp, CheckCircle, Wrench } from "lucide-react";

const stats = [
  { icon: Award, value: "25+", label: "Jahre Erfahrung", suffix: "" },
  { icon: Users, value: "500", label: "Zufriedene Kunden", suffix: "+" },
  { icon: Target, value: "100", label: "Zufriedenheit", suffix: "%" },
  { icon: TrendingUp, value: "1000", label: "Projekte", suffix: "+" },
];

const values = [
  {
    title: "Qualität",
    description: "Höchste Qualitätsstandards bei Material und Ausführung",
  },
  {
    title: "Zuverlässigkeit",
    description: "Termingerechte Fertigstellung und verbindliche Zusagen",
  },
  {
    title: "Innovation",
    description: "Moderne Technologien und zukunftssichere Lösungen",
  },
  {
    title: "Partnerschaft",
    description: "Langfristige Kundenbeziehungen auf Augenhöhe",
  },
];

const partners = [
  "Brumberg", "Busch-Jaeger", "Gira", "Siemens", "Schneider Electric", "STIEBEL ELTRON"
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="ueber-uns" className="section-padding bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Background Decoration */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 gradient-radial opacity-30" />
      <div className="absolute inset-0 decoration-grid opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left - Image/Visual */}
          <div className={`relative ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Visual Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl transform rotate-3 opacity-20" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl border border-border overflow-hidden">
                {/* Image Background */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/elektriker.jpg"
                    alt="Elektriker bei der Arbeit"
                    fill
                    quality={100}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-20"
                  />
                </div>

                <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                  {/* Logo */}
                  <div className="mb-6">
                    <Image
                      src="/logo.svg"
                      alt="AS Anlagenbau Schweizer GmbH"
                      width={200}
                      height={52}
                      className="h-14 w-auto"
                    />
                  </div>

                  {/* e-masters Badge */}
                  <div className="flex items-center gap-3 mb-6 px-4 py-2 bg-primary/10 rounded-xl">
                    <Image
                      src="/images/e-masters.png"
                      alt="e-masters"
                      width={100}
                      height={19}
                      className="h-5 w-auto"
                    />
                    <span className="text-primary font-semibold">Zertifizierter Fachbetrieb</span>
                  </div>

                  <p className="text-muted-foreground mb-6">Ihr Partner für Elektrotechnik</p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {["DIN EN ISO", "VDE", "TAB"].map((cert, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-border animate-bounce-subtle">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Zertifiziert</div>
                    <div className="text-sm text-muted-foreground">Geprüfte Qualität</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-border animate-float delay-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Familienbetrieb</div>
                    <div className="text-sm text-muted-foreground">Seit über 25 Jahren</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={isVisible ? "animate-slide-in-right delay-200" : "opacity-0"}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">Über uns</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ihr Partner für <span className="text-gradient">Elektrotechnik</span> in der Region
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Die AS Anlagenbau Schweizer GmbH ist Ihr kompetenter Ansprechpartner für alle Bereiche
              der Elektrotechnik. Mit über 25 Jahren Erfahrung und einem hochqualifizierten Team
              realisieren wir Projekte jeder Größenordnung.
            </p>
            <p className="text-muted-foreground mb-8">
              Als zertifizierter e-masters Fachbetrieb stehen wir für höchste Qualitätsstandards,
              fachkundige Beratung und zuverlässige Ausführung. Unser Versprechen: Faire Preise
              und termingerechte Fertigstellung.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-secondary to-secondary/50 hover:from-primary/5 hover:to-accent/5 transition-colors group"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{value.title}</div>
                    <div className="text-sm text-muted-foreground">{value.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`bg-gradient-to-r from-primary via-primary/95 to-accent rounded-3xl p-8 lg:p-12 relative overflow-hidden ${isVisible ? "animate-slide-up delay-400" : "opacity-0"}`}>
          {/* Pattern */}
          <div className="absolute inset-0 decoration-dots opacity-10" />

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 bg-white/10 rounded-2xl mb-4 group-hover:bg-white/20 transition-colors">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                  <span className="text-accent">{stat.suffix}</span>
                </div>
                <div className="text-white/95">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className={`mt-20 text-center ${isVisible ? "animate-slide-up delay-500" : "opacity-0"}`}>
          <p className="text-muted-foreground mb-8">Wir arbeiten mit führenden Herstellern zusammen</p>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-secondary rounded-xl text-muted-foreground font-medium hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary transition-all cursor-default border border-transparent hover:border-primary/20"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
