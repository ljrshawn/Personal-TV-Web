import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Josefin_Sans } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const j_sans = Josefin_Sans({
  weight: ["300", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-j_sans",
});

export const metadata: Metadata = {
  title: "Micro TV",
  description: "An video stream like Netflix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${j_sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
