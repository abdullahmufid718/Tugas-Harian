// const pajakPPN = 11; // Global Scope


// function hitungHArga(harga) {
//     // Variabel pajakPPN dari Global Scope dapat diakses di sini
//     const pajak = harga * (pajakPPN / 100);
//     return harga + pajak;
// }

// console.log(hitungHarga(1000000)); // Output: 111000
// console.log(pajakPPN); // Output 11 - dapet diakses dimana saja

//  function prosesLogin() {
//   const tokenSesi = "abc123xyz"; // Local Scope — hanya ada di dalam fungsi ini
//   console.log("Token:", tokenSesi); // Output: Token: abc123xyz
// }

// prosesLogin();
// console.log(tokenSesi);
// // ReferenceError: tokenSesi is not defined
// // Variabel ini tidak ada di luar fungsi prosesLogin

// if (true) {
//   let pesanDalam = "Saya ada di dalam blok if";
//   console.log(pesanDalam); // Output: Saya ada di dalam blok if
// }
// console.log(pesanDalam);
// // ReferenceError: pesanDalam is not defined

// // Contoh dengan for loop
// for (let i = 0; i < 3; i++) {
//   // variabel i hanya ada di dalam blok for
// }
// console.log(i);
// // ReferenceError: i is not defined

// const nama = "Global"; // Global Scope

// function luarFungsi() {
//   const nama = "Luar"; // Function Scope — menutupi variabel global di dalam fungsi ini

//   function dalamFungsi() {
//     const nama = "Dalam"; // Function Scope — menutupi variabel luar di dalam fungsi ini
//     console.log(nama); // Output: "Dalam"
//   }

//   dalamFungsi();
//   console.log(nama); // Output: "Luar"
// }

// luarFungsi();
// console.log(nama); // Output: "Global"

// // Dipanggil sebelum dideklarasikan
// sapaUser(); // Output: Halo, Pengguna!

// // Deklarasi fungsi ada di bawah
// function sapaUser() {
//   console.log("Halo, Pengguna!");
// }

// console.log(warna)// Output: undefined — deklarasi diangkat, tapi nilai belum ada
// var warna = "biru";
// console.log(warna); // Output: "biru"

// console.log(kota);
// // ReferenceError: Cannot access 'kota' before initialization
// const kota = "Jakarta";

// function buatPenghitung() {
//   let hitungan = 0; // Variabel di scope luar

//   // Fungsi dalam — memiliki akses ke variabel "hitungan"
//   return function tambah() {
//     hitungan++;
//     console.log("Hitungan saat ini:", hitungan);
//   };
// }

// const penghitung = buatPenghitung();
// // Fungsi buatPenghitung() selesai dieksekusi, namun "hitungan" tetap diingat

// penghitung(); // Output: Hitungan saat ini: 1
// penghitung(); // Output: Hitungan saat ini: 2
// penghitung(); // Output: Hitungan saat ini: 3

// function buatRekening(saldoAwal) {
//   let saldo = saldoAwal; // Variabel privat — tidak dapat diakses dari luar

//   return {
//     setor(jumlah) {
//       saldo += jumlah;
//       console.log("Setoran berhasil. Saldo:", saldo);
//     },
//     tarik(jumlah) {
//       if (jumlah > saldo) {
//         console.log("Saldo tidak mencukupi.");
//         return;
//       }
//       saldo -= jumlah;
//       console.log("Penarikan berhasil. Saldo:", saldo);
//     },
//     cekSaldo() {
//       console.log("Saldo saat ini:", saldo);
//     },
//   };
// }

// const rekeningBudiAwal = buatRekening(1000000);

// rekeningBudiAwal.cekSaldo(); // Output: Saldo saat ini: 1000000
// rekeningBudiAwal.setor(500000); // Output: Setoran berhasil. Saldo: 1500000
// rekeningBudiAwal.tarik(200000); // Output: Penarikan berhasil. Saldo: 1300000

// // Variabel "saldo" tidak dapat diakses langsung dari luar
// console.log(rekeningBudiAwal.saldo); // Output: undefined — terlindungi oleh closure

