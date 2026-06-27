"use client";

import { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Video,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// Service Dropdown List
const servicesDropdown = [
  { value: "web-dev", label: "Web Development" },
  { value: "mobile-dev", label: "Mobile App Development" },
  { value: "saas-dev", label: "Enterprise SaaS Development" },
  { value: "custom-soft", label: "Custom Software Engineering" },
  { value: "ui-ux", label: "UI/UX Product Design" },
  { value: "consulting", label: "IT Consulting & Security Audit" },
  { value: "marketing", label: "Digital Marketing & SEO" },
];

const timeSlots = ["09:30 AM", "11:00 AM", "01:30 PM", "03:00 PM", "04:30 PM"];

export function ContactClient() {
  // Calendar Widget State
  const [mounted, setMounted] = useState(false);
  const [currentMonthDate, setCurrentMonthDate] = useState<Date>(() => new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<"calendar" | "form" | "confirmed">("calendar");
  const [bookingForm, setBookingForm] = useState({ name: "", email: "", notes: "" });
  const [bookingErrors, setBookingErrors] = useState({ name: false, email: false });

  // Inquiry Form State
  const [inquiryForm, setInquiryForm] = useState({ name: "", email: "", service: "web-dev", message: "" });
  const [inquiryErrors, setInquiryErrors] = useState({ name: false, email: false, message: false });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Initialize on mount to prevent hydration issues
  useEffect(() => {
    setMounted(true);
    setCurrentMonthDate(new Date());
  }, []);

  const today = new Date();
  const year = currentMonthDate.getFullYear();
  const month = currentMonthDate.getMonth();
  const currentMonthName = currentMonthDate.toLocaleString("en-US", { month: "long" });

  const getDaysInMonth = (y: number, m: number) => new Date(y, m + 1, 0).getDate();
  const getFirstDayOfWeek = (y: number, m: number) => {
    const day = new Date(y, m, 1).getDay();
    return day === 0 ? 6 : day - 1; // Mon-start
  };

  const totalDaysInMonth = getDaysInMonth(year, month);
  const blankDaysCount = getFirstDayOfWeek(year, month);

  const isDateAvailable = (date: Date) => {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);

    // Must be today or in the future
    if (compareDate < startOfToday) return false;

    // Limit to next 30 days
    const maxDate = new Date(startOfToday);
    maxDate.setDate(startOfToday.getDate() + 30);
    return compareDate <= maxDate;
  };

  const isPrevDisabled = year < today.getFullYear() || (year === today.getFullYear() && month <= today.getMonth());
  const isNextDisabled = year > today.getFullYear() || (year === today.getFullYear() && month >= today.getMonth() + 1);

  const handlePrevMonth = () => {
    if (isPrevDisabled) return;
    setCurrentMonthDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    if (isNextDisabled) return;
    setCurrentMonthDate(new Date(year, month + 1, 1));
  };

  // Handle Calendar Book
  const handleCalendarBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: !bookingForm.name.trim(),
      email: !bookingForm.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingForm.email.trim()),
    };
    setBookingErrors(newErrors);

    if (!newErrors.name && !newErrors.email) {
      setBookingStep("confirmed");
    }
  };

  // Handle Inquiry Form Submit
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: !inquiryForm.name.trim(),
      email: !inquiryForm.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiryForm.email.trim()),
      message: !inquiryForm.message.trim() || inquiryForm.message.trim().length < 10,
    };
    setInquiryErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setInquirySubmitted(true);
      // Mock submit logs
      console.log("Inquiry submitted:", inquiryForm);
      setInquiryForm({ name: "", email: "", service: "web-dev", message: "" });
      setTimeout(() => setInquirySubmitted(false), 5000);
    }
  };

  const inputStyles = (hasError: boolean) =>
    `w-full bg-surface border ${
      hasError 
        ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
        : "border-surface-variant/40 focus:border-primary focus:ring-primary"
    } px-4 py-3 rounded text-sm text-text-main placeholder-muted/50 focus:outline-none focus:ring-1 transition-all duration-150`;

  return (
    <div className="space-y-16">
      
      {/* Cards: Direct Contact Channels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card/45 border border-surface p-6 rounded-lg flex items-start gap-4">
          <div className="w-10 h-10 bg-surface flex items-center justify-center text-primary rounded-md border border-surface-variant/30 shrink-0">
            <Mail size={16} className="stroke-[1.5]" />
          </div>
          <div>
            <span className="text-[10px] font-sans font-semibold text-primary uppercase tracking-widest block mb-1">
              General Inquiries
            </span>
            <div className="text-sm font-display font-bold text-text-main mb-1">
              info.genmatrixo@gmail.com
            </div>
            <p className="text-[11px] text-muted">Replies within 24 operational hours.</p>
          </div>
        </div>

        <div className="bg-card/45 border border-surface p-6 rounded-lg flex items-start gap-4">
          <div className="w-10 h-10 bg-surface flex items-center justify-center text-primary rounded-md border border-surface-variant/30 shrink-0">
            <Phone size={16} className="stroke-[1.5]" />
          </div>
          <div>
            <span className="text-[10px] font-sans font-semibold text-primary uppercase tracking-widest block mb-1">
              Direct Voice Channel
            </span>
            <div className="text-sm font-display font-bold text-text-main mb-1">
              +91 88245 84530
            </div>
            <p className="text-[11px] text-muted">Monday - Saturday, 9AM to 7PM IST.</p>
          </div>
        </div>

        <div className="bg-card/45 border border-surface p-6 rounded-lg flex items-start gap-4">
          <div className="w-10 h-10 bg-surface flex items-center justify-center text-primary rounded-md border border-surface-variant/30 shrink-0">
            <MapPin size={16} className="stroke-[1.5]" />
          </div>
          <div>
            <span className="text-[10px] font-sans font-semibold text-primary uppercase tracking-widest block mb-1">
              Jaipur Headquarters
            </span>
            <div className="text-sm font-display font-bold text-text-main mb-1">
              Mansarovar Plaza
            </div>
            <p className="text-[11px] text-muted">Madhyam Marg, Jaipur, RJ 302020</p>
          </div>
        </div>
      </div>

      {/* Split Interactive Form & Calendar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Calendar Scheduler */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <Badge variant="primary">Calendar Booking</Badge>
            <h3 className="text-xl md:text-2xl font-display font-bold text-text-main">
              1. Book a Discovery Call
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Reserve a 30-minute architecture review session with our principal engineers. We'll map your technical requirements and suggest hosting & design options.
            </p>
          </div>

          <div className="bg-card/40 border border-surface rounded-lg p-6 shadow-xl min-h-[460px] flex flex-col justify-center">
            {!mounted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-8 h-8 rounded-full border-4 border-primary/20 border-t-primary animate-spin mb-4" />
                <span className="text-[13px] font-medium text-muted">Initializing calendar...</span>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                
                {/* STEP 1: CALENDAR VIEW */}
                {bookingStep === "calendar" && (
                  <motion.div
                    key="calendar"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6 flex-grow flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between border-b border-surface pb-4">
                      <span className="text-xs font-display font-bold text-text-main uppercase tracking-wider">
                        Select Date & Time
                      </span>
                      <div className="flex items-center gap-2 text-xs text-muted font-mono font-bold uppercase select-none">
                        <button
                          type="button"
                          disabled={isPrevDisabled}
                          onClick={handlePrevMonth}
                          className={`p-1 rounded-full transition-colors ${
                            isPrevDisabled ? "opacity-30 cursor-not-allowed" : "hover:bg-surface/50 cursor-pointer text-text-main"
                          }`}
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <span>{currentMonthName} {year}</span>
                        <button
                          type="button"
                          disabled={isNextDisabled}
                          onClick={handleNextMonth}
                          className={`p-1 rounded-full transition-colors ${
                            isNextDisabled ? "opacity-30 cursor-not-allowed" : "hover:bg-surface/50 cursor-pointer text-text-main"
                          }`}
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow items-start mt-2">
                      {/* Calendar grid */}
                      <div>
                        <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-sans font-bold text-muted uppercase tracking-wider mb-2">
                          <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center">
                          {Array.from({ length: blankDaysCount }).map((_, i) => (
                            <span key={`blank-${i}`} className="p-2 text-transparent text-xs" />
                          ))}
                          
                          {Array.from({ length: totalDaysInMonth }).map((_, i) => {
                            const dayNumber = i + 1;
                            const thisDate = new Date(year, month, dayNumber);
                            const isAvailable = isDateAvailable(thisDate);
                            const isSelected = selectedDate &&
                              selectedDate.getDate() === dayNumber &&
                              selectedDate.getMonth() === month &&
                              selectedDate.getFullYear() === year;
                            
                            return (
                              <button
                                key={`day-${dayNumber}`}
                                type="button"
                                disabled={!isAvailable}
                                onClick={() => {
                                  setSelectedDate(thisDate);
                                  setSelectedSlot(null);
                                }}
                                className={`p-2 text-xs font-mono font-bold rounded transition-all cursor-pointer flex items-center justify-center h-8 w-8 mx-auto ${
                                  isSelected
                                    ? "bg-primary text-white"
                                    : isAvailable
                                    ? "bg-surface/50 text-text-main border border-surface hover:border-primary/50"
                                    : "text-muted/25 cursor-not-allowed"
                                }`}
                              >
                                {dayNumber}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Time slots */}
                      <div className="flex flex-col justify-center min-h-[160px]">
                        {selectedDate ? (
                          <div className="space-y-2">
                            <span className="text-[10px] font-sans font-semibold text-muted uppercase tracking-wider block mb-2 text-center md:text-left">
                              Slots for {selectedDate.toLocaleString("en-US", { month: "long" })} {selectedDate.getDate()}
                            </span>
                            <div className="grid grid-cols-1 gap-2 max-h-[160px] overflow-y-auto pr-1">
                              {timeSlots.map((slot) => {
                                const isSelected = selectedSlot === slot;
                                return (
                                  <button
                                    key={slot}
                                    type="button"
                                    onClick={() => setSelectedSlot(slot)}
                                    className={`py-2 px-3 text-xs font-semibold rounded border transition-all cursor-pointer text-center ${
                                      isSelected
                                        ? "bg-primary/20 border-primary text-primary"
                                        : "bg-surface/30 border-surface text-muted hover:border-muted/30 hover:text-text-main"
                                    }`}
                                  >
                                    {slot}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center p-8 text-center bg-surface/20 rounded border border-dashed border-surface h-full">
                            <Calendar size={18} className="text-muted/30 mb-2" />
                            <span className="text-[11px] text-muted leading-relaxed">
                              Pick a date on the calendar to view slots.
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t border-surface">
                      <Button
                        disabled={!selectedDate || !selectedSlot}
                        onClick={() => setBookingStep("form")}
                        variant="primary"
                        className="w-full md:w-auto"
                      >
                        Configure Details
                        <ArrowRight size={14} />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: DETAILS FORM */}
                {bookingStep === "form" && (
                  <motion.form
                    key="form"
                    onSubmit={handleCalendarBookSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4 flex-grow flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="border-b border-surface pb-3 mb-2">
                        <span className="text-xs font-display font-bold text-text-main uppercase tracking-wider">
                          Meeting Details
                        </span>
                        <p className="text-[11px] text-muted mt-1 font-mono">
                          📅 Meeting: {selectedDate?.toLocaleString("en-US", { month: "long" })} {selectedDate?.getDate()} at {selectedSlot} (Google Meet)
                        </p>
                      </div>

                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          required
                          className={inputStyles(bookingErrors.name)}
                          value={bookingForm.name}
                          onChange={(e) => {
                            setBookingForm({ ...bookingForm, name: e.target.value });
                            if (bookingErrors.name) setBookingErrors({ ...bookingErrors, name: false });
                          }}
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          placeholder="Business Email Address"
                          required
                          className={inputStyles(bookingErrors.email)}
                          value={bookingForm.email}
                          onChange={(e) => {
                            setBookingForm({ ...bookingForm, email: e.target.value });
                            if (bookingErrors.email) setBookingErrors({ ...bookingErrors, email: false });
                          }}
                        />
                      </div>

                      <div>
                        <textarea
                          rows={3}
                          placeholder="Brief notes about your product scope..."
                          className="w-full bg-surface border border-surface-variant/40 focus:border-primary px-4 py-3 rounded text-sm text-text-main focus:outline-none resize-none"
                          value={bookingForm.notes}
                          onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2 border-t border-surface mt-4">
                      <Button
                        type="button"
                        onClick={() => setBookingStep("calendar")}
                        variant="secondary"
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button type="submit" variant="primary" className="flex-1">
                        Schedule Call
                      </Button>
                    </div>
                  </motion.form>
                )}

                {/* STEP 3: BOOKING CONFIRMED */}
                {bookingStep === "confirmed" && (
                  <motion.div
                    key="confirmed"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center text-center p-8 space-y-4 flex-grow"
                  >
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary mb-2">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-lg font-display font-bold text-text-main">
                      Call Scheduled!
                    </h3>
                    <p className="text-xs text-muted max-w-sm leading-relaxed">
                      Thank you, <strong className="text-text-main">{bookingForm.name}</strong>. We've sent a calendar invite with the conference link to <strong className="text-text-main">{bookingForm.email}</strong> for <strong className="text-text-main">{selectedDate?.toLocaleString("en-US", { month: "long" })} {selectedDate?.getDate()} at {selectedSlot}</strong>.
                    </p>
                    <div className="pt-4 w-full">
                      <Button
                        onClick={() => {
                          setBookingStep("calendar");
                          setSelectedDate(null);
                          setSelectedSlot(null);
                          setBookingForm({ name: "", email: "", notes: "" });
                        }}
                        variant="secondary"
                        className="w-full"
                      >
                        Book Another Slot
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <Badge variant="accent">Inquiry Form</Badge>
            <h3 className="text-xl md:text-2xl font-display font-bold text-text-main">
              2. Send a Project Inquiry
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Have specific project scopes or technical requests? Submit your constraints directly, and our engineering division will reply with an execution estimate in 24 hours.
            </p>
          </div>

          <form 
            onSubmit={handleInquirySubmit}
            className="bg-card/40 border border-surface rounded-lg p-6 md:p-8 space-y-6 shadow-xl min-h-[460px] flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-text-main mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className={inputStyles(inquiryErrors.name)}
                  value={inquiryForm.name}
                  onChange={(e) => {
                    setInquiryForm({ ...inquiryForm, name: e.target.value });
                    if (inquiryErrors.name) setInquiryErrors({ ...inquiryErrors, name: false });
                  }}
                />
                {inquiryErrors.name && (
                  <span className="block text-[10px] text-red-500 font-sans mt-1 uppercase tracking-wider">
                    Name is required
                  </span>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-text-main mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  className={inputStyles(inquiryErrors.email)}
                  value={inquiryForm.email}
                  onChange={(e) => {
                    setInquiryForm({ ...inquiryForm, email: e.target.value });
                    if (inquiryErrors.email) setInquiryErrors({ ...inquiryErrors, email: false });
                  }}
                />
                {inquiryErrors.email && (
                  <span className="block text-[10px] text-red-500 font-sans mt-1 uppercase tracking-wider">
                    Provide a valid email address
                  </span>
                )}
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-text-main mb-2">
                  Target Service Scope
                </label>
                <select
                  className="w-full bg-surface border border-surface-variant/40 px-4 py-3 rounded text-sm text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
                  value={inquiryForm.service}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, service: e.target.value })}
                >
                  {servicesDropdown.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-card">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-text-main mb-2">
                  Project Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Detail your performance parameters, estimated timeline, integrations, or specific target features..."
                  className={inputStyles(inquiryErrors.message) + " resize-none"}
                  value={inquiryForm.message}
                  onChange={(e) => {
                    setInquiryForm({ ...inquiryForm, message: e.target.value });
                    if (inquiryErrors.message) setInquiryErrors({ ...inquiryErrors, message: false });
                  }}
                />
                {inquiryErrors.message && (
                  <span className="block text-[10px] text-red-500 font-sans mt-1 uppercase tracking-wider">
                    Description is required (minimum 10 characters)
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-surface">
              <Button type="submit" variant="primary" className="w-full">
                Submit Project Inquiry
                <Send size={14} className="ml-1" />
              </Button>

              <AnimatePresence>
                {inquirySubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="border border-[#10b981] bg-[#10b981]/10 p-3 text-center rounded-md"
                  >
                    <p className="font-mono text-xs text-[#10b981] font-semibold">
                      ✔ Inquiry received. An engineer will respond within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>

      </div>

    </div>
  );
}
