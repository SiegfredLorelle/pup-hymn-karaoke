const lyrics = document.querySelector("#lyrics");
const audioPlayer = document.querySelector("#audio-player");

const playButton = document.querySelector("#play-button");
const muteButton = document.querySelector("#mute-button");

const playIcon = document.querySelector("#play-icon");
const pauseIcon = document.querySelector("#pause-icon");
const replayIcon = document.querySelector("#replay-icon");
const unmuteIcon = document.querySelector("#unmute-icon");
const muteIcon = document.querySelector("#mute-icon");

const playIcons = [playIcon, pauseIcon, replayIcon]
const volumeIcons = [unmuteIcon, muteIcon]

let isIntroDone = false


lyrics.stop();
playIcon.style.visibility = "visible";
unmuteIcon.style.visibility = "visible";

playButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playLyrics();
        ChangeIcon(pauseIcon, playIcons);

    }
    else {
        lyrics.stop();
        audioPlayer.pause();
        ChangeIcon(playIcon, playIcons);
    }
})


function playLyrics() {
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
    ChangeIcon(replayIcon, playIcons);
});

function ChangeIcon(iconToActivate, iconGroup) {
    for (icon of iconGroup) {
        if (icon == iconToActivate) {
            iconToActivate.style.visibility = "visible";
        }
        else {
            icon.style.visibility = "hidden";
        }
    }
}








