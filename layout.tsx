import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const displayFont = League_Spartan({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gyroshopdining.com"),
  title: {
    default: "Gyro Shop Dining | Fresh Mediterranean Food",
    template: "%s | Gyro Shop Dining",
  },
  description: "Fresh halal gyros, bowls, platters, salads, and Mediterranean favorites made to order.",
  keywords: ["halal food", "gyro restaurant", "Mediterranean food", "Greek food", "gyros", "falafel"],
  openGraph: {
    title: "Gyro Shop Dining",
    description: "Fresh halal gyros, platters, bowls, and Mediterranean favorites.",
    url: "https://gyroshopdining.com",
    siteName: "Gyro Shop Dining",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
