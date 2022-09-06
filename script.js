// cara terhubung ke server

// JQuery
// $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=9f3131c1&s=avengers',
//   success: (movies) => console.log(movies),
// });

// xhr vanillaJS
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       console.log(JSON.parse(xhr.response));
//     } else if (xhr.status === 404) {
//       error();
//     }
//   }
// };
// xhr.open('get', 'http://www.omdbapi.com/?apikey=9f3131c1&s=avengers');
// xhr.send();

// JS Modern ada FETCH
// const movies = fetch('http://www.omdbapi.com/?apikey=9f3131c1&s=avengers');
// console.log(movies); //mengembalikan data bentuk promise

// fetch('http://www.omdbapi.com/?apikey=9f3131c1&s=avengers')
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// PROMISE
//  Object yang merepresentasikan keberhasilan atau kegagalan suatu even di masa yang akan datang
// janji -> di tepati / di ingkari
// states -> fullfilled / rejected / pending
// kondisi -callback -> resolve / reject / finally
// aksi -> then jika resolve / catch jika reject

// contoh 1
let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve('Janji ditepati');
//   } else {
//     reject('Ingkar Janji..');
//   }
// });

// console.log(janji1);
// janji1.then((response) => console.log('OK! :' + response)).catch((response) => console.log('NOT OK! : ' + response));

// contoh 2
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve('Ditepati setelah beberapa waktu!');
    }, 2000);
  } else {
    setTimeout(() => {
      reject('Tidak ditepati setelah beberapa waktu!');
    }, 2000);
  }
});

console.log('mulai');
// console.log(janji2.then(() => console.log(janji2)));
console.log(janji2.catch(() => console.log(janji2)));
janji2
  .finally(() => console.log('Selesai menunggu!'))
  .then((response) => console.log('OK! : ' + response))
  .catch((response) => console.log('NOT OK! : ' + response));
console.log('selesai');
