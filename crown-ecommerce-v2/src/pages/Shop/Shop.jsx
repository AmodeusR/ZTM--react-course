import { useContext } from "react";
import CategoryContext from "../../contexts/category.context";
import { ProductsSection } from "../../components";

const Shop = () => {
  const { categories } = useContext(CategoryContext);
  const sections = Object.keys(categories);

  return (
    <main className="container" style={{marginTop: "2rem"}}>
      <h1 className="page-title">Shop</h1>
      {sections.map(section => {
        const { title, items } = categories[section];
      
        return <ProductsSection key={title} title={title} products={items} />
      })}
    </main>
  );
};

export default Shop;
