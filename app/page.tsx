import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { ArrowIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { houseFavorites } from "@/data/menu";
import { hours, siteDetails } from "@/data/site";

export default function Home() {
  return (
    <>
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
              <span className="block">Helal Food</span>
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
              <p className="mt-1 font-bold">Fast, Fresh, Helal.</p>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
              <Image src="/made-fresh-gyro-platter.jpg" alt="Fresh Gyro Shop Dining platter with gyro meat, falafel, pita, and salad" fill className="scale-125 object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
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
                  <h3 className="mt-4 font-display text-3xl font-bold uppercase leading-none tracking-[-0.025em] sm:text-4xl">{item.name}</h3>
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
                src="https://www.google.com/maps?q=Gyro%20Shop%20Dining&output=embed"
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
