1. Merge Conflict bisa terjadi karena ketika dua branch mengubah baris yang sama pada file yang sama, sehingga Git tidak dapat menentukan versi mana yang benar saat kedua branch digabungkan.

2 situasi yang dapat memicu Merge Conflict :

a. Ketika dua branch mengubah baris yang sama.

b. Ketika Satu branch mengubah file, lalu branch lain menghapusnya.

c. Dua branch menambahkan baris berbeda di posisi yang berdekatan.

1 contoh skenario yang nyata mengenai Merge Conflict ( ketika dua orang mengedit file yang sama ) :

Budi dan Adi bekerja dalam satu tim. Keduanya memperbarui file style.css pada baris ke-10. Budi mengubah warna tombol menjadi background-color: blue di branch main, lalu melakukan commit dan push.
Di saat yang sama, Adi mengubah baris ke-10 yang sama menjadi background-color: red di branch fitur-tombol. Ketika Adi mencoba melakukan git merge main ke dalam branch-nya, Git tidak tahu warna mana yang sebenarnya diinginkan tim. Jadi Git membatalkan penggabungan otomatis dan memunculkan Merge Conflict.

2. a. - <<<<<<< HEAD = Penanda awal konflik yang menunjukkan dimulainya kode dari branch aktif saat ini tempat kita berada.
   - ======= = Pembatas tengah yang memisahkan perubahan kode dari branch aktif dan branch yang digabungkan.
   - > > > > > > > branch-teman = Penanda akhir konflik yang menunjukkan batas akhir kode yang berasal dari branch yang ditarik/digabungkan (branch-teman).

b. Baris yang <h1 style="color: red;">Selamat Datang</h1>

c. Baris yang <h1 style="color: blue;">Selamat Datang</h1>

3.  2 cara menyelesaikan Merge Conflict: melalui Visual Studio Code dan melalui editor teks manual dan juga langkah-langkahnya :

Cara 1 : Melalui Visual Studio Code dan langkah - langkahnya :

a. Buka file yang berkonflik di VS Code. File tersebut akan ditandai dengan warna merah/orange.

b. Manfaatkan tombol pintas visual yang disediakan VS Code di atas penanda konflik, seperti Accept Current Change (mengambil kode branch aktif), Accept Incoming Change (mengambil kode branch yang datang), dan Accept Both Changes (mengambil kedua kode).

c. Klik salah satu tombol tersebut (atau edit manual jika ingin menggabungkan logika kodenya).

d. Simpan file.

Cara 2 : Melalui editor teks manual dan langkah - langkahnya :

a. Buka file berkonflik menggunakan text editor biasa.
b. Cari penanda konflik (<<<<<<<, =======, >>>>>>>).
c. Hapus penanda konflik tersebut secara manual beserta baris kode yang tidak ingin dipakai.
d. Rapikan sisa kode agar tidak ada sintaks yang rusak.
e. Simpan file.

Mengapa VS Code direkomendasikan untuk pemula?
= Karena VS code menyediakan tombol visual sekali-klik (Code Lenses) dan warna pembeda yang jelas antara kode milikmu dan kode yang masuk. Pemula bisa langsung memilih kode terbaik tanpa perlu menghapus penanda konflik secara manual yang berisiko salah hapus.

4. yang harus dijalankan di terminal untuk mencatat hasilnya adalah menambahka beberapa perintah :

a. Mengggunakan perintah = git add .
fungsinya = Mendaftarkan (stage) file-file yang tadinya berkonflik dan yang sudah selesai diperbaiki, memberi tahu Git bahwa konflik pada file tersebut telah terselesaikan.

b. Menggunakan perintah = git commit -m "fix: menyelesaikan merge conflict pada komponen header"
fungsi = Menyimpan permanen hasil penyelesaian konflik tersebut ke dalam riwayat commit repositori.

c. Menggunakan perintah = git push origin <nama-branch>
fungsi = Mengirimkan hasil penyelesaian konflik yang sudah rapi dari komputer lokal ke repositori remote (GitHub).

5. Fungsi perintah dari git merge --abort adalah Membatalkan proses penggabungan (merge) yang sedang berkonflik dan mengembalikan kondisi repositori persis seperti sebelum perintah git merge dijalankan.

1 situasi nyata di mana menggunakan perintah ini daripada menyelesaikan konflik secara manual :

Saat kita melakukan merge lalu tiba-tiba muncul puluhan konflik rumit yang tidak dapat difahami karena bukan kita yang menuliskan kodenya.

6. 4 praktik terbaik untuk meminimalkan frekuensi Merge Conflict dalam kerja tim :

a. Sering Melakukan git pull dari Branch Utama (main).
Alasannya: Mengambil pembaruan tim secara berkala membuat branch lokal kamu tidak tertinggal jauh dari kode utama.

b. Buat Branch Fitur Berukuran Kecil (Small & Focused Branches)
Alasannya: Semakin kecil scope/jangkauan fitur yang dikerjakan, semakin sedikit baris file yang disentuh, sehingga probabilitas bertabrakan dengan kode rekan lain semakin kecil.

c. Komunikasi Tim yang Efektif (Pembagian Tugas yang Jelas)
Alasannya: Memastikan dua developer tidak mengerjakan atau mengubah komponen/file yang sama pada waktu yang bersamaan.

d. Lakukan Commit Secara Berskala dan atomic (Small Commits)
Alasannya: Membagi pekerjaan menjadi beberapa commit kecil memudahkan pelacakan dan penggabungan kode secara bertahap.

7. mengapa pesan commit yang jelas sangat penting ?
   = Karena agar seluruh anggota tim dapat memahami sejarah perubahan proyek, alasan suatu fitur ditambah atau diperbaiki, dan mempercepat proses pelacakan bug di masa depan tanpa harus membaca seluruh isi kode.

