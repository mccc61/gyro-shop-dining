type IconProps = { className?: string };

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function PinIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.7" /><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" /></svg>;
}

export function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8.5 4H5.8A1.8 1.8 0 0 0 4 5.8C4 13.64 10.36 20 18.2 20a1.8 1.8 0 0 0 1.8-1.8v-2.7l-3.6-.9-1.1 2.2a12.13 12.13 0 0 1-8.1-8.1l2.2-1.1L8.5 4Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function InstagramIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>;
}
