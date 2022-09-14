// ASYNC AWAIT
// fungsi yang berjalan secara asynchronous
// menghasilkan (imlisit) Promise
// cara penulisanny a seperti sychronous function (function biasa)

// sebuah ascync function dapat memiliki keyword await dialamnya untuk memberhentikan semnetara eksekusi fungsinya sambil menunggu prmoisenya selesai

// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('selesai');
//   }, 2000);
// });

// console.log(coba); //mengasilkan pending
// coba.then(() => console.log(coba)); //selesai di eksekusi

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve('selesai');
      }, 2000);
    } else {
      reject('Kelamaan!');
    }
  });
}

// const coba = cobaPromise();
// coba.then(() => console.log(coba)).catch(() => console.log(coba));

// async
async function cobaAsynch() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}

cobaAsynch();
