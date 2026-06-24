import { BrowserRouter, Routes, Route } from "react-router-dom";

import Skills from "./pages/Skills";

function App(){
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Skills/>} />
          <Route path="/skills" element={<Skills/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;