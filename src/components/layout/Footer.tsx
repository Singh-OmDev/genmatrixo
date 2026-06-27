"use client";

import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";

export function Footer() {
  return (
    <footer className="relative bg-[#3a2234] pt-20 pb-12 border-t-4 border-black overflow-hidden">
      {/* Subtle decorative gradient flare */}
      <div 
        className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full filter blur-[100px] pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #7575f0 0%, transparent 70%)" }}
      />
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">

          {/* Left Column: Branding */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-black text-[12px] font-extrabold shrink-0 border border-black bg-white shadow-[0_2px_2px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform"
              >
                G
              </span>
              <span className="font-display font-semibold text-white tracking-tight text-md">
                GenMatrixo
              </span>
            </Link>
            <p className="text-white/50 leading-relaxed text-sm max-w-[280px]">
              Engineering high-performance web apps, mobile solutions, and custom SaaS platforms built to scale.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <Magnetic strength={0.25}>
                <a
                  href="https://www.linkedin.com/company/genmatrixo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </Magnetic>
              
              <Magnetic strength={0.25}>
                <a
                  href="https://instagram.com/genmatrixo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Spacer Column */}
          <div className="hidden md:block md:col-span-1" />

          {/* Middle Column: Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-white/40 mb-5 uppercase tracking-[0.25em] text-[10px] font-bold">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "Blog", href: "/blog" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/60 hover:text-white transition-colors text-sm font-normal"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Contact details */}
          <div className="md:col-span-3">
            <h4 className="text-white/40 mb-5 uppercase tracking-[0.25em] text-[10px] font-bold">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info.genmatrixo@gmail.com"
                  className="text-white/60 hover:text-white transition-colors text-sm break-all font-normal"
                >
                  info.genmatrixo@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918824584530"
                  className="text-white/60 hover:text-white transition-colors text-sm font-normal"
                >
                  +91 88245 84530
                </a>
              </li>
              <li className="text-white/40 text-xs font-normal pt-1">
                Jaipur, India
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="text-white/30 text-xs font-normal">
            © {new Date().getFullYear()} GenMatrixo. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3cdd8c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3cdd8c]"></span>
            </span>
            <span className="text-white/40 text-xs font-medium">Available for new projects</span>
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
