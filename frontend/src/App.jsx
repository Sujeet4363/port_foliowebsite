import Admin from "./Pages/Admin";
import AdminLogin from "./Pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

import { Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/home.jsx";
import Contact from "./Pages/Contact.jsx";
import Portfolio from "./Pages/Portfolio.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <nav className="flex justify-between px-10 py-5 bg-gray-800">

        <h1 className="text-xl font-bold text-blue-400">
          Portfolio
        </h1>

        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>

          <Link to="/portfolio" className="hover:text-blue-400">
            Portfolio
          </Link>

          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
          <Link to="/admin-login" className="hover:text-red-400">
  Admin
</Link>
        </div>

      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route path="/admin-login" element={<AdminLogin />} />

      </Routes>

    </div>
  );
}