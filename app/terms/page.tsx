import type { Metadata } from "next";
import Link from "next/link";
import { siteDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Gyro Shop Dining.",
  alternates: { canonical: `${siteDetails.siteUrl}/terms` },
};

export default function TermsPage() {
  return (
    <main className="bg-cream px-5 py-16 text-ink md:py-24">
      <article className="mx-auto max-w-3xl rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5 md:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue">Gyro Shop Dining</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: October 30, 2026</p>

        <div className="prose prose-slate mt-10 max-w-none prose-headings:font-black prose-a:text-blue">
          <p>Welcome to the Gyro Shop Dining website. By using this website, you agree to these terms.</p>
          <h2>Website information</h2>
          <p>We provide general information about our restaurant, menu, location, hours, and contact details. Menu items, prices, availability, and hours may change without notice.</p>
          <h2>Orders and third-party links</h2>
          <p>This website does not process online orders or payments. Links to maps, social media, or other services are provided for convenience and are governed by those services&apos; own terms.</p>
          <h2>Acceptable use</h2>
          <p>Please use this website lawfully and do not interfere with its operation, attempt unauthorized access, or misuse its content.</p>
          <h2>Contact</h2>
          <p>Questions about these terms can be sent to <a href="mailto:gyroshopdining@gmail.com">gyroshopdining@gmail.com</a> or by calling <a href={siteDetails.phoneHref}>{siteDetails.phoneDisplay}</a>.</p>
          <p><Link href="/">Return to Gyro Shop Dining</Link></p>
        </div>
      </article>
    </main>
  );
}
