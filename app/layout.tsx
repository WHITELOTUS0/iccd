import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./_components/SiteHeader";
import { SiteFooter } from "./_components/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ICCD — International Christian Concern for Development",
    template: "%s | ICCD",
  },
  description:
    "A faith-based humanitarian NGO empowering refugees, women, youth and vulnerable communities across Uganda through health, education, livelihoods and WASH programs.",
  keywords: [
    "ICCD",
    "International Christian Concern for Development",
    "Uganda NGO",
    "Bukedi Diocese",
    "Church of Uganda",
    "refugee support Uganda",
    "faith-based humanitarian",
  ],
  icons: {
    icon: "/logo.png",
  },
  metadataBase: new URL("https://iccd.org"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${merriweather.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
