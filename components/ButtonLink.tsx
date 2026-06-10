import Link from "next/link";
import { ArrowIcon } from "./Icons";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "light" | "outline";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const styles = {
    primary: "bg-terracotta text-white hover:bg-[#01345d]",
    light: "bg-cream text-charcoal hover:bg-white",
    outline: "border border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white",
  };

  return (
    <Link href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] transition ${styles[variant]} ${className}`}>
      {children}
      <ArrowIcon />
    </Link>
  );
}
