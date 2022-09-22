function changeMenuStyleAccordingUrl(currentUrl, menuLogoEl, menuEl, menuLinksEl) {

    if (currentUrl.includes("contact")) {

        menuEl.style.backgroundColor = "rgba(255, 255, 255, 0.54)";
        menuLogoEl.style.color = "black";
        menuLinksEl.forEach(item => item.style.color = "rgb(67, 67, 67)");
    }
}

function controlMenu(menuEl, menuModalEl, middleBarEl) {

    if(menuEl.style.height != "100vh") {
        
        menuEl.style.height = "100vh";
        menuEl.style.backgroundColor = "rgba(255, 255, 255, 0.36)";
        menuEl.style.borderRadius = "0 0 0 54px";
        menuModalEl.style.display = "flex";
        middleBarEl.style.flexGrow = "9";
        middleBarEl.style.backgroundColor = "#dfe6e99d";
        middleBarEl.style.margin = "1.8px 0";


    } else {

        menuEl.style.height = "81px";
        menuEl.style.backgroundColor = "rgba(255, 255, 255, 0.18)";
        menuEl.style.borderRadius = "0";
        menuModalEl.style.display = "none";
        middleBarEl.style.flexGrow = "1";
        middleBarEl.style.backgroundColor = "#ffeaa3";
        middleBarEl.style.margin = "4.5px 0";

    }
}

function main() {

    const menuEl = document.querySelector(".menu");
    const menuButtonEl = document.querySelector(".menu__detail");
    const menuModalEl = document.querySelector(".menu__modal");
    const middleBarEl = document.querySelector(".menu__middle-bar");
    const currentUrl = window.location.href;
    const menuLogoEl = document.querySelector(".menu__logo");
    const menuLinksEl = document.querySelectorAll(".menu__links");

    changeMenuStyleAccordingUrl(currentUrl, menuLogoEl, menuEl, menuLinksEl);

    menuButtonEl.addEventListener("click", () => {

        controlMenu(menuEl, menuModalEl, middleBarEl);
    });
}

main();