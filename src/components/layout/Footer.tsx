export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60">© {new Date().getFullYear()} Jonathan Belloit. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="mailto:hello@jonathanbelloit.com" className="hover:text-white/80">Email</a>
          <a href="https://github.com/JonathanBelloit" target="_blank" className="hover:text-white/80" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jonathanbelloit" target="_blank" className="hover:text-white/80" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
