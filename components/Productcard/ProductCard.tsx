// "use client";

import Image from "next/image";
import Link from "next/link";
import Details from "../buttons/Details";
import AddtoCart from "../../components/buttons/AddtoCart"; // renamed to avoid conflict

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
//  add product to cart in localStorage

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

  };

  return (
    <div
      className="product-card"
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
      }}
    >
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={200}
          height={200}
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
        <h4 style={{ margin: "10px 0" }}>{product.title}</h4>
        <p style={{ fontWeight: "bold" }}>${product.price}</p>
      </Link>

      <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "10px" }}>
        <Details productId={product.id} />
        <AddtoCart
          id={product.id}
          title={product.title}
          price={product.price}
          thumbnail={product.thumbnail}
        />
      </div>
    </div>
  );
}