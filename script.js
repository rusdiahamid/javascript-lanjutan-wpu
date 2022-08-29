// Higher Order Function
// adalah function yang beroperasi pada function yang lain. baik itu digunakan dalam argument maupun sebagai return value
// Javascript memperlakukan function sebagai Object
// alasan mengapa menggunakan HOF
// 1. Abstraksi
// 2. functional Programming
// contoh higher order function
// Array.prototype.map();
// Array.prototype.filter();
// Array.prototype.reduce();

// filter = menyaring value array berdasarkan syarat tertentu dan menghasilkan array baru
// map = petakan setiap elemen array kedalam sebuah function dan menghasilkan array baru
// reduce = menggabungkan semua elemen dan menghasilkan array baru

// contoh implementasi
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// for
// const x = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     x.push(angka[i]);
//   }
// }

// console.log(x);

// filter function expression
// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });

// const newAngka = angka.filter((a) => a >= 3); //arrow function
// console.log(newAngka);

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map(function (a) {
//   return a * 2;
// });
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// reduce
// jumlahkan semua element pada array
// reduce memiliki 2 argument reduce((accumulator, currentValue))
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //0adalah nilai awal, bisa diubah
// console.log(newAngka);

// method chaining
// cari angka > 5
// kalikan 3
// jumlahkan

const hasil = angka
  .filter((a) => a > 5) // 8, 9, 9
  .map((a) => a * 3) // 24, 27, 27
  .reduce((a, b) => a + b); // 78

console.log(hasil);
