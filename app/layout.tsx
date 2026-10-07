import type { Metadata } from "next";
import { DM_Sans, Manrope, Montserrat } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = { title: "EngenhArq — Construindo Sonhos", description: "Empreendimentos que transformam o sonho da casa própria em realidade em Maceió." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${manrope.variable} ${dmSans.variable} ${montserrat.variable}`}><SmoothScroll>{children}</SmoothScroll></body></html>;
}
