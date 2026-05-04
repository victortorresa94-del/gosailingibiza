"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

const NAV_LINKS = [
  { label: "Flota", href: "/flota" },
  { label: "Rutas", href: "/rutas" },
  { label: "Experiencias", href: "/experiencias" },
  { label: "Nosotros", href: "/nosotros" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-ocean-deep/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      )}
    >
      <div className="section-pad flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full border-2 border-[#C9A84C] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="12" y1="2" x2="19" y2="19" />
              <line x1="12" y1="2" x2="5" y2="19" />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-white text-sm tracking-widest uppercase">
              Go Sailing
            </div>
            <div className="font-body text-[9px] text-white/60 tracking-[0.2em] uppercase">
              Boat Charter
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-white/90 hover:text-white transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/reservar" className="btn-coral text-sm px-5 py-2.5">
            Reservar
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ocean-deep/98 backdrop-blur-md px-4 pb-6 pt-2 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-body text-white/90 text-base py-2 border-b border-white/10"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/reservar" onClick={() => setOpen(false)} className="btn-coral block text-center mt-4">
            Reservar
          </Link>
        </div>
      )}
    </header>
  );
}
