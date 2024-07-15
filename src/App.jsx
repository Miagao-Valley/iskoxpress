import { Route, Routes } from "react-router-dom";
import "./App.css";
import Setup from "./components/Setup";
import Error from "./components/Error";
import Home from "./pages/Home";
import CreateProfile from "./components/CreateProfile";
import LandingPage from "./pages/LandingPage";



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="setup" element={<Setup />} />
        <Route path="*" element={<Error/>} />
        <Route path="home" element={<Home/>}/>
        <Route path="set-icon" element={<CreateProfile/>}/>  
      </Routes>
    </>
  );
}

export default App;
