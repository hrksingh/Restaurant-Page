import "./style.css";
import './modules/page-load.js';
import './modules/about.js';
import './modules/menu.js';
import './modules/contact.js';
import './modules/events.js';

const buttons = document.querySelectorAll(".topNavCenter button");
const homeButton = document.querySelector(".homeButton");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    buttons.forEach((b) => b.classList.remove("active"));

    // Add 'active' class to the clicked button
    button.classList.add("active");
  });
});

//hamburger button//

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".topNavCenter");
const navLinks = document.querySelectorAll(".topNavCenter button");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("open");
  hamburger.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
});

// Close menu when any link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("open");
    hamburger.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
  });
});

homeButton.addEventListener("click", () => {
  buttons.forEach((b) => b.classList.remove("active"));
  navMenu.classList.remove("active");
  hamburger.classList.remove("open");
  hamburger.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
});
