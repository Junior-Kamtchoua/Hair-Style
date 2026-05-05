"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const messages = [
    "Luxury hair made for confidence",
    "Free shipping on orders over $100",
    "Book your premium hair experience today",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000); // ⏱️ temps de lecture

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="topbar__content">
          <p key={index} className="topbar__text">
            {messages[index]}{" "}
            <Link href="/shop" className="topbar__link">
              Learn More
            </Link>
          </p>
        </div>
      </div>

      <header className="header">
        <img src="/HMHC2.png" alt="Hair Maintenance Logo" className="logo1" />

        <nav className="header__nav">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/booking">Book</Link>
          <Link href="/cart">Cart</Link>
        </nav>
      </header>
    </>
  );
}
