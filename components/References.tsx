"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote, Building2, Home, Factory, Award } from "lucide-react";

const testimonials = [
  {
    name: "Thomas M.",
    role: "Geschäftsführer",
    company: "Industrieunternehmen",
    icon: Factory,
    content: "Die AS Anlagenbau Schweizer GmbH hat unsere komplette Energieverteilung modernisiert. Professionelle Arbeit, termingerecht und zu einem fairen Preis. Absolut empfehlenswert!",
    rating: 5,
    project: "Energieverteilung",
  },
  {
    name: "Sandra K.",
    role: "Hauseigentümerin",
    company: "Privatkunde",
    icon: Home,
    content: "Unser Smart Home Projekt wurde perfekt umgesetzt. Die Beratung war kompetent und die Ausführung einwandfrei. Wir sind begeistert von der neuen Technik!",
    rating: 5,
    project: "Smart Home",
  },
  {
    name: "Michael R.",
    role: "Facility Manager",
    company: "Gewerbeimmobilien",
    icon: Building2,
    content: "Seit Jahren unser zuverlässiger Partner für alle elektrotechnischen Anlagen. Schnelle Reaktionszeiten und exzellenter Service.",
    rating: 5,
    project: "Steuerungstechnik",
  },
];

const stats = [
  { value: "500+", label: "Projekte", icon: Award },
  { value: "100%", label: "Zufriedenheit", icon: Star },
  { value: "25+", label: "Jahre Erfahrung", icon: Building2 },
];

export default function References() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            if (index !== null) {
              setVisibleCards((prev) => [...new Set([...prev, parseInt(index)])]);
            } else {
              setIsVisible(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      const cards = sectionRef.current.querySelectorAll("[data-index]");
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="referenzen" className="section-padding bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 decoration-grid opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-full gradient-radial opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold">Kundenstimmen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Was unsere <span className="text-gradient">Kunden</span> sagen
          </h2>
          <p className="text-lg text-muted-foreground">
            Überzeugen Sie sich von der Qualität unserer Arbeit durch die Erfahrungen unserer zufriedenen Kunden.
          </p>
        </div>

        {/* Stats Bar */}
        <div className={`bg-gradient-to-r from-primary via-primary/95 to-accent rounded-2xl p-6 mb-12 ${isVisible ? "animate-slide-up delay-100" : "opacity-0"}`}>
          <div className="grid grid-cols-3 divide-x divide-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white px-4">
                <div className="text-3xl lg:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/90 text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative bg-secondary rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 ${
                visibleCards.includes(index) ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Project Tag */}
              <div className="flex justify-end mb-4">
                <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {testimonial.project}
                </span>
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                  <testimonial.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className={`mt-12 text-center ${isVisible ? "animate-slide-up delay-500" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary rounded-full border border-border">
            <div className="flex -space-x-2">
              {[Building2, Home, Factory].map((Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center border-2 border-white"
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-semibold text-foreground">500+ zufriedene Kunden</span>
              <span className="text-muted-foreground"> vertrauen uns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
