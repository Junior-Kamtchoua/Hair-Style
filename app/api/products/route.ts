import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const pageParam = Number(searchParams.get("page"));
    const page = pageParam > 0 ? pageParam : 1;

    const limit = 8;
    const offset = (page - 1) * limit;

    const result = await pool.query(
      `
      SELECT id, name, price, image_url, stock
      FROM products
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
      `,
      [limit, offset],
    );

    // ✅ important for infinite scroll
    if (result.rows.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error("PRODUCTS API ERROR:", error);

    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
