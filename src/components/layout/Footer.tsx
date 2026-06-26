import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-black/8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Branding column */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[13px] font-bold shrink-0"
                style={{ background: "#000" }}
              >
                G
              </span>
              <span
                className="font-display font-semibold text-black tracking-tight"
                style={{ fontSize: 16 }}
              >
                GenMatrixo
              </span>
            </Link>
            <p className="text-black/50 leading-relaxed" style={{ fontSize: 14, maxWidth: 240 }}>
              We engineer high-performance web applications, mobile apps, SaaS platforms, and bespoke custom software solutions.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/company/genmatrixo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center text-black/60 hover:text-black transition-colors hover:-translate-y-0.5 transition-transform"
                style={{ background: "#f3f3f3" }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://instagram.com/genmatrixo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center text-black/60 hover:text-black transition-colors hover:-translate-y-0.5 transition-transform"
                style={{ background: "#f3f3f3" }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4
              className="font-display font-medium text-black mb-5 uppercase tracking-widest"
              style={{ fontSize: 11 }}
            >
              Pages
            </h4>
            <ul className="space-y-3">
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
                    className="text-black/50 hover:text-black transition-colors"
                    style={{ fontSize: 14 }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4
              className="font-display font-medium text-black mb-5 uppercase tracking-widest"
              style={{ fontSize: 11 }}
            >
              Capabilities
            </h4>
            <ul className="space-y-3">
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
                    className="text-black/50 hover:text-black transition-colors"
                    style={{ fontSize: 14 }}
                  >
                    {cap}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4
              className="font-display font-medium text-black mb-5 uppercase tracking-widest"
              style={{ fontSize: 11 }}
            >
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "#d4f7e6" }}
                >
                  <Mail size={13} className="text-black" />
                </div>
                <a
                  href="mailto:info.genmatrixo@gmail.com"
                  className="text-black/55 hover:text-black transition-colors"
                  style={{ fontSize: 13 }}
                >
                  info.genmatrixo@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "#ffeecc" }}
                >
                  <Phone size={13} className="text-black" />
                </div>
                <a
                  href="tel:+918824584530"
                  className="text-black/55 hover:text-black transition-colors"
                  style={{ fontSize: 13 }}
                >
                  +91 88245 84530
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "#e8e8fc" }}
                >
                  <MapPin size={13} className="text-black" />
                </div>
                <div className="text-black/55 leading-tight" style={{ fontSize: 13 }}>
                  <div>Mansarovar, Jaipur, RJ 302020</div>
                  <div className="mt-1">Bhilwara, RJ 311001</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
        >
          <div className="text-black/35" style={{ fontSize: 12 }}>
            © {new Date().getFullYear()} GenMatrixo. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center px-3 py-1 rounded-[9999px] text-black font-medium"
              style={{ background: "#d4f7e6", fontSize: 12 }}
            >
              Engineered with Precision
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
