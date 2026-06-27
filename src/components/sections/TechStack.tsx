"use client";

import { useState, useEffect, useRef } from "react";
import { Code2, Server, Database, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";
import { SplitText } from "@/components/ui/SplitText";
import { gsap } from "@/lib/gsapInit";

const techLayers = [
  {
    icon: Code2,
    label: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    tints: ["#d4f7e6", "#e8e8fc", "#f3f3f3", "#ffeecc", "#eddee9"],
  },
  {
    icon: Server,
    label: "Backend",
    technologies: ["Node.js", "Express", "NestJS", "REST APIs", "GraphQL"],
    tints: ["#e8e8fc", "#d4f7e6", "#ffccf7", "#f3f3f3", "#ffeecc"],
  },
  {
    icon: Database,
    label: "Database",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Mongoose"],
    tints: ["#ffeecc", "#ffccf7", "#d4f7e6", "#e8e8fc", "#f3f3f3"],
  },
  {
    icon: Cloud,
    label: "Cloud & DevOps",
    technologies: ["AWS S3/EC2", "Docker", "Nginx", "Kubernetes", "GitHub Actions"],
    tints: ["#ffccf7", "#ffeecc", "#e8e8fc", "#eddee9", "#d4f7e6"],
  },
];

export function TechStack() {
  const [active, setActive] = useState(0);
  const layer = techLayers[active];
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const el = tagsRef.current;
    if (!el) return;

    const tags = el.querySelectorAll(".tech-tag");
    if (tags.length === 0) return;

    // Elastic pop stagger on tab change
    gsap.killTweensOf(tags);
    gsap.set(tags, { scale: 0, opacity: 0 });

    gsap.to(tags, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: "back.out(1.5)",
      overwrite: "auto",
    });
  }, [active]);

  return (
    <section id="tech-stack" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-12">
          <span
            className="inline-block text-[11px] font-medium tracking-[0.18em] uppercase mb-4 px-3 py-1 rounded-full text-black/50"
            style={{ background: "#f3f3f3" }}
          >
            Our Capabilities
          </span>
          <h2
            className="font-display font-medium text-black mx-auto mb-4"
            style={{ fontSize: "clamp(32px, 4.5vw, 54px)", lineHeight: 1.22, letterSpacing: "-0.5px", maxWidth: 600 }}
          >
            <SplitText text="Modern Technology Stack" type="words" triggerSelector="#tech-stack" />
          </h2>
          <p className="text-black/50 max-w-md mx-auto" style={{ fontSize: 16, lineHeight: 1.6 }}>
            We leverage reliable and high-performance technologies to build scalable, production-grade applications.
          </p>
        </div>

        {/* Tab pill row */}
        <div className="flex items-center gap-1 p-1.5 mb-12 mx-auto flex-wrap justify-center" style={{ background: "#f3f3f3", borderRadius: 9999, width: "fit-content" }}>
          {techLayers.map((t, i) => {
            const Icon = t.icon;
            const isActive = active === i;
            return (
              <Magnetic key={t.label} strength={0.2}>
                <button
                  onClick={() => setActive(i)}
                  className={cn(
                    "inline-flex items-center gap-2 px-5 py-2 rounded-[9999px] text-[14px] font-medium transition-all duration-200",
                    isActive ? "bg-black text-white" : "text-black/60 hover:text-black hover:bg-black/6"
                  )}
                  style={isActive ? { boxShadow: "rgba(255,255,255,0.5) 0px 2px 2px 0px, rgba(0,0,0,0.2) 0px 3px 3px 0px" } : {}}
                >
                  <Icon size={14} />
                  {t.label}
                </button>
              </Magnetic>
            );
          })}
        </div>

        {/* Animated tech tag pills */}
        <div ref={tagsRef} className="flex flex-wrap gap-3 justify-center min-h-[60px]">
          {layer.technologies.map((tech, i) => (
            <span
              key={tech}
              className="tech-tag sticker-pop shimmer-hover inline-flex items-center px-5 py-2.5 text-[15px] font-medium text-black rounded-[9999px] cursor-default"
              style={{
                background: layer.tints[i % layer.tints.length],
                boxShadow: "rgba(255,255,255,0.5) 0px 2px 2px 0px, rgba(0,0,0,0.12) 0px 2px 3px 0px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

