import { Shield, Anchor, Star, RotateCcw } from "lucide-react";

const TRUST_ITEMS = [
  { icon: Anchor, label: "Flota premium", sub: "Barcos de alta gama" },
  { icon: Shield, label: "Patrón experto", sub: "Siempre nos toca confianza" },
  { icon: Star, label: "Experiencias únicas", sub: "Momentos inolvidables" },
  { icon: RotateCcw, label: "Cancelación flexible", sub: "Hasta 48h antes" },
];

export default function TrustBar() {
  return (
    <section className="bg-ocean-deep py-6 sm:py-8">
      <div className="section-pad">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
          {TRUST_ITEMS.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
              <div className="shrink-0 w-10 h-10 rounded-full bg-turquoise/20 flex items-center justify-center">
                <Icon size={18} className="text-turquoise" />
              </div>
              <div>
                <p className="font-body font-medium text-white text-sm leading-tight">{label}</p>
                <p className="font-body text-white/55 text-xs mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
