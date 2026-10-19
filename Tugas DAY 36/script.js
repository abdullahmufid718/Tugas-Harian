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
