import BookingForm from "@/components/booking/BookingForm";

async function getServices() {
  const res = await fetch("http://localhost:3000/api/services", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  return res.json();
}

export default async function BookingPage() {
  const services = await getServices();

  return (
    <main style={{ padding: 40 }}>
      <h1>Book Appointment</h1>
      <BookingForm services={services} />
    </main>
  );
}
