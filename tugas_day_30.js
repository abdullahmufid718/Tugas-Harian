// Langkah 1: Tebak Dulu, Baru Cek :

// Potongan A :

// Outputnya adalah : Falsy
// Hasil aslinya : tidak ada Output ✔
if (0) {
  console.log("1: masuk");
}
// Outputnya adalah : 2: masuk
// Hasil aslinya : 2: masuk ✔
if ("0") {
  console.log("2: masuk");
}
// Outputnya adalah : Falsy
// Hasil aslinya : tidak ada Output ✔
if ("") {
  console.log("3: masuk");
}
// Outputnya adalah : 4: masuk
// Hasil aslinya : 4: masuk ✔
if ([]) {
  console.log("4: masuk");
}
// Outputnya adalah : Falsy
// Hasil aslinya : tidak ada Output ✔
if (null) {
  console.log("5: masuk");
}
// Outputnya adalah : Falsy, karena saya kira angka negatif itu bagian dari Falsy
// Hasil aslinya : 6: masuk ✔
if (-1) {
  console.log("6: masuk");
}

// Potongan B
let belanja = 120000;

if (belanja >= 25000) {
  console.log("Diskon 5%");
} else if (belanja >= 50000) {
  console.log("Diskon 10%");
} else if (belanja >= 100000) {
  console.log("Diskon 15%");
} else {
  console.log("Tidak ada diskon");
}
// Outputnya adalah : Diskon 15%, karena belanjanya lebih dari 100000
// Hasil aslinya : Diskon 5% ✔

// Potongan C
let hari = "sabtu";

switch (hari) {
  case "jumat":
    console.log("Promo Jumat Berkah");
  case "sabtu":
    console.log("Promo Akhir Pekan");
  case "minggu":
    console.log("Promo Keluarga");
    break;
  default:
    console.log("Tidak ada promo");
}
// Outputnya adalah : Promo Akhir Pekan, karena saya kira hanya mengeluarkan Output yang hari sabtunya saja.
// Hasil aslinya :Promo Akhir Pekan dan Promo Keluarga ✔

// jawaban Pertanyaan di komentar:

// 1.Karena ia termasuk nilai dari Truthy
// 2.Karena JavaScript mengecek kondisi dari ATAS ke BAWAH secara berurutan.
// Begitu menemukan kondisi pertama yang bernilai true, JavaScript langsung menjalankan kodenya ("Diskon 5%") dan 
// LANGSUNG KELUAR dari blok if-else tanpa mengecek ke bawah lagi. Cara memperbaikinya adalah mengubah urutannya yang diskon 15% menjadi diawal 
// dan yang diskon 5% ditaruh dibagian paling bawah.
// 3. Karena Di dalam struktur switch JavaScript, sifat aslinya adalah mengalir terus ke bawah setelah salah satu case cocok, 
// kecuali jika kita menghentikannya secara manual menggunakan perintah break. Cara agar hanya satu baris yang tercetak adalah 
// dengan menambahkan perintah break di setiap akhir case.

// Langkah 2: Perbaiki 5 Kesalahan :

let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

// Diskon berdasarkan total belanja. Seharusnya: 8000 (diskon 10%)
if (totalBelanja >= 50000) {
 diskon = totalBelanja * 0.1; //FIX 1: Menukar yang bagian ini yang awalnya di posisi kedua menjadi posisi pertama agar lebih terbaca terlebih dahulu oleh JavaScript.
} else if (totalBelanja >= 25000) {
  diskon = totalBelanja * 0.05;
} else if (totalBelanja >= 100000) {
  diskon = totalBelanja * 0.15;
} else {
  diskon = 0;
}

// Potongan member. "gold" 5000, "silver" 2000, lainnya 0. Seharusnya untuk "gold": 5000
switch (jenisMember) { //FIX 2: Mengubah huruf M yang awal nya huruf kecil menjadi besar, karena sebelummnya juga menggunakan huruf M yang besar.
  case "gold":
    potonganMember = 5000;
    break; //FIX 3: Menambahkan break agar tidak terjadi fall-through ke case silver.
  case "silver":
    potonganMember = 2000;
    break;
  default:
    potonganMember = 0;
}

// Voucher. Seharusnya tercetak: Voucher tidak dipakai
if ((kodeVoucher === "")) { //FIX 4: Menggunakan sama dengan 3 kali (===), karena komputer dipaksa untuk jujur dan teliti: nilainya harus sama, dan jenis datanya pun harus benar-benar sejenis.
  console.log("Voucher tidak dipakai");
} else {
  console.log("Voucher dipakai: " + kodeVoucher);
}

// Total akhir. Seharusnya: 67000
let totalAkhir = totalBelanja - diskon - potonganMember;

