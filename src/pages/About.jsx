export default function About() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* HERO IMAGE */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-2xl mx-auto max-w-6xl shadow-lg">
        <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1920&q=80" alt="Gedung Sekolah" className="object-cover w-full h-full opacity-80 hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-lg">SMAN 1 Konoha</h1>
          <p className="mt-3 text-lg md:text-xl text-gray-200 max-w-2xl text-center">Membangun Generasi Cerdas, Kreatif, dan Berkarakter Unggul</p>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="max-w-6xl mx-auto mt-16 px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-cyan-400 mb-4">Tentang Sekolah</h2>
          <p className="text-gray-300 leading-relaxed">
            Sekolah merupakan lembaga pendidikan modern yang berkomitmen untuk mencetak siswa berprestasi dan berkarakter. Didukung oleh tenaga pengajar profesional, fasilitas lengkap, serta suasana belajar yang kondusif, kami terus
            berinovasi mengikuti perkembangan teknologi dan kebutuhan dunia modern.
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">Kami percaya bahwa pendidikan bukan hanya tentang akademik, tetapi juga tentang membentuk pribadi yang tangguh, kreatif, dan peduli terhadap sesama.</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" alt="Kegiatan belajar" className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-700" />
        </div>
      </div>

      {/* VISI & MISI */}
      <div className="max-w-6xl mx-auto mt-20 px-6 md:px-10">
        <h2 className="text-3xl font-semibold text-center text-cyan-400 mb-10">Visi & Misi Sekolah</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/70 rounded-2xl p-8 border border-cyan-500/30 shadow-md hover:shadow-cyan-400/20 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Visi</h3>
            <p className="text-gray-300 leading-relaxed">Menjadi sekolah unggulan yang menghasilkan generasi berkarakter kuat, berwawasan global, dan siap menghadapi tantangan masa depan dengan kecerdasan, integritas, dan kreativitas.</p>
          </div>
          <div className="bg-gray-800/70 rounded-2xl p-8 border border-cyan-500/30 shadow-md hover:shadow-cyan-400/20 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Misi</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Menyediakan pendidikan berkualitas berbasis karakter.</li>
              <li>Mengintegrasikan teknologi dalam proses belajar.</li>
              <li>Menumbuhkan semangat kreatif dan inovatif siswa.</li>
              <li>Membangun kepedulian sosial dan cinta lingkungan.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* PRESTASI SECTION */}
      <div className="max-w-6xl mx-auto mt-20 px-6 md:px-10">
        <h2 className="text-3xl font-semibold text-center text-cyan-400 mb-10">Prestasi & Keunggulan</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Juara Olimpiade Sains Nasional",
              img: "https://images.unsplash.com/photo-1610484826967-09c5720778a3?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Sekolah Ramah Lingkungan",
              img: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Laboratorium Digital Modern",
              img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-800/80 rounded-2xl overflow-hidden shadow-lg border border-cyan-500/20 hover:shadow-cyan-400/30 transition-all">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">Kami terus berinovasi dan memberikan kesempatan terbaik bagi siswa untuk mengembangkan potensi mereka.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
