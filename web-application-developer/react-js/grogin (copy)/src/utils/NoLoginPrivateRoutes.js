import { Outlet, Navigate } from "react-router-dom";

const NoLoginPrivateRoutes = () => {
  let auth = localStorage.getItem("user_data");

  return !auth ? <Outlet /> : <Navigate to="/" />;
};

export default NoLoginPrivateRoutes;
