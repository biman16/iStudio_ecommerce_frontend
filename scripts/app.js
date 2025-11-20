console.log("E-Commerce Website Loaded");
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navigationMenu = document.querySelector('.navigation-menu');

    hamburgerMenu.addEventListener('click', () => {
        navigationMenu.classList.toggle('active');
    });
});