"use client";

import { useEffect, useState } from "react";

const ratings = [
  { stars: 5, count: 517 },
  { stars: 4, count: 36 },
  { stars: 3, count: 40 },
  { stars: 2, count: 37 },
  { stars: 1, count: 146 },
];

const total = ratings.reduce((acc, r) => acc + r.count, 0);

export default function ReviewWidget() {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

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
      {/* BUTTON */}
      <div className="review-btn" onClick={() => setOpen(true)}>
        ★ Reviews
      </div>

      {open && (
        <div className="review-modal">
          <div className="review-overlay" onClick={() => setOpen(false)} />

          <div className="review-box">
            <button className="review-close" onClick={() => setOpen(false)}>
              ✕
            </button>

            {/* HEADER */}
            <div className="review-header">
              <h2>Let customers speak for us</h2>
              <div className="review-stars">★★★★★</div>
              <p>Based on {total} reviews</p>
            </div>

            {!showForm && (
              <>
                <div className="review-distribution">
                  {ratings.map((r) => {
                    const percent = (r.count / total) * 100;

                    return (
                      <div key={r.stars} className="review-row">
                        <span>{"★".repeat(r.stars)}</span>

                        <div className="bar">
                          <div
                            className="bar-fill"
                            style={{ width: `${percent}%` }}
                          />
                        </div>

                        <span>{r.count}</span>
                      </div>
                    );
                  })}
                </div>

                <button
                  className="review-cta"
                  onClick={() => setShowForm(true)}
                >
                  Write a Store Review
                </button>
              </>
            )}

            {showForm && (
              <div className="review-form">
                <h3>Add Review</h3>

                <input placeholder="Your name" />
                <textarea placeholder="Your review..." />

                <button className="submit-btn">Submit Review</button>

                <button className="back-btn" onClick={() => setShowForm(false)}>
                  ← Back
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
