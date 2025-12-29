const songs = [
  {
    title: "Chuttamalle",
    artist: "Anirudh Ravichander",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://i.imgur.com/2nCt3Sbl.jpg"
  },
  {
    title: "Arabic Kuthu",
    artist: "Anirudh Ravichander",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://i.imgur.com/FKQZK8U.jpg"
  }
];

let index = 0;

const wave = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#aaa",
  progressColor: "#1db954",
  height: 80,
  barWidth: 3,
  responsive: true
});

function loadSong(i) {
  const song = songs[i];
  document.getElementById("title").innerText = song.title;
  document.getElementById("artist").innerText = song.artist;
  document.getElementById("cover").src = song.cover;
  wave.load(song.audio);
}

function togglePlay() {
  wave.playPause();
}

function nextSong() {
  index = (index + 1) % songs.length;
  loadSong(index);
}

function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
}

document.getElementById("themeToggle").onclick = () =>
  document.body.classList.toggle("light");

loadSong(index);
