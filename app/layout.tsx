import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

import "@/sass/globals.scss";
import Nav from "@/components/layout/Nav/Nav";

// CRT terminal face. Google ships a single 400 weight, so the --font-weight-*
// tokens above 400 render as synthetic bold.
const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-family-mono",
});

export const metadata: Metadata = {
  title: "Arian Fallahpour-Sichani | Portfolio",
  description:
    "Personal portfolio of Arian Fallahpour — software engineer. Skills, projects, experience and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={shareTechMono.variable}>
      <body>
        <Nav />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
