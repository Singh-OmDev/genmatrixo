import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

const testimonials = [
  {
    quote: "Working with Gen Matrixo was an excellent experience. They perfectly captured my ideas and delivered stunning designs with remarkable creativity and precision",
    name: "sudhanshu shekhar",
    role: "Client",
    location: "Ghaziabad, UP",
    initials: "SS",
  },
  {
    quote: "We wanted a refined and modern brand identity for our hotels, and the designs delivered exactly that. Elegant, consistent, and perfectly aligned with our vision of luxury hospitality",
    name: "Vikram shankhala",
    role: "Hotelier",
    location: "Jaipur, Rajasthan",
    initials: "VS",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-canvas border-b border-hairline py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="mb-12">
            <span className="text-xs font-sans uppercase tracking-[0.1em] text-graphite block mb-3">
              Our Feedbacks
            </span>
            <h2 className="text-pure-black font-display font-normal tracking-tight">
              Trusted by Our Clients
            </h2>
            <p className="text-graphite font-sans text-xs tracking-[0.1em] leading-relaxed mt-3 max-w-md">
              Providing top-notch solutions, our expert team ensures your business stays ahead with reliable, innovative, and efficient services.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div
                className="h-full bg-paper border border-hairline p-6 shadow-none flex flex-col justify-between"
                style={{ borderRadius: "10px" }}
              >
                <div>
                  <div className="text-3xl leading-none text-stone-border mb-4 select-none font-serif">
                    &#8220;
                  </div>
                  <p className="text-graphite font-sans text-xs tracking-[0.1em] leading-relaxed mb-8">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-hairline">
                  {/* Circle Avatar Initials */}
                  <div 
                    className="w-9 h-9 rounded-full bg-canvas-inner border border-hairline flex items-center justify-center text-xs font-sans font-semibold text-charcoal shrink-0 tracking-normal"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-xs font-sans font-semibold text-pure-black tracking-[0.1em] uppercase">
                      {t.name}
                    </div>
                    <div className="text-[10px] font-sans text-graphite tracking-[0.1em] mt-0.5 uppercase">
                      {t.role} · {t.location}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
