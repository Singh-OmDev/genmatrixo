"use client";

import { useState } from "react";
import { 
  Cpu, 
  ShieldCheck, 
  Globe, 
  GraduationCap, 
  TrendingUp, 
  ArrowRight, 
  X, 
  Layers, 
  Smartphone, 
  Cloud 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "saas", label: "Enterprise SaaS", icon: Layers },
  { id: "mobile", label: "Mobile Systems", icon: Smartphone },
  { id: "infra", label: "Cloud & Infrastructure", icon: Cloud },
];

const projectsData = [
  {
    id: "apex-fintech",
    title: "Apex Fintech Portal",
    category: "saas",
    categoryLabel: "Enterprise SaaS & Finance",
    summary: "High-throughput financial portal handling 10k transactions/sec with sub-50ms latency.",
    challenge: "High transactional database bottlenecks during peak trading windows, causing latency spikes up to 4.2 seconds and data synchronization delays.",
    research: "Audited existing infrastructure and discovered contention on the primary database thread pool and unnecessary write lock queues. User session mapping indicated 80% of data reads were redundant, static configurations.",
    solution: "Designed a reactive microservices engine separating read/write operations. Implemented Redis distributed caching for user portfolios and Apache Kafka event queues to process transaction records asynchronously.",
    architecture: "CQRS (Command Query Responsibility Segregation) pattern. The write API pushes commands directly to Kafka, while read replicas process queries from optimized indexes. Redis acts as a write-through cache with a 500ms TTL.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Kafka", "AWS Lambda", "Terraform"],
    results: "99.99% system uptime, 72% average load time reduction (latency fell below 45ms), and stable transaction scaling to 10k/sec without a single database drop.",
    icon: Cpu,
  },
  {
    id: "carepulse-health",
    title: "CarePulse Health Platform",
    category: "mobile",
    categoryLabel: "HIPAA-Compliant Healthcare App",
    summary: "HIPAA-compliant patient telemetry and secure scheduling portal with zero data leaks.",
    challenge: "Fragmented clinical database scheduling systems causing high manual data entry overhead, slow scheduling pipelines, and severe HIPAA compliance exposure.",
    research: "Conducted security compliance scans and user journey audits on hospital administrators. Identified vulnerabilities in patient records transmission protocols and slow scheduling loops due to unindexed database layouts.",
    solution: "Engineered an end-to-end encrypted synchronization runtime for healthcare scheduling and patient vitals telemetry. Integrated client-side encryption layers and secure key storage systems.",
    architecture: "HIPAA-compliant cloud architecture. Cryptographic keys are rotated automatically via AWS KMS. Patient data is encrypted on the device before transmission and stored in an isolated database vault.",
    tech: ["React Native", "Node.js", "Express", "MongoDB", "AWS KMS", "Docker", "GitLab CI"],
    results: "40% reduction in client scheduling overhead, zero compliance violations, achieving full HIPAA audit certification and securing 50k+ active patient records.",
    icon: ShieldCheck,
  },
  {
    id: "logisync-global",
    title: "LogiSync Global Dashboard",
    category: "infra",
    categoryLabel: "Supply Chain & Logistics Platform",
    summary: "Real-time logistics coordinator tracking 100k shipments globally with live GPS mapping.",
    challenge: "Delayed GPS telemetry processing and slow map updates, causing logistics managers to make routing decisions based on stale data.",
    research: "Discovered that the backend was bottlenecked by HTTP polling requests from client browsers, overloading the primary server thread pool and bloating server memory usage.",
    solution: "Replaced legacy polling with high-performance WebSockets. Implemented Go-based packet handlers to process telemetry data streams and update maps dynamically.",
    architecture: "Event-driven WebSocket server built in Golang. The server decodes UDP coordinate packets from logistics trucks, publishes updates to Redis Pub/Sub, and broadcasts them to clients.",
    tech: ["Golang", "React", "WebSockets", "Redis Pub/Sub", "PostgreSQL", "Docker", "Google Maps API"],
    results: "Live updates reduced from 45 seconds to 250ms, server memory usage fell by 60%, allowing managers to route 100k+ shipments live.",
    icon: Globe,
  },
  {
    id: "edusphere-lms",
    title: "EduSphere LMS Infrastructure",
    category: "saas",
    categoryLabel: "Enterprise SaaS & EdTech",
    summary: "Custom learning management platform scaled to support 250k student sessions simultaneously.",
    challenge: "LMS servers regularly crashed during final exam windows due to sudden traffic spikes, causing loss of exam submissions and student panic.",
    research: "Identified database connection pooling exhaustion and blocking file read operations on heavy assets (exam PDFs/videos) hosted directly from the web server.",
    solution: "Decoupled static assets to a CDN network. Restructured the database connection layer with PgBouncer and implemented auto-scaling node policies on Kubernetes.",
    architecture: "Kubernetes microservices setup. Web traffic is distributed via Nginx Ingress Controller. Storage is decoupled to AWS S3 + CloudFront, and database connections are throttled via PgBouncer.",
    tech: ["Next.js", "Django", "PgBouncer", "Kubernetes", "AWS S3", "CloudFront", "PostgreSQL"],
    results: "Zero server crashes during peak finals, support for 250k concurrent student sessions, and 45% reduction in cloud hosting bills.",
    icon: GraduationCap,
  }
];

