for (let i = 10; i >= 5; i--) {
  console.log(i);
}
console.log("Mulai!");
// Output: 10, 9, 8, 7, 6, 5, Mulai!

let total = 0;

for (let i = 20; i <= 30; i++) {
  total += i;
}

console.log("Total:", total); // Output: Total: 275

const buah = ["Mobil", "Motor", "Sepeda", "Skater", "Skateboard"];

for (let i = 2; i < buah.length; i++) {
  console.log(i + 3 + ".", buah[i]);
}
// Output:
// 5.Sepeda
// 6.Skater
// 7.Skateboard

let angkaRahasia = 7;
let tebakan = 0;
let percobaan = 0;

while (tebakan !== angkaRahasia) {
  percobaan++;
  tebakan = Math.floor(Math.random() * 10) + 1; // Angka acak 1-10
  console.log("Percobaan ke-" + percobaan + ": menebak angka", tebakan);
}

console.log(
  "Berhasil menebak angka",
  angkaRahasia,
  "dalam",
  percobaan,
  "percobaan.",
);

 let konfirmasi;

 do {
   konfirmasi = prompt("Ketik 'ya' untuk melanjutkan:");
 } while (konfirmasi !== "ya");

 console.log("Pengguna telah mengkonfirmasi. Melanjutkan proses...");

 for (let i = 1; i <= 100; i++) {
   if (i === 10) {
     console.log(
       "Target ditemukan pada posisi ke-" + i + ". Pencarian dihentikan.",
     );
     break;
   }
   console.log("Memeriksa posisi ke-" + i);
 }
// Output:
// Memeriksa posisi ke-1
// Memeriksa posisi ke-2
// ... (hingga ke-9)
// Target ditemukan pada posisi ke-10. Pencarian dihentikan.
//

const nilai = [30, -75, 100, -43, 60, 77];

console.log("Nilai valid:");
for (let i = 0; i < nilai.length; i++) {
  if (nilai[i] < 0) {
    continue; // Lewati nilai negatif
  }
  console.log("-", nilai[i]);
}
// Output:
// Nilai valid:
// - 30
// - 100
// - 60
// - 77

const daftarNilai = [98, 50, 66, -3, 75, 40, 100, 0, 30];
let jumlah = 0;
let valid = 0;
let invalid = 0;

for (let i = 0; i < daftarNilai.length; i++) {
  const nilai = daftarNilai[i];

  // Lewati nilai yang tidak valid (di luar rentang 0–100)
  if (nilai < 0 || nilai > 100) {
    console.log("Nilai tidak valid dilewati:", nilai);
    invalid++;
    continue;
  }

  jumlah += nilai;
  valid++;
}

const rataRata = jumlah / valid;

console.log("---");
console.log("Total data    :", daftarNilai.length);
console.log("Data valid    :", valid);
console.log("Data tidak valid:", invalid);
console.log("Rata-rata     :", rataRata.toFixed(2));
// Output:
// Nilai tidak valid dilewati: -3
// ---
// Total data    : 9
// Data valid    : 8
// Data tidak valid: 1
// Rata-rata     : 57.38