"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const slides = [
  {
    image: "/hero1.jpg",
    subtitle: "HAIR MAINTENANCE",
    highlight: "RAW HAIR",
    text: `Experience the finest quality raw Indian hair extensions crafted for women who value luxury, elegance, and durability. Our premium collections are sourced ethically and designed to give you a flawless natural look, unmatched softness, and long-lasting beauty.`,
  },
  {
    image: "/hero2.jpg",
    subtitle: "PREMIUM COLLECTION",
    highlight: "VOLUME",
    text: `Transform your appearance with high-density extensions that provide volume, shine, and movement. Designed for modern women who demand excellence, our products blend seamlessly with your natural hair.`,
  },
  {
    image: "/hero3.jpg",
    subtitle: "EXCLUSIVE STYLE",
    highlight: "CONFIDENCE",
    text: `Step into confidence with hair that enhances your personality and elevates your style. Our luxury textures are built to maintain their beauty through time, giving you a consistent premium experience.`,
  },
  {
    image: "/hero4.jpg",
    subtitle: "SIGNATURE LOOK",
    highlight: "ELEGANCE",
    text: `Redefine elegance with high-end hair designed for versatility and perfection. Whether styled straight, curly, or wavy, our extensions deliver a sophisticated and polished finish.`,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [paused, setPaused] = useState(false);

  const textRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  /* AUTOPLAY */
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  /* GSAP */
  useEffect(() => {
    if (!textRef.current) return;
    gsap.fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
    );
  }, [current]);

  /* TYPEWRITER */
  useEffect(() => {
    const fullText = slides[current].text;
    let i = 0;

    const typing = setInterval(() => {
      i++;
      setDisplayText(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(typing);
    }, 20);

    return () => clearInterval(typing);
  }, [current]);

  /* 🔥 MAGNETIC BUTTONS (CLEAN VERSION) */
  useEffect(() => {
    const buttons = document.querySelectorAll(".btn");

    const cleanups: (() => void)[] = [];

    buttons.forEach((btn) => {
      const el = btn as HTMLElement;

      const handleMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;

        const glow = el.querySelector(".btn__glow") as HTMLElement;
        if (glow) {
          glow.style.left = `${e.clientX - rect.left}px`;
          glow.style.top = `${e.clientY - rect.top}px`;
        }
      };

      const reset = () => {
        el.style.transform = "translate(0, 0)";
      };

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", reset);

      cleanups.push(() => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", reset);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  /* SWIPE */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${slides[current].image})`,
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero__overlay" />

      <div ref={textRef} className="hero__content hero__content--left">
        <span className="hero__subtitle">{slides[current].subtitle}</span>

        <h1>
          Luxury Hair <span>{slides[current].highlight}</span>
        </h1>

        <p key={current} className="typing">
          {displayText}
        </p>

        {/* ✅ FINAL BUTTONS */}

        <div className="hero__buttons">
          <Link href="/shop" className="btn btn--magnetic">
            <span>Shop Collection</span>
            <div className="btn__glow" />
          </Link>

          <Link href="/booking" className="btn btn--magnetic-outline">
            <span>Book Appointment</span>
            <div className="btn__glow" />
          </Link>
        </div>
      </div>

      <div className="hero__controls">
        <button onClick={prev}>‹</button>
        <button onClick={next}>›</button>
      </div>

      <div className="hero__thumbnails">
        {slides.map((s, index) => {
          const position = (index - current + slides.length) % slides.length;

          return (
            <div
              key={index}
              className={`hero__thumb hero__thumb--${position}`}
              onClick={() => setCurrent(index)}
            >
              <img src={s.image} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
