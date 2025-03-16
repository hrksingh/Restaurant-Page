import { updateContent, updateHeroClass, updateHeroImg } from "./page-load.js";
import homeHeroImgPath from "../img/homeHero.jpg";

export const homeHeroImg = `url(${homeHeroImgPath})`;
export const homeContent = ``;
export const homeHeroClasses = ["hero", "home"];

let homeButton = document.querySelectorAll(".homeButton");

homeButton.forEach((button) => {
  button.addEventListener("click", function () {
    updateContent(homeContent);
    updateHeroImg(homeHeroImg);
    updateHeroClass(...homeHeroClasses);
  });
});
