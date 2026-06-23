"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const phone = "918824584530";
  const message = encodeURIComponent("Hi GenMatrixo, I'd like to discuss a project.");
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.15 }}
            className="w-64 rounded-lg border border-hairline bg-paper p-4 shadow-none"
            style={{ borderRadius: "10px" }}
          >
            <p className="text-sm font-sans font-semibold text-pure-black mb-1 tracking-[0.1em]">
              Chat with us
            </p>
            <p className="text-xs font-sans text-graphite mb-4 tracking-[0.1em]">
              Reach our team directly on WhatsApp. We typically respond within a few hours.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-sans font-medium bg-[#25D366] text-white rounded-pill hover:bg-[#22c55e] tracking-[0.1em] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="white" width="14" height="14">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.93 1.395 5.6L0 24l6.545-1.373A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.08 16.688c-.26.725-1.523 1.386-2.086 1.456-.508.065-1.15.09-1.856-.117a16.96 16.96 0 01-1.673-.617C9.93 16.226 8.22 14.023 8.09 13.856c-.13-.164-1.066-1.414-1.066-2.698s.676-1.91.916-2.172c.24-.26.52-.325.69-.325l.5.01c.156.005.366-.06.575.437.215.507.73 1.78.793 1.91.065.13.108.28.02.45-.087.168-.13.27-.26.42-.13.15-.273.334-.39.45-.13.13-.265.27-.113.53.15.26.67 1.1 1.436 1.78.987.877 1.82 1.148 2.077 1.277.26.13.41.108.56-.065.15-.174.636-.742.806-1 .17-.26.338-.215.57-.13.23.085 1.46.69 1.71.813.25.13.42.195.48.305.065.104.065.6-.195 1.325z" />
              </svg>
              Open WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-lime-spark text-charcoal border border-stone-border flex items-center justify-center shadow-none hover:bg-[#d5eb9b] transition-colors cursor-pointer"
        aria-label="Open WhatsApp chat"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <X size={18} />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <MessageCircle size={18} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
