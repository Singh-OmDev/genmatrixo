import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { Card3D } from "@/components/ui/Card3D";

const testimonials = [
  {
    quote: "Working with GenMatrixo was an excellent experience. They perfectly captured our product specs and delivered high-performance SaaS portal portals with remarkable speed, engineering discipline, and precision.",
    name: "Sudhanshu Shekhar",
    role: "Engineering Lead",
    location: "Ghaziabad, UP",
    initials: "SS",
    tint: "#e8e8fc",
  },
  {
    quote: "We wanted a refined and scalable digital architecture for our systems, and the team delivered exactly that. Modern database integration, secure transaction layers, and compliance-ready standards.",
    name: "Vikram Shankhala",
    role: "Operations Director",
    location: "Jaipur, Rajasthan",
    initials: "VS",
    tint: "#d4f7e6",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32" style={{ background: "#3a2234" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="mb-16">
            <span
              className="inline-block text-[11px] font-medium tracking-[0.18em] uppercase mb-4 px-3 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.1)", color: "#939eeb" }}
            >
              Testimonials
            </span>
            <h2
              className="font-display font-medium"
              style={{
                fontSize: "clamp(32px, 4.5vw, 54px)",
                lineHeight: 1.22,
                letterSpacing: "-0.5px",
                maxWidth: 500,
                color: "#ffffff",   /* explicit white on dark aubergine */
              }}
            >
              Trusted by Product Leaders
            </h2>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <Card3D
                className="h-full shimmer-hover"
                style={{ background: t.tint, borderRadius: 24, padding: 32 }}
                intensity={6}
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="text-5xl font-display text-black/20 mb-4 leading-none select-none" style={{ fontFamily: "Georgia, serif" }}>
                      "
                    </div>
                    <p className="text-black/70 leading-relaxed mb-8" style={{ fontSize: 15, lineHeight: 1.65 }}>
                      {t.quote}
                    </p>
                  </div>
                  <div className="flex items-center gap-3.5 pt-5 border-t border-black/10">
                    <div
                      className="sticker-pop w-11 h-11 rounded-full flex items-center justify-center text-[14px] font-bold text-black shrink-0"
                      style={{ background: "rgba(0,0,0,0.1)" }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-display font-medium text-black" style={{ fontSize: 14 }}>{t.name}</div>
                      <div className="text-black/50 mt-0.5" style={{ fontSize: 12 }}>{t.role} · {t.location}</div>
                    </div>
                  </div>
                </div>
              </Card3D>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
