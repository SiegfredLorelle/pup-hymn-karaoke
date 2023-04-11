const MenuBtn = document.querySelector("#menu-button");
const menuNav = document.querySelector("#menu-nav");
const main = document.querySelector("main");

let IsMenuActive = false;

const mediaSize = window.matchMedia("(min-width: 1080px)");



/* Listen to hover over menu button if the screen width is at least 1080px */
checkDisplaySize(mediaSize);
mediaSize.addEventListener("change", checkDisplaySize);

function checkDisplaySize(newSize) {
    if (newSize.matches) {
        MenuBtn.addEventListener("mouseenter", showMenuOnHover)
    }
    else {
        MenuBtn.removeEventListener("mouseenter", showMenuOnHover)
    }
}
    
/* Show/slide-in to the right the menu on hover over menu button */
function showMenuOnHover() {
    if (!IsMenuActive) {
        restartMenuAnimation("slide-in-right");
    }
}

/*Hide/slide-out to left the menu on hover over main (leaves menu or nav) */
main.addEventListener("mouseenter", () => {
    if (IsMenuActive) {
        restartMenuAnimation("slide-out-left");
    }
})

/* Toggle the menu when menu button is clicked */
MenuBtn.addEventListener("click", () => {
    if (IsMenuActive) {
        restartMenuAnimation("slide-out-left");
    }
    else {
        restartMenuAnimation("slide-in-right");
    }
})


/* Trigger the animation 
by removing all classes and re-adding the animation class to trigger it */
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