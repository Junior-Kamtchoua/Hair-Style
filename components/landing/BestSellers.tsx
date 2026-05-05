"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg", "/hero4.jpg"];

const products = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  name: `Product ${i + 1}`,
  price: 75000 + i * 2000,
}));

function ProductCard() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    if (intervalRef.current) return;

    let step = 0;

    intervalRef.current = setInterval(() => {
      step += 25;
      setProgress(step);

      if (step >= 100) {
        step = 0;
        setIndex((prev) => (prev + 1) % images.length);
      }
    }, 300);
  };

  const stop = () => {
    clearInterval(intervalRef.current!);
    intervalRef.current = null;
    setProgress(0);
  };

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      start();
    }
    return stop;
  }, []);

  return (
    <div className="bestSellers__card" onMouseEnter={start} onMouseLeave={stop}>
      <div className="bestSellers__imageWrapper">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`bestSellers__image ${i === index ? "active" : ""}`}
          />
        ))}

        {/* PROGRESS BAR */}
        <div className="progress">
          <div className="progress__bar" style={{ width: `${progress}%` }} />
        </div>

        {/* QUICK VIEW */}
        <Link href="/product" className="quickView">
          QUICK VIEW
        </Link>
      </div>

      {/* TEXT */}
      <div className="productInfo">
        <p>{`Product`}</p>
        <span>{`From FCFA ${new Intl.NumberFormat("fr-FR").format(
          75000,
        )}`}</span>
      </div>
    </div>
  );
}

export default function BestSellers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="bestSellers">
      <h2 className="bestSellers__title">Best Sellers</h2>

      <button onClick={() => scroll("left")} className="arrow left">
        ←
      </button>
      <button onClick={() => scroll("right")} className="arrow right">
        →
      </button>

      <div ref={scrollRef} className="bestSellers__container">
        {products.map((p) => (
          <ProductCard key={p.id} />
        ))}
      </div>
    </section>
  );
}
