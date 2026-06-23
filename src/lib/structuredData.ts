// GenMatrixo V2 — JSON-LD Structured Data

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GenMatrixo",
  url: "https://genmatrixo.com",
  logo: "https://genmatrixo.com/logo.png",
  description:
    "GenMatrixo is a premium AI engineering studio building AI systems, enterprise web applications, and custom software infrastructure.",
  telephone: "+91-88245-84530",
  email: "info.genmatrixo@gmail.com",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Mansarovar",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302020",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Chandra Shekhar Azad Nagar",
      addressLocality: "Bhilwara",
      addressRegion: "Rajasthan",
      postalCode: "311001",
      addressCountry: "IN",
    },
  ],
  sameAs: [
    "https://www.instagram.com/gen_matrixo/",
    "https://www.linkedin.com/in/gen-matrixo-161758390/",
    "https://www.facebook.com/profile.php?id=61582642093612",
  ],
  serviceType: [
    "AI Systems Engineering",
    "Automation Pipeline Development",
    "Custom Web Application Development",
    "Mobile Application Development",
    "IT Infrastructure Consulting",
    "Cloud Architecture",
  ],
  areaServed: "IN",
  priceRange: "$$",
};

export const webPageSchema = (
  name: string,
  description: string,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name,
  description,
  url,
  isPartOf: {
    "@type": "WebSite",
    name: "GenMatrixo",
    url: "https://genmatrixo.com",
  },
});
