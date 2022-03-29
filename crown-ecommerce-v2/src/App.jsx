import { Home, Authentication, Shop, Checkout, PageNotFound } from "./pages";
import { Navigation } from "./components";
import { Routes, Route } from "react-router-dom";
import { ProductProvider } from "./contexts/product.context";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route
            path="shop"
            element={
              <ProductProvider>
                <Shop />
              </ProductProvider>
            }
          />
          <Route path="checkout" element={<Checkout />} />

          <Route path="*" element={<PageNotFound /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;