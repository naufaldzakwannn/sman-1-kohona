import { motion } from "framer-motion";
import { pimpinanSekolah } from "../services/unsurPimpinan";

export default function UnsurPimpinan() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-6">
      {/* Judul Halaman */}
      <motion.div className="text-center mb-14" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Unsur Pimpinan Sekolah</h1>
        <p className="text-gray-600">SMA Negeri 1 Konoha</p>
      </motion.div>

      {/* Grid Pimpinan */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
        {pimpinanSekolah.map((item, i) => (
          <motion.div key={i} className="relative group bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
            {/* Foto */}
            <div className="h-72 overflow-hidden">
              <img src={item.foto} alt={item.nama} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            </div>

            {/* Nama dan Jabatan */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{item.nama}</h3>
              <p className="text-blue-700 font-medium text-sm mt-1">{item.jabatan}</p>
            </div>

            {/* Hover Detail */}
            <div className="absolute inset-0 bg-indigo-900 bg-opacity-90 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 px-4 text-center">
              <h4 className="text-lg font-semibold mb-2">{item.nama}</h4>
              <p className="text-sm text-gray-200">{item.deskripsi}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
