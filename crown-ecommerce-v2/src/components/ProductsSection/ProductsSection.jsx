import { useContext } from "react";
import { ProductCard } from "/src/components";

import "./products-section.scss";
import CartContext from "../../contexts/cart.context";



const ProductsSection = ({ title, products }) => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <section className="products-section">
      <h2 className="products-section__title">{title}</h2>
      <div className="products-section__list">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            handleItemAdditionToCart={addItemToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
