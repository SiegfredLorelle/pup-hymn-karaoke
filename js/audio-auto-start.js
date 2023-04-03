const lyrics = document.querySelector("#lyrics");
const audioPlayer = document.querySelector("#audio-player");
const playButton = document.querySelector("#play-button");
const muteButton = document.querySelector("#mute-button");

let isIntroDone = false


lyrics.stop();

playButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playLyrics();
    }
    else {
        lyrics.stop();
        audioPlayer.pause();
    }
})


function playLyrics() {
    console.log(isIntroDone);
    if (isIntroDone) {
        lyrics.start();
    }
}

audioPlayer.addEventListener("timeupdate", detectLyricsStart)

function detectLyricsStart() {
    if (audioPlayer.currentTime >= 12.0) {
        isIntroDone = true;
        playLyrics();
        audioPlayer.removeEventListener("timeupdate", detectLyricsStart)
    }
}



audioPlayer.addEventListener("ended", () => {
    lyrics.loop++;
    lyrics.stop();
    isIntroDone = false;
    audioPlayer.addEventListener("timeupdate", detectLyricsStart);
});









