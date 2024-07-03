import { Outlet, useLocation, Navigate } from "react-router-dom";
import { auth } from "./firebaseUtil";

const UserRouting = () => {
  const location = useLocation();

  return auth.currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default UserRouting;
