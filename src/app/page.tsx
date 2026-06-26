import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { Services } from "@/components/sections/Services";
import { SaaSShowcase } from "@/components/sections/SaaSShowcase";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { IndustriesWeServe } from "@/components/sections/IndustriesWeServe";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "GenMatrixo — Custom Software, Web Apps & Digital Solutions",
  description:
    "We create websites, mobile applications, SaaS platforms, and custom software solutions that help businesses scale faster.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section (Headline, Subheadline, Mock Dashboard, Grayscale Logos) */}
      <Hero />
      
      {/* 2. Proof Metrics Section */}
      <CredibilityBar />
      
      {/* 3. Services Grid (7 Core Capabilities) */}
      <Services />

      {/* 4. Build Your SaaS Product breakout */}
      <SaaSShowcase />
      
      {/* 5. Featured Case Studies */}
      <CaseStudies />

      {/* 6. Industries We Serve */}
      <IndustriesWeServe />
      
      {/* 7. Our Process Timeline (6 Stages) */}
      <Process />

      {/* 8. Tech Stack Visual Grid */}
      <TechStack />
      
      {/* 9. Client Testimonials */}
      <Testimonials />
      
      {/* 10. Frequently Asked Questions (Accordion) */}
      <FAQ />
      
      {/* 11. Interactive Discovery Call Scheduler */}
      <FinalCTA />
    </>
  );
}
