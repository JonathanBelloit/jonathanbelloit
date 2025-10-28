"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedText({ text, className = "" }: { text: string; className?: string }) {
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!el.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <span ref={el} className={className}>
      {text}
    </span>
  );
}
