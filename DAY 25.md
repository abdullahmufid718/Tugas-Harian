1. Dua Arah Aliran Kode (Push & Pull)

Push (Lokal → GitHub): Mengirimkan hasil pekerjaan yang sudah disimpan (commit) dari komputer lokal ke repositori di GitHub.

Contoh situasi: Kamu baru selesai membuat fitur halaman login di komputer lokal dan ingin mengunggahnya ke GitHub agar kodenya tersimpan aman di cloud.

Pull (GitHub → Lokal): Mengunduh sekaligus menggabungkan pembaruan kode terbaru dari GitHub ke komputer lokal.

Contoh situasi: Rekan timmu baru saja menambahkan fungsi basis data baru di GitHub, dan kamu perlu mengambil pembaruan tersebut agar kode di komputermu tidak tertinggal.

2. Perintah git push & Opsi -u

git push berfungsi untuk mengunggah riwayat komit dari branch lokal ke repositori jarak jauh (remote).

a. Fungsi opsi -u (upstream): Menghubungkan branch lokal dengan branch di GitHub secara permanen untuk aktivitas push/pull berikutnya.

b. Jika -u tidak disertakan pada push pertama: Git belum menyimpan relasi antar branch. Setiap kali ingin push atau pull di kemudian hari, kamu harus mengetikkan nama lokasi dan branch secara lengkap (git push origin main).

c. Mengapa cukup git push setelah -u ditetapkan: Karena Git sudah mengingat jalur hubungannya. Git otomatis tahu ke mana perubahan kode di branch tersebut harus dikirim.

3. Perbedaan git clone vs git init

Fitur git init git clone
Fungsi Utama Membuat repositori Git baru dari awal pada folder lokal yang belum teracak. Menyalin seluruh repositori yang sudah ada dari GitHub ke komputer lokal.
Koneksi Remote Belum terhubung ke GitHub (harus dihubungkan manual). Otomatis terhubung ke repositori sumber di GitHub.
Mengapa tidak perlu git init setelah git clone?
Sebab perintah git clone secara otomatis membuat folder sistem .git, menginisialisasi pelacakan, dan menyambungkan koneksi remote (origin) ke repositori asal.

4. Fungsi git pull & Pentingnya dalam Kerja Tim

git pull berfungsi untuk mengambil dan menggabungkan (merge) perubahan kode terbaru dari GitHub ke komputer lokal. Perintah ini sangat penting agar anggota tim tidak bekerja menggunakan versi kode yang sudah usang, sehingga mencegah terjadinya bentrok kode (conflict).

2 Momen Spesifik Menjalankan git pull:

Saat awal mulai bekerja (pagi hari): Memastikan kode di komputermu sudah menyelaraskan pembaruan yang dibuat rekan tim sebelumnya.

Sebelum membuat branch baru atau sebelum merge: Memastikan dasar branch yang kamu pakai adalah versi paling segar.

5. Alur Kerja Harian yang Direkomendasikan

Bash
git switch main
git pull origin main
git switch -c fitur-baru

# ... mengerjakan kode di text editor ...

git add .
git commit -m "Menambahkan fitur X"
git push origin fitur-baru
git switch main & git pull origin main: Berpindah ke branch utama dan mengambil kode terbaru agar pengerjaan diawali dari versi paling mutakhir.

git switch -c fitur-baru: Membuat branch khusus untuk pekerjaan baru agar tidak merusak stabilitas branch utama (main).

git add . & git commit -m "...": Memilih dan menandai poin riwayat penyimpanan perubahan lokal secara terstruktur.

git push origin fitur-baru: Mengirimkan branch pekerjaan ke GitHub agar siap ditinjau.

6. Konsep Fork

Fork adalah proses menduplikasi repositori milik orang lain ke dalam akun GitHub pribadi.

2 Situasi Perlu Melakukan Fork:

Ingin berkontribusi pada proyek open source milik orang/organisasi lain tanpa memiliki hak akses langsung sebagai anggota internal.

Ingin menggunakan proyek milik orang lain sebagai dasar untuk membuat dan mengembangkan aplikasi baru secara mandiri.

Perbedaan Fork vs Clone:

