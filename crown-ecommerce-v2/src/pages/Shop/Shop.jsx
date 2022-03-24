import { useContext } from "react";
import ProductContext from "../../contexts/product.context";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="container">
      <h1>Shop</h1>
      {products.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Shop;
