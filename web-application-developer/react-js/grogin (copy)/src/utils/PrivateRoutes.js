import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = localStorage.getItem("user_data");

  return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
