import React from "react";
import "./product-card.scss";

const ProductCard = ({ productName, className, imgSrc }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card__background" style={{
        backgroundImage:`url(${imgSrc})`
      }} />
      <div className="card__inner-container">
        <h2 className="card__title">{productName}</h2>
        <span>Shop now</span>
      </div>
    </div>
  );
};

export default ProductCard;
