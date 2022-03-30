import { useContext } from "react";
import CategoryContext from "../../contexts/category.context";
import { ProductsSection } from "../../components";

const Shop = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <main className="container" style={{marginTop: "2rem"}}>
      <h1>Shop</h1>
      {categories.map(({ title, items }) => <ProductsSection key={title} title={title} products={items} /> )}
    </main>
  );
};

export default Shop;
