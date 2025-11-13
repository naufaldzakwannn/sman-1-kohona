import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-6 flex flex-col items-center">
      {/* Header */}
      <motion.div className="text-center mb-14" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Kontak Kami</h1>
        <p className="text-gray-600">Hubungi kami untuk informasi lebih lanjut mengenai sekolah.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Form Kontak */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Pesan Anda telah dikirim! (simulasi)");
          }}
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Kirim Pesan</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Nama Lengkap</label>
            <input type="text" placeholder="Masukkan nama anda" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input type="email" placeholder="Masukkan email anda" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Pesan</label>
            <textarea placeholder="Tulis pesan anda di sini..." rows="5" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none" required></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 rounded-lg transition duration-200">
            Kirim Pesan
          </button>
        </motion.form>

        {/* Informasi Sekolah */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Informasi Sekolah</h2>

          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <MapPin className="text-blue-700" size={22} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Alamat</h4>
              <p className="text-gray-600 text-sm">Jl. Sakura No. 12, Konoha, Jawa Timur, Indonesia</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <Phone className="text-blue-700" size={22} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Telepon</h4>
              <p className="text-gray-600 text-sm">+62 812-3456-7890</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Mail className="text-blue-700" size={22} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Email</h4>
              <p className="text-gray-600 text-sm">info@sman1konoha.sch.id</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
