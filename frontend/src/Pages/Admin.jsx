import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function Admin() {

  const isLoggedIn = localStorage.getItem("admin");

  if (!isLoggedIn) {
    return <Navigate to="/admin-login" />;
  }

  const [messages, setMessages] = useState([]);

  useEffect(() => {

    fetch("https://port-foliowebsite.onrender.com/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data));

  }, []);

  const logout = () => {

    localStorage.removeItem("admin");

    window.location.href = "/admin-login";
  };

  return (

    <div className="text-white p-10 min-h-screen bg-gray-900">

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-5xl font-bold">
          Admin Messages 📩
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

      <div className="grid gap-6">

        {messages.map((msg) => (

          <div
            key={msg._id}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg"
          >

            <h2 className="text-2xl font-bold">
              {msg.name}
            </h2>

            <p className="text-blue-400 mt-2">
              {msg.email}
            </p>

            <p className="text-gray-300 mt-4">
              {msg.message}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}