import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8 px-6 md:px-12 mt-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Kolom 1 - Logo Sekolah */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-3">SMAN 1 KONOHA</h2>
          <p className="text-sm text-gray-400 leading-relaxed">Sekolah unggulan yang berkomitmen mencetak generasi berprestasi, berkarakter, dan berakhlak mulia.</p>
        </div>

        {/* Kolom 2 - Tautan Cepat */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Tautan Cepat</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-cyan-400 transition">
                Beranda
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-cyan-400 transition">
                Profil Sekolah
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-cyan-400 transition">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 3 - Kontak Sekolah */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Kontak Sekolah</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-cyan-400 mt-1" />
              <span>Jl. Hokage No. 1, Desa Konoha, Kec. Konoha Selatan</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-cyan-400" />
              <span>(021) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-cyan-400" />
              <span>info@sman1konoha.sch.id</span>
            </li>
          </ul>
        </div>

        {/* Kolom 4 - Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Ikuti Kami</h3>
          <div className="flex gap-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-cyan-500 transition">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-cyan-500 transition">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-cyan-500 transition">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© {new Date().getFullYear()} SMAN 1 Konoha. All rights reserved.</p>
        <p className="mt-3 md:mt-0">
          Designed with ❤️ by <span className="text-cyan-400 font-medium">Tim IT SMAN 1 Konoha</span>
        </p>
      </div>
    </footer>
  );
}
