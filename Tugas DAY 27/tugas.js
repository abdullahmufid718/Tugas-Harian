// === LANGKAH 1 Perbaiki Kode Awal ===

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
   Karena TARIF_PAJAK ditolak karena dideklarasikan menggunakan 'const' yang nilainya bersifat tetap dan tidak boleh diubah. Sementara statusBuka dideklarasikan menggunakan 'let', sehingga nilainya fleksibel untuk diubah.

3. Mengapa "2020" + 1 menghasilkan "20201", dan apa perbaikan yang kamu pilih?
   Karena operator '+' pada tipe data string berfungsi sebagai penggabung teks (concatenation). Perbaikan yang dipilih adalah mengubah "2020" menjadi tipe number 2020 agar operator '+' melakukan penjumlahan matematis.
*/

// === LANGKAH 2: Benahi Struktur Data  ===

// Object usaha tunggal untuk mengelompokkan data identitas UMKM.
const usaha = {
    namaUsaha: "Coffee shop",
    pemilik: "Rey Abditiyo",
    kota: "Yogyakarta",
    tahunBerdiri: 2029,
    statusBuka: true,
    nomorWhatsApp: "08982677818",
    website: null
};

// Array of objects untuk menyimpan daftar produk beserta harganya.
const daftarProduk = [
    { nama: "Kopi Susu", harga: 18000 },
    { nama: "Es Teh Manis", harga: 7500 },
    { nama: "Roti Bakar", harga: 15000 },
    { nama: "Cireng Bumbu Rujak", harga: 12000 } // Produk tambahan
];

// Mencetak data usaha dengan notasi titik dan kurung siku.
console.log("Nama Usaha (Dot Notation): " + usaha.namaUsaha);
console.log("Kota Usaha (Bracket Notation): " + usaha["kota"]);

// Mencetak produk pertama dan terakhir menggunakan indeks array.
console.log("Produk Pertama: " + daftarProduk[0].nama);
console.log("Produk Terakhir: " + daftarProduk[daftarProduk.length - 1].nama);

/* 
JAWABAN PERTANYAAN LANGKAH 2:
1. Mengapa nomor WhatsApp lebih tepat disimpan sebagai string?
   Karena nomor telepon diawali angka '0'. Jika disimpan sebagai number, angka '0' di depan akan otomatis hilang oleh JavaScript. Selain itu, nomor telepon tidak digunakan untuk operasi matematika.

2. Mengapa website diberi null, bukan dibiarkan tanpa nilai? Apa bedanya null dan undefined?
   Karena 'null' diberikan secara sengaja untuk menandai bahwa properti website memang ada tetapi saat ini belum memiliki nilai. Bedanya, 'null' adalah nilai kosong yang disengaja oleh programmer, sedangkan 'undefined' berarti variabel yang belum diberi nilai sama sekali oleh JavaScript.

3. Mengapa daftarProduk[4] tidak berisi produk ke-4, dan apa yang tercetak?
   Karena indeks array di JavaScript dimulai dari angka 0. Produk ke-4 berada pada indeks ke-3 (`daftarProduk[3]`). Jika kita mengakses `daftarProduk[4]`, hasil yang tercetak adalah `undefined`.
*/

// === LANGKAH 3: Perhitungan dan Tampilan  ===

