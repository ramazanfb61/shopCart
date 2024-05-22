import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop App",
  description: "For Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto flex flex-col py-2 md:w-3/4">
          <header>
            <Navigation />
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
