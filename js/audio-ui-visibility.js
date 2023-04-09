const audioControls = document.querySelector("#audio-controls");
// Audio player is already initialized in the TODO: name.js
// const audioPlayer = document.querySelector("#audio-player");

let secsSinceLastAction = 0;
const secsToHideAudioControls = 2;
let audioControlsIsActive = true;


setInterval(incSecsSinceLastAction, 1000);

function incSecsSinceLastAction() {
    secsSinceLastAction++;
    if (secsSinceLastAction >= secsToHideAudioControls && !audioPlayer.paused) {
        restartAnimation("slide-out");
    }
}


actions = [
    "mousedown",
    "mousemove",
    "keydown",
    "scroll",
    "touchstart",
]

actions.forEach (action => {
    document.addEventListener(action, () => {
        secsSinceLastAction = 0;
        restartAnimation("slide-in");
    });
});


audioPlayer.addEventListener("ended", () => {
    restartAnimation("slide-in");
});

function restartAnimation(animation) {
    if (animation == "slide-out" && audioControlsIsActive || 
        animation == "slide-in" && !audioControlsIsActive) {

            audioControls.classList.forEach(cls => {
            audioControls.classList.remove(cls);
        });

        void audioControls.offsetHeight;
        audioControls.classList.add(animation);

        if (animation == "slide-out") {
            audioControlsIsActive = false;
        }
        else {
            audioControlsIsActive = true;
        }
    }
}

audioControls.addEventListener("mouseenter", () => {
    console.log("HERE");
    secsSinceLastAction = 0;
});



// audio



