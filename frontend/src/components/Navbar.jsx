import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { getCurrentUser, logoutAdmin } from "../services/authServices";
import { User } from "lucide-react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const handleLogout = () => {
    logoutAdmin();
    setUser(null);
    window.location.href = "/"; // refresh ke home
  };

  const optionsProfile = [
    { name: "Tentang Sekolah", path: "/about" },
    { name: "Unsur Pimpinan", path: "/unsur-pimpinan" },
    { name: "Struktur Sekolah", path: "/struktur-sekolah" },
  ];

  const optionsProgram = [
    { name: "Akademik", path: "/program/akademik" },
    { name: "Kesiswaan", path: "/program/kesiswaan" },
    { name: "Literasi", path: "/program/literasi" },
    { name: "Lingkungan", path: "/program/lingkungan" },
  ];

  const optionsEkstrakulikuler = [
    { name: "Kesenian", path: "/ekstra/kesenian" },
    { name: "Olahraga", path: "/ekstra/olahraga" },
    { name: "Olimpiade", path: "/ekstra/olimpiade" },
    { name: "Pramuka", path: "/ekstra/pramuka" },
  ];

  const optionsInformasi = [
    { name: "Pendaftaran", path: "/informasi/pendaftaran" },
    { name: "Beasiswa", path: "/informasi/beasiswa" },
  ];

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-cyan-400 flex justify-between items-center px-10 py-5 shadow-md z-50 transition-all">
      {/* Logo */}
      <h1 className="text-xl font-semibold tracking-wide">
        <Link to="/">SMAN 1 KONOHA</Link>
      </h1>

      {/* MENU DESKTOP */}
      <ul className="hidden md:flex gap-8 items-center">
        {/* HOME */}
        <li className="flex items-center gap-2 hover:text-cyan-400 transition">
          <Link to="/" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-5 h-5 fill-current">
              <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z" />
            </svg>
            Beranda
          </Link>
        </li>

        {/* PROFIL */}
        <li className="relative">
          <button onClick={() => toggleDropdown("profile")} className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-cyan-500/10 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm89.6 32h-11.3c-22.4 10.3-47.2 16-73.3 16s-50.9-5.7-73.3-16h-11.3C64.5 288 0 352.5 0 432v16c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V432c0-79.5-64.5-144-134.4-144z" />
            </svg>
            Profil
            <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${openDropdown === "profile" ? "rotate-180" : ""}`} />
          </button>

          {openDropdown === "profile" && (
            <ul className="absolute left-0 w-44 mt-2 bg-black rounded-md shadow-lg overflow-hidden z-50">
              {optionsProfile.map((opt) => (
                <li key={opt.path}>
                  <Link to={opt.path} onClick={() => toggleDropdown(null)} className="block px-4 py-2 text-cyan-400 hover:bg-cyan-500 hover:text-black transition">
                    {opt.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* PROGRAM */}
        <li className="relative">
          <button onClick={() => toggleDropdown("program")} className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-cyan-500/10 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 fill-current">
              <path d="M320 256A128 128 0 1 0 320 0a128 128 0 1 0 0 256zM96 288c-53 0-96 43-96 96v16c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V384c0-53-43-96-96-96H96z" />
            </svg>
            Program
            <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${openDropdown === "program" ? "rotate-180" : ""}`} />
          </button>

          {openDropdown === "program" && (
            <ul className="absolute left-0 w-44 mt-2 bg-black rounded-md shadow-lg overflow-hidden z-50">
              {optionsProgram.map((opt) => (
                <li key={opt.path}>
                  <Link to={opt.path} onClick={() => toggleDropdown(null)} className="block px-4 py-2 text-cyan-400 hover:bg-cyan-500 hover:text-black transition">
                    {opt.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* EKSTRAKULIKULER */}
        <li className="relative">
          <button onClick={() => toggleDropdown("ekstra")} className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-cyan-500/10 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 fill-current">
              <path d="M320 256A128 128 0 1 0 320 0a128 128 0 1 0 0 256zM96 288c-53 0-96 43-96 96v16c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V384c0-53-43-96-96-96H96z" />
            </svg>
            Ekstrakulikuler
            <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${openDropdown === "ekstra" ? "rotate-180" : ""}`} />
          </button>

          {openDropdown === "ekstra" && (
            <ul className="absolute left-0 w-44 mt-2 bg-black rounded-md shadow-lg overflow-hidden z-50">
              {optionsEkstrakulikuler.map((opt) => (
                <li key={opt.path}>
                  <Link to={opt.path} onClick={() => toggleDropdown(null)} className="block px-4 py-2 text-cyan-400 hover:bg-cyan-500 hover:text-black transition">
                    {opt.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* INFORMASI */}
        <li className="relative">
          <button onClick={() => toggleDropdown("informasi")} className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-cyan-500/10 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
              <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM232 232c0-13.3 10.7-24 24-24s24 10.7 24 24V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V232zm24-104a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
            Informasi
            <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${openDropdown === "informasi" ? "rotate-180" : ""}`} />
          </button>

          {openDropdown === "informasi" && (
            <ul className="absolute left-0 w-44 mt-2 bg-black rounded-md shadow-lg overflow-hidden z-50">
              {optionsInformasi.map((opt) => (
                <li key={opt.path}>
                  <Link to={opt.path} onClick={() => toggleDropdown(null)} className="block px-4 py-2 text-cyan-400 hover:bg-cyan-500 hover:text-black transition">
                    {opt.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* KONTAK */}
        <li className="hover:text-cyan-400 transition">
          <Link to="/contact" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
              <path d="M511.1 387.6c1.5 9.2-2 18.6-8.8 25.3l-75.3 75.3c-9.6 9.6-24.5 12-36.6 5.9c-40.5-20.2-88-51.4-133.8-97.3s-77.1-93.3-97.3-133.8c-6.1-12.1-3.7-27 5.9-36.6l75.3-75.3c6.8-6.8 16.2-10.3 25.3-8.8c9.2 1.5 17.3 7.4 21.8 15.9l43.1 86.3c4.3 8.7 3.4 19-2.5 26.7l-30.9 40.2c15.7 25.8 39.3 53.3 64.2 78.1s52.3 48.5 78.1 64.2l40.2-30.9c7.6-5.9 18-6.8 26.7-2.5l86.3 43.1C503.7 370.3 509.6 378.4 511.1 387.6z" />
            </svg>
            Kontak Kami
          </Link>
        </li>

        {/* LOGIN */}
        {/* <li className="hover:text-cyan-400 transition">
          <Link to="/login" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
              <path d="M192 0c17.7 0 32 14.3 32 32V64H64V448H224v32c0 17.7-14.3 32-32 32H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0H192zM505 273l-144 136c-15.1 14.3-39 13.5-53.3-1.7s-13.5-39 1.7-53.3L369 288H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H369L309.3 158.9c-15.2-14.3-15.9-38.2-1.7-53.3s38.2-15.9 53.3-1.7l144 136c6.7 6.3 10.4 15 10.4 24s-3.7 17.7-10.4 24z" />
            </svg>
            Login
          </Link>
        </li> */}
      </ul>

      {/* LOGIN / ADMIN */}
      {user ? (
        <li className="relative group">
          <button className="flex items-center gap-2 hover:text-cyan-400 transition">
            <User className="w-5 h-5" />
            {user.name}
          </button>

          <ul className="absolute right-0 w-40 mt-2 bg-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition">
            <li>
              <Link to="/admin/dataguru" className="block px-4 py-2 hover:bg-cyan-500 hover:text-black transition">
                Data Guru
              </Link>
            </li>
            <li>
              <Link to="/admin/datamurid" className="block px-4 py-2 hover:bg-cyan-500 hover:text-black transition">
                Data Sekolah
              </Link>
            </li>
            <li>
              <Link to="/admin/datakelas" className="block px-4 py-2 hover:bg-cyan-500 hover:text-black transition">
                Data Kelas
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-red-500 hover:text-black transition">
                Logout
              </button>
            </li>
          </ul>
        </li>
      ) : (
        <li className="hover:text-cyan-400 transition">
          <Link to="/login" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
              <path d="M192 0c17.7 0 32 14.3 32 32V64H64V448H224v32c0 17.7-14.3 32-32 32H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0H192zM505 273l-144 136c-15.1 14.3-39 13.5-53.3-1.7s-13.5-39 1.7-53.3L369 288H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H369L309.3 158.9c-15.2-14.3-15.9-38.2-1.7-53.3s38.2-15.9 53.3-1.7l144 136c6.7 6.3 10.4 15 10.4 24s-3.7 17.7-10.4 24z" />
            </svg>
            Login
          </Link>
        </li>
      )}

      {/* ===== MENU MOBILE BUTTON ===== */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-cyan-400 focus:outline-none">
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </nav>
  );
}
