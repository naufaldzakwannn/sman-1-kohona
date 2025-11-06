import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { programData } from "../../services/programService";

export default function ProgramSekolah() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <motion.div className="text-center mb-14" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Program Sekolah</h1>
        <p className="text-gray-600">Berbagai program unggulan untuk meningkatkan kualitas pendidikan</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {programData.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition relative group w-80"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-56 overflow-hidden">
              <img src={item.gambar} alt={item.nama} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            </div>

            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.nama}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.deskripsi}</p>
              <Link to={item.path} className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition text-sm">
                Lihat Selengkapnya
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
