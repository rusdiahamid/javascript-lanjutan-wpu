// REST PARAMETER
// dinotasikan dengan ...
// ditulis di akhir parameter / untuk menampung argumen yg tidak ada parameter
// merepresetasikan argument pada function dengan jumlsh tidsk terbatas menjadi sebuah array

// function myFunc(...myArgs) {
//   //   return myArgs;
//   return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// menjumlahkan argument yang dikirim

// function jumlahkan(...angka) {
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total;

//   higher order function reduce
//   return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ['Rusdia', 'Sandhika', 'Erik', 'Doddy', 'Fajar'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(wakil);
// console.log(anggota);

// Object destructuring
// const team = {
//   pm: 'Rusdia',
//   frontend1: 'Sandhika',
//   frontend2: 'Doddy',
//   backend: 'Erik',
//   ux: 'Fajar',
//   devOps: 'Hendra',
// };

// const { pm, ...myTeam } = team;
// console.log(team);

// filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy('string', 1, 2, 'Sandhika', false, 10, true, 'Doddy'));
