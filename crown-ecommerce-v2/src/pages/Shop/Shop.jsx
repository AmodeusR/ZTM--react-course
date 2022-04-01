import { useEffect } from "react";
import { Routes, Route} from "react-router-dom";
import CategoryContext from "../../contexts/category.context";
import { CategoriesSection, CategorySection } from "../../pages";
import { ProductsSection } from "../../components";
import PageNotFound from "../PageNotFound/PageNotFound";

const Shop = () => {

  return (
    <main className="container" style={{marginTop: "2rem"}}>
      <h1 className="page-title">Shop</h1>
      <Routes>
        <Route index element={<CategoriesSection />} />
        <Route path=":category" element={<CategorySection />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default Shop;