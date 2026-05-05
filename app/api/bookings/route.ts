import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(req: Request) {
  const body = await req.json();

  const { service_id, date, time, contract_signed } = body;

  if (!contract_signed) {
    return NextResponse.json({ error: "Contract required" }, { status: 400 });
  }

  await pool.query(
    `INSERT INTO bookings 
     (service_id, appointment_date, appointment_time, contract_signed)
     VALUES ($1, $2, $3, $4)`,
    [service_id, date, time, contract_signed],
  );

  return NextResponse.json({ success: true });
}
