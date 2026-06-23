import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { organizationSchema } from "@/lib/structuredData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://genmatrixo.com"),
  title: {
    default: "GenMatrixo — AI Engineering & Custom Software",
    template: "%s | GenMatrixo",
  },
  description:
    "GenMatrixo builds serious software. We engineer premium AI systems, enterprise web applications, and high-performance custom infrastructure engineered to perform under load.",
  keywords: [
    "AI engineering",
    "custom software development",
    "RAG systems",
    "enterprise web applications",
    "AI automation",
    "GenMatrixo",
    "Jaipur software company",
    "machine learning integration",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://genmatrixo.com",
    siteName: "GenMatrixo",
    title: "GenMatrixo — AI Engineering & Custom Software",
    description:
      "We build serious software. Premium AI systems, enterprise web apps, and custom infrastructure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GenMatrixo — AI Engineering & Custom Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GenMatrixo — AI Engineering & Custom Software",
    description: "We build serious software.",
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
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <NavBar />
        <main className="flex flex-col w-full min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
