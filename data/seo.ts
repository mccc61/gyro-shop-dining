import { menuCategories } from "@/data/menu";
import { hours, siteDetails } from "@/data/site";

const absoluteUrl = (path: string) => new URL(path, siteDetails.siteUrl).toString();

const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "11:00",
    closes: "20:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Friday", "Saturday"],
    opens: "10:00",
    closes: "20:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Sunday",
    opens: "11:00",
    closes: "18:00",
  },
];

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${siteDetails.siteUrl}/#restaurant`,
  name: siteDetails.name,
  url: siteDetails.siteUrl,
  logo: absoluteUrl("/gyro-shop-logo.png"),
  image: [absoluteUrl("/made-fresh-gyro-platter.jpg"), absoluteUrl("/over-rice-chicken.jpg")],
  description:
    "Gyro Shop Dining is a 100% halal Greek and Mediterranean restaurant in the Oxford Valley Mall food court in Langhorne, Pennsylvania, serving fresh gyros, platters, over rice meals, falafel, salads, sides, desserts, and drinks.",
  telephone: siteDetails.phoneInternational,
  priceRange: siteDetails.priceRange,
  servesCuisine: ["Greek", "Mediterranean", "Halal", "Gyro", "Falafel", "Middle Eastern"],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteDetails.streetAddress,
    addressLocality: siteDetails.addressLocality,
    addressRegion: siteDetails.addressRegion,
    postalCode: siteDetails.postalCode,
    addressCountry: siteDetails.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteDetails.latitude,
    longitude: siteDetails.longitude,
  },
  containedInPlace: {
    "@type": "ShoppingCenter",
    name: siteDetails.mallName,
  },
  hasMap: siteDetails.directionsUrl,
  openingHoursSpecification,
  sameAs: [siteDetails.instagramUrl],
  hasMenu: `${siteDetails.siteUrl}/menu`,
  areaServed: [
    "Langhorne PA",
    "Oxford Valley Mall",
    "Middletown Township PA",
    "Levittown PA",
    "Fairless Hills PA",
    "Yardley PA",
  ],
  keywords:
    "halal food Langhorne PA, gyros Oxford Valley Mall, Mediterranean restaurant Langhorne, Greek food Langhorne, falafel, over rice platters",
};

export const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": `${siteDetails.siteUrl}/menu#menu`,
  name: "Gyro Shop Dining Menu",
  url: `${siteDetails.siteUrl}/menu`,
  hasMenuSection: menuCategories.map((category) => ({
    "@type": "MenuSection",
    name: category.name,
    description: category.description,
    hasMenuItem: category.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      description: item.description,
      image: item.image ? absoluteUrl(item.image) : absoluteUrl(category.image),
      offers: {
        "@type": "Offer",
        price: item.price.replace("$", ""),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    })),
  })),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteDetails.siteUrl}/#website`,
  name: siteDetails.name,
  url: siteDetails.siteUrl,
  publisher: {
    "@id": `${siteDetails.siteUrl}/#restaurant`,
  },
};

export const businessFacts = [
  `${siteDetails.name} is located in the food court at ${siteDetails.mallName}.`,
  `Address: ${siteDetails.address}.`,
  `Phone: ${siteDetails.phoneDisplay}.`,
  "The menu features 100% halal gyros, platters, chicken, beef and lamb gyro meat, falafel, over rice meals, salads, sides, desserts, and drinks.",
  `Hours: ${hours.map(([days, time]) => `${days} ${time}`).join("; ")}.`,
];
