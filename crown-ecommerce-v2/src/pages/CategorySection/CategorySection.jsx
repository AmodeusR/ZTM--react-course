import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsSection } from "../../components";
import CategoryContext from "../../contexts/category.context";

const CategorySection = () => {
  const { categories } = useContext(CategoryContext);
  const { category } = useParams();
  const categoryName = category.slice(0, 1).toUpperCase() + category.slice(1);

  const currentCategory = categories[categoryName] || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
      <ProductsSection products={currentCategory.items} title={currentCategory.title} />
    </>
  );
};

export default CategorySection;
