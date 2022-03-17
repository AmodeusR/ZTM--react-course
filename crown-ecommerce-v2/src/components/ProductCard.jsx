import React from "react";
import "../styles/product-card.scss";

const ProductCard = ({ productName, className }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card__inner-container">
        <h2 className="card__title">{productName}</h2>
        <span>Shop now</span>
      </div>
    </div>
  );
};

export default ProductCard;
