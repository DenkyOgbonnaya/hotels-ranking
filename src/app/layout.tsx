import type { Metadata } from "next";
import "./globals.css";
import { inter, openSans, roboto } from "@/styles/styles.font";
import { Providers } from "./Providers";

// app meta
export const metadata: Metadata = {
  title: "Hotels Ranking",
  description: "An Hotel Ranking App",
  keywords: ["Hotel", "Ranking", "Listing", "Rating"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${inter.variable} ${roboto.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
