"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: number;
};

type Props = {
  product: Product;
};

export default function ProductCardHover({ product }: Props) {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg", "/hero4.jpg"];

  useEffect(() => {
    if (!hover) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 700);

    return () => clearInterval(interval);
  }, [hover]);

  return (
    <Link
      href={`/shop/${product.id}`}
      className="hoverCard"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setIndex(0);
      }}
    >
      <div className="hoverCard__imageWrapper">
        <img
          src={images[index]}
          alt={product.name}
          className={`hoverCard__image ${hover ? "zoom" : ""}`}
        />
      </div>

      <div className="hoverCard__info">
        <p className="hoverCard__title">{product.name}</p>
        <span className="hoverCard__price">From ${product.price}</span>
      </div>
    </Link>
  );
}
