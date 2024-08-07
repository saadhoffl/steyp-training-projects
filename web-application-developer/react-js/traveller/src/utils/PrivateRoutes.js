import { Outlet, Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../App";
import React, { useContext } from "react";

const PrivateRoutes = () => {
  const { userData } = useContext(UserContext);
  const location = useLocation();

  return userData ? (
    <Outlet />
  ) : (
    <Navigate
      to={{ pathname: "/auth/login", search: `?next=${location.pathname}` }}
    />
  );
};

export default PrivateRoutes;
