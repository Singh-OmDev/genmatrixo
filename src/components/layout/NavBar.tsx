"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const pathname = usePathname();

  // Avoid hydration mismatch — only use pathname after mount
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Floating pill nav ── */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="flex items-center justify-between gap-6 w-full" style={{ maxWidth: 1200 }}>
          <div
            className="flex items-center gap-2 px-3 py-2 w-full"
            style={{
              background: "#e8e8fc",
              borderRadius: 9999,
              boxShadow: "rgba(255,255,255,0.5) 0px 2px 2px 0px, rgba(0,0,0,0.2) 0px 3px 3px 0px",
            }}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0 mr-2">
              <Magnetic strength={0.25}>
                <div className="flex items-center gap-2">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0 hover:scale-110 transition-transform"
                    style={{ background: "#000" }}
                  >
                    G
                  </span>
                  <span className="font-display font-semibold text-[15px] text-black tracking-tight hidden sm:inline">
                    GenMatrixo
                  </span>
                </div>
              </Magnetic>
            </Link>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1.5" onMouseLeave={() => setHoveredPath(null)}>
              {navLinks.map((link) => {
                const isActive = mounted && pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredPath(link.href)}
                    className={cn(
                      "relative px-4 py-2 text-[14px] font-medium rounded-full select-none transition-colors duration-200",
                      isActive
                        ? "text-black font-semibold"
                        : "text-black/60 hover:text-black"
                    )}
                  >
                    {/* Hover pill sliding background */}
                    {hoveredPath === link.href && !isActive && (
                      <motion.div
                        layoutId="hover-nav-pill"
                        className="absolute inset-0 bg-black/5 rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}

                    {/* Active pill sliding background — styled as white sticker badge */}
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-pill"
                        className="absolute inset-0 bg-white rounded-full border-2 border-black"
                        style={{
                          boxShadow: "rgba(255, 255, 255, 0.5) 0px 2px 2px 0px, rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
                        }}
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}
                    
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center shrink-0"
            >
              <Magnetic strength={0.35}>
                <span
                  className="inline-flex items-center gap-1.5 ml-2 px-5 py-2 text-[14px] font-medium text-white rounded-[9999px] shimmer-hover transition-all duration-150 hover:bg-neutral-800 active:scale-[0.97]"
                  style={{
                    background: "#000",
                    boxShadow: "rgba(255,255,255,0.5) 0px 2px 2px 0px, rgba(0,0,0,0.2) 0px 3px 3px 0px",
                  }}
                >
                  Start Project
                </span>
              </Magnetic>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-1.5 rounded-full text-black hover:bg-black/10 transition-colors ml-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 pt-[80px] flex flex-col"
            style={{ background: "#e8e8fc" }}
          >
            <nav className="flex flex-col px-6 pt-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center px-5 py-3.5 text-[15px] font-medium rounded-[9999px] transition-all",
                      mounted && pathname === link.href
                        ? "bg-white text-black border-2 border-black font-bold shadow-sticker"
                        : "text-black hover:bg-black/5"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28 }}
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full py-3.5 text-[15px] font-medium text-white rounded-[9999px] shimmer-hover transition-colors hover:bg-neutral-800"
                  style={{
                    background: "#000",
                    boxShadow: "rgba(255,255,255,0.5) 0px 2px 2px 0px, rgba(0,0,0,0.2) 0px 3px 3px 0px",
                  }}
                >
                  Start Project
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
