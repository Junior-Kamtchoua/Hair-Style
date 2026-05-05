"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function GetTheLook() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el?.classList.add("look--visible");
        }
      },
      { threshold: 0.3 },
    );

    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="look">
      {/* IMAGE LEFT */}
      <div className="look__imageWrapper">
        <img src="/hero2.jpg" alt="Hair Look" className="look__image" />
      </div>

      {/* CONTENT RIGHT */}
      <div className="look__content">
        <span className="look__subtitle">LAOS WAVY CURLY</span>

        <h2 className="look__title">GET THE LOOK</h2>

        <div className="look__line" />

        <p className="look__text">
          Our Laos Wavy Curly hair texture features a slightly coarse and dense
          structure while maintaining a soft touch. Its low luster makes it an
          ideal match for women who desire a natural, textured look. Perfect for
          curl patterns 3c to 4b, offering versatility from curly to straight
          styling with ease.
        </p>

        <Link href="/shop" className="look__btn">
          SHOP THIS →
        </Link>
      </div>
    </section>
  );
}
