import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { cn } from "@lib/utils/cn";

export const metadata: Metadata = {
  title: "Next.js template",
  description: "Template for Next.js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", "flex min-h-screen flex-col")}>
        <header className="bg-gray-200 p-4">Header</header>
        <main className="flex-1 p-4">{children}</main>
      </body>
    </html>
  );
}
