import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";

const KYCForm = () => {
  const [formData, setFormData] = useState({
    vehicleType: "",
    manufactureYear: "",
    model: "",
    licensePlate: "",
    fuelType: "",
    color: "",
    owner: "",
    deviceId: "",
    photo: null,
  });
  const [dob, setDob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      await axios.post("http://localhost:3000/api/kyc/create", data);

      setMessage("KYC submitted successfully!");

      setFormData({
        vehicleType: "",
        manufactureYear: "",
        model: "",
        licensePlate: "",
        fuelType: "",
        color: "",
        owner: "",
        deviceId: "",
        photo: null,
      });
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to submit KYC");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-white w-full min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl shadow-blue-300">

        {/* Header */}
        <div className="pt-12 pb-8 px-8 text-center bg-gradient-to-b from-blue-50/50 to-transparent">
          <div className="inline-block p-3 bg-white rounded-2xl shadow-sm border border-slate-100 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl">T</span>
            </div>
          </div>

          <h1 className="text-slate-900 font-black text-2xl tracking-tighter">
            <span className="text-blue-800">Yetri</span>
            <span className="text-blue-500">Connect</span>
          </h1>

          <p className="text-[10px] text-slate-400 font-bold tracking-[0.3em] uppercase mt-2">
            KYC Verification
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 pt-0 space-y-6">
          {message && (
            <p
              className={`text-center font-bold text-xs ${message.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
                }`}
            >
              {message}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Vehicle Type */}
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">
                Vehicle Type
              </label>
              <select
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
                <option value="">Select Vehicle</option>
                <option value="Petrol">Bike</option>
                <option value="Diesel">Scooter</option>
                <option value="Electric">Car</option>
                <option value="Hybrid">Truck</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">
                Date of Birth
              </label>

              <DatePicker
                selected={dob}
                onChange={(date) => setDob(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select your date of birth"
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                maxDate={new Date()}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            {[
              ["manufactureYear", "Manufacture Year"],
              ["model", "Model"],
              ["licensePlate", "License Plate"],
              ["color", "Color"],
              ["owner", "Owner Name"],
              ["deviceId", "Device ID"],
            ].map(([name, label]) => (
              <div key={name}>
                <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">
                  {label}
                </label>
                <input
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            ))}

            {/* Fuel Type */}
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">
                Fuel Type
              </label>
              <select
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
                <option value="">Select fuel</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">
                Vehicle Photo
              </label>
              <input
                type="file"
                name="photo"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl file:bg-blue-600 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-lg"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit KYC Securely"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default KYCForm;
