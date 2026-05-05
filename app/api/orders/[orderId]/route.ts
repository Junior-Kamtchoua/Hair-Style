import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

/* =========================
   GET ORDER
========================= */
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ orderId: string }> },
) {
  const { orderId } = await context.params;

  const order = await pool.query(`SELECT * FROM orders WHERE id = $1`, [
    orderId,
  ]);

  const history = await pool.query(
    `SELECT * FROM order_status_history
     WHERE order_id = $1
     ORDER BY created_at ASC`,
    [orderId],
  );

  return NextResponse.json({
    ...order.rows[0],
    history: history.rows,
  });
}

/* =========================
   UPDATE ORDER STATUS
========================= */
export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ orderId: string }> },
) {
  const { orderId } = await context.params;
  const body = await req.json();
  const { status } = body;

  await pool.query(`UPDATE orders SET status = $1 WHERE id = $2`, [
    status,
    orderId,
  ]);

  await pool.query(
    `INSERT INTO order_status_history (order_id, status)
     VALUES ($1, $2)`,
    [orderId, status],
  );

  return NextResponse.json({ success: true });
}
