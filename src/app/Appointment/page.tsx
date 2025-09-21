"use client";
import React, { useState } from "react";

const initialForm = {
  name: "",
  company: "",
  email: "",
  date: "",
  time: ""
};

const AppointmentPage = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    // TODO: Send appointment data to backend
    setTimeout(() => {
      setSuccess("Appointment confirmed!");
      setForm(initialForm);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center w-full bg-white">
      <h1 className="text-3xl font-bold mb-8 mt-8 text-amber-700">Book Your Appointment here..</h1>
      <form onSubmit={handleSubmit} className="bg-amber-50 p-8 rounded-lg shadow-md w-full max-w-lg">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full mb-4 p-2 border rounded text-gray-700"
          required
        />
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full mb-4 p-2 border rounded text-gray-700"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full mb-4 p-2 border rounded text-gray-700"
          required
        />
        <label className="block mb-2 font-semibold text-black">Available Dates</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded text-gray-700"
          required
        />
        <label className="block mb-2 font-semibold text-black">Available Time Slots</label>
        <select
          name="time"
          value={form.time}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded text-gray-700"
          required
        >
          <option value="">Select a time slot</option>
          <option value="09:00">09:00 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="14:00">02:00 PM</option>
          <option value="16:00">04:00 PM</option>
        </select>
        <button
          type="submit"
          className="bg-amber-700 text-white px-6 py-2 rounded font-semibold hover:bg-amber-800 transition-colors w-full"
          disabled={loading}
        >
          {loading ? "Confirming..." : "Confirm Appointment"}
        </button>
        {success && <div className="mt-4 text-green-700">{success}</div>}
      </form>
    </div>
  );
};

export default AppointmentPage;