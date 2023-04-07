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
            // Restart Song
            break;
    }
    })


