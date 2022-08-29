// Spread Operator
// di notasikan dengan ...
// memecah iterable menjadi single element
// iteable object: string, array, arguments/nodeLiST, TypedArray, Map, Set, User-defined Iterables

// const mhs = ['Sandhika', 'Rusdia', 'Doddy'];
// console.log(mhs); //menampikan isi array
// console.log(...mhs); //spread operator memecah isi array menamilkan isi
// console.log(...mhs[0]); //memecah string

// contoh penggunaan
//menggabungkan 2 array atau lebih
// const mhs = ['Sandhika', 'Rusdia', 'Doddy'];
// const dosen = ['Ade', 'Hendra', 'Wanda'];
// const orang = [...mhs, 'Aji', ...dosen]; //gabung 2 array jadi 1
// // const orang = [mhs, dosen]; //array didalam array
// console.log(orang);

// meng-copy array

// cara gagal
// const mhs = ['sandika', 'Rusdia'];
// const mhs1 = mhs;
// mhs[0] = 'Jaja';
// console.log(mhs);

// spread
// const mhs = ['sandika', 'Rusdia'];
// const mhs1 = [...mhs];
// mhs1[0] = 'Jaja';
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');
// cara lama
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }

// console.log(mhs);

// map
// spread megubah nodeList menjadi Array
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

// nama
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join('');
console.log(huruf);
nama.innerHTML = huruf;
