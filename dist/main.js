let navbar = document.getElementById("mobile-menu");

let hamburger_button = document.getElementById("hamburger");
hamburger_button.addEventListener("click", () => {
    navbar.classList.toggle("hidden");
});

// Close menu is window size increases
window.onresize = () => {
    let viewportWidth = window.innerWidth;
    if (viewportWidth > 1050) {
        navbar.classList.add("hidden");
    }
};

// For Multi-Level
function showDropDOwn(multiLevelID) {
    let multiLevel = document.getElementById(multiLevelID);
    multiLevel.classList.toggle("hidden");
}