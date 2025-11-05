const Contact = () => {
  return (
    <section className="min-h-screen pt-25 flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-700 to-black text-white">
      <div className="w-full max-w-2xl bg-cyan-700 shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Hubungi Kami</h2>

        {/* Form Kontak */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama</label>
            <input type="text" placeholder="Masukkan nama Anda" className="w-full border border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" placeholder="Masukkan email Anda" className="w-full border border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Pesan</label>
            <textarea placeholder="Tulis pesan Anda..." className="w-full border border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" rows={5}></textarea>
          </div>
          <button type="submit" className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-800 transition">
            Kirim Pesan
          </button>
        </form>

        {/* Info Tambahan */}
        <div className="mt-8 text-center text-white space-y-1">
          <p>Alamat: Jl. Contoh No.123, Jakarta</p>
          <p>Telepon: +62 812 3456 7890</p>
          <p>Email: sman1konoha@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
