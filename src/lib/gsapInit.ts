import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Only register on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
