import { useState } from "react";
import { Eye, EyeOff, User } from "lucide-react";
import { motion } from "framer-motion";
import { loginAdmin } from "../services/authServices";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const user = await loginAdmin(formData.email, formData.password);
      console.log("Login berhasil:", user);

      navigate("/"); // redirect
    } catch (err) {
      console.error("Login gagal:", err.response?.data || err.message);
      alert("Login gagal, periksa email atau password.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-white to-blue-50 flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="text-blue-700" size={34} />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-blue-900">Login</h2>
          <p className="text-gray-600 mt-2 text-sm">Silakan masuk ke dashboard admin</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukkan email anda"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Masukkan password anda"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
              <button type="button" className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
            {loading ? "Loading..." : "Masuk"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
