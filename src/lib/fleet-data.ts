export type BoatType = "velero" | "catamaran";
export type DurationType = "day" | "overnight" | "week";

export interface Boat {
  id: string;
  slug: string;
  name: string;
  type: BoatType;
  capacity: number;
  length: number;
  cabins: number;
  bathrooms: number;
  year: number;
  brand: string;
  description: string;
  priceDay: number;
  priceWeek: number;
  images: string[];
  badge?: "popular" | "nuevo";
  included: string[];
  specs: Record<string, string | number>;
}

export const BOATS: Boat[] = [
  {
    id: "1",
    slug: "bali-42",
    name: "Bali 4.2",
    type: "catamaran",
    capacity: 8,
    length: 12.8,
    cabins: 4,
    bathrooms: 4,
    year: 2022,
    brand: "Bali",
    description:
      "El Bali 4.2 es un catamarán que combina espacio, confort y estabilidad para ofrecer una experiencia única navegando por las aguas de Ibiza y Formentera.",
    priceDay: 950,
    priceWeek: 5800,
    badge: "popular",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80",
    ],
    included: ["Patrón", "Combustible", "Seguro", "Paddle surf", "Snorkel", "Champán", "WiFi", "Altavoz BT"],
    specs: { eslora: "12.8m", manga: "7.4m", calado: "1.2m" },
  },
  {
    id: "2",
    slug: "excess-11",
    name: "EXCESS 11",
    type: "catamaran",
    capacity: 10,
    length: 11,
    cabins: 4,
    bathrooms: 4,
    year: 2021,
    brand: "Excess",
    description:
      "El EXCESS 11 es el catamarán de nueva generación, diseñado para la velocidad y el confort en las aguas mediterráneas.",
    priceDay: 950,
    priceWeek: 5800,
    badge: "nuevo",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1467348733814-f0ceac09f290?w=800&q=80",
    ],
    included: ["Patrón", "Combustible", "Seguro", "Paddle surf", "Snorkel", "WiFi"],
    specs: { eslora: "11m", manga: "6.6m", calado: "1.1m" },
  },
  {
    id: "3",
    slug: "la-bella-lola",
    name: "La Bella Lola",
    type: "velero",
    capacity: 6,
    length: 11,
    cabins: 3,
    bathrooms: 2,
    year: 2018,
    brand: "Bavaria",
    description:
      "La Bella Lola es un elegante velero perfecto para parejas y grupos pequeños que buscan una experiencia íntima navegando por Ibiza.",
    priceDay: 650,
    priceWeek: 3500,
    badge: "popular",
    images: [
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&q=80",
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
    ],
    included: ["Patrón", "Combustible", "Seguro", "Snorkel", "WiFi"],
    specs: { eslora: "11m", manga: "3.8m", calado: "1.9m" },
  },
  {
    id: "4",
    slug: "angelica",
    name: "Angelica",
    type: "velero",
    capacity: 8,
    length: 12,
    cabins: 4,
    bathrooms: 2,
    year: 2016,
    brand: "Jeanneau",
    description:
      "Angelica es un velero espacioso ideal para familias y grupos que quieren explorar las mejores calas de Ibiza y Formentera.",
    priceDay: 650,
    priceWeek: 3500,
    images: [
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    ],
    included: ["Patrón", "Combustible", "Seguro", "Paddle surf", "Snorkel"],
    specs: { eslora: "12m", manga: "4.1m", calado: "2.0m" },
  },
  {
    id: "5",
    slug: "pardo-38",
    name: "PARDO 38",
    type: "velero",
    capacity: 6,
    length: 11.5,
    cabins: 3,
    bathrooms: 2,
    year: 2020,
    brand: "Pardo",
    description:
      "El PARDO 38 es un velero de diseño italiano con prestaciones deportivas y acabados de lujo, perfecto para una experiencia premium.",
    priceDay: 650,
    priceWeek: 3500,
    badge: "nuevo",
    images: [
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800&q=80",
      "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800&q=80",
    ],
    included: ["Patrón", "Combustible", "Seguro", "WiFi", "Snorkel"],
    specs: { eslora: "11.5m", manga: "3.9m", calado: "2.1m" },
  },
  {
    id: "6",
    slug: "elan-401",
    name: "ELAN 40.1",
    type: "velero",
    capacity: 8,
    length: 12.3,
    cabins: 4,
    bathrooms: 2,
    year: 2019,
    brand: "Elan",
    description:
      "El ELAN 40.1 combina elegancia y funcionalidad, ofreciendo una navegación cómoda para grupos de hasta 8 personas.",
    priceDay: 650,
    priceWeek: 3500,
    images: [
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
    ],
    included: ["Patrón", "Combustible", "Seguro", "Paddle surf", "WiFi"],
    specs: { eslora: "12.3m", manga: "4.0m", calado: "2.0m" },
  },
];

export const SEASON_MULTIPLIERS: Record<string, number> = {
  low: 1.0,    // Oct–May
  mid: 1.4,    // Jun, Sep
  high: 1.7,   // Jul
  peak: 2.1,   // Aug
};
