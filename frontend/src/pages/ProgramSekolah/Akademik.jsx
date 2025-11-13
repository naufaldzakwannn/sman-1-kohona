import { motion } from "framer-motion";

export default function Akademik() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Program Akademik</h1>
        <img src="/src/assets/akademik.jpg" alt="Program Akademik" className="rounded-2xl shadow-md w-full max-h-96 object-cover mb-8" />
        <p className="text-gray-700 leading-relaxed">
          Program akademik bertujuan meningkatkan kualitas pembelajaran di sekolah melalui kurikulum merdeka, pelatihan guru, serta sistem evaluasi berbasis kompetensi. Fokusnya adalah menciptakan proses belajar yang aktif, kolaboratif, dan
          berorientasi proyek agar siswa siap menghadapi tantangan masa depan.
        </p>
      </motion.div>
    </div>
  );
}
