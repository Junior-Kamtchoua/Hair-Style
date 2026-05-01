import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CheckoutBody = {
  cart: CartItem[];
  email?: string;
};

export async function POST(req: Request) {
  const body: CheckoutBody = await req.json();
  const { cart, email } = body;

  if (!cart || cart.length === 0) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  // ✅ calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // ✅ create order
  const orderResult = await pool.query(
    `INSERT INTO orders (guest_email, status, total)
     VALUES ($1, $2, $3)
     RETURNING id`,
    [email || null, "pending", total],
  );

  const orderId: string = orderResult.rows[0].id;

  // ✅ insert order items
  for (const item of cart) {
    await pool.query(
      `INSERT INTO order_items (order_id, product_id, quantity, price)
       VALUES ($1, $2, $3, $4)`,
      [orderId, item.id, item.quantity, item.price],
    );
  }

  // ✅ create stripe session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: cart.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    })),
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    metadata: {
      orderId,
    },
  });

  return NextResponse.json({ url: session.url });
}
