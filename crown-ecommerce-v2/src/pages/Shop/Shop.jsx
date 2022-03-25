import { useContext } from "react";
import ProductContext from "../../contexts/product.context";
import { ProductsSection } from "../../components";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <main className="container">
      <h1>Shop</h1>
      <ProductsSection products={products} />
    </main>
  );
};

export default Shop;
