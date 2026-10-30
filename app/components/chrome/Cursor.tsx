"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/** Difference-blended dot that lags the pointer. Hidden on touch via CSS. */
export default function Cursor() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" });
    const moveY = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });
    gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0 });

    const onMove = (e: PointerEvent) => {
      move(e.clientX);
      moveY(e.clientY);
      gsap.to(el, { opacity: 1, duration: 0.2, overwrite: true });
    };

    const grow = (active: boolean) =>
      gsap.to(el, { scale: active ? 3.2 : 1, duration: 0.3, ease: "power3" });

    const onOver = (e: PointerEvent) => {
      const target = (e.target as HTMLElement).closest("[data-cursor='hover'], a, button");
      grow(Boolean(target));
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, []);

  return (
    <div
      id="cursor"
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4 rounded-full bg-bone mix-blend-difference"
    />
  );
}
