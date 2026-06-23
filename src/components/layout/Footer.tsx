import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-canvas text-ink py-16 border-t border-hairline">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Branding column */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 group shrink-0"
            >
              <span className="w-3 h-3 rounded-full bg-ember-outline" />
              <span className="text-pure-black font-display font-medium text-[16px] tracking-[0.08em] uppercase">
                GenMatrixo
              </span>
            </Link>
            <p className="text-graphite font-sans text-xs leading-relaxed max-w-sm">
              Delivering innovative solutions tailored to your business needs, we help companies optimize operations and achieve growth. Our team of experts ensures high-quality results, combining technology, strategy, and efficiency to drive success.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.instagram.com/gen_matrixo/" target="_blank" rel="noopener noreferrer" className="text-graphite hover:text-pure-black transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.linkedin.com/in/gen-matrixo-161758390/" target="_blank" rel="noopener noreferrer" className="text-graphite hover:text-pure-black transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61582642093612" target="_blank" rel="noopener noreferrer" className="text-graphite hover:text-pure-black transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick links (Pages) */}
          <div>
            <h4 className="font-sans font-bold text-xs tracking-[0.1em] uppercase text-pure-black mb-4">
              Pages
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="font-sans text-xs text-graphite hover:text-pure-black hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-sans text-xs text-graphite hover:text-pure-black hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-sans text-xs text-graphite hover:text-pure-black hover:underline transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-sans text-xs text-graphite hover:text-pure-black hover:underline transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="font-sans font-bold text-xs tracking-[0.1em] uppercase text-pure-black mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="font-sans text-xs text-graphite hover:text-pure-black hover:underline transition-colors">
                  AI Pipelines
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-sans text-xs text-graphite hover:text-pure-black hover:underline transition-colors">
                  Web Runtimes
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-sans text-xs text-graphite hover:text-pure-black hover:underline transition-colors">
                  Custom APIs
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-sans text-xs text-graphite hover:text-pure-black hover:underline transition-colors">
                  IT Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info (Get in Touch) */}
          <div>
            <h4 className="font-sans font-bold text-xs tracking-[0.1em] uppercase text-pure-black mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-xs text-graphite">
                <Mail size={13} className="text-stone-border shrink-0" />
                <a href="mailto:info.genmatrixo@gmail.com" className="hover:text-pure-black hover:underline">
                  info.genmatrixo@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs text-graphite">
                <Phone size={13} className="text-stone-border shrink-0" />
                <a href="tel:+918824584530" className="hover:text-pure-black hover:underline">
                  +91 88245 84530
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs text-graphite">
                <MapPin size={13} className="text-stone-border shrink-0 mt-0.5" />
                <span className="leading-tight">
                  Mansarovar, Jaipur, Rajasthan 302020
                </span>
              </li>
              <li className="flex items-start gap-2 text-xs text-graphite">
                <MapPin size={13} className="text-stone-border shrink-0 mt-0.5" />
                <span className="leading-tight">
                  Chandra Shekhar Azad Nagar, Bhilwara 311001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-graphite">
          <div>
            © 2025 Genmatrixo. All Rights Reserved.
          </div>
          <div>
            Designed with Precision
          </div>
        </div>
      </div>
    </footer>
  );
}
