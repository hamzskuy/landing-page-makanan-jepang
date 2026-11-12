# FOODSTORY — Japanese Kitchen

Landing page React + Vite berdasarkan PRD.md dan Design System Wa-Modern. Menggantikan Mini Task Manager sesuai permintaan. Tanpa backend atau checkout.

## Menjalankan

```powershell
cd "C:\Users\ASUS\OneDrive\kodingan ilham\testweb"
npm.cmd install
npm.cmd run dev
```

Buka http://127.0.0.1:5174 (lihat terminal jika port terpakai).

```powershell
npm.cmd run build
npm.cmd run preview
```

Build statis berada di `dist/`; preview http://127.0.0.1:4173. Jangan membuka index.html langsung karena ini aplikasi Vite.

## Struktur

- src/App.jsx, src/main.jsx: aplikasi.
- src/index.css: token warna, layout, responsive, motion.
- src/components/: Navbar, Hero, FoodCarousel, MenuSection, Gallery, Reviews, Contact, Shared.
- src/data/config.js: nama brand dan kontak.
- src/data/menu.js: hidangan, kategori, harga, foto, rating, review demo.
- test-browser.mjs: tes Chromium menggunakan Microsoft Edge lokal.

## Edit konten

Ubah `src/data/config.js` untuk brand, alamat, jam buka, whatsapp, instagram, tiktok, mapsUrl. WhatsApp memakai angka internasional tanpa +. Instagram/TikTok memakai username tanpa @. Maps memakai URL HTTPS. Kontak kosong sengaja ditampilkan nonaktif, tidak diarahkan ke akun atau nomor palsu. Nama brand di halaman dan judul browser mengikuti konfigurasi.

Semua menu, rating, harga, dan ulasan merupakan demonstrasi. Foto ilustrasi publik Unsplash memerlukan internet dan harus diganti foto hidangan restoran asli sebelum peluncuran komersial. Font menggunakan Google Fonts dengan fallback lokal. Foto setiap item menu berbeda; carousel/galeri menggunakan kembali foto item terkait untuk konsistensi katalog. Bila foto gagal, fallback teks ditampilkan.

## Fitur

Sticky navbar transparan ke solid, hamburger mobile, hero editorial, 5 slide makanan autoplay 4 detik, tombol next/previous/indikator/pause, pause hover/focus, swipe mobile. Filter 6 kategori; grid 4 kolom desktop dan 2 kolom mobile/tablet. Galeri editorial dengan native dialog lightbox, next/previous, Esc, ArrowLeft/Right, focus restoration. Ulasan demo autoplay 6 detik. IntersectionObserver reveal, hover zoom, reduced motion mematikan autoplay dan animasi. Kontak placeholder dan footer.

## Pengujian aktual

`npm.cmd run build`: berhasil. npm audit saat instalasi: 0 vulnerability.

`node test-browser.mjs`: Edge headless.
- 8 item tampil; filter Matcha & Drinks menghasilkan 2, All mengembalikan 8.
- Lightbox terbuka, ArrowRight berpindah, Escape menutup.
- Carousel otomatis berpindah sesuai interval.
- 1920/1366 px: 4 kolom; 768/390/360 px: 2 kolom; tidak ada horizontal overflow.
- Hamburger terbuka dan menutup setelah link navigasi dipilih.
- Semua foto berhasil dimuat; tidak ada photo fallback.
- Tidak ada JavaScript page error.

Kontak asli belum diuji karena belum diberikan. Isi konfigurasi sebelum publikasi. Screenshot pengujian: preview-desktop.png dan preview-mobile.png.
