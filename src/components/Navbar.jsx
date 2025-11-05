import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState("Program");
  const [selectedInformasi, setSelectedInformasi] = useState("Informasi");

  const optionsProgram = ["IPA", "IPS", "AGAMA"];
  const optionsInformasi = ["Pendaftaran", "Beasiswa", "Extrakulikuler"];

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-cyan-400 flex justify-between items-center px-10 py-5 shadow-md z-50 transition-all">
      {/* Logo */}
      <h1 className="text-xl font-semibold tracking-wide">
        <a href="/">SMAN 1 KONOHA</a>
      </h1>

      {/* MENU DESKTOP */}
      <ul className="hidden md:flex gap-8 items-center">
        <li>
          <Link to="/" className="hover:text-cyan-400">
            Beranda
          </Link>
        </li>

        <li>
          <Link to="/about" className="hover:text-cyan-400">
            Tentang Kami
          </Link>
        </li>

        {/* DROPDOWN PROGRAM */}
        <div className="relative inline-block text-left">
          <button onClick={() => toggleDropdown("program")} className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-cyan-500/10 transition-all">
            {selectedProgram}
            <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${openDropdown === "program" ? "rotate-180" : ""}`} />
          </button>

          {openDropdown === "program" && (
            <ul className="absolute left-0 w-40 mt-2 bg-black rounded-md shadow-lg overflow-hidden">
              {optionsProgram.map((option) => (
                <li
                  key={option}
                  onClick={() => {
                    setSelectedProgram(option);
                    setOpenDropdown(null);
                  }}
                  className="px-4 py-2 cursor-pointer text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* DROPDOWN INFORMASI */}
        <div className="relative inline-block text-left">
          <button onClick={() => toggleDropdown("informasi")} className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-cyan-500/10 transition-all">
            {selectedInformasi}
            <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${openDropdown === "informasi" ? "rotate-180" : ""}`} />
          </button>

          {openDropdown === "informasi" && (
            <ul className="absolute left-0 w-40 mt-2 bg-black rounded-md shadow-lg overflow-hidden">
              {optionsInformasi.map((option) => (
                <li
                  key={option}
                  onClick={() => {
                    setSelectedInformasi(option);
                    setOpenDropdown(null);
                  }}
                  className="px-4 py-2 cursor-pointer text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        <li>
          <Link to="/contact" className="hover:text-cyan-400">
            Kontak Kami
          </Link>
        </li>
      </ul>

      {/* ===== MENU MOBILE BUTTON ===== */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-cyan-400 focus:outline-none">
        {isOpen ? (
          // Icon close
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Icon menu
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* ===== MENU MOBILE ===== */}
      <div className={`absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[400px] py-4" : "max-h-0"}`}>
        <ul className="flex flex-col items-center gap-4 text-cyan-400">
          <li>
            <a href="#" className="hover:text-cyan-200 transition" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-200 transition" onClick={() => setIsOpen(false)}>
              Tentang Kami
            </a>
          </li>

          {/* DROPDOWN MOBILE: PROGRAM */}
          <li className="w-full flex flex-col items-center">
            <button onClick={() => toggleDropdown("program")} className="flex items-center justify-center gap-2 py-2 hover:text-cyan-200 transition">
              {selectedProgram}
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "program" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "program" && (
              <ul className="flex flex-col w-full items-center mt-1 space-y-1">
                {optionsProgram.map((option) => (
                  <li
                    key={option}
                    onClick={() => {
                      setSelectedProgram(option);
                      setOpenDropdown(null);
                    }}
                    className="cursor-pointer hover:text-cyan-200"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* DROPDOWN MOBILE: INFORMASI */}
          <li className="w-full flex flex-col items-center">
            <button onClick={() => toggleDropdown("informasi")} className="flex items-center justify-center gap-2 py-2 hover:text-cyan-200 transition">
              {selectedInformasi}
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "informasi" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "informasi" && (
              <ul className="flex flex-col w-full items-center mt-1 space-y-1">
                {optionsInformasi.map((option) => (
                  <li
                    key={option}
                    onClick={() => {
                      setSelectedInformasi(option);
                      setOpenDropdown(null);
                    }}
                    className="cursor-pointer hover:text-cyan-200"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <a href="#" className="hover:text-cyan-200 transition" onClick={() => setIsOpen(false)}>
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
