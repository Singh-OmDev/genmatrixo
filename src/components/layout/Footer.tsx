"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

export function Footer() {
  return (
    <footer className="relative bg-[#3a2234] pt-24 pb-12 border-t-4 border-black overflow-hidden">
      {/* Decorative background grids/blobs for visual depth */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none grid-bg" 
        style={{ backgroundSize: "40px 40px" }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full filter blur-[120px] pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #7575f0 0%, transparent 70%)" }}
      />
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

          {/* Branding column */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center text-black text-[14px] font-extrabold shrink-0 border-2 border-black bg-white shadow-[rgba(0,0,0,0.15)_0px_2px_2px_0px] group-hover:scale-105 transition-transform"
              >
                G
              </span>
              <span
                className="font-display font-bold text-white tracking-tight text-lg"
              >
                GenMatrixo
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed text-sm max-w-[260px]">
              We engineer high-performance web applications, mobile apps, SaaS platforms, and bespoke custom software solutions built for business growth.
            </p>
            
            {/* Social Icons - Sticker Pack Style */}
            <div className="flex items-center gap-3 pt-2">
              <Magnetic strength={0.3}>
                <a
                  href="https://www.linkedin.com/company/genmatrixo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black border-2 border-black shadow-[rgba(255,255,255,0.15)_0px_1px_1px_0px_inset,_rgba(0,0,0,0.25)_0px_3px_3px_0px] hover:bg-[#3cdd8c] active:translate-y-0.5 transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </Magnetic>
              
              <Magnetic strength={0.3}>
                <a
                  href="https://instagram.com/genmatrixo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black border-2 border-black shadow-[rgba(255,255,255,0.15)_0px_1px_1px_0px_inset,_rgba(0,0,0,0.25)_0px_3px_3px_0px] hover:bg-[#e699d9] active:translate-y-0.5 transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Pages Column */}
          <div>
            <h4
              className="font-display font-bold text-[#ffeecc] mb-6 uppercase tracking-[0.2em] text-xs"
            >
              Pages
            </h4>
            <ul className="space-y-3.5">
              {[
                { label: "Home", href: "/" },
                { label: "Our Services", href: "/services" },
                { label: "Projects & Case Studies", href: "/projects" },
                { label: "Insights & Blog", href: "/blog" },
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/60 hover:text-white hover:underline decoration-2 decoration-[#7575f0] underline-offset-4 transition-colors text-sm font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Column */}
          <div>
            <h4
              className="font-display font-bold text-[#ffeecc] mb-6 uppercase tracking-[0.2em] text-xs"
            >
              Capabilities
            </h4>
            <ul className="space-y-3.5">
              {[
                "Web Development",
                "Mobile App Development",
                "SaaS Engineering",
                "Custom Software Development",
                "UI/UX Product Design",
                "Technology Strategy & IT Consulting",
              ].map((cap) => (
                <li key={cap}>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-white hover:underline decoration-2 decoration-[#3cdd8c] underline-offset-4 transition-colors text-sm font-medium"
                  >
                    {cap}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch Column */}
          <div>
            <h4
              className="font-display font-bold text-[#ffeecc] mb-6 uppercase tracking-[0.2em] text-xs"
            >
              Get in Touch
            </h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-3.5 group">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 border-2 border-black bg-[#d4f7e6] text-[#3a2234] shadow-[rgba(0,0,0,0.18)_0px_2px_2px_0px] group-hover:scale-105 transition-transform"
                >
                  <Mail size={14} className="stroke-[2]" />
                </div>
                <a
                  href="mailto:info.genmatrixo@gmail.com"
                  className="text-white/60 hover:text-white transition-colors text-sm font-medium"
                >
                  info.genmatrixo@gmail.com
                </a>
              </li>
              
              <li className="flex items-center gap-3.5 group">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 border-2 border-black bg-[#ffeecc] text-[#3a2234] shadow-[rgba(0,0,0,0.18)_0px_2px_2px_0px] group-hover:scale-105 transition-transform"
                >
                  <Phone size={14} className="stroke-[2]" />
                </div>
                <a
                  href="tel:+918824584530"
                  className="text-white/60 hover:text-white transition-colors text-sm font-medium"
                >
                  +91 88245 84530
                </a>
              </li>
              
              <li className="flex items-start gap-3.5 group">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5 border-2 border-black bg-[#e8e8fc] text-[#3a2234] shadow-[rgba(0,0,0,0.18)_0px_2px_2px_0px] group-hover:scale-105 transition-transform"
                >
                  <MapPin size={14} className="stroke-[2]" />
                </div>
                <div className="text-white/60 leading-relaxed text-sm font-medium">
                  <div>Mansarovar, Jaipur, RJ 302020</div>
                  <div className="mt-1.5">Bhilwara, RJ 311001</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="text-white/40 text-xs font-medium">
            © {new Date().getFullYear()} GenMatrixo. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-full border-2 border-black font-bold text-[#3a2234] text-xs shadow-[rgba(0,0,0,0.18)_0px_2px_2px_0px] select-none cursor-default"
              style={{ background: "#d4f7e6" }}
            >
              Engineered with Precision
            </span>
          </div>
        </div>

        {/* Massive Low-Opacity Brand Signature watermark */}
        <div 
          className="text-white/[0.02] select-none text-center font-display font-extrabold tracking-widest text-[clamp(50px,12vw,130px)] leading-none mt-16 pointer-events-none uppercase"
        >
          GenMatrixo
        </div>
      </div>
    </footer>
  );
}
