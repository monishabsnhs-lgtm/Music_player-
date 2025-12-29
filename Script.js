const songs = [
    {
        title: "Song One",
        artist: "Artist One",
        src: "music/song1.mp3",
        cover: "images/cover1.jpg"
    },
    {
        title: "Song Two",
        artist: "Artist Two",
        src: "music/song2.mp3",
        cover: "images/cover2.jpg"
    }
];

let index = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");

function loadSong(i) {
    title.textContent = songs[i].title;
    artist.textContent = songs[i].artist;
    cover.src = songs[i].cover;
    audio.src = songs[i].src;
}

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    index = (index + 1) % songs.length;
    loadSong(index);
    audio.play();
}

function prevSong() {
    index = (index - 1 + songs.length) % songs.length;
    loadSong(index);
    audio.play();
}

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

loadSong(index);
