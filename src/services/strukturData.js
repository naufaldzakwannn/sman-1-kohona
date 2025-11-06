export const strukturData = [
  {
    id: 1,
    name: "Drs. Ahmad Sudirman, M.Pd",
    title: "Kepala Sekolah",
    image: "../src/assets/img3.jpg",
    children: [
      {
        id: 2,
        name: "Ibu Ratna Dewi, S.Pd",
        title: "Wakil Kepala Sekolah Bidang Kurikulum",
        image: "/images/ratna.jpg",
        children: [
          { id: 5, name: "Bapak Arif Santoso", title: "Ketua MGMP", image: "/images/arif.jpg" },
          { id: 6, name: "Ibu Lina Mardiani", title: "Guru Senior", image: "/images/lina.jpg" },
        ],
      },
      {
        id: 3,
        name: "Bapak Rudi Hartono, S.Pd",
        title: "Wakil Kepala Sekolah Bidang Kesiswaan",
        image: "/images/rudi.jpg",
        children: [
          { id: 7, name: "Ibu Nisa Rahma", title: "Pembina OSIS", image: "/images/nisa.jpg" },
          { id: 8, name: "Bapak Danu Setiawan", title: "Pembina Ekstrakurikuler", image: "/images/danu.jpg" },
        ],
      },
      {
        id: 4,
        name: "Ibu Lilis Suryani, S.Pd",
        title: "Wakil Kepala Sekolah Bidang Sarana & Prasarana",
        image: "/images/lilis.jpg",
        children: [
          { id: 9, name: "Bapak Andri Yusuf", title: "Tim Pemeliharaan", image: "/images/andri.jpg" },
          { id: 10, name: "Ibu Tuti Kurniasih", title: "Tim Logistik", image: "/images/tuti.jpg" },
        ],
      },
    ],
  },
];
