import Home from "./pages/Home";
import Skills from "./pages/Skills";
import SkillDetails from "./pages/SkillDetails";

<Routes>

    <Route path="/" element={<Home />} />

    <Route path="/skills" element={<Skills />} />

    <Route path="/skills/:id" element={<SkillDetails />} />

</Routes>