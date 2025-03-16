import { updateContent, updateHeroClass, updateHeroImg } from "./page-load.js";
import menuHeroImage from "../img/menuHero.jpg";

const menuHeroImg = `url(${menuHeroImage})`;
const menuContent = `
<div class="menu">
    <div class="container">
        <h1>Appetizers</h1>
        <ul>
            <li><strong>beet toast.</strong> beet, cashew cream cheese, fried leak, thyme. 9</li>
            <li><strong>smoked carrot toast.</strong> smoked carrot, cashew cream cheese, caper, pickled red onion, pea shoot, everything bread. 8</li>
            <li><strong>smoked potatoes.</strong> with pickled beets & dill cream. 10</li>
            <li><strong>truffle mac & cheese.</strong> cashew cream cheese with breadcrumb topping & white truffle oil. 9</li>
            <li><strong>local goat's milk cheese.</strong> goat milk, grilled bread, olive, gaia apple. 10 </li>
            <li><strong>mezze.</strong> chouse from 4-6 items: falafel hummus, vine toast. muhammara, beet & cream cheese on toast, stuffed dates. Served with olives, pickles, pita. 15-20</li>
        </ul>
    </div>
    <div class="container">
        <h1>Salads</h1>
        <ul>
            <li><strong>nancy's salad.</strong> greens, carrots, fennel, pistachio, crouton, capers, lemonette. 9</li>
            <li><strong>fattoush salad.</strong> tomato, bell pepper, cucumber, onion, toasted pita, sumac, mint. 10</li>
            <li><strong>tabbouleh salad.</strong> parsley, scallion, tomato, quinoa. 9</li>
            <li><strong>curried chicken salad.</strong> house made saitan, greens, tomato, curry, almond, cranberry, cucumber, bell pepper, carrot, lemonette. 11</li>
            <li><strong>chef salad.</strong> greens, house-made seitan, hazelnut, crouton, tempah bacon, avocado, pea shoot. 13</li>
        </ul>
    </div>
    <div class="container">
        <h1>Soups</h1>
        <ul>
            <li><strong>soup of the day.</strong> cup 7 | bowl 9</li>
        </ul>
    </div>
    <div class="container">
        <h1>Main</h1>
        <ul>
            <li><strong>falafel.</strong> falafel, hummus, tabbouleh, pickles, tahini, pita. Add smoked potatoes, pickled beets, or 2 vine leaves. 11 | 40 (family)</li>
            <li><strong>abc chicken.</strong> tempura seitan chicken, almond, brocolli, carrot, take-tamari sauce, rice. 14</li>
            <li><strong>ravioli.</strong> carrot cream cheese, chervil gremolata, pickled carrot. 20</li>
            <li><strong>bibimbop.</strong> garlic & ginger fried rice, shiitake, brocolli, tofu, pine nut, gochugaru sauce. 14</li>
            <li><strong>risotto.</strong> saffron, carrot, pea, crispy leak, carrot reduction. 13</li>
        </ul>
    </div>
    <div class="container">
        <h1>Desserts</h1>
        <ul>
            <li><strong>jane's cookies.</strong> 2.5</li>
            <li><strong>chocolate avocado mousse.</strong> 8</li>
        </ul>
    </div>
    <div class="container">
        <h1>Cocktails</h1>
        <ul>
            <li><strong>grandad's cough syrup.</strong> 9</li>
            <li><strong>famous dove.</strong> 9</li>
            <li><strong>moscow mule.</strong> 9</li>
            <li><strong>paloma.</strong> 9</li>
            <li><strong>vodka lemonade.</strong> 8</li>
            <li><strong>vodka soda.</strong> 7</li>
            <li><strong>negroni.</strong> 11</li>
            <li><strong>boulevardier.</strong> 11</li>
            </ul>
    </div>
    <div class="container">
        <h1>Beer & Cider</h1>
        <ul>
            <li><strong>brilliant blonde ail.</strong> 6</li>
            <li><strong>subtropic ipa.</strong> 7</li>
            <li><strong>blueberries in cream ale.</strong> 7</li>
            <li><strong>mighty swell spiked seltzer.</strong> 6</li>
            <li><strong>ciderboys.</strong> 6</li>
            <li><strong>wiehenstephan heffeweisebier.</strong> 7</li>
            <li><strong>scöfferhofer weizen.</strong> 7</li>
            <li><strong>3 floyd's zombie dust.</strong> 8</li>
            <li><strong>short's brewery soft parade.</strong> 7</li>
            <li><strong>fat head's.</strong> 7</li>
            <li><strong>jackie o's.</strong> 6</li>
            <li><strong>urban artifact the gadget.</strong> 7</li>
            <li><strong>sour gal.</strong> 7</li>
        </ul>
    </div>
    <div class="container">
        <h1>Wine</h1>
        <ul>
            <li><strong>Our wine list changes daily.</strong> Please ask your server for our full list of current select wines.</li>
        </ul>
    </div>
    <div class="container">
        <h1>Non-Alcholic</h1>
        <ul>
            <li><strong>Bottled Soda.</strong> 5</li>
            <li><strong>Zevia Soda.</strong> 3</li>
            <li><strong>Organic Lemonade.</strong> 4</li>
            <li><strong>Waterloo Sparkling Water.</strong> 2</li>
            <li>strong>Cold brew Coffee.</strong> 6</li>
            <li>strong>Hibiscus Tea.</strong> 4</li>
            <li>strong>Masala Chai with Coconut Milk.</strong> 5</li>
        </ul>
    </div>
</div>
`;
const menuHeroClasses = ["hero", "menu"];

let menuButton = document.querySelectorAll(".menuButton");

menuButton.forEach((button) => {
  button.addEventListener("click", function () {
    updateContent(menuContent);
    updateHeroImg(menuHeroImg);
    updateHeroClass(...menuHeroClasses);
  });
});
