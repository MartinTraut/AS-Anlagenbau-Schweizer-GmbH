"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Zap, Shield, Clock, Award } from "lucide-react";

const features = [
  { icon: Zap, text: "Innovative Lösungen" },
  { icon: Shield, text: "Höchste Qualität" },
  { icon: Clock, text: "Termingerecht" },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;

      heroRef.current.style.setProperty("--mouse-x", `${x}px`);
      heroRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/header.jpg"
          alt="Elektrotechnik Hintergrund"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-accent/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"
          style={{ transform: "translate(var(--mouse-x, 0), var(--mouse-y, 0))" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float delay-300"
          style={{ transform: "translate(calc(var(--mouse-x, 0) * -1), calc(var(--mouse-y, 0) * -1))" }}
        />

        {/* Morphing Shape */}
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-white/10 to-accent/10 morph" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 decoration-grid opacity-20" />

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <line
            x1="0" y1="30%" x2="100%" y2="30%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-shimmer"
          />
          <line
            x1="0" y1="70%" x2="100%" y2="70%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-shimmer delay-500"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-slide-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Ihr Partner für Elektrotechnik seit über 25 Jahren
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up delay-100">
              Professioneller
              <span className="block mt-2">
                <span className="relative inline-block">
                  <span className="text-white drop-shadow-lg">Anlagenbau</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path
                      d="M2 10C50 4 150 2 298 10"
                      stroke="url(#underlineGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="50%" stopColor="#3EB311" />
                        <stop offset="100%" stopColor="#ffffff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </span>
              <span className="block text-white">aus Talheim</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up delay-200 leading-relaxed">
              Wir realisieren Ihre individuellen Projekte im Bereich Energieverteilung,
              Steuerungstechnik und Smart Home - kompetent, zuverlässig und termingerecht.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 animate-slide-up delay-300">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
                >
                  <feature.icon className="w-4 h-4 text-accent" />
                  <span className="text-white/90 text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up delay-400">
              <a
                href="#kontakt"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:shadow-2xl hover:shadow-white/25 hover:-translate-y-1 ripple"
              >
                Projekt anfragen
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
              >
                Unsere Leistungen
              </a>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="relative animate-scale-in delay-500">
            {/* Main Card */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-xl opacity-50" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-accent to-primary rounded-2xl">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-semibold">
                      Warum AS Anlagenbau?
                    </h3>
                    <p className="text-white/90 text-sm">Ihr Vorteil auf einen Blick</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Fachkundige Beratung",
                    "Zuverlässige Ausführung",
                    "Faire Preisgestaltung",
                    "Termingerechte Fertigstellung",
                    "Zertifizierter e-masters Betrieb",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-white group"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
                  {[
                    { value: "25+", label: "Jahre Erfahrung" },
                    { value: "500+", label: "Projekte" },
                    { value: "100%", label: "Zufriedenheit" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-accent transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-white/90 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 animate-bounce-subtle">
              <div className="relative">
                <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-50" />
                <div className="relative bg-gradient-to-r from-accent to-primary text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-xl flex items-center gap-2">
                  <Image
                    src="/images/e-masters.png"
                    alt="e-masters"
                    width={80}
                    height={15}
                    className="h-4 w-auto"
                  />
                  e-masters zertifiziert
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
