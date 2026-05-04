import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Go Sailing Ibiza | Alquiler de Barcos con Patrón en Ibiza",
  description:
    "Alquila un barco privado en Ibiza y Formentera con patrón incluido. Veleros y catamaranes para day charter, noche y semana. Reserva online.",
  keywords: "alquiler barco ibiza, charter barco ibiza, alquiler velero ibiza, catamarán ibiza, barco formentera",
  openGraph: {
    title: "Go Sailing Ibiza | Navega Ibiza. Vive el Mediterráneo.",
    description: "Alquila un barco privado y descubre la magia de Ibiza y Formentera desde el mar.",
    url: "https://gosailingibiza.com",
    siteName: "Go Sailing Ibiza",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