// const rekeningAni = buatRekening(500000);
// const rekeningBudi = buatRekening(2000000);

// rekeningAni.setor(100000);
// // Output: Setoran berhasil. Saldo: 600000

// rekeningBudi.tarik(500000);
// // Output: Penarikan berhasil. Saldo: 1500000

// // Kedua rekening memiliki variabel "saldo" yang sepenuhnya terpisah
// rekeningAni.cekSaldo(); // Output: Saldo saat ini: 600000
// rekeningBudi.cekSaldo(); // Output: Saldo saat ini: 1500000



// Langkah 1: Tebak Dulu, Baru Cek : 

// Potongan A
const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";
    console.log(nama); // Outputnya : Dalam
  }                    // Hasil aslinya : Dalam ✔

  dalam();
  console.log(nama); // Outputnya : Luar 
}                    // Hasil aslinya : Luar ✔

luar();
console.log(nama); // Outputnya : Luar, Alasannya : Global tidak kebaca :)
                   // Hasil aslinya : Global ✔
const diskonGlobal = 10;

function hitung(harga) {
  const diskonLokal = 5;
  return harga - diskonGlobal - diskonLokal;
}

console.log(hitung(100)); // Outputnya : 85
                          // Hasil aslinya : 85 ✔
if (true) {
  let pesanBlok = "di dalam blok";
  console.log(pesanBlok); // Outputnya : di dalam blok
}                         // Hasil aslinya : di dalam blok ✔

for (let i = 0; i < 2; i++) {
  console.log("putaran", i); // Outputnya : putaran 1, Alasannya : mulai dan berhenti di angka 1 aja
}                            // Hasil aslinya : putaran 0 ✔
                             //                 putaran 1 ✔
// console.log(pesanBlok); // Outputnya : di dalam blok
//                         // Hasil aslinya Uncaught ReferenceError: pesanBlok is not defined
// console.log(i); // Outputnya : 0
//                  // Hasil aslinya : script.js:174 Uncaught ReferenceError: i is not defined     

// Potongan B
console.log(sapa()); // Outputnya : Halo!
                     // Hasil aslinya : Halo! ✔
function sapa() {
  return "Halo!";
}

console.log(warna); // Outputnya : undefined
var warna = "biru"; // Hasil aslinya : undefined ✔
console.log(warna); // Outputnya : biru 
                    // Hasil aslinya : biru ✔
// Tebakan paling sulit : "Tidak ada"

// console.log(lokasi); // Outputnya : Sleman
// const lokasi = "Sleman"; // Hasil aslinya : Uncaught ReferenceError: Cannot access 'lokasi' before initialization ✔
// console.log(salam()); // Outputnya : Hai 
// const salam = function () { return "Hai"; }; // Hasil aslinya : script.js:190 Uncaught ReferenceError: Cannot access 'salam' before initialization ✔

// Potongan C
function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    return hitungan;
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

console.log(penghitungA()); // Outputnya : hitungan 1, Alasannya : mengira tulisan hitungan nya juga masuk ke outputnya
                            // Hasil aslinya : 1 ✔
console.log(penghitungA()); // Outputnya : hitungan 2, Alasannya : mengira tulisan hitungan nya juga masuk ke outputnya
                            // Hasil aslinya : 2 ✔
console.log(penghitungA()); // Outputnya : hitungan 3, Alasannya : mengira tulisan hitungan nya juga masuk ke outputnya
                            // Hasil aslinya : 3 ✔
console.log(penghitungB()); // Outputnya : hitungan 4, Alasannya : mengira tulisan hitungan nya juga masuk ke outputnya dan tetap melanjut kan perhitungannya, tidak di bedakan anatara perhitungan A dan B nya :)
                            // Hasil aslinya : 1 ✔
console.log(penghitungA()); // Outputnya : hitungan 5,  Alasannya : mengira tulisan hitungan nya juga masuk ke outputnya dan tetap melanjut kan perhitungannya, tidak di bedakan anatara perhitungan A dan B nya :)
                            // Hasil aslinya : 4 ✔

// Pertanyaan (jawab di komentar):

