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

// 1.a. kesalahan di bagian Urutan Diskon: Urutan pengecekan if-else dimulai dari nominal terkecil sehingga diskon besar terlewat, diperbaiki dengan membalik urutan dari yang terbesar ke terkecil.
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
