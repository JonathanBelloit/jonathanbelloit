export type Project = {
  slug: string;
  title: string;
  role: string;
  summary: string;
  thumbnail: string; // public path
  tags?: string[];
};

export const projects: Project[] = [
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    role: "Full‑stack",
    summary: "Real‑time analytics dashboard with Next.js, WebSockets, and GSAP micro‑interactions.",
  thumbnail: "/images/projects/placeholder.svg",
    tags: ["Next.js", "Node.js", "GSAP"],
  },
  {
    slug: "ecommerce-motion",
    title: "E‑commerce with Motion",
    role: "Frontend",
    summary: "Apple‑style product storytelling with scroll‑driven animations.",
  thumbnail: "/images/projects/placeholder.svg",
    tags: ["React", "GSAP", "ScrollTrigger"],
  },
  {
    slug: "marketing-site",
    title: "Marketing Site",
    role: "Frontend",
    summary: "High‑performance marketing site with a11y and SEO best practices.",
  thumbnail: "/images/projects/placeholder.svg",
    tags: ["Next.js", "SEO", "a11y"],
  },
  {
    slug: "portfolio-refresh",
    title: "Portfolio Refresh",
    role: "Design & Dev",
    summary: "New visual system, typography and motion tokens for a personal brand.",
  thumbnail: "/images/projects/placeholder.svg",
    tags: ["Design System", "Tailwind"],
  },
];
