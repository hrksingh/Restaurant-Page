import { updateContent, updateHeroClass, updateHeroImg } from "./page-load.js";
import eventsHeroImgPath from "../img/eventsHero.jpg";
import oysterImgPath from "../img/oyster.png";

const eventsHeroImg = `url(${eventsHeroImgPath})`;
const eventsContent = `
<div class="events">
    <div class="header">events</div>
    <p class="body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        <br><br>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
        <br><br>
        Eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam ex ea commodi consequatur.
        <br><br>
        Quis autem vel eum iure reprehenderit qui in ea voluptate, nisi ut aliquid velit esse quam nihil molestiae totam rem consequatur. Vel illum qui dolorem eum voluptas sit asperatur aut odit fugiat quo voluptas dolorem ipsum voluptatem sequi nesciunt quia dolor nulla pariatur.</p>
    <div class="fill"></div>
    <div class="subheader">
        <h2>For inquiries please contact our events manager via email
            <br>
            <br>
            <a href="mailto:events@greenhorn.com">events@greenhorn.com</a>
        </h2>
    </div>
    <img class="one" src="${oysterImgPath}">
    <div class="fill"></div>
</div>`;
const eventsHeroClasses = ["hero", "events"];

let eventsButton = document.querySelectorAll(".eventsButton");

eventsButton.forEach((button) => {
  button.addEventListener("click", function () {
    updateContent(eventsContent);
    updateHeroImg(eventsHeroImg);
    updateHeroClass(...eventsHeroClasses);
  });
});
