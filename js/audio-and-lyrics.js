let lyrics = document.querySelector("#lyrics");
// const lyricsText = lyrics.innerHTML


const audioPlayer = document.querySelector("#audio-player");

const playButton = document.querySelector("#play-button");
const replayButton = document.querySelector("#replay-button");
const muteButton = document.querySelector("#mute-button");

const playIcon = document.querySelector("#play-icon");
const pauseIcon = document.querySelector("#pause-icon");
const playIcons = [playIcon, pauseIcon]

const replayIcon = document.querySelector("#replay-icon");

const unmuteIcon = document.querySelector("#unmute-icon");
const muteIcon = document.querySelector("#mute-icon");
const volumeIcons = [unmuteIcon, muteIcon]
const volumeSlider = document.querySelector("#volume-slider");
let prevVolume = 0.5;

const audioProgressBar = document.querySelector("#audio-progress");

let isIntroDone = false


lyrics.stop();
playIcon.style.visibility = "visible";
unmuteIcon.style.visibility = "visible";
replayIcon.style.visibility = "visible";

playButton.addEventListener("click", pauseOrPlay)

function pauseOrPlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playLyrics();
        ChangeIcon(pauseIcon, playIcons);
    }
    else {
        audioPlayer.pause();
        lyrics.stop();
        ChangeIcon(playIcon, playIcons);
    }
}


muteButton.addEventListener("click", muteOrUnmute)

function muteOrUnmute() {
    if (volumeSlider.value == volumeSlider.min) {
        volumeSlider.value = prevVolume;
    }
    else {
        prevVolume = volumeSlider.value;
        volumeSlider.value = volumeSlider.min;
    }
    changeVolume();
}

volumeSlider.addEventListener("input", changeVolume);


function changeVolume() {
    audioPlayer.volume = volumeSlider.value;
    if (volumeSlider.value == volumeSlider.min) {
        ChangeIcon(muteIcon, volumeIcons);
    }
    else {
        ChangeIcon(unmuteIcon, volumeIcons);

    }
}

function playLyrics() {
    if (isIntroDone) {
        lyrics.start();
    }
}

function restartLyrics() {
    let new_lyrics = lyrics.cloneNode(true);
    lyrics.replaceWith(new_lyrics);
    lyrics = new_lyrics
    // isIntroDone = false;
}

audioPlayer.addEventListener("timeupdate", detectLyricsStart)

function detectLyricsStart() {
    if (audioPlayer.currentTime >= 12.0) {
        lyrics.style.visibility = "visible";
        isIntroDone = true;
        // playLyrics();
        restartLyrics();
        audioPlayer.removeEventListener("timeupdate", detectLyricsStart);
        // audioPlayer.addEventListener("timeupdate", detectLyricsEnd);

    }
}

// function detectLyricsEnd() {
//     if (audioPlayer.currentTime >= 108.0) {
//         lyrics.style.visibility = "hidden";
//         audioPlayer.removeEventListener("timeupdate", detectLyricsEnd);

//     }
// }

function resetVariables() {
    lyrics.style.visibility = "hidden";
    lyrics.stop();
    isIntroDone = false;
    audioPlayer.addEventListener("timeupdate", detectLyricsStart);

}

replayButton.addEventListener("click", () => {
    restartLyrics();
    resetVariables();
    audioPlayer.currentTime = 0.0;
    audioPlayer.play();
    playButton.style.display = "grid";
});


audioPlayer.addEventListener("ended", () => {
    // lyrics.style.visibility = "hidden";
    resetVariables();
    // lyrics.stop();
    // isIntroDone = false;
    // audioPlayer.addEventListener("timeupdate", detectLyricsStart);
    // ChangeIcon(replayIcon, playIcons);
    playButton.style.display = "none";
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




// audioPlayer.addEventListener("play", () => {
//     if (playButton.style.display != "grid") {
//         playButton.style.display = "grid";
//     }
// });



audioPlayer.addEventListener("timeupdate", () => {
    audioProgressBar.value = audioPlayer.currentTime / audioPlayer.duration;
})