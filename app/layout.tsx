import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
 title: "Neoro",
 description:
  "The Future of Team Productivity - Collaborate with AI agents, streamline operations, and scale your workflow effortlessly.",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en" className={cn("dark h-full font-sans antialiased", inter.variable)}>
   <body className="flex min-h-full flex-col">{children}</body>
  </html>
 );
}
