import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Brazil Global Sugar Manufacturers | Premium Sugar Exporters",
  description: "Leading manufacturer and exporter of premium quality sugar products from Brazil. Supplying ICUMSA 45, refined, and raw sugar to over 50 countries worldwide.",
  icons: {
    icon: "/images/sugar-logo.png",
    shortcut: "/images/sugar-logo.png",
    apple: "/images/sugar-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
