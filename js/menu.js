const hamburgerMenuBtn = document.querySelector("#hamburger-menu-button");
const menuNav = document.querySelector("#menu-nav");
const main = document.querySelector("main");

let IsMenuActive = false;


const mediaSize = window.matchMedia("(min-width: 600px)");


checkDisplaySize(mediaSize);
mediaSize.addEventListener("change", checkDisplaySize);


function checkDisplaySize(newSize) {
    if (newSize.matches) {
        console.log("BIG ENOUGH TO LISTEN TO HOVER");
        hamburgerMenuBtn.addEventListener("mouseenter", showMenuOnHover)
    }
    else {
        console.log("SMALL SO DO NOT TO LISTEN TO HOVER");
        hamburgerMenuBtn.removeEventListener("mouseenter", showMenuOnHover)
    }
}
    

function showMenuOnHover() {
    if (!IsMenuActive) {
        console.log("Hover Hamburger");
        restartMenuAnimation("slide-in-right");
    }
}



hamburgerMenuBtn.addEventListener("click", () => {
    if (IsMenuActive) {
        console.log("Click habmurger (close)");
        restartMenuAnimation("slide-in-left");
    }
    else {
        console.log("Click habmurger (open)");
        restartMenuAnimation("slide-in-right");
    }
})

main.addEventListener("mouseenter", () => {
    if (IsMenuActive) {
        restartMenuAnimation("slide-in-left");
        console.log("Hover main (close)");
    }
})


function restartMenuAnimation(animation) {
    menuNav.classList.forEach(cls => {
        menuNav.classList.remove(cls);
    });
    void menuNav.offsetHeight;
    menuNav.classList.add(animation);

    if ("slide-in-right" == menuNav.classList[0]) {
        IsMenuActive = true;
    }
    else {
        IsMenuActive = false;
    }
}