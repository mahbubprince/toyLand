import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivareRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
//   console.log(user, loading);

  const location=useLocation()
//   console.log(location)

  if (loading) {
    return (
      <span className=" min-h-screen loading loading-bars loading-xl flex justify-center items-center mx-auto size-20"></span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivareRoutes;
