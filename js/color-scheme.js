const root = document.querySelector(":root")
const colorSchemeBtn = document.querySelector("#color-scheme-button");

let isDarkMode = true;

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


console.log(colorSchemeBtn);
console.log(getComputedStyle(root).getPropertyValue("--header-bg-color"));


colorSchemeBtn.addEventListener("click", () => {
    console.log("Changing color scheme");
});




