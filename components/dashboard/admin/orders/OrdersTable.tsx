"use client";

type Order = {
  id: string;
  guest_email: string;
  status: string;
  total: number;
};

export default function OrdersTable({ orders }: { orders: Order[] }) {
  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/orders/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
      headers: { "Content-Type": "application/json" },
    });

    window.location.reload();
  };

  return (
    <table className="ordersTable">
      <thead>
        <tr>
          <th>Email</th>
          <th>Status</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.guest_email}</td>
            <td>{order.status}</td>
            <td>${order.total}</td>

            <td>
              <button onClick={() => updateStatus(order.id, "processing")}>
                Processing
              </button>

              <button onClick={() => updateStatus(order.id, "shipped")}>
                Shipped
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
