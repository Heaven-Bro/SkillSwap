import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import SkillDetails from "./pages/SkillDetails";
import CreateSkill from "./pages/CreateSkill";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/skills/:id" element={<SkillDetails />}/>
<Route

    path="/skills/create"

    element={<CreateSkill />}

/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;