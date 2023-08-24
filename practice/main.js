const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const nuberOfSlides = slides.length;
let slideNumber = 0;

nextBtn.onclick = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideNumber++;

  if (slideNumber > nuberOfSlides - 1) {
    slideNumber = 0;
  }
  slides[slideNumber].classList.add("active");
};

prevBtn.onclick = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = nuberOfSlides - 1;
  }
  slides[slideNumber].classList.add("active");
};
// console.log(nextBtn);

// async function start() {
//   // const res = await fetch("https://team.mme-holding.uz/other/yandex-key");
//   // console.log(await res.json());
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json.completed));
// }

// start();
// for (let i = 1; i <= 1000; i++) {
//   console.log(`${i},dior`);
// }
