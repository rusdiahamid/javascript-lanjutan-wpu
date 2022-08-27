// Destructuring Function

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// cara biasa harus mengembalikan array
// tambahkan index di akhir untuk nebanplkan value
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(jumlah, kali);

// dest
// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// return value tambah

// urutan harus sama dengan function
// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
// console.log(bagi);

// agar urutan tidak berpengaruh gunakan object pada return value

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
// console.log(kurang);

// Destructuring function Arguments
// function declaration biasa
const mhs1 = {
  nama: 'Rusdia Hamid',
  umur: 25,
  email: 'rusdia.hamid@gmail.com',
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

// function cetakMhs(mhs) {
//   return `Halo, nama saya ${mhs.nama} saya berumur ${mhs.umur} tahun`;
// }

// console.log(cetakMhs(mhs);

// destructuring
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama} saya berumur ${umur} tahun, dan niali uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));
