import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Prefere from "./pages/Prefere";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coup de coeur" element={<Prefere />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;