let lyrics = document.querySelector("#lyrics");
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

// Do the following when starting the page
lyrics.stop();
playIcon.style.visibility = "visible";
unmuteIcon.style.visibility = "visible";
replayIcon.style.visibility = "visible";

playButton.addEventListener("click", pauseOrPlay)
/* Pause or play both the audio and the lyrics */
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


/* Mute or unmute the volume of the audio */
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

/* Change the volume of the audio when the volume slider is changed */
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

/* Play the lyrics (marquee) when the intro is done */
function playLyrics() {
    if (isIntroDone) {
        lyrics.start();
    }
}

/* Reset the lyrics back from the start 
by removing and re-adding it to the DOM */
function restartLyrics() {
    let new_lyrics = lyrics.cloneNode(true);
    lyrics.replaceWith(new_lyrics);
    lyrics = new_lyrics
}

/* Checks if the intro of the audio is done */
audioPlayer.addEventListener("timeupdate", detectLyricsStart)
function detectLyricsStart() {
    if (audioPlayer.currentTime >= 12.0) {
        lyrics.style.visibility = "visible";
        isIntroDone = true;
        restartLyrics();
        audioPlayer.removeEventListener("timeupdate", detectLyricsStart);
    }
}

/* Reset the variables to default (same as their starting values) */
function resetVariables() {
    lyrics.style.visibility = "hidden";
    lyrics.stop();
    isIntroDone = false;
    audioPlayer.addEventListener("timeupdate", detectLyricsStart);

}

/* Resets the both the lyrics and the audio */
replayButton.addEventListener("click", replay);
function replay() {
    restartLyrics();
    resetVariables();
    audioPlayer.currentTime = 0.0;
    audioPlayer.play();
    playButton.style.display = "grid";

}


audioPlayer.addEventListener("ended", () => {
    resetVariables();
    playButton.style.display = "none";
});

/* Hides all the icon, and only show the active one */
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
/* Updates the progress bar 
based on how much audio is played relative to its full duration */
audioPlayer.addEventListener("timeupdate", () => {
    audioProgressBar.value = audioPlayer.currentTime / audioPlayer.duration;
})