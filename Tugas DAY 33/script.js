// Langkah 1: Tebak Dulu, Baru Cek :

const produk = { nama: "Kopi Susu", harga: 18000, stok: 10 };

produk.harga = 20000;
produk.kategori = "minuman";
delete produk.stok;
let kunci = "nama";

// Outputnya : Kopi Susu
// Hasil aslinya : Kopi susu ✔
console.log(produk.nama);
// Outputnya : nama, alasannya, mengira bahwa outputnya nama karena let kuncinya nama
// Hasil aslinya : Kopi susu ✔
console.log(produk[kunci]);
// Outputnya :20000
// Hasil aslinya : 20000 ✔
console.log(produk["harga"]);
// Outputnya : undefined
// Hasil aslinya : undefined ✔
console.log(produk.stok);
// Outputnya : true
// Hasil aslinya : true ✔
console.log("kategori" in produk);
// Outputnya : false
// Hasil aslinya : false ✔
console.log("stok" in produk);
// Outputnya : [nama, harga, stok] 
// Hasil aslinya : (3) ['nama', 'harga', 'kategori'] ✔
console.log(Object.keys(produk));
// Outputnya : ["Kopi Susu",  18000, 10 ], alasannya dikira full value yang diambil dari const produk yang diawal
// Hasil aslinya : (3) ['Kopi Susu', 20000, 'minuman'] ✔
console.log(Object.values(produk));

// Potongan B :

const dompet = {
  pemilik: "Rina",
  saldo: 50000,

  belanja(jumlah) {
    this.saldo -= jumlah;
    return this.saldo;
  },

  cekSaldo() {
    console.log(this.pemilik + ": Rp " + this.saldo);
  },
};

let sisa = dompet.belanja(20000);

// Outputnya :30000
// Hasil aslinya : 30000 ✔
console.log(sisa);
// Outputnya : Rina : Rp 30000
// Hasil aslinya : Rina : Rp 30000 ✔
dompet.cekSaldo();
dompet.belanja(10000);
// Outputnya : Rina : Rp 20000
// Hasil aslinya : Rina : Rp 20000 ✔
dompet.cekSaldo();
// Outputnya : 20000
// Hasil aslinya : 20000 ✔
console.log(dompet.saldo);

// Potongan C :

const hari = ["Senin", "Selasa"];

for (let nilai of hari) {
  console.log(nilai); // Outputnya : Senin Selasa
}                     // Hasil aslinya : Senin ✔
                      //                 Selasa ✔
for (let indeks in hari) {
  console.log(indeks); // Outputnya : 0 1
}                      // Hasil aslinya : 0 ✔
                       //                 1 ✔
const kopi = { nama: "Kopi", harga: 18000 };

for (let kolom in kopi) {
  console.log(kolom + ": " + kopi[kolom]); // Outputnya : [nama: "Kopi", harga: 18000] , Alasannya mengira outputnya semua element yang ada di kopi
}                                          // Hasil aslinya : nama : Kopi ✔

for (let huruf of "Kopi") {
  console.log(huruf); // Outputnya : K
                      //             o
                      //             p 
                      //             i
}                     // Hasil aslinya : K ✔
                      //                 o ✔
                      //                 p ✔
                      //                 i ✔

                    // Outputnya : undefined
                    // Hasil aslinya : Uncaught TypeError: kopi is not iterable ✔
// for (let x of kopi) { console.log(x); }      

// Pertanyaan (jawab di komentar):

// 1. produk.nama memakai Dot Notation sedangkan produk[kunci] memakai Bracket Notation
// Kenapa produk.stok hasilnya undefined?, karena sebelumnya di dalam kode terdapat baris delete produk.stok;. Perintah delete menghapus properti stok dari objek produk.
// Ketika mencoba mengakses properti yang sudah dihapus (atau tidak ada sama sekali), JavaScript akan mengembalikan nilai undefined.
// 2. Karena fungsi belanja di dalam objek dompet tidak hanya mengembalikan angka, tetapi juga mengubah langsung nilai asli (state) di dalam objek tersebut melalui baris this.saldo -= jumlah.
// Meskipun hasil kembaliannya tidak ditampung ke dalam variabel, proses pengurangan saldo (this.saldo -= 10000) tetap dijalankan dan mengubah nilai saldo di dalam objek dompet secara permanen.
//  Apa yang dirujuk oleh this?, yang di rujuk oleh this adalah objek pemilik yang sedang memanggil method tersebut, yaitu objek dompet itu sendiri. Jadi, ketika dompet.belanja() dipanggil, this.saldo sama artinya dengan dompet.saldo.
// 3. Karena for...in dirancang khusus untuk meloop kunci (keys atau indeks) dari sebuah objek.
// Oleh karena itu, for...in memberikan indeksnya (0 dan 1), bukan isi nilainya. Jika ingin mengambil nilai di dalam array secara langsung, kita menggunakan for...of.
// Karena for...of hanya bisa digunakan untuk objek yang bisa di-iterasi (iterable) secara bawaan oleh JavaScript, contohnya seperti Array, String, Map, atau Set.
// Objek biasa ({}) seperti variabel kopi bukanlah iterable. JavaScript tidak tahu bagaimana cara mengurutkan atau meloop objek biasa menggunakan for...of secara langsung, sehingga memunculkan pesan error TypeError: kopi is not iterable.

          
// Langkah 2: Perbaiki 7 Kesalahan :

