"use client";

import "./Navbar.css";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const router = useRouter();
  const { cartCount } = useCart();
  const { clearCart } = useCart(); 
  
  const [username, setUsername] = useState("");

  // Load username from localStorage
  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) setUsername(user);
  }, []);

  // Logout function
const handleLogout = () => {
  localStorage.removeItem("username");
  setUsername("");     
  clearCart();          
  router.push("/");
};

  
  return (
    <nav className="main-nav">
      <ul className="nav-links">
        <li className="nav-item">
          <a className="nav-link" href="#"><strong>My Ecommerce </strong></a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contactus">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/cart">
            Cart ({cartCount})
          </Link>
        </li>
      </ul>

      <div className="d-flex">
        {username ? (
          <>
            <span className="navbar-text text-white me-3">
              Welcome {username}
            </span>
            <button
              className="btn btn-outline-light btn-sm"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="btn btn-outline-light btn-sm">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}