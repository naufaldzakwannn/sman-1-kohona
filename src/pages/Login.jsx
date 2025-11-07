import { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    // nanti bisa tambahkan logika autentikasi di sini
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <LogIn className="text-blue-700" size={34} />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-blue-900">Login</h2>
          <p className="text-gray-600 mt-2 text-sm">Silakan masuk untuk melanjutkan ke dashboard sekolah</p>
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

          <div className="flex justify-between items-center text-sm">
            {/* <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-600" />
              <span>Ingat saya</span>
            </label> */}
            <Link to="/forgot-password" className="text-blue-700 hover:underline">
              Lupa Password?
            </Link>
          </div>

          <button type="submit" className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-semibold transition duration-200">
            Masuk
          </button>
        </form>

        {/* <p className="text-center text-gray-600 text-sm mt-6">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-700 hover:underline font-medium">
            Daftar Sekarang
          </Link>
        </p> */}
      </motion.div>
    </div>
  );
}
