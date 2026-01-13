import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      // Send login request to backend
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      // Store JWT token in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Show success message
      setMessage("Login successful!");

      // Redirect based on role
      if (res.data.user.role === "admin") {
        navigate("/");
      } else {
        navigate("/profile");
      }
    } catch (error) {
      console.error(error.response?.data);
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-blue-300">
        {/* Branding Header */}
        <div className="pt-12 pb-8 px-8 text-center bg-gradient-to-b from-blue-50/50 to-transparent">
          <div className="inline-block p-3 bg-white rounded-2xl shadow-sm border border-slate-100 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl">T</span>
            </div>
          </div>
          <h1 className="text-slate-900 font-black text-2xl tracking-tighter leading-tight">
            <span className="text-blue-800">Yetri</span>
            <span className="text-blue-500">Connect</span>
          </h1>
          <p className="text-[10px] text-slate-400 font-bold tracking-[0.3em] uppercase mt-2">
            Authorized Personnel Only
          </p>
        </div>

        <div className="p-8 pt-0">
          <form className="space-y-5" onSubmit={handleLogin}>
            {/* Show message */}
            {message && (
              <p
                className={`text-center font-bold text-xs ${message.includes("successful") ? "text-green-600" : "text-red-600"
                  }`}
              >
                {message}
              </p>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="name@precinct.gov"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2 ml-1">
                <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
                  Password
                </label>
                <a
                  href="#"
                  className="text-[10px] font-bold text-blue-600 hover:text-blue-700 uppercase tracking-tight"
                >
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
            >
              Login Securely
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signin"
              className="text-blue-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
