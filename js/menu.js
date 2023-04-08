const hamburgerMenuBtn = document.querySelector("#hamburger-menu-button");
const menuNav = document.querySelector("#menu-nav");
const main = document.querySelector("main");

let IsMenuActive = false;
console.log(main);


hamburgerMenuBtn.addEventListener("mouseenter", () => {
    
    if (!IsMenuActive) {
        restartMenuAnimation("slide-in-right");
    }
    // menuNav.style.visibility = "visible";
});

menuNav.addEventListener("mouseleave", () => {
    restartMenuAnimation("slide-in-left");
    // menuNav.style.visibility = "hidden";
});

hamburgerMenuBtn.addEventListener("click", () => {
    if (IsMenuActive) {
        restartMenuAnimation("slide-in-left");
    }
    else {
        restartMenuAnimation("slide-in-right");
    }
})

main.addEventListener("mouseenter", () => {
    console.log(IsMenuActive);
    if (IsMenuActive) {
        restartMenuAnimation("slide-in-left");
        // menuNav.style.visibility = "hidden";
        
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