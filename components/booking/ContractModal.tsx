"use client";

export default function ContractModal({ onAccept }: { onAccept: () => void }) {
  return (
    <div className="modal">
      <h2>Service Agreement</h2>

      <p>
        By booking, you agree that no-shows or same-day cancellations will be
        charged 100% of the service.
      </p>

      <button onClick={onAccept}>I Agree</button>
    </div>
  );
}
