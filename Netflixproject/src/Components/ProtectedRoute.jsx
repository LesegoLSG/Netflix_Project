import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  // Access user authentication context
  const { user } = UserAuth();

  // If no user is authenticated, redirect to the homepage
  if (!user) {
    return <Navigate to="/" />;
  }
  // If user is authenticated, render the child components
  return children;
};

export default ProtectedRoute;
