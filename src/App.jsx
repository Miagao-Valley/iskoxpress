import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./components/Error";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import CreatePost from "./pages/CreatePost";



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Error/>} />
        <Route path="home" element={<Home/>}/>
        <Route path='create-post' element={<CreatePost/>}/>
      </Routes>
    </>
  );
}

export default App;
