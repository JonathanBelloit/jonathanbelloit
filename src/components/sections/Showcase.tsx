"use client";

import Image from "next/image";
import Link from "next/link";
import ParallaxReveal from "@/components/animations/ParallaxReveal";
import { projects, type Project } from "@/data/projects";

export default function Showcase() {
	return (
		<section id="work" className="bg-black text-white">
			<div className="mx-auto max-w-6xl px-4 py-20">
				<div className="mb-8 flex items-end justify-between">
					<h2 className="text-2xl font-semibold tracking-tight">Featured Work</h2>
					<Link href="/projects" className="text-sm text-white/70 hover:text-white">View all</Link>
				</div>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{projects.slice(0, 4).map((p: Project) => (
						<ParallaxReveal key={p.slug}>
							<Link href={`/projects?slug=${p.slug}`} className="group block overflow-hidden rounded-xl border border-white/10 bg-white/5">
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
						</ParallaxReveal>
					))}
				</div>
			</div>
		</section>
	);
}
