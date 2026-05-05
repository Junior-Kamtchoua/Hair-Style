"use client";

import { useEffect, useState } from "react";

export default function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  return (
    <>
      {/* FLOAT BUTTON */}
      <div className="promo-btn" onClick={() => setOpen(true)}>
        Get 10% off ✕
      </div>

      {/* MODAL */}
      {open && (
        <div className="promo-modal">
          <div className="promo-overlay" onClick={() => setOpen(false)} />

          <div className="promo-box">
            {/* LEFT IMAGE */}
            <div className="promo-left">
              <img src="/hero3.jpg" alt="hair" />
            </div>

            {/* RIGHT CONTENT */}
            <div className="promo-right">
              <button className="promo-close" onClick={() => setOpen(false)}>
                ✕
              </button>

              <img src="/HMHC.png" className="promo-logo" alt="logo" />

              <h2>JOIN THE BEST D*MN HAIR CLUB</h2>

              <p>
                Be the first to hear about new arrivals, insider-only discounts,
                and get 10% off your first order.
              </p>

              <input placeholder="Enter your email" />

              <button className="promo-submit">CONTINUE</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
