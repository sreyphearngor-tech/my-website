import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState(null);
  const [isSignup, setIsSignup] = useState(false);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSignup = () => {
    if (!email || !password) {
      showToast("Please enter email & password!", "error");
      return;
    }
    showToast("Account created successfully!");
  };

  const handleForgotPassword = () => {
    showToast("Password reset link sent to your email");
  };

  const handleLogin = () => {
    if (!email || !password) {
      showToast("Please enter email & password!", "error");
      return;
    }
    showToast("Login successful");
    setTimeout(() => onClose(), 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50">

      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-6 right-6 px-4 py-2 rounded-lg shadow-xl text-white text-sm 
            ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}
          `}
        >
          {toast.message}
        </div>
      )}

      {/* Card */}
      <div className="w-[750px] h-[480px] bg-white rounded-2xl shadow-2xl flex overflow-hidden relative">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-lg bg-gray-200 hover:bg-gray-300 px-3 rounded-full"
        >
          ✕
        </button>

        {/* Left image section */}
        <div
          className="w-1/2 hidden md:flex bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg')",
          }}
        ></div>

        {/* Right form section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">

          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            {isSignup
              ? "Signup to start your journey with us"
              : "Login to continue enjoying our services"}
          </p>

          {/* Email */}
          <div className="mb-4 relative">
            <FiMail className="absolute left-3 top-3 text-gray-500 text-xl" />
            <input
              type="email"
              placeholder="Email"
              className="w-full border pl-10 pr-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-2 relative">
            <FiLock className="absolute left-3 top-3 text-gray-500 text-xl" />
            <input
              type="password"
              placeholder="Password"
              className="w-full border pl-10 pr-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Forgot password */}
          {!isSignup && (
            <p
              onClick={handleForgotPassword}
              className="text-right text-blue-500 text-sm mb-4 cursor-pointer hover:underline"
            >
              Forgot password?
            </p>
          )}

          {/* Button */}
          {isSignup ? (
            <button
              onClick={handleSignup}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              Sign Up
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              Log In
            </button>
          )}

          {/* Switch */}
          <p className="text-center text-sm mt-4">
            {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
            <span
              onClick={() => setIsSignup(!isSignup)}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              {isSignup ? "Login" : "Signup"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

