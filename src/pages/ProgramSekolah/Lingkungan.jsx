import { motion } from "framer-motion";

export default function Lingkungan() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Program Lingkungan & Adiwiyata</h1>
        <img src="/src/assets/lingkungan.jpg" alt="Program Lingkungan" className="rounded-2xl shadow-md w-full max-h-96 object-cover mb-8" />
        <p className="text-gray-700 leading-relaxed">
          Program lingkungan dan adiwiyata berfokus pada pembentukan sekolah hijau dan sehat. Siswa diajak menjaga kebersihan, melakukan daur ulang, menanam pohon, dan menciptakan inovasi ramah lingkungan agar sekolah menjadi tempat belajar
          yang asri dan nyaman.
        </p>
      </motion.div>
    </div>
  );
}
