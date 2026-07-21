import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import terminalIcon from "./assets/Iconterminal.png";
import IntroSplash from "./components/IntroSplash";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://link-hub-erick.vercel.app";
const title = "erickmontdev — Software Engineer & Web Developer";
const description =
  "Portfólio de erickmontdev. Software Engineer & Web Developer especializado em interfaces modernas, APIs robustas e produtos web premium.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: [{ url: terminalIcon.src, type: "image/png", sizes: "40x32" }],
    shortcut: [{ url: terminalIcon.src, type: "image/png" }],
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "erickmontdev",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <IntroSplash />
        {children}
      </body>
    </html>
  );
}
