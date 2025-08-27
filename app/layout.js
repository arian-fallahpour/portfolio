import "@/sass/globals.scss";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["800", "700", "600", "500"],
});

export const metadata = {
  title: "Arian's Portfolio",
  description:
    "Welcome to my personal portfolio website! Learn about my skills, my hobbies, some projects I have worked on and more!",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <Providers>{children}</Providers>
    </html>
  );
}
