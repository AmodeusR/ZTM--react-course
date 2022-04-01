import { useContext } from "react";
import { useParams } from "react-router-dom";
import CategoryContext from "../../contexts/category.context";
import { ProductsSection } from "../../components";

const CategoriesSection = () => {
  const { categories } = useContext(CategoryContext);
  const sections = Object.keys(categories);

  return (
    <>
      {sections.map((section) => {
        const { title, items } = categories[section];

        return (
          <ProductsSection key={title} title={title} products={items} preview />
        );
      })}
    </>
  );
};

export default CategoriesSection;
