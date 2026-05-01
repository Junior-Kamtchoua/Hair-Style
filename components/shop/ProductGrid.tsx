"use client";

import { useEffect, useState, useRef } from "react";
import ProductCard from "./ProductCard";

type Product = {
  id: string;
  name: string;
  price: number;
  image_url: string;
  stock: number;
};

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const isFetching = useRef(false);

  useEffect(() => {
    const fetchProducts = async () => {
      if (isFetching.current || !hasMore) return;

      isFetching.current = true;
      setLoading(true);

      try {
        const res = await fetch(`/api/products?page=${page}`);
        const data = await res.json();

        if (data.length === 0) {
          setHasMore(false);
        } else {
          setProducts((prev) => [...prev, ...data]);
        }
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
      isFetching.current = false;
    };

    fetchProducts();
  }, [page, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200 &&
        !isFetching.current &&
        hasMore
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  return (
    <>
      <div className="productGrid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {!hasMore && <p style={{ textAlign: "center" }}>No more products</p>}
    </>
  );
}
