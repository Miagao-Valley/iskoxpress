import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Setup from "./components/Setup";
import Error from "./components/Error";


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="setup" element={<Setup />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </>
  );
}

export default App;
