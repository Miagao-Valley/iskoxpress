import "./App.css";
import ErrorPage from "./components/pages/ErrorPage";
import LoginPage from "./auth/LoginPage";
import UserPage from "./components/pages/UserSetup";
import { Routes, Route } from "react-router-dom";
import UserRouting from "./auth/UserRouting";
import { AuthStateChangeHandler } from "./auth/firebaseUtil";
import UserSetup from "./components/pages/UserSetup";

function App() {
  return (
    <>
      <AuthStateChangeHandler/>
      <Routes>
        {/*public pages*/}
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />

        {/*private pages*/}
        <Route element={<UserRouting />}>
          <Route path="/userPage" element={<UserSetup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
