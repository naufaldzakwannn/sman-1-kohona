import { motion } from "framer-motion";

export default function Kesiswaan() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Program Kesiswaan</h1>
        <img src="/src/assets/kesiswaan.jpg" alt="Program Kesiswaan" className="rounded-2xl shadow-md w-full max-h-96 object-cover mb-8" />
        <p className="text-gray-700 leading-relaxed">
          Program kesiswaan berfokus pada pembinaan karakter, kepemimpinan, dan kedisiplinan siswa. Melalui OSIS, Pramuka, PMR, dan kegiatan sosial lainnya, siswa dilatih untuk menjadi pribadi yang tangguh, beretika, dan memiliki jiwa
          gotong royong.
        </p>
      </motion.div>
    </div>
  );
}
