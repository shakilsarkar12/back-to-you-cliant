import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import Spinner from "../Components/Spinner/Spinner";
import { AuthContext } from "../context/AuthContext/Authcontext";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading && !user?.email) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" />;
};

export default Private;