// Pembayaran dengan uang pas. Seharusnya tercetak: Status: Lunas
let uangBayar = 67000;
if (uangBayar >= totalAkhir) { //FIX 5: Ditambahkan sama dengan (=), karena agar komputer mengizinkan dua kondisi sekaligus: lebih besar ATAU sama dengan. Jadi, saat uangnya pas (67000 >= 67000), kondisinya akan bernilai true dan statusnya langsung terbaca Lunas.
  console.log("Status: Lunas");
} else {
  console.log("Status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);

// Pertanyaan (jawab di komentar):

// 1.a.  kesalahan di bagian Urutan Diskon: Urutan pengecekan if-else dimulai dari nominal terkecil sehingga diskon besar terlewat, diperbaiki dengan membalik urutan dari yang terbesar ke terkecil.
// b. kesalahan di bagian Variabel Member (jenismember): Penulisan variabel menggunakan huruf kecil yang tidak konsisten dengan deklarasi atas, diperbaiki dengan menyamakan kapitalisasinya menjadi jenisMember.
// c. kesalahan di bagian Hilangnya break pada Switch: Tidak adanya perintah break menyebabkan terjadinya fall-through, diperbaiki dengan menambahkan break di setiap akhir case.
// d. kesalahan di bagian Operator Voucher (=): Menggunakan operator assignment = yang merusak data alih-alih membandingkan, diperbaiki dengan menggunakan operator perbandingan ketat ===.
// e. kesalahan di bagian Logika Pembayaran (>): Menggunakan tanda lebih besar saja sehingga uang pas terbaca kurang, diperbaiki dengan menggunakan operator lebih besar atau sama dengan (>=).
// 2.a. Tidak ada bagian yang menyebabkan error di console: Tidak ada satupun. Semua kode di atas jika dijalankan tidak akan memunculkan error berwarna merah (syntax error) di console browser.
// b. Yang tidak error tetapi hasilnya salah (Logical Error adalah Seluruh bagian FIX tersebut (khususnya pada urutan if-else diskon).
// 3.a. = (Assignment Operator): Berfungsi untuk mengisi, memasukkan, atau menimpa nilai ke dalam sebuah variabel. Simbol ini sama sekali bukan untuk membandingkan.
// b. == (Loose Equality / Perbandingan Longgar): Berfungsi untuk membandingkan nilai saja tanpa peduli tipe datanya.  Cara ini rawan menimbulkan bug tersembunyi.
// c. === (Strict Equality / Perbandingan Ketat): Berfungsi untuk membandingkan nilai DAN tipe data sekaligus. Nilai harus sama persis, dan jenis datanya (apakah sama-sama String, Number, atau Boolean) juga harus sejenis.
// kenapa tidak error, karena Sah Secara Aturan Bahasa: Di dalam JavaScript, melakukan assignment (= dalam tanda kurung) adalah tindakan yang sah secara tata bahasa (syntax).

// Langkah 3: Bikin Kasir Sendiri :

// Data Awal Skenario 1 (Bisa diubah untuk Skenario 2 dan 3)
const kasirNamaPelanggan = "Rina";
const kasirTotalBelanja = 90000;
const kasirHari = "sabtu";
const kasirJenisMember = "silver";
const kasirKodeVoucher = "SENJA10";
const kasirUangBayar = 100000;

let kasirDiskon = 0;
let kasirPotonganMember = 0;
let kasirPotonganHari = 0;
let kasirPotonganVoucher = 0;

// 1. Validasi nama memakai Truthy/Falsy
if (kasirNamaPelanggan) {
  console.log(`Pelanggan: ${kasirNamaPelanggan}`);
} else {
  console.log("Nama pelanggan belum diisi");
}

// 2. Diskon berdasarkan total belanja (if...else if...else)
if (kasirTotalBelanja >= 100000) {
  kasirDiskon = kasirTotalBelanja * 0.15;
} else if (kasirTotalBelanja >= 50000) {
  kasirDiskon = kasirTotalBelanja * 0.1;
} else if (kasirTotalBelanja >= 25000) {
  kasirDiskon = kasirTotalBelanja * 0.05;
} else {
  kasirDiskon = 0;
}

// 3. Potongan member
switch (kasirJenisMember) {
  case "gold":
    kasirPotonganMember = 5000;
    break;
  case "silver":
    kasirPotonganMember = 2000;
    break;
  default:
    kasirPotonganMember = 0;
}

// 4. Promo hari menggunakan switch dengan fall-through untuk sabtu & minggu
switch (kasirHari) {
  case "jumat":
    kasirPotonganHari = 3000;
    break;
  case "sabtu":
  case "minggu":
    kasirPotonganHari = 5000;
    break;
  default:
    kasirPotonganHari = 0;
}

// 5. Voucher memakai Truthy/Falsy
if (kasirKodeVoucher) {
  kasirPotonganVoucher = 2000;
  console.log(`Voucher dipakai: ${kasirKodeVoucher} (Potongan: 2000)`);
} else {
  kasirPotonganVoucher = 0;
  console.log("Voucher tidak dipakai");
}

// 6. Total akhir
let kasirTotalAkhir = kasirTotalBelanja - kasirDiskon - kasirPotonganMember - kasirPotonganHari - kasirPotonganVoucher;

// 7. Status pembayaran (if...else if...else dengan kembalian/kekurangan)
let kasirSelisih = kasirUangBayar - kasirTotalAkhir;

if (kasirUangBayar > kasirTotalAkhir) {
  console.log(`Status: Lunas (Kembalian: Rp ${kasirSelisih})`);
} else if (kasirUangBayar === kasirTotalAkhir) {
  console.log("Status: Lunas (uang pas)");
} else {
  console.log(`Status: Kurang (Kekurangan: Rp ${Math.abs(kasirSelisih)})`);
}

// 8. Hasil cetak ringkasan dengan template literal
console.log(`Total Belanja : Rp ${kasirTotalBelanja}`);
console.log(`Diskon Belanja: Rp ${kasirDiskon}`);
console.log(`Potongan Member: Rp ${kasirPotonganMember}`);
console.log(`Potongan Hari : Rp ${kasirPotonganHari}`);
console.log(`Total Akhir   : Rp ${kasirTotalAkhir}`);
console.log(`Uang Bayar    : Rp ${kasirUangBayar}`);


// ==========================================================
// PENGUJIAN 3 SKENARIO BERBEDA
// ==========================================================

// Skenario 1: nama "Rina", belanja 90000, hari "sabtu", member "silver", voucher "SENJA10", bayar 100000
// Hasil:
// Pelanggan: Rina
// Voucher dipakai: SENJA10 (Potongan: 2000)
// Status: Lunas (Kembalian: Rp 22000)
// Total Belanja : Rp 90000
// Diskon Belanja: Rp 9000
// Potongan Member: Rp 2000
// Potongan Hari : Rp 5000
// Total Akhir   : Rp 74000
// Uang Bayar    : Rp 100000

// Skenario 2: nama "", belanja 120000, hari "jumat", member "gold", voucher "", bayar 100000
// Hasil:
// Nama pelanggan belum diisi
// Voucher tidak dipakai
// Status: Kurang (Kekurangan: Rp 2000)
// Total Belanja : Rp 120000
// Diskon Belanja: Rp 18000
// Potongan Member: Rp 5000
// Potongan Hari : Rp 3000
// Total Akhir   : Rp 94000
// Uang Bayar    : Rp 100000

// Skenario 3: nama "Budi", belanja 40000, hari "rabu", member "umum", voucher "", bayar 36000
// Hasil:
// Pelanggan: Budi
// Voucher tidak dipakai
// Status: Lunas (uang pas)
// Total Belanja : Rp 40000
// Diskon Belanja: Rp 2000
// Potongan Member: Rp 0
// Potongan Hari : Rp 0
// Total Akhir   : Rp 38000
// Uang Bayar    : Rp 38000 (disesuaikan dengan uang pas)

// Pertanyaan (jawab di komentar):

// 1.Karena JavaScript mengecek kondisi dari atas ke bawah dan langsung berhenti di kondisi pertama yang bernilai benar (true).
// Jika dibalik (dimulai dari terkecil): Angka besar seperti 120.000 akan keburu memenuhi syarat terkecil di atasnya (misal >= 25000), sehingga pembeli yang belanja banyak malah hanya mendapatkan diskon kecil dan program salah sasaran.
// 2. Karena switch jauh lebih bersih, rapi, dan mudah dibaca ketika kita mencocokkan satu variabel yang sama dengan banyak nilai spesifik (seperti mencocokkan nama-nama hari: senin, selasa, rabu, dll.), tanpa harus menulis ulang nama variabel berkali-kali seperti pada if...else if.
// 3. Letaknya di antara case "sabtu" dan case "minggu". Karena untuk memanfaatkan teknik fall-through (tembus ke bawah). Karena promo hari Sabtu dan Minggu persyaratannya sama (potongan 5000), dan itu bisa menggabungkannya jadi satu aksi tanpa menulis kode dua kali.
// 4.a. "" (String kosong)
// b. null (Nilai kosong/null)
// c. undefined (Variabel yang belum diisi nilai)
// 5.Hasil if (jumlahBeli): Bernilai true (masuk ke dalam blok if) dan Hasil if (jumlahBeli > 0): Bernilai false (terlewati).
// Kenapa berbeda? Karena -1 adalah angka negatif yang di dalam JavaScript termasuk kategori nilai Truthy (dianggap ada isinya secara eksistensi). Namun, secara logika matematika, -1 tentu saja tidak lebih besar dari 0, sehingga pengecekan perbandingan > 0 menghasilkan false.

