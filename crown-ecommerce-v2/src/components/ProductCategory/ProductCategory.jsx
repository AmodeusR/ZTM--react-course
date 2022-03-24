import React from "react";
import "./product-category.scss";

const ProductCategory = ({ category, className, imgSrc }) => {
  return (
    <div className={`category-card ${className}`}>
      <div className="category-card__background" style={{
        backgroundImage:`url(${imgSrc})`
      }} />
      <div className="category-card__inner-container">
        <h2 className="category-card__title">{category}</h2>
        <span>Shop now</span>
      </div>
    </div>
  );
};

export default ProductCategory;
