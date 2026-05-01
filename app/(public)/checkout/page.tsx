"use client";

import { useCart } from "@/components/cart/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ cart, email }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    }

    setLoading(false);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="checkoutPage">
      <h2>Checkout</h2>

      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h3>Total: ${total}</h3>

      <button onClick={handleCheckout} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </main>
  );
}
