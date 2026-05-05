"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(email);
    setEmail("");
    alert("Subscribed!");
  };

  return (
    <section className="newsletter">
      <h2 className="newsletter__title">Join the best d*amn hair club</h2>

      <p className="newsletter__text">
        By entering your email address below, you consent to receiving our
        newsletter with access to our latest collections, events, restocks, and
        MORE!
      </p>

      <form
        className={`newsletter__form ${focused ? "active" : ""}`}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">→</button>
      </form>
    </section>
  );
}
