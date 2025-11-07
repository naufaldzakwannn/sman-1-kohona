import { motion } from "framer-motion";
import { Music, Paintbrush, Mic2 } from "lucide-react";

export default function Kesenian() {
  const kegiatan = [
    {
      nama: "Band Sekolah",
      deskripsi: "Wadah bagi siswa untuk menyalurkan bakat bermusik dan tampil di berbagai acara sekolah.",
      icon: <Music className="text-indigo-500" size={40} />,
    },
    {
      nama: "Seni Lukis & Rupa",
      deskripsi: "Mengembangkan kemampuan visual dan kreativitas siswa melalui karya seni rupa.",
      icon: <Paintbrush className="text-pink-500" size={40} />,
    },
    {
      nama: "Vokal & Teater",
      deskripsi: "Mengasah kemampuan berbicara, menyanyi, dan ekspresi panggung dalam seni teater.",
      icon: <Mic2 className="text-red-500" size={40} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-6">
      <motion.div className="text-center mb-14" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Ekstrakurikuler Kesenian</h1>
        <p className="text-gray-600">Mengembangkan kreativitas dan ekspresi seni siswa</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {kegiatan.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition group relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.nama}</h3>
            <p className="text-gray-600 text-sm">{item.deskripsi}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
