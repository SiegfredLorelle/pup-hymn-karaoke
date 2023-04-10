const root = document.querySelector(":root")
const colorSchemeBtn = document.querySelector("#color-scheme-button");

const darkModeIcon = document.querySelector("#dark-mode-icon");
const lightModeIcon = document.querySelector("#light-mode-icon");

let isDarkMode = true;
let colors;

let dark_mode_colors = {
    "--header-bg-color": "rgb(42, 42, 48)",
    "--header-hover-color": "rgb(50, 50, 58)",
    "--body-bg-color": "rgb(32, 33, 36)",
    "--body-bg-less-opacity-color": "rgba(32, 33, 36, 0.95)",
    "--contrast-color": "rgb(203, 203, 204)",
    "--contrast-hover-color": "rgba(172, 172, 172, 0.502)",
}

let light_mode_colors = {
    "--header-bg-color": "rgb(232, 226, 226)",
    "--header-hover-color": "rgba(212, 205, 205, 0.5)",
    "--body-bg-color": "rgb(245, 245, 245)",
    "--body-bg-less-opacity-color": "rgba(245, 245, 245, 0.875)",
    "--contrast-color": "rgb(61, 61, 61)",
    "--contrast-hover-color": "rgb(80, 80, 80)",


}

colorSchemeBtn.addEventListener("click", () => {

    if (isDarkMode) {
        colors = light_mode_colors;
        isDarkMode = false;
    }
    else {
        colors = dark_mode_colors;
        isDarkMode = true;
    }
    changeColorSchemeIcon();

    for (key in colors) {
        root.style.setProperty(key, colors[key]);
    }
});

function changeColorSchemeIcon() {
    if (isDarkMode) {
        darkModeIcon.style.visibility = "hidden";
        lightModeIcon.style.visibility = "visible";
    }
    else {
        darkModeIcon.style.visibility = "visible";
        lightModeIcon.style.visibility = "hidden";
    }
}