const warung = {
  nama: "Warung Senja",
  saldoKas: 100000,

  // Menambah kas. Seharusnya: setelah tambahKas(50000), saldoKas menjadi 150000
  tambahKas(jumlah) {
    this.saldoKas += jumlah; //FIX 1 : Menambahkan this. agar bisa merujuk ke properti milik objek warung
  },

  // Mengambil kas. Seharusnya mengembalikan sisa saldoKas
  ambilKas(jumlah) {
    this.saldoKas -= jumlah;
    return this.saldoKas; //FIX 2 : Menambahkan perintah return agar bisa untuk mengembalikan nilai sisa saldoKas
  },
};

warung.tambahKas(50000);
console.log(warung.saldoKas);
console.log(warung.ambilKas(30000));

// Key dengan tanda hubung. Seharusnya tercetak: 08123
const kontak = { "no-wa": "08123" };
console.log(kontak["no-wa"]); //FIX 3: Menambahkan Bracket Notation di no-wa, karena nama kunci menggunakan tanda hubung (-)

// Hapus kataSandi dari akun. Seharusnya tercetak: { nama: 'Rina' }
const akun = { nama: "Rina", kataSandi: "abc123" };
delete akun.kataSandi; //FIX 4: Menggunakan operator delete agar benar - benar menghapus properti dari objek.
console.log(akun);

// Cetak semua isi array, satu per baris. Seharusnya: Kopi, Teh, Roti
const menu = ["Kopi", "Teh", "Roti"];
for (let item of menu) { //FIX 5: Menggunakan for...of untuk mengakses elemen/isi nilai dari array.
  console.log(item);
}

// Cetak semua properti object. Seharusnya: nama: Warung Senja dan kota: Yogyakarta
const info = { nama: "Warung Senja", kota: "Yogyakarta" };
for (let kolom in info) { //FIX 6: Menggunakan for..in untuk melakukan perulangan pada properti objek biasa.
  console.log(kolom + ": " + info[kolom]);
}

// Daftar kunci object. Seharusnya: [ 'nama', 'kota' ]
console.log(Object.keys(info)); // FIX 7: Menggunakan Object.keys() bukan Object.key().

// Pertanyaan (jawab di komentar):

// 1. a. Salahnya kurang menambahkan this. , perbaikannya menambahkan this.
// b. Salahnya kurang menambahkan return, perbaikannya menambahkan return.
// c. Salahnya kurang menambahkan Bracket Notation dan tanda 2 petik, perbaikannya menambahkan Bracket Notation dan 2 petik.
// d. Salahnya memakai undefined, perbaikannya hapus undefined nya, lalu di tambahkan dengan delete didepan akun.kataSandi nya.
// e. Salah menggunakan for..in, perbaikannya menggunakan for..of
// f. Salah menggunakan for..if, perbaikannya menggunakan for..in
// g. Salahnya kurang menambahakan s di key nya, perbaikannya menambahkan s di kata key jadi nya keys
// 2. kesalahan yang menyebabkan error di console :
// a. bagian tambahKas(jumlah) { saldoKas += jumlah; } (Tanpa this)
// b. bagian console.log(kontak.no-wa);
// c. bagian for (let kolom of info) { ... }
// d. bagian console.log(Object.key(info));
// mana yang tidak error tetapi hasilnya salah :
// a. bagian ambilKas(jumlah) { this.saldoKas -= jumlah; } (Tanpa return)
// b. bagian akun.kataSandi = undefined;
// c. bagian for (let item in menu) { ... } pada Array
// 3. Karena akun.kataSandi = undefined hanya mengubah nilai di dalam properti tersebut menjadi undefined. 
// Tapi kotaknya (kuncinya) masih ada di dalam objek. Sedangkan delete akun.kataSandi menghapus secara total kunci 
// beserta nilainya dari objek tersebut.

