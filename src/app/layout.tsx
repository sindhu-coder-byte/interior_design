import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aura Studio | Considered spaces, beautifully lived",
  description: "Aura Studio creates deeply personal interiors with clarity, warmth, and a little bit of wonder.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
