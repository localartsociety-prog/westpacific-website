import "./globals.css";

export const metadata = {
  title: "WestPacific LOCAL ART Society | Greater Vancouver",
  description: "Free public art markets, exhibitions, concerts, and workshops in Greater Vancouver.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
