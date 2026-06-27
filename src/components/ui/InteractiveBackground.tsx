"use client";

import dynamic from "next/dynamic";

// Lazy-load the InteractiveCanvas to avoid blocking SSR or layout hydration
const InteractiveCanvas = dynamic(
  () => import("./InteractiveCanvas").then((mod) => mod.InteractiveCanvas),
  {
    ssr: false,
    loading: () => null,
  }
);

export function InteractiveBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <InteractiveCanvas />
    </div>
  );
}
