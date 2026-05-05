import OrdersTable from "@/components/dashboard/admin/orders/OrdersTable";

async function getOrders() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <main style={{ padding: 40 }}>
      <h1>Orders</h1>
      <OrdersTable orders={orders} />
    </main>
  );
}
