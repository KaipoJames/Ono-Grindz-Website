import { myTranslations } from "./translations.js"

const logo = document.querySelector(".logo");
const select = document.querySelector("#language-select");
// document.addEventListener("DOMContentLoaded", () => {
//     console.log(window.location.pathname);
// });

console.log(myTranslations);

if (logo) {
    logo.addEventListener("click", () => { window.location.href = "/src/index.html"; console.log("clicked logo"); });
}

// <--- Detect a change in the drop down language Menu ---> 
document.addEventListener("input", (event) => {
    //Check that this is the language-select select
    if (event.target.id !== "language-select") return;
    if (event.target.value === "ENG") {
        // Load English Translations
        console.log("English Translations");
    }
    if (event.target.value === "POR") {
        // Load Portuguese Translations
        console.log("Portuguese Translations");
    }
    if (event.target.value === "HAW") {
        // Load Hawaiian Translations
        console.log("Hawaiian Translations");
    }
}, false);