Fork: Menciptakan salinan repositori di server GitHub (antar akun GitHub).

Clone: Mengunduh repositori dari GitHub ke dalam media penyimpanan di komputer lokal.

7. 6 Langkah Alur Kontribusi Open Source (Fork + PR)

Fork Repositori: Duplikasi proyek target ke akun GitHub pribadi agar kamu memiliki hak penuh untuk mengubah kodenya.

Clone ke Komputer Lokal: Unduh repositori hasil fork tersebut ke komputer agar dapat dikerjakan lewat editor kode.

Buat Branch Baru: Buat branch khusus perbaikan/fitur agar riwayat perubahan tetap rapi dan terisolasi.

Commit & Push Perubahan: Simpan hasil perubahan di komputer lokal, lalu push branch tersebut ke repositori fork milikmu di GitHub.

Buat Pull Request (PR): Kirimkan pengajuan dari web GitHub agar pemilik proyek asli bersedia menarik perubahan tersebut ke proyek utama mereka.

Review & Merge: Pemilik proyek memeriksa kodenya, memberikan umpan balik jika perlu, lalu menggabungkannya (merge) jika sudah sesuai.

8. Pull Request (PR) & Perannya

Pull Request (PR) adalah mekanisme di GitHub untuk memberi tahu anggota tim bahwa suatu fitur telah selesai dan siap diulas sebelum digabungkan ke branch utama.

Mengapa Tim Profesional Menggunakan PR?
Untuk menjaga kualitas dan keamanan aplikasi. Tanpa PR, kode yang mengandung bug atau berpotensi merusak sistem dapat lolos begitu saja ke branch utama.

2 Keuntungan Menggunakan PR:

Peninjauan Kode (Code Review): Rekan tim dapat memeriksa kesalahan logika, standar penulisan, atau celah keamanan sebelum kode dipublikasikan.

Ruang Diskusi & Dokumentasi: Menyediakan wadah terpusat untuk mendiskusikan perubahan kode dan mencatat riwayat alasan dibalik pembuatan fitur tersebut.

9. Analisis Skenario Andi & Budi

a. Yang terjadi saat Budi mencoba push: Git akan menolak proses push (rejected) dan memberikan peringatan bahwa repositori lokal Budi tertinggal dari server.

b. Mengapa hal ini bisa terjadi: Karena repositori di GitHub sudah memiliki komit baru dari Andi. Git menolak push Budi untuk mencegah perubahan Andi tertimpa secara tidak sengaja.

c. Yang seharusnya Budi lakukan sebelum mengedit: Melakukan git pull terlebih dahulu untuk menyelaraskan perubahan yang diunggah Andi.

d. Urutan perintah yang seharusnya dilakukan Budi:

Bash
git pull origin main

# ... baru mengedit file style.css ...

git add style.css
git commit -m "Memperbarui tampilan style.css"
git push origin main 10. Studi Kasus — Alur Kerja Lengkap

a. Fungsi git clone di baris pertama: Mendownload seluruh berkas beserta riwayat komit dari repositori proyek milik andi ke komputer lokal.

b. Alasan membuat branch perbaikan-bug: Agar pengerjaan perbaikan bug terisolasi secara aman. Jika terjadi kesalahan saat eksperimen, kode di branch main yang stabil tidak akan terganggu.

c. Tujuan git push origin perbaikan-bug: Mengirimkan branch spesifik perbaikan-bug ke GitHub. Jika hanya menggunakan git push, Git tidak tahu branch mana yang secara spesifik ingin dikirim karena belum terkonfigurasi.

d. Langkah di antarmuka web GitHub: Buka halaman repositori di GitHub, klik tombol Compare & pull request, isi deskripsi mengenai perbaikan yang dilakukan, lalu klik Create pull request.

e. Alur jika pemilik repo meminta revisi:

Pengguna membuka kembali proyek di lokal pada branch perbaikan-bug.

Lakukan perbaikan kode sesuai masukan dari pemilik repo.

Simpan perubahan dengan perintah git add . lalu git commit -m "Revisi sesuai masukan".

Jalankan git push origin perbaikan-bug.

Pengajuan Pull Request di GitHub akan otomatis memperbarui kodenya tanpa perlu membuat PR baru.
