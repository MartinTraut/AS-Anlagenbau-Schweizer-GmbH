"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  MessageSquare
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 7133 9289967",
    href: "tel:+4971339289967",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@anlagenbau-schweizer.de",
    href: "mailto:info@anlagenbau-schweizer.de",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Schindersgrube 77, 74388 Talheim",
    href: "https://maps.google.com/?q=Schindersgrube+77+74388+Talheim",
  },
  {
    icon: Clock,
    label: "Öffnungszeiten",
    value: "Mo-Fr: 7:00 - 16:00 Uhr",
    href: null,
  },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", phone: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="kontakt" className="section-padding bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute top-0 left-0 w-1/2 h-full gradient-radial opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 decoration-grid opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-semibold">Kontakt</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Starten Sie Ihr <span className="text-gradient">Projekt</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Kontaktieren Sie uns für eine unverbindliche Beratung.
            Wir freuen uns auf Ihre Anfrage!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className={`lg:col-span-2 ${isVisible ? "animate-slide-in-left delay-100" : "opacity-0"}`}>
            <div className="bg-gradient-to-br from-primary via-primary/95 to-accent rounded-3xl p-8 text-white h-full relative overflow-hidden">
              {/* Pattern */}
              <div className="absolute inset-0 decoration-dots opacity-10" />

              <div className="relative">
                {/* Logo */}
                <div className="mb-6">
                  <Image
                    src="/logo.svg"
                    alt="AS Anlagenbau Schweizer GmbH"
                    width={150}
                    height={40}
                    className="h-10 w-auto brightness-0 invert"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4">Kontaktdaten</h3>
                <p className="text-white/95 mb-8 leading-relaxed">
                  Rufen Sie uns an oder schreiben Sie uns.
                  Wir melden uns schnellstmöglich bei Ihnen.
                </p>

                <div className="space-y-5">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="p-3 bg-white/15 rounded-xl group-hover:bg-white/25 transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-white/90 mb-1">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="font-medium text-white hover:text-white/90 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="font-medium text-white">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mt-10 pt-8 border-t border-white/20">
                  <h4 className="font-semibold mb-4">Schnellkontakt</h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:+4971339289967"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-primary rounded-xl font-semibold transition-all hover:bg-white/90 hover:-translate-y-0.5"
                    >
                      <Phone className="w-4 h-4" />
                      Anrufen
                    </a>
                    <a
                      href="mailto:info@anlagenbau-schweizer.de"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 text-white rounded-xl font-semibold transition-all hover:bg-white/20"
                    >
                      <Mail className="w-4 h-4" />
                      E-Mail
                    </a>
                  </div>
                </div>

                {/* e-masters Badge */}
                <div className="mt-8 flex items-center gap-3">
                  <Image
                    src="/images/e-masters.png"
                    alt="e-masters"
                    width={80}
                    height={15}
                    className="h-4 w-auto"
                  />
                  <span className="text-sm text-white/80">e-masters zertifiziert</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 ${isVisible ? "animate-slide-in-right delay-200" : "opacity-0"}`}>
            <div className="bg-white rounded-3xl shadow-xl border border-border p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Anfrage senden</h3>
              <p className="text-muted-foreground mb-8">
                Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Nachricht gesendet!
                  </h4>
                  <p className="text-muted-foreground">
                    Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="+49 123 456789"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Betreff *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      >
                        <option value="">Bitte wählen</option>
                        <option value="energieverteilung">Energieverteilung</option>
                        <option value="zaehleranlagen">Zähleranlagen</option>
                        <option value="steuerungstechnik">Steuerungstechnik</option>
                        <option value="smarthome">Smart Home</option>
                        <option value="sonstiges">Sonstiges</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Beschreiben Sie Ihr Projekt..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                      * Pflichtfelder
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          Anfrage senden
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className={`mt-16 ${isVisible ? "animate-slide-up delay-300" : "opacity-0"}`}>
          <div className="bg-secondary rounded-3xl overflow-hidden border border-border">
            <div className="grid lg:grid-cols-3">
              <div className="p-8 lg:p-12">
                <h3 className="text-xl font-bold text-foreground mb-4">So finden Sie uns</h3>
                <p className="text-muted-foreground mb-6">
                  Besuchen Sie uns in Talheim. Wir freuen uns auf Ihren Besuch!
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Schindersgrube 77</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <span className="w-5" />
                    <span>74388 Talheim</span>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Schindersgrube+77+74388+Talheim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Route planen
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="lg:col-span-2 h-64 lg:h-auto bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center relative overflow-hidden">
                {/* Decorative Map Pattern */}
                <div className="absolute inset-0 decoration-grid opacity-50" />

                <div className="text-center p-8 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Interaktive Karte laden
                  </p>
                  <a
                    href="https://maps.google.com/?q=Schindersgrube+77+74388+Talheim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
                  >
                    In Google Maps öffnen
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
