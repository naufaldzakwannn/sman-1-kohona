import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../services/authServices";
import { useAuth } from "../contexts/AuthContext";
import { User, Menu, X, Home, Contact, Info, LogIn } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [navigate]);

  const handleLogout = () => {
    logoutAdmin();
    logout();
    setIsOpen(false);
    setOpenDropdown(null);
    window.location.href = "/hero";
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  const optionsProfile = [
    { name: "Tentang Sekolah", path: "/about", icon: "🏫" },
    { name: "Unsur Pimpinan", path: "/unsur-pimpinan", icon: "👨‍💼" },
    { name: "Struktur Sekolah", path: "/struktur-sekolah", icon: "📊" },
  ];

  const optionsProgram = [
    { name: "Akademik", path: "/program/akademik", icon: "📚" },
    { name: "Kesiswaan", path: "/program/kesiswaan", icon: "👨‍🎓" },
    { name: "Literasi", path: "/program/literasi", icon: "📖" },
    { name: "Lingkungan", path: "/program/lingkungan", icon: "🌱" },
  ];

  const optionsEkstrakulikuler = [
    { name: "Kesenian", path: "/ekstra/kesenian", icon: "🎭" },
    { name: "Olahraga", path: "/ekstra/olahraga", icon: "⚽" },
    { name: "Olimpiade", path: "/ekstra/olimpiade", icon: "🏆" },
    { name: "Pramuka", path: "/ekstra/pramuka", icon: "🎯" },
  ];

  const optionsInformasi = [
    { name: "Pendaftaran", path: "/informasi/pendaftaran", icon: "📝" },
    { name: "Beasiswa", path: "/informasi/beasiswa", icon: "💰" },
  ];

  const adminMenuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: "📊" },
    { name: "Data Guru", path: "/admin/dataguru", icon: "👨‍🏫" },
    { name: "Data Sekolah", path: "/admin/datamurid", icon: "🏫" },
    { name: "Data Kelas", path: "/admin/datakelas", icon: "📚" },
  ];

  const renderDropdownItems = (options) => (
    <ul className="absolute left-0 w-56 mt-2 bg-black/95 backdrop-blur-md rounded-md shadow-xl border border-cyan-500/20 overflow-hidden z-50">
      {options.map((opt) => (
        <li key={opt.path}>
          <Link to={opt.path} onClick={closeAllDropdowns} className="flex items-center gap-3 px-4 py-3 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-200 group">
            <span className="text-lg">{opt.icon}</span>
            <span className="group-hover:translate-x-1 transition-transform">{opt.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );

  const renderMobileDropdownItems = (options) => (
    <ul className="ml-4 mt-2 space-y-2 border-l-2 border-cyan-500/30 pl-4">
      {options.map((opt) => (
        <li key={opt.path}>
          <Link to={opt.path} onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-2 text-cyan-400 hover:bg-cyan-500/10 rounded-md transition">
            <span>{opt.icon}</span>
            {opt.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={`fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md text-cyan-400 flex justify-between items-center px-4 lg:px-10 py-4 shadow-lg z-50 transition-all duration-300 ${isScrolled ? "shadow-cyan-500/10" : ""}`}>
      {/* Logo */}
      <Link to="/" className="text-xl font-bold tracking-wider hover:text-cyan-300 transition-colors flex items-center gap-2" onClick={closeAllDropdowns}>
        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
          <span className="text-black font-bold text-sm">K</span>
        </div>
        SMAN 1 KONOHA
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-1">
        {/* Home */}
        <Link to="/" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-300 transition-all group" onClick={closeAllDropdowns}>
          <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span>Beranda</span>
        </Link>

        {/* Profile Dropdown */}
        <div className="relative">
          <button onClick={() => toggleDropdown("profile")} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-300 transition-all group">
            <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Profil</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === "profile" ? "rotate-180" : ""}`} />
          </button>
          {openDropdown === "profile" && renderDropdownItems(optionsProfile)}
        </div>

        {/* Program Dropdown */}
        <div className="relative">
          <button onClick={() => toggleDropdown("program")} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-300 transition-all group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-4 h-4 fill-current group-hover:scale-110 transition-transform">
              <path d="M320 256A128 128 0 1 0 320 0a128 128 0 1 0 0 256zM96 288c-53 0-96 43-96 96v16c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V384c0-53-43-96-96-96H96z" />
            </svg>
            <span>Program</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === "program" ? "rotate-180" : ""}`} />
          </button>
          {openDropdown === "program" && renderDropdownItems(optionsProgram)}
        </div>

        {/* Ekstrakulikuler Dropdown */}
        <div className="relative">
          <button onClick={() => toggleDropdown("ekstra")} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-300 transition-all group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-4 h-4 fill-current group-hover:scale-110 transition-transform">
              <path d="M320 256A128 128 0 1 0 320 0a128 128 0 1 0 0 256zM96 288c-53 0-96 43-96 96v16c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V384c0-53-43-96-96-96H96z" />
            </svg>
            <span>Ekstrakulikuler</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === "ekstra" ? "rotate-180" : ""}`} />
          </button>
          {openDropdown === "ekstra" && renderDropdownItems(optionsEkstrakulikuler)}
        </div>

        {/* Informasi Dropdown */}
        <div className="relative">
          <button onClick={() => toggleDropdown("informasi")} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-300 transition-all group">
            <Info className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Informasi</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === "informasi" ? "rotate-180" : ""}`} />
          </button>
          {openDropdown === "informasi" && renderDropdownItems(optionsInformasi)}
        </div>

        {/* Kontak */}
        <Link to="/contact" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-300 transition-all group" onClick={closeAllDropdowns}>
          <Contact className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span>Kontak</span>
        </Link>
      </div>

      {/* Desktop Auth Section */}
      <div className="hidden md:flex items-center">
        {user ? (
          <div className="relative group">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-300 transition-all">
              <User className="w-4 h-4" />
              <span className="max-w-32 truncate">{user.name}</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            <div className="absolute right-0 w-48 mt-2 bg-black/95 backdrop-blur-md rounded-md shadow-xl border border-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {adminMenuItems.map((item) => (
                <Link key={item.path} to={item.path} className="flex items-center gap-3 px-4 py-3 text-cyan-400 hover:bg-cyan-500 hover:text-black transition">
                  <span>{item.icon}</span>
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-cyan-500/20">
                <button onClick={handleLogout} className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-500 hover:text-black transition">
                  <span>🚪</span>
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Link to="/login" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500 hover:text-black transition-all group border border-cyan-500/30">
            <LogIn className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Login</span>
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-cyan-500/10 transition-all">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-cyan-500/20 md:hidden">
          <div className="p-4 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Home */}
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-cyan-500/10 transition">
              <Home className="w-5 h-5" />
              Beranda
            </Link>

            {/* Profile Mobile */}
            <div>
              <button onClick={() => toggleDropdown("profile-mobile")} className="flex items-center gap-3 w-full px-3 py-3 rounded-lg hover:bg-cyan-500/10 transition">
                <User className="w-5 h-5" />
                Profil
                <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${openDropdown === "profile-mobile" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "profile-mobile" && renderMobileDropdownItems(optionsProfile)}
            </div>

            {/* Program Mobile */}
            <div>
              <button onClick={() => toggleDropdown("program-mobile")} className="flex items-center gap-3 w-full px-3 py-3 rounded-lg hover:bg-cyan-500/10 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 fill-current">
                  <path d="M320 256A128 128 0 1 0 320 0a128 128 0 1 0 0 256zM96 288c-53 0-96 43-96 96v16c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V384c0-53-43-96-96-96H96z" />
                </svg>
                Program
                <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${openDropdown === "program-mobile" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "program-mobile" && renderMobileDropdownItems(optionsProgram)}
            </div>

            {/* Ekstrakulikuler Mobile */}
            <div>
              <button onClick={() => toggleDropdown("ekstra-mobile")} className="flex items-center gap-3 w-full px-3 py-3 rounded-lg hover:bg-cyan-500/10 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 fill-current">
                  <path d="M320 256A128 128 0 1 0 320 0a128 128 0 1 0 0 256zM96 288c-53 0-96 43-96 96v16c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V384c0-53-43-96-96-96H96z" />
                </svg>
                Ekstrakulikuler
                <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${openDropdown === "ekstra-mobile" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "ekstra-mobile" && renderMobileDropdownItems(optionsEkstrakulikuler)}
            </div>

            {/* Informasi Mobile */}
            <div>
              <button onClick={() => toggleDropdown("informasi-mobile")} className="flex items-center gap-3 w-full px-3 py-3 rounded-lg hover:bg-cyan-500/10 transition">
                <Info className="w-5 h-5" />
                Informasi
                <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${openDropdown === "informasi-mobile" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "informasi-mobile" && renderMobileDropdownItems(optionsInformasi)}
            </div>

            {/* Kontak Mobile */}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-cyan-500/10 transition">
              <Contact className="w-5 h-5" />
              Kontak Kami
            </Link>

            {/* Auth Section Mobile */}
            <div className="pt-4 border-t border-cyan-500/20">
              {user ? (
                <>
                  <div className="px-3 py-2 text-cyan-300 flex items-center gap-3">
                    <User className="w-5 h-5" />
                    <span className="truncate">{user.name}</span>
                  </div>
                  {adminMenuItems.map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-cyan-500/10 transition ml-4">
                      <span>{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}
                  <button onClick={handleLogout} className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-red-500/20 text-red-400 transition mt-2">
                    <span>🚪</span>
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-lg bg-cyan-500/10 hover:bg-cyan-500 hover:text-black transition">
                  <LogIn className="w-5 h-5" />
                  Login Admin
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)} />}
    </nav>
  );
}