// Langkah 3: Bikin Kasir Sendiri :

// PROGRAM KASIR KEDAI 
const kasirKedai = {
  nama: "Kedai Senja",
  kota: "Yogyakarta",
  saldoKas: 0,
  jamOperasional: { buka: "08:00", tutup: "21:00" },
  
  // Syarat 1: Minimal 5 menu dengan nama, kategori, harga, dan stok
  menu: [
    { nama: "Kopi Susu", kategori: "minuman", harga: 18000, stok: 10 },
    { nama: "Es Teh", kategori: "minuman", harga: 7500, stok: 15 },
    { nama: "Roti Bakar", kategori: "makanan", harga: 15000, stok: 4 }, // Stok tipis (< 5)
    { nama: "Nasi Goreng", kategori: "makanan", harga: 22000, stok: 8 },
    { nama: "Jus Jeruk", kategori: "minuman", harga: 12000, stok: 3 }  // Stok tipis (< 5)
  ],
  
  keranjang: [],

  // Syarat 2: Method cariHarga memakai for...of pada this.menu
  cariHarga(namaMenu) {
    for (let itemMenu of this.menu) {
      if (itemMenu.nama === namaMenu) {
        return itemMenu.harga;
      }
    }
    return 0; // Jika tidak ketemu
  },

  // Syarat 3: Method tambahKeKeranjang memakai for...of, cek stok & kurangi stok
  tambahKeKeranjang(namaMenu, jumlah) {
    for (let itemMenu of this.menu) {
      if (itemMenu.nama === namaMenu) {
        // Cek apakah stok mencukupi
        if (itemMenu.stok >= jumlah) {
          itemMenu.stok -= jumlah; // Kurangi stok menu
          this.keranjang.push({ nama: namaMenu, jumlah: jumlah });
          return true;
        } else {
          return false; // Stok tidak cukup
        }
      }
    }
    return false; // Menu tidak ditemukan
  },

  // Syarat 4: Method hitungSubtotal memakai for...of dan memanggil this.cariHarga
  hitungSubtotal() {
    let subtotal = 0;
    for (let item of this.keranjang) {
      let hargaSatuan = this.cariHarga(item.nama);
      subtotal += hargaSatuan * item.jumlah;
    }
    return subtotal;
  },

  // Syarat 5: Method hitungDiskon berdasarkan ketentuan nominal
  hitungDiskon(subtotal) {
    if (subtotal >= 100000) {
      return subtotal * 0.15; // Diskon 15%
    } else if (subtotal >= 50000) {
      return subtotal * 0.10; // Diskon 10%
    } else if (subtotal >= 25000) {
      return subtotal * 0.05; // Diskon 5%
    } else {
      return 0;
    }
  },

  // Syarat 6: Method cetakStruk, menggunakan for...of pada keranjang, hitung pajak 11% dari subtotal setelah diskon
  cetakStruk() {
    let subtotal = this.hitungSubtotal();
    let diskon = this.hitungDiskon(subtotal);
    let subtotalSetelahDiskon = subtotal - diskon;
    let pajak = subtotalSetelahDiskon * 0.11;
    let totalAkhir = subtotalSetelahDiskon + pajak;

    console.log("========================================");
    console.log(`          STRUK ${this.nama.toUpperCase()}        `);
    console.log("========================================");
    console.log("Daftar Pesanan:");
    
    let no = 1;
    for (let item of this.keranjang) {
      let hargaSatuan = this.cariHarga(item.nama);
      let totalHargaItem = hargaSatuan * item.jumlah;
      console.log(`${no}. ${item.nama} x${item.jumlah} - Rp ${totalHargaItem}`);
      no++;
    }
    
    console.log("----------------------------------------");
    console.log(`Subtotal            : Rp ${subtotal}`);
    console.log(`Diskon              : Rp ${diskon}`);
    console.log(`Pajak (11%)         : Rp ${pajak}`);
    console.log("========================================");
    console.log(`TOTAL AKHIR         : Rp ${totalAkhir.toFixed(2)}`);
    console.log("========================================");

    // Tambahkan total akhir ke saldoKas
    this.saldoKas += totalAkhir;
  },

  // Tambahan Method: menuMenipis() untuk mendeteksi stok < 5
  menuMenipis() {
    let listMenipis = [];
    for (let itemMenu of this.menu) {
      if (itemMenu.stok < 5) {
        listMenipis.push(itemMenu.nama);
      }
    }
    return listMenipis;
  }
};

