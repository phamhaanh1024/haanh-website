// NAVBAR
document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử cần thiết
    var navToggle = document.getElementById('nav-toggle');
    var navMenu = document.getElementById('nav-menu');

    // Thêm sự kiện click cho nút toggle
    navToggle.addEventListener('click', function() {
        // Toggle class 'show' trên phần tử menu
        navMenu.classList.toggle('show');
    });

    // Lấy tất cả các mục cha có lớp 'nav__item' để thêm sự kiện click
    var navItems = document.querySelectorAll('.nav__item');

    // Loop qua từng mục và thêm sự kiện click
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Kiểm tra xem mục có mục con hay không
            var subMenu = this.querySelector('.nav__sub-menu');

            if (subMenu) {
                // Nếu có mục con, toggle class 'show' để hiển thị hoặc ẩn mục con
                subMenu.classList.toggle('show-sub-menu');
            }
        });
    });
});

// Show menu 

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ADD BLUR HEADER
const blurlHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') :
        header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

// SHOW SCROLL UP
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') :
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)