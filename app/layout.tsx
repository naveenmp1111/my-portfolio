import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Naveen | Portfolio",
  description: "Building modern, scalable, and impactful web applications.",
  icons: {
    icon: "https://res.cloudinary.com/dwxhfdats/image/upload/v1733730078/nl0wxgjgsl5dpmtrv9zc.png", // Path to the favicon file
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
        className={inter.className}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
