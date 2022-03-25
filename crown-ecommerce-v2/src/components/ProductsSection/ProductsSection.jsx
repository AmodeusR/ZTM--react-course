import React from "react";
import { ProductCard } from "/src/components";

import "./products-section.scss";

const formatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency:"USD"
});

const ProductsSection = ({ title, products }) => {
  return (
    <section className="products-section">
      <div className="products-section__list">
        {products.map(({ id, name, price, imageUrl }) => (
          <ProductCard
            key={id}
            name={name}
            price={formatter.format(price)}
            imgSrc={imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
