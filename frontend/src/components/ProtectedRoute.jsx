import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {

  const isLoggedIn = localStorage.getItem("admin");

  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/admin-login" />;
}