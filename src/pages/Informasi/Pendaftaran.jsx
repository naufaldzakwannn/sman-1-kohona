import { motion } from "framer-motion";

export default function Pendaftaran() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Informasi Pendaftaran</h1>
        <p className="text-gray-600 mb-8">Berikut informasi lengkap mengenai tata cara pendaftaran peserta didik baru.</p>

        <div className="bg-white shadow-md rounded-2xl p-8 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Syarat Pendaftaran</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Fotokopi ijazah terakhir</li>
            <li>Pas foto ukuran 3x4 (3 lembar)</li>
            <li>Formulir pendaftaran yang telah diisi</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
