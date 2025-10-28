"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/nav";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 text-white border-b border-white/10 supports-[backdrop-filter]:backdrop-blur-md bg-[linear-gradient(to_right,rgba(147,197,253,0.10),rgba(147,197,253,0.06))]"
    >
      <div className="mx-auto flex max-w-6xl min-h-[75px] items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold text-lg tracking-tight">JB</Link>
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded hover:bg-white/40"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="i-material-symbols-menu text-2xl">≡</span>
        </button>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg hover:text-white/80 transition-colors ${pathname === item.href ? "text-white" : "text-white/70"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 supports-[backdrop-filter]:backdrop-blur-md bg-[linear-gradient(to_right,rgba(147,197,253,0.10),rgba(147,197,253,0.06))]">
          <nav className="mx-auto max-w-6xl px-4 py-2 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm ${pathname === item.href ? "text-white" : "text-white/70"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
