"use client";
import { CSSProperties } from "react";
import React from "react";
import { useCart } from "../../context/CartContext";

interface Props {
  id: number;
  title: string;
  price: number;
  thumbnail?: string;
  style?: CSSProperties;
}

export default function AddtoCart({ id, title, price, thumbnail }: Props) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
   addToCart({ 
    id, 
    title: title ,
    price, 
    thumbnail, 
    quantity: 1 
  });
};

  return (
    <button
      onClick={handleAddToCart}
      style={{
        padding: "13px 25px",
        backgroundColor: "#0070f3",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "5px",
      }}
    >
      Add to Cart
    </button>
  );
}