import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  const token = localStorage.getItem("token");

  console.log('#####', isLoggedIn);
  console.log('#####', token)

  if (!isLoggedIn || !token) {
    return <Navigate to="*" />;
  }

  return children;
}
