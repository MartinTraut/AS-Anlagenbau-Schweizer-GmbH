import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anlagenbau-schweizer.de"),
  title: {
    default: "AS Anlagenbau Schweizer GmbH | Elektrotechnik & Energieverteilung Talheim",
    template: "%s | AS Anlagenbau Schweizer GmbH",
  },
  description:
    "Ihr kompetenter Partner für Elektrotechnik, Energieverteilung, Steuerungstechnik und Smart Home in Talheim. Zertifizierter e-masters Fachbetrieb mit über 25 Jahren Erfahrung.",
  keywords: [
    "Anlagenbau",
    "Elektrotechnik",
    "Energieverteilung",
    "Steuerungstechnik",
    "Smart Home",
    "Talheim",
    "Zähleranlagen",
    "Schaltanlagen",
    "e-masters",
    "Elektriker",
    "Elektroinstallation",
  ],
  authors: [{ name: "AS Anlagenbau Schweizer GmbH" }],
  creator: "AS Anlagenbau Schweizer GmbH",
  publisher: "AS Anlagenbau Schweizer GmbH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://anlagenbau-schweizer.de",
    siteName: "AS Anlagenbau Schweizer GmbH",
    title: "AS Anlagenbau Schweizer GmbH | Elektrotechnik & Energieverteilung",
    description:
      "Ihr kompetenter Partner für Elektrotechnik, Energieverteilung, Steuerungstechnik und Smart Home in Talheim.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AS Anlagenbau Schweizer GmbH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AS Anlagenbau Schweizer GmbH | Elektrotechnik & Energieverteilung",
    description:
      "Ihr kompetenter Partner für Elektrotechnik, Energieverteilung, Steuerungstechnik und Smart Home in Talheim.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
