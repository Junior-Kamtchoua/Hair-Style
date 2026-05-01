"use client";

import { useCart } from "@/components/cart/CartContext";

type Product = {
  id: string;
  name: string;
  price: number;
  image_url: string;
};

type Props = {
  product: Product;
};

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
      quantity: 1,
    });
  };

  return <button onClick={handleAddToCart}>Add to Cart</button>;
}
