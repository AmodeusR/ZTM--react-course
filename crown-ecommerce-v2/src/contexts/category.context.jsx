import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "/src/shop-data.js";

import { fetchData } from "../utils/firebase/firebase";

const CategoryContext = createContext({
  categories: [],
  setCategories: () => null,
});

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryMap = await fetchData();

        setCategories(categoryMap);
      } catch (error) {
        console.warn(error);
      }
    };
    
    fetchCategories();

  }, []);
  
  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
