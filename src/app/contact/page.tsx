"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";

const capabilities = [
  { value: "ai", label: "AI Integration & Automation Pipeline" },
  { value: "web", label: "Enterprise Web Development" },
  { value: "software", label: "Custom Backend System" },
  { value: "consulting", label: "IT Security & Infrastructure Audit" },
  { value: "other", label: "Other Scope" },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "ai",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !formState.name.trim(),
      email: !formState.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim()),
      message: !formState.message.trim(),
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setSubmitted(true);
      // Reset form
      setFormState({
        name: "",
        email: "",
        service: "ai",
        message: "",
      });

      // Clear success message after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }
  };

  const inputStyles = (hasError: boolean) =>
    `w-full bg-paper border ${
      hasError ? "border-ember-outline focus:border-ember-outline focus:ring-ember-outline" : "border-stone-border focus:border-lime-bolt focus:ring-lime-bolt"
    } px-4 py-3 text-xs font-sans text-ink placeholder-graphite focus:outline-none focus:ring-1 tracking-[0.1em] transition-all`;

  return (
    <>
      {/* Page header */}
      <section 
        className="bg-canvas border-b border-hairline pt-36 pb-20 overflow-hidden relative"
        style={{ backgroundImage: "var(--gradient-sky-wash)" }}
      >
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.1em] text-graphite mb-3">
              Home / Contact
            </div>
            <h1 className="text-pure-black font-display font-normal mt-4 mb-5 max-w-2xl leading-none" style={{ fontSize: "clamp(2.5rem, 6vw, var(--text-display-lg))" }}>
              Connect with our engineers
            </h1>
            <p className="text-graphite font-sans text-sm tracking-[0.1em] leading-relaxed max-w-2xl">
              Ask us any technical questions or scope your next production implementation.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="bg-canvas py-24 lg:py-32 border-b border-hairline">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Info Cards */}
            <FadeUp className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                
                {/* General Inquiries */}
                <div 
                  className="flex items-start gap-4 bg-paper border border-hairline p-5 shadow-none"
                  style={{ borderRadius: "10px" }}
                >
                  <div 
                    className="w-10 h-10 bg-canvas-inner border border-hairline flex items-center justify-center shrink-0 text-charcoal" 
                    style={{ borderRadius: "10px" }}
                  >
                    <Mail size={16} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <div className="text-[9px] font-sans font-semibold uppercase tracking-[0.1em] text-graphite mb-1">
                      General Inquiries
                    </div>
                    <div className="text-sm font-display font-normal text-pure-black tracking-tight mb-0.5">
                      info.genmatrixo@gmail.com
                    </div>
                    <div className="text-[10px] font-sans text-graphite tracking-[0.1em]">
                      Replies within 24 hours
                    </div>
                  </div>
                </div>

                {/* Direct Call Channel */}
                <div 
                  className="flex items-start gap-4 bg-paper border border-hairline p-5 shadow-none"
                  style={{ borderRadius: "10px" }}
                >
                  <div 
                    className="w-10 h-10 bg-canvas-inner border border-hairline flex items-center justify-center shrink-0 text-charcoal" 
                    style={{ borderRadius: "10px" }}
                  >
                    <Phone size={16} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <div className="text-[9px] font-sans font-semibold uppercase tracking-[0.1em] text-graphite mb-1">
                      Direct Call Channel
                    </div>
                    <div className="text-sm font-display font-normal text-pure-black tracking-tight mb-0.5">
                      +91 88245 84530
                    </div>
                    <div className="text-[10px] font-sans text-graphite tracking-[0.1em]">
                      Mon-Sat, 9AM to 7PM IST
                    </div>
                  </div>
                </div>

                {/* Jaipur Headquarters */}
                <div 
                  className="flex items-start gap-4 bg-paper border border-hairline p-5 shadow-none"
                  style={{ borderRadius: "10px" }}
                >
                  <div 
                    className="w-10 h-10 bg-canvas-inner border border-hairline flex items-center justify-center shrink-0 text-charcoal" 
                    style={{ borderRadius: "10px" }}
                  >
                    <MapPin size={16} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <div className="text-[9px] font-sans font-semibold uppercase tracking-[0.1em] text-graphite mb-1">
                      Jaipur Headquarters
                    </div>
                    <div className="text-sm font-display font-normal text-pure-black tracking-tight leading-relaxed">
                      Mansarovar Plaza, Madhyam Marg, Mansarovar, Jaipur, RJ 302020
                    </div>
                  </div>
                </div>

                {/* Bhilwara Branch Office */}
                <div 
                  className="flex items-start gap-4 bg-paper border border-hairline p-5 shadow-none"
                  style={{ borderRadius: "10px" }}
                >
                  <div 
                    className="w-10 h-10 bg-canvas-inner border border-hairline flex items-center justify-center shrink-0 text-charcoal" 
                    style={{ borderRadius: "10px" }}
                  >
                    <MapPin size={16} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <div className="text-[9px] font-sans font-semibold uppercase tracking-[0.1em] text-graphite mb-1">
                      Bhilwara Branch Office
                    </div>
                    <div className="text-sm font-display font-normal text-pure-black tracking-tight leading-relaxed">
                      Chandra Shekhar Azad Nagar, Bhilwara, RJ 311001
                    </div>
                  </div>
                </div>

              </div>
            </FadeUp>

            {/* Right Column: Contact Form */}
            <FadeUp delay={0.1} className="lg:col-span-7">
              <form 
                onSubmit={handleFormSubmit} 
                className="space-y-6 bg-paper border border-hairline p-6 lg:p-8 shadow-none"
                style={{ borderRadius: "10px" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label className="block text-[9px] font-sans font-semibold uppercase tracking-[0.1em] text-graphite mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className={inputStyles(errors.name)}
                      style={{ borderRadius: "10px" }}
                      value={formState.name}
                      onChange={(e) => {
                        setFormState({ ...formState, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: false });
                      }}
                    />
                    {errors.name && (
                      <span className="block text-[10px] font-sans font-medium text-ember-outline mt-1.5 uppercase tracking-[0.05em]">
                        Name is required
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-[9px] font-sans font-semibold uppercase tracking-[0.1em] text-graphite mb-2">
                      Your Email
                    </label>
                    <input
                      type="text"
                      placeholder="jane@example.com"
                      className={inputStyles(errors.email)}
                      style={{ borderRadius: "10px" }}
                      value={formState.email}
                      onChange={(e) => {
                        setFormState({ ...formState, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: false });
                      }}
                    />
                    {errors.email && (
                      <span className="block text-[10px] font-sans font-medium text-ember-outline mt-1.5 uppercase tracking-[0.05em]">
                        Provide a valid email address
                      </span>
                    )}
                  </div>
                </div>

                {/* Capability dropdown selection */}
                <div>
                  <label className="block text-[9px] font-sans font-semibold uppercase tracking-[0.1em] text-graphite mb-2">
                    Selected Capability
                  </label>
                  <select
                    className={inputStyles(false) + " cursor-pointer bg-paper"}
                    style={{ borderRadius: "10px" }}
                    value={formState.service}
                    onChange={(e) =>
                      setFormState({ ...formState, service: e.target.value })
                    }
                  >
                    {capabilities.map((cap) => (
                      <option key={cap.value} value={cap.value}>
                        {cap.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-[9px] font-sans font-semibold uppercase tracking-[0.1em] text-graphite mb-2">
                    Project specifications
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Detail your performance guidelines, estimated traffic, or integration requirements..."
                    className={inputStyles(errors.message) + " resize-none"}
                    style={{ borderRadius: "10px" }}
                    value={formState.message}
                    onChange={(e) => {
                      setFormState({ ...formState, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: false });
                    }}
                  />
                  {errors.message && (
                    <span className="block text-[10px] font-sans font-medium text-ember-outline mt-1.5 uppercase tracking-[0.05em]">
                      Message is required
                    </span>
                  )}
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                  <Send size={14} className="stroke-[1.5]" />
                </Button>

                {/* Form success alert */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-[#22c55e] bg-[#22c55e]/10 p-4 text-center"
                    style={{ borderRadius: "10px" }}
                  >
                    <p className="font-mono text-xs text-[#22c55e] font-semibold">
                      ✔ Message received. An engineer will contact you shortly.
                    </p>
                  </motion.div>
                )}
              </form>
            </FadeUp>

          </div>
        </div>
      </section>
    </>
  );
}
