// Destructuring Variable / Assignment

// Destructuring Array
// const perkenalan = ['Halo', 'nama', 'saya', 'Rusdia Hamid'];

// Cara biasa mengambil nilai array
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// console.log(nama);
// console.log(salam);

// cara dest assignment
// petakan nilai dengan nama variable bebas
// bisa skip dengan mengosongkan tanpa mengahpus titik
// const [salam, satu, , nama] = perkenalan;
// console.log(satu);

// swap item
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);

// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// biasa mengembalikan array
// const a = coba();
// console.log(a);

// dest assignment
// const [a, b] = coba();
// console.log(b);

// rest parameter
// const [a, ...values] = [1, 2, 3];
// console.log(a);
// console.log(values);

// Destructuring Object
// buat variable dengan kurung kurawal dengan isi nama key
// const mhs = {
//   nama: 'Rusdia Hamid',
//   umur: 25,
// };

// const { nama, umur } = mhs;
// console.log(nama);

// Assignment tanpa deklarasi
// diganti dengan kurung
// ({ nama, umur } = { nama: 'Rusdia Hamid', umur: 25 });

// console.log(umur);
// console.log(nama);

// membuat nama lain atau alias
// const mhs = {
//   nama: 'Rusdia Hamid',
//   umur: 25,
// };

// const { nama: n, umur: u } = mhs;
// console.log(n);

// memberikan nilai value
// const mhs = {
//   nama: 'Rusdia Hamid',
//   umur: 25,
//   email: 'rusdia.hamid@gmail.com',
// };

// const { nama: n, umur: u, email: e = 'default@gmail.com' } = mhs;
// console.log(e);

// Rest Parameter
// const mhs = {
//   nama: 'Rusdia Hamid',
//   umur: 25,
//   email: 'rusdia.hamid@gmail.com',
// };

// const { nama, ...values } = mhs;
// console.log(values);

// mengambil field pada object, setelah dikirim sebagai parameter
const mhs = {
  id: 1234,
  nama: 'Rusdia Hamid',
  umur: 25,
  email: 'rusdia.hamid@gmail.com',
};

function getIdMhs({ id, nama }) {
  return nama;
}

console.log(getIdMhs(mhs));
