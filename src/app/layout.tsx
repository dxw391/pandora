import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import MainLayout from "../components/MainLayout";
import { UIProvider } from "../components/providers/UIProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pandora — Osservatorio Civico",
  description: "Osservatorio civico per la trasparenza e l'onestà intellettuale nel territorio. Analizziamo i fatti, approfondiamo i documenti e promuoviamo una discussione politica libera da slogan e pregiudizi.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <UIProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </UIProvider>
      </body>
    </html>
  );
}
