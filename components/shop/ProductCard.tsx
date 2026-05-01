import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: number;
  image_url: string;
  stock: number;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.id}`} className="productCard">
      <div className="productCard__imageWrapper">
        <img
          src={product.image_url || "/placeholder.jpg"}
          alt={product.name}
          className="productCard__image"
        />

        {product.stock === 0 && (
          <span className="productCard__badge">Sold Out</span>
        )}
      </div>

      <div className="productCard__info">
        <h3 className="productCard__title">{product.name}</h3>
        <p className="productCard__price">${product.price}</p>
      </div>
    </Link>
  );
}
