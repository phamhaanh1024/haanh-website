let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
    sidebar.classList.toggle('show'); // Toggle the visibility of the sidebar
};

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};

// ABOUT ANIMATION

document.addEventListener("DOMContentLoaded", function() {
    var aboutCircle = document.querySelector(".about-circle");
    var aboutImg = document.querySelector(".about-img");
    var aboutContent = document.querySelector(".about-content");

    window.addEventListener("scroll", function() {
        var aboutPosition = document.querySelector(".about").offsetTop;
        var windowHeight = window.innerHeight;
        var scrollPosition = window.scrollY || window.pageYOffset;

        if (scrollPosition > aboutPosition - windowHeight / 2) {
            aboutCircle.style.opacity = 1;
            aboutCircle.style.transform = "translateX(0)";
            aboutImg.style.opacity = 1;
            aboutImg.style.transform = "translateX(0)";
            aboutContent.style.opacity = 1;
            aboutContent.style.transform = "translateX(0)";
        }
    });
});
// REMOVE SIDEBAR

const navLink = document.querySelectorAll('.sidebar__link')

const linkAction = () => {
    const navMenu = document.getElementById('sidebar')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show');
    menuIcon.classList.remove('fa-xmark'); // Remove the 'fa-xmark' class
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// SKILL REACT
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


// DARK/LIGHT THEME