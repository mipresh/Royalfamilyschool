/* ===========================
   HERO SLIDER + TYPING TEXT
=========================== */

const slides = document.querySelectorAll(".slide");

const texts = [
  { title: "Inspiring Excellence in Education", desc: "Where students grow with purpose and passion." },
  { title: "Building Future Leaders", desc: "We nurture knowledge, discipline and creativity." },
  { title: "A Place to Learn and Grow", desc: "Royal Family Schools prepares your child for tomorrow." }
];

let index = 0;
let charIndex = 0;

const titleEl = document.getElementById("hero-title");
const descEl = document.getElementById("hero-desc");

function typeTitle() {
  if (charIndex < texts[index].title.length) {
    titleEl.textContent += texts[index].title.charAt(charIndex);
    charIndex++;
    setTimeout(typeTitle, 60);
  } else {
    setTimeout(typeDesc, 300);
  }
}

function typeDesc() {
  let i = 0;
  descEl.textContent = "";
  const text = texts[index].desc;

  const interval = setInterval(() => {
    descEl.textContent += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(interval);
  }, 30);
}

function showSlide() {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");

  titleEl.textContent = "";
  descEl.textContent = "";
  charIndex = 0;

  typeTitle();

  setTimeout(() => {
    index = (index + 1) % slides.length;
    showSlide();
  }, 6000);
}

showSlide();




/* ===========================
   CARD SLIDER
=========================== */

const track = document.querySelector(".card-track");
let position = 0;

function moveCards() {
  if (!track) return;

  const card = document.querySelector(".slide-card");
  if (!card) return;

  const cardWidth = card.offsetWidth + 30;
  position += cardWidth;

  if (position > track.scrollWidth - track.clientWidth) {
    position = 0;
  }

  track.style.transform = `translateX(-${position}px)`;
}

setInterval(moveCards, 3000);




/* ===========================
   SCROLL REVEAL
=========================== */

function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();


const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});


app.get("/api/test", (req, res) => {
  res.json({ message: "Backend working" });
});
