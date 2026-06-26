"use client";

import { useState } from "react";
import { Mail, Clock, Calendar, CheckCircle2, ChevronLeft, ChevronRight, Video, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";

const timeSlots = ["09:30 AM", "11:00 AM", "01:30 PM", "03:00 PM", "04:30 PM"];

export function FinalCTA() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<"calendar" | "form" | "confirmed">("calendar");

  const [formData, setFormData] = useState({ name: "", email: "", notes: "" });
  const [errors, setErrors] = useState({ name: false, email: false });

  const today = new Date();
  const currentMonth = today.toLocaleString("en-US", { month: "long" });
  const currentYear = today.getFullYear();
  const availableDays = [12, 13, 14, 15, 16, 19, 20, 21, 22, 23];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: !formData.name.trim(),
      email:
        !formData.email.trim() ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()),
    };
    setErrors(newErrors);
    if (!newErrors.name && !newErrors.email) setBookingStep("confirmed");
  };

  const inputBase =
    "w-full px-4 py-3 rounded-2xl text-[14px] text-black font-sans border-2 focus:outline-none transition-colors";

  return (
    <section id="booking" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <FadeUp className="lg:col-span-5 space-y-6">
            <span
              className="inline-block text-[11px] font-medium tracking-[0.18em] uppercase px-3 py-1 rounded-full text-black/50"
              style={{ background: "#f3f3f3" }}
            >
              Consultation
            </span>
            <h2
              className="font-display font-medium text-black"
              style={{
                fontSize: "clamp(32px, 4.5vw, 54px)",
                lineHeight: 1.18,
                letterSpacing: "-0.5px",
              }}
            >
              Ready to Start Your Project?
            </h2>
            <p className="text-black/50" style={{ fontSize: 16, lineHeight: 1.65 }}>
              Book a 30-minute discovery call with our principal architects. We'll discuss your
              software requirements, tech stack recommendations, budget constraints, and delivery roadmap.
            </p>
            <div className="space-y-3 pt-2">
              {[
                { icon: Video, text: "30-Min Video Call via Google Meet" },
                { icon: Clock, text: "Architecture & Scope Consulting" },
                { icon: Mail, text: "Follow-up Proposal Within 24 Hours" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "#e8e8fc" }}
                  >
                    <Icon size={15} className="text-black" />
                  </div>
                  <span className="text-[13px] font-medium text-black/60">{text}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right Column — Booking Widget */}
          <FadeUp delay={0.1} className="lg:col-span-7">
            <div
              className="p-7 md:p-8 min-h-[460px] flex flex-col"
              style={{ background: "#e8e8fc", borderRadius: 24 }}
            >
              <AnimatePresence mode="wait">

                {/* STEP 1: CALENDAR */}
                {bookingStep === "calendar" && (
                  <motion.div
                    key="calendar"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6 flex-1 flex flex-col"
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-black/10">
                      <span className="font-display font-medium text-black" style={{ fontSize: 16 }}>
                        Select a Date & Time
                      </span>
                      <div className="flex items-center gap-2 text-[12px] font-mono font-bold text-black/50 uppercase">
                        <ChevronLeft size={16} className="opacity-30 cursor-not-allowed" />
                        <span>{currentMonth} {currentYear}</span>
                        <ChevronRight size={16} className="opacity-30 cursor-not-allowed" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                      {/* Day grid */}
                      <div>
                        <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-medium text-black/40 uppercase tracking-wider mb-2">
                          <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center">
                          {Array.from({ length: 4 }).map((_, i) => (
                            <span key={`blank-${i}`} className="p-2 text-transparent text-xs" />
                          ))}
                          {Array.from({ length: 28 }).map((_, i) => {
                            const day = i + 1;
                            const isAvail = availableDays.includes(day);
                            const isSel = selectedDate === day;
                            return (
                              <button
                                key={day}
                                disabled={!isAvail}
                                onClick={() => { setSelectedDate(day); setSelectedSlot(null); }}
                                className="h-8 w-8 mx-auto flex items-center justify-center text-[12px] font-mono font-bold rounded-full transition-all"
                                style={{
                                  background: isSel ? "#000" : isAvail ? "rgba(0,0,0,0.07)" : "transparent",
                                  color: isSel ? "#fff" : isAvail ? "#000" : "rgba(0,0,0,0.2)",
                                  cursor: isAvail ? "pointer" : "not-allowed",
                                }}
                              >
                                {day}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Time slots */}
                      <div className="flex flex-col justify-center">
                        {selectedDate ? (
                          <div className="space-y-2">
                            <span className="text-[11px] font-medium text-black/40 uppercase tracking-wider block mb-2">
                              Slots for {currentMonth} {selectedDate}
                            </span>
                            {timeSlots.map((slot) => {
                              const isSel = selectedSlot === slot;
                              return (
                                <button
                                  key={slot}
                                  onClick={() => setSelectedSlot(slot)}
                                  className="w-full py-2.5 px-4 text-[13px] font-medium rounded-[9999px] border-2 transition-all"
                                  style={{
                                    background: isSel ? "#000" : "#fff",
                                    color: isSel ? "#fff" : "#000",
                                    borderColor: isSel ? "#000" : "rgba(0,0,0,0.15)",
                                  }}
                                >
                                  {slot}
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center p-8 text-center rounded-[16px]" style={{ background: "rgba(0,0,0,0.05)" }}>
                            <Calendar size={20} className="text-black/25 mb-2" />
                            <span className="text-[12px] text-black/40">Select a date to see available slots</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-black/10">
                      <Button
                        disabled={!selectedDate || !selectedSlot}
                        onClick={() => selectedDate && selectedSlot && setBookingStep("form")}
                        variant="primary"
                        className="w-full md:w-auto ml-auto flex"
                      >
                        Configure Booking
                        <ArrowRight size={14} />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: FORM */}
                {bookingStep === "form" && (
                  <motion.form
                    key="form"
                    onSubmit={handleBook}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="pb-3 border-b border-black/10 mb-2">
                      <span className="font-display font-medium text-black" style={{ fontSize: 16 }}>
                        Enter Meeting Details
                      </span>
                      <p className="text-[12px] text-black/40 mt-1 font-mono">
                        📅 {currentMonth} {selectedDate} at {selectedSlot}
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className={`${inputBase} border-${errors.name ? "[#ff0000]" : "black/15"} bg-white focus:border-black`}
                      style={{ borderColor: errors.name ? "#ff0000" : "rgba(0,0,0,0.15)" }}
                      value={formData.name}
                      onChange={(e) => { setFormData({ ...formData, name: e.target.value }); if (errors.name) setErrors({ ...errors, name: false }); }}
                    />
                    <input
                      type="email"
                      placeholder="Company Email Address"
                      required
                      className={inputBase}
                      style={{ borderColor: errors.email ? "#ff0000" : "rgba(0,0,0,0.15)", background: "#fff" }}
                      value={formData.email}
                      onChange={(e) => { setFormData({ ...formData, email: e.target.value }); if (errors.email) setErrors({ ...errors, email: false }); }}
                    />
                    <textarea
                      rows={3}
                      placeholder="Brief notes about your product scope..."
                      className={inputBase}
                      style={{ borderColor: "rgba(0,0,0,0.15)", background: "#fff", resize: "none" }}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                    <div className="flex gap-3 pt-1">
                      <Button type="button" onClick={() => setBookingStep("calendar")} variant="outline" className="flex-1">
                        Back
                      </Button>
                      <Button type="submit" variant="primary" className="flex-1">
                        Schedule Call
                      </Button>
                    </div>
                  </motion.form>
                )}

                {/* STEP 3: CONFIRMED */}
                {bookingStep === "confirmed" && (
                  <motion.div
                    key="confirmed"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center text-center p-8 space-y-4 flex-1"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                      style={{ background: "#d4f7e6" }}
                    >
                      <CheckCircle2 size={30} className="text-black" />
                    </div>
                    <h3 className="font-display font-medium text-black" style={{ fontSize: 20 }}>
                      Discovery Call Confirmed!
                    </h3>
                    <p className="text-black/50 max-w-sm leading-relaxed" style={{ fontSize: 14 }}>
                      Thank you, <strong className="text-black">{formData.name}</strong>. We've sent a calendar invite to{" "}
                      <strong className="text-black">{formData.email}</strong>.
                    </p>
                    <Button
                      onClick={() => {
                        setBookingStep("calendar");
                        setSelectedDate(null);
                        setSelectedSlot(null);
                        setFormData({ name: "", email: "", notes: "" });
                      }}
                      variant="outline"
                      className="mt-4"
                    >
                      Schedule Another Call
                    </Button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
