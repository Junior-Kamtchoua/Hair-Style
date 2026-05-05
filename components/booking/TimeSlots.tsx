"use client";

const slots = ["09:00", "12:00", "15:00", "18:00"];

export default function TimeSlots({
  onSelect,
}: {
  onSelect: (time: string) => void;
}) {
  return (
    <div>
      {slots.map((t) => (
        <button key={t} onClick={() => onSelect(t)}>
          {t}
        </button>
      ))}
    </div>
  );
}
