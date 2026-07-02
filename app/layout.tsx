import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { personSchema } from "@/utils/schema";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://vansh.works"),
  title: "Vansh Morwani",
  description: "Vansh Morwani | Full Stack Developer",
  icons: {
    icon: "/icon.ico",
    apple: "/icon.ico",
  },
  keywords: [
    "Vansh",
    "Vansh Morwani",
    "Full stack developer",
    "Backend developer",
  ],
  authors: [{ name: "Vansh Morwani" }],
  openGraph: {
    title: "Vansh Morwani | Full Stack Developer",
    description:
      "Full Stack Developer focused on backend development, MERN stack, and modern web applications.",
    url: "https://vansh.works",
    siteName: "Vansh Morwani",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vansh Morwani",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Morwani | Full Stack Developer",
    description:
      "Full Stack Developer focused on backend development, MERN stack, and modern web applications.",
    images: ["/images/og-image.png"],
    creator: "@vanshhcodes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="person-schema" type="application/ld+json">
          {JSON.stringify(personSchema)}
        </Script>
      </head>
      <body className={`antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LoadingScreen>
            <SmoothScroll>
              <main className="w-full h-full pt-4 min-h-screen max-w-3xl mx-auto my-1 px-4 py-4 md:pt-16">
                {children}
              </main>
            </SmoothScroll>
          </LoadingScreen>
          <ThemeToggle />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
