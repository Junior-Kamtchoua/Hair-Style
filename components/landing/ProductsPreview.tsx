"use client";

export default function ProductsPreview() {
  return (
    <section className="logoSection">
      {/* floating elements */}
      <div className="float float--one">$</div>
      <div className="float float--two">$</div>

      {/* content */}
      <div className="logoContent">
        <img src="/HMHC2.png" alt="HMHC Logo" />
        <h1>HIGH MAINTENANCE</h1>
        <p>Luxury Hair. Elevated Confidence.</p>
      </div>
    </section>
  );
}
