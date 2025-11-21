// main.js 파일
const menuLinks = document.querySelectorAll(".header__menu a, .home__contact");

menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const scrollToId = link.getAttribute("href");
    const targetSection = document.querySelector(scrollToId);
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

const arrowUp = document.querySelector(".arrow-up");

arrowUp.addEventListener("click", (event) => {
  event.preventDefault();
  const scrollToId = arrowUp.getAttribute("href");
  const targetSection = document.querySelector(scrollToId);
  targetSection.scrollIntoView({
    behavior: "smooth",
  });
});

const greetingTitle = document.querySelector(".home__title");
const now = new Date();
const currentHour = now.getHours();

const userName = "Young";

let greetingText = "";

if (currentHour >= 5 && currentHour < 12) {
  greetingText = "좋은 아침입니다";
} else if (currentHour >= 12 && currentHour < 18) {
  greetingText = "좋은 오후입니다";
} else {
  greetingText = "좋은 저녁입니다";
}

greetingTitle.innerHTML = `${greetingText}!!<br /><strong class="home__title--strong">${userName}</strong> 입니다.`;

const themeToggleBtn = document.querySelector("#theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