// Syarat 7: Properti dinamis via bracket notation & operator in / delete
let kunciDinamis = "website";
kasirKedai[kunciDinamis] = "www.kedaisenja.com";
console.log("Apakah 'website' ada di kasirKedai?", kunciDinamis in kasirKedai); // true
console.log("Nilai website:", kasirKedai.website);
delete kasirKedai.website;
console.log("Apakah 'website' masih ada setelah delete?", kunciDinamis in kasirKedai); // false

// Syarat 8: for...in pada jamOperasional dan menu pertama
console.log("\n--- Pasangan Kunci: Nilai dari jamOperasional ---");
for (let kunci in kasirKedai.jamOperasional) {
  console.log(`${kunci}: ${kasirKedai.jamOperasional[kunci]}`);
}

console.log("\n--- Pasangan Kunci: Nilai dari menu[0] ---");
for (let kunci in kasirKedai.menu[0]) {
  console.log(`${kunci}: ${kasirKedai.menu[0][kunci]}`);
}

// Syarat 9: Object.keys dan Object.values dari jamOperasional
console.log("\nObject.keys jamOperasional:", Object.keys(kasirKedai.jamOperasional));
console.log("Object.values jamOperasional:", Object.values(kasirKedai.jamOperasional));

// Syarat 10: Hitung huruf kecil "a" pada kasirKedai.nama memakai for...of pada string
let jumlahHurufA = 0;
for (let huruf of kasirKedai.nama) {
  if (huruf === "a") {
    jumlahHurufA++;
  }
}
console.log(`\nJumlah huruf "a" kecil pada "${kasirKedai.nama}":`, jumlahHurufA);

// PENGUJIAN KASUS GAGAL (tambahKeKeranjang)

console.log("\n--- Uji Kasus Gagal ---");
// 1. Menu tidak ada
let gagalMenu = kasirKedai.tambahKeKeranjang("Burger", 1);
console.log("Tambah 'Burger' (Menu tidak ada):", gagalMenu); // false

// 2. Jumlah melebihi stok (Roti Bakar stoknya awal 4, diminta 10)
let gagalStok = kasirKedai.tambahKeKeranjang("Roti Bakar", 10);
console.log("Tambah 'Roti Bakar' x10 (Melebihi stok 4):", gagalStok); // false

// UJI 2 SKENARIO PEMBELIAN & MENU MENIPIS

// --- Skenario 1: Pembelian Sedang (Mendapat Diskon 5% karena subtotal >= 25k) ---
// Mengosongkan keranjang dulu jika perlu, lalu isi:
kasirKedai.keranjang = []; 
kasirKedai.tambahKeKeranjang("Es Teh", 2);       // 7500 x 2 = 15000
kasirKedai.tambahKeKeranjang("Roti Bakar", 2);   // 15000 x 2 = 30000 (Sisa stok Roti Bakar jadi 4 - 2 = 2)
// Subtotal = 45000 (>= 25000, diskon 5%)

console.log("\n");
kasirKedai.cetakStruk();
/*
  // Skenario 1: Es Teh x2, Roti Bakar x2
  // Hasil struk:
  // Subtotal: Rp 45000
  // Diskon  : Rp 2250
  // Pajak   : Rp 4702.5
  // Total   : Rp 47452.5
*/

// --- Skenario 2: Pembelian Besar (Mendapat Diskon 15% karena subtotal >= 100k) ---
kasirKedai.keranjang = []; // Reset keranjang untuk skenario 2
kasirKedai.tambahKeKeranjang("Nasi Goreng", 3);  // 22000 x 3 = 66000
kasirKedai.tambahKeKeranjang("Kopi Susu", 2);    // 18000 x 2 = 36000
// Subtotal = 102000 (>= 100000, diskon 15%)

console.log("\n");
kasirKedai.cetakStruk();
/*
  // Skenario 2: Nasi Goreng x3, Kopi Susu x2
  // Hasil struk:
  // Subtotal: Rp 102000
  // Diskon  : Rp 15300
  // Pajak   : Rp 9537
  // Total   : Rp 96237
*/

// --- Pengujian Method menuMenipis() Setelah Skenario Berjalan ---
let menuStokTipis = kasirKedai.menuMenipis();
console.log("\nMenu dengan stok menipis (< 5):", menuStokTipis);
/*
  // Hasil menuMenipis() setelah skenario:
  // [ 'Roti Bakar', 'Jus Jeruk' ]
  // Penjelasan: 
  // - "Roti Bakar" masuk karena pada Skenario 1 dibeli sebanyak 2 buah (stok awal 4 dikurangi 2 sisa 2).
  // - "Jus Jeruk" masuk karena stok awalnya memang sudah 3 (kurang dari 5) dan tidak tersentuh transaksi.
  // Hasil ini bisa berbeda jika urutan atau jumlah pembelian pada skenario mengubah stok item menu secara berbeda.
*/

