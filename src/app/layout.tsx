import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: ['300', '700'], variable: "--font--ibm-plex-serif"});

export const metadata: Metadata = {
  title: "CARD",
  description: "Acesso a todos os projetos do bruno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="bg-blue-400 min-w-full min-h-max">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
