"use client";

import { useState } from "react";
import { Search, Calendar, User, Clock, ArrowRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const categories = ["All", "Engineering", "Architecture", "Design", "Cloud"];

const postsData = [
  {
    id: "scaling-nextjs",
    title: "Scaling Next.js to Million-User Benchmarks",
    category: "Engineering",
    excerpt: "How we configured server caching, database pooling constraints, and asset pipelines to deliver instantaneous page loads for heavy multi-tenant platforms.",
    date: "June 14, 2026",
    author: "Aman Sharma",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "strict-typing-react",
    title: "Why We Strict-Type Our Client Frontends",
    category: "Architecture",
    excerpt: "Exploring compiler rules, state management paradigms, and how TypeScript prevents runtime failures across modular React applications.",
    date: "May 28, 2026",
    author: "Rahul Verma",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: "design-systems-figma",
    title: "Designing High-Fidelity Design Systems in Figma",
    category: "Design",
    excerpt: "A walkthrough of token-based design systems, spacing guides, and structuring responsive web assets to guarantee developer-friendly handoffs.",
    date: "May 10, 2026",
    author: "Pooja Choudhary",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: "optimize-infrastructure-aws",
    title: "Optimizing Cloud Infrastructure Costs on AWS",
    category: "Cloud",
    excerpt: "Identifying resource wastage, deploying Terraform configurations, and setting autoscaling rules that trim bills by 30% or more.",
    date: "April 18, 2026",
    author: "Neeraj Gupta",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: "performance-seo-audit",
    title: "Crucial Core Web Vitals to Maximize Search Rank",
    category: "Engineering",
    excerpt: "An engineering-focused guide to DOM size reduction, Cumulative Layout Shift (CLS) prevention, and Server Response Time tuning.",
    date: "March 22, 2026",
    author: "Aman Sharma",
    readTime: "9 min read",
    featured: false,
  }
];

export function BlogClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = postsData.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === "All" || 
      post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = postsData.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured || selectedCategory !== "All");

  return (
    <div className="space-y-12">
      {/* Search & Categories Bar */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center border-b border-surface/85 pb-6">
        {/* Categories */}
        <div className="flex gap-2 p-1 bg-card/30 border border-surface/50 rounded-lg overflow-x-auto scrollbar-none max-w-full">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-md text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-muted hover:text-text-main hover:bg-surface/50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search insights..."
            className="w-full bg-card/45 border border-surface/60 px-4 py-2.5 pl-10 rounded-md text-xs text-text-main focus:outline-none focus:border-primary/50 placeholder-muted/50 transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search size={14} className="absolute left-3.5 top-3.5 text-muted" />
        </div>
      </div>

      {/* Featured Post (Only show if search query is empty and selectedCategory is All/Engineering) */}
      {searchQuery === "" && (selectedCategory === "All" || selectedCategory === featuredPost?.category) && featuredPost && (
        <div className="bg-card/40 border border-surface rounded-lg p-6 md:p-8 lg:p-10 hover:border-primary/20 transition-all duration-300 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Meta & Summary */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="accent">FEATURED INSIGHT</Badge>
                <span className="text-xs text-primary font-sans font-bold uppercase tracking-wider">
                  {featuredPost.category}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-text-main leading-tight">
                {featuredPost.title}
              </h2>
              
              <p className="text-muted font-sans text-sm md:text-base leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-muted">
                <div className="flex items-center gap-1.5">
                  <User size={13} className="text-primary" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={13} />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>

            {/* Read Button Link */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Button href="/contact" variant="primary" size="md">
                Read Article
                <ArrowRight size={14} className="ml-1" />
              </Button>
            </div>

          </div>
        </div>
      )}

      {/* Regular Posts Grid */}
      <div className="space-y-6">
        <h3 className="text-xs font-sans font-bold text-text-main uppercase tracking-widest">
          Latest Publications
        </h3>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-surface rounded-lg bg-card/10">
            <BookOpen size={24} className="text-muted/30 mx-auto mb-2" />
            <p className="text-sm text-muted">No insights match your active search terms or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularPosts.map((post) => (
              <div
                key={post.id}
                className="bg-card/45 border border-surface p-6 rounded-lg flex flex-col justify-between hover:border-primary/20 transition-all duration-300 shadow-md group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-primary uppercase font-bold tracking-widest">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-muted font-sans">{post.date}</span>
                  </div>

                  <h4 className="text-base font-display font-bold text-text-main group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h4>
                  
                  <p className="text-xs text-muted leading-relaxed font-sans line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 pt-6 border-t border-surface/85 mt-6">
                  <div className="flex items-center gap-3 text-[10px] font-sans text-muted">
                    <span className="flex items-center gap-1"><User size={11} />{post.author.split(" ")[0]}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                  </div>

                  <button
                    onClick={() => alert("Full articles are under compilation. Technical blueprints can be discussed directly during a consulting review.")}
                    className="inline-flex items-center gap-1 text-[11px] font-sans font-semibold text-primary hover:text-text-main uppercase tracking-widest transition-colors cursor-pointer group/btn"
                  >
                    Read Post
                    <ArrowRight size={11} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
