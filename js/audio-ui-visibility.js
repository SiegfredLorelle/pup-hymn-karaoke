const audioControls = document.querySelector("#audio-controls");
// Audio player is already initialized in the TODO: name.js
// const audioPlayer = document.querySelector("#audio-player");

let secsSinceLastAction = 0.0;
const secsToHideAudioControls = 1.5;
let audioControlsIsActive = true;
let isPointerOverControls = false;


setInterval(incSecsSinceLastAction, 250);

function incSecsSinceLastAction() {
    secsSinceLastAction += 0.250;
    console.log(secsSinceLastAction);
    if (secsSinceLastAction >= secsToHideAudioControls && 
        !audioPlayer.paused && !isPointerOverControls) {
        restartAnimation("slide-out-down");
    }
}


actions = [
    "mousedown",
    "mousemove",
    "keydown",
    "scroll",
    "touchstart",
]

actions.forEach(action => {
    document.addEventListener(action, () => {
        secsSinceLastAction = 0.0;
        restartAnimation("slide-in-up");
    });
});


audioPlayer.addEventListener("ended", () => {
    restartAnimation("slide-in-up");
});

function restartAnimation(animation) {
    if (animation == "slide-out-down" && audioControlsIsActive || 
        animation == "slide-in-up" && !audioControlsIsActive) {

            audioControls.classList.forEach(cls => {
            audioControls.classList.remove(cls);
        });

        void audioControls.offsetHeight;
        audioControls.classList.add(animation);

        if (animation == "slide-out-down") {
            audioControlsIsActive = false;
        }
        else {
            audioControlsIsActive = true;
        }
    }
}



// Checks if the mouse pointer is hovering over the controls
audioControls.addEventListener("mouseenter", () => {
    isPointerOverControls = true;
});
audioControls.addEventListener("mouseleave", () => {
    isPointerOverControls = false;
});