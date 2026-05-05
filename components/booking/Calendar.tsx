"use client";

export default function Calendar({
  onSelect,
}: {
  onSelect: (date: string) => void;
}) {
  return <input type="date" onChange={(e) => onSelect(e.target.value)} />;
}
