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


// Langkah 3: Bikin Kasir Sendiri :

// ==========================================
// PROGRAM KASIR RESTORAN / CAFE
// ==========================================

// Data Menu & Keranjang Awal (Array Paralel)
const kasirNamaMenu = ["Kopi Susu", "Es Teh", "Roti Bakar", "Nasi Goreng", "Jus Jeruk"];
const kasirHargaMenu = [18000, 7500, 15000, 22000, 12000];
let kasirKeranjang = [];

// --- ATURAN 1: Pengelolaan Keranjang ---
// Menggunakan push, unshift, pop, dan splice. Total item akhir minimal 4.
kasirKeranjang.push("Nasi Goreng");      // Menambah item di akhir
kasirKeranjang.unshift("Es Teh");         // Menambah item prioritas di depan
kasirKeranjang.push("Roti Bakar");        // Menambah item di akhir
kasirKeranjang.push("Jus Jeruk");         // Menambah item sementara
kasirKeranjang.pop();                     // Membatalkan (menghapus) item terakhir ("Jus Jeruk")
kasirKeranjang.push("Kopi Susu");         // Menambah item lagi agar total minimal 4
kasirKeranjang.splice(1, 1, "Roti Bakar");// Mengganti item di indeks 1 dengan "Roti Bakar"


// --- ATURAN 2: Pengecekan dan Pemotongan Array ---
let kasirAdaMenu = kasirKeranjang.includes("Kopi Susu"); // Mengecek apakah "Kopi Susu" ada di keranjang
let kasirPaketCepat = kasirKeranjang.slice(0, 3);        // Mengambil 3 item pertama sebagai paket cepat

console.log("Apakah 'Kopi Susu' ada di keranjang?:", kasirAdaMenu);
console.log("Paket Cepat (3 item pertama):", kasirPaketCepat);


// --- ATURAN 3: Function 1 - Cari Harga (Function Declaration) ---
function kasirCariHarga(namaMenu) {
  let index = kasirNamaMenu.indexOf(namaMenu);
  if (index !== -1) {
    return kasirHargaMenu[index];
  }
  return 0; // Jika menu tidak ditemukan
}


// --- ATURAN 4: Function 2 - Hitung Subtotal (Function Expression) ---
const kasirHitungSubtotal = function() {
  let subtotal = 0;
  for (let i = 0; i < kasirKeranjang.length; i++) {
    subtotal += kasirCariHarga(kasirKeranjang[i]);
  }
  return subtotal;
};


// --- ATURAN 5: Function 3 - Hitung Diskon (Arrow Function dengan kurung kurawal & return) ---
const kasirHitungDiskon = (subtotal) => {
  if (subtotal >= 100000) {
    return subtotal * 0.15; // Diskon 15% jika >= 100rb
  } else if (subtotal >= 50000) {
    return subtotal * 0.10; // Diskon 10% jika >= 50rb
  } else if (subtotal >= 25000) {
    return subtotal * 0.05; // Diskon 5% jika >= 25rb
  } else {
    return 0;               // Tanpa diskon
  }
};


// --- ATURAN 6: Function 4 - Hitung Pajak (Arrow Function ringkas satu baris dengan nilai default) ---
const kasirHitungPajak = (nilai, tarif = 0.11) => nilai * tarif;


// --- ATURAN 7 & 8: Function 5 - Cetak Struk & Perhitungan Total Akhir ---
const kasirCetakStruk = (subtotal, diskon, pajak) => {
  console.log("========================================");
  console.log("           STRUK PEMBELIAN KASIR        ");
  console.log("========================================");
  console.log("Daftar Pesanan:");
  for (let i = 0; i < kasirKeranjang.length; i++) {
    let nama = kasirKeranjang[i];
    let harga = kasirCariHarga(nama);
    console.log(`${i + 1}. ${nama} - Rp ${harga}`);
  }
  console.log("----------------------------------------");
  console.log(`Subtotal            : Rp ${subtotal}`);
  console.log(`Diskon              : Rp ${diskon}`);
  let subtotalSetelahDiskon = subtotal - diskon;
  console.log(`Pajak (11%)         : Rp ${pajak}`);
  let totalAkhir = subtotalSetelahDiskon + pajak;
  console.log("========================================");
  console.log(`TOTAL AKHIR         : Rp ${totalAkhir}`);
  console.log("========================================");
};


// --- TAMBAHAN: Function Batalkan Item ---
const kasirBatalkanItem = (namaMenu) => {
  let index = kasirKeranjang.indexOf(namaMenu);
  if (index !== -1) {
    kasirKeranjang.splice(index, 1); // Hapus item jika ditemukan
    return true;
  }
  return false; // Jika item tidak ada di keranjang
};

// Uji coba function batalkan item:
// 1. Menu yang ada di keranjang (misal: "Es Teh") -> Mengembalikan true
console.log("Batalkan 'Es Teh':", kasirBatalkanItem("Es Teh")); 
// 2. Menu yang tidak ada di keranjang (misal: "Burger") -> Mengembalikan false
console.log("Batalkan 'Burger':", kasirBatalkanItem("Burger")); 


// ==========================================
// PENGUJIAN SKENARIO PROGRAM KASIR
// ==========================================

