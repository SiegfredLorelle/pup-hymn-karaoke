const audioPlayer = document.querySelector("#audio-player");
const lyrics = document.querySelector("#lyrics");


lyrics.stop();


audioPlayer.addEventListener("play", () => {
    lyrics.start();
})
audioPlayer.addEventListener("pause", () => {
    lyrics.stop();
})






