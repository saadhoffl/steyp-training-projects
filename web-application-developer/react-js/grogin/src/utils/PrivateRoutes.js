import { Outlet, Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
  const location = useLocation();
  let auth = localStorage.getItem("user_data");

  return auth ? (
    <Outlet />
  ) : (
    <Navigate
      to={{ pathname: "/signin", search: `?next=${location.pathname}` }}
    />
  );
};

export default PrivateRoutes;
