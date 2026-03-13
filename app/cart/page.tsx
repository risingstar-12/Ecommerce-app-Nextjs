"use client";

import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, incrementItem, decrementItem, removeItem} = useCart();

  if (cart.length === 0)
    return (
      <p style={{ textAlign: "center", marginTop: "50px", fontSize: "18px" }}>
        Your cart is empty.
      </p>
    );
// console.log(cart);
  return (
    <div style={{ maxWidth: "800px", margin: "50px auto", padding: "0 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Your Cart</h2>

      {cart.map((item: any, index: number) => {
        return (
          <div
            key={item.id ?? index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px",
              marginBottom: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              backgroundColor: "#fff",
            }}
          >
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: "0 0 5px 0" }}>{item.title}</h3>
              <p style={{ margin: 0, color: "#555" }}>Price: ${item.price}</p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                onClick={() => decrementItem(item.id)}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid #888",
                  backgroundColor: "#f0f0f0",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                -
              </button>

              <span style={{ minWidth: "20px", textAlign: "center" }}>
                {item.quantity}
              </span>

              <button
                onClick={() => incrementItem(item.id)}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid #888",
                  backgroundColor: "#f0f0f0",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              style={{
                marginLeft: "20px",
                backgroundColor: "#ff4d4f",
                color: "#fff",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        );
      })}

      <div style={{ textAlign: "right", marginTop: "30px", fontSize: "18px" }}>
        Total: $
        {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </div>
    </div>
  );
}