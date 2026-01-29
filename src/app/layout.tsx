import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import MainLayout from "../components/MainLayout";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pandora — Osservatorio Civico Solofra",
  description: "Osservatorio civico per la trasparenza e l'onestà intellettuale a Solofra e nel territorio. Analizziamo i fatti, approfondiamo i documenti e promuoviamo una discussione politica libera da slogan e pregiudizi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
