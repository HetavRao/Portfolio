const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

const slider = document.querySelector('.card-slider');

function scrollLeft() {
    slider.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollRight() {
    slider.scrollBy({ left: 200, behavior: 'smooth' });
}

// Optional: Add event listeners for buttons if you create them
