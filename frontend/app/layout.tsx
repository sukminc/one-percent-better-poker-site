import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://onepercentbetter.poker"),
  title: "OnePercentBetter.poker",
  description:
    "Poker analytics and decision tools from the same 1% Better system: exploit review, cleaner action workflows, and sharper post-session feedback loops.",
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
    title: "OnePercentBetter.poker",
    description:
      "Poker analytics and decision tools from the same 1% Better system.",
    url: "https://onepercentbetter.poker",
    siteName: "OnePercentBetter.poker",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnePercentBetter.poker",
    description:
      "Poker analytics and decision tools from the same 1% Better system.",
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
