import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./components/Error";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import CreatePost from "./pages/CreatePost";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Error />} />
        <Route path="home" element={<Home />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="profile" element={<Profile />} />
        <Route path="notifications" element={<Notifications/>} />
      </Routes>
    </>
  );
}

export default App;
