import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { menuCategories } from "@/data/menu";
import { siteDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore Gyro Shop Dining's full halal menu of gyro sandwiches, platters, combos, salads, sides, drinks, and desserts.",
};

export default function MenuPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-olive px-5 py-20 text-center text-white sm:py-28">
        <Image src="https://gyroshopdining.com/wp-content/uploads/2026/04/grilled-meat-with-fried-potatoes-and-vegetable-sal-2026-01-09-14-53-31-utc-780x780.jpg" alt="Halal Mediterranean platter at Gyro Shop Dining" fill priority unoptimized className="object-cover opacity-20" sizes="100vw" />
        <div className="absolute inset-0 bg-[#024579]/80" />
        <div className="grain absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-white backdrop-blur">Fresh halal food</span>
          <h1 className="mt-4 font-display text-6xl font-bold tracking-[-0.04em] sm:text-7xl">Our Menu</h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/70">Mediterranean comfort food built around fresh ingredients, bold seasonings, halal proteins, and house-made sauces.</p>
        </div>
      </section>

      <nav className="sticky top-20 z-40 overflow-x-auto border-b border-charcoal/10 bg-[#FAF9F6]/95 px-5 backdrop-blur">
        <div className="mx-auto flex w-max max-w-7xl gap-7 py-4">
          {menuCategories.map((category) => <a key={category.name} href={`#${category.name.toLowerCase().replaceAll(" ", "-")}`} className="text-xs font-extrabold uppercase tracking-[0.16em] text-charcoal/60 transition hover:text-terracotta">{category.name}</a>)}
        </div>
      </nav>

      <div className="mx-auto max-w-6xl bg-[#FAF9F6] px-5 py-16 sm:py-24 lg:px-8">
        {menuCategories.map((category, categoryIndex) => (
          <section key={category.name} id={category.name.toLowerCase().replaceAll(" ", "-")} className={`scroll-mt-40 py-12 ${categoryIndex !== 0 ? "border-t border-charcoal/15" : ""}`}>
            {(() => {
              const isTextOnly = category.name === "Drinks" || category.name === "Side Orders";
              return (
            <div className="grid gap-8 md:grid-cols-[0.6fr_1.4fr] md:gap-12">
              <div>
                <p className="eyebrow">0{categoryIndex + 1}</p>
                <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">{category.name}</h2>
                <p className="mt-4 max-w-xs text-sm leading-6 text-charcoal/55">{category.description}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {category.items.map((item) => (
                  <article key={item.name} className={`group overflow-hidden rounded-[1.25rem] border border-charcoal/10 bg-[#FAF9F6] shadow-sm transition hover:-translate-y-1 hover:shadow-soft ${isTextOnly ? "p-5" : ""}`}>
                    {!isTextOnly && <div className="relative aspect-[16/9] overflow-hidden bg-sand">
                      <Image src={item.image ?? category.image} alt={`${item.name} at Gyro Shop Dining`} fill unoptimized className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px" />
                      <span className="absolute right-3 top-3 rounded-full bg-[#FAF9F6]/95 px-3.5 py-2 text-base font-extrabold text-terracotta shadow-sm backdrop-blur">{item.price}</span>
                    </div>}
                    <div className={isTextOnly ? "" : "p-5"}>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-xl font-bold">{item.name}</h3>
                        {isTextOnly && <span className="shrink-0 text-base font-extrabold text-terracotta">{item.price}</span>}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-charcoal/55">{item.description}</p>
                      {item.tag && <span className="mt-3 inline-block rounded-full bg-sand px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-olive">{item.tag}</span>}
                    </div>
                  </article>
                ))}
              </div>
            </div>
              );
            })()}
          </section>
        ))}
      </div>

      <section className="bg-sand px-5 py-16 text-center">
        <p className="eyebrow">Ready when you are</p>
        <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-bold sm:text-5xl">Good choices. Now make them delicious.</h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={siteDetails.phoneHref}>Call us</ButtonLink>
          <ButtonLink href={siteDetails.directionsUrl} variant="outline">Get directions</ButtonLink>
        </div>
        <p className="mt-6 text-xs text-charcoal/45">Please let our team know about any food allergies before ordering.</p>
      </section>
    </>
  );
}
