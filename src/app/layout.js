import { Lexend, Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-lexend",
  display: "swap",
});

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
  display: "swap",
});

export const metadata = {
  title: "LOCAL ART | Greater Vancouver, BC",
  description:
    "We will organize free public art markets, exhibitions, concerts, and beginner art workshops in Greater Vancouver, BC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lexend.variable} ${atkinson.variable}`}>
      <body>{children}</body>
    </html>
  );
}
