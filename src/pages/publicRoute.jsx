import React from "react";
import { Navigate } from "react-router-dom";

export function PublicRoute({ children }) {
//   const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/home" />;
  }

  return children;
}
