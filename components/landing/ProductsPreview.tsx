export default function ProductsPreview() {
  return (
    <section className="productsPreview">
      <h2>Shop Our Collection</h2>

      <div className="productsPreview__grid">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="productCard">
            <div className="productCard__image" />
            <h3>Raw Indian Curly</h3>
            <p>$120</p>
          </div>
        ))}
      </div>
    </section>
  );
}
