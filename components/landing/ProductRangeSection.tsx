export default function ProductRangeSection() {
  return (
    <section className="productRangeSection">
      {/* LEFT IMAGE */}
      <div className="productRangeSection__image">
        <img src="/hero4.jpg" alt="Product range" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="productRangeSection__content">
        <h2 className="productRangeSection__title">PRODUCT RANGE</h2>

        <div className="productRangeSection__line" />

        <p className="productRangeSection__text">
          Our diverse range of hair extensions caters to every style and
          preference, from kinky coils and curls to sleek, straight textures.
          Our luxury hair extensions offer consumers the freedom to add length,
          volume, or a pop of color. We provide a variety of lengths and
          textures to help you achieve your dream hairstyle.
        </p>
      </div>
    </section>
  );
}
