import { Home, SignPage } from "./pages";
import { Navigation } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sign-page" element={<SignPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
