const music = document.getElementById("bg-music");
const volume = document.getElementById("volume-control");

let isPlaying = false;
let hideTimeout; // ⬅️ untuk kontrol timer

music.volume = 0.3;

function toggleMusic() {
  const btn = document.querySelector(".music-btn");

  if (isPlaying) {
    music.pause();
    btn.innerText = "🎵";
  } else {
    music.play();
    btn.innerText = "🔊";
  }

  isPlaying = !isPlaying;

  // tampilkan volume
  volume.classList.add("show");

  // reset timer kalau diklik lagi
  clearTimeout(hideTimeout);

  // sembunyikan setelah 3 detik
  hideTimeout = setTimeout(() => {
    volume.classList.remove("show");
  }, 3000);
}

// kontrol volume
volume.addEventListener("input", function () {
  music.volume = this.value;

  // setiap geser, reset timer juga
  clearTimeout(hideTimeout);

  hideTimeout = setTimeout(() => {
    volume.classList.remove("show");
  }, 3000);
});