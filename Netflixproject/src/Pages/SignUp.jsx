import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const SignUp = () => {
  const [rememberLogin, setRemeberLogin] = useState(true); // State to manage if the user wants to be remembered
  const [email, setEmail] = useState(""); // State to store the email entered by the user
  const [password, setPassword] = useState(""); // State to store the password entered by the user

  // Get the signUp function and user from the Auth context
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen">
      {/* Background image */}
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/689d9df8-d2c0-4ba1-9cf7-30622eee71a6/ZA-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      />
      <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />

      <div className="fixed w-full px-4 py-4 z-20">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-nsans-bold">Sign UP</h1>
            {/* Signup form */}
            <form
              className="w-full flex flex-col py-4"
              onSubmit={handleFormSubmit}
            >
              {/* Email input field */}
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* Password input field */}
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Submit button */}
              <button
                type="submit"
                className="bg-red-600 py-3 my-6 rounded font-nsans-bold"
              >
                Sign Up
              </button>
              {/* Remember me checkbox and Need Help link */}
              <div className="flex justify-between items-center text-gray-600">
                <p>
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={rememberLogin}
                    onChange={(e) => setRemeberLogin(!rememberLogin)}
                  />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="my-4">
                <span className="text-gray-600 mr-2 ">
                  Already subscribed to Netflix?
                </span>
                <Link to="/login">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
