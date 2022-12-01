import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const Auth = { token: true };
  return Auth.token ? <Outlet /> : <Navigate to="/login" />;
};

//📔 Outlet Means its parent route element that renders their nested Route or children route

export default PrivateRoute;
