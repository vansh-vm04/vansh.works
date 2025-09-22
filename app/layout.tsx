import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vansh Morwani",
  description: "Full Stack Developer",
  icons: {
    icon: "icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-zinc-900`}>
      <body className={`antialiased`}>
        <main className="w-full h-full pt-16 min-h-screen max-w-2xl mx-auto my-1 px-4 py-4">
          {children}
        </main>
      </body>
    </html>
  );
}
