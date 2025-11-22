document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('searchIcon');
    const searchBar = document.getElementById('searchBar');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navigationMenu = document.getElementById('navigationMenu');

    searchIcon.addEventListener('click', function (event) {
        event.preventDefault();
        searchBar.classList.toggle('active');
    });

    hamburgerMenu.addEventListener('click', function () {
        navigationMenu.classList.toggle('active');
    });
});