// 1. a. Kenapa tiga console.log(nama) menghasilkan nilai yang berbeda?
//    = Karena JavaScript menggunakan prinsip Scope Chain. Saat mencari variabel nama, ia akan mencarinya mulai dari scope terdekat di dalam fungsi itu sendiri ("Dalam", lalu "Luar"), hingga ke scope global ("Global").
//    b. Kenapa hitung(100) tetap bisa memakai diskonGlobal?
//    = Karena diskonGlobal berada di Global Scope, yang berarti variabel tersebut dapat diakses dari mana saja, termasuk dari dalam fungsi hitung().
//    c. Kenapa pesanBlok dan i error di luar blok?
//    = Karena keduanya dideklarasikan menggunakan let yang memiliki Block Scope, sehingga hanya bisa diakses di dalam tanda kurung kurawal {} tempat mereka dibuat.
// 2. a. kenapa sapa() bisa dipanggil sebelum didefinisikan?
//    = Karena sapa() adalah Function Declaration yang mengalami Hoisting penuh, di mana seluruh isi fungsi diangkat ke atas oleh JavaScript sebelum kode dijalankan.
//    b. sedangkan warna bernilai undefined ?
//    = Karena variabel var di-hoist hanya pada bagian deklarasinya saja, sedangkan nilai penugasannya ("biru") tetap tertinggal di baris aslinya.
//    c. dan lokasi serta salam menimbulkan error?
//    = Karena variabel const (serta Function Expression) tidak memperbolehkan akses sebelum baris inisialisasinya dieksekusi (ReferenceError), meskipun secara teknis deklarasinya terbaca.
// 3. a. kenapa penghitungA terus bertambah padahal buatPenghitung sudah selesai dijalankan?
//    = Karena adanya konsep Closure
//    b. Kenapa penghitungB mulai dari 1 lagi?
//    = Karena setiap kali buatPenghitung() dipanggil, JavaScript akan membuat wadah atau salinan closure baru yang sepenuhnya independen dan terpisah dari penghitungA.


// Langkah 2: Perbaiki 8 Kesalahan :

// Cek stok. Seharusnya tercetak: Stok aman
const stok = 10;
let pesanStok = "" // FIX 1: Memindahkan deklarasi pesanStok keluar blok agar dapat diakses oleh console.log di luar
if (stok > 5) {
 pesanStok = "Stok aman";
}
console.log(pesanStok);

// Potongan 10%. Seharusnya tercetak: 45000
function hitungPotongan(harga) {
  const potongan = harga * 0.1;
  return harga - potongan;
}
console.log(hitungPotongan(50000)); // FIX 2: Mencetak hasil pengembalian fungsi hitungPotongan karena variabel potongan bersifat local scope

// Sambutan. Seharusnya tercetak: Selamat datang di Kedai Senja
const sambutan = function () {
  return "Selamat datang di Kedai Senja";
};
console.log(sambutan()); // FIX 3: Memindahkan pemanggilan function expression setelah deklarasinya, karena tidak mengalami hoisting penuh

// Kota. Seharusnya tercetak: Yogyakarta
let kota = "Yogyakarta";
console.log(kota); // FIX 4: Memindahkan perintah console.log ke bawah deklarasi let agar terhindar dari Temporal Dead Zone

// Total awal 100000. Diskon 90000 hanya dipakai di dalam blok.
// Seharusnya setelah blok, total tetap: 100000
var total = 100000;
if (true) {
  let total = 90000; // FIX 5: Mengubah var menjadi let di dalam blok agar memiliki block scope dan tidak menimpa variabel total global
}
console.log(total);

// Saldo kas. Seharusnya setelah tambahKas(50000): 150000
let saldoKas = 100000;
function tambahKas(jumlah) {
// FIX 6: Mengapus kata kunci let agar fungsi langsung memodifikasi variabel saldoKas di scope luar (menghindari shadowing)
  saldoKas += jumlah;
}
tambahKas(50000);
console.log(saldoKas);

