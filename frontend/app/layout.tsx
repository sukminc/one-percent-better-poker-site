import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://onepercentbetter.poker"),
  title: "1% Better Poker",
  description:
    "Exploit Better is a poker analysis tool built to help you find leaks, map fish patterns, and get 1% better than yesterday.",
  icons: {
    icon: [
      { url: "/logo-256.png", sizes: "256x256", type: "image/png" },
      { url: "/logo-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/logo-48.png",
    apple: "/logo-256.png",
  },
  openGraph: {
    title: "1% Better Poker",
    description:
      "Find the leak. Exploit it. Get 1% better than yesterday.",
    url: "https://onepercentbetter.poker",
    siteName: "1% Better Poker",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1% Better Poker",
    description:
      "Find the leak. Exploit it. Get 1% better than yesterday.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
