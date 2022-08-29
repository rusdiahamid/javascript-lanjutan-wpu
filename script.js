// ambil semua element video
const videos = [...document.querySelectorAll('[data-duration]')];
// console.log(videos);
// Pilih Javascript lanjutan
let jsLanjut = videos
  .filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN'))
  // ambil durasi masing2 video
  .map((item) => item.dataset.duration)
  // ubah durasi menjadu int, ubah menit menjadi detik
  .map((waktu) => {
    // 11:18 -> [11,18]
    const parts = waktu.split(':').map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // jumlahkan semua detik
  .reduce((total, detik) => total + detik, 0);
// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut -= jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = (jsLanjut -= menit * 60);

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

const jmlVideo = videos.filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video.`;
