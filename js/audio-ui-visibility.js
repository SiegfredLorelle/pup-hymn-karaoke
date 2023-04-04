const audioControls = document.querySelector("#audio-controls");
// Audio player is already initialized in the TODO: name.js
// const audioPlayer = document.querySelector("#audio-player");

let secsSinceLastAction = 0;
const secsToHideAudioControls = 3;
let audioControlsIsActive = true;
audioControls.classList.remove("slide-in");


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

actions.forEach( activity => {
    document.addEventListener(activity, () => {
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



