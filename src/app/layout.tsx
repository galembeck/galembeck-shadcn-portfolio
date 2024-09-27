import { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import { config } from "@/config";

import { ThemeProvider } from "@/providers/theme-provider";

import { TooltipProvider } from "@/components/ui/tooltip";

import "../styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(config.url),
  title: {
    default: config.name,
    template: `%s | ${config.name}`,
  },
  description: config.description,
  openGraph: {
    title: `${config.name}`,
    description: config.description,
    url: config.url,
    siteName: `${config.name}`,
    locale: "en_US", // pt_BR
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${config.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {children}
            {/* <Navbar /> */}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
