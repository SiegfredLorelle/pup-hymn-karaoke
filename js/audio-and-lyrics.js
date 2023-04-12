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


/* Pause both the audio and the lyrics when the page is not visible */
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState == "hidden") {
        pause();
    }
});


/* Pause or play both the audio and the lyrics */
playButton.addEventListener("click", pauseOrPlay)
function pauseOrPlay() {
    if (audioPlayer.paused) {
        play();
    }
    else {
        pause();
    }
}

/* Pause both audio and lyrics */
function pause() {
    audioPlayer.pause();
    lyrics.stop();
    ChangeIcon(playIcon, playIcons);
}

/* Play both audio and lyrics */
function play() {
    audioPlayer.play();
    playLyrics();
    ChangeIcon(pauseIcon, playIcons);
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
    ChangeIcon(pauseIcon, playIcons);
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
}

/* Hide the play/pause button when the audio ended */
audioPlayer.addEventListener("ended", () => {
    resetVariables();
    playButton.style.display = "none";
});

/* Show the play/pause button when the audio is played */
audioPlayer.addEventListener("play",() => {
    playButton.style.display = "grid";
})

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