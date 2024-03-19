import pageLoad from "./page-load";
import menu from "./menu";
import aboutUs from "./about-us";
import home from "./home";
import createFooter from "./footer";

let currentPage = pageLoad();

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => {
    currentPage = menu(); // Render menu page
});

const aboutUsButton = document.getElementById("about-us");
aboutUsButton.addEventListener('click', () => {
    currentPage = aboutUs();  // Render About Us page
});

const homeButton = document.getElementById("home");
homeButton.addEventListener('click', () => {
    currentPage = home(); // Render home page
});

// Initial render
document.getElementById('content').appendChild(currentPage);

// Append footer
document.body.appendChild(createFooter());
