document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var closeToggler = document.querySelector('.close-icon-container button');
    var menu = document.getElementById('navbarSupportedContent');

    // Function to explicitly open or close the menu
    function openMenu() {
        menu.classList.add('show-menu');
    }

    function closeMenu() {
        menu.classList.remove('show-menu');
    }

    closeToggler.addEventListener('click', function(event) {
        event.stopPropagation();
        closeMenu();
    });

    // Toggle the menu when the navbar toggler is clicked
    navbarToggler.addEventListener('click', function(event) {
        // Prevent the click from being propagated to the document
        event.stopPropagation();

        if (menu.classList.contains('show-menu')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !navbarToggler.contains(event.target)) {
            closeMenu();
        }
    });

    var imgContainers = document.querySelectorAll('.img-container');

    imgContainers.forEach(function(container) {
        var imgSrc = container.getAttribute('data-src');
        if (imgSrc) {
            container.style.backgroundImage = 'url(' + imgSrc + ')';
        }
    });

});