// Pertanyaan (jawab di komentar):

// 1. perbedaan dot notation dan bracket notation? 
// Dot Notation: Digunakan untuk mengakses properti secara langsung dengan menuliskan nama propertinya apa adanya setelah tanda titik.
// Contoh Dot Notation dari kode: kasirKedai.nama atau kasirKedai.saldoKas. 
// Sedangkan Bracket Notation: Digunakan dengan membungkus nama properti di dalam tanda kurung siku menggunakan string.
// Contoh Bracket Notation dari kode: kasirKedai["jamOperasional"] atau kasirKedai[kunciDinamis] (untuk variabel dinamis).
// jelaskan kapan bracket notation wajib dipakai = Ketika nama properti memiliki spasi, tanda hubung (-), atau karakter khusus dan 
// Nama properti disimpan di dalam variabel atau bersifat dinamis.
// 2. Karena kata kunci this merujuk pada objek pemilik method itu sendiri (yaitu kasirKedai).
// Apa yang terjadi jika kata this dihapus = JavaScript akan mengira saldoKas adalah variabel biasa yang berdiri sendiri di dalam fungsi,
// bukan properti milik objek kasirKedai. Karena variabel tersebut tidak pernah dideklarasikan di dalam fungsi, program akan mengalami crash dan memunculkan ReferenceError.
// Buktikan dengan kode, lalu jadikan baris percobaan itu komentar dan tulis pesan errornya =
// Baris percobaan jika this dihapus:
// saldoKas += totalAkhir; 
// Pesan error yang muncul di console:
// ReferenceError: saldoKas is not defined
// 3. beda for...of dan for...in?
// for...of: Digunakan untuk mengambil nilai (value) secara langsung dari objek yang iterable (seperti Array atau String).
// Sedangkan for...in: Digunakan untuk mengambil kunci atau indeks (keys/index) dari sebuah objek atau array.
// Tunjuk satu tempat di kodemu yang memakai masing-masing :
// Penggunaan for...of pada this.keranjang (dalam method hitungSubtotal):
// Kenapa tidak bisa ditukar dengan for...in? Karean jika memakai for...in pada array keranjang, variabel perulangan (item) akan berisi nomor indeksnya (0, 1, 2), 
// bukan objek item pesanan itu sendiri. Akibatnya, pemanggilan item.nama akan gagal karena indeks angka tidak memiliki properti nama.
// Penggunaan for...in pada kasirKedai.jamOperasional:
// Kenapa tidak bisa ditukar dengan for...of? Karena Objek biasa (jamOperasional) bukan objek yang iterable. 
// Jika kita nekat memakai for...of di sini, JavaScript akan langsung memunculkan error TypeError: kasirKedai.jamOperasional is not iterable.
// 4. Karena for...of secara internal dirancang hanya untuk menelusuri struktur data yang memiliki mekanisme iterator bawaan (seperti Array, String, Map, atau Set).
// Tulis pesan errornya = TypeError: kasirKedai is not iterable
// 5.perbedaan Object.keys dan Object.values :
// Object.keys(): Berfungsi untuk mengambil daftar kunci (keys) dari sebuah objek dan mengembalikannya dalam bentuk array
// Contoh kodenya : Object.keys(kasirKedai.jamOperasional) menghasilkan:[ 'buka', 'tutup' ]
// Object.values(): Berfungsi untuk mengambil daftar nilai (values) dari sebuah objek dan mengembalikannya dalam bentuk array.
// Contoh kodenya : Object.values(kasirKedai.jamOperasional) menghasilkan:[ '08:00', '21:00' ]
// Karena Karena kedua method ini bertugas mengolah data dan memberikan hasilnya kembali kepada pemanggilnya agar bisa digunakan dalam perhitungan lanjutan
// Tanpa return, fungsi akan mengembalikan nilai undefined.
// sedangkan cetakStruk boleh tidak, karena tugas utama cetakStruk adalah menampilkan (mencetak) tampilan ke layar console, bukan menghasilkan nilai untuk diolah lagi.
// Apa yang terjadi jika hitungSubtotal hanya memakai console.log adalah perhitungan diskon dan total akhir akan menjadi NaN (Not a Number) dan merusak seluruh struktur total belanja.