// Nomor antrean. Seharusnya tercetak: 1 2 3
function buatAntrean() {
  let nomor = 0; // FIX 7 : Memindahkan variabel nomor ke fungsi luar agar closure dapat mengingat dan mempertahankan nilainya
    return function () {
    nomor++;
    return nomor;
  };
}
const ambilNomor = buatAntrean();
console.log(ambilNomor(), ambilNomor(), ambilNomor());

// Dompet. Seharusnya setelah belanja(30000), cekSaldo() mengembalikan: 70000
function buatDompet(saldoAwal) {
  let saldo = saldoAwal;
  return {
    belanja(jumlah) {
      saldo -= jumlah;
    },
    cekSaldo() {
      return saldo; // FIX 8: Mengakses langsung variabel saldo dari closure, bukan menggunakan this.saldo
    },
  };
}
const dompet = buatDompet(100000);
dompet.belanja(30000);
console.log(dompet.cekSaldo());

// Pertanyaan (jawab di komentar):

// 1. 8 Kesalahan dan Perbaikannya : 
// a. Cek Stok: Variabel pesanStok tidak terbaca di luar blok if $\rightarrow$ Perbaikannya: mendeklarasikan variabel di luar blok.
// b. Potongan 10%: Mencetak variabel lokal potongan yang tidak bisa diakses di luar fungsi $\rightarrow$ Perbaikannya: mencetak langsung hasil pemanggilan fungsi hitungPotongan().
// c. Sambutan: Memanggil Function Expression sebelum dideklarasikan $\rightarrow$ Perbaikannya: memindahkan pemanggilan fungsi ke bawah deklarasinya.
// d. Kota: Mengakses variabel let sebelum diinisialisasi (Temporal Dead Zone) $\rightarrow$ Perbaikannya: memindahkan console.log ke bawah deklarasi variabel.
// e. Total Awal: Penggunaan var di dalam blok membuat variabel global tertimpa $\rightarrow$ Perbaikannya: menggunakan let di dalam blok agar memiliki block scope.
// f. Saldo Kas: Variabel global tertimpa oleh variabel lokal baru di dalam fungsi $\rightarrow$ Perbaikannya: menghapus kata kunci let di dalam fungsinya.
// g. Nomor Antrean: Variabel nomor diletakkan di dalam fungsi inner sehingga selalu tereset $\rightarrow$ Perbaikannya: memindahkan variabel nomor ke fungsi luar agar teringat oleh closure.
// h. Dompet: Menggunakan this.saldo untuk mengakses variabel lokal closure $\rightarrow$ Perbaikannya: mengakses langsung variabel saldo tanpa menggunakan this.
// 2. a. Penyebab Error di Console: Nomor 3 (karena memanggil fungsi sebelum didefinisikan) dan nomor 4 (karena mengakses let sebelum inisialisasi / ReferenceError).
// b. Tidak Error tetapi Hasil Salah: Nomor 1, 2, 5, 6, 7, dan 8 (karena kode berjalan tanpa error merah, namun output data di konsol tidak sesuai dengan yang diharapkan).
// 3. Karena adanya penambahan kata kunci let, JavaScript menganggap bahwa kita sedang membuat variabel lokal baru yang hanya hidup di dalam fungsi tersebut, bukan memodifikasi variabel global di luar.
// Istilah kejadian ini: Variable Shadowing (variabel di dalam "menutupi" atau menyembunyikan variabel di luar yang namanya sama).
// 4. Karena this di dalam method objek hanya merujuk pada objek tempat ia dipanggil (dompet), bukan pada variabel lokal yang dibungkus oleh fungsi closure (buatDompet).
// Properti saldo tidak pernah dilekatkan ke objek menggunakan this, melainkan disimpan secara privat di dalam ruang lingkup fungsi pembuatnya.


// Langkah 3: Bikin Kasir Sendiri :

// PROGRAM KASIR - LANGKAH 3 (CLOSURE & FACTORY)

// Syarat 1: Global scope NAMA_WARUNG dan TARIF_PAJAK
const NAMA_WARUNG = "KEDAI MAKANAN SEDERHANA MADIUN";
const TARIF_PAJAK = 0.11;

// Syarat 2: Panggil function declaration sebelum didefinisikan (Hoisting)
cetakJudul();

