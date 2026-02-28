let buah = ["apel", "jeruk", "mangga"];

let hasil = buah.pop();
console.log(hasil)
console.log(buah)

/*
Input:
buah = ["apel", "jeruk", "mangga"]

Output:
hasil = "mangga"
buah menjadi ["apel", "jeruk"]

Kegunaan:
Menghapus elemen terakhir dari array.
*/

let angka = [1,2,3,4,5];

let hasil2 = angka.slice(1,4);
console.log(hasil2)
console.log(angka)

/*
Input:
angka = [1,2,3,4,5]

Output:
hasil = [2,3,4]
angka tetap [1,2,3,4,5]

Kegunaan:
Mengambil sebagian data array tanpa merusak data asli.
*/

let warna = ["merah","biru","hijau"];

let hasil3 = warna.includes("biru");
console.log(hasil3)

/*
Input:
warna = ["merah","biru","hijau"]

Output:
hasil = true

Kegunaan:
Mengecek apakah suatu nilai ada di dalam array.
*/

let kata = ["Saya","belajar","JavaScript"];
let hasil4 = kata.join(" ");
console.log(hasil4)

/*
Input:
kata = ["Saya","belajar","JavaScript"]

Output:
hasil = "Saya belajar JavaScript"

Kegunaan:
Mengubah array menjadi string dengan pemisah tertentu.
*/


let angka2 = [10,20,30,40];

let hasil5 = angka2.indexOf(30);
console.log(hasil5)

/*
Input:
angka = [10,20,30,40]

Output:
hasil = 2

Kegunaan:
Mengetahui posisi indeks suatu nilai dalam array.
Jika tidak ada hasilnya = -1
*/

