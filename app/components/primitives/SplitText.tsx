"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type SplitTextProps = {
  text: string;
  className?: string;
  /** Animation delay in seconds. */
  delay?: number;
  /** Seconds between each word. */
  stagger?: number;
  /** Reveal on scroll instead of on load. */
  scroll?: boolean;
  as?: "h1" | "h2" | "h3" | "p";
};

/**
 * Word-by-word entrance, mirroring the reference site's staggered headline reveal.
 * Words animate up from below with a fade — no line/char splitting.
 */
export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.05,
  scroll = false,
  as = "p",
}: SplitTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = as as any;
  const words = text.split(" ");

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const targets = el.querySelectorAll(".split-word");

      gsap.set(targets, { yPercent: 110, opacity: 0 });

      const tween = {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        delay,
        stagger,
        ease: "power3.out",
      };

      if (scroll) {
        gsap.to(targets, {
          ...tween,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      } else {
        gsap.to(targets, tween);
      }
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.08em]">
            <span className="split-word inline-block">{word}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
