// Langkah 1: Tebak Dulu, Baru Cek 

// Tebakan: 13
// Hasil asli: 13 ✔
console.log(7 + 3 * 2); 
// Tebakan: 20
// Hasil asli: 20 ✔
console.log((7 + 3) * 2);
// Tebakan: 2
// Hasil asli: 2 ✔
console.log(17 % 5);
// Tebakan: 8
// Hasil asli: 8 ✔
console.log(2 ** 3);
// Tebakan: true
// Hasil asli: true ✔      
console.log(5 == "5");
// Tebakan: false
// Hasil asli: false ✔
console.log(5 === "5");
// Tebakan: false
// Hasil asli: false ✔
console.log(true && false);
// Tebakan: true
// Hasil asli: true ✔
console.log(true || false);
// Tebakan: false
// Hasil asli: false ✔
console.log(!true);
// Tebakan: false
// Hasil asli: false ✔
console.log(10 > 5 && 3 > 8);

// JAWABAN PERTANYAAN DARI LANGKAH 1:

// 1. menurut saya yang paling sulit adalah ketika saya mengerjakan nomer 6 - 10 karena saya masih lumayan bingung dengan true dan false tersebut.
// 2. Karena didalam ilmu matematika itu penjumlahan perkalian atau pembagian dikerjakan terlebih dahulu daripada penjumlahan pertambahan maupun pengurangan, kecuali penjumlahan tersebut ada didalam lingkup buka kurung tutup ().
// 3. Karena tanda sama dengan 2 (==) itu hanya membandingkan nilai dari kedua variabel, sedangkan tanda sama dengan 3 (===) itu membandingkan nilai dan tipe data dari kedua variabel, yang satu itu variabel number sedangkan yang satu lagi itu variabel string. 

// Langkah 2: Perbaiki 4 Kesalahan 

const hargaKopi = 18000;
const hargaTeh = 7500;
let jumlahMember = 5;
let sudahMember = true;
let uangDiterima = 51000; // FIX: Mengganti dari string ke number

// Total 2 kopi + 2 teh. Seharusnya: 51000
// FIX: hargaKopinya dikalikan 2, agar menjadi 51000
let totalPesanan = hargaKopi * 2 + hargaTeh * 2;

// Uang diterima sama persis dengan total? Seharusnya: true
// FIX: Menggunakan operator perbandingan ketat (===) untuk membandingkan nilai dan tipe data
let uangPas = uangDiterima === totalPesanan;

// Tambah 1 member baru. Seharusnya jumlahMember jadi 6
// FIX: menambahkan operator penjumlahan (+=) agar menjadi 6
 jumlahMember += 1;

// Dapat diskon jika sudah member ATAU total lebih dari 100000. Seharusnya: true
// FIX: Mengganti operator logika dari && menjadi || agar sesuai dengan kondisi yang diberikan
let dapatDiskon = sudahMember || totalPesanan > 100000;

console.log(totalPesanan, uangPas, jumlahMember, dapatDiskon);

// JAWABAN PERTANYAAN DARI LANGKAH 2:

// 1. a. Kesalahan yang pertama adalah mengubah tipe data string menjadi tipe data number pada angka 51000,dan perbaikannya adalah menghapus tipe data string dan menggantinya dengan tipe data number.
//    b. Kesalahan yang kedua adalah hargaKopi tidak dikalikan 2, dan perbaikannya adalah mengalihkan hargaKopi dengan 2 agar totalPesanan menjadi 51000.
//    c. Kesalahan yang ketiga adalah jumlahMember tidak ditambahkan 1, dan perbaikannya adalah menambahkan operator penjumlahan (+=) agar jumlahMember menjadi 6.
//    d. Kesalahan yang keempat adalah menggunakan operator logika && pada kondisi dapatDiskon, dan perbaikannya adalah mengganti operator logika menjadi || agar sesuai dengan kondisi yang diberikan.
// 2. Karena === memeriksa tipe data secara ketat ("51000" adalah string, sedangkan totalPesanan adalah angka). 
//    Supaya true, maka diubahlah uangDiterima menjadi angka menggunakan Number(uangDiterima).
// 3. && (DAN) kedua syarat harus benar. || (ATAU) salah satu syarat saja sudah cukup. 
//    Contoh pada kode: Pembeli sudah member (true), sehingga dengan || hasilnya tetap true meskipun total pesanan tidak lebih dari 100.000.

// Langkah 3: Bikin Kasir Sendiri 

const namaBarang = "Es Krim Matcha";
const hargaSatuan = 15000;
const TARIF_PAJAK = 0.11;

let jumlahBeli = 4;
let uangDibayar = 80000;

// Hitung subtotal
let subtotal = hargaSatuan * jumlahBeli; // 15000 * 4 = 60000

// Hitung pajak
let pajak = subtotal * TARIF_PAJAK; // 6600

// Total bayar awal
let totalBayar = subtotal + pajak; // 66600

// Menggunakan minimal 2 operator penugasan ringkas (+= dan -=)
let biayaLayanan = 3000;
totalBayar += biayaLayanan; // Total bayar bertambah 3000 menjadi 69600

let potonganPromo = 5000;
totalBayar -= potonganPromo; // Total bayar dikurangi 5000 menjadi 64600

// Hitung kembalian (Uang dibayar dikurangi total bayar)
let kembalian = uangDibayar - totalBayar; // 80000 - 64600 = 15400

// Cek apakah jumlah beli genap menggunakan %
let jumlahGenap = jumlahBeli % 2 === 0;

// 3 Variabel Boolean menggunakan operator perbandingan dan logika
let uangCukup = uangDibayar >= totalBayar;
let gratisOngkir = subtotal >= 50000 || jumlahBeli >= 5;
let syaratVIP = (jumlahBeli > 2) && (subtotal > 50000); // Menggunakan tanda kurung ()

// Tampilkan semua hasil dengan rapi
console.log("Barang      : " + namaBarang);
console.log("Jumlah      : " + jumlahBeli);
console.log("Subtotal    : " + subtotal);
console.log("Pajak (11%) : " + pajak);
console.log("Total bayar : " + totalBayar);
console.log("Uang dibayar: " + uangDibayar);
console.log("Kembalian   : " + kembalian);
console.log("Uang cukup? : " + uangCukup);
console.log("Jumlah genap? : " + jumlahGenap);
console.log("Syarat VIP? : " + syaratVIP);


// JAWABAN PERTANYAAN DARI LANGKAH 3:

// 1. Satu variabel Boolean: uangCukup
// - Artinya mengecek apakah uang yang dibayarkan lebih besar atau sama dengan total yang harus dibayar. 
// Hasilnya true, karena uangDibayar (80000) lebih besar daripada totalBayar (64600).

// 2. Pada variabel syaratVIP: let syaratVIP = (jumlahBeli > 2) || (subtotal > 50000);
// Hasil sebelum dan sesudah tetap true. Namun jika salah satu kondisinya tidak terpenuhi,maka penggunaan || akan tetap menghasilkan true (karena salah satunya benar), sedangkan && akan menghasilkan false.

// 3. Contoh pada kondisi logika: let syaratVIP = (jumlahBeli > 2) && (subtotal > 50000);
// Tanda kurung memastikan pengelompokan logika berjalan terpisah dengan jelas dan terhindar dari kesalahan prioritas operator.
