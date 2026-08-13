import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Majesty Conciergerie — Votre location, tenue comme un hôtel",
  description:
    "Majesty Conciergerie gère l'intégralité de votre bien Airbnb et Booking en Haute-Savoie, à Genève et en Suisse romande — voyageurs, entretien, annonces, revenus.",
  icons: {
    icon: [
      { url: "/images/favicon4/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon4/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon4/favicon.ico" },
    ],
    apple: "/images/favicon4/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-bg text-ink font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
