import { useState } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import { AuthContextProvider } from "./Context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Trailer from "./Pages/Trailer";

function App() {
  return (
    <>
      {/* Wrap the entire application in the AuthContextProvider to provide authentication context */}
      <AuthContextProvider>
        <Navbar />
        {/* Define the routes using the Routes and Route components from react-router-dom */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Protected route for the Profile page, accessible only when user is authenticated */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/trailer/:id" element={<Trailer />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