3 Contoh Pesan Commit yang Buruk:

a. git commit -m "update" = Tidak menjelaskan apa yang diperbarui.
b. git commit -m "fix bug" = Bug yang mana? Di bagian mana?
c. git commit -m "coba-coba" = Tidak bermakna sama sekali.

3 Contoh Pesan Commit yang Baik:

a. git commit -m "fix: memperbaiki warna teks yang tidak terbaca di footer"
b. git commit -m "docs: memperbarui panduan instalasi di README"
b. git commit -m "style: merapikan indentasi dan spasi pada style.css"

8. Format Conventional Commits adalah standar format penulisan pesan commit dengan struktur: <tipe>: <deskripsi singkat>.

4 Tipe Commit, Fungsi, dan Contohnya:

a. feat (Feature)
Fungsinya: Penambahan fitur baru pada aplikasi.
Contohnya: feat: menambahkan filter pencarian harga pada halaman katalog.

b. fix (Bug Fix)
Fungsinya: Perbaikan bug atau kesalahan pada kode.
Contohnya: fix: menangani crash saat pengguna mengunggah foto profil.

c. docs (Documentation)
Fungsinya: Perubahan pada dokumentasi (misal file README.md).
Contohnya: docs: memperbarui panduan instalasi proyek di file README.

d. style (Styling/Formatting)
Fungsinya: Perubahan tampilan/format tanpa mengubah logika kode (CSS, spasi, titik koma).
Contohnya: style: merapikan indentasi pada komponen footer.

9. git commit -m "feat: menambahkan fitur pencarian produk di navbar" adalah yang paling baik. Karena ia mengikuti standar Conventional Commits (feat:), dan dapat menjelaskan akibat spesifik dari perubahan yang dibuat (fitur pencarian produk).

10. fungsi file .gitignore dalam proyek Git adalah menyuruh Git untuk mengabaikan file/folder tertentu agar tidak dilacak (untracked) dan tidak ikut terunggah ke repositori GitHub.

4 Jenis File yang Harus Masuk .gitignore & Alasannya:

a. File Kredensial / Environment Variables (misal .env)
Alasannya: Berisi informasi rahasia seperti API key, password database, dan secret token. Jika terunggah, sistem bisa di-hack.

b. Folder Dependency Paket (misal node_modules/ atau vendor/)
Alasannya: Ukuran filenya sangat besar (ratusan MB). Anggota tim lain bisa mengunduhnya secara lokal lewat npm install.

c. File Hasil Build / Kompilasi (misal dist/, build/, \*.exe)
Alasannya: File ini dihasilkan otomatis oleh mesin/kompiler, bukan kode sumber mentah yang perlu ditulis manusia.

d. File Pengaturan IDE / OS (misal .vscode/, .DS_Store, Thumbs.db)
Alasannya: Merupakan konfigurasi lokal komputer pribadi yang bisa mengganggu pengaturan workspace anggota tim lain.

11. format standar penamaan branch yang direkomendasikan :

a. Format Standar: <kategori>/<nama-singkat-fitur> atau <kategori>/<issue-id>-<deskripsi>.
b. Kategori umum: feat/, fix/, refactor/, chore/.

3 contoh penamaan branch yang baik

a. feat/shopping-cart
b. fix/login-validation-error
c. docs/update-readme

Alasan format ini lebih baik dibanding nama bebas:

a. Organik & Terstruktur: Anggota tim langsung tahu apa tujuan utama dibuatnya branch tersebut hanya dengan membaca namanya.

b. Mencegah Bentrok Nama: Mengelompokkan pekerjaan berdasarkan kategori memperkecil risiko penggunaan nama branch yang sama antar-developer.

12. a. HTML (HyperText Markup Language): Bertindak sebagai Rangka/Tulang. Menentukan struktur dasar, fondasi, dan konten utama website (seperti teks, gambar, tombol, dan form).

b. CSS (Cascading Style Sheets): Bertindak sebagai Kulit, Pakaian, & Tampilan. Mengatur keindahan, warna, tata letak (layout), font, dan kerapian tampilan agar enak dilihat.

c. JavaScript: Bertindak sebagai Sistem Saraf & Otot. Memberikan perilaku interaktif dan dinamika pada website (seperti efek animasi, memproses data form, menampilkan pop-up, dan mengambil data tanpa reload).

13. 2 lingkungan tempat JavaScript dapat dijalankan :

a. Browser (Client-Side / Frontend)
Penjelasannya: Mesin JavaScript bawaan browser (seperti Google Chrome V8, Firefox SpiderMonkey) yang mengeksekusi JS untuk membuat halaman web interaktif langsung di komputer pengguna.

b. Node.js (Server-Side / Backend)
Penjelasannya: Lingkungan eksekusi (runtime environment) di luar browser yang memungkinkan JavaScript dijalankan langsung di dalam sistem operasi komputer/server untuk mengelola basis data, API, dan logika backend.

14. Perbedaan antara JavaScript dan ECMAScript (ES) :

- JavaScript: Adalah bahasa pemrogramannya yang diimplementasikan berdasarkan standar aturan dari ECMAScript tersebut.

- ECMAScript (ES): Adalah standar atau spesifikasi aturan baku tentang bagaimana bahasa skrip harus dirancang.

contoh perbandingan kode antara gaya lama dan gaya modern :

kode gaya lama :
// Penggabungan variabel & fungsi lamavar nama = "Budi";function sapa(user) {
return "Halo " + user;
}

kode gaya baru :
// Menggunakan const/let, Arrow Function, dan Template Literalsconst nama = "Budi";const sapa = (user) => `Halo ${user}`;
