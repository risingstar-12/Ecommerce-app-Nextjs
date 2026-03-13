
import React, { Suspense } from "react";
import ProductsService from "../../services/products-services";
import ProductCard from "../../components/Productcard/ProductCard";
// import { cookies } from 'next/headers';

// static
export const metadata: Metadata = {
  title: "Product List Page"
}

export default async function ProductsPage() {
  const products = await ProductsService.getProducts(); // ✅ allowed in App Router async component

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
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}