function cetakJudul() {
  console.log("========================================");
  console.log(NAMA_WARUNG.toUpperCase());
  console.log("========================================");
}

// Syarat 3 & 4: Function pabrik buatKasir dengan data privat (Closure)
function buatKasir(namaKasir, modalAwal) {
  // Data privat menggunakan let (tidak bisa diubah langsung dari luar object)
  let saldoKas = modalAwal;
  let jumlahTransaksi = 0;
  let riwayat = [];

  return {
    // Syarat 5: catatPenjualan
    catatPenjualan(namaMenu, harga, jumlah) {
      let subtotal = harga * jumlah;
      let pajak = subtotal * TARIF_PAJAK; // Memakai TARIF_PAJAK dari global scope tanpa parameter
      let total = subtotal + pajak;

      saldoKas += total;
      jumlahTransaksi++;
      riwayat.push({ namaMenu, jumlah, total });

      return total;
    },

    // Syarat 6: ambilKas
    ambilKas(jumlah) {
      if (jumlah > saldoKas) {
        return false;
      }
      saldoKas -= jumlah;
      return true;
    },

    // Syarat 7: cekSaldo & lihatRiwayat (mengembalikan salinan dengan .slice())
    cekSaldo() {
      return saldoKas;
    },

    lihatRiwayat() {
      return riwayat.slice();
    },

    // Syarat 8: ringkasan
    ringkasan() {
      console.log(`Kasir: ${namaKasir} | Total Transaksi: ${jumlahTransaksi} | Saldo Kas: Rp ${saldoKas.toLocaleString('id-ID')}`);
    }
  };
}

// Syarat 9: Membuat dua kasir dan melakukan simulasi transaksi
const kasirPagi = buatKasir("Rina", 100000);
const kasirMalam = buatKasir("Dodi", 50000);

// Catat minimal 3 penjualan di kasir pagi
kasirPagi.catatPenjualan("Ayam Bakar", 25000, 2);
kasirPagi.catatPenjualan("Es Teh", 5000, 3);
kasirPagi.catatPenjualan("Kentang Goreng", 10000, 1);

// Catat minimal 2 penjualan di kasir malam
kasirMalam.catatPenjualan("Ayam Goreng", 20000, 1);
kasirMalam.catatPenjualan("Es Jeruk", 5000, 2);

// Panggil ambilKas minimal dua kali (satu berhasil, satu gagal)
console.log("Ambil kas Rp 30.000 (Berhasil):", kasirPagi.ambilKas(30000)); // Output: true
console.log("Ambil kas Rp 999.000 (Gagal):", kasirPagi.ambilKas(999000)); // Output: false

// Panggil ringkasan kedua kasir
kasirPagi.ringkasan();
kasirMalam.ringkasan();

// Syarat 10: Pembuktian data privat
console.log("\n--- PEMBUKTIAN DATA PRIVAT ---");
console.log("Saldo awal via cekSaldo():", kasirPagi.cekSaldo());
console.log("Mencoba mengubah saldoKas langsung dari luar menjadi 999999...");
kasirPagi.saldoKas = 999999; // Mencoba menyusupkan properti baru dari luar
console.log("Saldo setelah disusupi (via cekSaldo()):", kasirPagi.cekSaldo()); 
// Hasil komentar: Saldo tetap akurat sesuai perhitungan internal (tidak berubah menjadi 999999 karena terlindungi closure).

// Syarat 11: Pembuktian salinan riwayat (.slice())
console.log("\n--- PEMBUKTIAN SALINAN RIWAYAT ---");
const riwayatSalinan = kasirPagi.lihatRiwayat();
console.log("Panjang riwayat asli sebelum push di salinan:", kasirPagi.lihatRiwayat().length);
riwayatSalinan.push({ namaMenu: "Menu Palsu", jumlah: 99, total: 999999 }); // Menambahkan item ke salinan
console.log("Panjang riwayat salinan setelah push:", riwayatSalinan.length);
console.log("Panjang riwayat asli setelah salinan di-push:", kasirPagi.lihatRiwayat().length);
// Hasil komentar: Panjang riwayat asli tetap aman dan tidak ikut bertambah, membuktikan lihatRiwayat() mengembalikan array baru (salinan).

