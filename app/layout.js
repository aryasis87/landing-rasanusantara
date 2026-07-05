import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], weight: ["500", "600", "700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
  title: "Rasa Nusantara — Kuliner Tradisional, Sentuhan Modern",
  description: "Rasa Nusantara: kelezatan kuliner tradisional Indonesia dengan sentuhan modern untuk pengalaman bersantap tak terlupakan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
