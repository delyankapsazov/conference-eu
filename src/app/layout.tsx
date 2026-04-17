import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://conference-bg.com"),
  title: {
    default: "Conference BG — Professional Technical Support for Events",
    template: "%s | Conference BG",
  },
  description:
    "Conference BG provides professional technical support for conferences, congresses, working meetings and symposiums — sound systems, simultaneous translation, multimedia and more.",
  keywords: [
    "conference technical support",
    "sound system rental",
    "simultaneous translation",
    "multimedia projector",
    "event lighting",
    "tour guide system",
    "recording streaming",
    "Sofia Bulgaria",
  ],
  authors: [{ name: "Conference BG" }],
  creator: "Conference BG",
  publisher: "Conference BG",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Conference BG",
    title: "Conference BG — Professional Technical Support for Events",
    description:
      "Professional technical support for conferences, congresses, working meetings and symposiums — sound systems, simultaneous translation, multimedia and more.",
    images: [
      {
        url: "/header1.jpg",
        width: 1200,
        height: 630,
        alt: "Conference BG — Technical Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conference BG — Professional Technical Support for Events",
    description:
      "Professional technical support for conferences, congresses and symposiums in Bulgaria.",
    images: ["/header1.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Conference BG",
  url: "https://conference-bg.com",
  telephone: "+359886401306",
  email: "office@konferencia.bg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Rumen voyvoda 2",
    addressLocality: "Sofia",
    postalCode: "1505",
    addressCountry: "BG",
  },
  sameAs: ["https://www.facebook.com/konferencia.bg/", "https://konferencia.bg"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Technical Support Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sound System" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Simultaneous Translation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multimedia" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Design & Lighting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tour Guide System" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Recording & Streaming" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-cuprum">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
