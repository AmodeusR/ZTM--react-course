import React from "react";
import ProductCard from "../components/ProductCard";

const Homepage = () => {
  return (
    <main className="homepage">
      <ProductCard productName="hats" className="hats" />
      <ProductCard productName="jackets" className="jackets" />
      <ProductCard productName="sneakers" className="sneakers" />
      <ProductCard productName="womens" className="womens" />
      <ProductCard productName="mens" className="mens" />
    </main>
  );
};

export default Homepage;
