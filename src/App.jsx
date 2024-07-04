import "./App.css";
import ErrorPage from "./components/pages/ErrorPage";
import LoginPage from "./auth/LoginPage";
import { Routes, Route } from "react-router-dom";
import UserSetup from "./components/pages/UserSetup"


function App() {
  return (
    <>
      <Routes>
        {/*public pages*/}
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/userSetup" element={<UserSetup/>} />
      </Routes>
    </>
  );
}

export default App;
