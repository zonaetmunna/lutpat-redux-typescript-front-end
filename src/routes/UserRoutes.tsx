import React from "react";
import { useSelector } from "react-redux";

import { Navigate, useLocation } from "react-router-dom";
import Loading from "../view/components/Loading/Loading";

const UserRoutes = ({ children }: { children: JSX.Element }) => {
  /* const { pathname } = useLocation();
  const email = "monna@gmail.com";
  const {
    user: { email },
    isLoading,
  } = useSelector((state) => state.auth);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  } */

  return children;
};

export default UserRoutes;
