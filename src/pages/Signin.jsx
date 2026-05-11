import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/signup",
        formData
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setMessage("Account created successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full border border-zinc-100 min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-blue-300">

        {/* Branding Header */}
        <div className="pt-12 pb-8 px-8 text-center bg-gradient-to-b from-blue-50/50 to-transparent">
          <div className="inline-block p-3 bg-white rounded-2xl shadow-sm border border-slate-100 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl">T</span>
            </div>
          </div>

          <h1 className="text-slate-900 font-black text-2xl tracking-tighter leading-tight">
            <span className="text-blue-800">Traffic </span>
            <span className="text-blue-500">Check</span>
          </h1>

          <p className="text-[10px] text-slate-400 font-bold tracking-[0.3em] uppercase mt-2">
            Create New Account
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8 pt-0">
          <form className="space-y-5" onSubmit={handleSubmit}>

            {message && (
              <p
                className={`text-center font-bold text-xs ${
                  message.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}

            {/* Full Name */}
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="Suraj Amgain"
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="name@gmail.com"
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="••••••••"
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Creating Account..." : "Register Securely"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
