import React, { useState } from "react";
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

      const res = await axios.post(
        "http://localhost:3000/api/kyc/create",
        data
      );

      setMessage("✅ KYC submitted successfully");
      console.log(res.data);

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
      setMessage(
        error.response?.data?.message || "❌ Failed to submit KYC"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-5xl rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          KYC Verification
        </h1>

        <div>
          <h2 className="text-lg font-semibold text-blue-600 mb-4">
            Vehicle Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              ["vehicleType", "Vehicle Type"],
              ["manufactureYear", "Manufacture Year"],
              ["model", "Model"],
              ["licensePlate", "License Plate"],
              ["color", "Color"],
              ["owner", "Owner Name"],
              ["deviceId", "Device ID"],
            ].map(([name, placeholder]) => (
              <input
                key={name}
                type="text"
                name={name}
                placeholder={placeholder}
                className="input"
                value={formData[name]}
                onChange={handleChange}
                required
              />
            ))}

            <select
              name="fuelType"
              className="input"
              value={formData.fuelType}
              onChange={handleChange}
              required
            >
              <option value="">Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>

            <input
              type="file"
              name="photo"
              className="input file:bg-blue-600 file:text-white"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {message && (
          <p className="mt-4 text-center font-medium text-blue-600">
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit KYC"}
        </button>
      </form>
    </div>
  );
};

export default KYCForm;
