import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

import "@/sass/globals.scss";
import Nav from "@/components/layout/Nav/Nav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-family-poppins",
});

export const metadata: Metadata = {
  title: "Arian Fallahpour-Sichani | Portfolio",
  description:
    "Personal portfolio of Arian Fallahpour — software engineer. Skills, projects, experience and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Nav />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
