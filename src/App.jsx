import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./components/Error";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Error/>} />
        <Route path="home" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
