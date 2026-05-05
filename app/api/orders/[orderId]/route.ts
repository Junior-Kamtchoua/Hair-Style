import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(
  req: Request,
  { params }: { params: { orderId: string } },
) {
  const order = await pool.query(`SELECT * FROM orders WHERE id = $1`, [
    params.orderId,
  ]);

  const history = await pool.query(
    `SELECT * FROM order_status_history
     WHERE order_id = $1
     ORDER BY created_at ASC`,
    [params.orderId],
  );

  return NextResponse.json({
    ...order.rows[0],
    history: history.rows,
  });
}

export async function PATCH(
  req: Request,
  { params }: { params: { orderId: string } },
) {
  const body = await req.json();
  const { status } = body;

  await pool.query(`UPDATE orders SET status = $1 WHERE id = $2`, [
    status,
    params.orderId,
  ]);

  await pool.query(
    `INSERT INTO order_status_history (order_id, status)
     VALUES ($1, $2)`,
    [params.orderId, status],
  );

  return NextResponse.json({ success: true });
}
