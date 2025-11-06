import { motion } from "framer-motion";
import { Building2, Users, Briefcase, BookOpen, User, Shield } from "lucide-react";

export default function StrukturSekolah() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const dataStatistik = [
    { label: "Guru", jumlah: 45, color: "text-green-600" },
    { label: "Staf TU", jumlah: 12, color: "text-purple-600" },
    { label: "Siswa", jumlah: 860, color: "text-blue-600" },
    { label: "Petugas & Satpam", jumlah: 5, color: "text-gray-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4 overflow-hidden">
      {/* Judul */}
      <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold text-blue-900">Struktur Organisasi Sekolah</h1>
        <p className="text-gray-600 mt-2">SMA Negeri 1 Konoha</p>
      </motion.div>

      {/* Struktur Hierarki */}
      <div className="flex flex-col items-center relative">
        {/* Garis tengah */}
        <div className="absolute w-1 bg-gray-300 top-0 bottom-0 left-1/2 transform -translate-x-1/2 animate-pulse"></div>

        {/* Kepala Sekolah */}
        <motion.div className="relative z-10 bg-indigo-800 text-white px-8 py-6 rounded-2xl shadow-lg w-96 text-center mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
          <Building2 className="mx-auto text-yellow-400 mb-3" size={36} />
          <h2 className="font-semibold text-xl">Kepala Sekolah</h2>
          <p className="text-sm mt-2">Drs. Ahmad Sudirman, M.Pd</p>
        </motion.div>

        {/* Garis vertikal */}
        <div className="w-1 h-16 bg-gray-300 animate-pulse"></div>

        {/* 3 Wakil Kepala Sekolah */}
        <div className="relative flex flex-col items-center">
          {/* Garis horizontal */}
          <div className="absolute top-1/2 w-[700px] h-1 bg-gray-300 left-1/2 transform -translate-x-1/2 animate-pulse"></div>

          <div className="flex flex-wrap justify-center gap-12 mt-8">
            <motion.div
              className="relative bg-white px-8 py-6 rounded-2xl shadow-md text-center border-t-4 border-blue-500 w-80 hover:shadow-xl transition"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <Briefcase className="mx-auto text-blue-500 mb-3" size={32} />
              <h3 className="font-semibold text-lg">Wakil Kepala Sekolah Bidang Kurikulum</h3>
              <p className="text-sm text-gray-600 mt-2">Ibu Ratna Dewi, S.Pd</p>
            </motion.div>

            <motion.div
              className="relative bg-white px-8 py-6 rounded-2xl shadow-md text-center border-t-4 border-green-500 w-80 hover:shadow-xl transition"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <Briefcase className="mx-auto text-green-500 mb-3" size={32} />
              <h3 className="font-semibold text-lg">Wakil Kepala Sekolah Bidang Kesiswaan</h3>
              <p className="text-sm text-gray-600 mt-2">Bapak Rudi Hartono, S.Pd</p>
            </motion.div>

            <motion.div
              className="relative bg-white px-8 py-6 rounded-2xl shadow-md text-center border-t-4 border-orange-500 w-80 hover:shadow-xl transition"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
            >
              <Briefcase className="mx-auto text-orange-500 mb-3" size={32} />
              <h3 className="font-semibold text-lg">Wakil Kepala Sekolah Bidang Sarana & Prasarana</h3>
              <p className="text-sm text-gray-600 mt-2">Ibu Lina Mardiani, M.Pd</p>
            </motion.div>
          </div>
        </div>

        <div className="w-1 h-20 bg-gray-300 animate-pulse mt-12"></div>

        {/* Guru & TU */}
        <div className="relative flex flex-col items-center">
          <div className="absolute top-1/2 w-[600px] h-1 bg-gray-300 left-1/2 transform -translate-x-1/2 animate-pulse"></div>

          <div className="flex flex-wrap justify-center gap-12 mt-8">
            <motion.div
              className="relative bg-white px-8 py-6 rounded-2xl shadow-md text-center border-t-4 border-green-500 w-80 hover:shadow-xl transition"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
            >
              <Users className="mx-auto text-green-500 mb-3" size={32} />
              <h3 className="font-semibold text-lg">Guru & Tenaga Pengajar</h3>
              <p className="text-sm text-gray-600 mt-2">Koordinator: Bapak Hendra, S.Pd</p>
            </motion.div>

            <motion.div
              className="relative bg-white px-8 py-6 rounded-2xl shadow-md text-center border-t-4 border-purple-500 w-80 hover:shadow-xl transition"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
            >
              <User className="mx-auto text-purple-500 mb-3" size={32} />
              <h3 className="font-semibold text-lg">Staf Administrasi (TU)</h3>
              <p className="text-sm text-gray-600 mt-2">Koordinator: Ibu Lilis, A.Md</p>
            </motion.div>
          </div>
        </div>

        <div className="w-1 h-20 bg-gray-300 animate-pulse mt-12"></div>

        {/* OSIS & Satpam */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <motion.div
            className="bg-white px-8 py-6 rounded-2xl shadow-md text-center border-t-4 border-orange-500 w-80 hover:shadow-xl transition"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
          >
            <BookOpen className="mx-auto text-orange-500 mb-3" size={32} />
            <h3 className="font-semibold text-lg">OSIS & Ekstrakurikuler</h3>
            <p className="text-sm text-gray-600 mt-2">Ketua OSIS: Naruto Uzumaki</p>
          </motion.div>

          <motion.div className="bg-white px-8 py-6 rounded-2xl shadow-md text-center border-t-4 border-gray-600 w-80 hover:shadow-xl transition" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={7}>
            <Shield className="mx-auto text-gray-600 mb-3" size={32} />
            <h3 className="font-semibold text-lg">Keamanan & Kebersihan</h3>
            <p className="text-sm text-gray-600 mt-2">Koordinator: Pak Irfan</p>
          </motion.div>
        </div>
      </div>

      {/* Statistik Sekolah */}
      <div className="max-w-5xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        {dataStatistik.map((item, idx) => (
          <motion.div key={idx} className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx + 8}>
            <p className={`text-4xl font-bold ${item.color}`}>{item.jumlah}</p>
            <p className="text-gray-700 mt-2">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
