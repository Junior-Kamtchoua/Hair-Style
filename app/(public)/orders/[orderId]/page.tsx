type OrderHistory = {
  id: string;
  status: string;
  created_at: string;
};

type Order = {
  id: string;
  status: string;
  history: OrderHistory[];
};

async function getOrder(id: string): Promise<Order> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/orders/${id}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch order");
  }

  return res.json();
}

export default async function OrderPage({
  params,
}: {
  params: { orderId: string };
}) {
  const order = await getOrder(params.orderId);

  return (
    <main style={{ padding: 40 }}>
      <h1>Order Tracking</h1>

      <p>Status: {order.status}</p>

      <ul>
        {order.history.map((h) => (
          <li key={h.id}>
            {h.status} - {new Date(h.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </main>
  );
}
