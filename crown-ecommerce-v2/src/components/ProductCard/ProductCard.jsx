import React from "react";
import { Button } from "../../components";
import "./product-card.scss";



const ProductCard = ({ name, price, imgSrc }) => {

  return (
    <div className="product-card">
      <img className="product-card__image" src={imgSrc} alt={`${name}`} />
      <div className="product-card__description">
        <span className="product-card__name">{name}</span>
        <span className="product-card__price">{price}</span>
      </div>
      <Button className="product-card__button inverted" title="Add to cart" />
    </div>
  );
};

export default ProductCard;
