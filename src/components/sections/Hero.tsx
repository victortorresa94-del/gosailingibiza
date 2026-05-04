"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, ChevronDown, Anchor, Search } from "lucide-react";
import { clsx } from "clsx";

const BOAT_TYPES = ["Velero", "Catamarán", "Cualquiera"];
const DURATIONS = ["Day", "Overnight", "Week"];
const GUEST_OPTIONS = ["2 huéspedes", "4 huéspedes", "6 huéspedes", "8 huéspedes", "10 huéspedes", "12 huéspedes"];

export default function Hero() {
  const [boatType, setBoatType] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2 huéspedes");
  const [duration, setDuration] = useState("Day");

  return (
    <section className="relative w-full h-screen min-h-[680px] max-h-[960px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/40 via-ocean-deep/20 to-ocean-deep/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center section-pad pt-20">
        <div className="max-w-2xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display font-bold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
          >
            Navega Ibiza.<br />
            Vive el Mediterráneo.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-body text-white/85 text-base sm:text-lg mb-10 max-w-lg leading-relaxed"
          >
            Alquila un barco privado y descubre la magia de Ibiza y Formentera desde el mar.
          </motion.p>

          {/* Search widget */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="glass-card p-4 sm:p-5 w-full max-w-2xl"
          >
            {/* Desktop: horizontal row */}
            <div className="hidden sm:grid sm:grid-cols-4 gap-1 mb-4">
              {/* Tipo de barco */}
              <div className="relative">
                <label className="block font-body text-[10px] font-medium text-text-muted uppercase tracking-widest mb-1 px-1">
                  Tipo de barco
                </label>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:border-turquoise transition-colors cursor-pointer">
                  <Anchor size={14} className="text-text-muted shrink-0" />
                  <select
                    value={boatType}
                    onChange={(e) => setBoatType(e.target.value)}
                    className="flex-1 bg-transparent font-body text-sm text-text appearance-none cursor-pointer min-w-0"
                  >
                    <option value="" disabled>Selecciona tipo</option>
                    {BOAT_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="text-text-muted shrink-0" />
                </div>
              </div>

              {/* Fecha */}
              <div className="relative">
                <label className="block font-body text-[10px] font-medium text-text-muted uppercase tracking-widest mb-1 px-1">
                  Fecha
                </label>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:border-turquoise transition-colors">
                  <Calendar size={14} className="text-text-muted shrink-0" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="flex-1 bg-transparent font-body text-sm text-text min-w-0 cursor-pointer"
                    placeholder="Selecciona fecha"
                  />
                </div>
              </div>

              {/* Huéspedes */}
              <div className="relative">
                <label className="block font-body text-[10px] font-medium text-text-muted uppercase tracking-widest mb-1 px-1">
                  Huéspedes
                </label>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:border-turquoise transition-colors cursor-pointer">
                  <Users size={14} className="text-text-muted shrink-0" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="flex-1 bg-transparent font-body text-sm text-text appearance-none cursor-pointer min-w-0"
                  >
                    {GUEST_OPTIONS.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="text-text-muted shrink-0" />
                </div>
              </div>

              {/* Duración */}
              <div>
                <label className="block font-body text-[10px] font-medium text-text-muted uppercase tracking-widest mb-1 px-1">
                  Duración
                </label>
                <div className="flex rounded-xl border border-gray-200 overflow-hidden h-[38px]">
                  {DURATIONS.map((d) => (
                    <button
                      key={d}
                      onClick={() => setDuration(d)}
                      className={clsx(
                        "flex-1 font-body text-xs font-medium transition-colors",
                        duration === d
                          ? "bg-ocean-deep text-white"
                          : "text-text-muted hover:bg-gray-50"
                      )}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: stacked */}
            <div className="sm:hidden space-y-3 mb-4">
              <div>
                <label className="block font-body text-[10px] font-medium text-text-muted uppercase tracking-widest mb-1">Tipo de barco</label>
                <div className="flex items-center gap-2 px-3 py-3 rounded-xl border border-gray-200">
                  <Anchor size={14} className="text-text-muted" />
                  <select value={boatType} onChange={(e) => setBoatType(e.target.value)} className="flex-1 bg-transparent font-body text-sm text-text appearance-none">
                    <option value="" disabled>Selecciona tipo</option>
                    {BOAT_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-body text-[10px] font-medium text-text-muted uppercase tracking-widest mb-1">Fecha</label>
                <div className="flex items-center gap-2 px-3 py-3 rounded-xl border border-gray-200">
                  <Calendar size={14} className="text-text-muted" />
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="flex-1 bg-transparent font-body text-sm text-text" />
                </div>
              </div>
              <div>
                <label className="block font-body text-[10px] font-medium text-text-muted uppercase tracking-widest mb-1">Huéspedes</label>
                <div className="flex items-center gap-2 px-3 py-3 rounded-xl border border-gray-200">
                  <Users size={14} className="text-text-muted" />
                  <select value={guests} onChange={(e) => setGuests(e.target.value)} className="flex-1 bg-transparent font-body text-sm text-text appearance-none">
                    {GUEST_OPTIONS.map((g) => <option key={g}>{g}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-body text-[10px] font-medium text-text-muted uppercase tracking-widest mb-1">Duración</label>
                <div className="flex rounded-xl border border-gray-200 overflow-hidden">
                  {DURATIONS.map((d) => (
                    <button key={d} onClick={() => setDuration(d)}
                      className={clsx("flex-1 py-3 font-body text-sm font-medium transition-colors", duration === d ? "bg-ocean-deep text-white" : "text-text-muted")}
                    >{d}</button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA button */}
            <button className="w-full bg-turquoise hover:bg-[#00b39e] text-white font-body font-medium py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-base">
              <Search size={16} />
              Buscar disponibilidad
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-8 bg-white/40 animate-pulse" />
      </motion.div>
    </section>
  );
}
