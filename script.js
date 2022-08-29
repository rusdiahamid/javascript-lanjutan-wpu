// Konsep this pada arrow function

// constructor function
// this mengacu pada nama Object
// const Mahasiswa = function () {
//   this.nama = 'Rusdia Hamid';
//   this.umur = 25;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, saya ${this.umur} tahun`);
//   };
// };

// const rusdia = new Mahasiswa();

// arrow function
// kita tidak bisa mengubah semua function menjadi arrow function
// construct tidak bisa diubah ke arrow
// arrow function dia menyimpan context 'this'

// const Mahasiswa = function () {
//   this.nama = 'Rusdia Hamid';
//   this.umur = 25;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, saya ${this.umur} tahun`);
//   };
// };

// const rusdia = new Mahasiswa();

// Object Literal
// this akan mengacu pada lexcial scope

// const mhs1 = {
//   nama: 'Rusdia Hamid',
//   umur: 25,
//   //   sayHello: function () {
//   //     console.log(`Halo, nama saya ${this.nama}, saya ${this.umur} tahun`);
//   //this pada function expression mengacu pada lexical scope / keluar sekali dr fn
//   // },
//   sayHello: () => {
//     console.log(`Halo, nama saya ${this.nama}, saya ${this.umur} tahun`);
//   },
//   //   karena arrow function tidak mngenal konsep this, dia mencari this keluar sampai ke windows
// };

// const Mahasiswa = function () {
//   this.nama = 'Rusdia Hamid';
//   this.umur = 25;
//   function expression tidak alan kena hoisting
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, saya ${this.umur} tahun`);
//   };

// ini function declaration akan di hoisting
// jadi this tidak mengacu pada Object
//   diubah jadi arrow function agar mencari this pada scope diatasnya
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };
// const rusdia = new Mahasiswa();

// Penerapan
const box = document.querySelector('.box');
box.addEventListener('click', function () {
  let satu = 'size';
  let dua = 'caption';
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  // setTimeout menggunakan arrow function agar bisa mengambil this dr atas
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
