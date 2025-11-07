import { motion } from "framer-motion";
import { Compass, Users } from "lucide-react";

export default function Pramuka() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-6">
      <motion.div className="text-center mb-14" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Ekstrakurikuler Pramuka</h1>
        <p className="text-gray-600">Membentuk karakter disiplin, tangguh, dan mandiri.</p>
      </motion.div>

      <div className="flex flex-col items-center max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-10 text-center">
        <Users className="text-yellow-600 mb-4" size={60} />
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Kegiatan Pramuka</h3>
        <p className="text-gray-600 mb-4">Pramuka di sekolah kami bertujuan untuk melatih kepemimpinan, kerja sama, dan rasa tanggung jawab melalui kegiatan seperti perkemahan, lomba baris-berbaris, dan bakti sosial.</p>
        <Compass className="text-orange-500 mt-2" size={50} />
      </div>
    </div>
  );
}
