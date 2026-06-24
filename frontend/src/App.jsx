import {
  BrowerRouter,
  Routes,
  Route,
} from "react-router-dom";

import Skills from "./pages/Skills";

function App(){
  return (
    <BrowerRouter>
        <Routes>
          <Route path="/" element ={<Skills/>} />
          <Route path="/skills" element={<Skills/>} />
        </Routes>
    </BrowerRouter>
  );
}

export default App;