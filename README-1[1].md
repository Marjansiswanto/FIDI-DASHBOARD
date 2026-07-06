# FIDI Portal v2 — Dashboard Kategori + Proteksi Download

## Struktur folder

```
fidi-portal/
├── index.html
├── style.css
├── script.js
├── manifest.js          ← daftar isi semua PDF, dikelompokkan per kategori
├── pdfs/
│   ├── Safety/
│   │   └── SIPATRA-SMART_final.pdf
│   └── Contoh-Kategori/
│       └── (taruh file PDF kategori ini di sini)
```

## Cara kerja alurnya

1. Buka situs → masukkan **password portal** → masuk ke **Dashboard**.
2. Dashboard menampilkan semua kategori & judul PDF (dari `manifest.js`).
3. Klik salah satu PDF → terbuka di **viewer custom** (bukan tampilan PDF bawaan browser), jadi **tombol download bawaan browser tidak muncul**.
4. Kalau mau mengunduh file aslinya, klik tombol **Unduh** di viewer → diminta **password download** (beda dari password portal) → kalau benar, file baru terunduh.

## Menambah file PDF baru (rutin, untuk 100 file ke depan)

1. **Upload file PDF-nya** ke folder kategori yang sesuai di GitHub, misalnya:
   `pdfs/Safety/nama-file-baru.pdf`
   (Kalau kategorinya belum ada foldernya, buat folder baru dulu — caranya: saat upload file di GitHub, ketik `pdfs/NamaKategoriBaru/` di depan nama file pada kotak upload, GitHub otomatis membuat foldernya.)

2. **Edit `manifest.js`**, tambahkan entri baru di kategori yang sesuai:
   ```js
   {
     category: "Safety & SHE",
     files: [
       { title: "SIPATRA-SMART — Laporan Implementasi Inisiatif", path: "pdfs/Safety/SIPATRA-SMART_final.pdf" },
       { title: "Judul Presentasi Baru Anda", path: "pdfs/Safety/nama-file-baru.pdf" }
     ]
   }
   ```

3. Kalau ingin bikin **kategori baru sepenuhnya**, tambahkan blok baru di `manifest.js`:
   ```js
   {
     category: "Nama Kategori Baru",
     files: [
       { title: "Judul File", path: "pdfs/Nama-Kategori-Baru/file.pdf" }
     ]
   }
   ```

4. Commit perubahan `manifest.js` → dashboard otomatis ter-update.

## Mengganti password

Ada **2 password berbeda** di `script.js`:

| Variabel | Fungsi |
|---|---|
| `PASSWORD_HASH` | Password masuk portal (buka dashboard) |
| `DOWNLOAD_PASSWORD_HASH` | Password khusus untuk mengunduh file asli |

Cara ganti (untuk masing-masing):
1. Buka https://emn178.github.io/online-tools/sha256.html
2. Ketik password baru, salin hasil hash-nya (64 karakter)
3. Tempel ke variabel yang sesuai di `script.js`
4. **Pastikan kedua password ini berbeda satu sama lain.**

## ⚠️ Batasan jujur soal keamanan

Ini situs statis di GitHub Pages, bukan aplikasi dengan server/database:

- **Password bisa dilewati oleh orang yang paham teknis.** Semua logika password berjalan di browser (JavaScript), jadi seseorang yang cukup mengerti bisa membuka DevTools browser, melihat kode, atau mengambil file lewat tab Network — tanpa harus tahu passwordnya.
- **Viewer custom ini hanya mencegah "download sekali klik"** lewat tombol biasa. Orang yang niat tetap bisa screenshot per halaman, atau ambil file lewat DevTools.
- Proteksi ini cukup untuk mencegah **pengunjung biasa/tidak sengaja** mengunduh file, tapi **bukan proteksi tingkat perusahaan/rahasia negara**. Kalau isi file sangat sensitif, sebaiknya gunakan platform dengan otentikasi server sungguhan (misalnya Google Drive dengan izin akses terbatas, SharePoint, atau aplikasi berbayar dengan backend).

## Ukuran & performa

- Setiap file PDF dimuat lewat pdf.js dan dirender per halaman ke dalam kanvas — ini lebih berat dari sekadar menampilkan file PDF langsung, jadi untuk file besar (puluhan MB) loading halaman pertama mungkin perlu beberapa detik, tergantung koneksi.
- 100 file PDF sekaligus di satu repo GitHub aman-aman saja, selama satu file tidak melebihi 100 MB (batas keras GitHub).
