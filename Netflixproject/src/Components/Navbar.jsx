import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 z-50 w-full absolute">
      <Link to="/">
        <h1 className="uppercase text-red-600 text-4xl font-bold cursor-pointer">
          netflix
        </h1>
      </Link>
      <div>
        <Link to="/login">
          <button className="capitalize text-white pr-4">Login</button>
        </Link>
        <Link to="/signup">
          <button className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
