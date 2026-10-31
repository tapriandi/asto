"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Sticky card stack: each child pins under the header, and the one leaving is
 * scaled down and faded so the next card slides over it — the reference site's
 * signature testimonials behaviour.
 */
export default function StickyStack({
  children,
  className = "",
  top = 80,
}: {
  children: React.ReactNode;
  className?: string;
  top?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const items = gsap.utils.toArray<HTMLElement>("[data-stack-item]", root);
      if (items.length < 2) return;

      items.forEach((item, i) => {
        gsap.set(item, { transformOrigin: "center top" });

        const next = items[i + 1];
        if (next) {
          gsap.to(item, {
            scale: 0.94,
            opacity: 0.55,
            ease: "none",
            scrollTrigger: {
              trigger: next,
              start: `top ${top + item.offsetHeight * 0.08}`,
              end: `top ${top - 40}`,
              scrub: true,
            },
          });
        }
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={`flex flex-col gap-6 ${className}`}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div key={i} className="sticky" style={{ top: top + i * 18 }}>
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
