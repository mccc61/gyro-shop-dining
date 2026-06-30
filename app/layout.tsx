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
    default: "Gyro Shop Dining | Halal Gyros & Mediterranean Food in Langhorne, PA",
    template: "%s | Gyro Shop Dining",
  },
  description: "Gyro Shop Dining serves fresh 100% halal gyros, platters, over rice meals, falafel, salads, sides, and Mediterranean favorites inside Oxford Valley Mall in Langhorne, PA.",
  keywords: ["halal food Langhorne PA", "gyro restaurant Langhorne", "Oxford Valley Mall food", "Mediterranean food", "Greek food", "gyros", "falafel", "over rice"],
  applicationName: "Gyro Shop Dining",
  authors: [{ name: "Gyro Shop Dining" }],
  creator: "Gyro Shop Dining",
  publisher: "Gyro Shop Dining",
  category: "Restaurant",
  openGraph: {
    title: "Gyro Shop Dining | Halal Gyros in Langhorne, PA",
    description: "Fresh halal gyros, platters, over rice meals, falafel, salads, and Mediterranean favorites at Oxford Valley Mall.",
    url: "https://gyroshopdining.com",
    siteName: "Gyro Shop Dining",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/made-fresh-gyro-platter.jpg",
        width: 1200,
        height: 1500,
        alt: "Fresh halal gyro platter from Gyro Shop Dining",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gyro Shop Dining | Halal Gyros in Langhorne, PA",
    description: "Fresh halal gyros, platters, over rice meals, falafel, salads, and Mediterranean favorites at Oxford Valley Mall.",
    images: ["/made-fresh-gyro-platter.jpg"],
  },
  other: {
    "geo.region": "US-PA",
    "geo.placename": "Langhorne",
    "geo.position": "40.1839991;-74.8814136",
    ICBM: "40.1839991, -74.8814136",
    "business:contact_data:street_address": "2300 E Lincoln Hwy",
    "business:contact_data:locality": "Langhorne",
    "business:contact_data:region": "PA",
    "business:contact_data:postal_code": "19047",
    "business:contact_data:country_name": "United States",
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
