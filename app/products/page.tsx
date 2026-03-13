import type { Metadata } from "next";
import React, { Suspense } from "react";
import ProductsService from "../../services/products-services";
import ProductCard from "../../components/Productcard/ProductCard";
// import { cookies } from 'next/headers';

// static
type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
};
export const metadata: Metadata = {
  title: "Product List Page"
}

export default async function ProductsPage({ products: initialProducts }: { products: Product[] }) {
  const products: Product[]= await ProductsService.getProducts(); 

  return (
    <div
      className="products-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product: Product) => (
  <ProductCard key={product.id} product={product} />
))}
    </div>
  );
}