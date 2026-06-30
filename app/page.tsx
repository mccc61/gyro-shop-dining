import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { ArrowIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { houseFavorites } from "@/data/menu";
import { localBusinessJsonLd, websiteJsonLd } from "@/data/seo";
import { hours, siteDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Halal Gyros, Over Rice & Mediterranean Food in Langhorne, PA",
  description: "Visit Gyro Shop Dining inside Oxford Valley Mall for fresh 100% halal gyros, over rice platters, falafel, salads, sides, desserts, and fast Mediterranean food in Langhorne, PA.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gyro Shop Dining | Halal Mediterranean Food at Oxford Valley Mall",
    description: "Fresh halal gyros, over rice meals, platters, falafel, salads, and Mediterranean favorites in Langhorne, PA.",
    url: "/",
  },
};

const splitFavoriteTitle = (title: string) => {
  const words = title.split(" ");
  if (words.length < 2) return [title, ""];

  const splitAt = Math.ceil(words.length / 2);
  return [words.slice(0, splitAt).join(" "), words.slice(splitAt).join(" ")];
};

const menuHighlights = [
  "100% halal",
  "Gyro sandwiches",
  "Over rice platters",
  "Fresh falafel",
  "Fast food court service",
];

const localFeatureCards = [
  {
    label: "Made daily",
    title: "Fresh food, fast",
    text: "Gyros, chicken, falafel, salads, and sauces are prepared fresh for quick, flavorful meals.",
  },
  {
    label: "Customer favorite",
    title: "Over rice meals",
    text: "Chicken, beef and lamb gyro, or falafel served over seasoned rice with salad and white sauce.",
  },
  {
    label: "Always halal",
    title: "100% halal menu",
    text: "A full halal Mediterranean menu with sandwiches, platters, bowls, sides, desserts, and drinks.",
  },
  {
    label: "Easy stop",
    title: "Mall food court",
    text: "Perfect for lunch, dinner, shopping breaks, movie nights, and fast family meals.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-olive text-white">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-[#024579]/75" />
        <div className="grain absolute inset-0 opacity-30" />
        <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-white backdrop-blur">Halal Food</span>
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-sand"><span className="h-px w-8 bg-terracotta" />Made Fresh. Served Fast.</p>
            </div>
            <h1 className="font-display text-5xl font-bold leading-[0.98] tracking-[-0.035em] sm:text-7xl lg:text-[5.8rem]">
              <span className="block">Fresh Gyro</span>
              <span className="block">Fast Services</span>
              <span className="block">Halal Food</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg">Freshly prepared halal Mediterranean favorites made with premium ingredients and bold flavors. Enjoy authentic gyros, grilled chicken, falafel, fresh salads, and house-made sauces.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/menu">View menu</ButtonLink>
              <ButtonLink href={siteDetails.directionsUrl} variant="light">Get directions</ButtonLink>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden rounded-tl-3xl bg-cream px-8 py-5 text-charcoal lg:block">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">Open today</p>
              <p className="mt-1 font-bold">Fast, Fresh, Halal.</p>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
              <Image src="/made-fresh-gyro-platter.jpg" alt="Fresh Gyro Shop Dining platter with gyro meat, falafel, pita, and salad" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="absolute -bottom-5 -right-2 rounded-2xl bg-terracotta p-6 text-white sm:-right-8 sm:p-8">
              <p className="font-display text-4xl font-bold">Made fresh</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-white/70">Every single day</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="section-title mt-4">More Than Just a Gyro Shop</h2>
            <p className="mt-7 text-base leading-8 text-charcoal/65">Located within the food court of Oxford Valley Mall, Gyro Shop Dining offers a delectable journey into authentic, flavorful cuisine. Every dish is 100% halal and prepared fresh daily, ensuring a premium taste experience.</p>
            <p className="mt-4 text-base leading-8 text-charcoal/65">The diverse menu features classic gyro sandwiches and platters, alongside succulent chicken and falafel options. Complement your meal with fresh salads, delicious sides, and a sweet dessert to complete the perfect fast and flavorful dining experience.</p>
            <ButtonLink href="/menu" variant="outline" className="mt-8">Explore the menu</ButtonLink>
          </div>
        </div>
      </section>

      <section id="house-favorites" className="scroll-mt-24 bg-[#FAF9F6] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="eyebrow">House favorites</p><h2 className="section-title mt-4">Start with these.</h2></div>
            <Link href="/menu" className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-terracotta">See full menu <ArrowIcon /></Link>
          </div>
          <div className="mt-12 grid auto-rows-[250px] gap-5 md:grid-cols-2 lg:grid-cols-4">
            {houseFavorites.map((item, index) => (
              <Link key={item.name} href={item.href} className={`group relative overflow-hidden rounded-[1.25rem] bg-charcoal text-white shadow-sm ${item.featured ? "md:col-span-2 lg:col-span-2" : ""} ${index === 3 ? "lg:col-start-1" : ""}`}>
                <Image src={item.image} alt={item.name} fill className="object-cover transition duration-700 group-hover:scale-105" sizes={item.featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"} />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/25 to-charcoal/5 transition group-hover:from-charcoal/80" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <span className="inline-flex bg-terracotta px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em]">{item.category}</span>
                  <h3 className="mt-4 font-display text-3xl font-bold uppercase leading-none tracking-[-0.025em] sm:text-4xl">
                    {splitFavoriteTitle(item.name).map((line) => <span key={line} className="block">{line}</span>)}
                  </h3>
                  <span className="mt-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white/75 transition group-hover:text-white">Discover more <ArrowIcon /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-terracotta py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 sm:flex-row sm:items-center lg:px-8">
          <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-white/65">A local favorite</p><h2 className="mt-2 font-display text-4xl font-bold">Taste the best falafel in town.</h2></div>
          <ButtonLink href={siteDetails.phoneHref} variant="light">Call us</ButtonLink>
        </div>
      </section>

      <section className="bg-[#FAF9F6] px-5 py-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-olive p-8 text-white sm:p-10 lg:p-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-sand">Fresh, fast, halal</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl">Built for big flavor and quick cravings.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/70">From warm pita and seasoned rice to crisp salads and house sauces, Gyro Shop Dining keeps Mediterranean comfort food simple, fresh, and satisfying.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/menu" variant="light">Explore menu</ButtonLink>
                <ButtonLink href={siteDetails.phoneHref}>Call us</ButtonLink>
              </div>
            </div>
            <div className="grid gap-4 bg-[#FAF9F6] p-6 sm:grid-cols-2 sm:p-8">
              {localFeatureCards.map((card) => (
                <div key={card.title} className="rounded-3xl border border-charcoal/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-terracotta/30 hover:shadow-sm">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-terracotta">{card.label}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-[-0.02em] text-charcoal">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-charcoal/60">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-charcoal/10 px-8 py-6 sm:px-10 lg:px-12">
            <div className="flex flex-wrap gap-3">
              {menuHighlights.map((highlight) => <span key={highlight} className="rounded-full bg-[#FAF9F6] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-charcoal/70">{highlight}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="visit" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid overflow-hidden rounded-[2rem] bg-olive text-white shadow-soft lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sand">Come say hello</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">Gyro Shop Dining <span className="mt-2 block font-sans text-sm font-bold uppercase tracking-[0.18em] text-sand">Oxford Valley Mall</span></h2>
              <div className="mt-9 space-y-5 border-t border-white/15 pt-7">
                <Link href={siteDetails.directionsUrl} className="group flex items-center gap-4 text-white/75 transition hover:text-white">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-white transition group-hover:bg-white group-hover:text-olive"><PinIcon className="h-5 w-5" /></span>
                  <span className="leading-6">{siteDetails.address}</span>
                </Link>
                <Link href={siteDetails.phoneHref} className="group flex items-center gap-4 text-white/75 transition hover:text-white">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-white transition group-hover:bg-white group-hover:text-olive"><PhoneIcon className="h-5 w-5" /></span>
                  <span className="font-bold">{siteDetails.phoneDisplay}</span>
                </Link>
              </div>
              <div className="mt-9">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand">Hours</p>
                <div className="mt-4 space-y-3">
                  {hours.map(([days, time]) => <div key={days} className="flex justify-between gap-4 border-b border-white/10 pb-3 text-sm"><span className="text-white/60">{days}</span><span className="font-bold">{time}</span></div>)}
                </div>
              </div>
              <ButtonLink href={siteDetails.directionsUrl} className="mt-9">Get directions</ButtonLink>
            </div>
            <div className="relative min-h-[360px] bg-sand">
              <iframe
                src="https://www.google.com/maps?q=40.1839991,-74.8814136&z=16&output=embed"
                title="Gyro Shop Dining location on Google Maps"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
