import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Cá Entre Nóis — Ilustrações e audiovisual",
  description:
    "Projeto artístico de Ioná Araujo com ilustrações, fotografias e produções audiovisuais.",
  authors: [{ name: "Ioná Araujo" }],
  creator: "Ioná Araujo",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={dmSans.variable}>
      <body>
        <a className="skip-link" href="#conteudo-principal">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
