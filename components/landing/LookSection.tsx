export default function LookSection() {
  return (
    <section className="lookSection">
      {/* LEFT IMAGE */}
      <div className="lookSection__image">
        <img src="/hero2.jpg" alt="Hair model" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="lookSection__content">
        <h2 className="lookSection__title">ABOUT HMHC </h2>

        <div className="lookSection__line" />

        <p className="lookSection__text">
          At High Maintenance Hair Company, we believe every woman deserves to
          look and feel like the Queen she is. And our premium raw human
          extensions are crafted to move with you - from all your curves, to all
          your edges. Our extensions are meticulously hand-tied by skilled
          artisans, designed for comfort, durability, and ultimate luxury. So,
          show your personality. Embrace your beauty. Discover the perfect
          premium hair that’s uniquely you.
        </p>

        <b>We know that hair is not JUST hair, it’s part of your identity!</b>
      </div>
    </section>
  );
}
