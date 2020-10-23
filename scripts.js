
let header = document.getElementById("header");
header.style.height = window.innerHeight + "px";

function changeTheme() {
    const stylesheet = document.getElementById("theme-sheets");

    if (stylesheet.getAttribute("href") == "./themes/dark-theme.css") {
        stylesheet.href = "./themes/light-theme.css";
    } else {
        stylesheet.href = "./themes/dark-theme.css";
    }
}