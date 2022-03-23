import { Home, Authentication, Shop } from "./pages";
import { Navigation } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
