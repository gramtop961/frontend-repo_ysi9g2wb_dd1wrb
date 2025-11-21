import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? "backdrop-blur bg-slate-900/70 border-b border-white/10" : "bg-transparent"
    }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight">My Portfolio</a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-slate-200 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          {open ? <X size={22}/> : <Menu size={22}/>} 
        </button>
      </nav>
      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-slate-200 hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
