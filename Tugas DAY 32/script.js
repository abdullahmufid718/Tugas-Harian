// Langkah 1: Tebak Dulu, Baru Cek :

// Potongan A
let menu = ["Kopi", "Teh", "Roti", "Susu"];
menu.push("Jus");
menu.unshift("Air");
let terakhirDibuang = menu.pop();
let pertamaDibuang = menu.shift();
menu.splice(1, 1);
let irisan = menu.slice(1, 3);

// Outputnya : "Susu", Kurang teliti di bagian Jus nya
// Hasil aslinya : Jus ✔
console.log(terakhirDibuang);

// Outputnya : "Teh", Kurang teliti di bagian Air nya
// Hasil aslinya : Air ✔
console.log(pertamaDibuang);

// Outputnya : ["Kopi", "Teh", "Roti", "Susu"], Semua menu masuk semua termasuk Teh 
// Hasil aslinya : (3) ['Kopi', 'Roti', 'Susu'] ✔
console.log(menu);

// Outputnya : ["Kopi", "Teh"], Mengambil data 2 nilai pertama
// Hasil aslinya : (2) ['Roti', 'Susu'] ✔
console.log(irisan);

// Outputya : 3 , Mengira Susu ada dibagian index 3
// Hasil aslinya : 2 ✔
console.log(menu.indexOf("Susu"));

// Outputnya : -1
// Hasil aslinya : -1 ✔
console.log(menu.indexOf("Nasi"));

// Outputnya : true
// Hasil aslinya : true ✔
console.log(menu.includes("Kopi"));

// Outputnya : 2, Kirain Outputnya number 
// Hasil aslinya : Susu ✔
console.log(menu[menu.length - 1]);


// Potongan B
function tambah(a, b) {
  return a + b;
}

function cetakTambah(a, b) {
// Outputnya : 5
// Hasil aslinya : 5 ✔
  console.log(a + b);
}

let x = tambah(2, 3);
let y = cetakTambah(2, 3);

// Outputnya : 5
// Hasil aslinya : 5 ✔
console.log(x);
// Outputnya : undefined
// Hasil aslinya :  undefined ✔
console.log(y);
// Bagian yang sulit yaitu, dibagian function yang dibawahnya console.log, kirain tidak di eksekusi dibagian tersebut.

// Potongan C
const hitungDiskonPersen = (harga, persen = 10) => harga - (harga * persen) / 100;

// Outputnya : 40000
// Hasil aslinya : 40000 ✔
console.log(hitungDiskonPersen(50000, 20));

// Outputnya : 45000
// Hasil aslinya : 45000 ✔
console.log(hitungDiskonPersen(50000));

function cekAngka(n) {
  if (n < 0) {
    return "negatif";
    console.log("Baris ini muncul atau tidak?");
  }
  return "bukan negatif";
}

// Outputnya : negatif
// Hasil aslinya : negatif ✔
console.log(cekAngka(-5));

// Outputnya : bukan negatif
// Hasil aslinya : bukan negatif ✔
console.log(cekAngka(5));

// Bagian yang tersulit, di bagian hitung diskon persen, masih bingung cara menghitungnya

// Pertanyaan (jawab di komentar):

// 1. Karena pilihan method yang digunakan memperlakukan data secara berbeda, method yang mengubah array aslinya adalah splice(), 
// sedangkan yang tidak yaitu slice().
// 2.Fungsi tambah biasanya menggunakan perintah return. Sedangkan cetakTambah biasanya hanya bertugas menampilkan hasil ke terminal
//  menggunakan console.log di dalam tubuh fungsinya, tetapi tidak menggunakan return.
// 3.Karena fungsi tersebut menggunakan fitur Default Parameter di JavaScript (persen = 10). Jika argumen kedua tidak di isi saat memanggil fungsi, 
// maka JavaScript secara otomatis akan menggunakan nilai bawaan yaitu 10. Jadi, perhitungannya tetap berjalan normal.
// Apakah baris console.log("Baris ini muncul atau tidak?") tercetak? Tidak tercetak sama sekali. Karena baris tersebut berada di bawah perintah return "negatif";.