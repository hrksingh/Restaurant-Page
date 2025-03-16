import { homeContent, homeHeroImg, homeHeroClasses } from "./home.js";

let heroImg = document.querySelector("#heroImg");
let content = document.querySelector("#content");

export function updateContent(newContent = ``) {
  content.innerHTML = newContent;
}

export function updateHeroClass(...newHeroClass) {
  heroImg.className = "";
  heroImg.classList.add(...newHeroClass);
}

export function updateHeroImg(newHeroImg = ``) {
  heroImg.style.backgroundImage = newHeroImg;
}

content.innerHTML = homeContent;
heroImg.style.backgroundImage = homeHeroImg;
heroImg.classList.add(...homeHeroClasses);
