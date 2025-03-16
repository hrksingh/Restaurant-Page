import { updateContent, updateHeroClass, updateHeroImg } from "./page-load.js";
import contactHeroImgPath from "../img/contactHero.jpg";
import chantrelleImgPath from "../img/chantrelle.png";
import twoImgPath from "../img/two.jpg";

const contactHeroImg = `url(${contactHeroImgPath})`;
const contactContent = `
<div class="contact">
    <div class="header">contact Us</div>
    <div class="body">
        <div class="section">
            <div class="top">
                <div class="column">
                    <div class="subheader">
                        <h2>
                            Restaurant
                        </h2>
                    </div>
                    <a href="https://maps.app.goo.gl/M97poEkoukZ9vrM29">
                                1, North Sentinel Island<br />
                                A&D, IN
                    </a>
                    <p>
                        <a href="tel:5676456538">T:567-556-4555</a>
                    </p>
                    <div class="fill"></div>
                    <div class="subheader">
                        <h2>
                            Hours
                        </h2>
                        <p><strong>Wed – Sat</strong><p>
                        <p>
                            Lunch 11am – 2pm<br>
                            Dinner 5pm – 9pm
                        </p>
                        <p><strong>Sun</strong><p>
                        <p>
                            Brunch 10am – 2pm
                        </p>
                    </div>
                    <div class="fillTwo"></div>
                </div>
                <div class="column">
                    <div class="subheader">
                        <h2>
                            Holidays
                        </h2>
                    </div>
                    <p>
                        Christmas Eve<br>
                        Christmas Day<br>
                        New Year’s Day<br>
                        Memorial Day<br>
                        Fourth of July<br>
                        Labor Day<br>
                        Thanksgiving<br>
                    </p>
                </div>
                <div class="column">
                </div>
            </div>
            <div class="bot">
                <img class="one" src="${chantrelleImgPath}"></img>
            </div>
        </div>
        <div class="section">
            <img class="two" src="${twoImgPath}"></img>
            <div class="column">
                <div class="subheader">
                    <h2>General Inquiries</h2>
                </div>
                <a href="mailto:info@spicychilly.com">
                    info@spicychilly.com
                </a>
                <div class="fill">
                </div>
                <div class="subheader">
                    <h2>Media Inquiries</h2>
                </div>
                <p>Please contact us via email 
                    <a href="mailto:press@spicychilly.com">
                        press@spicychilly.com
                    </a>
                </p>
                <div class="fill">
                </div>
                <div class="subheader">
                    <h2>Events Inquiries</h2>
                </div>
                <p>Please contact our Events Manager via email
                    <a href="mailto:events@spicychilly.com">
                        events@spicychilly.com
                    </a>
                </p>
                <div class="fill">
                </div>
                <div class="subheader">
                    <h2>Corkage Fee</h2>
                </div>
                <p>
                    A $50 corkage fee applies per bottle 750 ml or less (2 bottle limit). A $100 fee applies per bottle larger than 750 ml (1 bottle limit).
                </p>
                <div class="fill">
                </div>
                <div class="subheader">
                    <h2>Cake Cutting Fee</h2>
                </div>
                <p>
                    Outside desserts will be charged a $5 cake cutting fee per person.
                </p>
            </div>
        </div>
        <div class="section"</div>
    </div>
</div>`;
const contactHeroClasses = ["hero", "contact"];

let contactButton = document.querySelectorAll(".contactButton");

contactButton.forEach((button) => {
  button.addEventListener("click", function () {
    updateContent(contactContent);
    updateHeroImg(contactHeroImg);
    updateHeroClass(...contactHeroClasses);
  });
});
