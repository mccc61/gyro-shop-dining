"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteDetails } from "@/data/site";
import { InstagramIcon } from "./Icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/#visit", label: "Visit" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="relative block h-14 w-36 shrink-0 sm:w-40" aria-label="Gyro Shop Dining home">
          <Image
            src="/gyro-shop-logo.png"
            alt="Gyro Shop Dining"
            fill
            priority
            sizes="(max-width: 640px) 144px, 160px"
            className="object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => <Link key={link.label} href={link.href} className="text-sm font-bold text-charcoal/75 transition hover:text-terracotta">{link.label}</Link>)}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href={siteDetails.instagramUrl} target="_blank" rel="noreferrer" aria-label="Follow Gyro Shop Dining on Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-charcoal/15 text-olive transition hover:border-olive hover:bg-olive hover:text-white"><InstagramIcon /></Link>
          <Link href={siteDetails.phoneHref} className="rounded-full bg-olive px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-charcoal">Call us</Link>
        </div>

        <button className="grid h-11 w-11 place-items-center rounded-full border border-charcoal/20 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          <span className="text-xl" aria-hidden="true">{open ? "\u00d7" : "\u2261"}</span>
        </button>
      </div>
      {open && (
        <nav className="border-t border-charcoal/10 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="py-1 font-bold text-charcoal">{link.label}</Link>)}
            <Link href={siteDetails.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 py-1 font-bold text-charcoal"><InstagramIcon className="h-5 w-5 text-olive" />Instagram</Link>
            <Link href={siteDetails.phoneHref} className="mt-2 rounded-full bg-olive px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-white">Call us</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
