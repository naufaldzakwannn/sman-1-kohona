import { motion } from "framer-motion";

export default function Beasiswa() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Informasi Beasiswa</h1>
        <p className="text-gray-600 mb-8">Sekolah kami memberikan berbagai jenis beasiswa bagi siswa berprestasi maupun yang membutuhkan bantuan finansial.</p>

        <div className="bg-white shadow-md rounded-2xl p-8 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Jenis Beasiswa</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Beasiswa Prestasi Akademik</li>
            <li>Beasiswa Non-Akademik (Olahraga, Seni, dsb.)</li>
            <li>Beasiswa Bantuan Ekonomi</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
