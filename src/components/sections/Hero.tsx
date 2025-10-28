"use client";

import AnimatedText from "@/components/animations/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import heroImg from "@/assets/hero_img.png";

export default function Hero() {
	return (
		<section className="relative isolate overflow-hidden bg-black text-white">
			<div className="mx-auto max-w-6xl min-h-[400px] px-4 py-24 md:py-36">
				<p className="text-xl uppercase tracking-widest text-white/60">Jonathan Belloit</p>
				<p className="mt-1 text-sm uppercase tracking-widest text-white/60">Faith-driven Software Engineer</p>
				<h1 className="mt-8 text-4xl font-semibold tracking-tight md:text-6xl">
					<AnimatedText text="I design and engineer digital experiences with conviction — rooted in faith, built for impact." />
				</h1>
				<p className="text-2xl mt-28 max-w-2xl text-white/70">
					I build with intention, not trends — crafting software that’s fast, meaningful, and made to serve and inspire real people.
				</p>
				<div className="mt-8 flex gap-6">
					<Link
						href="#work"
						className="inline-flex h-10 items-center justify-center rounded-md px-4 text-2xl font-medium text-white transition-colors border border-white/15 supports-[backdrop-filter]:backdrop-blur-md bg-[linear-gradient(to_right,rgba(37,99,235,0.70),rgba(30,64,175,0.60))] hover:bg-[linear-gradient(to_right,rgba(37,99,235,0.80),rgba(30,64,175,0.70))] shadow-[0_8px_30px_rgba(30,58,138,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
					>
						See featured work
					</Link>
					<Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-white/10 px-4 text-2xl font-medium text-white transition-colors hover:bg-white/20">Get in touch</Link>
				</div>
			</div>
			{/* Hero image in the bottom-right corner */}
			<div className="pointer-events-none absolute bottom-6 right-4 z-0 hidden md:block">
				<div className="relative h-64 w-64 lg:h-96 lg:w-96 mr-[15rem]">
					{/* blurred glow behind the image */}
					<div
						aria-hidden
						className="absolute inset-0 -z-10 rounded-full blur-3xl scale-125 bg-[radial-gradient(circle_at_50%_50%,_rgba(147,197,253,0.35)_0%,_rgba(147,197,253,0.35)_40%,_transparent_70%)]"
					/>
					<Image
						src={heroImg}
						alt="Jonathan Belloit profile"
						fill
						className="rounded-full opacity-60 object-cover shadow-2xl ring-1 ring-white/10"
						priority
						sizes="(max-width: 1024px) 12rem, 16rem"
					/>
				</div>
			</div>
			<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
		</section>
	);
}
