"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "From vision to purposeful interfaces",
    copy: "I translate goals into clear, intuitive experiences — not just nice-looking screens.",
    color: "from-[#0ea5e9] to-transparent",
    principle: "01 — Clarity"
  },
  {
    title: "I use animations to tell the story — to guide, not distract.",
    copy: "Interactive and strategically designed animations reveal the story as it unfolds.",
    color: "from-[#22c55e] to-transparent",
    principle: "02 — Motion"
  },
  {
    title: "Data-informed decisions",
    copy: "A/B tests, analytics, feedback, and iteration inform what actually stays — not what simply ships first.",
    color: "from-[#eab308] to-transparent",
    principle: "03 — Data"
  },
  {
    title: "Built for the real world from day one",
    copy: "Performance, accessibility, and scalability are not afterthoughts — they are the baseline.",
    color: "from-[#a78bfa] to-transparent",
    principle: "04 — Production"
  },
];

export default function ScrollStory() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-story-step]");
      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // subtle pinned background color wash as user scrolls
  const root = sectionRef.current as HTMLElement;
  const bg = root.querySelector<HTMLElement>("[data-story-bg]");
      if (bg) {
        gsap.to(bg, {
          backgroundPosition: "0% 100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden">
      <div data-story-bg className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,_theme(colors.white/10),_transparent_50%),_radial-gradient(circle_at_80%_20%,_theme(colors.white/10),_transparent_50%)] bg-[length:120%_120%] bg-[position:0%_0%]" />
      <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
        <p className="text-sm uppercase tracking-widest text-white/60">My Process</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">The principles behind my work</h2>
        <div className="mt-10 space-y-16">
          {steps.map((s, idx) => (
            <div key={idx} data-story-step className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-xl font-medium md:text-2xl">{s.title}</h3>
                <p className="mt-2 text-white/70">{s.copy}</p>
              </div>
              <div className="relative h-48 rounded-xl border border-white/10 bg-white/5">
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${s.color} opacity-20`} />
                <div className="absolute inset-0 grid place-items-center text-white/50 text-3xl">{s.principle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
