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