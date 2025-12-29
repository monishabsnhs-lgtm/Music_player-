const songs = [
  { title: "Chaudhary", file: "songs/chaudhary.mp3" },
  { title: "Afreen Afreen", file: "songs/afreen.mp3" },
  { title: "Yeh Tune Kya Kiya", file: "songs/yeh_tune.mp3" }
];

const songList = document.getElementById("songList");
const audio = document.getElementById("audio");
const currentSong = document.getElementById("currentSong");
const playBtn = document.querySelector(".play-btn");

let index = 0;

songs.forEach((song, i) => {
  const div = document.createElement("div");
  div.className = "song";
  div.innerText = song.title;
  div.onclick = () => playSong(i);
  songList.appendChild(div);
});

function playSong(i) {
  index = i;
  audio.src = songs[i].file;
  audio.play();
  currentSong.innerText = songs[i].title;
  playBtn.textContent = "⏸";
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
}

function nextSong() {
  index = (index + 1) % songs.length;
  playSong(index);
}

function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  playSong(index);
}

document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  document.querySelectorAll(".song").forEach(song => {
    song.style.display = song.innerText.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
});
