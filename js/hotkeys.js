/* Listen to keyboard input from the user, 
if it matches a hotkey, then trigger it */
document.addEventListener("keydown", (pressed) => {
    switch (pressed.key.toLocaleLowerCase()) {
        case " ":
            pauseOrPlay();
            break;
        case "p":
            pauseOrPlay();
            break;
        case "m":
            muteOrUnmute();
            break;
        case "r":
            replay();
            break;
    }
    })