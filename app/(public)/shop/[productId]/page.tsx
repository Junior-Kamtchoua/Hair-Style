import AddToCartButton from "@/components/shop/AddToCartButton";

type Product = {
  id: string;
  name: string;
  price: number;
  image_url: string;
  stock: number;
  description: string;
};

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProduct(params.productId);

  return (
    <main className="productPage">
      <img src={product.image_url} alt={product.name} />

      <div>
        <h1>{product.name}</h1>
        <p>${product.price}</p>

        {product.stock === 0 && <p>Sold Out</p>}

        {/* ✅ CLIENT COMPONENT */}
        <AddToCartButton product={product} />
      </div>
    </main>
  );
}
