import Image from "next/image";
import Link from "next/link";
import { siteDetails } from "@/data/site";
import { InstagramIcon, PhoneIcon, PinIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-olive text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-block rounded-2xl bg-white p-3 shadow-sm" aria-label="Gyro Shop Dining home">
            <Image
              src="/gyro-shop-logo.png"
              alt="Gyro Shop Dining"
              width={260}
              height={123}
              className="h-auto w-52 sm:w-56"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-cream/60">Fresh Mediterranean comfort food, made with big flavor and served with genuine hospitality.</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">Find us</p>
          <Link href={siteDetails.directionsUrl} className="mt-4 flex gap-3 text-sm leading-6 text-cream/70 hover:text-white"><PinIcon className="mt-0.5 h-5 w-5 shrink-0" />{siteDetails.address}</Link>
          <Link href={siteDetails.phoneHref} className="mt-3 flex items-center gap-3 text-sm text-cream/70 hover:text-white"><PhoneIcon />{siteDetails.phoneDisplay}</Link>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">Keep in touch</p>
          <Link href={siteDetails.instagramUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-3 text-sm font-bold text-cream/70 transition hover:text-white"><InstagramIcon />Instagram</Link>
          <p className="mt-8 text-xs text-cream/40">© {new Date().getFullYear()} Gyro Shop Dining</p>
        </div>
      </div>
    </footer>
  );
}