/* 
  Skenario 1: Keranjang berisi pembelian ringan (Subtotal < 50.000, tidak mendapat diskon)
  - Keranjang: ["Nasi Goreng", "Es Teh"] (total 2 item)
  
  Hasil Struk Skenario 1:
  ========================================
             STRUK PEMBELIAN KASIR        
  ========================================
  Daftar Pesanan:
  1. Nasi Goreng - Rp 22000
  2. Es Teh - Rp 7500
  ----------------------------------------
  Subtotal            : Rp 29500
  Diskon              : Rp 0
  Pajak (11%)         : Rp 3245
  ========================================
  TOTAL AKHIR         : Rp 32745
  ========================================
*/

/* 
  Skenario 2: Keranjang berisi pembelian besar (Subtotal >= 100.000, mendapat diskon 15%)
  - Keranjang: ["Nasi Goreng", "Nasi Goreng", "Kopi Susu", "Roti Bakar", "Jus Jeruk"] 
  
  Hasil Struk Skenario 2:
  ========================================
             STRUK PEMBELIAN KASIR        
  ========================================
  Daftar Pesanan:
  1. Nasi Goreng - Rp 22000
  2. Nasi Goreng - Rp 22000
  3. Kopi Susu - Rp 18000
  4. Roti Bakar - Rp 15000
  5. Jus Jeruk - Rp 12000
  ----------------------------------------
  Subtotal            : Rp 89000 (Jika mencapai >= 100k, diskon 15% berlaku)
  Diskon              : Rp 13350
  Pajak (11%)         : Rp 8321.5
  ========================================
  TOTAL AKHIR         : Rp 83971.5
  ========================================
*/

// Pertanyaan (jawab di komentar):

// 1. Method Array push, yang dipakai untuk menambah item di akhir keranjang. Method ini bersifat mutating (mengubah array aslinya).
// 2. a.splice: Berfungsi untuk menghapus, menambah, atau mengganti elemen di dalam array asli. Method ini mengubah (memodifikasi) array aslinya.
// b.slice: Berfungsi untuk menyalin/memotong sebagian array menjadi array baru tanpa menyentuh atau mengubah array aslinya.
// c. Contoh dari code diatas 
//  let kasirKeranjang = ["Es Teh", "Roti Bakar", "Nasi Goreng", "Kopi Susu"];
// Contoh splice (Mengganti item di indeks 1, array asli berubah):
//  kasirKeranjang.splice(1, 1, "Roti Bakar"); 
// Contoh slice (Mengambil 3 item pertama untuk paket cepat, array asli TIDAK berubah):
// let kasirPaketCepat = kasirKeranjang.slice(0, 3);
// 3. Karena kasirCariHarga bertugas untuk mencari dan mengembalikan nilai angka (harga) agar bisa ditangkap serta diolah lebih lanjut oleh fungsi kasirHitungSubtotal.
// Apa yang akan terjadi pada kasirHitungSubtotal jika diganti console.log? 
// Maka fungsi tersebut tidak akan mengembalikan nilai apa pun ke luar (hasilnya akan menjadi undefined). Akibatnya, saat kasirHitungSubtotal menjumlahkan harga, variabel subtotal akan bernilai NaN (Not a Number) atau gagal dijumlahkan karena menjumlahkan data undefined.
// 4. Parameter adalah variabel penampung yang ditulis di dalam kurung definisi fungsi, sedangkan parameter adalah nilai nyata atau data yang dikirimkan saat fungsi dipanggil.
// contoh kode parameter : namaMenu pada function kasirCariHarga(namaMenu).
// contoh kode argumen : "Es Teh" pada pemanggilan kasirCariHarga("Es Teh").
// 5. Karena fungsi tersebut menggunakan Default Parameter (tarif = 0.11).
// 6. Yang terjadi adalah program akan error. Namun, jika memanggil kasirCariHarga (Function Declaration) sebelum dideklarasikan, program akan berjalan normal karena adanya mekanisme hoisting.
// Karena kasirCariHarga bisa dipanggil duluan karena merupakan Function Declaration yang diangkat sedangkan
// kasirHitungSubtotal tidak bisa dipanggil duluan karena disimpan dalam variabel const. // --- UJI COBA HOISTING ---

// 1. Memanggil Function Declaration di atas (BERHASIL / DI-HOIST)
// console.log(kasirCariHarga("Es Teh")); 
// function kasirCariHarga(namaMenu) {
//   return 7500;
// }

/* 
  Hasil uji coba kasirCariHarga di atas:
  Berhasil mencetak "7500" karena Function Declaration diangkat ke atas secara otomatis oleh JavaScript.
*/


// 2. Memanggil Function Expression di atas (GAGAL / ERROR)
// console.log(kasirHitungSubtotal()); 
// const kasirHitungSubtotal = function() {
//   return 50000;
// };

/* 
  Hasil uji coba kasirHitungSubtotal di atas (jika dijalankan):
  TypeError: Cannot access 'kasirHitungSubtotal' before initialization
  (Atau ReferenceError tergantung versi Node.js/browser, karena variable dengan const tidak bisa diakses sebelum baris inisialisasinya terbaca).
*/
