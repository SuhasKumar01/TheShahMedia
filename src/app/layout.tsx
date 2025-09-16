import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import FloatingDock from "@/components/FloatingDock";
import EnhancedAiChatAssistant from "@/components/EnhancedAiChatAssistant";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ClientLayoutWrapper } from "@/components/ClientLayoutWrapper";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "The Shah Media — Local Growth Engine",
  description: "The Local Growth Engine for Shivamogga's Master Craftsmen. Transforming traditional businesses with AI-enhanced digital systems for Interior Designers, Architects, and Premium Contractors.",
  metadataBase: new URL("http://localhost:3000"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      // Apple touch icon for iOS home screen - 180x180 is the standard size
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.ico"
  },
  openGraph: {
    title: "The Shah Media — Local Growth Engine",
    description: "The Local Growth Engine for Shivamogga's Master Craftsmen. AI-enhanced digital systems for premium growth.",
    url: "/",
    siteName: "The Shah Media",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "The Shah Media - Local Growth Engine"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "The Shah Media — Local Growth Engine",
    description: "The Local Growth Engine for Shivamogga's Master Craftsmen. AI-enhanced digital systems for premium growth.",
    images: ["/logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        {/* Theme-color meta tags - Progressive enhancement for supported browsers */}
        {/* Works in Chrome, Safari, Edge; gracefully ignored by Firefox/Opera */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#111111" />
        <meta name="theme-color" content="#007BFF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Shah Media" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-[#F1F1F1] text-[#111111]`}
      >
        {/* Skip to content for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus-visible:fixed focus-visible:top-2 focus-visible:left-2 bg-[#007BFF] text-white px-4 py-2 rounded"
        >
          Skip to content
        </a>
        <ErrorBoundary>
          <ThemeProvider>
            <LoadingProvider>
              <Header />
              <ClientLayoutWrapper>
                <FloatingDock />
                <EnhancedAiChatAssistant />
                <main id="main-content">{children}</main>
                <Footer />
              </ClientLayoutWrapper>
            </LoadingProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
