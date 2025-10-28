import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Link key={p.slug} href={`?slug=${p.slug}`} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="relative aspect-[16/10]">
                <Image src={p.thumbnail} alt={p.title} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <span className="text-xs text-white/60">{p.role}</span>
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-white/70">{p.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
