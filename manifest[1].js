// ======================================================
// KATALOG PDF — MANIFEST
// ======================================================
// Ini adalah "daftar isi" seluruh presentasi Anda.
// Setiap kali menambah file PDF baru:
// 1. Upload file PDF-nya ke folder kategori yang sesuai
//    (contoh: pdfs/Safety/nama-file.pdf)
// 2. Tambahkan satu baris entri baru di array "files"
//    pada kategori yang sesuai (atau buat kategori baru)
//
// Kalau kategori barunya belum ada di daftar ini, tinggal
// copy salah satu blok "{ category: ..., files: [...] }"
// dan ganti isinya.
// ======================================================

const PDF_CATALOG = [
  {
    category: "Safety & SHE",
    files: [
      {
        title: "SIPATRA-SMART — Laporan Implementasi Inisiatif",
        path: "pdfs/Safety/SIPATRA-SMART_final.pdf"
      }
    ]
  },
  {
    category: "Contoh Kategori Lain",
    files: [
      // Tambahkan file di sini, contoh:
      // { title: "Judul Presentasi Anda", path: "pdfs/Contoh-Kategori/nama-file.pdf" }
    ]
  }
];
