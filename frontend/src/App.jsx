import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import SkillDetails from "./pages/SkillDetails";
import CreateSkill from "./pages/CreateSkill";
import EditSkill from "./pages/EditSkill";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import ReviewList from "./pages/ReviewList";
import CreateReview from "./pages/CreateReview";
import NotificationList from "./pages/NotificationList";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/login" element ={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/skills/create" element={<ProtectedRoute> <CreateSkill/> </ProtectedRoute>} />

        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/skills/:id" element={<SkillDetails />}/>
        <Route path="/skills/:id/edit" element={<EditSkill/>}/>
        <Route path="/reviews" element={<ReviewList/>}/>
        <Route path="/reviews/create" element={<CreateReview/>} />
        <Route path="/notifications" element={<NotificationList/>} />
        <Route path="/chat" element={<ChatPage/>}/>
<Route

    path="/skills/create"

    element={<CreateSkill />}

/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;