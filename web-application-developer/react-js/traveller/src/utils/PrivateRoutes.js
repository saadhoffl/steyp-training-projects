import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../App";
import React, { useContext } from "react";

const PrivateRoutes = () => {
  const { userData } = useContext(UserContext);

  return userData ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoutes;
