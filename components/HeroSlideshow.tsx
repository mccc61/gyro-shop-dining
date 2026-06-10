"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/menu-images/greek-gyro-with-fries-close-up-2026-03-25-00-56-26-utc-780x780.jpg",
    alt: "Fresh halal gyro sandwich with fries",
  },
  {
    src: "/menu-images/grilled-meat-with-fried-potatoes-and-vegetable-sal-2026-01-09-14-53-31-utc-780x780.jpg",
    alt: "Halal mix platter with salad and fries",
  },
  {
    src: "/menu-images/plate-of-kebab-vegetables-and-french-fries-2026-01-09-11-50-11-utc-780x780.jpg",
    alt: "Gyro platter with vegetables and fries",
  },
];

export function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={index === 0}
          className={`object-cover object-center transition-opacity duration-1000 motion-reduce:transition-none ${index === active ? "opacity-100" : "opacity-0"}`}
          sizes="100vw"
        />
      ))}
    </div>
  );
}
