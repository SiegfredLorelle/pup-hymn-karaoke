const audioControls = document.querySelector("#audio-controls");

let secsSinceLastAction = 0.0;
const secsToHideAudioControls = 1.5;
let audioControlsIsActive = true;
let isPointerOverControls = false;


/* Count the seconds since the user's last action */
setInterval(checkLastAction, 250);
function checkLastAction() {
    secsSinceLastAction += 0.250;
    console.log(secsSinceLastAction);
    if (secsSinceLastAction >= secsToHideAudioControls && 
        !audioPlayer.paused && !isPointerOverControls) {
        restartAnimation("slide-out-down");
    }
}


/* Listens to the the following actions, then resets the seconds since 
the last action to 0, and show/slide-up the controls */
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

/* Show/slide-up the controls when the audio (and lyrics) is finished */
audioPlayer.addEventListener("ended", () => {
    restartAnimation("slide-in-up");
});

/* Trigger the animation 
by removing all classes and re-adding the animation class to trigger it */
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