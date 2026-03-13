
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductsService from "../../../services/products-services";
import AddtoCart from "../../../components/buttons/AddtoCart";
import { notFound } from "next/navigation";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail?: string;
}

interface Params {
  params: {
    productId: string;
  };
}

export default async function ProductDetail({ params }: { params: Promise<{ productId: string }> }) {
  const resolvedParams = await params; 
  const productId = Number(resolvedParams.productId);

const  product = await ProductsService.getProductById(productId);


  if (!product) notFound();
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Product Image */}
      <div style={{ flex: "1 1 300px", textAlign: "center" }}>
        {product.thumbnail ? (
          <Image
            src={product.thumbnail}
            width={400}
            height={400}
            alt={product.title}
            style={{ borderRadius: "10px", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              width: "400px",
              height: "400px",
              backgroundColor: "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
            }}
          >
            No Image
          </div>
        )}
      </div>

      {/* Product Info */}
      <div style={{ flex: "1 1 400px" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>{product.title}</h1>
        <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "20px" }}>
          {product.description || "No description available."}
        </p>

        <p style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px" }}>
          Price: ${product.price}
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
        <AddtoCart style={{ width: "120px", padding: "5px" }}
          id={product.id}
          title={product.title}
          price={product.price}
          thumbnail={product.thumbnail}
        />

        <Link href="/products">
          <button
            style={{
              marginRight: "10px",
              marginTop: "20px",
              width: "120px",
              padding: "10px",
              gap:"10px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#0070f3",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Back to Products
          </button>
        </Link>
        </div>
        
      </div>
    </div>
  );
}