// Syarat 12: Function pabrik buatPenghitungDiskon (Arrow Function)
function buatPenghitungDiskon(persen) {
  return (harga) => harga - (harga * persen / 100);
}

const diskon10 = buatPenghitungDiskon(10);
const diskon25 = buatPenghitungDiskon(25);

console.log("\n--- SIMULASI DISKON ---");
console.log("Harga 80000 dengan diskon 10%:", diskon10(80000)); // Output: 72000
console.log("Harga 80000 dengan diskon 25%:", diskon25(80000)); // Output: 60000

// Syarat 13: Shadowing Variable
console.log("\n--- PEMBUKTIAN VARIABLE SHADOWING ---");
const statusToko = "Buka (Global)";

function cekStatus() {
  const statusToko = "Tutup Sementara (Lokal)";
  console.log("Di dalam function:", statusToko);
}

cekStatus();
console.log("Di global scope:", statusToko);
// Hasil komentar: 
// Di dalam function tercetak "Tutup Sementara (Lokal)" karena variabel lokal menutupi variabel global.
// Di global scope tercetak "Buka (Global)" karena variabel global tidak terpengaruh oleh perubahan di dalam function.

// Pertanyaan (jawab di komentar):

// 1. Karena saldoKas dideklarasikan menggunakan let di dalam fungsi buatKasir, bukan sebagai properti yang melekat pada objek yang dikembalikan. Variabel tersebut bersifat privat dan tersembunyi.
// Hubungannya dengan Closure: Closure mengunci dan membungkus variabel saldoKas rapat-rapat di dalam ruang lingkup tertutup fungsi pembuatnya,
// sehingga hanya bisa diakses dan diubah melalui method khusus (catatPenjualan, cekSaldo, dll) yang memiliki akses ke ruang lingkup tersebut, sementara dari luar objek ia sama sekali tidak terlihat (undefined).
// 2. Karena setiap kali fungsi buatKasir() dipanggil, JavaScript membuat ruang memori dan salinan lingkungan privat yang baru dan independen. 
// kasirPagi dan kasirMalam memiliki wadah closure masing-masing yang tidak saling terhubung, sehingga perubahan saldo di salah satu kasir tidak akan memengaruhi kasir lainnya.
// 3. a. Variabel yang diingat: saldoKas, jumlahTransaksi, dan riwayat.
// b. Kenapa tidak hilang? Karena method-method di dalam objek yang dikembalikan (seperti catatPenjualan dan cekSaldo) masih aktif mereferensikan variabel-variabel tersebut. 
// Selama objek kasirnya masih digunakan, JavaScript akan menjaga variabel-variabel tersebut tetap hidup di memori (garbage collection tidak menghapusnya).
// 4. Karena TARIF_PAJAK berada di Global Scope, yang berarti ia dapat diakses dari mana saja di dalam file program, termasuk dari dalam fungsi buatKasir maupun method di dalamnya.
// Nama mekanismenya: Scope Chain
// 5. Karena fungsi tersebut adalah Function Declaration, yang mengalami Hoisting penuh (seluruh deklarasi dan isi fungsinya diangkat ke baris paling atas oleh JavaScript sebelum kode dijalankan).
// cetakJudulBaru(); // Uncaught ReferenceError: Cannot access 'cetakJudulBaru' before initialization
// Tambahkan satu percobaan:
// const cetakJudulBaru = function() {
//   console.log("KEDAI");
// };
// cetakJudulBaru(); // Berhasil jika dipanggil setelah didefinisikan
// Catatan: Baris pemanggilan di atas sengaja dijadikan komentar agar tidak memicu error ReferenceError di konsol.
// 6. Dari mekanisme Closure. Saat buatPenghitungDiskon(10) dipanggil pertama kali, nilai 10 disimpan dan "diingat" di dalam ruang lingkup fungsi tersebut. Ketika variabel diskon10(80000) dipanggil kemudian, 
// arrow function di dalamnya tetap bisa mengambil dan menggunakan angka 10 tersebut meskipun fungsi pembuat utamanya sudah lama selesai berjalan.