import "@/sass/globals.scss";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["800", "700", "600", "500"],
});

export const metadata = {
  title: "Arian Fallahpour",
  description:
    "Welcome to my personal portfolio website! Learn about my skills, my hobbies, some projects I have worked on and more!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
