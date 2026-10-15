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
for (let x of kopi) { console.log(x); }      

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

                         