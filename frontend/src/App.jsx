import { BrowserRouter, Routes, Route } from "react-router-dom";

import Skills from "./pages/Skills";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;