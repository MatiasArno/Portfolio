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

    menuButtonEl.addEventListener("click", () => {

        controlMenu(menuEl, menuModalEl, middleBarEl);
    })
}

main();