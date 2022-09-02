// Callback
// Sebuah funtion yang dikirm kan sebgai parameter pada function lain

// Synchronous callback
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(Callback) {
//   const nama = prompt('Masukan nama :');
//   Callback(nama);
// }

// tampilkanPesan(halo);

// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

// Asynchronous

// const mhs = [
//   {
//     nama: 'Rusdia Hamid',
//     nrp: 12181330,
//     email: 'rusdia.hamid@gmail.com',
//     jurusan: 'Sistem Informasi',
//     idDosenWali: 1,
//   },
//   {
//     nama: 'Sandhika Galih',
//     nrp: 12181230,
//     email: 'sandhikagalih@gmail.com',
//     jurusan: 'Teknik Informatika',
//     idDosenWali: 1,
//   },
//   {
//     nama: 'Doddy',
//     nrp: 12181331,
//     email: 'doddy@gmail.com',
//     jurusan: 'Sistem Informasi',
//     idDosenWali: 2,
//   },
// ];

// console.log('mulai');
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log('berakhir');

// Asynchronous Callback
// ajax vanilla JS

// function AJAX
function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  xhr.open('get', url);
  xhr.send();
}

console.log('mulai');
getDataMahasiswa(
  // URL
  'data/mahasiswa.json',
  // SUCCESS
  (result) => {
    const mhs = JSON.parse(result);
    mhs.forEach((m) => console.log(m.nama));
  },
  // ERROR
  () => {}
);
console.log('selesai');
