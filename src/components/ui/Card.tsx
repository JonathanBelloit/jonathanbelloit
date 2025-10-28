import { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={["rounded-xl border border-white/10 bg-white/5 backdrop-blur", className].join(" ")}>{children}</div>
  );
}
