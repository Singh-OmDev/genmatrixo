"use client";

import { useState } from "react";
import { Mail, PhoneCall, Send, Clock, Reply } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";

const services = [
  "Web Design & Development",
  "App Design & Development",
  "UI & UX Design",
  "Other",
];

export function FinalCTA() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !formState.name.trim(),
      email: !formState.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim()),
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email) {
      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        service: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }
  };

  const inputStyles = (hasError: boolean) =>
    `w-full bg-paper border ${
      hasError ? "border-ember-outline focus:border-ember-outline focus:ring-ember-outline" : "border-stone-border focus:border-lime-bolt focus:ring-lime-bolt"
    } px-4 py-3.5 text-xs font-sans text-ink placeholder-graphite focus:outline-none focus:ring-1 tracking-[0.1em] transition-all`;

  return (
    <section className="bg-canvas border-t border-hairline py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Info Content */}
          <FadeUp className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-sans uppercase tracking-[0.1em] text-graphite block mb-3">
                Request A Quote
              </span>
              <h2 className="text-pure-black font-display font-normal tracking-tight mb-6">
                Need a Free Quote? Get in Touch with Our Experts Today!
              </h2>

              <div className="flex flex-wrap gap-6 mb-8 text-[10px] font-sans font-semibold text-graphite tracking-[0.1em] uppercase">
                <span className="flex items-center gap-1.5">
                  <Reply size={12} className="text-lime-bolt" />
                  We reply within 24 hours
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} className="text-lime-bolt" />
                  Support Available 24 Hours
                </span>
              </div>

              <p className="text-graphite font-sans text-xs tracking-[0.1em] leading-relaxed mb-8">
                Delivering innovative solutions to help your business grow, we provide customized IT services that streamline operations and enhance efficiency. Our expert team ensures seamless integration, secure systems, and reliable support. From software development to cloud solutions, we focus on delivering results that drive success.
              </p>

              {/* Call to ask question */}
              <div 
                className="inline-flex items-center gap-4 bg-paper border border-hairline px-5 py-3.5 shadow-none"
                style={{ borderRadius: "10px" }}
              >
                <div className="w-8 h-8 rounded-full bg-canvas-inner border border-hairline flex items-center justify-center text-charcoal">
                  <PhoneCall size={14} className="stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-[9px] font-sans font-semibold text-graphite uppercase tracking-[0.1em] mb-0.5">
                    Call to ask any question
                  </div>
                  <div className="text-sm font-display font-semibold text-pure-black tracking-tight leading-none">
                    +91 88245 84530
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Right Column: Quote Form Card */}
          <FadeUp delay={0.1} className="lg:col-span-6">
            <form 
              onSubmit={handleSubmit}
              className="space-y-5 bg-paper border border-hairline p-6 lg:p-8 shadow-none"
              style={{ borderRadius: "10px" }}
            >
              {/* Name field */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
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
                <input
                  type="text"
                  placeholder="Your Email"
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

              {/* Service Select Dropdown */}
              <div>
                <select
                  className={inputStyles(false) + " cursor-pointer bg-paper"}
                  style={{ borderRadius: "10px" }}
                  value={formState.service}
                  onChange={(e) =>
                    setFormState({ ...formState, service: e.target.value })
                  }
                >
                  <option value="" disabled hidden>
                    Select A Service
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message field */}
              <div>
                <textarea
                  rows={3}
                  placeholder="Message"
                  className={inputStyles(false) + " resize-none"}
                  style={{ borderRadius: "10px" }}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Request A Quote
                <Send size={14} className="stroke-[1.5]" />
              </Button>

              {/* Success Notification */}
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
  );
}
