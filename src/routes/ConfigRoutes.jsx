import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import About from "../pages/About";
import Contact from "../pages/Contact";
import StrukturSekolah from "../pages/StrukturSekolah";
import UnsurPimpinan from "../pages/UnsurPimpinan";

// Program Sekolah
import Akademik from "../pages/ProgramSekolah/Akademik";
import Kesiswaan from "../pages/ProgramSekolah/Kesiswaan";
import Literasi from "../pages/ProgramSekolah/Literasi";
import Lingkungan from "../pages/ProgramSekolah/Lingkungan";

export default function ConfigRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/struktur-sekolah" element={<StrukturSekolah />} />
        <Route path="/unsur-pimpinan" element={<UnsurPimpinan />} />

        {/* Program Sekolah */}
        <Route path="/program/akademik" element={<Akademik />} />
        <Route path="/program/kesiswaan" element={<Kesiswaan />} />
        <Route path="/program/literasi" element={<Literasi />} />
        <Route path="/program/lingkungan" element={<Lingkungan />} />
      </Routes>
      <Footer />
    </>
  );
}
