import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], weight: ["500", "600", "700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"Restaurant","name":"Rasa Nusantara","description":"Kuliner tradisional sentuhan modern","url":"https://landing-rasanusantara.vercel.app","areaServed":"ID"};

export const metadata = {
  metadataBase: new URL("https://landing-rasanusantara.vercel.app"),
  title: "Rasa Nusantara — Kuliner Tradisional, Sentuhan Modern",
  description: "Rasa Nusantara: kelezatan kuliner tradisional Indonesia dengan sentuhan modern untuk pengalaman bersantap tak terlupakan.",
  applicationName: "Rasa Nusantara",
  keywords: ["kuliner nusantara", "restoran indonesia", "makanan tradisional", "kuliner modern"],
  authors: [{ name: "Rasa Nusantara" }],
  creator: "Rasa Nusantara",
  publisher: "Rasa Nusantara",
  alternates: { canonical: "https://landing-rasanusantara.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-rasanusantara.vercel.app",
    siteName: "Rasa Nusantara",
    title: "Rasa Nusantara — Kuliner Tradisional, Sentuhan Modern",
    description: "Rasa Nusantara: kelezatan kuliner tradisional Indonesia dengan sentuhan modern untuk pengalaman bersantap tak terlupakan.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Rasa Nusantara — Kuliner Tradisional, Sentuhan Modern" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rasa Nusantara — Kuliner Tradisional, Sentuhan Modern",
    description: "Rasa Nusantara: kelezatan kuliner tradisional Indonesia dengan sentuhan modern untuk pengalaman bersantap tak terlupakan.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
