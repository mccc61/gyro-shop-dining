import type { Metadata } from "next";
import Link from "next/link";
import { siteDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Gyro Shop Dining.",
  alternates: { canonical: `${siteDetails.siteUrl}/privacy` },
};

export default function PrivacyPage() {
  return (
    <main className="bg-cream px-5 py-16 text-ink md:py-24">
      <article className="mx-auto max-w-3xl rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5 md:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue">Gyro Shop Dining</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: October 30, 2026</p>

        <div className="prose prose-slate mt-10 max-w-none prose-headings:font-black prose-a:text-blue">
          <p>This policy explains how Gyro Shop Dining handles information when you visit <a href={siteDetails.siteUrl}>{siteDetails.siteUrl}</a>.</p>
          <h2>Information we collect</h2>
          <p>We do not ask visitors to create accounts or submit payment information through this website. If you contact us by email or phone, we may receive the information you choose to provide.</p>
          <h2>Analytics and cookies</h2>
          <p>We use Vercel Analytics to understand visits and improve site performance. Analytics may process technical information such as page views, device or browser details, and approximate usage data. The site may also use essential cookies or similar technologies required for operation.</p>
          <h2>Third-party services</h2>
          <p>Map embeds, Instagram, and external links are operated by third parties. Those services may collect information under their own privacy policies when you use them.</p>
          <h2>How we use information</h2>
          <p>We use information to respond to inquiries, maintain the website, understand general site usage, and improve our restaurant information and services. We do not sell personal information.</p>
          <h2>Contact</h2>
          <p>For privacy questions, email <a href="mailto:gyroshopdining@gmail.com">gyroshopdining@gmail.com</a> or call <a href={siteDetails.phoneHref}>{siteDetails.phoneDisplay}</a>.</p>
          <p><Link href="/">Return to Gyro Shop Dining</Link></p>
        </div>
      </article>
    </main>
  );
}
