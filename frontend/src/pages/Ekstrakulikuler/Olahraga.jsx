import { motion } from "framer-motion";
import { Volleyball, Dumbbell, Bike } from "lucide-react";

export default function Olahraga() {
  const kegiatan = [
    { nama: "Futsal", deskripsi: "Melatih kerjasama tim dan ketahanan fisik.", icon: <Volleyball className="text-green-500" size={40} /> },
    { nama: "Basket", deskripsi: "Meningkatkan koordinasi, fokus, dan semangat kompetitif.", icon: <Dumbbell className="text-orange-500" size={40} /> },
    { nama: "Bersepeda", deskripsi: "Membangun stamina dan kesehatan melalui kegiatan luar ruangan.", icon: <Bike className="text-blue-500" size={40} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-6">
      <motion.div className="text-center mb-14" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Ekstrakurikuler Olahraga</h1>
        <p className="text-gray-600">Sehat, tangguh, dan sportif bersama kegiatan olahraga</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {kegiatan.map((item, i) => (
          <motion.div key={i} className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition group" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.nama}</h3>
            <p className="text-gray-600 text-sm">{item.deskripsi}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
