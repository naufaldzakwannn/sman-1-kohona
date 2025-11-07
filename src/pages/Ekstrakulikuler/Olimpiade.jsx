import { motion } from "framer-motion";
import { Brain, BookOpen, Calculator } from "lucide-react";

export default function Olimpiade() {
  const bidang = [
    { nama: "Matematika", deskripsi: "Membimbing siswa menghadapi olimpiade nasional dan internasional.", icon: <Calculator className="text-purple-500" size={40} /> },
    { nama: "IPA", deskripsi: "Melatih siswa dalam eksperimen dan penelitian ilmiah.", icon: <Brain className="text-teal-500" size={40} /> },
    { nama: "Bahasa", deskripsi: "Mengasah kemampuan debat dan karya tulis ilmiah bahasa Indonesia & Inggris.", icon: <BookOpen className="text-blue-500" size={40} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-6">
      <motion.div className="text-center mb-14" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Ekstrakurikuler Olimpiade</h1>
        <p className="text-gray-600">Membentuk siswa berprestasi dan kompetitif dalam bidang akademik</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {bidang.map((item, i) => (
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
