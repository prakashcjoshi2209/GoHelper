import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Sign = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    const errors = {};
    const { email, password, confirmPassword } = formValues;

    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formValues);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="signUpWrapper flex flex-col lg:flex-row items-center justify-center min-h-screen p-4">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img
          src="/images/painter.jpg"
          alt="Description of image"
          className="max-w-full h-auto rounded-lg"
        />
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        {/* Form Section */}
        <div className="right w-full max-w-md px-4">
          <h3 className="text-center text-2xl font-semibold mb-6">
            Create your Free Account
          </h3>
          <form onSubmit={handleSubmit} className="w-full">
            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.password && (
                <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
              )}
            </div>

            {/* Confirm Password Input */}
            <div className="mb-6">
              <input
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-950 text-white py-2 px-4 rounded-lg mt-4"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Alternative Sign-up */}
        <div className="w-full mt-6 text-center">
          <p className="my-6 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 font-bold">
              Log in
            </Link>
          </p>

          <p className="text-center py-3 text-gray-700 font-bold">- OR -</p>

          {/* Social Buttons */}
          <div className="flex space-x-6">
            <div className="border rounded-lg p-2 flex flex-col items-center">
              <button className="flex items-center space-x-2">
              <FaGoogle className="h-5 w-5" />
                <span>Sign up with Google</span>
              </button>
            </div>
            <div className="border rounded-lg p-2 flex flex-col items-center">
              <button className="flex items-center space-x-2">
              <FaGithub className="h-5 w-5" />
                <span>Sign up with Github</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
