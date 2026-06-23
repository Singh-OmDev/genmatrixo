"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/#latest-technology" },
  { label: "Contact", href: "/contact" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[60px] transition-all duration-150",
          "bg-paper border-b border-hairline"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between gap-8">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 group shrink-0"
          >
            <span className="w-3 h-3 rounded-full bg-ember-outline" />
            <span className="text-pure-black font-display font-medium text-[16px] tracking-[0.08em] uppercase">
              GenMatrixo
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-2 py-1 text-[13px] font-sans font-medium text-ink tracking-[0.1em] uppercase hover:text-pure-black transition-all",
                    isActive && "text-lime-bolt font-semibold"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">


            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-sans font-medium bg-lime-spark text-charcoal border border-lime-spark rounded-pill hover:bg-[#d5eb9b] hover:border-[#d5eb9b] tracking-[0.1em] transition-all"
            >
              Request Quote
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-1.5 text-ink hover:opacity-75 transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-paper pt-16 lg:hidden flex flex-col"
          >
            <nav className="flex flex-col border-t border-hairline">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between px-6 py-4 text-sm font-sans font-medium tracking-[0.1em] border-b border-hairline text-ink uppercase",
                      pathname === link.href && "bg-canvas-inner"
                    )}
                  >
                    {link.label}
                    <ArrowRight size={16} className="text-graphite" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              className="p-6 mt-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 text-xs font-sans font-medium bg-lime-spark text-charcoal border border-lime-spark rounded-pill tracking-[0.1em] shadow-none"
              >
                Request Quote
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
