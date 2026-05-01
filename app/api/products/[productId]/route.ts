import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(
  req: Request,
  context: { params: Promise<{ productId: string }> },
) {
  const { productId } = await context.params;

  const result = await pool.query(`SELECT * FROM products WHERE id = $1`, [
    productId,
  ]);

  return NextResponse.json(result.rows[0]);
}
