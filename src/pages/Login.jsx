import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg w-full max-w-4xl overflow-hidden">
        {/* Left Section: Illustration */}
        <div className="hidden md:block bg-blue-100 p-8 w-1/2">
          <img
            src="/images/painter.jpg" // Local image in public folder
            alt="Login Illustration"
            className="mt-14 w-full h-auto object-cover"
          />
        </div>

        {/* Right Section: Login Form */}
        <div className="flex-1 flex justify-center items-center p-8">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Welcome Back!</h2>
            <form onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center text-gray-600 text-sm">
                  <input type="checkbox" className="form-checkbox mr-2" />
                  Remember me
                </label>
                <Link to="/forgot-password" className="text-blue-500 hover:underline text-sm">
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Log In
              </button>
            </form>

            {/* Signup Link */}
            <p className="text-center text-gray-600 mt-4">
              Don’t have an account?{" "}
              <Link to="/sign" className="text-blue-500 hover:underline">
                Signup
              </Link>
            </p>

            {/* Divider */}
            <div className="my-4 text-center text-gray-400">- OR -</div>

            {/* Social Login Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                className="flex items-center justify-center w-1/2 py-2 px-4 border rounded-md hover:bg-gray-100 transition"
              >
                <FaGoogle className="h-5 w-5" />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-1/2 py-2 px-4 border rounded-md hover:bg-gray-100 transition"
              >
               <FaGithub className="h-5 w-5" />
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

