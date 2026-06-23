import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { Services } from "@/components/sections/Services";
import { Process as IndustriesSection } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CaseStudies as LatestTechnology } from "@/components/sections/CaseStudies";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "GenMatrixo — Premium AI Engineering & Enterprise Software",
  description:
    "Delivering innovative solutions tailored to your business needs, we help companies optimize operations and achieve growth.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Carousel */}
      <Hero />
      
      {/* 2. Facts Stats Block */}
      <CredibilityBar />
      
      {/* 3. About Us Section */}
      <AboutUsSection />
      
      {/* 4. Why Choose Us Features */}
      <ProblemStatement />
      
      {/* 5. Our Services Grid */}
      <Services />
      
      {/* 6. Industries We Serve (originally Process.tsx) */}
      <IndustriesSection />
      
      {/* 7. Client Testimonials */}
      <Testimonials />
      
      {/* 8. Frequently Asked Questions */}
      <FAQ />
      
      {/* 9. Latest Technology / Blog (originally CaseStudies.tsx) */}
      <LatestTechnology />
      
      {/* 10. Quote Form Request */}
      <FinalCTA />
    </>
  );
}
