import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import About from "../pages/About";
import Contact from "../pages/Contact";
import StrukturSekolah from "../pages/StrukturSekolah";
import UnsurPimpinan from "../pages/UnsurPimpinan";
import Login from "../pages/Login";

// Program Sekolah
import Akademik from "../pages/ProgramSekolah/Akademik";
import Kesiswaan from "../pages/ProgramSekolah/Kesiswaan";
import Literasi from "../pages/ProgramSekolah/Literasi";
import Lingkungan from "../pages/ProgramSekolah/Lingkungan";

// Ekstrakulikuler
import Kesenian from "../pages/Ekstrakulikuler/Kesenian";
import Olahraga from "../pages/Ekstrakulikuler/Olahraga";
import Olimpiade from "../pages/Ekstrakulikuler/Olimpiade";
import Pramuka from "../pages/Ekstrakulikuler/Pramuka";

// Informasi
import Pendaftaran from "../pages/Informasi/Pendaftaran";
import Beasiswa from "../pages/Informasi/Beasiswa";

export default function ConfigRoutes() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Hero key="home" />} />
        <Route path="/about" element={<About key="about" />} />
        <Route path="/contact" element={<Contact key="contact" />} />
        <Route path="/struktur-sekolah" element={<StrukturSekolah key="struktur" />} />
        <Route path="/unsur-pimpinan" element={<UnsurPimpinan key="unsur" />} />

        {/* Program Sekolah */}
        <Route path="/program/akademik" element={<Akademik key="akademik" />} />
        <Route path="/program/kesiswaan" element={<Kesiswaan key="kesiswaan" />} />
        <Route path="/program/literasi" element={<Literasi key="literasi" />} />
        <Route path="/program/lingkungan" element={<Lingkungan key="lingkungan" />} />

        {/* Ekstrakulikuler */}
        <Route path="/ekstra/kesenian" element={<Kesenian key="kesenian" />} />
        <Route path="/ekstra/olahraga" element={<Olahraga key="olahraga" />} />
        <Route path="/ekstra/olimpiade" element={<Olimpiade key="olimpiade" />} />
        <Route path="/ekstra/pramuka" element={<Pramuka key="pramuka" />} />

        {/* Informasi */}
        <Route path="/informasi/pendaftaran" element={<Pendaftaran key="pendaftaran" />} />
        <Route path="/informasi/beasiswa" element={<Beasiswa key="beasiswa" />} />
      </Routes>
      <Footer />
    </>
  );
}
