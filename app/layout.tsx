import type { Metadata } from "next";
import { Libre_Franklin, Fraunces } from "next/font/google";
import "./globals.css";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Volunteer Portal Migration | Everybody Eats",
  description: "Information about migrating from the legacy volunteer app to the new volunteer portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreFranklin.variable} ${fraunces.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
