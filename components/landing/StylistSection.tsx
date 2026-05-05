"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function StylistSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el?.classList.add("stylist--visible");
        }
      },
      { threshold: 0.3 },
    );

    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="stylist">
      {/* LEFT */}
      <div className="stylist__content">
        <h2 className="stylist__title">
          TRUST YOUR <br /> STYLIST
        </h2>

        <div className="stylist__line" />

        <p className="stylist__text">
          The artistry behind High Maintenance starts with the hands that create
          it. Get to know our stylists — their expertise, inspiration, and
          approach to personalized hair. Discover a world where every detail is
          crafted for you.
        </p>

        <Link href="/booking" className="stylist__btn">
          DISCOVER THE STYLISTS →
        </Link>
      </div>

      {/* RIGHT */}
      <div className="stylist__imageWrapper">
        <img src="/hero4.jpg" alt="Stylists" className="stylist__image" />
      </div>
    </section>
  );
}
