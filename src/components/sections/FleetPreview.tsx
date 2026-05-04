"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Ruler, Anchor, ChevronLeft, ChevronRight } from "lucide-react";
import { BOATS } from "@/lib/fleet-data";
import { clsx } from "clsx";

const BADGE_LABELS = { popular: "Más popular", nuevo: "Nuevo" };
const BADGE_COLORS = { popular: "bg-coral text-white", nuevo: "bg-turquoise text-white" };

export default function FleetPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-sand/40">
      <div className="section-pad mb-8">
        <div className="flex items-end justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body text-turquoise text-sm font-medium uppercase tracking-widest mb-2"
            >
              Nuestra flota
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-ocean-deep"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Veleros & Catamaranes
            </motion.h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border border-ocean-deep/20 flex items-center justify-center hover:bg-ocean-deep hover:text-white hover:border-ocean-deep transition-all">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border border-ocean-deep/20 flex items-center justify-center hover:bg-ocean-deep hover:text-white hover:border-ocean-deep transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {BOATS.map((boat, i) => (
          <motion.div
            key={boat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.08 }}
            className="snap-start shrink-0 w-[300px] sm:w-[320px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={boat.images[0]}
                alt={boat.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="320px"
              />
              {boat.badge && (
                <span className={clsx("absolute top-3 left-3 text-xs font-body font-medium px-2.5 py-1 rounded-full", BADGE_COLORS[boat.badge])}>
                  {BADGE_LABELS[boat.badge]}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-display font-bold text-ocean-deep text-xl mb-1">{boat.name}</h3>
              <p className="font-body text-text-muted text-xs mb-3 capitalize">{boat.type} · Ibiza – Formentera</p>

              {/* Specs row */}
              <div className="flex items-center gap-3 text-text-muted text-xs font-body mb-4">
                <span className="flex items-center gap-1"><Users size={12} /> {boat.capacity} personas</span>
                <span className="flex items-center gap-1"><Ruler size={12} /> {boat.length}m</span>
                <span className="flex items-center gap-1"><Anchor size={12} /> {boat.year}</span>
              </div>

              {/* Included tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["Patrón", "Combustible", "Seguro"].map((tag) => (
                  <span key={tag} className="font-body text-[10px] font-medium bg-sand text-ocean-deep/70 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-body text-[11px] text-text-muted">desde </span>
                  <span className="font-display font-bold text-ocean-deep text-xl">{boat.priceDay}€</span>
                  <span className="font-body text-[11px] text-text-muted">/día</span>
                </div>
                <Link
                  href={`/flota/${boat.slug}`}
                  className="font-body text-sm font-medium text-turquoise hover:text-ocean-deep transition-colors"
                >
                  Ver disponibilidad →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See all link */}
      <div className="section-pad mt-8 text-center">
        <Link href="/flota" className="btn-primary inline-flex items-center gap-2">
          Ver toda la flota
        </Link>
      </div>
    </section>
  );
}
