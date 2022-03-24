import { createContext, useState, useEffect } from "react";
import PRODUCTS from "/src/shop-data.json";

const ProductContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await fetch(PRODUCTS);
        // const data = await response.json();

        console.log(response);
      } catch (error) {
        console.warn(error);
      }
    };
    setProducts(PRODUCTS)
    // fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
