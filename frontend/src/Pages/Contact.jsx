import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://port-foliowebsite.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log("Backend Response:", data);

      if (response.ok) {
        alert("Message Sent Successfully ✅");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message || data.error || "Backend error");
      }
    } catch (error) {
      console.log("Frontend Error:", error);
      alert("Backend server connect nahi ho raha");
    }

    setLoading(false);
  };

  return (
    <div className="text-white text-center mt-20">
      <h1 className="text-5xl font-bold mb-10">
        Contact Me 📩
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-2/3 md:w-1/2 mx-auto"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-4 rounded-lg bg-gray-800 text-white"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-4 rounded-lg bg-gray-800 text-white"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="p-4 rounded-lg bg-gray-800 text-white"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 py-3 rounded-lg"
        >
          {loading ? "Sending..." : "Send Message 🚀"}
        </button>
      </form>
    </div>
  );
}