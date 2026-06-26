import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { organizationSchema } from "@/lib/structuredData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://genmatrixo.com"),
  title: {
    default: "GenMatrixo — Custom Software, Web Apps & Digital Solutions",
    template: "%s | GenMatrixo",
  },
  description:
    "GenMatrixo is a premium digital product studio. We engineer high-performance web applications, mobile apps, SaaS platforms, and bespoke custom software solutions that help businesses scale faster.",
  keywords: [
    "custom software development",
    "web app engineering",
    "SaaS platform development",
    "mobile app development",
    "digital solutions",
    "tech consulting",
    "GenMatrixo",
    "enterprise software development"
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://genmatrixo.com",
    siteName: "GenMatrixo",
    title: "GenMatrixo — Custom Software, Web Apps & Digital Solutions",
    description:
      "Premium digital product studio. High-performance web apps, mobile apps, SaaS platforms, and bespoke custom software solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GenMatrixo — Custom Software, Web Apps & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GenMatrixo — Custom Software, Web Apps & Digital Solutions",
    description: "Premium digital product studio building software that scales.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://genmatrixo.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <NavBar />
        <main className="flex flex-col w-full min-h-screen" style={{ fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
