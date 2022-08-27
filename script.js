// Arrow Function
// bentuk lebih ringkas dari Function Expression

// function expression
// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// };

// console.log(tampilNama('Rusdia Hamid'));

// arrow function
// satu bari tidak perlu pakai kurung
// banyak baris pakai kurung
// /jika hanya mengembakilan retur, return tidak perlu di tulis(implisit)

// const tampilNama = (nama) => `Halo, ${nama}`;

// console.log(tampilNama('Rusdia Hamid'));

// dua parameter
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}!`;
// };

// console.log(tampilNama('Rusdia Hamid', 'pagi'));

// tanpa parameter
// const tampilNama = () => 'Hello World!';

// console.log(tampilNama());

let mahasiswa = ['Sandhika Galih', 'Rusdia Hamid', 'Erik'];

// jika kita ingin menghitung jumlah hurup pada tiap mahasiswa dan mengembalikannya sebagai array

// function expression
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// arrow function
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// jika ingin mengembaliakn object
// jika nama property&nilai sama tulis satu saja
let jumlahHuruf = mahasiswa.map((nama) => ({ nama, jmlHuruf: nama.length }));

console.log(jumlahHuruf);
