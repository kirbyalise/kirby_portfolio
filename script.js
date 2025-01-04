document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();  // Prevent click from bubbling to document
        this.classList.toggle('active');
        navMenu.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('show');
        }
    });

    // Prevent menu from closing when clicking inside it
    navMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});