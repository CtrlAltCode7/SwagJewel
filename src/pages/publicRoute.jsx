import React from "react";
import { Navigate } from "react-router-dom";

export function PublicRoute({ children }) {
//   const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  const token = localStorage.getItem("token");
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (token) {
    return <Navigate to="/home" />;
  }
  if(!isLoggedIn){
    return <Navigate to="/home" />;
  }

  return children;
}
