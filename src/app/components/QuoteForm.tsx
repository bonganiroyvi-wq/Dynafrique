"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🔧 Later, connect this to Supabase, Airtable, or email API
    console.log("Lead captured:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-100 text-green-700 p-6 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-2">✅ Quote Request Sent!</h2>
        <p>Thank you, {formData.name}. Our team will contact you soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg space-y-6 max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-primary text-center">Request a Quote</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
        />
        <input
          name="location"
          type="text"
          placeholder="Your Location (e.g., Nelspruit, Thaba Chweu)"
          value={formData.location}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
        />
      </div>

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
        className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-primary focus:outline-none"
      >
        <option value="">Select a Service</option>
        <option value="solar">Solar Installation</option>
        <option value="battery">Battery Backup</option>
        <option value="fuel">Bulk Fuel Supply</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell us more about your energy needs..."
        value={formData.message}
        onChange={handleChange}
        rows={4}
        className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-primary focus:outline-none"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-800 transition"
      >
        Submit Request
      </button>
    </form>
  );
}
