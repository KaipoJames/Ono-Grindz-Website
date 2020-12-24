const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let slideIndex = 1;

const displaySlides = (index) => {
    let i;
    const dots = document.querySelectorAll(".dot");
    const slides = document.querySelectorAll(".slide");
    if (index > slides.length) {
        slideIndex = 1;
    }
    if (index < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[slideIndex-1].classList.add("active");
    slides[slideIndex-1].style.display = "block";
}

const currentSlide = (id) => {
    displaySlides(slideIndex = id);
}

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
        let id = parseInt(dots[i].getAttribute("id"));
        currentSlide(id);
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        slideIndex--;
        displaySlides(slideIndex);
    });
}
if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        slideIndex++;
        displaySlides(slideIndex);
    });
}

displaySlides(slideIndex);