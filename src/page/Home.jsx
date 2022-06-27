import React, { useEffect } from "react";
import Parallax from "../components/Parallax/Parallax";
import Products from "../components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <main>
      <Parallax />
      <Products />
    </main>
  );
};
