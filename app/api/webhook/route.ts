import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import { Pool } from "pg";
import Stripe from "stripe";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err) {
    return new NextResponse("Webhook error", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const orderId = session.metadata?.orderId;

    if (orderId) {
      await pool.query(`UPDATE orders SET status = 'paid' WHERE id = $1`, [
        orderId,
      ]);
    }
  }

  return NextResponse.json({ received: true });
}
