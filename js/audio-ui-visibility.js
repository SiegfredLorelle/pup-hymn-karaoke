const audioControls = document.querySelector("#audio-controls");
// Audio player is already initialized in the TODO: name.js
// const audioPlayer = document.querySelector("#audio-player");

let secsSinceLastAction = 0;
const secsToHideAudioControls = 3;

setInterval(incSecsSinceLastAction, 1000);

function incSecsSinceLastAction() {
    secsSinceLastAction++;
    console.log(secsSinceLastAction);
    if (secsSinceLastAction >= secsToHideAudioControls && !audioPlayer.paused) {
        audioControls.style.visibility = "hidden";
    }
}


actions = [
    "mousedown",
    "mousemove",
    "keydown",
    "scroll",
    "touchstart",
]

actions.forEach( activity => {
    document.addEventListener(activity, () => {
        secsSinceLastAction = 0;
        audioControls.style.visibility = "visible";
    });
});


audioPlayer.addEventListener("ended", () => {
    audioControls.style.visibility = "visible";
});



