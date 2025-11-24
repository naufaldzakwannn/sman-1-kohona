import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../services/authServices";
import { useAuth } from "../contexts/AuthContext";
import { User, Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validasi sederhana
    if (!formData.email || !formData.password) {
      setError("Email dan password harus diisi");
      setLoading(false);
      return;
    }

    try {
      const userData = await loginAdmin(formData.email, formData.password);
      login(userData); // Update context
      navigate("/");
    } catch (err) {
      setError(err.message || "Login gagal. Periksa email dan password Anda.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-300 to-cyan-200 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center">
                <User className="text-white" size={32} />
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 tracking-wide">SMAN 1 KONOHA</h1>
          <h2 className="text-2xl font-semibold text-white/90">Admin Dashboard</h2>
          <p className="text-white/80 mt-3 text-sm">Silakan masuk untuk mengelola konten website</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8">
          {error && <div className="mb-6 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-sm text-center">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-white text-sm font-medium mb-2 flex items-center gap-2">
                <Mail size={16} />
                Alamat Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="admin@smankonoha.sch.id"
                  className="w-full px-4 py-3 pl-11 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  required
                  disabled={loading}
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-white text-sm font-medium mb-2 flex items-center gap-2">
                <Lock size={16} />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Masukkan password"
                  className="w-full px-4 py-3 pl-11 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  required
                  disabled={loading}
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
                <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors" onClick={() => setShowPassword(!showPassword)} disabled={loading}>
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-white/80">
                <input type="checkbox" className="rounded bg-white/5 border-white/20 text-cyan-500 focus:ring-cyan-400" />
                <span className="ml-2">Ingat saya</span>
              </label>
              <button type="button" className="text-cyan-200 hover:text-cyan-100 transition-colors">
                Lupa password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-cyan-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Memproses...
                </div>
              ) : (
                "Masuk ke Dashboard"
              )}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 p-3 bg-white/5 rounded-lg border border-white/10">
            <p className="text-white/60 text-xs text-center">🔒 Hanya personel yang berwenang yang dapat mengakses dashboard ini</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-white/60 text-sm">© 2024 SMAN 1 Konoha. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
