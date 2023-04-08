const hamburgerMenuBtn = document.querySelector("#hamburger-menu-button");
const menuNav = document.querySelector("#menu-nav");
const main = document.querySelector("main");

console.log(main);


hamburgerMenuBtn.addEventListener("mouseenter", () => {
    menuNav.style.visibility = "visible";
});

menuNav.addEventListener("mouseleave", () => {
    menuNav.style.visibility = "hidden";
});

hamburgerMenuBtn.addEventListener("click", ShowOrHideMenu)

main.addEventListener("mouseenter", () => {
    if (menuNav.style.visibility == "visible") {
        menuNav.style.visibility = "hidden";
    }
})

function ShowOrHideMenu() {
    if (menuNav.style.visibility == "visible") {
        menuNav.style.visibility = "hidden";
    }
    else {
        menuNav.style.visibility = "visible";
    }
}