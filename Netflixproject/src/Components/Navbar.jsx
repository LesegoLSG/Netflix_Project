import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const Navbar = () => {
  // Access user authentication context
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between items-center p-4 z-50 w-full absolute md:px-16">
      {/* Logo linking to homepage */}
      <Link to="/">
        <h1 className=" text-primary text-2xl md:text-4xl font-bold cursor-pointer ">
          EgoStream
        </h1>
      </Link>

      {user?.email ? (
        <div>
          {/* Profile button visible when user is logged in */}
          <Link to="/profile">
            <button className="capitalize text-white pr-4">Profile</button>
          </Link>
          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="capitalize bg-primary px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          {/* Login button visible when user is not logged in */}
          <Link to="/login">
            <button className="capitalize text-white pr-4">Login</button>
          </Link>
          {/* Sign Up button */}
          <Link to="/signup">
            <button className="capitalize bg-primary px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
