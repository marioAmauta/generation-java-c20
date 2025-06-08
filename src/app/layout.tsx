import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import { PropsWithChildren } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/navigation/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Raíces Digitales",
  description:
    "Sitio web de Raíces Digitales, la cohorte 20 del Bootcamp Desarrollador Full Stack Jr Java de Generation Chile"
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
