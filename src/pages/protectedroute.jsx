import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  if (!isLoggedIn) {
    return <Navigate to="*" />;
  }

  return children;
}
