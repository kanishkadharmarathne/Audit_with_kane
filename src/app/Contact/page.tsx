"use client";
import React, { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const ContactPage = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    const res = await fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setSuccess("Message sent successfully!");
      setForm(initialForm);
    } else {
      setSuccess("Failed to send message.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <h1 className="text-3xl font-bold mb-8 text-amber-700 mt-10">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        <div>
        <form onSubmit={handleSubmit} className="bg-amber-50 p-8 rounded-lg shadow-md w-full h-full">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full mb-4 p-2 border rounded text-gray-600"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full mb-4 p-2 border rounded text-gray-600"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full mb-4 p-2 border rounded text-gray-600 h-32"
          required
        />
        <button
          type="submit"
          className="bg-amber-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-800 transition-colors w-full"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {success && <div className="mt-4 text-green-700">{success}</div>}
      </form>
      </div>
      <div>
        <h3 className="text-4xl text-black mb-4">Get in Touch With Us</h3>
        <h2 className="text-2xl text-gray-700 mb-4">We are here to answer your questions, discuss your business needs, and help you with professional audit and advisory services.</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.445514803561!2d80.5888902439771!3d7.256613283999906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae368d299aef96b%3A0x546e63520aa0d39d!2sUniversity%20of%20Peradeniya%2C%20Getambe!5e0!3m2!1sen!2slk!4v1758425401335!5m2!1sen!2slk"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      </div>
      
      
    </div>
  );
};

export default ContactPage;