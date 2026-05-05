import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  const result = await pool.query(`
    SELECT * FROM orders
    ORDER BY created_at DESC
  `);

  return NextResponse.json(result.rows);
}
