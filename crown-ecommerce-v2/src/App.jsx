import { Home } from "./pages";
import { Navigation } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
