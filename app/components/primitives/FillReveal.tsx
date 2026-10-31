"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type FillRevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Start filling when the block reaches this point in the viewport. */
  start?: string;
  /** Finish filling here. */
  end?: string;
};

/**
 * Bungee-style "colour sweep" headline: a light copy sits underneath, and a
 * dark copy slides in from the left as the block scrolls through the viewport.
 */
export default function FillReveal({
  children,
  className = "",
  start = "top 85%",
  end = "bottom 55%",
}: FillRevealProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const fill = el.querySelector(".fill-reveal__fill");
      if (!fill) return;

      gsap.fromTo(
        fill,
        { xPercent: -101 },
        {
          xPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: true,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={`fill-reveal inline-block ${className}`}>
      <span aria-hidden className="invisible">
        {children}
      </span>
      <span aria-hidden className="fill-reveal__inner">
        <span className="fill-reveal__fill">{children}</span>
      </span>
      <span className="sr-only">{children}</span>
    </span>
  );
}