export function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  const filteredProjects = activeFilter === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="space-y-12">
      {/* Category Filter */}
      <div className="flex gap-2 justify-center border-b border-surface/80 pb-4 overflow-x-auto scrollbar-none">
        <div className="flex gap-2 p-1 bg-card/30 border border-surface/50 rounded-lg whitespace-nowrap">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-md text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-muted hover:text-text-main hover:bg-surface/50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => {
          const Icon = project.icon;
          return (
            <div
              key={project.id}
              className="bg-card/45 border border-surface rounded-lg p-6 lg:p-8 flex flex-col justify-between hover:border-primary/20 transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 bg-surface flex items-center justify-center text-primary rounded-md shrink-0 border border-surface-variant/30">
                    <Icon size={18} className="stroke-[1.5]" />
                  </div>
                  <Badge variant="primary">{project.categoryLabel}</Badge>
                </div>

                <h3 className="text-xl font-display font-bold text-text-main mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="text-muted font-sans text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>
              </div>

              <div>
                {/* Metrics Callout */}
                <div className="bg-background/50 border border-surface p-4 rounded-md mb-6 flex items-center gap-3">
                  <TrendingUp size={16} className="text-accent shrink-0" />
                  <div>
                    <span className="text-[10px] font-sans font-semibold text-accent uppercase tracking-widest block">
                      Results Metric
                    </span>
                    <span className="text-xs text-text-main font-sans leading-tight">
                      {project.results.split(",")[0]}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 pt-4 border-t border-surface/80">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-surface border border-surface-variant text-[10px] text-muted font-mono font-medium">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-surface/30 text-[10px] text-muted font-mono">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-primary hover:text-text-main tracking-wider uppercase transition-colors cursor-pointer group/btn"
                  >
                    View Details
                    <ArrowRight size={12} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl bg-card border border-surface rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-surface hover:bg-surface-variant text-muted hover:text-text-main rounded-full transition-colors cursor-pointer z-20"
              >
                <X size={16} />
              </button>

              {/* Modal Header */}
              <div className="p-6 md:p-8 bg-surface/40 border-b border-surface">
                <span className="text-xs font-sans font-semibold text-primary uppercase tracking-widest block mb-2">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-text-main">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Scrollable Modal Content */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1 scrollbar-thin">
                
                {/* Challenge & Research Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <span className="text-xs font-sans font-bold text-text-main uppercase tracking-widest block border-b border-surface pb-1.5">
                      1. The Challenge
                    </span>
                    <p className="text-sm text-muted leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-sans font-bold text-text-main uppercase tracking-widest block border-b border-surface pb-1.5">
                      2. Analysis & Research
                    </span>
                    <p className="text-sm text-muted leading-relaxed">
                      {selectedProject.research}
                    </p>
                  </div>
                </div>

                {/* Solution & Architecture Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <span className="text-xs font-sans font-bold text-text-main uppercase tracking-widest block border-b border-surface pb-1.5">
                      3. Applied Solution
                    </span>
                    <p className="text-sm text-muted leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-sans font-bold text-text-main uppercase tracking-widest block border-b border-surface pb-1.5">
                      4. System Architecture
                    </span>
                    <p className="text-sm text-muted leading-relaxed font-sans">
                      {selectedProject.architecture}
                    </p>
                  </div>
                </div>

                {/* Tech Stack & Results block */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
                  {/* Tech stack */}
                  <div className="md:col-span-6 space-y-3">
                    <span className="text-xs font-sans font-bold text-text-main uppercase tracking-widest block">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded bg-surface border border-surface-variant text-xs text-muted font-mono font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results box */}
                  <div className="md:col-span-6 bg-primary/10 border border-primary/20 rounded-lg p-5 space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <TrendingUp size={16} />
                      <span className="text-xs font-sans font-bold uppercase tracking-widest">
                        Performance Results & Metrics
                      </span>
                    </div>
                    <p className="text-sm text-text-main leading-relaxed font-sans font-semibold">
                      {selectedProject.results}
                    </p>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 md:p-6 bg-surface/40 border-t border-surface flex justify-end gap-3">
                <Button onClick={() => setSelectedProject(null)} variant="secondary" size="sm">
                  Close Case
                </Button>
                <Button href="/contact" variant="primary" size="sm">
                  Discuss Similar Scope
                  <ArrowRight size={14} />
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
