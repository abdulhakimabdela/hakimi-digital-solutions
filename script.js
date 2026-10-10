 
/* HAKIMI DIGITAL SOLUTIONS */

// 1. Select elements
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

// 2. Mobile menu
if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // 3. Close menu after clicking a link
    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
}