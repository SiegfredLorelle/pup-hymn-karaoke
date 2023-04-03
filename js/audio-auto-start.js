const audioPlayer = document.querySelector("#audio-player");
const lyrics = document.querySelector("#lyrics");


lyrics.stop();




audioPlayer.addEventListener("timeupdate", startAtTwelve);


function startAtTwelve() {
    if (audioPlayer.currentTime >= 12.0) {
        lyrics.start();
        audioPlayer.addEventListener("play", playLyrics);
        audioPlayer.addEventListener("pause", stopLyrics);
        audioPlayer.removeEventListener("timeupdate", startAtTwelve);
    }
}

function playLyrics() {
    lyrics.start();
}
function stopLyrics() {
    lyrics.stop();
}

audioPlayer.addEventListener("ended", () => {
    lyrics.loop++;
    stopLyrics();
    audioPlayer.removeEventListener("play", playLyrics);
    audioPlayer.removeEventListener("pause", stopLyrics);
    audioPlayer.addEventListener("timeupdate", startAtTwelve);
});








