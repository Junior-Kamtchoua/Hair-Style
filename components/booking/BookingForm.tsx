"use client";

import { useState } from "react";
import ServiceCard from "./ServiceCard";
import Calendar from "./Calendar";
import TimeSlots from "./TimeSlots";
import ContractModal from "./ContractModal";

type Service = {
  id: string;
  name: string;
  price: number;
  duration_minutes?: number;
};

type BookingFormProps = {
  services: Service[];
};

export default function BookingForm({ services }: BookingFormProps) {
  const [service, setService] = useState<Service | null>(null);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [contract, setContract] = useState<boolean>(false);
  const [showContract, setShowContract] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!service || !date || !time) {
      alert("Please select service, date and time");
      return;
    }

    if (!contract) {
      setShowContract(true);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/bookings", {
        method: "POST",
        body: JSON.stringify({
          service_id: service.id,
          date,
          time,
          contract_signed: true,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Booking failed");
      }

      alert("Booking confirmed");

      // reset form
      setService(null);
      setDate("");
      setTime("");
      setContract(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bookingForm">
      <h2>Select Service</h2>

      {services.map((s) => (
        <ServiceCard key={s.id} service={s} onSelect={setService} />
      ))}

      <h2>Select Date</h2>
      <Calendar onSelect={setDate} />

      <h2>Select Time</h2>
      <TimeSlots onSelect={setTime} />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Processing..." : "Confirm Booking"}
      </button>

      {showContract && (
        <ContractModal
          onAccept={() => {
            setContract(true);
            setShowContract(false);
          }}
        />
      )}
    </div>
  );
}
