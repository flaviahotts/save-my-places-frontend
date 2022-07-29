import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { HomeUser } from "./pages/HomeUser";
import { CreatePin } from "./pages/CreatePin";
import { MyPins } from "./pages/MyPins";
import { CreateComment } from "./pages/CreateComment";
import { EditPin } from "./pages/EditPin";
import { EditProfile } from "./pages/EditProfile";


function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-user" element={<HomeUser />} />
          <Route path="/create-pin" element={<CreatePin />} />
          <Route path="/create-comment/:id" element={<CreateComment />} />
          <Route path="/edit/:id" element={<EditPin />} />
          <Route path="/my-pins/:id" element={<MyPins />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
          <Route path="/update-profile" element={<ProtectedRoute component={EditProfile} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
