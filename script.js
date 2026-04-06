// SLIDESHOW IMAGES
const images = [
  "assets/images/slide1.jpg",
  "assets/images/slide2.jpg",
  "assets/images/slide3.jpg"
];

// MOTIVATIONAL QUOTES
const quotes = [
  "Success is built daily.",
  "Dream big. Act now.",
  "Consistency wins."
];

let i = 0;

function changeSlide() {
  document.getElementById("slide").src = images[i];
  document.getElementById("quote").innerText = quotes[i];

  i = (i + 1) % images.length;
}

// Change every 3 seconds
setInterval(changeSlide, 3000);

// SCROLL ANIMATION
const sections = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const pos = sec.getBoundingClientRect().top;

    if (pos < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});
