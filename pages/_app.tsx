// import "../styles/globals.css";   // global CSS
import type { AppProps } from "next/app";
import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "@/context/UserContext";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
    <CartProvider>
      <Navbar />
      <Component {...pageProps} />  {/* Renders each page */}
      <Footer />
    </CartProvider>
    </UserProvider>
  );
}

export default MyApp;