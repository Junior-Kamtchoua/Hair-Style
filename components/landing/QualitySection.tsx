export default function QualitySection() {
  return (
    <section className="qualitySection">
      {/* LEFT CONTENT */}
      <div className="qualitySection__content">
        <h2 className="qualitySection__title">HIGH QUALITY</h2>

        <div className="qualitySection__line" />

        <p className="qualitySection__text">
          HMHC offers our customers high-quality raw hair extensions sourced
          from the vibrant cultures of Southeast Asia. Each strand of hair in
          our extensions undergoes rigorous quality control measures to ensure
          unparalleled softness, durability, and natural luster.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="qualitySection__image">
        <img src="/hero2.jpg" alt="High quality hair" />
      </div>
    </section>
  );
}
