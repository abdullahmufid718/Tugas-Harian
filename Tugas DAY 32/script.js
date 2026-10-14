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


// Langkah 2: Perbaiki 7 Kesalahan
// Salin kode di bawah di bawah Langkah 1. Kode ini punya 7 kesalahan. Komentar Seharusnya memberi tahu hasil yang benar.

// Nama di kode ini sengaja berbeda dari Langkah 1 agar tidak bentrok.

let daftarBelanja = ["Kopi", "Teh", "Roti"];

// Tambah "Susu" di akhir daftar. Seharusnya: ["Kopi", "Teh", "Roti", "Susu"]
daftarBelanja.push("Susu"); //FIX 1: Mengubah Method Array yang awalnya unshift menjadi push

// Hapus "Teh" (indeks 1) dari daftar. Seharusnya: ["Kopi", "Roti", "Susu"]
daftarBelanja.splice(1, 1); //FIX 2: Mengubah Method Array yang awalnya slice menjadi splice

// Cek apakah "Roti" ada di daftar. Seharusnya: true
let adaRoti = daftarBelanja.includes("Roti"); //FIX 3: Mengubah Method Array yang awalnya indexOf menjadi includes

// Elemen terakhir daftar. Seharusnya: "Susu"
let terakhir = daftarBelanja[daftarBelanja.length - 1]; //FIX 4: menggunakan panjang - 1 karena indeks mulai dari 0

// Harga setelah diskon. Seharusnya hitungDiskon(100000, 20) = 80000
function hitungDiskon(harga, persen) {
return harga - (harga * persen) / 100; //FIX 5 : ditambah keyword "return", agar fungsi tersebut bisa "mengembalikan" atau menghasilkan nilai akhir yang bisa dipakai di luar fungsi tersebut.
}

// Pajak 11%. Seharusnya hitungPajak(80000) = 8800
const hitungPajak = (subtotal) => {
return subtotal * 0.11; //FIX 6 : ditambah keyword "return", agar fungsi tersebut bisa "mengembalikan" atau menghasilkan nilai akhir yang bisa dipakai di luar fungsi tersebut.
};

console.log(daftarBelanja, adaRoti, terakhir);
console.log(hitungDiskon(100000, 20));
console.log(hitungPajak(80000));

// Total dengan pajak. Seharusnya hitungTotal(80000, 8800) = 88800
const hitungTotal = (subtotal, pajak) => subtotal + pajak; //FIX 7 : Menukar posisi const dengan console agar berjalannya program
console.log(hitungTotal(80000, 8800)); 

// Pertanyaan (jawab di komentar):

// 1. a. Salah Method Array-nya, perbaikannya mengubah Method Array yang awalnya unshift menjadi push.
// b. Salah Method Array-nya, perbaikannya mengubah Method Array yang awalnya slice menjadi splice.
// c. Salah Method Array-nya, perbaikannya mengubah Method Array yang awalnya indexOf menjadi includes.
// d. Kurang menambahkan -1, perbaikannya menambah -1 setelah length.
// e. Kurang menambahkan return, perbaikannya menambahkan return di bagian sebelum harga - .
// f. Kurang menambahkan keyword return, perbaikannya menambahkan return di bagian sebelum subtotal * .
// h. Salah posisi antara const dengan console.log, perbaikannya menukar posisi console.log dengan const.
// 2. a. Yang Menyebabkan Error di Console adalah Memanggil fungsi hitungTotal sebelum dideklarasikan (menyebabkan ReferenceError).
// b. Yang Tidak Error tetapi berjalan dengan normal, tetapi Hasilnya Salah, pada Penggunaan unshift, slice, salah indeks length,
//  serta lupa menulis return pada hitungDiskon dan hitungPajak (tidak membuat program crash, tetapi menghasilkan data yang salah atau undefined).
// 3. Karena keduanya sama-sama tidak memiliki perintah return, meskipun bentuk penulisannya berbeda.
