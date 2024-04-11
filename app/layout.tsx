import type { Metadata } from "next";
import { Jacques_Francois } from "next/font/google";
import "./globals.css";

const jacques = Jacques_Francois({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Finance",
  description: "personal project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={jacques.className}>{children}</body>
    </html>
  );
}
