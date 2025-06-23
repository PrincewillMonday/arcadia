// Navigation Bar Code
const menuToggle = document.getElementById('menu-toggle');
const closeToggle = document.getElementById('close-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-toggle');

// Open Menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.add('active');
});

// Close Menu with Close Icon
closeToggle.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.classList.remove('active');
});

// Close Menu When Any Nav Link is Clicked
navItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Read More Code
const readMoreClick = document.querySelectorAll(".read-more");

readMoreClick.forEach(readMoreBtn => {
    readMoreBtn.addEventListener("click", () => {
        const moreText = readMoreBtn.previousElementSibling.querySelector(".more-text");

        if (moreText.style.display === "inline") {
            moreText.style.display = "none";
            readMoreBtn.textContent = "Read More";
        } else {
            moreText.style.display = "inline";
            readMoreBtn.textContent = "Read Less";
        }
    });
});
