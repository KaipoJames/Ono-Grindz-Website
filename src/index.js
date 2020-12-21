const logo = document.querySelector(".homeBtn");

if (logo) {
    logo.addEventListener("click", () => { window.location.href = "http://127.0.0.1:5500/src/index.html"; console.log("clicked logo"); });
}