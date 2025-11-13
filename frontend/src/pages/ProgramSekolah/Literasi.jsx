import { motion } from "framer-motion";

export default function Literasi() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Program Literasi & Numerasi</h1>
        <img src="/src/assets/literasi.jpg" alt="Program Literasi" className="rounded-2xl shadow-md w-full max-h-96 object-cover mb-8" />
        <p className="text-gray-700 leading-relaxed">
          Program literasi dan numerasi bertujuan menumbuhkan budaya membaca, menulis, dan berpikir logis di lingkungan sekolah. Kegiatan meliputi pojok baca, lomba menulis, pojok literasi digital, serta proyek numerasi interaktif.
        </p>
      </motion.div>
    </div>
  );
}
