"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article";
  /** Animate once when it enters the viewport. Set false for load animations. */
  scroll?: boolean;
};

/** Bungee-style entrance: vertical offset + fade, once. */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  as = "div",
  scroll = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = as as any;

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tween = {
        y,
        opacity: 0,
        duration: 0.85,
        delay,
        ease: "power3.out",
      };

      if (scroll) {
        gsap.from(el, { ...tween, scrollTrigger: { trigger: el, start: "top 92%", once: true } });
      } else {
        gsap.from(el, tween);
      }
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
