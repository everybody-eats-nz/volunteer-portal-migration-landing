import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
