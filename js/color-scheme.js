const root = document.querySelector(":root")
const colorSchemeBtn = document.querySelector("#color-scheme-button");

const darkModeIcon = document.querySelector("#dark-mode-icon");
const lightModeIcon = document.querySelector("#light-mode-icon");

let isDarkMode = true;
let colors;

let dark_mode_colors = {
    "--header-bg-color": "#2a2a30",
    "--header-hover-color": "#32323a",
    "--body-bg-color": "#202124",
    "--contrast-color": "#cbcbcc",
    "--contrast-hover-color": "#acacac80",
}

let light_mode_colors = {
    "--header-bg-color": "#E8E2E2",
    "--header-hover-color": "#d4cdcd80",
    "--body-bg-color": "#F5F5F5",
    "--contrast-color": "#3d3d3d",
    "--contrast-hover-color": "#505050",


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




