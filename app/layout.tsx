import type { Metadata } from "next";
import { EB_Garamond, Nosifer } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const fontGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontNosifer = Nosifer({
  variable: "--font-nosifer",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "COCKTAILO",
  description: "Your go-to app for unique and refreshing cocktail recipes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontGaramond.variable} ${fontNosifer.variable} ${fontGaramond.className} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
