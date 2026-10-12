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
