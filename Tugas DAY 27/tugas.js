// === LANGKAH 1 Perbaiki Kode Awal ===)

// FIX: Mengubah tipe data "2020" menjadi number 2020 agar dapat dilakukan operasi matematika.
const namaUsaha = "Kopi Senja";
const kotaUsaha = "Yogyakarta";
const tahunBerdiri = 2020; 
let TARIF_PAJAK = 0.11; // FIX: Diubah dari const menjadi let agar nilainya dapat diperbarui jika ada penyesuaian tarif pajak.

let statusBuka = true; // FIX: Menambahkan titik koma (;) di akhir instruksi.

// FIX: Menghapus deklarasi ganda `let website;` dan `let website = null;`, serta mengganti `var` dengan `let`.
let website = null;
let jumlahProduk = 3;

let produk = ["Kopi Susu", "Es Teh Manis", "Roti Bakar"];
let hargaProduk = [18000, 7500, 15000];

// FIX: Memperbaiki kesalahan huruf kapital pada namaUsaha dan console.log.
console.log(namaUsaha); 
console.log("Kota: " + kotaUsaha); 

// Hasil penjumlahan tahun berdiri sekarang benar secara matematis.
console.log("Tahun berdiri berikutnya: " + (tahunBerdiri + 1)); 

TARIF_PAJAK = 0.12; 

// FIX: Mengganti operator perkalian 'x' menjadi ' * '.
let hargaKopiSetelahPajak = hargaProduk[0] * (1 + TARIF_PAJAK); 
console.log("Harga kopi + pajak: " + hargaKopiSetelahPajak);

let hargaTermurah = Math.min(hargaProduk[0], hargaProduk[1], hargaProduk[2]);
console.log("Termurah: " + hargaTermurah);

// FIX: Mengakses elemen yang ada di dalam array (indeks ke-2 untuk produk ke-3, karena elemen ke-4/indeks 3 tidak ada).
console.log("Produk ke-3: " + produk[2]); 

// FIX: Menutup blok komentar multi-baris ( */ ) agar kode di bawahnya dapat dieksekusi.
/* Cetak status usaha */
console.log("Status buka: " + statusBuka);


/* 
========================================================================================================
CATATAN BUG LANGKAH 1
========================================================================================================
No | Baris/Bagian                | Jenis                       | Penyebab                                           | Perbaikan
---+-----------------------------+-----------------------------+----------------------------------------------------+--------------------------------------------------
1  | let statusBuka = true       | Tidak error tapi tidak rapi | Kurang titik koma (;) di akhir baris               | Menambahkan titik koma di akhir instruksi.
2  | let website; let website... | Error (SyntaxError)         | Deklarasi ganda variabel website dengan let        | Menghapus baris 'let website;' yang pertama.
3  | var jumlahProduk = 3        | Tidak error tapi melanggar  | Menggunakan 'var' yang dilarang pada aturan umum   | Mengganti 'var' menjadi 'let'.
4  | console.log(namausaha)      | Error (ReferenceError)      | Nama variabel 'namausaha' salah kapitalisasi       | Diubah menjadi 'namaUsaha'.
5  | Console.log(...)            | Error (TypeError)           | Objek 'Console' diawali huruf kapital              | Diubah menjadi 'console.log'.
6  | tahunBerdiri + 1            | Tidak error tapi salah      | "2020" bertipe string sehingga terjadi penggabungan| Mengubah "2020" menjadi tipe number 2020.
7  | TARIF_PAJAK = 0.12          | Error (TypeError)           | Mengubah nilai variabel konstan (const)            | Mengubah deklarasi TARIF_PAJAK menjadi let.
8  | hargaProduk[0] x ...        | Error (SyntaxError)         | Huruf 'x' digunakan sebagai operator perkalian     | Mengganti 'x' dengan simbol perkalian '*'.
9  | produk[3]                   | Tidak error tapi salah      | Mengakses indeks 3 pada array berisi 3 elemen      | Diubah ke produk[2] atau menambah elemen array.
10 | ( / * ) Cetak status usaha  | Error (SyntaxError)         | Komentar multi-baris tidak ditutup dengan ( / * )  | Menambahkan penanda penutup di akhir komentar multi-baris.

/*
JAWABAN PERTANYAAN LANGKAH 1:
1. Mengapa namausaha dan namaUsaha dianggap dua hal berbeda?
   Karena JavaScript bersifat case-sensitive, artinya huruf besar dan huruf kecil dianggap sebagai karakter yang berbeda dalam penamaan variabel.

2. Mengapa TARIF_PAJAK = 0.12 ditolak, sementara mengubah statusBuka diperbolehkan?
   TARIF_PAJAK ditolak karena dideklarasikan menggunakan 'const' yang nilainya bersifat tetap dan tidak boleh diubah. Sementara statusBuka dideklarasikan menggunakan 'let', sehingga nilainya fleksibel untuk diubah.

3. Mengapa "2020" + 1 menghasilkan "20201", dan apa perbaikan yang kamu pilih?
   Operator '+' pada tipe data string berfungsi sebagai penggabung teks (concatenation). Perbaikan yang dipilih adalah mengubah "2020" menjadi tipe number 2020 agar operator '+' melakukan penjumlahan matematis.
*/

