import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    const adminEmail = "admin@gmail.com";
    const adminPassword = "123456";

    if (email === adminEmail && password === adminPassword) {

      localStorage.setItem("admin", "true");

      alert("Login Successful");

      navigate("/admin");

    } else {

      alert("Wrong Email or Password");

    }
  };

  return (

    <div className="flex justify-center items-center h-screen bg-gray-900">

      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-xl w-96 space-y-4"
      >

        <h1 className="text-3xl text-white font-bold text-center">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 rounded bg-gray-700 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 rounded bg-gray-700 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded text-white">
          Login
        </button>

      </form>

    </div>
  );
}